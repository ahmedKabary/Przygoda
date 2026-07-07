"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import ScrollAnimator from "./ScrollAnimator";
import {
  Shield,
  MapPin,
  Anchor,
  Compass,
  Users,
} from "lucide-react";

export default function About() {
  const { t, locale } = useLanguage();

  return (
    <section id="about" className="relative py-20 md:py-28 bg-[#f5f5f5] overflow-hidden px-4 sm:px-6">
      {/* Decorative Blurs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#f58a2d]/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#113669]/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5" id="about-bento-layout">
          {/* Card 1: Story Widget */}
          <div className="md:col-span-7 bg-[#113669] rounded-2xl p-8 text-white relative flex flex-col justify-between overflow-hidden border-2 border-[#113669] shadow-[6px_6px_0px_0px_#113669] h-72 md:h-80">
            <div className="absolute top-0 right-0 w-72 h-72 bg-[#f58a2d]/10 rounded-full blur-3xl pointer-events-none" />
            <div className="relative">

              <h3 className="text-2xl sm:text-3xl font-black mt-4 leading-none uppercase italic tracking-tight">
                {t("about.title")}
                <br />
                <span className="text-[#f58a2d] not-italic">
                  {t("about.bento.storyTitle2")}
                </span>
              </h3>
            </div>
            <div className="relative z-10">
              <p className="text-slate-300 text-xs max-w-md leading-relaxed">
                {t("about.description")}
              </p>
            </div>
          </div>

          {/* Card 2: Philosophy Stats Widget */}
          <div className="md:col-span-5 bg-white rounded-2xl p-6 border-2 border-[#113669] shadow-[6px_6px_0px_0px_#113669] flex flex-col justify-between h-72 md:h-80">


            <div className="my-auto py-2 flex flex-col items-center justify-center text-center">
              <div className="text-5xl md:text-6xl font-black text-[#113669] uppercase tracking-tighter italic">
                Przygoda
              </div>
              <div className="text-lg md:text-xl font-black text-[#f58a2d] uppercase tracking-widest mt-1 transform -rotate-2">
                {t("about.bento.slogan")}
              </div>
            </div>

            <div className="pt-3 border-t-2 border-[#113669]/10 flex items-center justify-center text-[11px] text-slate-400">
              <span className="font-black text-[#113669] uppercase tracking-widest text-[10px]">
                Marsa Alam
              </span>
            </div>
          </div>

          {/* Card 3: Red Sea Wonders */}
          <div className="md:col-span-4 bg-[#f8fff9] rounded-2xl p-6 border-2 border-[#113669] shadow-[6px_6px_0px_0px_#113669] flex flex-col justify-between relative overflow-hidden group hover:-translate-y-1 transition-all duration-300 h-96">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50 rounded-full blur-2xl pointer-events-none" />
            
            <div className="my-auto relative z-10 space-y-3">
              <div>
                <h3 className="font-extrabold text-[#113669] uppercase text-base tracking-wider">
                  {t("about.bento.card3Title")}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mt-1">
                  {t("about.bento.card3Desc")}
                </p>
              </div>
            </div>

            <div className="pt-3 border-t-2 border-[#113669]/10 flex items-center justify-between text-[11px] text-slate-400">
              <span className="font-black text-[#113669] uppercase tracking-widest text-[9px]">
                {locale === "pl" ? "Wycieczki Morskie" : "Sea Trips"}
              </span>
            </div>
          </div>

          {/* Card 4: Desert Safaris */}
          <div className="md:col-span-4 bg-slate-50 rounded-2xl p-6 border-2 border-[#113669] shadow-[6px_6px_0px_0px_#113669] flex flex-col justify-between relative overflow-hidden group hover:-translate-y-1 transition-all duration-300 h-96">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#f58a2d]/5 rounded-full blur-2xl pointer-events-none" />

            <div className="my-auto relative z-10 space-y-3">
              <div>
                <h3 className="font-extrabold text-[#113669] uppercase text-base tracking-wider">
                  {t("about.bento.card4Title")}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mt-1">
                  {t("about.bento.card4Desc")}
                </p>
              </div>
            </div>

            <div className="pt-3 border-t-2 border-[#113669]/10 flex items-center justify-between text-[11px] text-slate-400">
              <span className="font-black text-[#113669] uppercase tracking-widest text-[9px]">
                {locale === "pl" ? "Wyprawy Pustynne" : "Desert Safari"}
              </span>
            </div>
          </div>

          {/* Card 5: History Tours */}
          <div className="md:col-span-4 bg-blue-50/40 rounded-2xl p-6 border-2 border-[#113669] shadow-[6px_6px_0px_0px_#113669] flex flex-col justify-between relative overflow-hidden group hover:-translate-y-1 transition-all duration-300 h-96">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100/50 rounded-full blur-2xl pointer-events-none" />

            <div className="my-auto relative z-10 space-y-3">
              <div>
                <h3 className="font-extrabold text-[#113669] uppercase text-base tracking-wider">
                  {t("about.bento.card5Title")}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mt-1">
                  {t("about.bento.card5Desc")}
                </p>
              </div>
            </div>

            <div className="pt-3 border-t-2 border-[#113669]/10 flex items-center justify-between text-[11px] text-slate-400">
              <span className="font-black text-[#113669] uppercase tracking-widest text-[9px]">
                {locale === "pl" ? "Wycieczki Historyczne" : "History Tours"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
