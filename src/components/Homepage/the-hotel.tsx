"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { useTranslations } from "next-intl"
import { Container } from "../Global/Container"
import { BtnLink } from "../Global/BtnLink"
import { TagSpan } from "../Global/TagSpan"

const TheHotel = () => {
  const t = useTranslations("TheHotel")

  return (
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
  )
}

export default TheHotel
