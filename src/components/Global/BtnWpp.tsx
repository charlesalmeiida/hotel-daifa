import Image from "next/image"
import Link from "next/link"
export function BtnWpp() {
  return (
    <div className="fixed bottom-5 right-5 md:bottom-10 md:right-10">
      <Link href={"https://wa.me//5548988643952?text=Olá,%20vim%20pelo%20WhatsApp%20e%20gostaria%20de%20mais%20informações%20sobre%20reservas"}>
        <Image
          src={"/svg/logo-whatsapp.svg"}
          width={72}
          height={60}
          alt="Logo do WhatsApp"
        />
      </Link>
    </div>
  )
}
