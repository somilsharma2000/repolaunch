import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        base: "#0a0b0d",
        card: "#12141a",
        line: "#23262f",
        accent: "#8b5cf6",
        cyanx: "#22d3ee",
        gold: "#facc15",
      },
    },
  },
  plugins: [],
};
export default config;
