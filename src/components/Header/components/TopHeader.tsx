import Image from "next/image"
import Link from "next/link"
import { Container } from "../../Global/Container"
import { LinkLang } from "./LinkLang"
import { useLocale } from "next-intl"

export function TopHeader() {
  const locale = useLocale()

  return (
    <div className="bg-blue w-full">
      <Container>
        <div className="flex-row-reverse flex lg:flex-row lg:flex justify-between lg:justify-end gap-0 lg:gap-20">
          <div className="flex gap-2 items-center">
            <div className="flex items-center gap-2">
              <LinkLang active={locale === "pt"} lang="pt">
                PT
              </LinkLang>
              <span className="text-gray-50 py-3">|</span>
              <LinkLang active={locale === "en"} lang="en">
                EN
              </LinkLang>
              <span className="text-gray-50 py-3">|</span>
              <LinkLang active={locale === "es"} lang="es">
                ES
              </LinkLang>
            </div>
          </div>
          <div className="flex items-center gap-4 md:gap-6">
            <Link
              target="_blank"
              href="https://wa.me//5548988643952?text=Olá,%20vim%20pelo%20website%20e%20gostaria%20de%20mais%20informações%20sobre%20reservas!"
              className="flex items-center gap-2"
            >
              <Image
                src={"/svg/icon-whatsapp.svg"}
                width={20}
                height={20}
                alt="Ícone do WhatsApp"
                className="flex-shrink-0"
              />
              <span className="font-sans hidden lg:block text-sm text-gray-300 font-semibold">
                (48) 98864-3952
              </span>
            </Link>
            <Link
              target="_blank"
              href="https://www.instagram.com/hoteldaifa/"
              className="flex items-center gap-2"
            >
              <Image
                src={"/svg/icon-instagram.svg"}
                width={18}
                height={18}
                alt="Ícone do Instagram"
              />
            </Link>
            
          </div>
        </div>
      </Container>
    </div>
  )
}
