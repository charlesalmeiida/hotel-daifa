"use client"

import { useTranslations } from "next-intl"
import { motion } from "framer-motion"
import { Container } from "../Global/Container"
import { GallerySlide } from "@/app/[locale]/galeria/components"
import { TagSpan } from "../Global/TagSpan"

export default function GallerySection() {
  const t = useTranslations("Gallery")

  return (
    <section>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="space-y-4 text-center mx-auto max-w-[520px]"
        >
          <TagSpan>{t("title")}</TagSpan>
          <h3 className="text-gray-900">{t("text")}</h3>
          <span className="font-mono block text-base font-medium text-orange opacity-80">
            Instagram - #hoteldaifa
          </span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <GallerySlide />
          </motion.div>
        </motion.div>
      </Container>
    </section>
  )
}
