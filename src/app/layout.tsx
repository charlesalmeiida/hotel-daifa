import type { Metadata } from "next"
import "./globals.css"
import { inter, raleway } from "./utils/fonts"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { CookieModal } from "@/components/CookieModal"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"

export const metadata: Metadata = {
  title: "Hotel Daifa - Florianópolis",
  description:
    "O Hotel Daifa combina o charme acolhedor de uma pousada com a estrutura completa de um hotel, oferecendo uma experiência única em Florianópolis. Localizado estrategicamente em frente à Baía Sul, o hotel proporciona fácil acesso aos principais pontos turísticos, eventos e áreas de negócios da cidade. Com apenas 25 unidades exclusivas, muitas com vistas deslumbrantes para cartões-postais como a Ponte Hercílio Luz, o Hotel Daifa é sinônimo de conforto e tradição. Sua arquitetura de estilo mediterrâneo reflete as raízes do fundador, enquanto o ambiente familiar e o excelente custo-benefício fazem dele a escolha perfeita tanto para lazer quanto para negócios.",
  openGraph: {
    title: "Hotel Daifa - Florianópolis",
    description:
      "O Hotel Daifa combina o charme acolhedor de uma pousada com a estrutura completa de um hotel, oferecendo uma experiência única em Florianópolis. Localizado estrategicamente em frente à Baía Sul, o hotel proporciona fácil acesso aos principais pontos turísticos, eventos e áreas de negócios da cidade. Com apenas 25 unidades exclusivas, muitas com vistas deslumbrantes para cartões-postais como a Ponte Hercílio Luz, o Hotel Daifa é sinônimo de conforto e tradição. Sua arquitetura de estilo mediterrâneo reflete as raízes do fundador, enquanto o ambiente familiar e o excelente custo-benefício fazem dele a escolha perfeita tanto para lazer quanto para negócios.",
    images: [
      {
        url: "https://www.hoteldaifa.com.br/img/thumb.png",
      },
    ],
  },
  twitter: {
    title: "Hotel Daifa - Florianópolis",
    description:
      "O Hotel Daifa combina o charme acolhedor de uma pousada com a estrutura completa de um hotel, oferecendo uma experiência única em Florianópolis. Localizado estrategicamente em frente à Baía Sul, o hotel proporciona fácil acesso aos principais pontos turísticos, eventos e áreas de negócios da cidade. Com apenas 25 unidades exclusivas, muitas com vistas deslumbrantes para cartões-postais como a Ponte Hercílio Luz, o Hotel Daifa é sinônimo de conforto e tradição. Sua arquitetura de estilo mediterrâneo reflete as raízes do fundador, enquanto o ambiente familiar e o excelente custo-benefício fazem dele a escolha perfeita tanto para lazer quanto para negócios.",
    images: [
      {
        url: "https://www.hoteldaifa.com.br/img/thumb.png",
      },
    ],
  },
  keywords: [
    "Hotel Daifa",
    "Florianópolis",
    "Hotel",
    "Hospedagem",
    "Pousada",
    "Hotel Acolhedor",
    "Pontos turísticos em Florianópolis",
    "Floripa",
    "Custo-benefício",
    "Hotel para negócios",
    "Hotel para lazer",
    "Hotel Próximo a Ponte Hercílio Luz",
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br">
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <body className={`${inter} ${raleway} antialiased`}>
        <Header logo="white" color="secondary" btnColor="outlineWhite" />
        {children}
        <SpeedInsights />
        <CookieModal />
        <Footer />
      </body>
    </html>
  )
}
