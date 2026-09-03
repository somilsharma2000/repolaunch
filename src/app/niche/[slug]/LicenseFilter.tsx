"use client";

import { useState } from "react";
import type { Repo } from "@/types";
import RepoCard from "@/components/RepoCard";

export default function LicenseFilter({ repos }: { repos: Repo[] }) {
  const [onlySafe, setOnlySafe] = useState(false);
  const shown = onlySafe ? repos.filter((r) => r.licenseType === "safe") : repos;

  return (
    <>
      <div className="mt-6 flex flex-wrap gap-2">
        <button
          onClick={() => setOnlySafe(false)}
          className={`rounded-full px-3 py-1 text-xs font-medium ${
            !onlySafe ? "bg-white text-black" : "border border-line bg-card text-white/60 hover:text-white"
          }`}
        >
          All licenses
        </button>
        <button
          onClick={() => setOnlySafe(true)}
          className={`rounded-full px-3 py-1 text-xs font-medium ${
            onlySafe ? "bg-white text-black" : "border border-line bg-card text-white/60 hover:text-white"
          }`}
        >
          Safe only
        </button>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {shown.map((r) => (
          <RepoCard key={r.slug} repo={r} />
        ))}
      </div>

      {shown.length === 0 && (
        <div className="glass mt-8 p-8 text-center text-white/50">
          Blueprints for this niche are in the content pipeline — every repo is verified before publishing.
        </div>
      )}
    </>
  );
}
