import { FaRegTrashCan } from "react-icons/fa6";

import { Article } from "@/generated/prisma/client";

import deleteArticle from "../actions/articles/delete-article";

interface DeleteButtonProps {
  article: Article;
}

export default function DeleteButton({ article }: DeleteButtonProps) {
  const handleDelete = async () => {
    await deleteArticle(article.id);
  };
  return (
    <form
      action={handleDelete}
      onSubmit={(e) => {
        if (!confirm("この記事を削除しますか？")) {
          e.preventDefault();
        }
      }}
    >
      <button type="submit" className="cursor-pointer">
        <FaRegTrashCan />
      </button>
    </form>
  );
}
