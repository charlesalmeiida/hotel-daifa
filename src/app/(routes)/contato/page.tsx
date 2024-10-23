import { Container } from "@/components/Global/Container"
import { Contacts } from "@/components/Global/Footer/Contacts"
import { Footer } from "@/components/Global/Footer/Footer"
import { Header } from "@/components/Global/Header/Header"

export default function Contact() {
  return (
    <>
      <Header />
      <section className="pt-[207px]">
        <Container>
          <div className="space-y-4 max-w-lg">
            <h3>
              Tire todas as suas duvidas com nossa equipe, 24 horas por dia!
            </h3>
            <p className="max-w-[416px]">
              Entre em contato com nossa equipe, faça sua reserva e aproveite o
              melhor custobenefício de Floripa!
            </p>
          </div>
          <div className="mt-8">
            <Contacts color="secondary" />
          </div>
        </Container>
      </section>
      <Footer />
    </>
  )
}
