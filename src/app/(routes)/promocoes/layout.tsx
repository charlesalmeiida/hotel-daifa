import { Header } from "@/components/Header"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Promoções no Hotel Daifa | Descontos Exclusivos em Florianópolis",
  description:
    "Confira as promoções do Hotel Daifa! Antecipe sua reserva e aproveite descontos exclusivos em Florianópolis. Promoções por tempo limitado!",
  openGraph: {
    title: "Promoções no Hotel Daifa | Descontos Exclusivos em Florianópolis",
    description:
      "Confira as promoções do Hotel Daifa! Antecipe sua reserva e aproveite descontos exclusivos em Florianópolis. Promoções por tempo limitado!",
    url: "https://hoteldaifa.com.br/promocoes",
    images: "https://www.hoteldaifa.com.br/img/thumb.png",
  },
  twitter: {
    title: "Promoções no Hotel Daifa | Descontos Exclusivos em Florianópolis",
    description:
      "Confira as promoções do Hotel Daifa! Antecipe sua reserva e aproveite descontos exclusivos em Florianópolis. Promoções por tempo limitado!",
    images: "https://www.hoteldaifa.com.br/img/thumb.png",
  },
}

export default function PromotionsLayout({
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
