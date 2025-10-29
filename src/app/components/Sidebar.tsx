import { Dispatch, SetStateAction } from "react";

import { SidebarContent } from "./SidebarContent";
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
      {/* メインコンテンツエリア（スクロール対象） */}
      <SidebarContent />

      <SidebarUserInfo />
    </section>
  );
}

export default Sidebar;
