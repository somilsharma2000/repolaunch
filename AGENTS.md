# AGENTS.md — read this before touching anything

You (an AI coding agent) are working on **RepoLaunch**: the search engine of trusted open-source repos. Search any idea → curated, **verified** GitHub repos → each with a setup guide and 3 monetization playbooks. Free tier + $49 one-time Lifetime unlock.

**Golden rule: never invent facts about repositories.** Star counts, licenses, activity, and setup steps must come from the GitHub API or the repo's official README (see `docs/CONTENT-PIPELINE.md` for the full gate). A single fake setup step destroys the product's entire value proposition. If you can't verify it, don't publish it.

## Read first
1. `docs/PRD.md` — what we're building and why
2. `docs/VIBE-CODING-PLAYBOOK.md` — the 7 rules of how we AI-code (small diffs, verify like a user, facts from APIs)
3. `docs/CONTENT-PIPELINE.md` — how a repo becomes a published blueprint
4. `docs/LAUNCH-PLAN.md` — current phase and what's next
5. `docs/TOOLS-AND-SKILLS.md` — recommended tooling, skills, and links

## File map
```
src/data/taxonomy.json   20 categories, 124 niches — the product's taxonomy
src/data/repos.json      12 seeded blueprints (isPublished gates rendering)
src/data/stars.json      machine-written by scripts/sync-stars.mjs — DO NOT hand-edit
src/lib/data.ts          all data access + fuzzy search (single source of truth)
src/components/          UI atoms (SearchBar, RepoCard, LicenseBadge, BlueprintView)
src/app/                 pages: /, /search, /category(+/[slug]), /niche/[slug],
                          /repo/[slug], /pricing, /forge, /api/forge (stub), robots.ts, sitemap.ts
scripts/sync-stars.mjs   GitHub API verification + star sync (anti-hallucination gate)
.github/workflows/       ci.yml (build check) + sync-stars.yml (nightly)
```

## Commands
```bash
npm install          # first time
npm run dev          # dev server → http://localhost:3000
npm run build        # production build (CI runs this on every push)
npm run start        # serve the production build
npm run sync:stars   # verify all repos exist on GitHub + refresh star counts
```

## Conventions
- Next.js 15 App Router, TypeScript strict, Tailwind. Data is static JSON — no DB.
- Dark theme only: use the design tokens in `src/app/globals.css` (`glass`, `gradient-text`, `orb`, `card-hover`) — don't invent new colors.
- License policy: MIT/Apache/BSD/ISC → `licenseType: "safe"`. GPL/AGPL/BSL/custom → `"warning"` + a plain-English `licenseNote`. No license → not publishable, period.
- Every user-visible page must be clicked through before it's "done" (use Playwright — see docs/TOOLS-AND-SKILLS.md).
- `localStorage.getItem("repolaunch_paid")` is a DEMO paywall. Production replaces it with a server-verified Stripe session (docs/LAUNCH-PLAN.md Phase 2). Never call it real.
- Forge (`src/app/api/forge/route.ts`) is a stub — the 3-free-question gate MUST be enforced server-side when you wire the LLM.

## Common tasks
- **Add a repo:** follow `docs/CONTENT-PIPELINE.md` steps 1–5, then append to `src/data/repos.json`, run `npm run sync:stars`, push. Pages, sitemap, and search update automatically.
- **Add a niche/category:** append to `src/data/taxonomy.json`. Niche pages render with an honest "in progress" state until repos exist.
- **Fix a bug:** reproduce it locally first, smallest fix, verify by clicking, commit with a clear message.

## Known good state (verify against this)
- `npm run build` compiles clean: ~167 static pages (124 niche + 20 category + 12 repo + utility routes)
- All 12 repo routes return 200 with full HTML (~17–25 KB each)
- Strapi is the only "warning" license repo (BSL-1.1) — intentional, it demonstrates the red badge
