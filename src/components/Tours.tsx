"use client";

import { useLanguage } from "@/context/LanguageContext";
import { SOCIAL_LINKS } from "@/lib/constants";
import ScrollAnimator from "./ScrollAnimator";
import Image from "next/image";

const TOUR_CARDS = [
  {
    key: "sea",
    image: "/images/tour-sea.png",
  },
  {
    key: "safari",
    image: "/images/tour-safari.png",
  },
  {
    key: "adventure",
    image: "/images/tour-adventure.png",
  },
];

export default function Tours() {
  const { t } = useLanguage();

  return (
    <section id="tours" className="relative py-24 md:py-32 bg-[#113669] overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-white to-transparent opacity-5" />
      {/* Premium glowing background mesh and geometric grid */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(245,138,45,0.12),transparent_40%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(255,255,255,0.03),transparent_50%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black_80%)] pointer-events-none" />


      <div className="relative max-w-7xl mx-auto px-6">
        <ScrollAnimator>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
              {t("tours.title")}
            </h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-[#f58a2d] to-[#f58a2d]/40 rounded-full mx-auto" />
          </div>
        </ScrollAnimator>

        <div className="grid md:grid-cols-3 gap-8">
          {TOUR_CARDS.map((card, i) => (
            <ScrollAnimator key={card.key} delay={i * 150}>
              <a
                href={SOCIAL_LINKS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="group block relative rounded-3xl overflow-hidden aspect-[3/4] cursor-pointer"
              >
                <Image
                  src={card.image}
                  alt={t(`tours.${card.key}.title`)}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#113669] via-[#113669]/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#f58a2d] transition-colors duration-300">
                    {t(`tours.${card.key}.title`)}
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed mb-4">
                    {t(`tours.${card.key}.desc`)}
                  </p>
                  <div className="flex items-center gap-2 text-[#f58a2d] text-sm font-semibold opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    <span>{t("hero.cta")}</span>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>

                {/* Border glow on hover */}
                <div className="absolute inset-0 rounded-3xl border-2 border-[#f58a2d]/0 group-hover:border-[#f58a2d]/30 transition-all duration-500" />
              </a>
            </ScrollAnimator>
          ))}
        </div>
      </div>
    </section>
  );
}
