"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export function ModalPromotion() {
  const [isModalOpen, setIsModalOpen] = useState(true)

  const handleModal = () => {
    setIsModalOpen(!isModalOpen)
  }

  return (
    <>
      {isModalOpen && (
        <div className="fixed inset-0 z-30 flex justify-center items-end md:items-center pb-4 md:p-4">
          <div
            className="absolute inset-0 bg-black bg-opacity-50"
            onClick={handleModal}
          ></div>

          <div className="relative z-40 w-full max-w-5xl">
            <button
              onClick={handleModal}
              className="absolute -top-10 right-0 bg-blue text-white rounded py-2 px-3 text-lg font-bold hover:bg-opacity-90 z-50"
              aria-label="Fechar"
            >
              ✕
            </button>

            <Link
              target="_blank"
              href="https://wa.me//5548988643952?text=Olá,%20vim%20pelo%20website%20e%20gostaria%20de%20mais%20informações%20sobre%20a%20promoção%20de%20Verão!"
              className="block bg-white rounded-lg overflow-hidden shadow-2xl"
            >
              {/* Desktop Layout */}
              <div className="hidden md:grid md:grid-cols-[400px_1fr_280px] h-[420px]">
                {/* Lado Esquerdo - Texto */}
                <div className="bg-gradient-to-br from-[#1e3a8a] to-[#3b82f6] text-white p-8 flex flex-col justify-between">
                  <div className="flex-1 flex flex-col justify-center space-y-6">
                    <h2 className="text-4xl font-bold leading-tight">
                      PROMOÇÃO<br />TEMPORADA 2026
                    </h2>
                    <p className="text-xl font-semibold leading-relaxed">
                      Antecipe sua reserva com<br />7% de desconto*
                    </p>
                    <p className="text-sm opacity-90 leading-relaxed">
                      Garanta seu verão com valores especiais<br />por tempo limitado!
                    </p>

                    
                  <span className="font-mono absolute bottom-4 text-sm left-36">*Consulte as condições da promoção</span>
                  </div>
                  <div>
                    <Image
                      src="/svg/logo-white.svg"
                      alt="Hotel Daifa"
                      width={80}
                      height={55}
                    />
                  </div>
                </div>

                {/* Centro - Imagem Principal */}
                <div className="relative">
                  <Image
                    src="/img/baia-sul-noblur.png"
                    alt="Praia de Florianópolis"
                    fill
                    className="object-cover"
                    sizes="50vw"
                    priority
                  />
                </div>

                {/* Lado Direito - Grid de Imagens */}
                <div className="grid grid-rows-2">
                  <div className="relative">
                    <Image
                      src="/img/image-piscina.png"
                      alt="Piscina do Hotel Daifa"
                      fill
                      className="object-cover"
                      sizes="25vw"
                    />
                  </div>
                  <div className="relative">
                    <Image
                      src="/img/gallery/image-gallery-03.png"
                      alt="Quarto do Hotel Daifa"
                      fill
                      className="object-cover"
                      sizes="25vw"
                    />
                  </div>
                </div>
              </div>

              {/* Mobile Layout */}
              <div className="md:hidden">
                {/* Texto */}
                <div className="bg-gradient-to-br from-[#1e3a8a] to-[#3b82f6] text-white p-6 text-center">
                  <h2 className="text-2xl font-bold mb-3 leading-tight">
                    PROMOÇÃO<br />TEMPORADA 2026
                  </h2>
                  <p className="text-base font-semibold mb-2">
                    Antecipe sua reserva com 7% de desconto*
                  </p>
                  <p className="text-xs opacity-90 mb-4">
                    Garanta seu verão com valores especiais por tempo limitado!
                  </p>

                  <span className="font-mono text-xs mb-8">*Consulte as condições da promoção</span>


                  <Image
                    src="/svg/logo-white.svg"
                    alt="Hotel Daifa"
                    width={90}
                    height={45}
                    className="mx-auto"
                  />
                </div>

                {/* Imagem Principal */}
                <div className="relative h-40">
                  <Image
                    src="/img/baia-sul-noblur.png"
                    alt="Praia de Florianópolis"
                    fill
                    className="object-cover"
                    sizes="100vw"
                    priority
                  />
                </div>


                {/* Grid de Imagens */}
                <div className="grid grid-cols-2">
                  <div className="relative h-28">
                    <Image
                      src="/img/image-piscina.png"
                      alt="Piscina do Hotel Daifa"
                      fill
                      className="object-cover"
                      sizes="50vw"
                    />
                  </div>
                  <div className="relative h-28">
                    <Image
                      src="/img/gallery/image-gallery-03.png"
                      alt="Quarto do Hotel Daifa"
                      fill
                      className="object-cover"
                      sizes="50vw"
                    />
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      )}
    </>
  )
}
