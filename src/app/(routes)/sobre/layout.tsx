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
    title:
      "Hotel Daifa - Acomodações com Conforto e Custo-Benefício em Florianópolis",
    description:
      "Descubra as acomodações do Hotel Daifa em Florianópolis: conforto, vista para a Baía Sul e custo-benefício. Reserve já sua estadia no coração da cidade!",
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
      {children}
    </section>
  )
}
