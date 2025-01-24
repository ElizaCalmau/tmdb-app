import React from "react";
import { CategoriesNavItem } from "./CategoriesNavItem";
import {
  CategoriesNavItem as Prop,
  CATEGORIES_NAV_ITEMS,
} from "../../home/[categories]/constants";

export const CategoriesNav = () => {
  return (
    <div className="flex flex-row gap-3 m-8 w-full h-fit">
      {CATEGORIES_NAV_ITEMS.map((navItem: Prop) => (
        <CategoriesNavItem key={navItem.title} navItem={navItem} />
      ))}
      ;
    </div>
  );
};
