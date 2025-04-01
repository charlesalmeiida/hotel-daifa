"use client"

import { Container } from "@/components/Global/Container"
import { CardPromotion } from "./CardPromotion"

import promotionsData from "@/app/data/promotionsData.json"

import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/pagination"
import { Pagination, Navigation, Autoplay } from "swiper/modules"

import Image from "next/image"

import { motion } from "framer-motion"
import { useTranslations, useLocale } from "next-intl"
import { useEffect, useState } from "react"

export default function PromotionsSection() {
  const [isClient, setIsClient] = useState(false)
  const t = useTranslations("Promotions")
  const locale = useLocale()

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return null
  }

  return (
    <section className="bg-promotions bg-no-repeat bg-cover bg-center bg-fixed py-14">
      <Container>
        <div className="space-y-12">
          <div className="text-center text-gray-50 space-y-8">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="space-y-6 mx-auto max-w-[455px]"
            >
              <span className="font-mono text-base font-medium">
                {t("title")}
              </span>
              <h2>{t("h2")}</h2>
            </motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              className="opacity-80 max-w-96 mx-auto"
            >
              {t("p")}
            </motion.p>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex">
              <button className={"swiper-button-prev rotate-180"}>
                <Image
                  src={"/svg/icon-arrow.svg"}
                  width={32}
                  height={32}
                  alt="Ícone de seta"
                />
              </button>
              <button className="swiper-button-next">
                <Image
                  src={"/svg/icon-arrow.svg"}
                  width={32}
                  height={32}
                  alt="Ícone de seta"
                />
              </button>
            </div>
            <div className="custom-pagination-promotion flex justify-end"></div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <Swiper
              slidesPerView={3}
              spaceBetween={32}
              pagination={{
                clickable: true,
                el: ".custom-pagination-promotion",
              }}
              modules={[Pagination, Navigation, Autoplay]}
              className="mySwiper"
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              autoplay={{
                delay: 2000,
                disableOnInteraction: false,
              }}
              loop={true}
              breakpoints={{
                320: {
                  slidesPerView: 1.1,
                },
                768: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
              }}
            >
              {promotionsData.map((promotion) => (
                <SwiperSlide key={promotion.title}>
                  <CardPromotion
                    key={promotion.title}
                    image={promotion.image}
                    title={
                      locale === "en"
                        ? promotion.titleEn
                        : locale === "es"
                        ? promotion.titleEs
                        : promotion.title
                    }
                    description={
                      locale === "en"
                        ? promotion.descriptionEn
                        : locale === "es"
                        ? promotion.descriptionEs
                        : promotion.description
                    }
                    packageProp={
                      locale === "en"
                        ? promotion.packageEn
                        : locale === "es"
                        ? promotion.packageEs
                        : promotion.package
                    }
                    date={locale === "en" ? promotion.dateEn : promotion.date}
                    promotion={promotion.title}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
          <style jsx global>{`
            .custom-pagination-promotion .swiper-pagination-bullet {
              width: 24px;
              height: 2px;
              background-color: #ced4da;
              margin-right: 8px;
              opacity: 0.5;
              border-radius: 0;
              transition: all 0.3s ease;
            }
            .custom-pagination-promotion .swiper-pagination-bullet-active {
              background-color: #f8f9fa;
              opacity: 1;
              width: 28px;
            }
          `}</style>
        </div>
      </Container>
    </section>
  )
}
