"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const FREE = ["Search + niche pages", "Repo previews (what it is, where to use it)", "3 Forge AI questions", "Verification checklists"];
const PAID = ["Everything in Free", "Full setup guides + config files", "3 monetization playbooks per repo", "Unlimited Forge AI", "All future repos included"];

export default function PricingPage() {
  const [paid, setPaid] = useState(false);
  useEffect(() => setPaid(localStorage.getItem("repolaunch_paid") === "true"), []);

  return (
    <div className="mx-auto max-w-4xl px-4 py-16 text-center">
      <Image src="/crown-logo.png" alt="" width={56} height={56} className="mx-auto mb-4 opacity-95" />
      <h1 className="text-4xl font-extrabold">
        One payment. <span className="gradient-text">Forever.</span>
      </h1>
      <p className="mt-3 text-white/60">
        Unlock every full blueprint, all future repos, and unlimited Forge AI. No subscriptions.
      </p>

      <div className="mt-10 grid gap-6 text-left md:grid-cols-2">
        <div className="glass p-8">
          <h2 className="text-xl font-bold">Free</h2>
          <p className="mt-1 text-3xl font-extrabold">$0</p>
          <ul className="mt-6 space-y-2 text-sm text-white/70">
            {FREE.map((f) => <li key={f}>✓ {f}</li>)}
          </ul>
        </div>
        <div className="glass relative overflow-hidden p-8 ring-1 ring-gold/60">
          <div className="facet -top-20 right-0 h-40 w-40" />
          <span className="absolute right-4 top-4 rounded-full border border-gold/40 bg-gold/15 px-2 py-0.5 text-xs font-bold text-goldlight">
            👑 CROWN TIER
          </span>
          <h2 className="text-xl font-bold">Lifetime</h2>
          <p className="mt-1 text-3xl font-extrabold">$49 <span className="text-sm font-normal text-white/50">once</span></p>
          <ul className="mt-6 space-y-2 text-sm text-white/70">
            {PAID.map((f) => <li key={f}>✓ {f}</li>)}
          </ul>
          <button
            onClick={() => {
              // DEMO unlock — replace with Stripe Checkout redirect in production (see docs/ARCHITECTURE.md)
              localStorage.setItem("repolaunch_paid", "true");
              setPaid(true);
            }}
            disabled={paid}
            className="relative mt-8 w-full rounded-xl bg-gradient-to-r from-goldlight to-gold py-3 font-semibold text-black transition enabled:hover:brightness-110 disabled:opacity-50"
          >
            {paid ? "✓ Lifetime access active" : "Get lifetime access"}
          </button>
        </div>
      </div>
      <p className="mt-6 text-xs text-white/40">
        14-day money-back guarantee · Demo checkout — wire Stripe before launch (docs/LAUNCH-PLAN.md, Phase 2)
      </p>
    </div>
  );
}
