import { Dispatch, SetStateAction } from "react";

import BurgerBtn from "./BurgerBtn";
import InputFormGroup from "./InputFormGroup";
import Logo from "./Logo";
import UserIcon from "./UserIcon";

interface HeaderProps {
  isSidebarOpen: boolean;
  setIsSidebarOpen: Dispatch<SetStateAction<boolean>>;
}

function Header({ isSidebarOpen, setIsSidebarOpen }: HeaderProps) {
  return (
    <div className="sticky top-0 z-100 mx-auto w-full bg-white px-0 md:px-4 lg:w-11/12">
      <header className="flex h-16 items-center justify-between px-2 md:px-0">
        <Logo />
        <InputFormGroup />
        <UserIcon />
        <BurgerBtn
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
      </header>
      <hr className="mb-8" />
    </div>
  );
}

export default Header;
