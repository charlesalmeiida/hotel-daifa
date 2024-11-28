import { Footer } from "@/components/Footer"
import { Header } from "@/components/Header"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title:
    "Hotel Daifa - Acomodações com Conforto e Custo-Benefício em Florianópolis",
  description:
    "Descubra as acomodações do Hotel Daifa em Florianópolis: conforto, vista para a Baía Sul e custo-benefício. Reserve já sua estadia no coração da cidade!",
  openGraph: {
    title:
      "Hotel Daifa - Acomodações com Conforto e Custo-Benefício em Florianópolis",
    description:
      "Descubra as acomodações do Hotel Daifa em Florianópolis: conforto, vista para a Baía Sul e custo-benefício. Reserve já sua estadia no coração da cidade!",
    url: "https://hoteldaifa.com.br/acomodacoes",
    images: "https://www.hoteldaifa.com.br/img/rooms/deluxe-hidro-dupla/01.png",
  },
  twitter: {
    title:
      "Hotel Daifa - Acomodações com Conforto e Custo-Benefício em Florianópolis",
    description:
      "Descubra as acomodações do Hotel Daifa em Florianópolis: conforto, vista para a Baía Sul e custo-benefício. Reserve já sua estadia no coração da cidade!",
    images: "https://www.hoteldaifa.com.br/img/rooms/deluxe-hidro-dupla/01.png",
  },
}

export default function RoomsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section>
      <Header />
      {children}
      <Footer />
    </section>
  )
}
