"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import ScrollAnimator from "./ScrollAnimator";


interface MemoryItem {
  id: string;
  src: string;
  captionKey: string;
  category: string;
  clientName: string;
  tourDate: string;
  rating: number;
}

const MEMORY_ITEMS: MemoryItem[] = [
  {
    id: "1",
    src: "/images/family/1.jpg",
    captionKey: "memoriesPage.items.item1",
    category: "sea",
    clientName: "The Kowalski Family",
    tourDate: "June 2026",
    rating: 5,
  },
  {
    id: "2",
    src: "/images/family/2.jpg",
    captionKey: "memoriesPage.items.item2",
    category: "safari",
    clientName: "David & Emma",
    tourDate: "May 2026",
    rating: 5,
  },
  {
    id: "3",
    src: "/images/family/3.jpg",
    captionKey: "memoriesPage.items.item3",
    category: "safari",
    clientName: "Sarah & Friends",
    tourDate: "May 2026",
    rating: 5,
  },
  {
    id: "4",
    src: "/images/family/4.jpg",
    captionKey: "memoriesPage.items.item4",
    category: "sea",
    clientName: "John's Diving Group",
    tourDate: "April 2026",
    rating: 5,
  },
  {
    id: "5",
    src: "/images/family/5.jpg",
    captionKey: "memoriesPage.items.item5",
    category: "safari",
    clientName: "The Miller Family",
    tourDate: "April 2026",
    rating: 5,
  },
  {
    id: "6",
    src: "/images/family/6.jpg",
    captionKey: "memoriesPage.items.item6",
    category: "sea",
    clientName: "Katarzyna & Michał",
    tourDate: "March 2026",
    rating: 5,
  },
  {
    id: "7",
    src: "/images/family/7.jpg",
    captionKey: "memoriesPage.items.item7",
    category: "safari",
    clientName: "Robert & Lisa",
    tourDate: "March 2026",
    rating: 5,
  },
  {
    id: "8",
    src: "/images/family/8.jpg",
    captionKey: "memoriesPage.items.item8",
    category: "history",
    clientName: "Thomas & Anna",
    tourDate: "February 2026",
    rating: 5,
  },
  {
    id: "9",
    src: "/images/family/9.jpg",
    captionKey: "memoriesPage.items.item9",
    category: "sea",
    clientName: "Elena & Marcus",
    tourDate: "February 2026",
    rating: 5,
  },
  {
    id: "10",
    src: "/images/family/10.jpg",
    captionKey: "memoriesPage.items.item10",
    category: "history",
    clientName: "The Novak Family",
    tourDate: "January 2026",
    rating: 5,
  },
  {
    id: "11",
    src: "/images/family/11.jpg",
    captionKey: "memoriesPage.items.item11",
    category: "sea",
    clientName: "Chris & Jessica",
    tourDate: "January 2026",
    rating: 5,
  },
  {
    id: "12",
    src: "/images/family/12.jpg",
    captionKey: "memoriesPage.items.item12",
    category: "safari",
    clientName: "The Larson Family",
    tourDate: "December 2025",
    rating: 5,
  },
];

