"use client";

import { useState, useEffect, Suspense } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { SOCIAL_LINKS } from "@/lib/constants";
import ScrollAnimator from "./ScrollAnimator";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { OfficialWhatsAppIcon } from "./OfficialSocialIcons";

interface Program {
  id: string;
  category: "sea" | "safari" | "history";
  image: string;
}

const PROGRAM_ITEMS: Program[] = [
  {
    id: "marsa_mubarak",
    category: "sea",
    image: "/images/tours/sea/2.jpeg",
  },
  {
    id: "dolphin",
    category: "sea",
    image: "/images/tours/sea/9.png",
  },
  {
    id: "abudabbab",
    category: "sea",
    image: "/images/tours/sea/banner.jpeg",
  },
  {
    id: "sharm_el_luli",
    category: "sea",
    image: "/images/tours/sea/10.jpeg",
  },
  {
    id: "super_quad",
    category: "safari",
    image: "/images/tours/safari/banner.JPG",
  },
  {
    id: "moto_2_hours",
    category: "safari",
    image: "/images/tours/safari/camel.jpeg",
  },
  {
    id: "luxor",
    category: "history",
    image: "/images/tours/history/banner.jpg",
  },
  {
    id: "cairo",
    category: "history",
    image: "/images/tours/history/1.jpeg",
  },

  {
    id: "marsa_alam_city",
    category: "history",
    image: "/images/tours/marsa_alam_city.png",
  },
  {
    id: "el_quseir",
    category: "history",
    image: "/images/tours/el_quseir.png",
  },
];

