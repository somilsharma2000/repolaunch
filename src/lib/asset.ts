// basePath-aware public asset path — required for the GitHub Pages static
// deploy (basePath /repolaunch) and harmless on a root-domain Vercel deploy.
export const asset = (path: string): string =>
  (process.env.NEXT_PUBLIC_BASE_PATH ?? "") + path;
