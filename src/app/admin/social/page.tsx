"use client";

import { useEffect, useState } from "react";
import { CALENDAR, SOCIAL_IDS, INTEGRATIONS } from "@/lib/admin";
import { LAUNCH_POSTS, PLATFORM_RULES, getRule } from "@/lib/social";

type Tab = "composer" | "drafts" | "launch";
interface Draft { id: string; text: string; targets: string[]; saved: string }

export default function SocialStudioPage() {
  const [tab, setTab] = useState<Tab>("composer");
  const [draft, setDraft] = useState("");
  const [targets, setTargets] = useState<string[]>(["x"]);
  const [savedFlash, setSavedFlash] = useState(false);
  const [connected, setConnected] = useState<string[]>([]);
  const [drafts, setDrafts] = useState<Draft[]>([]);
  const [copied, setCopied] = useState<string>("");
  const [calFilter, setCalFilter] = useState<string>("all");

  useEffect(() => {
    setConnected(SOCIAL_IDS.filter((id) => localStorage.getItem(`repolaunch_int_${id}`) === "connected"));
    try { setDrafts(JSON.parse(localStorage.getItem("repolaunch_drafts") || "[]")); } catch {}
  }, []);

  const toggleTarget = (id: string) =>
    setTargets((t) => (t.includes(id) ? t.filter((x) => x !== id) : [...t, id]));

  const saveDraft = () => {
    if (!draft.trim()) return;
    const next = [{ id: crypto.randomUUID(), text: draft, targets, saved: new Date().toLocaleDateString() }, ...drafts];
    setDrafts(next);
    localStorage.setItem("repolaunch_drafts", JSON.stringify(next));
    setSavedFlash(true); setTimeout(() => setSavedFlash(false), 2000);
  };

  const deleteDraft = (id: string) => {
    const next = drafts.filter((d) => d.id !== id);
    setDrafts(next);
    localStorage.setItem("repolaunch_drafts", JSON.stringify(next));
  };

  const loadDraft = (d: Draft) => { setDraft(d.text); setTargets(d.targets); setTab("composer"); };

  const copy = async (text: string, id: string) => {
    await navigator.clipboard.writeText(text);
    setCopied(id); setTimeout(() => setCopied(""), 1800);
  };

  const strictest = Math.min(...(targets.length ? targets : ["x"]).map((t) => getRule(t)?.limit ?? 280));
  const overLimit = draft.length > strictest;

  const calDays = calFilter === "all" ? CALENDAR : CALENDAR.filter((c) => c.platform.toLowerCase().startsWith(calFilter));

  return (
    <div>
      <h1 className="text-3xl font-bold">Social Studio <span className="gradient-text">📣</span></h1>
      <p className="mt-2 max-w-2xl text-white/60">
        Your built-in social media agency: platform-aware composer, draft library, ready-to-post launch content, and the 21-day calendar.
      </p>

      {/* ACCOUNTS */}
      <section className="mt-8">
        <h2 className="text-lg font-bold text-goldlight">Accounts</h2>
        <div className="mt-4 grid gap-3 grid-cols-3 sm:grid-cols-5 lg:grid-cols-9">
          {SOCIAL_IDS.map((id) => {
            const int = INTEGRATIONS.find((i) => i.id === id)!;
            const on = connected.includes(id);
            return (
              <div key={id} className={`glass p-4 text-center ${on ? "ring-1 ring-gold/50" : ""}`}>
                <span className="text-2xl">{int.icon}</span>
                <p className="mt-1 text-xs font-semibold">{int.name}</p>
                <p className={`mt-1 text-[10px] ${on ? "text-goldlight" : "text-white/35"}`}>{on ? "connected ✓" : "not connected"}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* TABS */}
      <div className="mt-10 flex gap-2">
        {([["composer", "✍️ Composer"], ["drafts", `📁 Drafts (${drafts.length})`], ["launch", "🚀 Launch posts"]] as [Tab, string][]).map(([t, label]) => (
          <button key={t} onClick={() => setTab(t)}
            className={`rounded-xl px-4 py-2 text-sm font-medium transition ${tab === t ? "bg-gradient-to-r from-goldlight to-gold text-black" : "border border-line bg-card text-white/60 hover:text-white"}`}>
            {label}
          </button>
        ))}
      </div>

      {/* COMPOSER */}
      {tab === "composer" && (
        <section className="mt-6 grid gap-6 lg:grid-cols-2">
          <div className="glass p-6">
            <textarea
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              placeholder="What are we shipping today? Try: 'anime.js — MIT-licensed animation engine. Full setup + 3 ways to earn with it →'"
              rows={6}
              className="w-full rounded-xl border border-line bg-black/30 p-3 text-sm outline-none placeholder:text-white/25 focus:border-gold/60"
            />
            <p className={`mt-1 text-[11px] ${overLimit ? "text-red-400" : "text-white/35"}`}>
              {draft.length}/{strictest} chars — limit of the strictest selected platform{overLimit ? " — OVER LIMIT" : ""}
            </p>

            <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-white/40">Target platforms</p>
            <div className="mt-2 flex flex-wrap gap-2">
              {PLATFORM_RULES.map((p) => {
                const on = targets.includes(p.id);
                const fits = draft.length <= p.limit;
                return (
                  <button key={p.id} onClick={() => toggleTarget(p.id)}
                    className={`rounded-full px-3 py-1 text-xs transition ${on ? (fits ? "border border-gold/50 bg-gold/15 text-goldlight" : "border border-red-500/40 bg-red-500/10 text-red-300") : "border border-line bg-card text-white/50 hover:text-white"}`}>
                    {p.icon} {p.name}
                  </button>
                );
              })}
            </div>

            <button onClick={saveDraft}
              className="mt-4 w-full rounded-xl bg-gradient-to-r from-goldlight to-gold py-2.5 text-sm font-semibold text-black transition hover:brightness-110">
              {savedFlash ? "✓ Saved to draft library" : "Save to draft library"}
            </button>
            <p className="mt-2 text-[11px] text-white/30">Posting goes live when accounts connect via Integrations.</p>
          </div>

          <div className="glass p-6">
            <h2 className="text-sm font-semibold text-white/80">Best time to post</h2>
            <p className="mt-1 text-xs text-white/40">Per-platform posting windows — the agency's cheat sheet.</p>
            <div className="mt-4 space-y-2">
              {PLATFORM_RULES.map((p) => (
                <div key={p.id} className={`flex items-center justify-between rounded-xl border border-line bg-black/25 px-3 py-2 text-xs ${targets.includes(p.id) ? "ring-1 ring-gold/40" : ""}`}>
                  <span className="text-white/75">{p.icon} {p.name}</span>
                  <span className="text-white/45">{p.bestTime}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* DRAFT LIBRARY */}
      {tab === "drafts" && (
        <section className="mt-6 space-y-3">
          {drafts.length === 0 && (
            <div className="glass p-8 text-center text-white/50">
              No drafts yet — write one in the Composer tab, or grab a ready-made launch post below. 🚀
              <div><button onClick={() => setTab("launch")} className="mt-3 rounded-full border border-line bg-card px-3 py-1 text-xs text-goldlight">Browse launch posts</button></div>
            </div>
          )}
          {drafts.map((d) => (
            <div key={d.id} className="glass flex items-start justify-between gap-4 p-4">
              <div className="min-w-0">
                <p className="truncate text-sm text-white/80">{d.text.slice(0, 140)}{d.text.length > 140 ? "…" : ""}</p>
                <p className="mt-1 text-[11px] text-white/35">
                  {d.targets.map((t) => getRule(t)?.name).filter(Boolean).join(" · ") || "no platform"} · saved {d.saved} · {d.text.length} chars
                </p>
              </div>
              <div className="flex shrink-0 gap-2">
                <button onClick={() => copy(d.text, d.id)} className="rounded-lg border border-line bg-card px-3 py-1 text-xs text-white/70 hover:text-white">
                  {copied === d.id ? "✓ copied" : "Copy"}
                </button>
                <button onClick={() => loadDraft(d)} className="rounded-lg bg-gold/15 px-3 py-1 text-xs text-goldlight">Edit</button>
                <button onClick={() => deleteDraft(d.id)} className="rounded-lg px-2 py-1 text-xs text-white/40 hover:text-red-400">✕</button>
              </div>
            </div>
          ))}
        </section>
      )}

      {/* LAUNCH POSTS */}
      {tab === "launch" && (
        <section className="mt-6 space-y-3">
          <p className="text-xs text-white/40">
            Pre-written from the verified blueprints — every star count and license pulled from the catalog. Copy → paste → post.
          </p>
          {LAUNCH_POSTS.map((p) => {
            const rule = getRule(p.platform);
            return (
              <div key={p.id} className="glass fade-up p-5">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-xs text-white/40">{rule?.icon} {rule?.name} · from the {p.repo} blueprint · angle: {p.angle}</p>
                    <p className="mt-2 whitespace-pre-line text-sm leading-relaxed text-white/85">{p.text}</p>
                  </div>
                  <button onClick={() => copy(p.text, p.id)}
                    className="shrink-0 rounded-xl bg-gradient-to-r from-goldlight to-gold px-4 py-1.5 text-xs font-semibold text-black">
                    {copied === p.id ? "✓" : "Copy"}
                  </button>
                </div>
                <p className={`mt-3 text-[11px] ${p.text.length > (rule?.limit ?? 280) ? "text-red-400" : "text-white/25"}`}>
                  {p.text.length}/{rule?.limit} chars{p.text.length > (rule?.limit ?? 280) ? " — trim before posting" : " ✓ fits"}
                </p>
              </div>
            );
          })}
        </section>
      )}

      {/* CALENDAR */}
      <section className="mt-12">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h2 className="text-lg font-bold text-goldlight">21-day launch calendar</h2>
          <div className="flex flex-wrap gap-1.5">
            {["all", "x", "linkedin", "instagram", "tiktok", "youtube", "reddit", "telegram", "producthunt"].map((f) => (
              <button key={f} onClick={() => setCalFilter(f)}
                className={`rounded-full px-2.5 py-1 text-[11px] transition ${calFilter === f ? "bg-white text-black" : "border border-line bg-card text-white/50 hover:text-white"}`}>
                {f === "all" ? "All" : getRule(f)?.icon}
              </button>
            ))}
          </div>
        </div>
        <div className="mt-4 grid gap-2 md:grid-cols-2 lg:grid-cols-3">
          {calDays.map((c) => (
            <div key={c.day} className="flex gap-3 rounded-xl border border-line bg-black/25 p-3">
              <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-gold/15 text-xs font-bold text-goldlight">{c.day}</span>
              <div className="min-w-0">
                <p className="text-sm font-medium text-white/85">{c.title}</p>
                <p className="text-xs text-white/40">{c.platform} · {c.angle}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
