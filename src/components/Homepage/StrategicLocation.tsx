"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { TagSpan } from "../Global/TagSpan"
import { BtnLink } from "../Global/BtnLink"
import { useTranslations } from "next-intl"
import { Container } from "../Global/Container"

export default function StrategicLocation() {
  const t = useTranslations("Location")

  return (
    <section className="pt-14 lg:pt-28">
      <Container>
        <div className="flex flex-col lg:flex-row justify-between">
          <div className="space-y-14 flex items-center flex-col-reverse lg:flex-col gap-6 lg:gap-0">
            <div className="space-y-8 mt-4">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <TagSpan>{t("title")}</TagSpan>
                <h4 className="lg:max-w-[489px] text-gray-950">{t("text")}</h4>
                <BtnLink link="/localizacao">{t("btn")}</BtnLink>
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <Image
                src={"/img/image-mercado.png"}
                width={488}
                height={280}
                alt="Foto do Mercado Público em Florianópolis"
              />
            </motion.div>
          </div>
          <div className="hidden lg:block space-y-10">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Image
                src={"/img/image-ponte-hercilio.png"}
                width={696}
                height={400}
                alt="Foto da Ponte Hercílio Luz em Florianópolis"
              />
            </motion.div>
            <motion.div
              className="flex justify-between"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <Image
                src={"/img/image-piscina.png"}
                width={312}
                height={295}
                alt="Foto do centro de convenções em Florianópolis"
              />
              <Image
                className="max-h-[186px]"
                src={"/img/image-ufsc.png"}
                width={312}
                height={186}
                alt="Foto da UFSC em Florianópolis"
              />
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  )
}
