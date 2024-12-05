import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        outfit: ['Outfit', 'sans-serif']
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        darkblue: '#213662',
        darkblue2: '#14274E',
        natural: '#F8F8F8',
        gray: '#14274E4D',
        graynatural: '#AFB1B6',
        darkgrey: '#61646B',
        green: '#6BFFBF',
        blackk: '#262627',
        white: '#FFFFFF',
        whitegrey: '#F1F6F9',
      },
    },
  },
  plugins: [],
} satisfies Config;
