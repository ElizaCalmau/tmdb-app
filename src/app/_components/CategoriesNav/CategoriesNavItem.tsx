"use client";

import Link from "next/link";
import { CategoriesNavItem as Prop } from "../../home/[categories]/constants";
import { usePathname } from "next/navigation";

export const CategoriesNavItem = ({ navItem }: { navItem: Prop }) => {
  const pathname = usePathname();
  const { route, title, api } = navItem;
  const isActive = route === pathname;
  console.log(isActive);
  return (
    <Link
      href={route}
      className={`${
        isActive ? "text-yellow-300" : "text-neutral-50"
      } font-semibold ${isActive ? "border-b border-yellow-300" : ""} p-2`}
    >
      {title}
    </Link>
  );
};
