# PROMPT FOR THE BUILDER — PASTE EVERYTHING BELOW THE LINE INTO THE BUILDER

---

## PROJECT: RepoForge — The Search Engine of Trusted Open-Source Repos

### THE VISION (read this first)

Build a web app where ANYONE can search for ANY software topic or thing they want to build — e.g. "animation", "booking app", "AI chatbot", "ecommerce", "video editing", "auth" — and instantly get a curated page of TRUSTED, VERIFIED open-source GitHub repositories for that topic, each with a complete guide: what it is, how to use it, where to use it, how to earn money with it, and real live data from GitHub (stars, license, last update).

This is NOT a link directory. It is a knowledge product: every repo on the platform is hand-vetted, every guide teaches setup + usage + monetization, and every page feels premium, animated, and alive. The vibe is Gen Z: bold, colorful, playful, animated — think a mix of Linear, Framer, and Gumroad. The user should ENJOY being on the website, not just use it.

There is also an in-app AI assistant named "Forge" that answers every user doubt about repos, setup, coding, and earning — conversationally, in the same playful tone.

### CORE USER FLOW

1. User lands on the homepage → sees a big animated hero with a prominent SEARCH BAR: "What do you want to build?"
2. User types anything: "animation", "chatbot", "landing page", "crm", "game", "youtube downloader", whatever
3. The platform matches their search to a NICHE PAGE (if exact match) or shows closest niche pages
4. Niche page shows: the best verified repos for that niche (ranked), with badges — ⭐ Verified, 🟢 Safe License, 🔴 License Warning — plus live star counts
5. User clicks a repo → REPO BLUEPRINT page: complete guide (setup, where to use, how to earn)
6. Free users see the repo cards and niche pages. Full blueprints + AI assistant are behind a one-time $49 payment ("Lifetime access").
7. Forge (AI assistant) is available as a floating chat bubble on every page; unlimited chats for paid users.

### WHAT MAKES A REPO "TRUSTED & VERIFIED"

A repo is only listed if it meets ALL of:
- 500+ GitHub stars (or clearly notable within its niche)
- Active or historically significant (maintained within last 12 months OR a timeless classic)
- Real documentation exists
- License identified and displayed — MIT/Apache 2.0/BSD get a green "Safe" badge; GPL/AGPL/BSL get a red "License Warning" badge with an explanation of what you can and cannot do commercially; repos with NO license are excluded entirely
- The blueprint guide is complete: no "coming soon"

Show a "Verification" checklist on each repo page (stars ✓, active ✓, documented ✓, license checked ✓) so users SEE why it's trusted.

---

## NICHE TAXONOMY (the backbone of the search)

Organize all content under this taxonomy. Categories → sub-niches → repos. SEARCH maps free text to the nearest niche(s).

