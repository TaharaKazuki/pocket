import Image from "next/image";
import { CiClock2 } from "react-icons/ci";
import { FaRegHeart, FaArchive } from "react-icons/fa";
import { FaRegTrashCan } from "react-icons/fa6";

async function ArticleLists() {
  return (
    <div className="w-full px-4 lg:w-4/5">
      {/* タイトル */}
      <div className="mb-4 flex justify-between">
        <h2 className="text-4xl font-bold">記事一覧</h2>
      </div>

      <hr />

      <div className="flex flex-col gap-4 p-4">
        {/* 記事データここから */}
        <div className="group relative border px-4 pt-4 pb-3 transition-colors hover:bg-gray-50">
          <div className="flex flex-col-reverse justify-between gap-8 md:flex-row">
            {/* 左側 （タイトル・デスクリプション等）*/}
            <div className="flex w-full flex-col md:w-3/5 lg:w-3/4">
              {/* タイトル部分 */}
              <div className="mb-4">
                <h3 className="mb-1 text-lg font-bold md:text-xl">
                  ServerActionsの使い方
                </h3>
                {/* サイトタイトル */}
                <span className="text-xs text-gray-400 md:text-sm">
                  sample site
                </span>
              </div>

              <div className="mb-4">
                {/* デスクリプション */}
                <p className="line-clamp-3 text-base text-gray-700">
                  この記事ではNext.jsのServerActionsの使い方について解説しています。
                </p>
              </div>
            </div>

            {/* 右側 （サムネ）*/}
            <div className="pointer-events-none aspect-video w-full md:aspect-3/2 md:w-2/5 lg:w-1/4">
              <div className="relative h-full w-full">
                <Image
                  className="object-cover object-center md:object-contain md:object-top"
                  src="/images/sampleImage1.jpg"
                  alt="サムネイル画像"
                  fill={true}
                  priority
                  sizes="300px"
                />
              </div>
            </div>
          </div>

          {/* 日時・アイコン */}
          <div className="mt-auto flex flex-col items-end justify-between md:flex-row">
            <div className="flex items-center">
              <CiClock2 className="mr-1" />
              <span>2025/04/12</span>
            </div>

            {/* アイコン */}
            <div className="relative z-20 mt-2 md:mt-6">
              <div className="flex items-center justify-start gap-5 text-xl md:justify-between">
                {/* お気に入りボタン */}
                <FaRegHeart />

                {/* アーカイブボタン */}
                <FaArchive />

                {/* デリートボタン */}
                <FaRegTrashCan />
              </div>
            </div>
          </div>
        </div>
        {/* 記事データここまで */}
      </div>
    </div>
  );
}

export default ArticleLists;
