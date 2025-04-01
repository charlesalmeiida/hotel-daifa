import Image from "next/image"
import { Button } from "../../../../components/Global/Button"

interface CardPromotionProps {
  image: string
  title: string
  description: string
  packageProp: string
  date: string
  promotion: string
}

export function CardPromotion({
  image,
  title,
  description,
  packageProp,
  date,
  promotion,
}: CardPromotionProps) {
  return (
    <div className="bg-gray-50 flex flex-col justify-between w-full max-w-[384px] min-h-[550px] relative">
      <div className="space-y-4">
        <div className="relative h-[242px] overflow-hidden">
          <Image
            src={image}
            width={384}
            height={242}
            alt="Foto de promoção da seção promocional"
            className="object-cover w-full h-full"
          />
        </div>

        <div className="space-y-4 px-4">
          <h6 className="text-gray-900">{title}</h6>
          <p className="opacity-80">{description}</p>
          <div className="space-y-2">
            <h6 className="text-gray-900 font-medium">{packageProp}</h6>
            <span className="text-blue text-xl font-semibold font-sans">
              {date}
            </span>
          </div>
        </div>
      </div>

      <div className="px-4 pb-4 mt-auto">
        <Button
          color="outlineGray"
          size="lg"
          link={`https://wa.me//5548988643952?text=Olá,%20vim%20pelo%20website%20e%20gostaria%20de%20mais%20informações%20sobre%20a%20promoção%20de%20"${promotion}"!`}
        >
          RESERVAR
        </Button>
      </div>
    </div>
  )
}
