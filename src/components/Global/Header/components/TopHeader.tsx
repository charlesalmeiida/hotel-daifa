import Image from "next/image"
import Link from "next/link"
import { LinkLang } from "./LinkLang"
import { Container } from "../../Container"

export function TopHeader() {
  return (
    <div className="bg-blue w-full">
      <Container>
        <div className="flex-row-reverse flex lg:flex-row lg:flex justify-between lg:justify-end gap-0 lg:gap-20">
          <div className="flex gap-2 items-center">
            <LinkLang />
          </div>
          <Link
            target="_blank"
            href="https://wa.me//5548988643952?text=Olá,%20vim%20pelo%20website%20e%20gostaria%20de%20mais%20informações%20sobre%20reservas!"
            className="flex items-center gap-2"
          >
            <Image
              src={"/svg/icon-whatsapp.svg"}
              width={16}
              height={17}
              alt="Ícone do WhatsApp"
            />
            <span className="font-sans text-sm text-gray-300 font-semibold">
              (48) 98864-3952
            </span>
          </Link>
        </div>
      </Container>
    </div>
  )
}
