import type { MetadataRoute } from "next";
import { getCategories, getNiches, getPublishedRepos } from "@/lib/data";

const BASE = "https://repolaunch.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: MetadataRoute.Sitemap = [
    { url: BASE, changeFrequency: "daily", priority: 1 },
    { url: `${BASE}/category`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${BASE}/pricing`, changeFrequency: "monthly", priority: 0.5 },
    { url: `${BASE}/forge`, changeFrequency: "monthly", priority: 0.5 },
  ];
  for (const c of getCategories())
    routes.push({ url: `${BASE}/category/${c.slug}`, changeFrequency: "weekly", priority: 0.7 });
  for (const n of getNiches())
    routes.push({ url: `${BASE}/niche/${n.slug}`, changeFrequency: "weekly", priority: 0.7 });
  for (const r of getPublishedRepos())
    routes.push({ url: `${BASE}/repo/${r.slug}`, changeFrequency: "weekly", priority: 0.9 });
  return routes;
}
