# RepoLaunch 🔎

**The search engine of trusted open-source repos.**

Live app: https://code-earn-path.base44.app

Search anything you want to build — "animation", "AI chatbot", "booking app", "ecommerce" — and get curated, **verified** GitHub repositories for that niche, each with a complete guide: what it is, how to set it up, where to use it, and how to earn money with it.

## Why it exists

GitHub has 400M+ repos, but ~98% are forks, homework, and abandoned projects. Nobody wants "all of GitHub" — they want THEIR niche solved. RepoLaunch maps every niche people search for to the best verified repos, with:

- 🏆 **Trust system** — every repo is verified: 500+ stars, actively maintained, real docs, license checked
- 📗 **Blueprints** — step-by-step setup guides, copy-paste config files, and 3 monetization playbooks per repo
- ⚖️ **License badges** — green "Safe" (MIT/Apache/BSD) vs red "Warning" (GPL/AGPL) with plain-English explanations
- 🔥 **Forge AI** — in-app assistant that answers any repo/setup/licensing/earning question
- 🌙 **Gen Z design** — dark theme, animated gradients, glassmorphism, micro-interactions

## Business model

- Free: search, niche pages, repo previews, 3 Forge questions
- **$49 one-time Lifetime**: all blueprints, unlimited Forge AI, all future repos

## Docs

- [`docs/builder-prompt.md`](docs/builder-prompt.md) — the full self-contained prompt that built the app
- [`docs/audit-2026-09-04.md`](docs/audit-2026-09-04.md) — full click-through audit + launch blockers

## Status (Sep 4, 2026)

Built and live. Launch blockers being fixed:
1. Search query not passing to results page
2. "Explore" nav link 404s (points to /explore, should point to /library)
3. Stripe checkout in demo mode — needs connection in app settings
