"use client"

import { ContactForm } from "@/app/(routes)/contato/components/ContactForm"
import { Container } from "@/components/Global/Container"
import { Contacts } from "@/components/Footer/Contacts"
import { Footer } from "@/components/Footer/Footer"
import Link from "next/link"
import { motion } from "framer-motion"
import { Header } from "@/components/Header"

export default function Contact() {
  return (
    <>
      <Header />
      <section className="pt-20 pb-14 lg:pb-28">
        <Container overflow>
          <div className="flex flex-col items-center lg:items-start lg:flex-row gap-10 lg:gap-0 justify-between">
            <motion.div
              className="space-y-10"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="space-y-8">
                <div className="space-y-4 max-w-lg">
                  <h3 className="text-gray-950">
                    Tire todas as suas duvidas com nossa equipe, 24 horas por
                    dia!
                  </h3>
                  <p className="max-w-[416px] text-gray-900 opacity-80">
                    Entre em contato com nossa equipe, faça sua reserva e
                    aproveite o melhor custo benefício de Floripa!
                  </p>
                </div>
                <div>
                  <Contacts color="secondary" />
                </div>
              </div>
              <p className="max-w-80 text-gray-700">
                Profa. Maria Júlia Franco, 294 – Prainha, Florianópolis – SC,
                88020-280
              </p>
              <div className="flex space-y-4 flex-col font-mono text-lg font-medium text-blue underline">
                <Link href={"mailto:contato@hoteldaifa.com.br"}>
                  contato@hoteldaifa.com.br
                </Link>
                <Link href={"mailto:reservas@hoteldaifa.com.br"}>
                  reservas@hoteldaifa.com.br
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="p-6 w-full lg:max-w-[488px] rounded-[4px] space-y-6 border border-gray-200"
            >
              <h4 className="text-gray-950">Entre em contato</h4>
              <ContactForm />
            </motion.div>
          </div>
        </Container>
      </section>
      <Footer />
    </>
  )
}
