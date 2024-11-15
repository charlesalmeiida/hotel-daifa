import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        shaddowShape:
          "0px 27px 56px 0px rgba(0, 0, 0, 0.08), 0px 3.381px 7.012px 0px rgba(0, 0, 0, 0.04)",
      },
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
        hero: "url('/img/bg-hero.webp')",
        promotions: "url('/img/bg-promocoes.png')",
        heroMobile: "url('/img/bg-hero-mobile.png')",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
  },
  plugins: [],
}
export default config
