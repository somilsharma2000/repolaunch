# Content Pipeline — how a repo becomes a published blueprint

The product's entire trust rests on this pipeline. No shortcuts.

## Step 1 — Verify (machine)
Run `npm run sync:stars` or the nightly CI. A repo must return from the GitHub API with:
- ✅ exists at the exact owner/name
- ✅ 500+ stars (or notable within a small niche — document the exception)
- ✅ license present in the API response (no license = excluded, period)
- ✅ pushed within 12 months OR a timeless classic (document which)

## Step 2 — Classify license (policy)
- MIT / Apache 2.0 / BSD-* / ISC → `licenseType: "safe"` (green badge)
- GPL / AGPL / BSL / SSPL / custom → `licenseType: "warning"` (red badge) + write a plain-English `licenseNote`: what you CAN do, what you CANNOT do, and the safe workaround
- Unknown/no license → do not publish

## Step 3 — Write the blueprint (human + AI)
While the repo's official README is open, write:
- `whatIsIt` — 2–3 plain-English sentences
- `whereToUse` — 3–5 concrete use cases
- `setup` — numbered steps copied/adapted from the OFFICIAL docs (never from memory)
- `configFiles` — 1+ real config (docker-compose, .env.example, starter snippet) — paste from the repo, don't invent
- `playbooks` — exactly 3: who pays you, what you charge (real numbers), step-by-step execution, time to first revenue
- `difficulty`, `timeToLaunch`, `techStack`

## Step 4 — Gate (checklist)
- [ ] Every repo fact machine-verified (Step 1)
- [ ] Setup steps match the official README
- [ ] Config file actually works if pasted
- [ ] License note is accurate for the exact license version
- [ ] 3 playbooks present with real pricing
- [ ] Best pick assigned for its niche

## Step 5 — Publish
Append to `src/data/repos.json` with `isPublished: true`, run `npm run sync:stars`, push. The niche page, search, sitemap, and SEO tags update automatically.

**Cadence target:** 10–15 blueprints/week. Quality over quantity — one wrong setup step costs more trust than ten missing repos gain.
