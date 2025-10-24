import Image from "next/image";

function SidebarUserInfo() {
  return (
    <div className="border-t bg-white p-4 lg:hidden">
      <div className="mb-4 flex items-center gap-3">
        <div className="relative h-10 w-10 shrink-0">
          <Image
            className="rounded-full object-cover"
            src="/images/userIcon.png"
            alt="ユーザーアイコン"
            fill={true}
            sizes="48px"
          />
        </div>
        <div className="min-w-0 flex-1">
          <p className="truncate text-base font-medium">ゆう</p>
          <p className="truncate text-sm text-gray-500">sample@example.com</p>
        </div>
      </div>

      {/* ログアウトボタン */}
      <button className="w-full rounded-md bg-red-100 px-4 py-2 text-center text-base text-red-600 transition-colors hover:bg-red-200 hover:text-red-800">
        ログアウト
      </button>
    </div>
  );
}

export default SidebarUserInfo;
