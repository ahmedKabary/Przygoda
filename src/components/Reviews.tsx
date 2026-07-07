"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import ScrollAnimator from "./ScrollAnimator";
import { Star } from "lucide-react";

interface ReviewItem {
  id: string;
  authorKey: string;
  dateKey: string;
  commentKey: string;
  rating: number;
  category: string;
  isCustom?: boolean;
  author?: string;
  date?: string;
  comment?: string;
}

const INITIAL_REVIEWS: ReviewItem[] = [];

export default function Reviews() {
  const { t, locale } = useLanguage();
  const [activeCategory, setActiveCategory] = useState("all");
  const [reviews, setReviews] = useState<ReviewItem[]>(INITIAL_REVIEWS);

  const filteredReviews = reviews.filter((item) => {
    if (activeCategory === "all") return true;
    return item.category === activeCategory;
  });

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
              {t("reviewsPage.title").split(" ")[0]}
            </span>{" "}
            <span className="text-[#f58a2d]">
              {t("reviewsPage.title").split(" ").slice(1).join(" ")}
            </span>
          </h1>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            {t("reviewsPage.subtitle")}
          </p>
        </ScrollAnimator>
      </div>

      <div className="space-y-8">
          {/* Categories filter tabs */}
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
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

          {/* Grid of Reviews */}
          {filteredReviews.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center border-2 border-[#113669] shadow-[2px_2px_0px_0px_#113669] mb-4">
                <Star className="w-8 h-8 text-slate-300" />
              </div>
              <h3 className="text-[#113669] font-black uppercase tracking-wider mb-2">{t("reviewsPage.noReviewsTitle")}</h3>
              <p className="text-slate-500 text-sm max-w-sm">{t("reviewsPage.noReviewsDesc")}</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredReviews.map((item, idx) => {
                const author = item.isCustom ? item.author : t(item.authorKey);
                const date = item.isCustom ? item.date : t(item.dateKey);
                const commentText = item.isCustom ? item.comment : t(item.commentKey);
                const categoryLabel =
                  item.category === "sea"
                    ? t("adventuresPage.categories.sea")
                    : item.category === "safari"
                    ? t("adventuresPage.categories.safari")
                    : t("adventuresPage.categories.history");

                return (
                  <div
                    key={item.id}
                    className="bg-white rounded-2xl p-6 border-2 border-[#113669] shadow-[4px_4px_0px_0px_#113669] flex flex-col justify-between hover:-translate-y-1 transition-transform duration-300 h-full"
                    style={{ animationDelay: `${idx * 100}ms` }}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded bg-[#113669]/5 text-[#113669]">
                          {categoryLabel}
                        </span>
                        <div className="flex gap-0.5">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star
                              key={i}
                              size={12}
                              className={
                                i < item.rating
                                  ? "fill-[#f58a2d] stroke-[#f58a2d]"
                                  : "stroke-slate-300"
                              }
                            />
                          ))}
                        </div>
                      </div>
                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6 italic">
                        "{commentText}"
                      </p>
                    </div>
                    <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                      <span className="font-bold text-xs text-[#113669]">
                        {author}
                      </span>
                      <span className="text-[10px] text-slate-400 font-medium">
                        {date}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
      </div>
    </div>
  );
}