**1. Frontend & UI** — sub-niches: component libraries, CSS frameworks, icons, dashboards/admin panels, landing page templates, form builders, tables/datagrids, charts
**2. Animation & Motion** — sub-niches: web animation engines, scroll animations, 3D & WebGL, SVG animation, page transitions, loading/micro-interactions
**3. Backend & APIs** — sub-niches: backend frameworks, BaaS (backend-as-a-service), API gateways, authentication, file storage, webhooks, realtime/sockets, serverless
**4. Databases & Data** — sub-niches: SQL, NoSQL, vector databases, ORM/query builders, caching, migrations, spreadsheets-as-database
**5. AI & Machine Learning** — sub-niches: LLM chat UIs, local LLM runtimes, RAG & document chat, AI agents/workflows, image generation, voice & TTS, transcription, video AI, ML training tools
**6. E-commerce** — sub-niches: storefront platforms, headless commerce, marketplaces, digital product selling, payments/checkout, inventory
**7. Content & CMS** — sub-niches: headless CMS, blogs & publishing, docs sites, wikis/knowledge bases, newsletters, forms & surveys
**8. Analytics & Tracking** — sub-niches: web analytics, product analytics, session replay, dashboards/BI, A/B testing, uptime monitoring
**9. Dev Tools** — sub-niches: code editors, API testing, git hosting, terminals, snippets, regex, JSON tools, code generation
**10. Deployment & DevOps** — sub-niches: self-hosting platforms, reverse proxies, CI/CD, containers, monitoring stacks, one-click deploy tools
**11. Security & Auth** — sub-niches: SSO/identity, password managers, 2FA, vulnerability scanning, VPN/self-hosted privacy, secrets management
**12. Communication** — sub-niches: team chat, live chat/ support, email platforms, chatbots, forms of messaging (WhatsApp/Telegram bots), video conferencing
**13. Productivity & Business** — sub-niches: CRM, project management, notes/knowledge, to-do, invoicing/billing, HR, booking/scheduling, e-signatures, automation/no-code
**14. Media & Creative** — sub-niches: image editing, video editing, audio/music, screen recording, streaming tools, design tools, 3D modeling, fonts
**15. Games & Fun** — sub-niches: game engines, JS game libraries, retro emulators, interactive toys
**16. Scraping & Data Extraction** — sub-niches: web scrapers, crawlers, parsers, datasets, trackers
**17. Automation & Bots** — sub-niches: workflow automation, social media bots, Telegram/Discord/WhatsApp bots, browser automation
**18. Mobile & Desktop** — sub-niches: cross-platform frameworks, native helpers, desktop app frameworks, PWAs
**19. IoT & Hardware** — sub-niches: home automation, smart home dashboards, device hubs
**20. Learning & Docs** — sub-niches: coding education platforms, interactive tutorials, cheat sheets, interview prep

For LAUNCH, fully populate at least these 12 high-demand categories with complete niche pages: Frontend & UI, Animation & Motion, Backend & APIs, AI & ML, E-commerce, Content & CMS, Analytics, Dev Tools, Security & Auth, Productivity & Business, Media & Creative, Automation & Bots. Target 100+ populated niche pages and 300+ repo blueprints at launch. Every niche page must have at least 3 verified repos with complete blueprints — do not publish empty or half-filled niche pages. Build the search so new categories/niches/repos can be added later without schema changes.

### ANCHOR REPOS (seed these — all real, well-known repos)

Verification rule: before publishing any repo, verify it via the GitHub public API (name, stars, license). Never invent repos. If a repo above can't be verified, skip it. Use the GitHub API search to fill each niche with its top repos (sort by stars), then write blueprints for them.

Examples of verified anchor repos per category (verify all before publishing):
- Animation & Motion: anime.js (MIT), lottie-web (MIT), three.js (MIT), motion (MIT), auto-animate (MIT), GSAP (custom free license — flag as "check license")
- Backend: PocketBase (MIT), Supabase (Apache 2.0), Appwrite (BSD-3), Nhost (MIT), Amplication (Apache 2.0)
- AI & ML: LibreChat (MIT), Lobe Chat (MIT), Open WebUI (BSD-3), AnythingLLM (MIT), Dify (Apache 2.0), Flowise (Apache 2.0), Langflow (MIT), Ollama (MIT), PrivateGPT (Apache 2.0)
- E-commerce: Medusa (MIT core), Saleor (BSD-3), Vendure (MIT), Sylius (MIT), Bagisto (MIT)
- CMS: Strapi (MIT), Ghost (MIT), Payload (MIT), KeystoneJS (MIT), Outstatic (MIT), TinaCMS (Apache 2.0), Decap CMS (MIT)
- Analytics: Umami (MIT), Redash (BSD-2), Plausible (AGPL — red badge), Metabase (AGPL — red badge), PostHog (custom — red badge)
- Security & Auth: Keycloak (Apache 2.0), Authelia (Apache 2.0), Casdoor (Apache 2.0)
- Dev Tools: Hoppscotch (MIT), Gitea (MIT), Meilisearch (MIT community), Novu (MIT)
- Productivity: Outline (BSD-3), Excalidraw (MIT), Twenty CRM (AGPL — red badge), Chatwoot (MIT)
- License-warning examples for red badges: Cal.com, NocoDB, Formbricks, Typebot, Documenso, ToolJet, AppFlowy, AFFiNE, Budibase, Netdata, Discourse

