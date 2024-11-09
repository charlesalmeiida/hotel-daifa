"use client"

import { AmenitiesSection } from "@/components/Amenities/Amenities"
import { BtnLink } from "@/components/Global/BtnLink"
import { Container } from "@/components/Global/Container"
import { Footer } from "@/components/Footer/Footer"
import { Header } from "@/components/Header/Header"
import { TagSpan } from "@/components/Global/TagSpan"
import { Location } from "@/components/Maps/Location"
import Image from "next/image"
import { motion } from "framer-motion"

export default function About() {
  return (
    <>
      <Header />

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
              <h2>Hotel Daifa</h2>
              <div className="w-14 h-px bg-orange mt-2"></div>
              <p className="mt-6 max-w-[540px] text-gray-700">
                O Hotel Daifa é um empreendimento hoteleiro que foi construído
                em uma época que em que o centro de Florianópolis foi se
                consolidando não apenas como um destino turístico de temporada,
                mas também como um importante destino de negócios e eventos,
                especialmente após a inauguração do Centro de Eventos, um dos
                maiores palcos de eventos de Florianópolis, que fica a 800
                metros do nosso hotel.
                <br />
                <br />
                Mediterrâneo que remete as raízes do fundador, o Hotel Daifa é
                dos mais tradicionais hotéis da cidade, que preserva um
                aconchego de pousada, com estrutura de hotel, com apenas 25
                unidades, equipadas e completas, sendo em sua maioria, quartos
                com vista para os cartões postais da cidade, como a Baia Sul e a
                Ponte Hercílio Luz. No Hotel Daifa o ambiente familiar e a
                entrega do melhor custo benefício, tornaram-se nossos
                diferenciais, proporcionando uma estadia confortável, econômica
                e muito próxima aos principais pontos turísticos, de eventos e
                negócios da cidade.
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
              <div>
                <TagSpan>PET-FRIENDLY</TagSpan>
                <h3>Seu melhor amigo é bem-vindo em nosso Hotel!</h3>
              </div>
              <p>
                Seu amiguinho poderá se hospedar com você e aproveitar todos os
                encantos da Ilha da Magia. Veja nossas regras para hospedagem de
                cães e gatos no botão abaixo.
              </p>
              <BtnLink link="/">saiba mais</BtnLink>
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

      <Footer />
    </>
  )
}
