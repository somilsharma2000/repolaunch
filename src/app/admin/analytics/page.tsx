"use client";

import Link from "next/link";
import { demoSocialStats, demoWebsiteStats } from "@/lib/admin";

export default function AnalyticsPage() {
  const web = demoWebsiteStats();
  const socials = demoSocialStats();

  return (
    <div>
      <h1 className="text-3xl font-bold">Analytics</h1>
      <p className="mt-2 text-white/60">Website + social performance, unified. Demo data below — connects live in Phase 2.</p>

      {/* WEBSITE */}
      <section className="mt-10">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold text-goldlight">Website</h2>
          <span className="rounded-full border border-line bg-card px-3 py-1 text-xs text-white/50">source: demo · GA4 slot ready</span>
        </div>
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="glass p-6"><p className="text-3xl font-bold gradient-text">{web.visitors.toLocaleString()}</p><p className="text-xs uppercase tracking-wider text-white/40">visitors / 30d</p></div>
          <div className="glass p-6"><p className="text-3xl font-bold gradient-text">{web.pageviews.toLocaleString()}</p><p className="text-xs uppercase tracking-wider text-white/40">pageviews</p></div>
          <div className="glass p-6"><p className="text-3xl font-bold gradient-text">124</p><p className="text-xs uppercase tracking-wider text-white/40">indexed niche pages</p></div>
          <div className="glass p-6"><p className="text-3xl font-bold gradient-text">—</p><p className="text-xs uppercase tracking-wider text-white/40">$49 conversions*</p></div>
        </div>

        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <div className="glass p-6">
            <p className="text-sm font-semibold text-white/80">Top niches</p>
            <div className="mt-4 space-y-2">
              {web.topNiches.map((n, i) => (
                <div key={n} className="flex items-center gap-3 text-sm">
                  <span className="w-4 text-white/40">{i + 1}</span>
                  <span className="flex-1 text-white/70">{n}</span>
                  <div className="h-1.5 w-28 rounded-full bg-card"><div className="h-full rounded-full bg-gradient-to-r from-goldlight to-gold" style={{ width: `${100 - i * 14}%` }} /></div>
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
        <div className="mt-4 grid gap-4 sm:grid-cols-3 lg:grid-cols-5">
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
        <p className="mt-4 text-xs text-white/40">
          *Conversions and follower counts go live when Stripe + platform APIs are connected from the Integrations page.
        </p>
      </section>
    </div>
  );
}
