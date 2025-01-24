import { SIDEBAR_NAV_ITEMS } from "./constants";
import { SidebarItem } from "./SidebarItem";
export const Sidebar = () => {
  return (
    <div>
      {SIDEBAR_NAV_ITEMS.map((navItem) => (
        <SidebarItem key={navItem.title} navItem={navItem} />
      ))}
    </div>
  );
};
