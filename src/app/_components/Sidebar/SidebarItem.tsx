"use client";
import Image from "next/image";
import Link from "next/link";
import { SidebarNavItem } from "./constants";
import { usePathname } from "next/navigation";

interface SidebarItemProps {
  navItem: SidebarNavItem;
}
export const SidebarItem: React.FC<SidebarItemProps> = ({ navItem }) => {
  const { title, href, icon_default, icon_active } = navItem;
  const pathname = usePathname();
  const isActive = pathname === href;
  return (
    <div
      className={`my-4 font-semibold ${
        isActive ? "text-yellow-300" : "text-neutral-200"
      } `}
    >
      <Link href={href} className="flex flex-row">
        <Image
          src={isActive ? icon_active : icon_default}
          alt="Navigation icon"
          width={24}
          height={24}
        />
        <div className="pl-2">{title}</div>
      </Link>
    </div>
  );
};
