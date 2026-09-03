# RepoLaunch Launch Plan

## Phase 0 — Foundation (done)
- [x] GitHub repo: somilsharma2000/repolaunch
- [x] Docs: PRD, vibe-coding playbook, architecture, content pipeline
- [x] Next.js scaffold: search, categories, niches, blueprints, pricing, Forge UI
- [x] CI: build check on every push
- [x] Nightly star sync: GitHub Action

## Phase 1 — Content seed (the real work, ~2–3 weeks)
- [ ] 12 launch categories × 6–10 repos each = 75–120 published blueprints
- [ ] Every blueprint passes the content pipeline gate (verify → write → run steps → license check)
- [ ] Best pick chosen for every niche
- [ ] Target: zero empty niches among the 12 launch categories

## Phase 2 — Money
- [ ] Stripe account + checkout for $49 lifetime
- [ ] Post-payment unlock (hasPaid → full blueprint + unlimited Forge)
- [ ] 14-day refund flow documented
- [ ] Forge AI wired to an LLM API with the 3-free-question gate enforced server-side

## Phase 3 — SEO (starts during Phase 1)
- [ ] Unique title/description per niche + repo page (sitemap.ts + robots.ts already in scaffold)
- [ ] Programmatic SEO: "best open source X" for every niche
- [ ] OG images per page
- [ ] Submit sitemap to Google Search Console

## Phase 4 — Soft launch
- [ ] Deploy to Vercel (free tier is enough at start)
- [ ] Show HN: "RepoLaunch — verified open-source repos with monetization playbooks"
- [ ] r/SideProject, r/indiehackers, Indie Hackers post
- [ ] X/Twitter build-in-public thread
- [ ] Collect feedback → fix top 5 complaints before paid push

## Phase 5 — Paid launch
- [ ] Product Hunt launch (Tuesday–Thursday, 12:01 AM PT)
- [ ] Launch discount $39 for first 100 buyers
- [ ] Track: search→blueprint CTR, conversion %, refund rate

## Kill/scale criteria
- If free→paid conversion < 1% after 1,000 visitors → rethink offer/pricing before spending on ads
- If conversion > 3% → double down on content velocity (the moat is the blueprints)
