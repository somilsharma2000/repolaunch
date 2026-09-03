import Link from "next/link";

const NAV = [
  { href: "/admin", label: "Dashboard", icon: "👑" },
  { href: "/admin/integrations", label: "Integrations", icon: "🔌" },
  { href: "/admin/analytics", label: "Analytics", icon: "📊" },
  { href: "/admin/social", label: "Social Studio", icon: "📣" },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto flex max-w-7xl gap-6 px-4 py-24 md:py-16">
      <aside className="hidden w-56 shrink-0 md:block">
        <p className="px-3 text-xs font-semibold uppercase tracking-wider text-white/40">Admin</p>
        <nav className="mt-3 space-y-1">
          {NAV.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className="flex items-center gap-2 rounded-xl px-3 py-2 text-sm text-white/70 transition hover:bg-card hover:text-white"
            >
              <span>{n.icon}</span> {n.label}
            </Link>
          ))}
        </nav>
        <div className="glass mt-8 p-4 text-xs text-white/50">
          <p className="font-semibold text-goldlight">Demo mode</p>
          <p className="mt-1">Connect-state is local until Phase 2 wiring. Every card lists its exact production hookup.</p>
        </div>
      </aside>
      <main className="min-w-0 flex-1">
        <div className="mb-6 flex items-center gap-3 md:hidden">
          {NAV.map((n) => (
            <Link key={n.href} href={n.href} className="rounded-full border border-line bg-card px-3 py-1 text-xs text-white/70">
              {n.icon} {n.label}
            </Link>
          ))}
        </div>
        {children}
      </main>
    </div>
  );
}
