import { FaRegHeart, FaArchive, FaHeart } from "react-icons/fa";
import { FaRegTrashCan } from "react-icons/fa6";

import { Article } from "@/generated/prisma/client";

import toggleLike from "../actions/articles/toggle-like";

interface CardIconsProps {
  article: Article;
}

function CardIcons({ article }: CardIconsProps) {
  const handleToggleLike = async () => {
    "use server";
    await toggleLike(article.isLiked, article.id);
  };

  return (
    <div className="flex items-center justify-start gap-5 text-xl md:justify-between">
      <form action={handleToggleLike}>
        <button type="submit" className="cursor-pointer">
          {article.isLiked ? (
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
