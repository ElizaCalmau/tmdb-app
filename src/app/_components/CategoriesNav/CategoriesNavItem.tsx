import Link from "next/link";
import { CategoriesNavItem as Prop } from "../../[categories]/constants";

export const CategoriesNavItem = ({ navItem }: { navItem: Prop }) => {
  console.log(navItem);
  const { route, title, api } = navItem;
  return (
    <Link href={route} className="text-neutral-50">
      {title}
    </Link>
  );
};
