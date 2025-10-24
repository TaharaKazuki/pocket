"use client";

import Image from "next/image";
import { useState } from "react";

function UserIcon() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <div className="relative hidden aspect-square h-11/12 items-center lg:flex">
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="relative h-10 w-10 overflow-hidden rounded-full border-2 border-gray-300 transition-colors hover:border-gray-400 md:h-14 md:w-14"
      >
        <Image
          className="object-cover"
          src="/images/userIcon.png"
          fill={true}
          alt="ユーザーアイコン画像"
          sizes="80px"
        />
      </button>

      {/* ドロップダウンメニュー */}
      {isMenuOpen && (
        <div className="absolute top-5 right-0 z-50 mt-2 w-48 rounded-md border bg-white py-1 shadow-lg">
          <div className="border-b px-4 py-2">
            <p className="text-sm font-medium text-gray-900">ゆう</p>
            <p className="text-sm text-gray-500">sample@example.com</p>
          </div>
          <button className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100">
            ログアウト
          </button>
        </div>
      )}

      {isMenuOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </div>
  );
}

export default UserIcon;
