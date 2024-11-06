import Image from "next/image"
import { Button } from "../Global/Button"

interface CardPromotionProps {
  image: string
  title: string
  description: string
  packageProp: string
  date: string
}

export function CardPromotion({
  image,
  title,
  description,
  packageProp,
  date,
}: CardPromotionProps) {
  return (
    <div className="bg-gray-50 space-y-4 w-fit">
      <Image
        src={image}
        width={384}
        height={242}
        alt="Foto de promoção da seção promocional"
      />
      <div className="space-y-4 px-4 pb-4">
        <h6 className="text-gray-900">{title}</h6>
        <p className="max-w-[352px] opacity-80">{description}</p>
        <div className="space-y-2">
          <h6 className="text-gray-900 font-medium">{packageProp}</h6>
          <span className="text-blue text-xl font-semibold font-sans">
            {date}
          </span>
        </div>
        <Button
          link="https://reservas.desbravador.com.br/hotel-app/hotel-daifa"
          color="outlineGray"
          size="lg"
        >
          RESERVAR
        </Button>
      </div>
    </div>
  )
}
