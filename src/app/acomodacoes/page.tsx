"use client"

import { Container } from "@/components/Global/Container"
import { Header } from "@/components/Global/Header/Header"
import { BtnRoom } from "@/components/Rooms/BtnRoom"
import { useState } from "react"
import roomsData from "@/app/data/roomsData.json"

export default function Rooms() {
  const [isActive, setIsActive] = useState(false)

  const handleClick = () => {
    setIsActive(!isActive)
    console.log()
  }

  return (
    <>
      <Header />

      <section className="pt-52">
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
            <div className="flex flex-col items-start gap-10">
              `
              {roomsData.map((room) => (
                <BtnRoom
                  key={room.title}
                  handleClick={handleClick}
                  isActive={isActive ? true : false}
                >
                  {room.title}
                </BtnRoom>
              ))}
            </div>
          </section>
        </Container>
      </section>
    </>
  )
}