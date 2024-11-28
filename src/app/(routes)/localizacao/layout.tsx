import { Header } from "@/components/Header"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Localização do Hotel Daifa | Em Frente à Baía Sul, Florianópolis",
  description:
    "Saiba como chegar ao Hotel Daifa! Localizado em frente à Baía Sul, próximo à Ponte Hercílio Luz e aos principais pontos turísticos de Florianópolis.",
  openGraph: {
    title: "Localização do Hotel Daifa | Em Frente à Baía Sul, Florianópolis",
    description:
      "Saiba como chegar ao Hotel Daifa! Localizado em frente à Baía Sul, próximo à Ponte Hercílio Luz e aos principais pontos turísticos de Florianópolis.",
    url: "https://hoteldaifa.com.br/localizacao",
    images: "https://www.hoteldaifa.com.br/img/baia-sul-noblur.png",
  },
  twitter: {
    title: "Localização do Hotel Daifa | Em Frente à Baía Sul, Florianópolis",
    description:
      "Saiba como chegar ao Hotel Daifa! Localizado em frente à Baía Sul, próximo à Ponte Hercílio Luz e aos principais pontos turísticos de Florianópolis.",
    images: "https://www.hoteldaifa.com.br/img/baia-sul-noblur.png",
  },
}

export default function LocationLayout({
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
