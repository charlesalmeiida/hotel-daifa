import Image from "next/image"
import Link from "next/link"
export function BtnWpp() {
  return (
    <div className="fixed bottom-10 right-10">
      <Link
        href={
          "https://wa.me//5548988643952?text=Olá,%20gostaria%20%20de%20informações%20sobre%20reservas"
        }
      >
        <Image
          src={"svg/logo-whatsapp.svg"}
          width={72}
          height={60}
          alt="Logo do WhatsApp"
        />
      </Link>
    </div>
  )
}
