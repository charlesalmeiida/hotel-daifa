"use client"

import dynamic from "next/dynamic"
import { Header } from "@/components/Header"
import { BtnLink } from "@/components/Global/BtnLink"
import { Container } from "@/components/Global/Container"
import { TagSpan } from "@/components/Global/TagSpan"
import Image from "next/image"
import { Footer } from "@/components/Footer/Footer"
import { AmenitiesSection } from "@/components/Amenities/Amenities"
import { BlogSection } from "@/app/(routes)/blog/components/BlogSection"
import { PromotionsSection } from "@/app/(routes)/promocoes/components/PromotionsSection"
import { motion } from "framer-motion"
import { FaqSection } from "./(routes)/faq/components/FaqSection"
import { BookSearchForm } from "@/components/BookingSearchForm"

const Location = dynamic(() =>
  import("@/components/Maps/Location").then((mod) => mod.Location)
)

const ModalPromotion = dynamic(() =>
  import("@/components/ModalPromotion").then((mod) => mod.ModalPromotion)
)

const GallerySlide = dynamic(() =>
  import("@/app/(routes)/galeria/components/GallerySlide").then(
    (mod) => mod.GallerySlide
  )
)

export default function Home() {
  return (
    <>
      <Header logo="white" color="secondary" btnColor="outlineWhite" />

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        viewport={{ once: true }}
      >
        <ModalPromotion />
      </motion.div>

      <main className="relative w-full">
        <video
          src="/img/bg-hero.mp4"
          autoPlay
          loop
          muted
          className="absolute h-[690px] top-0 left-0 w-full object-cover z-0"
        />

        <section className="relative z-10 -mt-[95px] py-40 lg:py-52 bg-black bg-opacity-[22%]">
          <Container>
            <div className="space-y-6">
              <motion.h1
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="text-center text-[32px] lg:text-[46px] leading-[150%] text-gray-50 max-w-[893px] mx-auto"
              >
                Hospede-se no Coração de Florianópolis com o Melhor
                Custo-Benefício da Cidade
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.8 }}
                transition={{ duration: 1, delay: 0.5 }}
                viewport={{ once: true }}
                className="text-gray-50 opacity-80 font-sans max-w-screen-sm mx-auto text-center text-base md:text-xl font-semibold"
              >
                No Hotel Daifa você encontra uma estrutura completa de hotel com
                aconchego e descontração de uma pousada. Com localização
                privilegiada, estamos situados em frente à Baía Sul e próximos
                aos principais pontos turísticos e de negócios da cidade.
              </motion.p>
            </div>
          </Container>
        </section>

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative z-10"
        >
          <BookSearchForm />
        </motion.div>
      </main>

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
              <h3 className=" lg:max-w-[472px] text-gray-900">
                Com vista panorâmica para a Baía Sul e Ponte Hercílio Luz,
                cartão postal de Florianópolis.
              </h3>
              <BtnLink link="/sobre">saiba mais</BtnLink>
            </motion.div>
          </div>
        </Container>
      </section>

      <PromotionsSection />

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
                  <TagSpan>LOCALIZAÇÃO ESTRATÉGICA</TagSpan>
                  <h4 className="lg:max-w-[489px] text-gray-950">
                    Hotel próximo a pontos importantes, como Centro da cidade,
                    Mercado Público, CentroSul Eventos, Hospitais de Caridade,
                    Baía Sul, Assembleia Legislativa, Fórum e Ponte Hercílio
                    Luz. Também oferece fácil acesso aos principais shoppings,
                    Aeroporto, Rodoviária e aos principais pontos turísticos e
                    históricos de Floripa!
                  </h4>
                  <BtnLink link="/localizacao">saiba mais</BtnLink>
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

      <section className="py-14 lg:py-28">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <AmenitiesSection />
        </motion.div>
      </section>

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
                <TagSpan>LAZER, EVENTOS E NEGÓCIOS</TagSpan>
                <h3 className="text-2xl leading-[150%] lg:text-[32px  ] text-gray-950">
                  Seja a negócios ou lazer, o Hotel Daifa oferece o melhor
                  custo-beneficio da cidade! Localização privilegiada e tarifas
                  especiais para hóspedes a negócios ou participantes de
                  eventos!
                </h3>
              </div>
              <BtnLink
                target="_blank"
                link="https://reservas.desbravador.com.br/hotel-app/hotel-daifa"
              >
                saiba mais
              </BtnLink>
            </motion.div>
          </div>
        </Container>
      </section>

      <section className="py-14 lg:py-28">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col space-y-4 lg:space-y-0 lg:flex-row items-start justify-between lg:items-end"
          >
            <div className="space-y-6 lg:max-w-[436px]">
              <TagSpan>ACOMODAÇÕES</TagSpan>
              <h2 className="text-[32px] lg:text-[40px] text-gray-950">
                Conforto e praticidade para sua estadia
              </h2>
            </div>
            <div className="lg:max-w-96 space-y-6">
              <p className="text-gray-800">
                Opções de quartos econômicos, quartos com vista para Baia e com
                Hidromassagem! Única opção com hidromassagem no centro de
                Florianópolis!
              </p>
              <BtnLink link="/acomodacoes">saiba mais</BtnLink>
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

      <section>
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-4 text-center mx-auto max-w-[497px]"
          >
            <TagSpan>GALERIA DE FOTOS</TagSpan>
            <h3 className="text-gray-900">
              Descubra o Hotel Daifa: Conforto e Beleza em Imagens
            </h3>
            <span className="font-mono block text-base font-medium text-orange opacity-80">
              Instagram - #hoteldaifa
            </span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <GallerySlide />
            </motion.div>
          </motion.div>
        </Container>
      </section>

      <BlogSection />

      <section className="pt-14 lg:pt-28">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Location />
        </motion.div>
      </section>

      <section className="py-14 lg:py-28">
        <FaqSection />
      </section>

      <Footer />
    </>
  )
}
