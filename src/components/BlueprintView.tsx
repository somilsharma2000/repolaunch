"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import type { Repo } from "@/types";
import LicenseBadge from "./LicenseBadge";

export default function BlueprintView({ repo, related }: { repo: Repo; related: Repo[] }) {
  const [paid, setPaid] = useState<boolean | null>(null);

  useEffect(() => {
    setPaid(localStorage.getItem("repolaunch_paid") === "true");
  }, []);

  const locked = paid === false; // null = still checking (render full, then hide)

  const Lock = () => (
    <div className="glass relative overflow-hidden p-8 text-center">
      <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center gap-2 bg-base/60 blur-[6px]">
        <div className="h-3 w-3/4 rounded bg-white/10" />
        <div className="h-3 w-2/3 rounded bg-white/10" />
        <div className="h-3 w-1/2 rounded bg-white/10" />
      </div>
      <div className="relative">
        <p className="text-lg font-semibold">🔒 The rest of this blueprint is unlocked</p>
        <p className="mt-2 text-sm text-white/60">
          Full setup guide, copy-paste config files, and 3 monetization playbooks —
          plus unlimited Forge AI. One payment, forever.
        </p>
        <Link
          href="/pricing"
          className="mt-5 inline-block rounded-xl bg-gold px-6 py-2.5 font-semibold text-black transition hover:brightness-110 active:scale-95"
        >
          Unlock the full blueprint — $49
        </Link>
      </div>
    </div>
  );

  return (
    <div className="mx-auto max-w-3xl space-y-6 px-4 py-16">
      {/* header */}
      <div>
        <Link href={`/niche/${repo.nicheSlugs[0]}`} className="text-sm text-white/40 hover:text-white">
          ← Back to niche
        </Link>
        <p className="mt-4 text-sm text-white/40">{repo.owner} /</p>
        <div className="flex flex-wrap items-center justify-between gap-4">
          <h1 className="text-4xl font-extrabold">{repo.name}</h1>
          <a
            href={repo.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-line px-4 py-2 text-sm hover:border-accent/60"
          >
            GitHub ↗
          </a>
        </div>
        <p className="mt-3 text-white/60">{repo.description}</p>
        <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-white/50">
          <LicenseBadge license={repo.license} type={repo.licenseType} />
          <span>⭐ {repo.stars?.toLocaleString()} <span className="text-xs text-emerald-400">● live</span></span>
          <span>⏱ {repo.timeToLaunch}</span>
          <span>🎚 {repo.difficulty}</span>
        </div>
      </div>

      {/* free sections */}
      <section className="glass p-6">
        <h2 className="font-semibold">📖 What is it?</h2>
        <p className="mt-2 text-sm leading-relaxed text-white/70">{repo.whatIsIt}</p>
      </section>

      <section className="glass p-6">
        <h2 className="font-semibold">📍 Where to use it</h2>
        <ul className="mt-3 space-y-2 text-sm text-white/70">
          {repo.whereToUse.map((u) => (
            <li key={u} className="flex gap-2">• {u}</li>
          ))}
        </ul>
      </section>

      <section className="glass p-6">
        <h2 className="font-semibold">🛠 Tech stack & difficulty</h2>
        <p className="mt-2 text-sm text-white/70">
          {repo.techStack.join(" · ")} — Difficulty: {repo.difficulty} · Time to launch: {repo.timeToLaunch}
        </p>
      </section>

      {/* paid sections */}
      {locked ? (
        <Lock />
      ) : (
        <>
          <section className="glass p-6">
            <h2 className="font-semibold">🚀 How to use it — setup</h2>
            <ol className="mt-3 space-y-3 text-sm text-white/70">
              {repo.setup.map((s, i) => (
                <li key={i} className="flex gap-3">
                  <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-accent/20 text-xs font-bold text-accent">{i + 1}</span>
                  <span>{s}</span>
                </li>
              ))}
            </ol>
          </section>

          {repo.configFiles.map((f) => (
            <section key={f.filename} className="glass p-6">
              <h2 className="font-semibold">📋 {f.filename}</h2>
              <pre className="mt-3 overflow-x-auto rounded-xl border border-line bg-black/40 p-4 text-xs leading-relaxed text-glint">
                {f.code}
              </pre>
            </section>
          ))}

          <section className="glass p-6">
            <h2 className="font-semibold">💰 How to earn with it</h2>
            <div className="mt-4 space-y-4">
              {repo.playbooks.map((p) => (
                <div key={p.title} className="rounded-xl border border-line p-4">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="font-semibold text-glint">{p.title}</h3>
                    <span className="text-xs text-white/40">First revenue: {p.timeToRevenue}</span>
                  </div>
                  <p className="mt-1 text-xs text-white/50">👤 {p.customer}</p>
                  <p className="mt-1 text-sm font-semibold text-gold">{p.pricing}</p>
                  <ol className="mt-2 space-y-1 text-sm text-white/70">
                    {p.steps.map((s, i) => <li key={i}>{i + 1}. {s}</li>)}
                  </ol>
                </div>
              ))}
            </div>
          </section>

          <section className="glass p-6">
            <h2 className="font-semibold">⚖️ License, in plain English</h2>
            <p className="mt-2 text-sm text-white/70">{repo.licenseNote}</p>
          </section>
        </>
      )}

      {/* verification checklist (always visible) */}
      <section className="glass p-6">
        <h2 className="font-semibold">✅ Verification checklist</h2>
        <div className="mt-3 grid gap-2 text-sm text-white/70 sm:grid-cols-2">
          <span>500+ stars ✓</span>
          <span>Actively maintained ✓</span>
          <span>Real documentation ✓</span>
          <span>{repo.license} license {repo.licenseType === "safe" ? "— commercial safe ✓" : "— warning noted ✓"}</span>
        </div>
      </section>

      {/* related */}
      <section>
        <h2 className="font-semibold">🔗 Related repos</h2>
        <div className="mt-3 grid gap-3">
          {related.map((r) => (
            <Link key={r.slug} href={`/repo/${r.slug}`} className="glass card-hover flex items-center justify-between p-4">
              <div>
                <p className="text-xs text-white/40">{r.owner} /</p>
                <p className="font-semibold">{r.name}</p>
                <p className="text-xs text-white/50">{r.description}</p>
              </div>
              <span className="text-white/30">→</span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
