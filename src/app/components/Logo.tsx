import Image from "next/image";
import Link from "next/link";

function Logo() {
  return (
    <div className="h-full">
      <Link href="/" className="flex h-full items-center">
        <div className="relative mr-1 aspect-square h-full">
          <Image
            src="/logo.png"
            alt="サイトロゴ"
            sizes="80px"
            fill={true}
            className="object-contain"
          />
        </div>
        <h1 className="hidden text-xl font-bold md:block">Pocket</h1>
      </Link>
    </div>
  );
}

export default Logo;
