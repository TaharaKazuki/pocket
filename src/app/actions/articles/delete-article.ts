"use server";

import { revalidatePath } from "next/cache";

import prisma from "@/lib/prisma";

async function deleteArticle(articleId: string) {
  try {
    await prisma.article.delete({
      where: {
        id: articleId,
      },
    });

    revalidatePath("/");
  } catch (error) {
    console.error("記事の削除に失敗しました。", error);
    return {
      success: false,
      errorMessage: "記事の削除に失敗しました。",
    };
  }
}

export default deleteArticle;
