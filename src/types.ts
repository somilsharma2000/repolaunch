export type LicenseType = "safe" | "warning";

export interface Category {
  id: string; slug: string; name: string; icon: string;
  description: string; order: number;
}

export interface Niche {
  id: string; slug: string; name: string; categorySlug: string;
}

export interface Playbook {
  title: string; customer: string; pricing: string;
  steps: string[]; timeToRevenue: string;
}

export interface Repo {
  slug: string; owner: string; name: string;
  githubUrl: string; demoUrl?: string;
  description: string;
  license: string; licenseType: LicenseType; licenseNote: string;
  techStack: string[]; difficulty: string; timeToLaunch: string;
  nicheSlugs: string[]; isBestPick: boolean;
  whatIsIt: string; whereToUse: string[];
  setup: string[];
  configFiles: { filename: string; code: string }[];
  playbooks: Playbook[];
  isPublished: boolean;
  stars?: number; // merged from stars.json
}

export interface SearchResult {
  type: "niche" | "repo";
  slug: string; title: string; subtitle: string;
}
