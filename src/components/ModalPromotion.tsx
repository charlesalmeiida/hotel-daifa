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
        <div className="fixed inset-0 z-30 flex justify-center items-end pb-16">
          {/* Overlay */}
          <div
            className="absolute inset-0  bg-black bg-opacity-50"
            onClick={handleModal} // Fecha o modal ao clicar no overlay
          ></div>

          {/* Modal */}
          <div className="relative z-40 bg-white rounded-lg shadow-lg">
            {/* Botão Fechar */}
            <button
              onClick={handleModal}
              className="font-mono bg-blue absolute text-gray-50 rounded-[4px] py-1 px-2 -top-6 right-0 text-base"
            >
              X
            </button>

            {/* Link com Imagem */}
            <Link
              href={
                "https://wa.me//5548988643952?text=Ol%C3%A1,%20vim%20pelo%20website%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20reservas!"
              }
            >
              {/* Imagem para Desktop */}
              <Image
                src={"/img/image-modal.png"}
                width={1108}
                height={450}
                alt="Imagem da promoção"
                className="hidden lg:block rounded-lg"
              />
              {/* Imagem para Mobile */}
              <div className="w-[465px] max-w-80 lg:hidden">
                <Image
                  src={"/img/image-modal-mobile.png"}
                  width={465}
                  height={581}
                  alt="Imagem da promoção"
                  className="rounded-lg"
                />
              </div>
            </Link>
          </div>
        </div>
      )}
    </>
  )
}
