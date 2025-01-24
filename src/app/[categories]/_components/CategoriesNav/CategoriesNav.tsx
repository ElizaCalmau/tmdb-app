import React from "react";
import { CategoriesNavItem } from "./CategoriesNavItem";
import {
  CategoriesNavItem as Prop,
  CATEGORIES_NAV_ITEMS,
} from "../../constants";

export const CategoriesNav = () => {
  return (
    <div>
      {CATEGORIES_NAV_ITEMS.map((navItem: Prop) => (
        <CategoriesNavItem key={navItem.title} navItem={navItem} />
      ))}
      ;
    </div>
  );
};
