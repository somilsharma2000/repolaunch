# The RepoLaunch Vibe-Coding Playbook

How we AI-code this project **without shipping hallucinations**. Based on industry best practices (structured workflow: PRD → plan → small prompts → verify → ship) adapted to RepoLaunch's core risk: **invented repositories and fake setup steps**.

## The 7 rules

1. **Docs before code.** The PRD, this playbook, the launch plan, and the content pipeline live in the repo. Every AI session starts by reading them, so the AI never re-invents the product.
2. **Small diffs, always committed.** One feature per prompt. Run it, click it, then `git commit`. Never let the AI generate 3 features before you've tested the first. If it breaks, `git diff` is your time machine.
3. **Facts come from APIs, not models.** Star counts, repo existence, licenses, and last-update dates come from the GitHub API (`scripts/sync-stars.mjs` + nightly CI). The AI may *write about* a repo, but every numeric fact is machine-verified.
4. **The content pipeline has a human + machine gate.** A repo blueprint ships only after: (a) GitHub API confirms the repo exists and is 500+ stars, (b) the writer actually runs/copies the official README setup steps, (c) license is classified against our policy. No exceptions — this is the product's entire trust proposition.
5. **Verify like a user, not a developer.** Every page gets clicked end-to-end before launch (the webapp-testing Playwright skill does this): search → niche → blueprint → paywall → pricing. A page that renders but feels static or empty is a bug.
6. **Prompt pattern that works:** context → constraint → output. "Read docs/PRD.md. Add filter chips (license: safe/warning/all) to the niche page using the existing RepoCard component. Do not change data files." — AI does better with tight scope and named components.
7. **Costs are a feature decision.** Forge AI answers cost money per message — that's why the 3-free-question gate exists. Any new AI feature must ship with its gating rule in the same PR.

## The session loop

```
read docs/PRD.md + relevant code → one small prompt → run dev server →
click through the change → verify facts against APIs → commit with a clear message → repeat
```

## Anti-patterns (never do these)
- Asking AI for "the full app" in one prompt (incoherent, untestable)
- Accepting a code diff that references files that don't exist
- Publishing content the AI "remembered" instead of verified
- Shipping a page you haven't clicked as a user
- Letting errors pass because "it mostly works" — fix or revert, then move on

## Stack discipline
- Next.js (App Router) + TypeScript + Tailwind — the AI tools know these best, so vibe-coding quality stays high
- Static JSON data in `/src/data` — no database to drift out of sync; the nightly sync writes `stars.json` and commits it
- CI (`.github/workflows/ci.yml`) builds on every push — an AI edit that breaks the build never reaches main

## When vibe coding ends
Vibe coding is perfect for: scaffold, content, UI polish, CRUD, integrations.
Switch to careful human review for: payments (Stripe), auth, anything touching money or user data.
