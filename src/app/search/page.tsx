"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import SearchBar from "@/components/SearchBar";
import { search } from "@/lib/data";

function Results() {
  const q = useSearchParams().get("q") ?? "";
  const results = search(q);

  return (
    <>
      <SearchBar autoFocus={true} />
      <p className="mt-6 text-sm text-white/50">
        {q ? `${results.length} result${results.length === 1 ? "" : "s"} for “${q}”` : "Search anything you want to build"}
      </p>

      <div className="mt-6 w-full space-y-3">
        {results.map((r) => (
          <Link
            key={r.type + r.slug}
            href={r.type === "niche" ? `/niche/${r.slug}` : `/repo/${r.slug}`}
            className="glass card-hover fade-up flex items-center justify-between p-4"
          >
            <div>
              <p className="font-semibold">
                {r.title}
                <span className="ml-2 rounded-full border border-line px-2 py-0.5 text-xs text-white/50">
                  {r.type === "niche" ? "niche" : "repo"}
                </span>
              </p>
              <p className="mt-0.5 text-sm text-white/50">{r.subtitle}</p>
            </div>
            <span className="text-white/30">→</span>
          </Link>
        ))}
        {q && results.length === 0 && (
          <p className="text-sm text-white/40">
            Nothing yet for “{q}” — this niche may still be filling up. Try the{" "}
            <Link href="/category" className="text-goldlight hover:underline">category index</Link>.
          </p>
        )}
      </div>
    </>
  );
}

export default function SearchPage() {
  return (
    <div className="relative mx-auto flex min-h-screen max-w-3xl flex-col items-center px-4 py-16">
      <Suspense fallback={<div className="text-sm text-white/40">Loading…</div>}>
        <Results />
      </Suspense>
    </div>
  );
}