function AdventuresContent() {
  const { t } = useLanguage();
  const searchParams = useSearchParams();
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedProgram, setSelectedProgram] = useState<Program | null>(null);

  // Sync category state from URL query parameters (e.g. ?category=sea)
  useEffect(() => {
    const cat = searchParams.get("category");
    if (cat && ["sea", "safari", "history"].includes(cat)) {
      setActiveCategory(cat);
    }
  }, [searchParams]);

  const filteredPrograms = PROGRAM_ITEMS.filter((item) => {
    if (activeCategory === "all") return true;
    return item.category === activeCategory;
  });

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      {/* Header section */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <ScrollAnimator>
          <span className="text-xs font-bold tracking-[0.25em] text-[#f58a2d] uppercase mb-4 block">
            {t("showcase.tagline")}
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight mb-6 uppercase italic tracking-tight">
            <span className="text-[#113669]">{t("adventuresPage.title").split(" ")[0]}</span>{" "}
            <span className="text-[#f58a2d]">{t("adventuresPage.title").split(" ").slice(1).join(" ")}</span>
          </h1>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            {t("adventuresPage.subtitle")}
          </p>
        </ScrollAnimator>
      </div>

      {/* Filter Tabs - Bento Styled Buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-16">
        {["all", "sea", "safari", "history"].map((cat) => {
          const isActive = activeCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 text-xs font-black uppercase tracking-wider rounded-xl border-2 border-[#113669] transition-all duration-300 ${
                isActive
                  ? "bg-[#113669] text-white shadow-[2px_2px_0px_0px_#f58a2d]"
                  : "bg-white text-[#113669] shadow-[2px_2px_0px_0px_#113669] hover:bg-[#113669]/5"
              }`}
            >
              {t(`adventuresPage.categories.${cat}`)}
            </button>
          );
        })}
      </div>

      {/* Grid List */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPrograms.map((item, index) => {
          const title = t(`adventuresPage.programs.${item.category}.${item.id}.title`);
          const desc = t(`adventuresPage.programs.${item.category}.${item.id}.desc`);
          const duration = t(`adventuresPage.programs.${item.category}.${item.id}.duration`);

          return (
            <ScrollAnimator key={item.id} delay={index * 100}>
              <div className="bg-white rounded-2xl overflow-hidden border-2 border-[#113669] shadow-[6px_6px_0px_0px_#113669] hover:-translate-y-1 transition-all duration-300 flex flex-col h-full group">
                {/* Image panel */}
                <div className="relative w-full aspect-video border-b-2 border-[#113669] overflow-hidden bg-slate-100">
                  <Image
                    src={item.image}
                    alt={title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

                {/* Content body */}
                <div className="p-6 flex flex-col flex-grow">
                  <div className="mb-2">
                    <span className="inline-block text-[9px] font-black uppercase tracking-widest text-[#113669] bg-white border border-[#113669] px-2 py-0.5 rounded shadow-[1px_1px_0px_0px_#113669]">
                      {t(`adventuresPage.categories.${item.category}`)}
                    </span>
                  </div>
                  <h3 className="text-xl font-black text-[#113669] uppercase italic tracking-tight mb-2 line-clamp-1 group-hover:text-[#f58a2d] transition-colors duration-300">
                    {title}
                  </h3>

                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6 line-clamp-3">
                    {desc}
                  </p>

                  <div className="mt-auto pt-2">
                    <button
                      onClick={() => setSelectedProgram(item)}
                      className="w-full py-2.5 text-xs font-black uppercase tracking-widest text-[#113669] border-2 border-[#113669] shadow-[3px_3px_0px_0px_#113669] hover:bg-[#113669] hover:text-white transition-all duration-300 rounded-xl"
                    >
                      {t("adventuresPage.labels.viewDetails")}
                    </button>
                  </div>
                </div>
              </div>
            </ScrollAnimator>
          );
        })}
      </div>

      {/* Details Dialog Modal */}
      {selectedProgram && (() => {
        const item = selectedProgram;
        const title = t(`adventuresPage.programs.${item.category}.${item.id}.title`);
        const desc = t(`adventuresPage.programs.${item.category}.${item.id}.desc`);
        const duration = t(`adventuresPage.programs.${item.category}.${item.id}.duration`);

        return (
          <div className="fixed inset-0 z-50 bg-[#113669]/60 backdrop-blur-sm flex items-center justify-center p-4 md:p-6 overflow-y-auto">
            {/* Overlay background click to close */}
            <div className="absolute inset-0" onClick={() => setSelectedProgram(null)} />

            {/* Dialog panel */}
            <div className="relative bg-white rounded-3xl border-3 border-[#113669] shadow-[10px_10px_0px_0px_#113669] max-w-2xl w-full max-h-[85vh] overflow-y-auto flex flex-col z-10 animate-in fade-in zoom-in-95 duration-200">
              {/* Image banner */}
              <div className="relative w-full h-48 sm:h-64 border-b-3 border-[#113669] overflow-hidden bg-slate-100 flex-shrink-0">
                <Image
                  src={item.image}
                  alt={title}
                  fill
                  className="object-cover"
                />
                {/* Close Button overlay */}
                <button
                  onClick={() => setSelectedProgram(null)}
                  className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center bg-white text-[#113669] border-2 border-[#113669] shadow-[2px_2px_0px_0px_#113669] hover:bg-[#113669] hover:text-white transition-all rounded-full"
                  aria-label="Close"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Main detail content */}
              <div className="p-6 sm:p-8 overflow-y-auto flex-grow space-y-6">
                <div>
                  <span className="inline-block bg-[#113669]/5 text-[#113669] text-[9px] font-black uppercase tracking-wider px-2.5 py-1 rounded-lg border-2 border-[#113669]/20 mb-3">
                    {t(`adventuresPage.categories.${item.category}`)}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-black text-[#113669] uppercase italic tracking-tight leading-tight">
                    {title}
                  </h2>

                </div>

                <div className="space-y-4">
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {desc}
                  </p>
                </div>

                {/* Call-to-action booking panel */}
                <div className="bg-[#f58a2d]/5 border-2 border-[#f58a2d] rounded-2xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-center sm:text-start">
                    <h4 className="text-[#113669] font-black uppercase tracking-wider text-xs sm:text-sm mb-1">
                      {t("adventuresPage.labels.readyToReserve")}
                    </h4>
                    <p className="text-slate-600 text-[10px] sm:text-xs">
                      {t("adventuresPage.labels.secureInstantly")}
                    </p>
                  </div>
                  <a
                    href={SOCIAL_LINKS.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-5 py-3 bg-[#f58a2d] hover:bg-[#e07b24] text-white font-black text-xs uppercase tracking-widest rounded-xl border-2 border-[#113669] shadow-[3px_3px_0px_0px_#113669] transition-all flex items-center justify-center gap-2"
                  >

                    <span>{t("adventuresPage.labels.bookNow")}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        );
      })()}
    </div>
  );
}

export default function Adventures() {
  return (
    <Suspense fallback={
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="w-8 h-8 border-4 border-[#113669] border-t-[#f58a2d] rounded-full animate-spin" />
      </div>
    }>
      <AdventuresContent />
    </Suspense>
  );
}
