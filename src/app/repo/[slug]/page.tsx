import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getPublishedRepos, getRelatedRepos, getRepo } from "@/lib/data";
import BlueprintView from "@/components/BlueprintView";

export function generateStaticParams() {
  return getPublishedRepos().map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const repo = getRepo(slug);
  return {
    title: repo ? `${repo.name} — verified setup guide & monetization playbook` : "Blueprint",
    description: repo?.whatIsIt,
  };
}

export default async function RepoPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const repo = getRepo(slug);
  if (!repo) notFound();
  return <BlueprintView repo={repo} related={getRelatedRepos(repo)} />;
}
