import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-line/60 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-4 text-sm text-white/50">
        <div className="flex gap-6">
          <Link href="/category" className="hover:text-white">Categories</Link>
          <Link href="/forge" className="hover:text-white">Forge AI</Link>
          <Link href="/pricing" className="hover:text-white">Pricing</Link>
          <a href="https://github.com/somilsharma2000/repolaunch" className="hover:text-white">GitHub</a>
        </div>
        <p>© 2026 RepoLaunch — every repo verified, every blueprint real.</p>
      </div>
    </footer>
  );
}
