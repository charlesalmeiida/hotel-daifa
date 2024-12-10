import Image from "next/image"
import { Container } from "../Global/Container"
import { motion } from "framer-motion"
import { TagSpan } from "../Global/TagSpan"
import { BtnLink } from "../Global/BtnLink"
import { useTranslations } from "next-intl"

export function Business() {
  const t = useTranslations("Business")

  return (
    <section>
      <Container overflow>
        <div className="flex flex-col-reverse lg:flex-row gap-6 lg:gap-0 justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Image
              src={"/img/image-hall.png"}
              width={488}
              height={423}
              alt="Foto do Hall do Hotel Daifa em Florianópolis"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:max-w-[579px] space-y-6"
          >
            <div className="space-y-4 text-gray-900">
              <TagSpan>{t("tag")}</TagSpan>
              <h3 className="text-2xl leading-[150%] lg:text-[32px  ] text-gray-950">
                {t("text")}
              </h3>
            </div>
            <BtnLink
              target="_blank"
              link="https://reservas.desbravador.com.br/hotel-app/hotel-daifa"
            >
              {t("btn")}
            </BtnLink>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
