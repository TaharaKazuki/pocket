"use server";

import prisma from "@/lib/prisma";

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
  await prisma.article.create({
    data: {
      userId,
      ...articleData,
    },
  });
}
