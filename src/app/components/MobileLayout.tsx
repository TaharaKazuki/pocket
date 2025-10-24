"use client";

import { useEffect, useState } from "react";

import Header from "./Header";
import Sidebar from "./Sidebar";

interface MobileLayoutProps {
  children: React.ReactNode;
}

export default function MobileLayout({ children }: MobileLayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  useEffect(() => {
    if (isSidebarOpen) {
      const scrollY = window.scrollY;
      document.body.style.top = `-${scrollY}px`;

      document.body.classList.add("sidebar-open");
    } else {
      document.body.classList.remove("sidebar-open");

      const scrollY = document.body.style.top;
      document.body.style.top = "";
      window.scrollTo(0, parseInt(scrollY || "0") * -1);
    }

    return () => {
      document.body.classList.remove("sidebar-open");
      document.body.style.top = "";
    };
  }, [isSidebarOpen]);

  return (
    <div>
      <Header
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />

      <div className="mx-auto w-full justify-between gap-10 md:w-11/12 lg:flex">
        {/* オーバーレイ（モバイル時のみ） */}
        {isSidebarOpen && (
          <div
            className="fixed inset-0 z-30 bg-black opacity-50 lg:hidden"
            onClick={closeSidebar}
          />
        )}
        <Sidebar
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
        {children}
      </div>
    </div>
  );
}
