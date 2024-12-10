"use client"

import { Container } from "@/components/Global/Container"
import { TagSpan } from "@/components/Global/TagSpan"
import { motion } from "framer-motion"
import { Header } from "@/components/Header"
import { GallerySlide } from "./components"
import { useTranslations } from "next-intl"

export default function Gallery() {
  const t = useTranslations("Gallery")

  return (
    <>
      <Header />
      <section className="pb-28 pt-14">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-4 text-center mx-auto max-w-[550px]"
          >
            <TagSpan>{t("title")}</TagSpan>
            <h3>{t("text")}</h3>
            <span className="font-mono block text-base font-medium text-orange opacity-80">
              Instagram - #hoteldaifa
            </span>
          </motion.div>
          <GallerySlide />
        </Container>
      </section>
    </>
  )
}
