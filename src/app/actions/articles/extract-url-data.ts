"use server";

import { JSDOM } from "jsdom";

// 型定義
export interface ExtractedUrlData {
  title: string;
  siteName: string;
  description: string;
  siteUpdatedAt: string;
  thumbnail: string;
  url: string;
  content: string;
}

export type ExtractUrlDataResult =
  | { success: true; data: ExtractedUrlData }
  | { success: false; error: string };

// 定数
const CONTENT_SELECTORS = [
  "article",
  ".post-content",
  ".entry-content",
  ".content",
  ".post",
  "main",
  ".article-body",
] as const;

const EXCLUDE_SELECTORS = "script, style, nav, header, footer, aside";

const CONTENT_MAX_LENGTH = 300;

const USER_AGENT =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36";

// ヘルパー関数: メタタグからコンテンツを取得
function getMetaContent(document: Document, property: string): string {
  const selectors = [
    `meta[property="${property}"]`,
    `meta[name="${property}"]`,
    `meta[property="og:${property}"]`,
    `meta[name="og:${property}"]`,
    `meta[property="twitter:${property}"]`,
    `meta[name="twitter:${property}"]`,
  ];

  const element = selectors.reduce<Element | null>((found, selector) => {
    return found || document.querySelector(selector);
  }, null);

  return element?.getAttribute("content") || "";
}

// ヘルパー関数: ページの本文コンテンツを取得
function getContent(document: Document): string {
  const element = CONTENT_SELECTORS.reduce<Element | null>(
    (found, selector) => {
      return found || document.querySelector(selector);
    },
    null
  );

  if (!element) {
    return "";
  }

  // 不要な要素を削除
  const excludeElements = element.querySelectorAll(EXCLUDE_SELECTORS);
  excludeElements.forEach((el) => el.remove());

  // テキストコンテンツを取得（最初のN文字）
  return element.textContent?.trim().slice(0, CONTENT_MAX_LENGTH) || "";
}

// メイン関数: URLからメタデータを抽出
export async function extractUrlData(
  formData: FormData
): Promise<ExtractUrlDataResult> {
  const url = formData.get("url") as string;

  try {
    // URLのバリデーション
    const parsedUrl = new URL(url);

    // HTMLを取得
    const response = await fetch(url, {
      headers: {
        "User-Agent": USER_AGENT,
      },
    });

    if (!response.ok) {
      return {
        success: false,
        error: `HTTPエラー: ${response.status} ${response.statusText}`,
      };
    }

    const html = await response.text();
    const dom = new JSDOM(html);
    const document = dom.window.document;

    // メタデータを抽出
    const data: ExtractedUrlData = {
      title:
        getMetaContent(document, "title") ||
        document.querySelector("h1")?.textContent?.trim() ||
        document.querySelector("title")?.textContent?.trim() ||
        "タイトルなし",
      siteName:
        getMetaContent(document, "site_name") ||
        document.querySelector("title")?.textContent?.split(" | ")[1]?.trim() ||
        parsedUrl.hostname,
      description:
        getMetaContent(document, "description") ||
        getMetaContent(document, "twitter:description") ||
        "",
      siteUpdatedAt:
        getMetaContent(document, "article:modified_time") ||
        getMetaContent(document, "article:published_time") ||
        document.querySelector("time")?.getAttribute("datetime") ||
        new Date().toISOString(),
      thumbnail: getMetaContent(document, "image"),
      url: url,
      content: getContent(document),
    };

    return {
      success: true,
      data,
    };
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "不明なエラーが発生しました";

    console.error("URL抽出エラー:", errorMessage, { url });

    return {
      success: false,
      error: errorMessage,
    };
  }
}
