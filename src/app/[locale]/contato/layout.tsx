import { Header } from "@/components/Header"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contato | Fale com o Hotel Daifa em Florianópolis",
  description:
    "Entre em contato com o Hotel Daifa em Florianópolis. Telefone, WhatsApp e e-mail para reservas e dúvidas. Estamos prontos para atender você!",
  openGraph: {
    title: "Contato | Fale com o Hotel Daifa em Florianópolis",
    description:
      "Entre em contato com o Hotel Daifa em Florianópolis. Telefone, WhatsApp e e-mail para reservas e dúvidas. Estamos prontos para atender você!",
    url: "https://hoteldaifa.com.br/contato",
    images: "https://www.hoteldaifa.com.br/img/thumb.png",
  },
  twitter: {
    title: "Contato | Fale com o Hotel Daifa em Florianópolis",
    description:
      "Entre em contato com o Hotel Daifa em Florianópolis. Telefone, WhatsApp e e-mail para reservas e dúvidas. Estamos prontos para atender você!",
    images: "https://www.hoteldaifa.com.br/img/thumb.png",
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section>
      {" "}
      <Header />
      {children}
    </section>
  )
}
