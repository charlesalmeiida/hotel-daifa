"use client"

import amenitiesData from "@/app/data/amenitiesData.json"

import { useLocale, useTranslations } from "next-intl"
import { motion } from "framer-motion"
import { Container } from "../Global/Container"
import { ItemAmenity } from "./ItemAmenity"

export default function AmenitiesSection() {
  const locale = useLocale()
  const t = useTranslations("Amenities")

  return (
    <>
      <section className="py-14 lg:py-28">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Container>
            <div className="mx-auto space-y-4 text-center">
              <h3 className="text-gray-800">{t("title")}</h3>
              <span className="w-14 h-px mx-auto bg-orange block"></span>
            </div>
            <div className="flex mt-10 flex-wrap max-w-[1072px] justify-center items-center gap-y-10 gap-x-16 mx-auto">
              {amenitiesData.map((item) => (
                <ItemAmenity
                  key={item.title}
                  icon={item.icon}
                  title={
                    locale === "en"
                      ? item.titleEn
                      : locale === "es"
                      ? item.titleEs
                      : item.title
                  }
                  description={
                    locale === "en"
                      ? item.descriptionEn
                      : locale === "es"
                      ? item.descriptionEs
                      : item.description
                  }
                />
              ))}
            </div>
          </Container>
        </motion.div>
      </section>
    </>
  )
}
