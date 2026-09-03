# Tools, Skills & Dependencies — everything needed to make RepoLaunch perfect & live

## Recommended skill stack (for AI agents working on this repo)

| Skill / tool | Repo / link | What it does for RepoLaunch | Status |
|---|---|---|---|
| webapp-testing (Playwright skill) | github.com/microsoft/playwright | Click through every page like a real user before shipping — required by the vibe-coding playbook | ✅ Installed (Base44 skill `github--webapp-testing`) |
| SEO optimization skill | — (Base44 skill store) | Programmatic SEO for 124 niche pages: "best open source X" titles, meta, OG images | 🔻 Suggested for install |
| Stripe payments skill | github.com/stripe/stripe-node | Wire the real $49 Lifetime checkout in Phase 2 (replaces the demo localStorage paywall) | 🔻 Suggested for install |
| GitHub Actions skill | github.com/actions/awesome-actions | Extend CI: Lighthouse runs, link checks, deploy on push | optional |

## Runtime dependencies (already in package.json)
- Next.js 15 — github.com/vercel/next.js
- React 19 — github.com/facebook/react
- Tailwind CSS 3 — github.com/tailwindlabs/tailwindcss

## Recommended additions before/during launch (each linked)
| Tool | Link | Why |
|---|---|---|
| Vercel | vercel.com · github.com/vercel | Free hosting, zero-config Next.js deploys, preview URLs per PR |
| Stripe | stripe.com · github.com/stripe/stripe-node | $49 one-time checkout + webhooks for the Lifetime unlock |
| Upstash Redis or Vercel KV | github.com/upstash/upstash-redis | Forge AI session counters (3-free-question gate, server-side) |
| An LLM API (OpenAI/Anthropic/OpenRouter) | platform.openai.com | Forge AI backend — ground prompts on `src/lib/data.ts` catalog |
| Plausible / Umami self-host | github.com/umami-software/umami | Privacy-first analytics on the marketing site (dogfood our own blueprint!) |
| lucide-react | github.com/lucide-icons/lucide | Swap the emoji icons in `src/app/page.tsx` for real icons when polishing |
| shadcn/ui | github.com/shadcn-ui/ui | If the UI needs complex components (dialogs, dropdowns) — Tailwind-native, matches our design tokens |
| next-sitemap | github.com/iamvishnusankar/next-sitemap | Only if the built-in `src/app/sitemap.ts` ever needs advanced config |
| Google Search Console | search.google.com/search-console | Submit the sitemap after the domain goes live |
| Playwright (local) | github.com/microsoft/playwright | `npx playwright test` smoke test every route before deploy |

## Launch-day checklist (technical)
- [ ] `npm run build` green, all routes 200
- [ ] `npm run sync:stars` clean output (no ⚠️ warnings)
- [ ] Stripe live keys in env (`STRIPE_SECRET_KEY`), checkout tested end-to-end
- [ ] Forge wired + gate enforced server-side
- [ ] Deployed to Vercel, custom domain, HTTPS
- [ ] robots.txt + sitemap.xml reachable; sitemap submitted in Search Console
- [ ] Analytics installed
