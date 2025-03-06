"use client"

import { Maps } from "./Maps"

import { useTranslations } from "next-intl"
import { motion } from "motion/react"
import { Container } from "../Global/Container"
import { TagSpan } from "../Global/TagSpan"

export default function Location() {
  const t = useTranslations("Map")

  return (
    <section className="pt-14 lg:pt-28">
      <motion.div>
        <Container>
          <div className="text-center space-y-6">
            <TagSpan>{t("tag")}</TagSpan>
            <h3 className="max-w-sm mx-auto text-gray-700">{t("text")}</h3>
          </div>
          <div>
            <Maps />
          </div>
        </Container>
      </motion.div>
    </section>
  )
}
