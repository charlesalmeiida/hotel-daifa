"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

const LP_VENDA = "/img/lp-venda";
const GALERIA = `${LP_VENDA}/galeria`;

const galleryImages = [
  // Imagens que já estavam na galeria
  { src: `${LP_VENDA}/2025-09-10.jpg`, alt: "Vista panorâmica", category: "Fachada" },
  { src: `${LP_VENDA}/2025-09-11.jpg`, alt: "Vista aérea", category: "Vista Aérea" },
  { src: `${LP_VENDA}/2025-09-16.jpg`, alt: "Fachada", category: "Fachada" },
  { src: `${LP_VENDA}/2025-10-03.jpg`, alt: "Vista noturna", category: "Noturna" },
  { src: `${LP_VENDA}/2025-10-15.jpg`, alt: "Quarto", category: "Acomodações" },
  { src: `${LP_VENDA}/2025-10-15 (1).jpg`, alt: "Hidromassagem", category: "Suítes" },
  { src: `${LP_VENDA}/2025-10-15 (2).jpg`, alt: "Varanda", category: "Vista" },
  { src: `${LP_VENDA}/2025-11-22.jpg`, alt: "Quarto", category: "Acomodações" },
  { src: `${LP_VENDA}/2025-11-22 (1).jpg`, alt: "Cobertura", category: "Vista" },
  { src: `${LP_VENDA}/2025-11-22 (2).jpg`, alt: "Marina", category: "Noturna" },
  { src: `${LP_VENDA}/2025-12-26.jpg`, alt: "Marina", category: "Vista Aérea" },
  { src: `${LP_VENDA}/2026-01-09.jpg`, alt: "Entrada", category: "Fachada" },
  { src: `${LP_VENDA}/2026-01-09~1.jpg`, alt: "Varanda", category: "Acomodações" },
  { src: `${LP_VENDA}/20220705_171719.jpg`, alt: "Piscina", category: "Lazer" },
  { src: `${LP_VENDA}/hotel_daifa_16.jpg`, alt: "Recepção", category: "Áreas Comuns" },
  { src: `${LP_VENDA}/unnamed.jpg`, alt: "Fachada", category: "Fachada" },
  // Novas imagens da pasta galeria
  { src: `${GALERIA}/2026-01-09 (1).jpg.jpeg`, alt: "Hotel Daifa", category: "Vista" },
  { src: `${GALERIA}/2026-01-09 (2).jpg.jpeg`, alt: "Hotel Daifa", category: "Vista" },
  { src: `${GALERIA}/cozinha.jpeg`, alt: "Cozinha", category: "Áreas Comuns" },
  { src: `${GALERIA}/sala_de_cozinha.jpeg`, alt: "Sala de cozinha", category: "Áreas Comuns" },
  { src: `${GALERIA}/sala.jpeg`, alt: "Sala", category: "Áreas Comuns" },
  { src: `${GALERIA}/IMG_0333.png`, alt: "Hotel Daifa", category: "Acomodações" },
  { src: `${GALERIA}/IMG_0334.png`, alt: "Hotel Daifa", category: "Acomodações" },
  { src: `${GALERIA}/IMG_0336.png`, alt: "Hotel Daifa", category: "Acomodações" },
  { src: `${GALERIA}/IMG_0337.png`, alt: "Hotel Daifa", category: "Acomodações" },
  { src: `${GALERIA}/IMG_0338.png`, alt: "Hotel Daifa", category: "Acomodações" },
  { src: `${GALERIA}/IMG_0342.png`, alt: "Hotel Daifa", category: "Acomodações" },
  { src: `${GALERIA}/IMG_0344.png`, alt: "Hotel Daifa", category: "Acomodações" },
  { src: `${GALERIA}/IMG_0346.png`, alt: "Hotel Daifa", category: "Acomodações" },
  { src: `${GALERIA}/IMG_0350.png`, alt: "Hotel Daifa", category: "Acomodações" },
  { src: `${GALERIA}/IMG_0353.png`, alt: "Hotel Daifa", category: "Acomodações" },
];

const categories = ["Todas", ...Array.from(new Set(galleryImages.map((i) => i.category)))];

export function LpGallery() {
  const t = useTranslations("LpVenda.gallery");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState("Todas");
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const sectionRef = useRef<HTMLDivElement>(null);

  const filteredImages =
    activeCategory === "Todas"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute("data-index") || "0", 10);
            setVisibleItems((prev) => new Set([...prev, index]));
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );
    const items = sectionRef.current?.querySelectorAll(".gallery-item");
    items?.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, [activeCategory]);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
    if (typeof document !== "undefined") document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    if (typeof document !== "undefined") document.body.style.overflow = "auto";
  };

  const goToPrev = useCallback(() => {
    if (selectedImage !== null)
      setSelectedImage(selectedImage === 0 ? filteredImages.length - 1 : selectedImage - 1);
  }, [selectedImage, filteredImages.length]);

  const goToNext = useCallback(() => {
    if (selectedImage !== null)
      setSelectedImage(selectedImage === filteredImages.length - 1 ? 0 : selectedImage + 1);
  }, [selectedImage, filteredImages.length]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (selectedImage === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") goToPrev();
      if (e.key === "ArrowRight") goToNext();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [selectedImage, goToPrev, goToNext]);

  const allLabel = t("all");

  return (
    <section id="galeria" ref={sectionRef} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block text-blueLP font-semibold text-sm uppercase tracking-wider mb-4">
            {t("tag")}
          </span>
          <h2 className="text-4xl md:text-5xl text-gray-900 mb-6" style={{ fontWeight: 900 }}>
            {t("title")} <span className="text-blueLP">{t("titleHighlight")}</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t("intro")}</p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category ? "bg-blueLP text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {category === "Todas" ? allLabel : category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredImages.map((image, index) => {
            const isVisible = visibleItems.has(index);
            return (
              <button
                key={`${image.src}-${index}`}
                type="button"
                data-index={index}
                className={`gallery-item group relative aspect-square overflow-hidden rounded-xl cursor-pointer text-left ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${index * 50}ms` }}
                onClick={() => openLightbox(index)}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={400}
                  height={400}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  unoptimized
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                  <svg className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-sm font-medium">{image.category}</p>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {selectedImage !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Galeria"
        >
          <button type="button" onClick={closeLightbox} className="absolute top-4 right-4 z-10 p-2 bg-white/10 hover:bg-white/20 rounded-full" aria-label="Fechar">
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <button type="button" onClick={(e) => { e.stopPropagation(); goToPrev(); }} className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 rounded-full" aria-label="Anterior">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button type="button" onClick={(e) => { e.stopPropagation(); goToNext(); }} className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 rounded-full" aria-label="Próxima">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          <div className="max-w-5xl max-h-[80vh] px-16" onClick={(e) => e.stopPropagation()}>
            <Image src={filteredImages[selectedImage].src} alt={filteredImages[selectedImage].alt} width={1200} height={800} className="max-w-full max-h-[80vh] object-contain rounded-lg" unoptimized />
            <p className="text-white text-center mt-4 text-lg">{filteredImages[selectedImage].alt}</p>
          </div>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/70">
            {selectedImage + 1} / {filteredImages.length}
          </div>
        </div>
      )}
    </section>
  );
}
