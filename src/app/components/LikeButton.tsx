import { useOptimistic } from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";

import { Article } from "@/generated/prisma/client";

import toggleLike from "../actions/articles/toggle-like";

interface LikeButtonProps {
  article: Article;
}

export default function LikeButton({ article }: LikeButtonProps) {
  const [optimisticLike, setOptimisticLike] = useOptimistic(
    article.isLiked,
    (currentState, newValue: boolean) => newValue
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
    <form action={handleToggleLike}>
      <button type="submit" className="cursor-pointer">
        {optimisticLike ? <FaHeart className="text-red-500" /> : <FaRegHeart />}
      </button>
    </form>
  );
}
