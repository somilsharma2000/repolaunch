"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const EXAMPLES = [
  "animation…",
  "AI chatbot…",
  "booking app…",
  "ecommerce…",
  "analytics…",
];

export default function SearchBar({ autoFocus = false }: { autoFocus?: boolean }) {
  const router = useRouter();
  const [q, setQ] = useState("");
  const [ph, setPh] = useState(0);

  // cycle the placeholder
  if (typeof window !== "undefined") {
    if (!(window as unknown as { __phTimer?: boolean }).__phTimer) {
      (window as unknown as { __phTimer?: boolean }).__phTimer = true;
      setInterval(() => setPh((p) => (p + 1) % EXAMPLES.length), 2500);
    }
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        router.push(`/search?q=${encodeURIComponent(q)}`);
      }}
      className="glass flex w-full max-w-2xl items-center gap-2 p-2 shadow-[0_0_60px_-15px_rgba(212,175,55,0.55)] focus-within:border-gold/70"
    >
      <span className="pl-3 text-white/40">🔍</span>
      <input
        value={q}
        onChange={(e) => setQ(e.target.value)}
        autoFocus={autoFocus}
        placeholder={`What do you want to build? ${EXAMPLES[ph]}`}
        className="flex-1 bg-transparent py-2 text-white outline-none placeholder:text-white/35"
        aria-label="Search"
      />
      <button
        type="submit"
        className="rounded-xl bg-gradient-to-r from-goldlight to-gold px-6 py-2 text-sm font-semibold text-black transition hover:brightness-110 active:scale-95"
      >
        Search
      </button>
    </form>
  );
}
