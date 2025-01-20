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
    icon_active: "/icons/home_active.png",
    icon_default: "/icons/home.png",
  },
  {
    title: "Watchlist",
    href: "/watchlist",
    icon_active: "/icons/watchlist_active.png",
    icon_default: "/icons/watchlist.png",
  },
  {
    title: "Blog",
    href: "/blog",
    icon_active: "/icons/blog_active.png",
    icon_default: "/icons/blog.png",
  },
  {
    title: "Artists",
    href: "/artists",
    icon_active: "/icons/artists_active.png",
    icon_default: "/icons/artists.png",
  },
];
