import Link from "next/link";
import SearchBar from "@/components/SearchBar";
import { search } from "@/lib/data";

export const metadata = { title: "Search" };

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const { q = "" } = await searchParams;
  const results = search(q);

  return (
    <div className="relative mx-auto flex min-h-screen max-w-3xl flex-col items-center px-4 py-16">
      <SearchBar autoFocus={true} />
      <p className="mt-6 text-sm text-white/50">
        {q ? `${results.length} result${results.length === 1 ? "" : "s"} for “${q}”` : "Search anything you want to build"}
      </p>

      <div className="mt-6 w-full space-y-3">
        {results.map((r) => (
          <Link
            key={r.type + r.slug}
            href={r.type === "niche" ? `/niche/${r.slug}` : `/repo/${r.slug}`}
            className="glass card-hover fade-up flex items-center justify-between p-4"
          >
            <div>
              <p className="font-semibold">
                {r.title}
                <span className="ml-2 rounded-full border border-line px-2 py-0.5 text-xs text-white/50">
                  {r.type === "niche" ? "niche" : "repo"}
                </span>
              </p>
              <p className="mt-0.5 text-sm text-white/50">{r.subtitle}</p>
            </div>
            <span className="text-white/30">→</span>
          </Link>
        ))}

        {q && results.length === 0 && (
          <div className="glass p-8 text-center">
            <p className="text-white/60">
              No matches for “{q}” yet. Try a broader term like
              <Link href="/search?q=animation" className="mx-1 text-glint hover:underline">animation</Link>,
              <Link href="/search?q=backend" className="mx-1 text-glint hover:underline">backend</Link>, or
              <Link href="/search?q=AI" className="mx-1 text-glint hover:underline">AI</Link>.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
