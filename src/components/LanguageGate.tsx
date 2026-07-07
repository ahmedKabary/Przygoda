"use client";

import { useLanguage } from "@/context/LanguageContext";
import { LOCALES } from "@/lib/constants";
import Image from "next/image";

export default function LanguageGate() {
  const { hasChosenLanguage, setLocale, t } = useLanguage();

  if (hasChosenLanguage) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-gradient-to-br from-[#fcfcfc] via-[#f5f7fa] to-[#eef2f7] overflow-y-auto p-4 sm:p-6 md:p-10">
      {/* Dynamic warm pastel orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-96 h-96 sm:w-[500px] sm:h-[500px] bg-[#f58a2d]/10 rounded-full blur-[100px] sm:blur-[150px] animate-pulse" />
        <div className="absolute -bottom-40 -right-40 w-80 h-80 sm:w-[450px] sm:h-[450px] bg-[#113669]/5 rounded-full blur-[100px] sm:blur-[130px] animate-pulse [animation-delay:1.5s]" />
        <div className="absolute top-1/3 right-1/4 w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] bg-[#f58a2d]/5 rounded-full blur-[120px]" />
      </div>

      {/* Main card container */}
      <div className="relative z-10 w-full max-w-xl bg-white/70 backdrop-blur-2xl border border-white/80 rounded-[2.5rem] shadow-[0_30px_100px_rgba(17,54,105,0.08)] p-6 sm:p-10 md:p-12 text-center animate-[fadeInScale_0.6s_ease-out]">
        
        {/* Subtle top decoration line */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1.5 rounded-b-full bg-gradient-to-r from-[#f58a2d] to-[#113669]/60" />

        {/* Logo with interactive glowing ring */}
        <div className="mb-6 sm:mb-8 flex justify-center">
          <div className="relative w-24 h-24 sm:w-28 sm:h-28 group cursor-pointer transition-transform duration-500 hover:scale-105">
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#f58a2d]/20 to-[#113669]/5 blur-lg opacity-85 group-hover:blur-xl transition-all duration-300" />
            <div className="relative w-full h-full bg-white/50 backdrop-blur-md rounded-full border border-white/60 p-3 sm:p-4 shadow-sm flex items-center justify-center">
              <Image
                src="/branding/logo.png"
                alt="Przygoda Logo"
                fill
                sizes="112px"
                className="object-contain p-3 sm:p-4"
                priority
              />
            </div>
          </div>
        </div>

        {/* Heading & Text */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#113669] tracking-tight leading-tight mb-2">
          {t("langGate.title")}
        </h1>
        <p className="text-[#f58a2d] text-sm sm:text-base font-bold uppercase tracking-[0.15em] mb-3">
          {t("langGate.tagline")}
        </p>
        <div className="w-12 h-0.5 bg-[#f58a2d]/30 mx-auto mb-6" />
        <p className="text-neutral-500 text-sm sm:text-base mb-8 max-w-sm mx-auto">
          {t("langGate.subtitle")}
        </p>

        {/* Language buttons grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
          {LOCALES.map((loc, i) => (
            <button
              key={loc.code}
              onClick={() => setLocale(loc.code)}
              className="group relative flex items-center gap-4 px-5 py-4 rounded-2xl
                bg-white/80 border border-neutral-100 hover:border-[#f58a2d]/50 hover:bg-[#f58a2d]/5
                transition-all duration-300 ease-out cursor-pointer
                hover:scale-[1.02] active:scale-[0.98]
                shadow-sm hover:shadow-md hover:shadow-[#f58a2d]/5"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              {/* Left glow effect on hover */}
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-0 rounded-r-full bg-[#f58a2d] group-hover:h-8 transition-all duration-300" />
              
              <span className="text-3xl filter drop-shadow-sm transition-transform duration-300 group-hover:scale-110">{loc.flag}</span>
              <div className="text-start">
                <span className="block text-[#113669] font-bold text-sm leading-tight transition-colors duration-300 group-hover:text-[#f58a2d]">
                  {loc.label}
                </span>
                <span className="block text-neutral-400 text-xs font-semibold tracking-wider uppercase mt-0.5">
                  {loc.code}
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
