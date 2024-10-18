import Image from "next/image"

interface ItemAmenityProps {
  icon: string
  title: string
  description: string
}

export function ItemAmenity({ icon, title, description }: ItemAmenityProps) {
  return (
    <div>
      <div className="space-y-6 rounded-[4px] border border-gray-200 py-8 px-6 max-w-[312px] text-center">
        <Image
          className="mx-auto"
          src={icon}
          width={30}
          height={24}
          alt="Ícone de carro representando o estacionamento"
        />
        <h4>{title}</h4>
        <p className="opacity-80">{description}</p>
      </div>
    </div>
  )
}
