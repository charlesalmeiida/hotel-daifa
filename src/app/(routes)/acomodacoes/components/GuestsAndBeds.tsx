import Image from "next/image"

interface GuestsAndBedsProps {
  guests: number
  beds: string
}

export function GuestAndBeds({ beds, guests }: GuestsAndBedsProps) {
  return (
    <div className="flex mt-6 gap-3 items-center">
      <div className="flex gap-3 items-center">
        <Image
          src={"svg/icon-people-gray.svg"}
          width={20}
          height={18}
          alt="Ícone hóspedes"
        />
        <span className="font-mono text-base text-gray-800 opacity-80">
          Até {guests} hóspedes
        </span>
      </div>
      <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
      <div className="flex gap-3 items-center">
        <Image
          src={"svg/icon-bed.svg"}
          width={20}
          height={16}
          alt="Ícone camas"
        />
        <span className="font-mono text-base max-w-md text-gray-800 opacity-80">
          {beds}
        </span>
      </div>
    </div>
  )
}
