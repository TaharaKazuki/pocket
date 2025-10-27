import { FaArchive } from "react-icons/fa";

import { Article } from "@/generated/prisma/client";

import toggleArchive from "../actions/articles/toggle-archive";

interface ArchiveButtonProps {
  article: Article;
}

export default function ArchiveButton({ article }: ArchiveButtonProps) {
  const handleToggleArchive = async () => {
    try {
      await toggleArchive(article.isArchived, article.id);
    } catch (error) {
      console.error("アーカイブの更新に失敗しました。", error);
    }
  };
  return (
    <form action={handleToggleArchive}>
      <button type="submit" className="cursor-pointer">
        {article.isArchived ? (
          <FaArchive className="text-red-500" />
        ) : (
          <FaArchive />
        )}
      </button>
    </form>
  );
}
