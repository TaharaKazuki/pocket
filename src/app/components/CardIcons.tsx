"use client";

import { Article } from "@/generated/prisma/client";

import ArchiveButton from "./ArchiveButton";
import DeleteButton from "./DeleteButton";
import LikeButton from "./LikeButton";

interface CardIconsProps {
  article: Article;
}

function CardIcons({ article }: CardIconsProps) {
  return (
    <div className="flex items-center justify-start gap-5 text-xl md:justify-between">
      <LikeButton article={article} />
      {/* アーカイブボタン */}
      <ArchiveButton article={article} />
      {/* 削除ボタン */}
      <DeleteButton article={article} />
    </div>
  );
}

export default CardIcons;