export default function Memories() {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const filteredMemories = MEMORY_ITEMS.filter((item) => {
    if (activeCategory === "all") return true;
    return item.category === activeCategory;
  });

  const handlePrev = (e?: React.MouseEvent | React.TouchEvent) => {
    if (e) e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => {
        if (prev === null) return null;
        // Navigation within filtered items
        const prevFilteredIdx = (prev - 1 + filteredMemories.length) % filteredMemories.length;
        return prevFilteredIdx;
      });
    }
  };

  const handleNext = (e?: React.MouseEvent | React.TouchEvent) => {
    if (e) e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => {
        if (prev === null) return null;
        const nextFilteredIdx = (prev + 1) % filteredMemories.length;
        return nextFilteredIdx;
      });
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart === null || touchEnd === null) return;
    const distance = touchStart - touchEnd;
    const minSwipeDistance = 50;
    if (distance > minSwipeDistance) {
      handleNext();
    } else if (distance < -minSwipeDistance) {
      handlePrev();
    }
  };

  const categories = [
    { id: "all", label: t("reviewsPage.allReviews") },
    { id: "sea", label: t("adventuresPage.categories.sea") },
    { id: "safari", label: t("adventuresPage.categories.safari") },
    { id: "history", label: t("adventuresPage.categories.history") },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      {/* Header section */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <ScrollAnimator>
          <span className="text-xs font-bold tracking-[0.25em] text-[#f58a2d] uppercase mb-4 block">
            {t("showcase.tagline")}
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight mb-6 uppercase italic tracking-tight">
            <span className="text-[#113669]">
              {t("memoriesPage.title").split(" ")[0]}
            </span>{" "}
            <span className="text-[#f58a2d]">
              {t("memoriesPage.title").split(" ").slice(1).join(" ")}
            </span>
          </h1>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            {t("memoriesPage.subtitle")}
          </p>
        </ScrollAnimator>
      </div>

      <div className="space-y-8">
        {/* Categories filter tabs */}
        <div className="flex flex-wrap gap-2 sm:gap-3 justify-center sm:justify-start">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setActiveCategory(cat.id);
                setLightboxIndex(null);
              }}
              className={`px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl text-[10px] sm:text-xs font-black uppercase tracking-wider border-2 transition-all duration-300 ${
                activeCategory === cat.id
                  ? "bg-[#f58a2d] text-white border-[#f58a2d] shadow-[2px_2px_0px_0px_#113669] -translate-x-0.5 -translate-y-0.5"
                  : "bg-white text-[#113669] border-[#113669] shadow-[2px_2px_0px_0px_#113669] hover:bg-[#113669]/5"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Bento Grid layout for Memories */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredMemories.map((item, idx) => {
            const categoryLabel =
              item.category === "sea"
                ? t("adventuresPage.categories.sea")
                : item.category === "safari"
                ? t("adventuresPage.categories.safari")
                : t("adventuresPage.categories.history");

            return (
              <div
                key={item.id}
                onClick={() => setLightboxIndex(idx)}
                className="bg-white rounded-2xl overflow-hidden border-2 border-[#113669] shadow-[4px_4px_0px_0px_#113669] flex flex-col hover:-translate-y-1 transition-transform duration-300 cursor-pointer group h-full"
              >
                {/* Image Container */}
                <div className="relative aspect-square w-full overflow-hidden">
                  <Image
                    src={item.src}
                    alt={categoryLabel}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#113669]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-white text-[9px] font-black uppercase tracking-widest bg-[#113669] px-3 py-1.5 border-2 border-white rounded-xl shadow-[3px_3px_0px_0px_white]">
                      {t("common.view")}
                    </span>
                  </div>
                  <span className="absolute top-3 left-3 text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded bg-white text-[#113669] border border-[#113669]">
                    {categoryLabel}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Slider Modal */}
      {lightboxIndex !== null && (
        <div
          onClick={() => setLightboxIndex(null)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          className="fixed inset-0 bg-[#113669]/90 backdrop-blur-md z-[9999] flex items-center justify-center p-4 cursor-zoom-out animate-fade-in"
        >
          {/* Close button */}
          <button
            onClick={() => setLightboxIndex(null)}
            className="absolute top-4 right-4 text-white hover:text-[#f58a2d] transition-colors p-2 bg-[#113669] border-2 border-white rounded-full shadow-[3px_3px_0px_0px_white] z-50"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>

          {/* Navigation arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white text-[#113669] p-3 rounded-full border-2 border-[#113669] hover:bg-[#f58a2d] hover:text-white transition-colors z-50 shadow-[2px_2px_0px_0px_#113669] hidden sm:block"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
          </button>
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white text-[#113669] p-3 rounded-full border-2 border-[#113669] hover:bg-[#f58a2d] hover:text-white transition-colors z-50 shadow-[2px_2px_0px_0px_#113669] hidden sm:block"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>

          {/* Enlarged image container */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-[500px] aspect-square flex items-center justify-center p-2"
          >
            <Image
              key={lightboxIndex}
              src={filteredMemories[lightboxIndex].src}
              alt="Client memory enlarged"
              fill
              sizes="(max-width: 640px) 100vw, 500px"
              className="object-cover border-4 border-white rounded-2xl shadow-[6px_6px_0px_0px_#f58a2d] animate-[fadeInScale_0.3s_ease-out]"
              priority
            />
          </div>
        </div>
      )}
    </div>
  );
}
