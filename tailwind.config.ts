import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ["var(--font-inter)"],
        sans: ["var(--font-raleway)"],
      },
      colors: {
        blue: "#2E376A",
        blueLight: "#16A0C7",
        red: "#BF1717",
        orange: "#EF6926",
        yellow: "#F3D500",
      },
      backgroundImage: {
        hero: "url('/img/bg-hero.png')",
      },
    },
  },
  plugins: [],
}
export default config
