import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "accent-color": "#5fcf80",
        "nav-color": "#272828",
        "heading": "#37423b",
        "default" : "#444444",
        "background" : "#F9F9F9;"
      },
      backgroundColor: {
        "accent-color": "#5fcf80",
      },
    },
  },
  plugins: [],
} satisfies Config;
