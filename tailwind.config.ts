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
      },
      backgroundImage: {
        'bg-img-1': "url('/images/img-1.png')",
        'bg-img-2': "url('/images/img-2.png')",
        'feature-bg': "url('/images/feature-bg.png')",
          pattern: "url('/images/pattern.png')",
        'pattern-2': "url('/images/pattern-bg.png')",
      },
      screens: {
        xs: '400px',
        '3xl': '1680px',
        '4xl': '2200px',
      },
    },
  },
  plugins: [],
} satisfies Config;
