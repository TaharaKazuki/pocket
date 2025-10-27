"use server";

import prisma from "@/lib/prisma";

export async function getArticles() {
  try {
    const userId = "temp-user-123";

    const articles = await prisma.article.findMany({
      where: {
        userId,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return {
      success: true,
      data: articles,
    };
  } catch (error) {
    console.error("記事の取得に失敗しました。", error);
    return {
      success: false,
      data: [],
    };
  }
}
