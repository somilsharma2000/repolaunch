import taxonomy from "@/data/taxonomy.json";
import reposRaw from "@/data/repos.json";
import starsRaw from "@/data/stars.json";
import type { Category, Niche, Repo, SearchResult } from "@/types";

const stars = starsRaw as Record<string, number>;

const categories = taxonomy.categories as Category[];
const niches = taxonomy.niches as Niche[];
const repos = (reposRaw as Repo[]).map((r) => ({
  ...r,
  stars: stars[`${r.owner}/${r.name}`] ?? undefined,
}));

export const getCategories = (): Category[] =>
  [...categories].sort((a, b) => a.order - b.order);

export const getCategory = (slug: string) =>
  categories.find((c) => c.slug === slug);

export const getNiches = (): Niche[] => niches;

export const getNichesByCategory = (categorySlug: string): Niche[] =>
  niches.filter((n) => n.categorySlug === categorySlug);

export const getNiche = (slug: string) => niches.find((n) => n.slug === slug);

export const getPublishedRepos = (): Repo[] =>
  repos.filter((r) => r.isPublished);

export const getReposByNiche = (nicheSlug: string): Repo[] =>
  getPublishedRepos()
    .filter((r) => r.nicheSlugs.includes(nicheSlug))
    .sort((a, b) => Number(b.isBestPick) - Number(a.isBestPick) || (b.stars ?? 0) - (a.stars ?? 0));

export const getRepo = (slug: string) =>
  repos.find((r) => r.slug === slug && r.isPublished);

export const getRelatedRepos = (repo: Repo, limit = 3): Repo[] =>
  getPublishedRepos()
    .filter((r) => r.slug !== repo.slug && r.nicheSlugs.some((n) => repo.nicheSlugs.includes(n)))
    .sort((a, b) => (b.stars ?? 0) - (a.stars ?? 0))
    .slice(0, limit);

export const repoCountForNiche = (nicheSlug: string): number =>
  getPublishedRepos().filter((r) => r.nicheSlugs.includes(nicheSlug)).length;

export const siteStats = () => ({
  categories: categories.length,
  niches: niches.length,
  repos: getPublishedRepos().length,
});

const TRENDING = ["animation", "AI chatbot", "ecommerce", "booking", "auth", "notion clone", "analytics"];

export const trendingSearches = () => TRENDING;

export function search(query: string): SearchResult[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  const score = (text: string, q: string) => {
    const t = text.toLowerCase();
    if (t === q) return 100;
    if (t.startsWith(q)) return 70;
    if (t.includes(q)) return 50;
    return 0;
  };
  const results: (SearchResult & { _s: number })[] = [];
  for (const n of niches) {
    const s = Math.max(score(n.name, q), score(n.slug.replace(/-/g, " "), q));
    if (s > 0)
      results.push({
        type: "niche", slug: n.slug, title: n.name,
        subtitle: `${repoCountForNiche(n.slug)} verified repo${repoCountForNiche(n.slug) === 1 ? "" : "s"}`,
        _s: s,
      });
  }
  for (const r of getPublishedRepos()) {
    const s = Math.max(score(`${r.owner}/${r.name}`, q), score(r.description, q) * 0.6);
    if (s > 0)
      results.push({
        type: "repo", slug: r.slug,
        title: `${r.owner}/${r.name}`,
        subtitle: r.description, _s: s,
      });
  }
  return results.sort((a, b) => b._s - a._s).map(({ _s, ...rest }) => rest);
}
