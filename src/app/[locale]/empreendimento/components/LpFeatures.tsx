"use client";

import { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";

const WHATSAPP_PROPOSAL = "https://wa.me/34629675430?text=Olá,%20gostaria%20de%20fazer%20uma%20proposta%20para%20a%20compra%20do%20Hotel%20Daifa.";

const featureKeys = ["f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8"] as const;
const colors = [
  "bg-blueLP",
  "bg-amber-500",
  "bg-emerald-500",
  "bg-purple-500",
  "bg-rose-500",
  "bg-cyan-500",
  "bg-indigo-500",
  "bg-teal-500",
];

export function LpFeatures() {
  const t = useTranslations("LpVenda.features");
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());

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
      { threshold: 0.2, rootMargin: "0px 0px -50px 0px" }
    );
    const items = sectionRef.current?.querySelectorAll(".feature-item");
    items?.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="caracteristicas"
      ref={sectionRef}
      className="py-24 bg-gradient-to-b from-white to-gray-50"
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featureKeys.map((key, index) => (
            <div
              key={key}
              data-index={index}
              className={`feature-item group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-blue-200 ${
                visibleItems.has(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div
                className={`${colors[index]} w-14 h-14 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 text-white text-xl font-bold`}
              >
                {index + 1}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blueLP transition-colors">
                {t(`${key}Title`)}
              </h3>
              <p className="text-gray-600 leading-relaxed">{t(`${key}Desc`)}</p>
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
            </div>
          ))}
        </div>

        <div
          className="mt-16 rounded-2xl p-8 md:p-12 text-center"
          style={{ backgroundColor: "#21398C" }}
        >
          <h3 className="text-2xl md:text-3xl text-white mb-4" style={{ fontWeight: 900 }}>{t("flexTitle")}</h3>
          <p className="text-lg max-w-2xl mx-auto mb-6" style={{ color: "#E0E0E0" }}>
            {t("flexText")}
          </p>
          <a
            href={WHATSAPP_PROPOSAL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white px-8 py-4 rounded-xl font-semibold transition-colors duration-300 hover:opacity-90"
            style={{ color: "#21398C" }}
          >
            {t("flexCta")}
          </a>
        </div>
      </div>
    </section>
  );
}
