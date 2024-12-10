"use client"

import { BtnLink } from "@/components/Global/BtnLink"
import Image from "next/image"
import { GuestAndBeds } from "./GuestsAndBeds"
import { IconBenefits } from "./IconBenefits"
import { motion } from "framer-motion"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/pagination"
import { Navigation, Pagination } from "swiper/modules"
import { useEffect, useRef, useState } from "react"
import { useTranslations, useLocale } from "next-intl"

interface Room {
  id: number
  title: string
  image: string[]
  beds: string
  bedsEn: string
  bedsEs: string
  hospeds: number
  benefits: string[]
  benefitsEn: string[]
  benefitsEs: string[]
  description: string
}

interface RoomsProps {
  room: Room
}

export function Rooms({ room }: RoomsProps) {
  const t = useTranslations("AcomodationsPage")
  const locale = useLocale()

  const [isClient, setIsClient] = useState(false)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const swiperRef = useRef<any>(null) // ref para o Swiper

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(0)
    }
  }, [room])

  if (!isClient) {
    return null
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="opacity-0 max-w-[696px] relative"
    >
      <div className="flex z-40 w-[105%] -left-4 justify-between absolute top-20 lg:top-[30%]">
        <button className="swiper-button-prev">
          <Image
            className="rotate-180"
            src={"/svg/icon-slide.svg"}
            width={12}
            height={24}
            alt="Slide"
          />
        </button>
        <button className="swiper-button-next">
          <Image
            src={"/svg/icon-slide.svg"}
            width={12}
            height={24}
            alt="Slide"
          />
        </button>
      </div>
      <div>
        <div className="max-w-[757px]">
          <Swiper
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            slidesPerView={1}
            pagination={{
              clickable: true,
              el: ".custom-pagination",
            }}
            modules={[Navigation, Pagination]}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            breakpoints={{
              1024: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 1,
              },
              640: {
                slidesPerView: 1,
              },
            }}
          >
            {room.image.map((image, index) => (
              <SwiperSlide key={index}>
                <div>
                  <Image
                    className="rounded-[4px] lg:max-w-full max-h-[344px]"
                    src={image}
                    width={699}
                    height={344}
                    alt={`Imagem do quarto ${room.title}`}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <GuestAndBeds
          beds={
            locale === "en"
              ? room.bedsEn
              : locale === "es"
              ? room.bedsEs
              : room.beds
          }
          guests={room.hospeds}
        />
        <div className="flex mt-10 gap-4 flex-wrap max-w-xl w-full">
          {locale === "en"
            ? room.benefitsEn.map((benefit) => (
                <IconBenefits key={benefit}>{benefit}</IconBenefits>
              ))
            : locale === "es"
            ? room.benefitsEs.map((benefit) => (
                <IconBenefits key={benefit}>{benefit}</IconBenefits>
              ))
            : room.benefits.map((benefit) => (
                <IconBenefits key={benefit}>{benefit}</IconBenefits>
              ))}
        </div>
      </div>
      <div className="mt-8">
        <BtnLink link="/">{t("btn")}</BtnLink>
      </div>
    </motion.div>
  )
}
