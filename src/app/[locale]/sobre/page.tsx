"use client"

import { BtnLink } from "@/components/Global/BtnLink"
import { Container } from "@/components/Global/Container"
import { TagSpan } from "@/components/Global/TagSpan"
import Image from "next/image"
import { motion } from "framer-motion"
import { useTranslations } from "next-intl"
import AmenitiesSection from "@/components/Amenities/Amenities"
import Location from "@/components/Maps/Location"

export default function About() {
  const t = useTranslations("About")

  return (
    <>
      <section className="pt-14 lg:pt-28 pb-28">
        <Container>
          <div className="flex flex-col gap-10 lg:gap-0 lg:flex-row justify-between">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="mt-4"
            >
              <h2 className="text-gray-900">Hotel Daifa</h2>
              <div className="w-14 h-px bg-orange mt-2"></div>
              <p className="mt-6 max-w-[540px] text-gray-700">
                {t("text1")}
                <br />
                <br />
                {t("text2")}
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Image
                src={"/img/image-about-hotel.png"}
                width={592}
                height={562}
                alt="Fotos da frente do Hotel Daifa"
              />
            </motion.div>
          </div>
        </Container>
      </section>

      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="pb-14 lg:pb-28"
      >
        <AmenitiesSection />
      </motion.section>

      <section className="pb-14 lg:pb-28">
        <Container>
          <div className="flex flex-col gap-10 lg:gap-0 lg:flex-row items-center justify-around">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="space-y-4-"
            >
              <Image
                src={"/img/image-pet.png"}
                width={488}
                height={423}
                alt="Foto de um pet na seção de pet friendly do Hotel Daifa"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-6 max-w-[394px]"
            >
              <div className="space-y-4">
                <TagSpan>PET-FRIENDLY</TagSpan>
                <h3 className="text-gray-700">{t("petTitle")}</h3>
              </div>
              <p className="text-gray-700">{t("petText")}</p>
              <BtnLink link="/faq">{t("btn")}</BtnLink>
            </motion.div>
          </div>
        </Container>
      </section>

      <motion.section
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="pb-14 lg:pb-28"
      >
        <Location />
      </motion.section>
    </>
  )
}
