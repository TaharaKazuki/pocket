import { Dispatch, SetStateAction } from "react";
import { GiHamburgerMenu } from "react-icons/gi";

interface BurgerBtnProps {
  isSidebarOpen: boolean;
  setIsSidebarOpen: Dispatch<SetStateAction<boolean>>;
}

function BurgerBtn({ isSidebarOpen, setIsSidebarOpen }: BurgerBtnProps) {
  return (
    <div className="flex items-center lg:hidden">
      <button
        className="text-4xl"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        <GiHamburgerMenu />
      </button>
    </div>
  );
}

export default BurgerBtn;
