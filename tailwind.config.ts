import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        base: "#0a0908",      // obsidian black
        card: "#141210",      // charcoal glass
        line: "#3a2f1c",      // bronze-tinted border
        gold: "#d4af37",      // primary — crown gold
        goldlight: "#f2d879", // hot highlight gold
        bronze: "#8a6d3b",    // secondary metal
        accent: "#d4af37",    // alias — gold is the brand accent now
        glint: "#7ea8c4",     // the faint cool sheen seen in the crystal facets
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
      },
    },
  },
  plugins: [],
};
export default config;
