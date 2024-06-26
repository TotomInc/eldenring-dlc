import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      fontFamily: {
        "eldenring": ["var(--font-eldenring)", ...fontFamily.sans],
      },

      textColor: {
        "eldenring": "#cbad75",
      },
    },
  },

  plugins: [],
};
export default config;
