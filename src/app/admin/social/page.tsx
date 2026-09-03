"use client";

import { useEffect, useState } from "react";
import { CALENDAR, SOCIAL_IDS, INTEGRATIONS } from "@/lib/admin";

export default function SocialStudioPage() {
  const [draft, setDraft] = useState("");
  const [targets, setTargets] = useState<string[]>(["x"]);
  const [saved, setSaved] = useState(false);
  const [connected, setConnected] = useState<string[]>([]);

  useEffect(() => {
    setConnected(SOCIAL_IDS.filter((id) => localStorage.getItem(`repolaunch_int_${id}`) === "connected"));
  }, []);

  const toggleTarget = (id: string) =>
    setTargets((t) => (t.includes(id) ? t.filter((x) => x !== id) : [...t, id]));

  const saveDraft = () => {
    localStorage.setItem("repolaunch_draft_post", JSON.stringify({ draft, targets }));
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold">Social Studio <span className="gradient-text">📣</span></h1>
      <p className="mt-2 max-w-2xl text-white/60">
        Your built-in social media agency: accounts, one composer for every platform, and a 21-day launch calendar with posts pre-written.
      </p>

      {/* ACCOUNTS */}
      <section className="mt-8">
        <h2 className="text-lg font-bold text-goldlight">Accounts</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {SOCIAL_IDS.map((id) => {
            const int = INTEGRATIONS.find((i) => i.id === id)!;
            const on = connected.includes(id);
            return (
              <div key={id} className={`glass p-4 text-center ${on ? "ring-1 ring-gold/50" : ""}`}>
                <span className="text-2xl">{int.icon}</span>
                <p className="mt-1 text-sm font-semibold">{int.name}</p>
                <p className={`mt-1 text-xs ${on ? "text-goldlight" : "text-white/40"}`}>{on ? "connected ✓" : "connect in Integrations"}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* COMPOSER */}
      <section className="mt-10 grid gap-6 lg:grid-cols-2">
        <div className="glass p-6">
          <h2 className="text-lg font-bold text-goldlight">Composer</h2>
          <p className="mt-1 text-xs text-white/40">One draft → every connected platform. Posting goes live when accounts connect.</p>
          <textarea
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            placeholder="What are we shipping today? Try: 'anime.js — MIT-licensed animation engine. Full setup + 3 ways to earn with it →'"
            rows={5}
            className="mt-4 w-full rounded-xl border border-line bg-black/30 p-3 text-sm outline-none placeholder:text-white/25 focus:border-gold/60"
          />
          <div className="mt-3 flex flex-wrap gap-2">
            {SOCIAL_IDS.slice(0, 7).map((id) => {
              const int = INTEGRATIONS.find((i) => i.id === id)!;
              const on = targets.includes(id);
              return (
                <button
                  key={id}
                  onClick={() => toggleTarget(id)}
                  className={`rounded-full px-3 py-1 text-xs transition ${
                    on ? "border border-gold/50 bg-gold/15 text-goldlight" : "border border-line bg-card text-white/50 hover:text-white"
                  }`}
                >
                  {int.icon} {int.name}
                </button>
              );
            })}
          </div>
          <button
            onClick={saveDraft}
            className="mt-4 w-full rounded-xl bg-gradient-to-r from-goldlight to-gold py-2.5 text-sm font-semibold text-black transition hover:brightness-110"
          >
            {saved ? "✓ Draft saved" : "Save draft"}
          </button>
          <p className="mt-2 text-[11px] text-white/30">{draft.length}/280 characters for X</p>
        </div>

        {/* CALENDAR */}
        <div className="glass p-6">
          <h2 className="text-lg font-bold text-goldlight">21-day launch calendar</h2>
          <p className="mt-1 text-xs text-white/40">The agency's pre-written content plan — launch day to day 21.</p>
          <div className="mt-4 max-h-96 space-y-2 overflow-auto pr-1">
            {CALENDAR.map((c) => (
              <div key={c.day} className="flex gap-3 rounded-xl border border-line bg-black/25 p-3">
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-gold/15 text-xs font-bold text-goldlight">
                  {c.day}
                </span>
                <div className="min-w-0">
                  <p className="truncate text-sm font-medium text-white/85">{c.title}</p>
                  <p className="truncate text-xs text-white/40">{c.platform} · {c.angle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
