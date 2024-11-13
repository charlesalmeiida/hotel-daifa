"use client"

import { Container } from "@/components/Global/Container"
import { Header } from "@/components/Header/Header"
import { BtnRoom } from "@/app/(routes)/acomodacoes/components/BtnRoom"
import { useState } from "react"
import roomsData from "@/app/data/roomsData.json"
import { Footer } from "@/components/Footer/Footer"
import { Rooms } from "./components/Rooms"
import { motion } from "framer-motion"
import Image from "next/image"

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
  const [isModalRoomsOpen, setModalRoomsOpen] = useState(false)

  const handleClick = (index: number) => {
    setSelectedRoomIndex(index)
  }

  const handleModal = () => {
    setModalRoomsOpen(!isModalRoomsOpen)
  }

  return (
    <>
      <Header />

      <section className="pt-14 lg:pt-20">
        <Container>
          <section className="text-center space-y-4">
            <h3 className="mx-auto max-w-[436px] text-gray-900">
              Escolha a acomodação ideal para sua necessidade
            </h3>
            <p className="text-gray-700 max-w-[373px] mx-auto">
              {roomsData[selectedRoomIndex].description}
            </p>
          </section>

          <div className="text-center lg:hidden sticky top-[124px] z-10 mt-10 flex flex-col font-sans font-semibold text-base text-gray-800">
            <button
              onClick={handleModal}
              className="border flex  items-center gap-4 rounded-[4px] bg-gray-50 w-fit mx-auto py-4 px-6"
            >
              {roomsData[selectedRoomIndex].title}
              <Image
                src={"/svg/chevron-down-gray.svg"}
                width={12}
                height={8}
                alt="Seta para baixo"
              />
            </button>
            {isModalRoomsOpen && (
              <div className="flex py-6 rounded-[4px] px-4 bg-gray-50 flex-col gap-8">
                {roomsData.map((room: Room, index: number) => (
                  <button key={room.id} onClick={() => handleClick(index)}>
                    {room.title}
                  </button>
                ))}
              </div>
            )}
          </div>

          <section className="pt-20 pb-28">
            <div className="flex justify-between">
              <div className="hidden lg:flex gap-16 items-start">
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
