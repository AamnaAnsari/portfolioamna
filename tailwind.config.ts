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
        purple: "#800080",
        lightGreen: "#90EE90",
      },
      animation: {
        fadeIn: 'fadeIn 1.5s ease-in-out',
        slideUp: 'slideUp 1s ease-out',
      },
  },
},
  plugins: [],
} satisfies Config;
