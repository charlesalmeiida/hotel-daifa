import { LpLayoutClient } from "./LpLayoutClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hotel Daifa - Venda | Florianópolis",
  description:
    "Hotel Daifa à venda em Florianópolis. 25 unidades, 1.600 m², 80%+ ocupação. Valor R$ 8,750 milhões. Direto com o proprietário. Negociação flexível.",
  openGraph: {
    title: "Hotel Daifa - Venda | Florianópolis",
    description:
      "Hotel Daifa à venda em Florianópolis. 25 unidades, 1.600 m², centro. Direto com o proprietário.",
    url: "https://www.hoteldaifa.com.br/empreendimento",
    images: "https://www.hoteldaifa.com.br/img/thumb.png",
  },
  twitter: {
    title: "Hotel Daifa - Venda | Florianópolis",
    description:
      "Hotel Daifa à venda. Centro de Florianópolis. Direto com o proprietário.",
    images: "https://www.hoteldaifa.com.br/img/thumb.png",
  },
};

export default function LpHotelDaifaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <LpLayoutClient>{children}</LpLayoutClient>;
}
