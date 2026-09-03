"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { demoSocialStats, demoWebsiteStats } from "@/lib/admin";
import { getPublishedRepos } from "@/lib/data";

interface GhRepo {
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
  subscribers_count: number;
  pushed_at: string;
}

export default function AnalyticsPage() {
  const web = demoWebsiteStats();
  const socials = demoSocialStats();
  const published = getPublishedRepos();
  const safeCount = published.filter((r) => r.licenseType === "safe").length;

  const [gh, setGh] = useState<GhRepo | null>(null);
  const [ghState, setGhState] = useState<"loading" | "live" | "error">("loading");

  useEffect(() => {
    fetch("https://api.github.com/repos/somilsharma2000/repolaunch")
      .then((r) => (r.ok ? r.json() : Promise.reject()))
      .then((d) => { setGh(d); setGhState("live"); })
      .catch(() => setGhState("error"));
  }, []);

  const ghCards: { label: string; value: string }[] = gh
    ? [
        { label: "product repo stars", value: gh.stargazers_count.toLocaleString() },
        { label: "forks", value: gh.forks_count.toLocaleString() },
        { label: "watchers", value: gh.subscribers_count.toLocaleString() },
        { label: "open issues", value: gh.open_issues_count.toLocaleString() },
      ]
    : [];

  return (
    <div>
      <h1 className="text-3xl font-bold">Analytics</h1>
      <p className="mt-2 text-white/60">Website + GitHub + social performance, unified. GA4 and platform APIs activate from Integrations.</p>

      {/* GITHUB LIVE */}
      <section className="mt-8">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold text-goldlight">GitHub · live</h2>
          <span className={`rounded-full border px-3 py-1 text-xs ${ghState === "live" ? "border-gold/40 bg-gold/10 text-goldlight" : "border-line bg-card text-white/50"}`}>
            {ghState === "live" ? "live · GitHub public API" : ghState === "loading" ? "syncing…" : "offline — retry on reload"}
          </span>
        </div>
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {(ghState === "loading" ? Array.from({ length: 4 }) : ghCards).map((c, i) => (
            <div key={i} className="glass p-6">
              {c ? (
                <>
                  <p className="text-3xl font-bold gradient-text">{(c as { label: string; value: string }).value}</p>
                  <p className="text-xs uppercase tracking-wider text-white/40">{(c as { label: string; value: string }).label}</p>
                </>
              ) : (
                <div className="h-10 animate-pulse rounded-lg bg-white/5" />
              )}
            </div>
          ))}
        </div>
        <div className="mt-4 flex flex-wrap gap-2 text-xs text-white/50">
          <span className="rounded-full border border-line bg-card px-3 py-1">📦 {published.length} published blueprints</span>
          <span className="rounded-full border border-gold/30 bg-gold/10 px-3 py-1 text-goldlight">✓ {safeCount} safe-license</span>
          <span className="rounded-full border border-line bg-card px-3 py-1">⚠️ {published.length - safeCount} license warnings</span>
          {gh && <span className="rounded-full border border-line bg-card px-3 py-1">last push: {new Date(gh.pushed_at).toLocaleDateString()}</span>}
        </div>
        <p className="mt-3 text-xs text-white/35">Nightly star sync for every blueprint repo runs via GitHub Actions; this panel reads the product repo live on every visit.</p>
      </section>

      {/* WEBSITE */}
      <section className="mt-12">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold text-goldlight">Website</h2>
          <span className="rounded-full border border-line bg-card px-3 py-1 text-xs text-white/50">source: demo · <Link href="/admin/integrations" className="text-goldlight hover:underline">GA4 slot ready</Link></span>
        </div>
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="glass p-6"><p className="text-3xl font-bold gradient-text">{web.visitors.toLocaleString()}</p><p className="text-xs uppercase tracking-wider text-white/40">visitors / 30d</p></div>
          <div className="glass p-6"><p className="text-3xl font-bold gradient-text">{web.pageviews.toLocaleString()}</p><p className="text-xs uppercase tracking-wider text-white/40">pageviews</p></div>
          <div className="glass p-6"><p className="text-3xl font-bold gradient-text">124</p><p className="text-xs uppercase tracking-wider text-white/40">indexed niche pages</p></div>
          <div className="glass p-6"><p className="text-3xl font-bold gradient-text">—</p><p className="text-xs uppercase tracking-wider text-white/40">conversions <Link href="/admin/integrations" className="text-goldlight hover:underline">(Stripe)</Link></p></div>
        </div>

        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <div className="glass p-6">
            <p className="text-sm font-semibold text-white/80">Top niches</p>
            <div className="mt-4 space-y-2.5">
              {web.topNiches.map((n, i) => (
                <div key={n} className="flex items-center gap-3 text-sm">
                  <span className="w-4 text-white/40">{i + 1}</span>
                  <span className="flex-1 text-white/70">{n}</span>
                  <div className="h-1.5 w-28 rounded-full bg-black/40"><div className="h-full rounded-full bg-gradient-to-r from-goldlight to-gold" style={{ width: `${100 - i * 14}%` }} /></div>
                </div>
              ))}
            </div>
          </div>
          <div className="glass p-6">
            <p className="text-sm font-semibold text-white/80">Top searches</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {web.topSearches.map((s) => (
                <span key={s} className="rounded-full border border-line bg-card px-3 py-1 text-sm text-white/70">{s}</span>
              ))}
            </div>
            <p className="mt-4 text-xs text-white/40">{web.conversionNote}</p>
          </div>
        </div>
      </section>

      {/* SOCIAL */}
      <section className="mt-12">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold text-goldlight">Social</h2>
          <Link href="/admin/social" className="text-xs text-goldlight hover:underline">Open Social Studio →</Link>
        </div>
        <div className="mt-4 grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-5">
          {socials.map((s) => (
            <div key={s.id} className="glass p-5 text-center">
              <span className="text-2xl">{s.icon}</span>
              <p className="mt-2 text-sm font-semibold">{s.name}</p>
              <p className="mt-1 text-xs text-white/40">{s.connected ? "connected" : "not connected"}</p>
              <p className="mt-3 text-2xl font-bold text-white/20">—</p>
              <p className="text-[10px] uppercase tracking-wider text-white/30">followers</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
