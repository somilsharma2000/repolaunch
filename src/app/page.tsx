import Image from "next/image";
import Link from "next/link";
import SearchBar from "@/components/SearchBar";
import { getCategories, siteStats, trendingSearches } from "@/lib/data";
import { asset } from "@/lib/asset";

const ICONS: Record<string, string> = {
  Layout: "🧩", Sparkles: "✨", Server: "🖥️", Database: "🗄️", BrainCircuit: "🧠",
  ShoppingCart: "🛒", FileText: "📄", BarChart3: "📊", Wrench: "🔧", Rocket: "🚀",
  Shield: "🔐", MessageCircle: "💬", Briefcase: "💼", Palette: "🎨", Gamepad2: "🎮",
  Search: "🔎", Bot: "🤖", MonitorSmartphone: "📱", Cpu: "🔌", GraduationCap: "🎓",
};

export default function HomePage() {
  const stats = siteStats();
  const categories = getCategories();
  const trending = trendingSearches();

  return (
    <div className="relative overflow-hidden">
      {/* faceted crystal shards — the crown's geometry, drifting */}
      <div className="facet -left-24 -top-24 h-80 w-80" />
      <div className="facet right-0 top-52 h-64 w-64" style={{ animationDelay: "-5s" }} />
      <div className="facet -right-16 bottom-10 h-56 w-56" style={{ animationDelay: "-9s" }} />

      {/* HERO */}
      <section className="facet-texture relative mx-auto flex max-w-6xl flex-col items-center px-4 pb-20 pt-20 text-center">
        <div className="fade-up mb-3 grid h-24 w-24 place-items-center rounded-2xl border border-gold/25 bg-black/50 p-3 shadow-[0_0_40px_-8px_rgba(245,192,94,0.35)]">
          <Image src={asset("/crown-logo.png")} alt="RepoLaunch" width={68} height={68} className="rounded" />
        </div>
        <span className="fade-up rounded-full border border-gold/30 bg-gold/5 px-4 py-1.5 text-xs text-goldlight/90">
          👑 {stats.repos}+ verified open-source repos, mapped to every niche
        </span>
        <h1 className="fade-up mt-6 max-w-3xl text-5xl font-extrabold tracking-tight md:text-6xl">
          What do you want to <span className="gradient-text">build?</span>
        </h1>
        <p className="fade-up mt-4 max-w-xl text-white/60">
          Search any idea and get curated, verified GitHub repos — with setup guides
          and real monetization playbooks. Free code, real income.
        </p>
        <div className="fade-up mt-8 w-full">
          <SearchBar />
        </div>
        <div className="mt-5 flex flex-wrap items-center justify-center gap-2 text-sm">
          <span className="text-white/40">Trending:</span>
          {trending.map((t) => (
            <Link
              key={t}
              href={`/search?q=${encodeURIComponent(t)}`}
              className="rounded-full border border-line bg-card px-3 py-1 text-white/70 transition hover:border-gold/60 hover:text-white"
            >
              {t}
            </Link>
          ))}
        </div>
      </section>

      {/* STATS */}
      <section className="relative mx-auto grid max-w-3xl grid-cols-3 gap-4 px-4">
        {[
          [stats.categories, "categories"],
          [stats.niches, "niches"],
          [stats.repos, "verified repos"],
        ].map(([n, label]) => (
          <div key={label as string} className="glass p-5 text-center">
            <p className="text-3xl font-bold gradient-text">{n as number}</p>
            <p className="text-xs uppercase tracking-wider text-white/40">{label as string}</p>
          </div>
        ))}
      </section>

      {/* CATEGORIES */}
      <section className="mx-auto max-w-6xl px-4 py-20">
        <h2 className="text-center text-2xl font-bold">Every niche, mapped</h2>
        <p className="mt-2 text-center text-white/50">
          Start from a category — each niche shows only trusted, verified repos.
        </p>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((c) => (
            <Link
              key={c.slug}
              href={`/category/${c.slug}`}
              className="glass card-hover fade-up p-5"
            >
              <span className="text-2xl">{ICONS[c.icon] ?? "📦"}</span>
              <h3 className="mt-3 font-semibold">{c.name}</h3>
              <p className="mt-1 line-clamp-2 text-xs text-white/50">{c.description}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="mx-auto max-w-6xl px-4 pb-20">
        <h2 className="text-center text-2xl font-bold">How it works</h2>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {[
            ["1", "Search your idea", "Type anything — \"animation\", \"booking app\", \"AI chatbot\". We match it to the niche."],
            ["2", "Get trusted repos", "Only verified repos: 500+ stars, maintained, documented, license checked."],
            ["3", "Launch & earn", "Follow the blueprint: setup steps, config files, and 3 monetization playbooks."],
          ].map(([n, title, body]) => (
            <div key={n} className="glass fade-up p-6">
              <span className="text-sm font-bold text-goldlight">STEP {n}</span>
              <h3 className="mt-2 font-semibold">{title}</h3>
              <p className="mt-1 text-sm text-white/50">{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-4xl px-4 pb-24 text-center">
        <div className="glass relative overflow-hidden p-10">
          <div className="facet -top-16 left-1/2 h-56 w-56 -translate-x-1/2" />
          <Image src={asset("/crown-logo.png")} alt="" width={48} height={48} className="relative mx-auto mb-4 opacity-90" />
          <h2 className="relative text-3xl font-bold">
            Every blueprint. Every playbook. <span className="gradient-text">$49 forever.</span>
          </h2>
          <p className="relative mt-3 text-white/60">
            One payment, lifetime access, all future repos included. 14-day money-back guarantee.
          </p>
          <Link
            href="/pricing"
            className="relative mt-6 inline-block rounded-xl bg-gradient-to-r from-goldlight to-gold px-8 py-3 font-semibold text-black transition hover:brightness-110 active:scale-95"
          >
            👑 Get Lifetime access
          </Link>
        </div>
      </section>
    </div>
  );
}
