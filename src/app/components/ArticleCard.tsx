import Link from "next/link";

import { Article } from "@/generated/prisma/client";

import CardDate from "./CardDate";
import CardIcons from "./CardIcons";
import CardImage from "./CardImage";

interface ArticleCardProps {
  article: Article;
}

function ArticleCard({ article }: ArticleCardProps) {
  return (
    <div className="group relative border px-4 pt-4 pb-3 transition-colors hover:bg-gray-50">
      <Link href={article.url} target="_blank" rel="noopener noreferrer">
        <div className="flex flex-col-reverse justify-between gap-8 md:flex-row">
          <div className="flex w-full flex-col md:w-3/5 lg:w-3/4">
            <div className="mb-4">
              <h3 className="mb-1 text-lg font-bold md:text-xl">
                {article.title}
              </h3>

              <span className="text-xs text-gray-400 md:text-sm">
                {article.siteName}
              </span>
            </div>

            <div className="mb-4">
              <p className="line-clamp-3 text-base text-gray-700">
                {article.description}
              </p>
            </div>
          </div>

          <div className="pointer-events-none aspect-video w-full md:aspect-3/2 md:w-2/5 lg:w-1/4">
            <CardImage thumbnail={article.thumbnail} />
          </div>
        </div>

        <div className="mt-auto flex flex-col items-end justify-between md:flex-row">
          <CardDate siteUpdatedAt={article.siteUpdatedAt} />
          <div className="relative z-20 mt-2 md:mt-6">
            <CardIcons />
          </div>
        </div>
      </Link>
    </div>
  );
}

export default ArticleCard;
