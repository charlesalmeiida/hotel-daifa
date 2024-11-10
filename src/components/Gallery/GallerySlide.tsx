"use client"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/pagination"
import { Swiper as SwiperType } from "swiper"
import { Navigation, Thumbs, Pagination } from "swiper/modules"
import imagesGallery from "@/app/data/imagesGallery.json"
import Image from "next/image"
import { useEffect, useState, useRef } from "react"

export function GallerySlide() {
  const [isClient, setIsClient] = useState(false)
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null)
  const nextButtonRef = useRef<HTMLButtonElement>(null)
  const prevButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return null
  }

  return (
    <div className="relative">
      <div className="flex z-30 justify-between absolute w-full top-1/2">
        <button ref={prevButtonRef} className="swiper-slide-prev">
          <Image
            className="rotate-180"
            src={"/svg/icon-slide.svg"}
            width={12}
            height={24}
            alt="Slide"
          />
        </button>
        <button ref={nextButtonRef} className="swiper-slide-next">
          <Image
            src={"/svg/icon-slide.svg"}
            width={12}
            height={24}
            alt="Slide"
          />
        </button>
      </div>
      <Swiper
        slidesPerView={1}
        pagination={{
          clickable: true,
          el: ".custom-pagination",
        }}
        modules={[Navigation, Thumbs, Pagination]}
        className="mySwiper"
        navigation={{
          nextEl: nextButtonRef.current,
          prevEl: prevButtonRef.current,
        }}
        thumbs={{ swiper: thumbsSwiper }}
      >
        {imagesGallery.map((image) => (
          <SwiperSlide key={image.id}>
            <div className="flex justify-center mt-14">
              <Image
                className="rounded-[4px]"
                src={image.image}
                width={800}
                height={440}
                alt="Foto galeria Hotel Daifa"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Contêiner para centralizar as thumbs */}
      <div className="flex justify-center mx-auto mt-8 max-w-[800px]">
        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={32}
          slidesPerView={2.4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[Navigation, Thumbs, Pagination]}
          className="mySwiperThumbs"
        >
          {imagesGallery.map((image) => (
            <SwiperSlide key={image.id}>
              <Image
                className="max-w-72 cursor-pointer rounded-[4px]"
                src={image.image}
                alt="Imagem do hotel daifa"
                width={280}
                height={154}
                style={{
                  objectFit: "cover",
                  width: "100%",
                  height: "auto",
                }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}
