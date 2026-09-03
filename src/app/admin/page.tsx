"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { INTEGRATIONS } from "@/lib/admin";

const LINKS = [
  { href: "/admin/integrations", title: "🔌 Integrations", body: "Connect everything: payments, analytics, socials, email, SEO, infra — 23 ready slots." },
  { href: "/admin/analytics", title: "📊 Analytics", body: "Website + social performance in one dashboard — live once GA4 and social APIs connect." },
  { href: "/admin/social", title: "📣 Social Studio", body: "Your built-in social agency: accounts, composer, and a 21-day launch calendar." },
];

export default function AdminHome() {
  const [connected, setConnected] = useState<string[]>([]);
  useEffect(() => {
    setConnected(INTEGRATIONS.filter((i) => localStorage.getItem(`repolaunch_int_${i.id}`) === "connected").map((i) => i.id));
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold">Command Center <span className="gradient-text">👑</span></h1>
      <p className="mt-2 text-white/60">Every connection, metric, and post for RepoLaunch — one place.</p>

      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        <div className="glass p-6">
          <p className="text-3xl font-bold gradient-text">{connected.length}</p>
          <p className="text-xs uppercase tracking-wider text-white/40">integrations connected</p>
        </div>
        <div className="glass p-6">
          <p className="text-3xl font-bold gradient-text">{INTEGRATIONS.length - connected.length}</p>
          <p className="text-xs uppercase tracking-wider text-white/40">ready to connect</p>
        </div>
        <div className="glass p-6">
          <p className="text-3xl font-bold gradient-text">23</p>
          <p className="text-xs uppercase tracking-wider text-white/40">total slots</p>
        </div>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {LINKS.map((l) => (
          <Link key={l.href} href={l.href} className="glass card-hover p-6">
            <h2 className="font-semibold">{l.title}</h2>
            <p className="mt-1 text-sm text-white/50">{l.body}</p>
            <p className="mt-3 text-sm text-goldlight">Open →</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
