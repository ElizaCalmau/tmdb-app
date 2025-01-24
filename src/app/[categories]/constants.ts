export const OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0OTlhZGMxNDM1MTAwOTk0MjdhMTg1ZTM2Y2Q0OGZiMiIsIm5iZiI6MTcwMjk4OTgyMS4zMjA5OTk5LCJzdWIiOiI2NTgxOGZmZDM0ZTE1MjA4N2YwODIxM2YiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.XkjpoXBy8O5YbJq4A3FSLhSoSqftywkMGli9i0l4Ua4",
  },
};

export interface CategoriesNavItem {
  title: string;
  route: string;
  api: string;
}

export const CATEGORIES_NAV_ITEMS: CategoriesNavItem[] = [
  {
    title: "Popular",
    route: "/popular",
    api: "",
  },
  {
    title: "Top Rated",
    route: "/top_rated",
    api: "",
  },
  {
    title: "Now Palying",
    route: "/now_playing",
    api: "",
  },
  {
    title: "Genres",
    route: "/genres",
    api: "",
  },
];
