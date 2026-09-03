// Social Studio engine: platform rules + pre-written launch posts
// Launch posts are drafted from the actual verified blueprint content (src/data/repos.json)

export interface PlatformRule {
  id: string;
  name: string;
  icon: string;
  limit: number;
  bestTime: string;
}

export const PLATFORM_RULES: PlatformRule[] = [
  { id: "x", name: "X", icon: "𝕏", limit: 280, bestTime: "Tue–Thu 9–11am, weekdays 8–10am" },
  { id: "linkedin", name: "LinkedIn", icon: "💼", limit: 3000, bestTime: "Tue–Wed 8–10am" },
  { id: "instagram", name: "Instagram", icon: "📸", limit: 2200, bestTime: "Weekdays 11am–1pm, evenings 7–9" },
  { id: "tiktok", name: "TikTok", icon: "🎵", limit: 2200, bestTime: "Evenings 7–11pm" },
  { id: "youtube", name: "YouTube", icon: "▶️", limit: 5000, bestTime: "Thu–Sun, 2–4pm" },
  { id: "reddit", name: "Reddit", icon: "👽", limit: 40000, bestTime: "Weekday mornings 6–9am" },
  { id: "facebook", name: "Facebook", icon: "📘", limit: 63206, bestTime: "Weekdays 1–4pm" },
  { id: "telegram", name: "Telegram", icon: "✈️", limit: 4096, bestTime: "Noon + 8pm drops" },
  { id: "producthunt", name: "Product Hunt", icon: "🚀", limit: 250, bestTime: "Launch 12:01am PT Tue–Thu" },
];

// Pre-written launch posts — every fact pulled from a verified blueprint
export interface LaunchPost {
  id: string;
  platform: string;
  repo: string;
  text: string;
  angle: string;
}

export const LAUNCH_POSTS: LaunchPost[] = [
  {
    id: "lp-three",
    platform: "x",
    repo: "three.js",
    angle: "biggest number first",
    text: "three.js: 103,000 ⭐ on GitHub. MIT license — you can sell what you build with it.\n\nThe playbook: 3D product configurators & immersive landing pages. Clients pay $2–5k for these. Setup guide is free at RepoLaunch.\n\nFree code. Real income.",
  },
  {
    id: "lp-anime",
    platform: "x",
    repo: "anime.js",
    angle: "micro-interaction money",
    text: "anime.js (72k ⭐, MIT) makes sites feel expensive.\n\n3 ways people charge for it:\n→ landing page polish service\n→ micro-interaction retainers for SaaS\n→ animation template packs\n\nFull setup + playbooks mapped at RepoLaunch 👑",
  },
  {
    id: "lp-pocketbase",
    platform: "linkedin",
    repo: "PocketBase",
    angle: "founder story",
    text: "Most “MVP developers” charge $10k+ for what PocketBase gives you in one binary: database, auth, realtime, admin UI. 46k stars, MIT license.\n\nThe honest opportunity: become the MVP factory for non-technical founders. Setup takes an afternoon — I mapped the exact config files and 3 monetization playbooks.\n\nFree code, real income. That's the whole thesis.",
  },
  {
    id: "lp-librechat",
    platform: "linkedin",
    repo: "LibreChat",
    angle: "private AI angle",
    text: "Companies want ChatGPT. Legal teams say no to sending data to OpenAI.\n\nLibreChat (30k ⭐, MIT) is the bridge: self-hosted, multi-model, looks like the product they already love.\n\nPlaybook: private AI for teams — deployment service + custom plugins. One afternoon to set up from the blueprint. The gap between what it costs and what it's worth is your margin.",
  },
  {
    id: "lp-ollama",
    platform: "x",
    repo: "Ollama",
    angle: "zero-cost AI",
    text: "Ollama: 105k ⭐, MIT. Run LLMs on a laptop, $0 API bills.\n\n3 ways people earn with it:\n→ local AI workstation setup service\n→ offline tooling for privacy-first clients\n→ zero-cost prototyping → charge for the product\n\nSetup + playbooks at RepoLaunch.",
  },
  {
    id: "lp-umami",
    platform: "x",
    repo: "Umami",
    angle: "privacy pain point",
    text: "Every EU client asks the same question: “can we drop the cookie banner?”\n\nUmami (24k ⭐, MIT) — cookieless analytics. The playbook: privacy analytics hosting + setup service. Recurring revenue from a free tool.\n\nMapped at RepoLaunch 👑",
  },
  {
    id: "lp-excalidraw",
    platform: "x",
    repo: "Excalidraw",
    angle: "embed everywhere",
    text: "Excalidraw: 92k ⭐, MIT, and embeddable.\n\nPeople charge for it as: whiteboard-in-a-product embeds and diagram services. The hand-drawn look is why clients love it.\n\nSetup + 2 playbooks at RepoLaunch.",
  },
  {
    id: "lp-license",
    platform: "linkedin",
    repo: "Strapi",
    angle: "the trap warning — trust builder",
    text: "Not all “open source” is safe to sell.\n\nStrapi: 68k stars, beautiful CMS — but BSL-1.1. Use it commercially the wrong way and you're in license violation territory.\n\nThis is why every repo at RepoLaunch carries a license verdict: Safe (MIT/Apache/BSD) or Warning — with the exact legal note. Free code only helps if you can legally earn from it.\n\nanti-hallucination policy: every repo verified against the GitHub API nightly.",
  },
  {
    id: "lp-supabase",
    platform: "reddit",
    repo: "Supabase",
    angle: "community value post",
    text: "I've been mapping verified open-source repos to actual monetization playbooks. Example: Supabase (Apache-2.0) — full-stack SaaS builds and consulting/audits. Not selling anything here — the setup guide and playbook structure are on the site, free to read. What niches do you want mapped next?",
  },
  {
    id: "lp-motion",
    platform: "x",
    repo: "Motion",
    angle: "small repo, real money",
    text: "Motion (26k ⭐, MIT) — the animation engine behind polished SaaS UIs.\n\nPlaybooks: product polish for SaaS teams, plus motion component libraries on Gumroad.\n\nThe setup guide is 15 minutes. RepoLaunch has the full blueprint.",
  },
  {
    id: "lp-lobechat",
    platform: "x",
    repo: "lobe-chat",
    angle: "hosted AI for teams",
    text: "lobe-chat (47k ⭐, Apache-2.0): a GPT store in a box.\n\nEarn with it: hosted AI chat for small teams + custom plugin dev. Set it up in an afternoon.\n\nBlueprint with config files at RepoLaunch 👑",
  },
  {
    id: "lp-auto-animate",
    platform: "x",
    repo: "auto-animate",
    angle: "beginner-friendly entry",
    text: "The easiest first paid gig on RepoLaunch: auto-animate (13k ⭐, MIT).\n\nOne import, lists animate themselves. UX fix-it gigs + freelance upsells — real people charge $150–500 for this.\n\nEasiest setup in the catalog. Start here.",
  },
];

export const getRule = (id: string) => PLATFORM_RULES.find((p) => p.id === id);
