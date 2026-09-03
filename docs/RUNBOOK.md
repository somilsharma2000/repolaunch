# Runbook — verify the project works (for humans AND AI agents)

## Full local verification (5 minutes)
```bash
npm install
npm run build          # must compile clean, ~167 static pages
npm run start &        # serve on :3000
# smoke test every route type:
curl -s -o /dev/null -w "%{http_code}" http://localhost:3000/                      # → 200
curl -s -o /dev/null -w "%{http_code}" "http://localhost:3000/search?q=animation"   # → 200
curl -s -o /dev/null -w "%{http_code}" http://localhost:3000/niche/web-animation     # → 200
curl -s -o /dev/null -w "%{http_code}" http://localhost:3000/repo/anime-js          # → 200
curl -s -o /dev/null -w "%{http_code}" http://localhost:3000/pricing                # → 200
npm run sync:stars     # all repos must print ✓, no ⚠️
```

## If a repo page 404s but the build printed its route
Stale webpack cache across consecutive builds — `rm -rf .next && npm run build`, restart `npm run start`.

## If sync:stars prints ⚠️ NOT FOUND
The repo doesn't exist at that owner/name — fix `src/data/repos.json` or remove the entry. Never leave an unverified repo in the data.

## Deploy (Vercel)
Import the GitHub repo at vercel.com → framework auto-detected → deploy. Set env vars: `STRIPE_SECRET_KEY`, `OPENAI_API_KEY` (Phase 2). Preview deploys run on every PR automatically; CI already blocks broken builds.
