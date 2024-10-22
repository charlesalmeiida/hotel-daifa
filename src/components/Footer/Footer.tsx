import Image from "next/image"
import { Container } from "../GlobalComponents/Container"
import Link from "next/link"
import { ItemNav } from "../Header/components/ItemNav"

export function Footer() {
  return (
    <footer className="bg-blue pt-20 pb-4">
      <Container>
        <div className="flex justify-between items-start">
          <div className="space-y-10">
            <Image
              src={"svg/logo-white.svg"}
              width={72}
              height={61}
              alt="Logo do Hotel Daifa"
            />
            <p className="text-gray-50 max-w-80">
              Profa. Maria Júlia Franco, 294 – Prainha, Florianópolis – SC,
              88020-280
            </p>
            <div className="flex items-center gap-8">
              <Link
                href={"https://www.instagram.com/hoteldaifa/"}
                target={"_blank"}
              >
                <Image
                  src={"svg/icon-instagram.svg"}
                  width={20}
                  height={20}
                  alt="Logo do Instagram"
                />
              </Link>
              <Link
                href={"https://www.facebook.com/hoteldaifa/"}
                target={"_blank"}
              >
                <Image
                  src={"svg/icon-facebook.svg"}
                  width={11}
                  height={20}
                  alt="Logo do Facebook"
                />
              </Link>
            </div>
            <div>
              <div className="flex items-center gap-4">
                <Link
                  className="flex items-center gap-2 text-gray-50 font-semibold font-sans text-lg"
                  href={"tel:+554832098883"}
                >
                  <Image
                    src={"svg/icon-call.svg"}
                    width={19}
                    height={19}
                    alt="Ícone de telefone"
                  />
                  (48) 3209-9883
                </Link>
                <Link
                  className="flex items-center gap-2 text-gray-50 font-semibold font-sans text-lg"
                  href={"https://wa.me/+5548988643952"}
                >
                  <Image
                    src={"svg/icon-whatsapp.svg"}
                    width={21}
                    height={21}
                    alt="Ícone de WhatsApp"
                  />
                  (48) 98864-3952
                </Link>
              </div>
            </div>
          </div>
          <div className="flex justify-between gap-14">
            <div className="space-y-6">
              <ItemNav bold color="text-gray-200" link="/">
                O hotel
              </ItemNav>
              <ItemNav color="text-gray-200" link="/">
                Galeria
              </ItemNav>
              <ItemNav color="text-gray-200" link="/">
                Localização
              </ItemNav>
              <ItemNav color="text-gray-200" link="/">
                FAQ
              </ItemNav>
            </div>
            <div className="space-y-6">
              <ItemNav bold color="text-gray-200" link="/">
                Acomodações
              </ItemNav>
              <ItemNav color="text-gray-200" link="/">
                Standard Sem Vista
              </ItemNav>
              <ItemNav color="text-gray-200" link="/">
                Standard com Vista Parcial da Baía Sul
              </ItemNav>
              <ItemNav color="text-gray-200" link="/">
                Standard com Vista da Baía Sul
              </ItemNav>
              <ItemNav color="text-gray-200" link="/">
                Standard com Vista da Baía Sul
              </ItemNav>
              <ItemNav color="text-gray-200" link="/">
                Deluxe com Vista e Hidro dupla
              </ItemNav>
            </div>
            <div className="space-y-6">
              <ItemNav bold color="text-gray-200" link="/">
                Blog
              </ItemNav>
            </div>
            <div className="space-y-6">
              <ItemNav bold color="text-gray-200" link="/">
                Contato
              </ItemNav>
            </div>
          </div>
        </div>
        <div className="flex justify-between mt-32 text-gray-300 font-mono text-base">
          <span className="block">
            Hotel Daifa - Copyright © 2024 - Todos os direitos reservados
          </span>
          <span className="block">
            Feito por{" "}
            <Link className="underline" href={"/"}>
              Flid Marketing
            </Link>
          </span>
        </div>
      </Container>
    </footer>
  )
}
