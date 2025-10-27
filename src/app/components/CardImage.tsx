import Image from "next/image";

interface CardImageProps {
  thumbnail: string | null;
}

function CardImage({ thumbnail }: CardImageProps) {
  return (
    <div className="relative h-full w-full">
      {thumbnail ? (
        <Image
          className="object-cover object-center md:object-contain md:object-top"
          src={thumbnail}
          alt="サムネイル画像"
          fill={true}
          priority
          sizes="300px"
        />
      ) : (
        <div className="flex h-40 w-full items-center justify-center rounded bg-gray-200">
          <span>サムネイル画像なし</span>
        </div>
      )}
    </div>
  );
}

export default CardImage;
