"use client"

import { Footer } from "@/components/Footer/Footer"
import { GallerySlide } from "@/components/Gallery/GallerySlide"
import { Container } from "@/components/Global/Container"
import { TagSpan } from "@/components/Global/TagSpan"
import { Header } from "@/components/Header/Header"
import { motion } from "framer-motion"

export default function Gallery() {
  return (
    <>
      <Header />
      <section className="pb-28 pt-14">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-4 text-center mx-auto max-w-[497px]"
          >
            <TagSpan>GALERIA DE FOTOS</TagSpan>
            <h3>Descubra o Hotel Daifa: Conforto e Beleza em Imagens</h3>
            <span className="font-mono block text-base font-medium text-orange opacity-80">
              Instagram - #hoteldaifa
            </span>
          </motion.div>
          <GallerySlide />
        </Container>
      </section>
      <Footer />
    </>
  )
}