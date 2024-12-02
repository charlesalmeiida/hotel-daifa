import { Header } from "@/components/Header"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Blog do Hotel Daifa | Dicas de Turismo e Hospedagem em Florianópolis",
  description:
    "Acompanhe o Blog do Hotel Daifa para dicas exclusivas de turismo, eventos e hospedagem em Florianópolis. Explore conteúdos imperdíveis!",
  openGraph: {
    title:
      "Blog do Hotel Daifa | Dicas de Turismo e Hospedagem em Florianópolis",
    description:
      "Acompanhe o Blog do Hotel Daifa para dicas exclusivas de turismo, eventos e hospedagem em Florianópolis. Explore conteúdos imperdíveis!",
    url: "https://hoteldaifa.com.br/blog",
    images: "https://www.hoteldaifa.com.br/img/thumb.png",
  },
  twitter: {
    title:
      "Blog do Hotel Daifa | Dicas de Turismo e Hospedagem em Florianópolis",
    description:
      "Acompanhe o Blog do Hotel Daifa para dicas exclusivas de turismo, eventos e hospedagem em Florianópolis. Explore conteúdos imperdíveis!",
    images: "https://www.hoteldaifa.com.br/img/thumb.png",
  },
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section>
      <Header />
      {children}
    </section>
  )
}
