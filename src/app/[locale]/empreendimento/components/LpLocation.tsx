"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

const TOURIST_POINTS: Array<{
  text: string;
  time: string;
  image: string;
  mapsUrl?: string;
}> = [
  {
    text: "A 3 minutos da Catedral de Florianópolis",
    time: "3 min",
    image: "/img/lp-venda/tourist_points/catedral.jpg",
    mapsUrl: "https://www.google.com/maps/search/Catedral+Metropolitana+Florianópolis",
  },
  {
    text: "A 3 minutos do museu",
    time: "3 min",
    image: "/img/lp-venda/tourist_points/museu.jpg",
    mapsUrl: "https://www.google.com/maps/search/Museus+Florianópolis",
  },
  {
    text: "A 5 minutos do Centro Sul",
    time: "5 min",
    image: "/img/lp-venda/tourist_points/centro-sul.jpg",
    mapsUrl: "https://www.google.com/maps/search/Centro+Sul+Florianópolis",
  },
  {
    text: "A 4 minutos do Mercado Público",
    time: "4 min",
    image: "/img/lp-venda/tourist_points/mercado-publico.jpg",
    mapsUrl: "https://www.google.com/maps/search/Mercado+Público+Florianópolis",
  },
  {
    text: "A 15 minutos do aeroporto",
    time: "15 min",
    image: "/img/lp-venda/tourist_points/aeroporto.jpg",
    mapsUrl: "https://www.google.com/maps/search/Aeroporto+Florianópolis",
  },
  {
    text: "A 20 minutos de todas as praias de Florianópolis",
    time: "20 min",
    image: "/img/lp-venda/tourist_points/praias.jpg",
    mapsUrl: "https://www.google.com/maps/search/Praias+Florianópolis",
  },
];

const CAROUSEL_INTERVAL_MS = 4500;

export function LpLocation() {
  const t = useTranslations("LpVenda.location");
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [carouselIndex, setCarouselIndex] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const id = setInterval(() => {
      setCarouselIndex((i) => (i + 1) % TOURIST_POINTS.length);
    }, CAROUSEL_INTERVAL_MS);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      id="localizacao"
      ref={sectionRef}
      className="py-24 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block text-blueLP font-semibold text-sm uppercase tracking-wider mb-4">
            {t("tag")}
          </span>
          <h2 className="text-4xl md:text-5xl text-gray-900 mb-6" style={{ fontWeight: 900 }}>
            {t("title")} <span className="text-blueLP">{t("titleHighlight")}</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t("intro")}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          {/* Coluna esquerda: bloco imagem + gradiente + pin + card endereço (altura completa) */}
          <div
            className={`relative transition-all duration-1000 h-full min-h-[400px] ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            }`}
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl h-full min-h-[400px]">
              <Image
                src="/img/lp-venda/2025-11-22 (1).jpg"
                alt={t("hotelName")}
                width={800}
                height={500}
                className="w-full h-full min-h-full object-cover"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-16 h-16 bg-blueLP rounded-full flex items-center justify-center shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z" />
                  </svg>
                </div>
              </div>
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-2xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-blueLP" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.196-5.196a2.25 2.25 0 013.182-3.182l7.07 7.07-7.07-7.07a2.25 2.25 0 013.182 3.182L9 20z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">{t("hotelName")}</h4>
                    <p className="text-gray-600">{t("address")}</p>
                    <a
                      href="https://maps.google.com/?q=Hotel+Daifa+Florianopolis"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-blueLP font-medium mt-2 hover:underline"
                    >
                      {t("viewMap")}
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-amber-400/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-400/20 rounded-full blur-2xl" />
          </div>

          {/* Coluna direita: título + texto (no lugar) + Carrossel */}
          <div
            className={`relative transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            }`}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">{t("whyTitle")}</h3>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">{t("whyText")}</p>
            <h4 className="font-semibold text-gray-900 mb-4">{t("nearby")}</h4>
            <div className="relative rounded-3xl p-8 md:p-10 min-h-[320px] overflow-hidden bg-gray-900">
              {/* Imagem de fundo do slide ativo */}
              {TOURIST_POINTS.map((point, index) => (
                <div
                  key={`bg-${point.text}`}
                  className={`absolute inset-0 bg-cover bg-center transition-opacity duration-700 ${
                    index === carouselIndex ? "opacity-100 z-0" : "opacity-0"
                  }`}
                  style={{ backgroundImage: `url(${point.image})` }}
                />
              ))}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-black/40 rounded-3xl z-[1]" />
              <div className="relative z-10 flex items-center min-h-[260px] px-2">
                {TOURIST_POINTS.map((point, index) => (
                  <div
                    key={point.text}
                    className={`absolute inset-0 flex items-center gap-6 p-2 transition-opacity duration-500 ${
                      index === carouselIndex ? "opacity-100 z-10" : "opacity-0 pointer-events-none"
                    }`}
                  >
                    <div className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 bg-white/20 backdrop-blur-sm">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div className="drop-shadow-lg flex flex-col gap-3">
                      <span className="inline-block text-amber-300 font-semibold text-sm mb-1">{point.time}</span>
                      <p className="text-xl md:text-2xl font-bold text-white leading-tight">{point.text}</p>
                      {point.mapsUrl && (
                        <a
                          href={point.mapsUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 self-start mt-1 px-4 py-2 rounded-full bg-white/20 hover:bg-white/30 text-white text-sm font-medium transition-colors"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          </svg>
                          Ver no Google Maps
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="relative z-10 flex items-center justify-between mt-6 pt-6 border-t border-white/20">
                <div className="flex gap-2">
                  {TOURIST_POINTS.map((_, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={() => setCarouselIndex(index)}
                      className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                        index === carouselIndex ? "bg-white scale-125" : "bg-white/40 hover:bg-white/60"
                      }`}
                      aria-label={`Ir para slide ${index + 1}`}
                    />
                  ))}
                </div>
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => setCarouselIndex((i) => (i - 1 + TOURIST_POINTS.length) % TOURIST_POINTS.length)}
                    className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                    aria-label="Anterior"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button
                    type="button"
                    onClick={() => setCarouselIndex((i) => (i + 1) % TOURIST_POINTS.length)}
                    className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                    aria-label="Próximo"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
