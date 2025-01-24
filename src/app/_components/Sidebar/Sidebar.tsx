import { SIDEBAR_NAV_ITEMS } from "./constants";
import { SidebarItem } from "./SidebarItem";
import Image from "next/image";
import LogoImg from "/public/Logo.png";
import Link from "next/link";
export const Sidebar = () => {
  return (
    <div className="w-xs size-fit rounded-md bg-gradient-to-t p-[1px] from-neutral-500/10 via-neutral-50/80 to-neutral-500/10 p[1px] shadow-l ml-[0.5px]">
      <div className="flex flex-col rounded-md gap-5 px-10 bg-neutral-800 font-[family-name:var(--font-roboto-mono)">
        <Link href="/">
          <Image src={LogoImg} alt="Logo image" className="my-8" />
        </Link>
        <div className="py-4">
          <span className="text-neutral-400 text-xs">Menu</span>
          {SIDEBAR_NAV_ITEMS.map((navItem) => (
            <SidebarItem key={navItem.title} navItem={navItem} />
          ))}
        </div>
      </div>
    </div>
  );
};
