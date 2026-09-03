import Link from "next/link";
import type { Repo } from "@/types";
import { formatStars } from "@/lib/format";
import LicenseBadge from "./LicenseBadge";

export default function RepoCard({ repo }: { repo: Repo }) {
  return (
    <Link
      href={`/repo/${repo.slug}`}
      className="glass card-hover fade-up flex flex-col gap-3 p-5"
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-xs text-white/40">{repo.owner} /</p>
          <h3 className="text-lg font-bold">{repo.name}</h3>
        </div>
        {repo.isBestPick && (
          <span className="rounded-full border border-gold/40 bg-gold/15 px-2 py-0.5 text-xs font-semibold text-goldlight">
            👑 Best pick
          </span>
        )}
      </div>
      <p className="line-clamp-2 text-sm text-white/60">{repo.description}</p>
      <div className="mt-auto flex flex-wrap items-center gap-2 text-xs text-white/50">
        <span>⭐ {formatStars(repo.stars)}</span>
        <LicenseBadge license={repo.license} type={repo.licenseType} />
        <span className="rounded-full border border-line px-2 py-0.5">{repo.difficulty}</span>
      </div>
    </Link>
  );
}
