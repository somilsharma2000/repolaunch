"use client";

import { useState } from "react";

interface Msg { role: "user" | "forge"; text: string }

const SUGGESTED = [
  "Best repo for a booking app?",
  "How do I monetize PocketBase?",
  "MIT vs AGPL — what's the difference?",
];

export default function ForgePage() {
  const [messages, setMessages] = useState<Msg[]>([
    { role: "forge", text: "Hey! I'm Forge 🔥 Ask me about any repo, setup, license, or how to earn — I've got the whole platform in my head." },
  ]);
  const [input, setInput] = useState("");

  const send = async (text: string) => {
    if (!text.trim()) return;
    setMessages((m) => [...m, { role: "user", text }]);
    setInput("");
    try {
      const res = await fetch("/api/forge", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text }),
      });
      const data = await res.json();
      setMessages((m) => [...m, { role: "forge", text: data.reply }]);
    } catch {
      setMessages((m) => [...m, { role: "forge", text: "Hmm, connection hiccup — try again in a sec." }]);
    }
  };

  return (
    <div className="mx-auto flex min-h-screen max-w-2xl flex-col px-4 py-16">
      <div className="flex items-center gap-3">
        <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-goldlight to-gold text-black">🔥</span>
        <div>
          <h1 className="text-xl font-bold">Forge AI</h1>
          <p className="text-xs text-white/40">3 free questions · unlimited with Lifetime</p>
        </div>
      </div>

      <div className="glass mt-6 flex flex-1 flex-col gap-3 p-4">
        {messages.map((m, i) => (
          <div
            key={i}
            className={`max-w-[85%] rounded-2xl px-4 py-2 text-sm ${
              m.role === "forge" ? "bg-card text-white/80" : "ml-auto bg-gold/20 text-white"
            }`}
          >
            {m.text}
          </div>
        ))}
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {SUGGESTED.map((s) => (
          <button key={s} onClick={() => send(s)} className="rounded-full border border-line bg-card px-3 py-1 text-xs text-white/60 hover:text-white">
            {s}
          </button>
        ))}
      </div>

      <form
        onSubmit={(e) => { e.preventDefault(); send(input); }}
        className="glass mt-4 flex items-center gap-2 p-2"
      >
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask Forge anything…"
          className="flex-1 bg-transparent px-2 py-2 text-sm outline-none placeholder:text-white/30"
        />
        <button type="submit" className="rounded-xl bg-gradient-to-r from-gold to-bronze px-5 py-2 text-sm font-semibold text-black">
          Send
        </button>
      </form>
    </div>
  );
}
