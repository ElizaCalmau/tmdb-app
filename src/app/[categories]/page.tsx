import { CATEGORIES_NAV_ITEMS } from "./constants";
import { OPTIONS } from "./constants";

export async function generateStaticParams() {
  const routes = CATEGORIES_NAV_ITEMS.map((segment) => ({
    categories: segment.route,
  }));
  console.log(routes);
  return routes;
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ categories: string }>;
}) {
  console.log(params);
  const { categories } = await params;
  console.log("cat", categories);
  const req = await fetch(
    `https://api.themoviedb.org/3/movie/${categories}?language=en-US&page=1`,
    OPTIONS
  );
  const { results } = await req.json();
  console.log(results);
  return (
    <div>
      <p> Page: {categories} here should be a movie component </p>
    </div>
  );
}
