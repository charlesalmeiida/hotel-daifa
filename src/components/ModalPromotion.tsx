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
        <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-30">
          <button
            onClick={handleModal}
            className="font-mono bg-blue absolute text-gray-50 rounded-[4px] py-1 px-2 -top-6 right-2 text-base"
          >
            X
          </button>
          <Link
            href={
              "https://wa.me//5548988643952?text=Ol%C3%A1,%20vim%20pelo%20website%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20reservas!"
            }
          >
            <Image
              src={"/img/image-modal.png"}
              width={864}
              height={386}
              alt="Imagem da promoção"
              className="hidden lg:block"
            />
            <div className="w-[465px] max-w-80 lg:hidden">
              <Image
                src={"/img/image-modal-mobile.png"}
                width={465}
                height={581}
                alt="Imagem da promoção"
              />
            </div>
          </Link>
        </div>
      )}
    </>
  )
}
