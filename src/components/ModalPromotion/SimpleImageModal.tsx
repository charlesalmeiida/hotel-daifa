"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface SimpleImageModalProps {
  imageSrc: string;
  imageAlt: string;
  link: string;
}

export function SimpleImageModal({
  imageSrc,
  imageAlt,
  link,
}: SimpleImageModalProps) {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const handleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      {isModalOpen && (
        <div className="fixed inset-0 z-[9999] flex justify-center items-center p-4">
          <div
            className="absolute inset-0 bg-black bg-opacity-50"
            onClick={handleModal}
          ></div>

          <div className="relative z-[10000] w-full max-w-[480px]">
            <button
              onClick={handleModal}
              className="absolute -top-10 right-0 bg-blue text-white rounded py-2 px-3 text-lg font-bold hover:bg-opacity-90 z-[10001]"
              aria-label="Fechar"
            >
              ✕
            </button>

            <Link
              target="_blank"
              href={link}
              className="block bg-transparent rounded-lg overflow-hidden z-[10000]"
            >
              <div className="relative">
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  width={1000}
                  height={1500}
                  className="w-full h-auto object-contain"
                  priority
                />
              </div>
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
