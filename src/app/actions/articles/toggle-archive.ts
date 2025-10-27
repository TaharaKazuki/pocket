"use server";

import { revalidatePath } from "next/cache";

import prisma from "@/lib/prisma";

async function toggleArchive(isArchived: boolean, articleId: string) {
  try {
    const reversedArchived = !isArchived;

    await prisma.article.update({
      where: {
        id: articleId,
      },
      data: {
        isArchived: reversedArchived,
      },
    });

    revalidatePath("/");

    return {
      success: true,
      errorMessage: undefined,
    };
  } catch (error) {
    console.error("アーカイブの更新に失敗しました。", error);
    return {
      success: false,
      errorMessage: "アーカイブの更新に失敗しました。",
    };
  }
}

export default toggleArchive;
