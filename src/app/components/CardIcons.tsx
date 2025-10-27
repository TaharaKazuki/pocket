"use client";

import { useOptimistic } from "react";
import { FaRegHeart, FaArchive, FaHeart } from "react-icons/fa";
import { FaRegTrashCan } from "react-icons/fa6";

import { Article } from "@/generated/prisma/client";

import toggleLike from "../actions/articles/toggle-like";

interface CardIconsProps {
  article: Article;
}

function CardIcons({ article }: CardIconsProps) {
  const [optimisticLike, setOptimisticLike] = useOptimistic(
    article.isLiked,
    (currentState: boolean, newValue: boolean) => newValue
  );

  const handleToggleLike = async () => {
    setOptimisticLike(!optimisticLike);
    try {
      await toggleLike(article.isLiked, article.id);
    } catch (error) {
      console.error("お気に入りの更新に失敗しました。", error);
    }
  };

  return (
    <div className="flex items-center justify-start gap-5 text-xl md:justify-between">
      <form action={handleToggleLike}>
        <button type="submit" className="cursor-pointer">
          {optimisticLike ? (
            <FaHeart className="text-red-500" />
          ) : (
            <FaRegHeart />
          )}
        </button>
      </form>
      {/* アーカイブボタン */}
      <FaArchive />
      {/* 削除ボタン */}
      <FaRegTrashCan />
    </div>
  );
}

export default CardIcons;
