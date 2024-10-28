import Image from "next/image"
import Link from "next/link"

interface ContactsProps {
  color?: "primary" | "secondary"
}

export function Contacts({ color = "primary" }: ContactsProps) {
  return (
    <div className="flex items-center gap-4">
      <Link
        className={`flex items-center gap-2 ${
          color === "primary" ? "text-gray-50" : "text-gray-800"
        } font-semibold font-sans text-lg`}
        href={"tel:+554832098883"}
      >
        <Image
          src={`${
            color === "primary"
              ? "/svg/icon-call.svg"
              : "/svg/icon-call-gray.svg"
          }`}
          width={19}
          height={19}
          alt="Ícone de telefone"
        />
        (48) 3209-9883
      </Link>
      <Link
        className={`flex items-center gap-2 ${
          color === "primary" ? "text-gray-50" : "text-gray-800"
        } font-semibold font-sans text-lg`}
        href={"https://wa.me/+5548988643952"}
      >
        <Image
          src={`${
            color === "primary"
              ? "/svg/icon-whatsapp.svg"
              : "/svg/icon-whatsapp-gray.svg"
          }`}
          width={21}
          height={21}
          alt="Ícone de WhatsApp"
        />
        (48) 98864-3952
      </Link>
    </div>
  )
}
