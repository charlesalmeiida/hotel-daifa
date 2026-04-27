"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "../../../../components/Global/Button"

const DESCRIPTION_LIMIT = 150

interface CardPromotionProps {
  image: string
  title: string
  description: string
  packageProp: string
  date: string
  promotion: string
  link?: string
}

export function CardPromotion({
  image,
  title,
  description,
  packageProp,
  date,
  promotion,
  link,
}: CardPromotionProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const hasLongDescription = description.length > DESCRIPTION_LIMIT
  const displayedDescription =
    hasLongDescription && !isExpanded
      ? `${description.slice(0, DESCRIPTION_LIMIT).trim()}...`
      : description

  return (
    <div className="bg-gray-50 flex h-[650px] w-full max-w-[384px] flex-col relative">
      <div className="flex min-h-0 flex-1 flex-col">
        <div className="relative h-[242px] shrink-0 overflow-hidden">
          <Image
            src={image}
            width={384}
            height={242}
            alt="Foto de promoção da seção promocional"
            className="object-cover w-full h-full"
          />
        </div>

        <div className="flex min-h-0 flex-1 flex-col gap-4 px-4 py-4">
          <h6 className="text-gray-900">{title}</h6>

          <div className="min-h-0 flex-1 overflow-y-auto pr-1">
            <p className="whitespace-pre-line opacity-80">
              {displayedDescription}
            </p>
            {hasLongDescription && (
              <button
                type="button"
                onClick={() => setIsExpanded((current) => !current)}
                className="mt-2 text-sm font-medium text-blue hover:underline"
              >
                {isExpanded ? "Ver menos" : "Ver mais"}
              </button>
            )}
          </div>

          <div className="space-y-2">
            <h6 className="text-gray-900 font-medium">{packageProp}</h6>
            <span className="text-blue text-xl font-semibold font-sans">
              {date}
            </span>
          </div>
        </div>
      </div>

      <div className="mt-auto px-4 pb-4 pt-4">
        <Button
          color="outlineGray"
          size="lg"
          link={
            link ||
            `https://wa.me//5548988643952?text=Olá,%20vim%20pelo%20website%20e%20gostaria%20de%20mais%20informações%20sobre%20a%20promoção%20de%20"${promotion}"!`
          }
        >
          RESERVAR
        </Button>
      </div>
    </div>
  )
}
