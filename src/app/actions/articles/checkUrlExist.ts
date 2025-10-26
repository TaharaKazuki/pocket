"use server";

import prisma from "@/lib/prisma";

export async function checkUrlExist(url: string) {
  const isExistsArticle = await prisma.article.findUnique({
    where: {
      url,
    },
  });

  return !!isExistsArticle;
}
