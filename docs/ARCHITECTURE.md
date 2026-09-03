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

## Visual design language (crown/obsidian-gold)
The brand identity is built around the crown logo (`public/crown-logo.png`, also used as the favicon via `src/app/icon.png`): black obsidian crystal facets with polished gold/bronze metallic edges — a premium, "you're paying for a crown, not just code" feel.

- **Colors** (`tailwind.config.ts`): `base` (#0a0908 obsidian), `card` (#141210 charcoal), `line` (#3a2f1c bronze border), `gold`/`goldlight`/`bronze` (the metal palette), `glint` (#7ea8c4 — the faint cool sheen visible in the crystal facets, used sparingly for code blocks/step numbers).
- **Shapes**: `.facet` in `globals.css` replaces the old blurred gradient "orbs" with clip-path pentagon/diamond shards echoing the crown's crystal geometry — drifting slowly, low opacity.
- **Typography accents**: `.gradient-text` is a gold shimmer (goldlight → gold → bronze), used for hero headlines and stat numbers.
- **Iconography**: 👑 marks anything premium/lifetime (CTA buttons, "Best pick" badges, pricing's "Crown Tier" label).
- When adding new UI, reuse `gold`/`goldlight`/`bronze`/`glint` tokens — never reintroduce purple/violet/cyan, that was the old (retired) direction.
