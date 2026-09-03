# RepoLaunch — Product Requirements Document

**One-liner:** The search engine of trusted open-source repos — search any idea, get verified GitHub repos with complete setup guides and real monetization playbooks.

## Problem
GitHub has 400M+ repositories; ~98% are forks, homework, and abandoned projects. When someone wants to build "a booking app" or add "animation," they drown in search results with no signal for quality, license safety, or how to actually use (or earn from) what they find.

## Solution
A search-first platform mapping every niche people search for to the best 3–10 verified repos per niche. Each repo gets a **Blueprint**: what it is, where to use it, step-by-step setup, copy-paste config files, and 3 monetization playbooks with real pricing.

## Target user
- Indie hackers & solo builders looking for a stack
- Freelancers who want to ship client work faster
- Devs new to a niche who want the "best pick" without comparing 50 repos

## Core requirements
1. Search-first UX — the homepage IS a search bar; fuzzy matching on every niche/repo
2. Trust system — verified badge + checklist (500+ stars, active, documented, license checked)
3. License intelligence — green "Safe" (MIT/Apache/BSD) vs red "Warning" (GPL/AGPL) badges with plain-English commercial explanations
4. Blueprints — full setup guide, config files, 3 monetization playbooks, time-to-launch, difficulty
5. Best pick per niche — for users who don't want to compare
6. Forge AI assistant — answers any repo/setup/license/earning question, grounded in platform data, 3 free questions then paywall
7. Live GitHub data — nightly star sync via GitHub API; nothing stale
8. Gen Z aesthetic — dark theme, animated gradients, glassmorphism, micro-interactions

## Monetization
- Free: search, niche pages, repo previews (what it is + where to use + first setup steps), 3 Forge questions
- **$49 one-time Lifetime**: all blueprints, config files, playbooks, unlimited Forge, all future repos
- 14-day money-back guarantee

## Success metrics
- Search → blueprint CTR
- Free → paid conversion (target 2–4%)
- Niche page SEO rankings (target: top 10 for "best open source X")
- Refund rate under 5%

## Non-goals (v1)
- No user-generated content or submissions
- No API access tier
- No mobile app
