"use server";

import prisma from "@/lib/prisma";

import { checkUrlExist } from "./checkUrlExist";

interface ArticleDataProps {
  title: string;
  siteName: string;
  description: string;
  siteUpdatedAt: string;
  thumbnail: string;
  url: string;
  content: string;
}

export async function saveArticle(
  articleData: ArticleDataProps,
  userId: string
) {
  const isDuplicate = await checkUrlExist(articleData.url);

  if (isDuplicate) {
    return {
      success: false,
      errorMessage: "このURLの記事は既に保存されています。",
    };
  }

  try {
    await prisma.article.create({
      data: {
        userId,
        ...articleData,
      },
    });
    return {
      success: true,
      errorMessage: undefined,
    };
  } catch (error) {
    console.error("記事の保存に失敗しました。", error);
    return {
      success: false,
      errorMessage: "記事の保存ができませんでした。",
    };
  }
}
