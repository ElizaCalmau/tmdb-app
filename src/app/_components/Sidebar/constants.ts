export interface SidebarNavItem {
  title: string;
  href: string;
  icon_default: string;
  icon_active: string;
}

export const SidebarConfig: SidebarNavItem[] = [
  {
    title: "Home",
    href: "/",
    icon_default: "/icons/home_active.png",
    icon_active: "/icons/home_defualt.png",
  },
  {
    title: "Watchlist",
    href: "/watchlist",
    icon_default: "/icons/watchlist_active.png",
    icon_active: "/icons/watchlist_defualt.png",
  },
  {
    title: "Blog",
    href: "/blog",
    icon_default: "/icons/blog_active.png",
    icon_active: "/icons/blog_defualt.png",
  },
  {
    title: "Artists",
    href: "/artists",
    icon_default: "/icons/artists_active.png",
    icon_active: "/icons/artists_defualt.png",
  },
];
