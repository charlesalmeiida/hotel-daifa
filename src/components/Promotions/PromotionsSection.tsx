"use client"

import { useEffect, useState } from "react"
import { CardPromotion } from "./CardPromotion"
import promotionsData from "@/app/data/promotionsData.json"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/pagination"
import { Pagination, Navigation } from "swiper/modules"
import Image from "next/image"
import { Container } from "../Global/Container"
import { motion } from "framer-motion"

export function PromotionsSection() {
  const [isClient, setIsClient] = useState(false)

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
              <span className="font-mono text-base font-medium">PROMOÇÕES</span>
              <h2>Confira nossas ofertas e pacotes especiais</h2>
            </motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              className="opacity-80 max-w-96 mx-auto"
            >
              Temos o pacote ideal para você. Desfrute de experiências únicas
              com preços especiais e garanta sua reserva agora mesmo!
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
            <div className="custom-pagination flex justify-end"></div>
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
                el: ".custom-pagination",
              }}
              modules={[Pagination, Navigation]}
              className="mySwiper"
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
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
                    title={promotion.title}
                    description={promotion.description}
                    packageProp={promotion.package}
                    date={promotion.date}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
          <style jsx global>{`
            .custom-pagination .swiper-pagination-bullet {
              width: 24px;
              height: 2px;
              background-color: #ced4da;
              margin-right: 8px;
              opacity: 0.5;
              border-radius: 0;
              transition: all 0.3s ease;
            }
            .custom-pagination .swiper-pagination-bullet-active {
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
