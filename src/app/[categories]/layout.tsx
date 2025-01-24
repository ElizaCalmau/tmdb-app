import { CategoriesNav } from "./_components/CategoriesNav/CategoriesNav";

export default function CategoriesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <CategoriesNav />
      {children}
    </>
  );
}
