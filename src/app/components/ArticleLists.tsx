import ArticleCard from "./ArticleCard";
import { getArticles } from "../actions/articles/get-articles";

async function ArticleLists() {
  const dataResult = await getArticles();

  if (!dataResult.success)
    return (
      <div className="w-full text-center">データを取得できませんでした。</div>
    );

  return (
    <div className="w-full px-4 lg:w-4/5">
      <div className="mb-4 flex justify-between">
        <h2 className="text-4xl font-bold">記事一覧</h2>
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
