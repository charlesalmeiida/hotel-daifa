import { Container } from "../Global/Container"
import { motion } from "framer-motion"
import { TagSpan } from "../Global/TagSpan"
import { BtnLink } from "../Global/BtnLink"
import Image from "next/image"
import { useTranslations } from "next-intl"

export function AcomodationSection() {
  const t = useTranslations("Acomodations")

  return (
    <section className="py-14 lg:py-28">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col space-y-4 lg:space-y-0 lg:flex-row items-start justify-between lg:items-end"
        >
          <div className="space-y-6 lg:max-w-[500px]">
            <TagSpan>{t("tag")}</TagSpan>
            <h2 className="text-[32px] lg:text-[40px] text-gray-950">
              {t("title")}
            </h2>
          </div>
          <div className="lg:max-w-96 space-y-6">
            <p className="text-gray-800">{t("text")}</p>
            <BtnLink link="/acomodacoes">{t("btn")}</BtnLink>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-8 lg:mt-20"
        >
          <Image
            src={"/img/image-room.png"}
            width={1216}
            height={495}
            alt="Foto de um quarto no Hotel Daifa"
          />
        </motion.div>
      </Container>
    </section>
  )
}
