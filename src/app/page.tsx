import CategoryPage from "./[categories]/page";

export default function Home() {
  return (
    <div className="text-neutral-50">
      <CategoryPage params={{ categories: "popular" }} />
    </div>
  );
}
