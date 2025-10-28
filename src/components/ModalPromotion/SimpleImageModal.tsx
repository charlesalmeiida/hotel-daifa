"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

interface ImageItem {
  imageSrc: string;
  imageAlt: string;
  link: string;
}

interface SimpleImageModalProps {
  images: ImageItem[] | { imageSrc: string; imageAlt: string; link: string };
  autoPlay?: boolean;
  autoPlayInterval?: number;
}

export function SimpleImageModal({
  images,
  autoPlay = false,
  autoPlayInterval = 5000,
}: SimpleImageModalProps) {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Normalizar as imagens para array
  const imagesArray: ImageItem[] = Array.isArray(images)
    ? images
    : [images as ImageItem];

  const handleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handlePrevious = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? imagesArray.length - 1 : prev - 1));
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === imagesArray.length - 1 ? 0 : prev + 1));
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Auto-play do carrossel
  useEffect(() => {
    if (!autoPlay || imagesArray.length <= 1 || !isModalOpen) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === imagesArray.length - 1 ? 0 : prev + 1,
      );
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [autoPlay, autoPlayInterval, imagesArray.length, isModalOpen]);

  if (!isModalOpen) return null;

  const currentImage = imagesArray[currentIndex];
  const hasMultipleImages = imagesArray.length > 1;

  return (
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

        <div className="relative bg-transparent rounded-lg overflow-hidden z-[10000]">
          {/* Container do carrossel */}
          <div className="relative">
            <Link target="_blank" href={currentImage.link} className="block">
              <div className="relative w-full">
                <Image
                  src={currentImage.imageSrc}
                  alt={currentImage.imageAlt}
                  width={1000}
                  height={1500}
                  className="w-full h-auto object-contain"
                  priority={currentIndex === 0}
                />
              </div>
            </Link>

            {/* Botões de navegação */}
            {hasMultipleImages && (
              <>
                <button
                  onClick={handlePrevious}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 transition-all z-10"
                  aria-label="Imagem anterior"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15 18L9 12L15 6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>

                <button
                  onClick={handleNext}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 transition-all z-10"
                  aria-label="Próxima imagem"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 18L15 12L9 6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </>
            )}

            {/* Indicadores (dots) */}
            {hasMultipleImages && (
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                {imagesArray.map((_, index) => (
                  <button
                    key={index}
                    onClick={(e) => {
                      e.stopPropagation();
                      goToSlide(index);
                    }}
                    className={`w-2 h-2 rounded-full transition-all ${
                      currentIndex === index
                        ? "bg-white w-6"
                        : "bg-white/50 hover:bg-white/75"
                    }`}
                    aria-label={`Ir para slide ${index + 1}`}
                  />
                ))}
              </div>
            )}

            {/* Contador de imagens */}
            {hasMultipleImages && (
              <div className="absolute top-4 left-4 bg-black/50 text-white text-xs px-2 py-1 rounded z-10">
                {currentIndex + 1} / {imagesArray.length}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
