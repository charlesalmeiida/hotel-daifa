import { Raleway, Inter } from "next/font/google"

const inter_font = Inter({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "700"],
})

const raleway_font = Raleway({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-raleway",
  weight: ["400", "600"],
})

export const inter = inter_font.variable
export const raleway = raleway_font.variable
