import dynamic from "next/dynamic"

import { Header } from "@/components/Header"
import { Hero } from "@/components/Homepage"

const TheHotel = dynamic(() => import("@/components/Homepage/the-hotel"))
const PromotionsSection = dynamic(
  () => import("@/app/[locale]/promocoes/components/PromotionsSection")
)
const StrategicLocation = dynamic(
  () => import("@/components/Homepage/StrategicLocation")
)
const AmenitiesSection = dynamic(
  () => import("@/components/Amenities/Amenities")
)
const Business = dynamic(() => import("@/components/Homepage/Business"))
const AcomodationSection = dynamic(
  () => import("@/components/Homepage/AcomodationSection")
)
const GallerySection = dynamic(
  () => import("@/components/Homepage/GallerySection")
)
const BlogSection = dynamic(
  () => import("@/app/[locale]/blog/components/BlogSection")
)
const Location = dynamic(() => import("@/components/Maps/Location"))
const FaqSection = dynamic(
  () => import("@/app/[locale]/faq/components/FaqSection")
)

export default function Home() {
  return (
    <>
      <Header logo="white" color="secondary" btnColor="outlineWhite" />

      <Hero />

      <TheHotel />

      <PromotionsSection />

      <StrategicLocation />

      <AmenitiesSection />

      <Business />

      <AcomodationSection />

      <GallerySection />

      <BlogSection />

      <Location />

      <FaqSection />
    </>
  )
}
