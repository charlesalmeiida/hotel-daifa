"use client";

import { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";

const WHATSAPP_VENDA = "https://wa.me/34629675430?text=Olá,%20tenho%20interesse%20na%20venda%20do%20Hotel%20Daifa%20em%20Florianópolis.";
const HERO_IMAGE = "/img/lp-venda/2025-09-10.jpg";
const HERO_FALLBACK = "/img/baia-sul.png";

export function LpHero() {
  const t = useTranslations("LpVenda.hero");
  const heroRef = useRef<HTMLDivElement>(null);
  const [imgSrc, setImgSrc] = useState(HERO_IMAGE);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      const img = hero.querySelector(".hero-image") as HTMLElement;
      if (img) img.style.transform = `scale(1.1) translate(${-x}px, ${-y}px)`;
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      id="inicio"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={imgSrc}
          alt="Hotel Daifa - Vista panorâmica"
          className="hero-image w-full h-full object-cover transition-transform duration-700 ease-out scale-110"
          onError={() => setImgSrc(HERO_FALLBACK)}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/40 via-blue-900/20 to-blue-950/60" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8 animate-fade-in">
            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
            <span className="text-white/90 text-sm font-medium">{t("badge")}</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl text-white mb-6 tracking-tight" style={{ fontWeight: 900 }}>
            {t("title")} <span className="text-amber-400">{t("titleHighlight")}</span>
          </h1>

          <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-2xl mx-auto">
            {t("subtitle")}
          </p>

          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 mb-10 inline-block">
            <p className="text-white/70 text-sm uppercase tracking-wider mb-2">{t("priceLabel")}</p>
            <p className="text-4xl md:text-6xl font-bold text-white">
              R$ <span className="text-amber-400">{t("priceValue")}</span> {t("priceSuffix")}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto mb-10">
            <div className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-4">
              <p className="text-2xl font-bold text-white">{t("stat1")}</p>
              <p className="text-white/70 text-sm">{t("stat1Label")}</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-4">
              <p className="text-2xl font-bold text-white">{t("stat2")}</p>
              <p className="text-white/70 text-sm">{t("stat2Label")}</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-4">
              <p className="text-2xl font-bold text-white">{t("stat3")}</p>
              <p className="text-white/70 text-sm">{t("stat3Label")}</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-xl p-4">
              <p className="text-2xl font-bold text-white">{t("stat4")}</p>
              <p className="text-white/70 text-sm">{t("stat4Label")}</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={WHATSAPP_VENDA}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg shadow-emerald-500/25"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              {t("ctaWhatsapp")}
            </a>
            <a
              href="#contato"
              className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              {t("ctaContact")}
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-white/60 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
