"use server";

import prisma from "@/lib/prisma";

interface WhereCondition {
  userId: string;
  isLiked?: boolean;
  isArchived?: boolean;
}

export async function getArticles(whereCondition: WhereCondition) {
  try {
    const articles = await prisma.article.findMany({
      where: whereCondition,
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
