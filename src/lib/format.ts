export const formatStars = (n?: number) =>
  typeof n === "number" ? n.toLocaleString("en-US") : "—";

export const absoluteUrl = (path: string) => `https://repolaunch.app${path}`;
