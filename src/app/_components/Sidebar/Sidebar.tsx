import { SidebarConfig } from "./constants";
import { SidebarItem } from "./SidebarItem";
export const Sidebar = () => {
  return (
    <div>
      {SidebarConfig.map((navItem) => (
        <SidebarItem key={navItem.title} navItem={navItem} />
      ))}
    </div>
  );
};
