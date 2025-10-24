import Link from "next/link";
import { Dispatch, SetStateAction } from "react";

import SidebarUserInfo from "./SidebarUserInfo";

interface SidebarProps {
  isSidebarOpen: boolean;
  setIsSidebarOpen: Dispatch<SetStateAction<boolean>>;
}

function Sidebar({ isSidebarOpen }: SidebarProps) {
  return (
    <section
      className={`fixed top-16 left-0 z-50 h-[calc(100vh-4rem)] w-4/5 bg-white md:w-2/5 lg:sticky lg:top-24 lg:h-[calc(100vh-6rem)] lg:w-1/5 ${
        isSidebarOpen ? "translate-x-0" : "translate3d(0,0,0) -translate-x-full"
      } flex transform flex-col transition-transform duration-200 ease-out will-change-transform lg:translate-x-0`}
    >
      <div className="mb-10 overflow-y-auto">
        <div className="pt-4 pl-4 lg:p-0">
          <h2 className="mb-8 text-3xl font-bold lg:text-2xl">フィルター</h2>
          <ul className="flex flex-col gap-6 pl-4">
            <li>
              <Link href="#" className="flex items-center gap-3 text-xl">
                すべて
              </Link>
            </li>
            <li>
              <Link href="#" className="flex items-center gap-3 text-xl">
                ホーム
              </Link>
            </li>
            <li>
              <Link href="#" className="flex items-center gap-3 text-xl">
                お気に入り
              </Link>
            </li>
            <li>
              <Link href="#" className="flex items-center gap-3 text-xl">
                アーカイブ
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <SidebarUserInfo />
    </section>
  );
}

export default Sidebar;
