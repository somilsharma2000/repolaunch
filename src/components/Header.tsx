import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-line/60 bg-base/70 backdrop-blur-lg">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-2 font-bold tracking-tight">
          <span className="grid h-7 w-7 place-items-center rounded-lg bg-gradient-to-br from-accent to-cyanx text-sm">✦</span>
          RepoLaunch
        </Link>
        <nav className="hidden items-center gap-6 text-sm text-white/70 md:flex">
          <Link href="/category" className="hover:text-white">Categories</Link>
          <Link href="/forge" className="hover:text-white">Forge AI</Link>
          <Link href="/pricing" className="hover:text-white">Pricing</Link>
        </nav>
        <Link
          href="/pricing"
          className="rounded-xl bg-gold px-4 py-1.5 text-sm font-semibold text-black transition hover:brightness-110"
        >
          Get Lifetime — $49
        </Link>
      </div>
    </header>
  );
}
