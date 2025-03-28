import { Header } from "@/components/Header"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Sobre o Hotel Daifa | História e Tradição em Florianópolis",
  description:
    "Conheça o Hotel Daifa: tradição, conforto e localização privilegiada em Florianópolis. Descubra nossa história e compromisso com a hospitalidade.",
  openGraph: {
    title: "Sobre o Hotel Daifa | História e Tradição em Florianópolis",
    description:
      "Conheça o Hotel Daifa: tradição, conforto e localização privilegiada em Florianópolis. Descubra nossa história e compromisso com a hospitalidade.",
    url: "https://hoteldaifa.com.br/sobre",
    images: "https://www.hoteldaifa.com.br/img/thumb.png",
  },
  twitter: {
    title: "Sobre o Hotel Daifa | História e Tradição em Florianópolis",
    description:
      "Conheça o Hotel Daifa: tradição, conforto e localização privilegiada em Florianópolis. Descubra nossa história e compromisso com a hospitalidade.",
    images: "https://www.hoteldaifa.com.br/img/thumb.png",
  },
}

export default function AboutLayout({
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
