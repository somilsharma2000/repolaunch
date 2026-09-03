// Admin hub: integration catalog + demo analytics + social studio data
// Every integration card lists its exact production wiring for Phase 2.

export type IntegrationCategory =
  | "Payments"
  | "Website Analytics"
  | "Social"
  | "Email & Marketing"
  | "SEO"
  | "Infra & Hosting"
  | "Community & Support";

export interface Integration {
  id: string;
  name: string;
  category: IntegrationCategory;
  icon: string;
  what: string;
  why: string;
  wiring: string;
}

export const INTEGRATIONS: Integration[] = [
  // PAYMENTS
  { id: "stripe", name: "Stripe", category: "Payments", icon: "💳",
    what: "Checkout, lifetime license delivery, invoices, taxes",
    why: "The $49 Lifetime checkout — replaces the demo paywall button",
    wiring: "Stripe Checkout Session → /api/checkout → webhook grants access (env: STRIPE_SECRET_KEY)" },
  { id: "paypal", name: "PayPal", category: "Payments", icon: "🅿️",
    what: "Alternative checkout for regions where Stripe conversion is weak",
    why: "Backup payment rail — some buyers only trust PayPal",
    wiring: "PayPal REST Orders API → /api/checkout/paypal (env: PAYPAL_CLIENT_ID/SECRET)" },
  // WEBSITE ANALYTICS
  { id: "ga4", name: "Google Analytics 4", category: "Website Analytics", icon: "📊",
    what: "Visitors, traffic sources, funnels, conversions",
    why: "See which niches drive traffic and where the $49 funnel leaks",
    wiring: "gtag snippet in <head> (env: NEXT_PUBLIC_GA_ID)" },
  { id: "vercel-analytics", name: "Vercel Analytics", category: "Website Analytics", icon: "▲",
    what: "Privacy-friendly Core Web Vitals + pageviews",
    why: "Zero-config accuracy once we're on Vercel",
    wiring: "@vercel/analytics <Analytics /> component, auto on Vercel deploy" },
  { id: "umami", name: "Umami Cloud", category: "Website Analytics", icon: "🍪",
    what: "Cookieless analytics — no GDPR banner needed",
    why: "Privacy-first alternative that keeps the site fast",
    wiring: "Umami script tag (env: NEXT_PUBLIC_UMAMI_ID)" },
  { id: "gsc", name: "Google Search Console", category: "SEO", icon: "🔍",
    what: "Search queries, CTR, indexing status per niche page",
    why: "124 niche pages are an SEO machine — this is the dashboard for it",
    wiring: "DNS verification + sitemap.xml submission (see docs/LAUNCH-PLAN.md)" },
  // SOCIAL — the agency stack
  { id: "x", name: "X (Twitter)", category: "Social", icon: "𝕏",
    what: "Dev-audience reach, launch thread, build-in-public",
    why: "#1 channel for dev tools — repo tips thread converts",
    wiring: "X API v2 posts endpoint → /api/social/post (env: X_ACCESS_TOKEN)" },
  { id: "linkedin", name: "LinkedIn", category: "Social", icon: "💼",
    what: "B2B founder audience, side-hustle narrative",
    why: "Highest-intent buyers for 'monetize open source' playbooks",
    wiring: "LinkedIn Marketing API → /api/social/post (env: LINKEDIN_TOKEN)" },
  { id: "instagram", name: "Instagram", category: "Social", icon: "📸",
    what: "Reels + carousels for the indie-hacker aesthetic",
    why: "Gen Z discovery channel — '5 repos that print money' carousel",
    wiring: "Instagram Graph API (env: IG_ACCESS_TOKEN)" },
  { id: "tiktok", name: "TikTok", category: "Social", icon: "🎵",
    what: "Short-form 'repo you need' videos",
    why: "Cheapest organic reach for Gen Z builders right now",
    wiring: "TikTok Content Posting API (env: TIKTOK_TOKEN)" },
  { id: "youtube", name: "YouTube", category: "Social", icon: "▶️",
    what: "Setup tutorials per blueprint, Shorts for discovery",
    why: "Tutorial = trust; every blueprint can become a video",
    wiring: "YouTube Data API v3 (env: YOUTUBE_API_KEY)" },
  { id: "reddit", name: "Reddit", category: "Social", icon: "👽",
    what: "r/SideProject, r/webdev, r/selfhosted posts",
    why: "Where the 'free code, real income' story hits hardest",
    wiring: "Reddit API + manual posting playbook (see docs/LAUNCH-PLAN.md)" },
  { id: "producthunt", name: "Product Hunt", category: "Social", icon: "🚀",
    what: "Launch day: repo, gallery, first-mover reviews",
    why: "Single biggest traffic spike available at launch",
    wiring: "PH API v2 (env: PH_TOKEN) + ship tag post-launch" },
  { id: "facebook", name: "Facebook", category: "Social", icon: "📘",
    what: "Groups + page syndication of playbooks",
    why: "Long-tail organic reach in indie founder groups",
    wiring: "Facebook Graph API Pages endpoint (env: FB_PAGE_TOKEN)" },
  { id: "discord", name: "Discord", category: "Community & Support", icon: "🎮",
    what: "Lifetime-member community + support channel",
    why: "$49 buyers need somewhere to ask setup questions",
    wiring: "Discord bot invite + invite-only link gated by checkout (env: DISCORD_GUILD_ID)" },
  { id: "telegram", name: "Telegram", category: "Social", icon: "✈️",
    what: "Channel for daily repo drops",
    why: "Highest-open-rate channel for pushy launches",
    wiring: "Telegram Bot API sendMessage (env: TELEGRAM_BOT_TOKEN)" },
  // EMAIL & MARKETING
  { id: "mailchimp", name: "Mailchimp", category: "Email & Marketing", icon: "🐵",
    what: "Weekly newsletter: 3 repos, 1 playbook, 1 offer",
    why: "Owned audience — the only channel no algorithm can take",
    wiring: "Mailchimp API audience subscribe → /api/newsletter (env: MAILCHIMP_API_KEY)" },
  { id: "resend", name: "Resend", category: "Email & Marketing", icon: "📨",
    what: "Transactional: receipts, license keys, welcome flow",
    why: "Deliverability-first sending for checkout + onboarding",
    wiring: "Resend API → /api/email (env: RESEND_API_KEY)" },
  // SEO
  { id: "semrush", name: "Semrush", category: "SEO", icon: "📈",
    what: "Keyword gaps for 124 niche pages, backlink tracking",
    why: "Pick which niche pages to build next based on search demand",
    wiring: "Position tracking campaign post-launch (manual setup)" },
  // INFRA
  { id: "github", name: "GitHub", category: "Infra & Hosting", icon: "🐙",
    what: "Repo hosting, nightly star sync, Pages deploys",
    why: "Already connected — this is the foundation",
    wiring: "Connected ✓ — Actions sync in .github/workflows" },
  { id: "vercel", name: "Vercel", category: "Infra & Hosting", icon: "▲",
    what: "Production hosting + custom domain + edge functions",
    why: "The API routes (Forge, checkout, social) need a server runtime",
    wiring: "GitHub import → vercel.com/new (see docs/ARCHITECTURE.md)" },
  { id: "cloudflare", name: "Cloudflare", category: "Infra & Hosting", icon: "☁️",
    what: "DNS, CDN, DDos protection, email forwarding",
    why: "Custom domain apex + free SSL for the real domain",
    wiring: "Nameserver change after domain purchase (manual, 10 min)" },
  // COMMUNITY & SUPPORT
  { id: "tawk", name: "Tawk.to Live Chat", category: "Community & Support", icon: "💬",
    what: "Free live chat on pricing + blueprint pages",
    why: "Pre-purchase objections die fast with instant answers",
    wiring: "Tawk.to widget snippet (env: NEXT_PUBLIC_TAWK_ID)" },
  { id: "calcom", name: "Cal.com", category: "Community & Support", icon: "📅",
    what: "Bookable calls: setup help, license onboarding",
    why: "High-touch upsell later: paid repo setup sessions",
    wiring: "Embed calendar on /forge + /pricing (env: NEXT_PUBLIC_CAL_URL)" },
];

