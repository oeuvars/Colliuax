import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "polysans-slim": ["Polysans-Slim", "sans-serif"],
        "polysans-neutral": ["Polysans-Neutral", "sans-serif"],
        "polysans-median": ["Polysans-Median", "sans-serif"],
        cirka: ["Cirka", "sans-serif"]
      }
    },
  },
  plugins: [],
};
export default config;