---

## REPO BLUEPRINT FORMAT (every repo gets this — no exceptions)

Each repo page contains:
1. **Header** — name, verified badge, license badge (green Safe / red Warning), category, live star count, last-updated, GitHub link, live demo link if one exists
2. **What is it?** — plain-English explanation, zero jargon, 2-3 sentences
3. **Where to use it** — 3-5 concrete use cases ("use this when building: SaaS dashboards, admin panels…")
4. **Tech stack & difficulty** — languages/frameworks, Beginner/Intermediate/Advanced, time to launch
5. **How to use it — step-by-step setup guide** — numbered steps from zero to running: prerequisites, install, config (with real code blocks: terminal commands, .env example, docker-compose if applicable), run locally, deploy to production
6. **Copy-my-setup files** — at least one ready-to-use config file (docker-compose.yml or .env.example or starter snippet) in a copyable code block with a copy button
7. **How to earn with it** — 3 monetization playbooks, each with: who the customer is, what you charge (real numbers), step-by-step execution, time to first revenue
8. **License section** — what you can/cannot do commercially; for warning licenses, a clear plain-English breakdown + safe workarounds
9. **Verification checklist** — stars ✓ active ✓ documented ✓ license checked ✓
10. **Related repos** — links to 3-5 other repos in the same niche

---

## AI ASSISTANT — "FORGE"

- Floating chat bubble (bottom-right) on every page: animated, glowing, with a pulse when idle. Opens a chat panel with a friendly persona.
- Forge persona: playful, encouraging, slightly Gen Z ("okay this repo is actually insane 🔥"), but always accurate and helpful.
- Forge can: recommend repos for any idea, explain setup steps, answer "what's the difference between X and Y", debug setup errors, explain licenses, suggest monetization ideas, and remember the conversation context within the chat.
- Forge answers using the platform's repo database as its primary knowledge (ground it with the app's data so recommendations match what's on the platform).
- Free users: Forge gives 3 free questions, then shows the upgrade prompt. Paid users: unlimited.
- Build this with the app's built-in AI assistant/chatbot capability.

---

## DESIGN LANGUAGE — Gen Z, animated, alive

The site must FEEL like a product from the future. Requirements:

**Overall vibe:** dark-first, bold gradients (electric purple → cyan → pink), glassmorphism cards, glow effects, playful microcopy. Think Linear + Framer + Gumroad + a little bit of video-game energy.

**Animations (use a modern animation approach — CSS transitions, framer-motion-style spring animations, or similar):**
- Hero: animated gradient mesh background with slowly floating blurred orbs; big headline with staggered letter entrance
- Search bar: large, glowing focus ring, subtle breathing animation, animated placeholder cycling through examples ("animation… booking app… AI chatbot…")
- Repo cards: lift + glow on hover, staggered fade-in-up on scroll, tilt slightly toward the cursor (subtle 3D effect)
- License badges: pill-shaped, green/red with soft glow
- Page transitions: smooth fades/slide-ups between routes
- Micro-interactions: buttons with springy press effect, confetti burst on successful checkout, copy buttons that morph to a checkmark
- Number counters: star counts count up when scrolled into view
- Loading states: never blank — use skeleton shimmer cards or a playful animated loader
- Respect prefers-reduced-motion: disable heavy animation for users who opt out

**Layout:**
- Fixed glassmorphic navbar with logo, search shortcut, category dropdown, "Get Lifetime — $49" gold CTA
- Responsive: 3-col card grid desktop, 2 tablet, 1 mobile
- Mobile: bottom nav bar (Search / Categories / Forge / Account)

**Copy tone:** friendly, confident, zero corporate speak. Examples: "60,000 repos on GitHub are junk. We only ship the ones that slap.", "No cap — this repo is verified.", but keep it tasteful and readable for everyone, not forced slang.

---

## PAGES TO BUILD

