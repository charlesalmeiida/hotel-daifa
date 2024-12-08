"use client"

import { itemsFaq } from "@/app/data/itemsFaq"
import { BtnLink } from "@/components/Global/BtnLink"
import { Container } from "@/components/Global/Container"
import { TagSpan } from "@/components/Global/TagSpan"
import { ItemFaq } from "@/app/(routes)/faq/components/ItemFaq"
import { motion } from "framer-motion"

export function FaqSection() {
  return (
    <Container overflow>
      <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start gap-10 lg:gap-[72px] w-full">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="lg:max-w-[420px]"
        >
          <TagSpan>FAQ</TagSpan>
          <h2 className="mt-4 text-gray-700 text-[32px] lg:text-[40px] mb-8">
            Perguntas e respostas frequentes
          </h2>
          <p className="mb-10 text-gray-900 opacity-80">
            No nosso FAQ disponibilizamos tudo o que você precisa saber para se
            programar e evitar surpresas em sua viagem.
          </p>
          <BtnLink link="/faq">saiba mais</BtnLink>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="space-y-6">
            {itemsFaq.slice(0, 6).map((item, index) => (
              <ItemFaq
                key={index}
                question={item.question}
                answer={item.answer}
                link={item.link || undefined}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </Container>
  )
}
