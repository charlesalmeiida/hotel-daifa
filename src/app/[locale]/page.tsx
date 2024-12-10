"use client"

import dynamic from "next/dynamic"
import { BtnLink } from "@/components/Global/BtnLink"
import { Container } from "@/components/Global/Container"
import { TagSpan } from "@/components/Global/TagSpan"
import Image from "next/image"
import { AmenitiesSection } from "@/components/Amenities/Amenities"
import { motion } from "framer-motion"
import {
  AcomodationSection,
  Business,
  GallerySection,
  Hero,
  StrategicLocation,
} from "@/components/Homepage"
import { Header } from "@/components/Header"
import { PromotionsSection } from "./promocoes/components/PromotionsSection"
import { BlogSection } from "./blog/components/BlogSection"
import { FaqSection } from "./faq/components/FaqSection"
import { useTranslations } from "next-intl"

const Location = dynamic(
  () => import("@/components/Maps/Location").then((mod) => mod.Location),
  {
    ssr: false,
  }
)

const ModalPromotion = dynamic(
  () => import("@/components/ModalPromotion").then((mod) => mod.ModalPromotion),
  {
    ssr: false,
  }
)

export default function Home() {
  const t = useTranslations("TheHotel")

  return (
    <>
      <Header logo="white" color="secondary" btnColor="outlineWhite" />

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        viewport={{ once: true }}
      >
        <ModalPromotion />
      </motion.div>

      <Hero />

      <section className="py-14 lg:py-[120px]">
        <Container overflow>
          <div className="flex flex-col lg:flex-row gap-6 lg:gap-0 items-start lg:items-center justify-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="hidden lg:block"
            >
              <Image
                src={"/img/baia-sul.png"}
                width={696}
                height={400}
                alt="Vista da Baía Sul do Hotel Daifa"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="lg:hidden mx-auto"
            >
              <Image
                src={"/img/baia-sul-noblur.png"}
                width={696}
                height={400}
                alt="Vista da Baía Sul do Hotel Daifa"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="space-y-4 lg:-ml-40"
            >
              <TagSpan>hotel</TagSpan>
              <h3 className=" lg:max-w-[472px] text-gray-900">{t("text")}</h3>
              <BtnLink link="/sobre">{t("textLink")}</BtnLink>
            </motion.div>
          </div>
        </Container>
      </section>

      <PromotionsSection />

      <StrategicLocation />

      <section className="py-14 lg:py-28">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <AmenitiesSection />
        </motion.div>
      </section>

      <Business />

      <AcomodationSection />

      <GallerySection />

      <BlogSection />

      <section className="pt-14 lg:pt-28">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Location />
        </motion.div>
      </section>

      <section className="py-14 lg:py-28">
        <FaqSection />
      </section>
    </>
  )
}
