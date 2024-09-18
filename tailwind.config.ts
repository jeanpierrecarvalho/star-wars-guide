import type { Config } from "tailwindcss";

import withMT from "@material-tailwind/react/utils/withMT";

// @ts-expect-error TODO: solve this type
const config: Config = withMT({
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
    fontFamily: {
      starjout: ["Star Jedi Outline", "sans"],
    },
  },
  plugins: [require("tailwind-scrollbar")],
});

export default config;
