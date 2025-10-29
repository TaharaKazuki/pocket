import { SidebarItem } from "./SidebarItem";
import { FilterItemInterface, filterItems } from "../constants/filterItems";

export function SidebarContent() {
  return (
    <div className="mb-10 overflow-y-auto">
      <div className="pt-4 pl-4 lg:p-0">
        <h2 className="mb-8 text-3xl font-bold lg:text-2xl">フィルター</h2>
        <ul className="flex flex-col gap-6 pl-4">
          {filterItems.map((item: FilterItemInterface) => (
            <SidebarItem key={item.id} item={item} />
          ))}
        </ul>
      </div>
    </div>
  );
}