1. **Home** — animated hero + search bar front and center, trending searches as chips ("animation", "AI chatbot", "ecommerce", "booking", "notion clone"), category grid with animated icons, "How it works" (3 steps), stats counters, testimonials placeholder, FAQ, final CTA
2. **Search results page** — free-text search → matches niche pages + repos; fuzzy matching ("animaton" → Animation); shows top repos with badges; empty state with helpful suggestions
3. **Category page** — all sub-niches of a category as animated cards with repo counts
4. **Niche page** — e.g. /niche/animation — ranked verified repos, filter chips (License: Safe only / All, Difficulty, Time to launch), "Best pick" highlighted card at top, mini-guides
5. **Repo blueprint page** — full format described above; free users see the header + "What is it" + first setup step, then a blurred locked section with "Unlock the full blueprint — $49"
6. **Forge AI page** — full-screen chat mode with suggested prompts
7. **Pricing page** — $49 lifetime one-time, comparison table (Free vs Lifetime), guarantee, Stripe checkout
8. **Account page** — purchase status, access, refund link
9. **FAQ / About** — trust, licensing policy, how verification works

---

## DATA MODEL (entities)

**Category:** name, slug, description, icon, order
**Niche:** name, slug, categoryId, description, icon, heroTagline, repoCount
**Repository:** name, slug, nicheId (array or junction), githubUrl, demoUrl, description, license, licenseType (safe/warning), licenseExplanation, techStack (array), difficulty, timeToLaunch, whatIsIt, whereToUse (array), setupGuide (rich text/markdown), configFile (code block + filename), monetizationPlaybooks (array of 3 objects: {customer, pricing, steps, timeToRevenue}), verificationChecklist, stars (number), lastUpdated (datetime), isPublished, isBestPick (boolean)
**SearchQuery:** term, count (for trending searches feature — track what people search)
**Order/User:** email, hasPaid, paidAt, stripePaymentId, refundStatus
**ForgeConversation:** userId/sessionId, messages (array), createdAt

---

## GITHUB LIVE DATA INTEGRATION

- Use the GitHub public REST API (api.github.com — no auth needed for basic reads; add optional GITHUB_TOKEN env var for higher rate limits) via backend functions to:
  - Fetch live star counts + last-updated for listed repos (refresh nightly via a scheduled job)
  - Verify repos exist before a blueprint is published
- Show live stars on every repo card; a small "live" indicator dot on star counts. If the API fails, fall back to cached values.

---

## MONETIZATION & ACCESS CONTROL

- Stripe checkout, $49 one-time "Lifetime access": all blueprints, unlimited Forge AI, all future repos included
- Free: search, niche pages, repo headers + "what is it" section, 3 Forge questions
- Paid: everything unlocked. 14-day money-back guarantee.
- After payment: unlock via user record (hasPaid=true). Confetti animation on checkout success page.

---

## SEO & GROWTH

- Every niche page and repo page gets unique meta title/description + OG tags (e.g. "Best 7 open-source animation libraries — verified & explained")
- Homepage loads fast; hero content is server-rendered, not behind JS
- Trending searches chips driven by SearchQuery data
- Clean URL structure: /category/animation, /repo/anime-js

---

## IMPLEMENTATION ORDER

1. Entities + seed the niche taxonomy (20 categories, all sub-niches)
2. Backend functions: GitHub API verification + live stars
3. Home page with animated hero + search
4. Search + niche + repo blueprint pages (with locked/unlocked logic)
5. Stripe checkout + account
6. Forge AI assistant
7. Seed repos: verify each via GitHub API, write complete blueprints (start with anchor repos, then fill each niche via GitHub API search, sorted by stars). Every niche page needs ≥3 complete repos before publishing.
8. Polish pass: animations, micro-interactions, empty states, mobile

## HARD RULES

- Never invent a GitHub repo. Every repo must be verified to exist via the GitHub API before its blueprint is published.
- No placeholder/coming-soon content on published pages.
- Every blueprint must include ALL sections in the REPO BLUEPRINT FORMAT.
- The app must look animated and premium — this is the core of the brand. If a page looks static and boring, it's not done.
