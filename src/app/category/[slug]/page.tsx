import Link from "next/link";
import { notFound } from "next/navigation";
import { getCategories, getCategory, getNichesByCategory, repoCountForNiche } from "@/lib/data";

export function generateStaticParams() {
  return getCategories().map((c) => ({ slug: c.slug }));
}

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) notFound();
  const niches = getNichesByCategory(slug);

  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <p className="text-sm text-white/40">
        <Link href="/category" className="hover:text-white">Categories</Link> / {category.name}
      </p>
      <h1 className="mt-2 text-3xl font-bold">{category.name}</h1>
      <p className="mt-2 text-white/50">{category.description}</p>
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {niches.map((n) => {
          const count = repoCountForNiche(n.slug);
          return (
            <Link key={n.slug} href={`/niche/${n.slug}`} className="glass card-hover fade-up flex items-center justify-between p-5">
              <div>
                <h3 className="font-semibold">{n.name}</h3>
                <p className="mt-1 text-xs text-white/40">
                  {count > 0 ? `${count} verified repo${count === 1 ? "" : "s"}` : "blueprints in progress"}
                </p>
              </div>
              <span className="text-white/30">→</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
