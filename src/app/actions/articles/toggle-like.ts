"use server";

import { revalidatePath } from "next/cache";

import prisma from "@/lib/prisma";

async function toggleLike(isLiked: boolean, articleId: string) {
  try {
    const reversedLiked = !isLiked;

    await prisma.article.update({
      where: {
        id: articleId,
      },
      data: {
        isLiked: reversedLiked,
      },
    });

    const result = isLiked
      ? "お気に入りから削除しました。"
      : "お気に入りに追加しました。";

    console.log(result);

    revalidatePath("/");

    return {
      success: true,
      errorMessage: undefined,
    };
  } catch (error) {
    console.error("お気に入りの更新に失敗しました。", error);
    return {
      success: false,
      errorMessage: "お気に入りの更新に失敗しました。",
    };
  }
}

export default toggleLike;
