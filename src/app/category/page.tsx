import Link from "next/link";
import { getCategories, getNichesByCategory } from "@/lib/data";

export const metadata = { title: "Categories" };

export default function CategoriesPage() {
  const categories = getCategories();
  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <h1 className="text-3xl font-bold">Categories</h1>
      <p className="mt-2 text-white/50">Every niche, only verified repos.</p>
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {categories.map((c) => (
          <Link key={c.slug} href={`/category/${c.slug}`} className="glass card-hover fade-up p-5">
            <h3 className="font-semibold">{c.name}</h3>
            <p className="mt-1 line-clamp-2 text-xs text-white/50">{c.description}</p>
            <p className="mt-3 text-xs text-glint">{getNichesByCategory(c.slug).length} niches →</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
