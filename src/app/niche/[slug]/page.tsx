import Link from "next/link";
import { notFound } from "next/navigation";
import { getCategory, getNiche, getNiches, getReposByNiche } from "@/lib/data";
import RepoCard from "@/components/RepoCard";
import type { Metadata } from "next";

export function generateStaticParams() {
  return getNiches().map((n) => ({ slug: n.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const niche = getNiche(slug);
  return {
    title: niche ? `Best open-source ${niche.name.toLowerCase()} repos — verified & explained` : "Niche",
    description: `Curated, verified GitHub repositories for ${niche?.name ?? ""}, with setup guides and monetization playbooks.`,
  };
}

export default async function NichePage({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ license?: string }>;
}) {
  const { slug } = await params;
  const { license } = await searchParams;
  const niche = getNiche(slug);
  if (!niche) notFound();
  const category = getCategory(niche.categorySlug);
  const all = getReposByNiche(slug);
  const repos = license === "safe" ? all.filter((r) => r.licenseType === "safe") : all;

  const filter = (label: string, value?: string) => {
    const active = (license ?? "all") === (value ?? "all");
    return (
      <Link
        key={label}
        href={value ? `/niche/${slug}?license=${value}` : `/niche/${slug}`}
        className={`rounded-full px-3 py-1 text-xs font-medium ${
          active ? "bg-white text-black" : "border border-line bg-card text-white/60 hover:text-white"
        }`}
      >
        {label}
      </Link>
    );
  };

  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <p className="text-sm text-white/40">
        <Link href="/category" className="hover:text-white">Categories</Link> /{" "}
        <Link href={`/category/${niche.categorySlug}`} className="hover:text-white">{category?.name}</Link> / {niche.name}
      </p>
      <h1 className="mt-2 text-3xl font-bold">{niche.name}</h1>

      <div className="mt-6 flex flex-wrap gap-2">
        {filter("All licenses")}
        {filter("Safe only", "safe")}
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {repos.map((r) => (
          <RepoCard key={r.slug} repo={r} />
        ))}
      </div>

      {repos.length === 0 && (
        <div className="glass mt-8 p-8 text-center text-white/50">
          Blueprints for this niche are in the content pipeline — every repo is verified before publishing.
        </div>
      )}
    </div>
  );
}
