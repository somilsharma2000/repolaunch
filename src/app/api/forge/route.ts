import { NextResponse } from "next/server";

/**
 * Forge AI — stub endpoint.
 *
 * PRODUCTION WIRING (docs/LAUNCH-PLAN.md Phase 2):
 * 1. Add an LLM API key as an environment variable (e.g. OPENAI_API_KEY).
 * 2. Ground the prompt with this platform's repo data (import from @/lib/data —
 *    this file runs server-side, so the full catalog is available).
 * 3. Enforce the free-question gate SERVER-SIDE (count messages per session;
 *    3 free, then require the paid flag) — never trust the client.
 */
export async function POST(req: Request) {
  const { message } = await req.json();

  const reply =
    process.env.OPENAI_API_KEY
      ? `Forge here! You asked: "${message}" — wire me to your LLM key in src/app/api/forge/route.ts and I'll answer with the full platform in my head 🔥`
      : "Forge is almost live — the chat UI is ready, the backend just needs an LLM API key (see src/app/api/forge/route.ts). Everything else works!";

  return NextResponse.json({ reply });
}
