import { BookSearchForm } from "../BookingSearchForm"
import { Container } from "../Global/Container"
import { motion } from "framer-motion"

export function Hero() {
  return (
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
              privilegiada, estamos situados em frente à Baía Sul e próximos aos
              principais pontos turísticos e de negócios da cidade.
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
  )
}
