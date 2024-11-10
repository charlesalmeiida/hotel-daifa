import { BtnLink } from "@/components/Global/BtnLink"
import Image from "next/image"
import { GuestAndBeds } from "./GuestsAndBeds"
import { IconBenefits } from "./IconBenefits"

// Interface para a prop room
interface Room {
  id: number
  title: string
  image: string
  beds: string
  hospeds: number
  benefits: string[]
  description: string
}

interface RoomsProps {
  room: Room
}

export function Rooms({ room }: RoomsProps) {
  return (
    <div className="space-y-8">
      <div>
        <div key={room.id}>
          <Image
            className="rounded-[4px] max-h-[344px]"
            src={room.image}
            width={699}
            height={344}
            alt="Fotos dos quartos do Hotel Daifa"
          />
        </div>
        <GuestAndBeds beds={room.beds} guests={room.hospeds} />
        <div className="flex mt-10 gap-4 flex-wrap max-w-xl w-full">
          {room.benefits.map((benefit) => (
            <IconBenefits key={benefit}>{benefit}</IconBenefits>
          ))}
        </div>
      </div>
      <BtnLink link="/">RESERVAR</BtnLink>
    </div>
  )
}
