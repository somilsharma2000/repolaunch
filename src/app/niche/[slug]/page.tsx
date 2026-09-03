import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getCategories, getCategory, getNiche, getNiches, getReposByNiche } from "@/lib/data";
import LicenseFilter from "./LicenseFilter";

export function generateStaticParams() {
  return getNiches().map((n) => ({ slug: n.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const niche = getNiche(slug);
  return {
    title: niche ? `Best open-source ${niche.name.toLowerCase()} repos — verified & explained` : "Niche",
    description: `Curated, verified GitHub repositories for ${niche?.name ?? ""}, with setup guides and monetization playbooks.`,
  };
}

export default async function NichePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const niche = getNiche(slug);
  if (!niche) notFound();
  const category = getCategory(niche.categorySlug);
  const repos = getReposByNiche(slug);

  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <p className="text-sm text-white/40">
        <Link href="/category" className="hover:text-white">Categories</Link> /{" "}
        <Link href={`/category/${niche.categorySlug}`} className="hover:text-white">{category?.name}</Link> / {niche.name}
      </p>
      <h1 className="mt-2 text-3xl font-bold">{niche.name}</h1>

      <LicenseFilter repos={repos} />
    </div>
  );
}
