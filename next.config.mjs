/** @type {import('next').NextConfig} */
const isStatic = process.env.STATIC_EXPORT === "1";

const nextConfig = {
  reactStrictMode: true,
  ...(isStatic
    ? {
        // GitHub Pages static build (see .github/workflows/deploy-pages.yml)
        output: "export",
        basePath: "/repolaunch",
        images: { unoptimized: true },
        trailingSlash: true,
      }
    : {}),
};

export default nextConfig;
