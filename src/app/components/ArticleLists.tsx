import Image from "next/image";
import { CiClock2 } from "react-icons/ci";
import { FaRegHeart, FaArchive } from "react-icons/fa";
import { FaRegTrashCan } from "react-icons/fa6";

import { extractUrlData } from "../actions/articles/extract-url-data";

async function ArticleLists() {
  const dataResult = await extractUrlData(
    "https://yu-and-you.com/sigma1424mm/"
  );

  if (!dataResult.success)
    return (
      <div className="w-full text-center">データを取得できませんでした。</div>
    );

  const data = dataResult.data;

  return (
    <div className="w-full px-4 lg:w-4/5">
      {/* タイトル */}
      <div className="mb-4 flex justify-between">
        <h2 className="text-4xl font-bold">記事一覧</h2>
      </div>
      <hr />
      <div className="flex flex-col gap-4 p-4">
        <div className="group relative border px-4 pt-4 pb-3 transition-colors hover:bg-gray-50">
          <div className="flex flex-col-reverse justify-between gap-8 md:flex-row">
            <div className="flex w-full flex-col md:w-3/5 lg:w-3/4">
              <div className="mb-4">
                <h3 className="mb-1 text-lg font-bold md:text-xl">
                  {data.title}
                </h3>

                <span className="text-xs text-gray-400 md:text-sm">
                  {data.siteName}
                </span>
              </div>

              <div className="mb-4">
                <p className="line-clamp-3 text-base text-gray-700">
                  {data.description}
                </p>
              </div>
            </div>

            {/* 右側 （サムネ）*/}
            <div className="pointer-events-none aspect-video w-full md:aspect-3/2 md:w-2/5 lg:w-1/4">
              <div className="relative h-full w-full">
                <Image
                  className="object-cover object-center md:object-contain md:object-top"
                  src={data.thumbnail}
                  alt="サムネイル画像"
                  fill={true}
                  priority
                  sizes="300px"
                />
              </div>
            </div>
          </div>

          <div className="mt-auto flex flex-col items-end justify-between md:flex-row">
            <div className="flex items-center">
              <CiClock2 className="mr-1" />
              <span>
                {new Date(data.siteUpdatedAt).toLocaleDateString("sv-SE")}
              </span>
            </div>

            <div className="relative z-20 mt-2 md:mt-6">
              <div className="flex items-center justify-start gap-5 text-xl md:justify-between">
                <FaRegHeart />

                <FaArchive />

                <FaRegTrashCan />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArticleLists;
