"use client"

import { Container } from "@/components/Global/Container"
import { Header } from "@/components/Header/Header"
import { BtnRoom } from "@/app/(routes)/acomodacoes/components/BtnRoom"
import { useState } from "react"
import roomsData from "@/app/data/roomsData.json"
import { Footer } from "@/components/Footer/Footer"
import { Rooms } from "./components/Rooms"
import { motion } from "framer-motion"

// Definindo a interface Room
interface Room {
  id: number
  title: string
  image: string
  beds: string
  hospeds: number
  benefits: string[]
  description: string
}

export default function RoomsPage() {
  const [selectedRoomIndex, setSelectedRoomIndex] = useState<number>(0)

  const handleClick = (index: number) => {
    setSelectedRoomIndex(index)
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
              {roomsData[selectedRoomIndex].description}
            </p>
          </section>

          <section className="pt-20 pb-28">
            <div className="flex justify-between">
              <div className="flex gap-16 items-start">
                <div className="flex flex-col items-start gap-10">
                  {roomsData.map((room: Room, index: number) => (
                    <BtnRoom
                      key={room.id}
                      handleClick={() => handleClick(index)}
                      isActive={selectedRoomIndex === index}
                    >
                      {room.title}
                    </BtnRoom>
                  ))}
                </div>
                <div className="w-px h-[456px] bg-gray-200"></div>
              </div>
              <motion.div>
                <Rooms room={roomsData[selectedRoomIndex] as Room} />
              </motion.div>
            </div>
          </section>
        </Container>
      </section>

      <Footer />
    </>
  )
}
