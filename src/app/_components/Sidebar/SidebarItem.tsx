"use client";
import Image from "next/image";
import Link from "next/link";
import { SidebarNavItem } from "./constants";

interface SidebarItemProps {
  navItem: SidebarNavItem; // Use SidebarNavItem type for the navItem prop
}
export const SidebarItem: React.FC<SidebarItemProps> = ({ navItem }) => {
  const { title, href, icon_default, icon_active } = navItem;

  return (
    <div>
      <Link href={href} className="flex flex-row">
        <Image
          src={icon_default}
          alt="Navigation icon"
          width={24}
          height={24}
        />
        <div>{title}</div>
      </Link>
    </div>
  );
};
