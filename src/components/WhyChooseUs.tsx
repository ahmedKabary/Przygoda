"use client";

import { useLanguage } from "@/context/LanguageContext";
import ScrollAnimator from "./ScrollAnimator";

const FEATURES = [
  {
    key: "guides",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
  },
  {
    key: "prices",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    key: "safety",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    key: "support",
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
];

export default function WhyChooseUs() {
  const { t } = useLanguage();

  return (
    <section id="why" className="relative py-24 md:py-32 bg-white overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#f58a2d]/[0.02] rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6">
        <ScrollAnimator>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold text-[#113669] mb-4">
              {t("why.title")}
            </h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-[#113669] to-[#113669]/40 rounded-full mx-auto" />
          </div>
        </ScrollAnimator>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURES.map((feature, i) => (
            <ScrollAnimator key={feature.key} delay={i * 100}>
              <div className="group relative p-8 rounded-3xl bg-white border border-[#113669]/10 hover:border-[#f58a2d]/30 transition-all duration-500 hover:shadow-2xl hover:shadow-[#f58a2d]/10 hover:-translate-y-2 text-center">
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-[#f58a2d] to-[#f58a2d]/80 text-white mb-6 shadow-lg shadow-[#f58a2d]/20 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>

                <h3 className="text-xl font-bold text-[#113669] mb-3">
                  {t(`why.${feature.key}.title`)}
                </h3>
                <p className="text-[#113669]/60 text-sm leading-relaxed">
                  {t(`why.${feature.key}.desc`)}
                </p>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-[#f58a2d] to-[#f58a2d]/60 rounded-full group-hover:w-16 transition-all duration-500" />
              </div>
            </ScrollAnimator>
          ))}
        </div>
      </div>
    </section>
  );
}
