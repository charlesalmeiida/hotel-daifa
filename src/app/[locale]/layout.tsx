import type { Metadata } from "next"
import "../globals.css"
import { inter, raleway } from "../utils/fonts"
import { CookieModal } from "@/components/CookieModal"
import { Footer } from "@/components/Footer"
import { NextIntlClientProvider } from "next-intl"
import { getMessages } from "next-intl/server"
import { notFound } from "next/navigation"
import { routing } from "@/i18n/routing"
import { GoogleTagManager } from "@next/third-parties/google"
import Script from "next/script"

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

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  if (!routing.locales.includes(locale as any)) {
    notFound()
  }

  const messages = await getMessages()

  return (
    <html lang={locale}>
      <head>
        <Script
          id="facebook-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window,document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '1465400734405616'); 
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1465400734405616&ev=PageView&noscript=1"
          />
        </noscript>
      </head>
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <body className={`${inter} ${raleway} antialiased`}>
        <NextIntlClientProvider messages={messages}>
          <GoogleTagManager gtmId="GTM-5LFDLZND" />
          {children}
          <CookieModal />
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