export const CATEGORY_ORDER: IntegrationCategory[] = [
  "Payments", "Website Analytics", "Social", "Email & Marketing",
  "SEO", "Infra & Hosting", "Community & Support",
];

// ---- Social Studio ----
export const SOCIAL_IDS = ["x", "linkedin", "instagram", "tiktok", "youtube", "reddit", "facebook", "telegram", "producthunt"];

// 30-day launch content calendar — the "agency" posts, ready to go
export const CALENDAR: { day: number; platform: string; title: string; angle: string }[] = [
  { day: 1, platform: "Product Hunt", title: "RepoLaunch is live 👑", angle: "Launch day — free code, real income" },
  { day: 2, platform: "X", title: "Launch thread: why 124 niches", angle: "Build-in-public numbers + link" },
  { day: 3, platform: "LinkedIn", title: "The open-source goldmine nobody maps", angle: "Founder story + niche taxonomy" },
  { day: 4, platform: "X", title: "Repo #1: anime.js — free MIT animation", angle: "Single blueprint teardown" },
  { day: 5, platform: "Instagram", title: "Carousel: 5 repos that print money", angle: "Gen Z visual + save-bait" },
  { day: 6, platform: "TikTok", title: "This repo replaces a $2k SaaS", angle: "15s hook: open-source alternative" },
  { day: 7, platform: "Reddit", title: "I mapped 124 niches of free code — free tool", angle: "r/SideProject, no hard sell" },
  { day: 8, platform: "YouTube", title: "Setup tutorial: PocketBase in 8 min", angle: "Blueprint #2 as evergreen video" },
  { day: 9, platform: "X", title: "License warning: the Strapi trap", angle: "BSL/AGPL explainer + badge feature" },
  { day: 10, platform: "Telegram", title: "Daily repo drop #1", angle: "Start the channel habit" },
  { day: 11, platform: "LinkedIn", title: "MIT vs GPL — the money difference", angle: "Legal-ish authority content" },
  { day: 12, platform: "X", title: "BSK case study: $0 → first $49", angle: "Social proof as it arrives" },
  { day: 13, platform: "Instagram", title: "Obsidian-gold brand reveal", angle: "Design language flex" },
  { day: 14, platform: "TikTok", title: "Search any idea → get a repo", angle: "10s product demo screen-record" },
  { day: 15, platform: "X", title: "Forge AI sneak peek", angle: "Product roadmap credibility" },
  { day: 16, platform: "YouTube", title: "Shorts: 3 license myths", angle: "Clip the tutorial" },
  { day: 17, platform: "Reddit", title: "AMA: curating 300+ repos", angle: "r/webdev credibility" },
  { day: 18, platform: "LinkedIn", title: "Playbook: freelance with free code", angle: "Monetization story #1" },
  { day: 19, platform: "X", title: "New blueprints this week", angle: "Content pipeline proof" },
  { day: 20, platform: "Instagram", title: "Behind the scenes: verification", angle: "Anti-hallucination policy flex" },
  { day: 21, platform: "TikTok", title: "POV: you found the crown site", angle: "Trend-format reach play" },
];

// ---- Demo analytics (until GA4 + social APIs are connected) ----
export function demoWebsiteStats() {
  const visitors = 12480;
  return {
    visitors,
    pageviews: 31540,
    topNiches: ["Web Animation", "Auth & Users", "Backend as a Service", "Component Libraries", "Databases & ORM"],
    topSearches: ["animation", "booking app", "AI chatbot", "auth", "cms"],
    conversionNote: "Connect Google Analytics 4 to replace demo data with real funnels.",
  };
}

export function demoSocialStats() {
  return SOCIAL_IDS.map((id) => {
    const int = INTEGRATIONS.find((i) => i.id === id)!;
    return { id, name: int.name, icon: int.icon, connected: false };
  });
}
