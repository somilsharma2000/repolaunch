# Architecture

## Stack
- **Framework:** Next.js 15 (App Router, static export friendly) + TypeScript
- **Styling:** Tailwind CSS — dark theme, gradients, glassmorphism utilities in `globals.css`
- **Data:** static JSON in `src/data/` (taxonomy.json, repos.json, stars.json) — no DB at this scale; nightly CI refreshes stars
- **Hosting:** Vercel (zero config) — swap to any Node host if needed
- **CI:** GitHub Actions — build check + nightly star sync

## Data flow
```
scripts/sync-stars.mjs ──nightly──▶ src/data/stars.json ──merge──▶ src/lib/data.ts ──▶ pages
GitHub API (existence, stars, license) is the single source of truth for repo facts
```

## Pages
| Route | What |
|---|---|
| `/` | Hero + search + trending + category grid |
| `/search?q=` | Fuzzy search over niches + repos |
| `/category` | All 20 categories |
| `/category/[slug]` | Niches in a category |
| `/niche/[slug]?license=safe` | Ranked repos, best pick, filters |
| `/repo/[slug]` | Blueprint (preview → paywall) |
| `/pricing` | Free vs $49 Lifetime |
| `/forge` | AI assistant UI (needs LLM key) |

## Extending
- **Add repos:** append to `src/data/repos.json` (must pass docs/CONTENT-PIPELINE.md), run `npm run sync:stars`, push — page + sitemap update automatically
- **Add niches/categories:** append to `src/data/taxonomy.json`
- **Payments:** wire Stripe Checkout in `/pricing` and flip the paywall check in `src/components/BlueprintView.tsx` from localStorage-demo to a server-verified session
- **Forge:** set an LLM API key and implement `src/app/api/forge/route.ts` — the UI is ready
