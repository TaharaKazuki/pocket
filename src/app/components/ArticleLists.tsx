import { getPageTitle } from "@/lib/getPageTitle";
import { getWhereCondition } from "@/lib/getWhereCondition";

import ArticleCard from "./ArticleCard";
import { getArticles } from "../actions/articles/get-articles";

interface ArticleListsProps {
  params: {
    listtype?: string;
  };
}

async function ArticleLists({ params }: ArticleListsProps) {
  const listType = params.listtype || "default";

  const userId = "temp-user-123";
  const whereCondition = getWhereCondition(listType, userId);

  const dataResult = await getArticles(whereCondition);

  const pageTitle = getPageTitle(listType);

  if (!dataResult.success)
    return (
      <div className="w-full text-center">データを取得できませんでした。</div>
    );

  return (
    <div className="w-full px-4 lg:w-4/5">
      <div className="mb-4 flex justify-between">
        <h2 className="text-4xl font-bold">{pageTitle}</h2>
      </div>
      <hr />
      <div className="flex flex-col gap-4 p-4">
        {dataResult.data.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
    </div>
  );
}

export default ArticleLists;
