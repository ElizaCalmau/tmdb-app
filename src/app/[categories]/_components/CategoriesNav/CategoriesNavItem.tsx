import Link from "next/link";
import { CategoriesNavItem as Prop } from "../../constants";

export const CategoriesNavItem = ({ navItem }: { navItem: Prop }) => {
  console.log(navItem);
  const { route, title, api } = navItem;
  return <Link href={route}>{title}</Link>;
};
