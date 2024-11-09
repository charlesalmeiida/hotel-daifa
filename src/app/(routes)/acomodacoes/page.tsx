"use client"

import { Container } from "@/components/Global/Container"
import { Header } from "@/components/Header/Header"
import { BtnRoom } from "@/app/(routes)/acomodacoes/components/BtnRoom"
import { useState } from "react"
import roomsData from "@/app/data/roomsData.json"
import { Footer } from "@/components/Footer/Footer"
import Image from "next/image"

export default function Rooms() {
  const [isActive, setIsActive] = useState(false)

  const handleClick = () => {
    setIsActive(!isActive)
  }

  return (
    <>
      <Header />

      <section className="pt-28">
        <Container>
          <section className="text-center space-y-4">
            <h3 className="mx-auto text-gray-900">
              Escolha a acomodação ideal para sua necessidade
            </h3>
            <p className="text-gray-700 max-w-[373px] mx-auto">
              {roomsData[0].description}
            </p>
          </section>

          <section className="pt-20 pb-28">
            <div className="flex justify-between">
              <div className="flex gap-14 items-start">
                <div className="flex flex-col items-start gap-10">
                  {roomsData.map((room, index) => (
                    <BtnRoom
                      key={room.title}
                      handleClick={handleClick}
                      isActive={isActive && index === 0 ? true : false}
                    >
                      {room.title}
                    </BtnRoom>
                  ))}
                </div>
                <div className="w-px h-[456px] bg-gray-200"></div>
              </div>
              <div>
                <Image
                  className="rounded-[4px]"
                  src={"/img/rooms/room01.png"}
                  width={695}
                  height={344}
                  alt="Fotos dos quartos do Hotel Daifa"
                />
              </div>
            </div>
          </section>
        </Container>
      </section>

      <Footer />
    </>
  )
}
