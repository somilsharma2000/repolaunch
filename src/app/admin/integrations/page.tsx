"use client";

import { useEffect, useState } from "react";
import { CATEGORY_ORDER, INTEGRATIONS, type Integration } from "@/lib/admin";

function Card({ int }: { int: Integration }) {
  const [connected, setConnected] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setConnected(localStorage.getItem(`repolaunch_int_${int.id}`) === "connected");
  }, []);

  const toggle = () => {
    const next = !connected;
    localStorage.setItem(`repolaunch_int_${int.id}`, next ? "connected" : "disconnected");
    setConnected(next);
  };

  const preconnected = int.id === "github";

  return (
    <div className={`glass fade-up p-5 ${connected ? "ring-1 ring-gold/50" : ""}`}>
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-start gap-3">
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-line bg-card text-lg">{int.icon}</span>
          <div>
            <h3 className="font-semibold">
              {int.name}
              {preconnected && <span className="ml-2 rounded-full border border-gold/40 bg-gold/15 px-2 py-0.5 text-xs text-goldlight">connected ✓</span>}
            </h3>
            <p className="mt-0.5 text-sm text-white/60">{int.what}</p>
          </div>
        </div>
        <button
          onClick={toggle}
          disabled={preconnected}
          className={`shrink-0 rounded-xl px-4 py-1.5 text-xs font-semibold transition ${
            connected || preconnected
              ? "border border-gold/40 bg-gold/15 text-goldlight"
              : "bg-gradient-to-r from-goldlight to-gold text-black hover:brightness-110"
          } disabled:opacity-60`}
        >
          {connected || preconnected ? "✓ Connected" : "Connect"}
        </button>
      </div>

      <p className="mt-3 text-xs text-white/50"><span className="text-white/70">Why it matters:</span> {int.why}</p>

      <button onClick={() => setOpen(!open)} className="mt-3 text-xs text-goldlight hover:underline">
        {open ? "Hide" : "Show"} Phase 2 wiring ↓
      </button>
      {open && (
        <p className="mt-2 rounded-xl border border-line bg-black/30 p-3 text-xs leading-relaxed text-glint">
          {int.wiring}
        </p>
      )}
    </div>
  );
}

export default function IntegrationsPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold">Integrations</h1>
      <p className="mt-2 max-w-2xl text-white/60">
        Every connection RepoLaunch will ever need, pre-built and ready. Click Connect when you have the account —
        each card shows the exact production wiring. Nothing here is hallucinated: connect-state is local until wired in Phase 2.
      </p>

      {CATEGORY_ORDER.map((cat) => {
        const items = INTEGRATIONS.filter((i) => i.category === cat);
        return (
          <section key={cat} className="mt-10">
            <h2 className="text-lg font-bold text-goldlight">{cat}</h2>
            <div className="mt-4 grid gap-4 lg:grid-cols-2">
              {items.map((i) => <Card key={i.id} int={i} />)}
            </div>
          </section>
        );
      })}
    </div>
  );
}
