"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import ScrollAnimator from "./ScrollAnimator";
import { OfficialWhatsAppIcon } from "./OfficialSocialIcons";

const FEATURES = [
  {
    key: "punctual",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    key: "comfort",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
    ),
  },
  {
    key: "safety",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
];

export default function Transfers() {
  const { t } = useLanguage();

  const phoneNumber = "201040541910"; // WhatsApp Contact
  const whatsappMsg = encodeURIComponent(t("transfersPage.whatsappText") || "Hi! I would like to book a private airport transfer.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${whatsappMsg}`;

  return (
    <section className="relative py-12 md:py-20 bg-[#f5f5f5] overflow-hidden px-4 sm:px-6">
      {/* Decorative background gradients */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#f58a2d]/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#113669]/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <ScrollAnimator>
          <div className="text-center mb-16">
            <span className="inline-block text-[10px] font-black uppercase tracking-widest text-white bg-[#f58a2d] px-3.5 py-1.5 border-2 border-[#113669] rounded-xl shadow-[3px_3px_0px_0px_#113669] mb-4">
              {t("transfersPage.title")}
            </span>
            <h1 className="text-3xl sm:text-5xl font-black text-[#113669] uppercase italic tracking-tight leading-none mb-4">
              {t("transfersPage.introTitle")}
            </h1>
            <p className="text-slate-600 text-sm max-w-2xl mx-auto leading-relaxed">
              {t("transfersPage.subtitle")}
            </p>
          </div>
        </ScrollAnimator>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Premium Featured Showcase Card */}
          <div className="lg:col-span-7">
            <ScrollAnimator>
              <div className="bg-white rounded-3xl overflow-hidden border-3 border-[#113669] shadow-[8px_8px_0px_0px_#113669] flex flex-col group">
                
                {/* Image */}
                <div className="relative w-full aspect-video border-b-3 border-[#113669] overflow-hidden bg-slate-100">
                  <Image
                    src="/images/transfer/HIACE.png"
                    alt={t("transfersPage.title") || "Airport Transfers"}
                    fill
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    priority
                  />
                  
                  {/* Category label tag */}
                  <span className="absolute top-4 left-4 bg-white text-[#113669] text-[9px] font-black uppercase tracking-wider px-2.5 py-1 rounded-lg border-2 border-[#113669] shadow-[2px_2px_0px_0px_#113669]">
                    {t("transfersPage.title")}
                  </span>
                </div>

                {/* Content body */}
                <div className="p-6 sm:p-8 flex flex-col flex-grow">
                  <h2 className="text-2xl sm:text-3xl font-black text-[#113669] uppercase italic tracking-tight mb-4 group-hover:text-[#f58a2d] transition-colors duration-300">
                    {t("transfersPage.introTitle")}
                  </h2>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                    {t("transfersPage.introDesc")}
                  </p>


                  {/* Direct WhatsApp Call to Action */}
                  <div className="pt-2">
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex w-full items-center justify-center py-3.5 bg-[#113669] text-white text-xs font-black uppercase tracking-widest rounded-xl border-2 border-[#113669] shadow-[4px_4px_0px_0px_#113669] hover:bg-[#f58a2d] hover:border-[#f58a2d] transition-all duration-300 text-center"
                    >

                      {t("transfersPage.cta")}
                    </a>
                  </div>
                </div>

              </div>
            </ScrollAnimator>
          </div>

          {/* Right Column: Key Service Feature Widgets */}
          <div className="lg:col-span-5 space-y-5">
            {FEATURES.map((feature, i) => (
              <ScrollAnimator key={feature.key} delay={i * 100}>
                <div className="bg-white rounded-2xl p-6 border-2 border-[#113669] shadow-[4px_4px_0px_0px_#113669] hover:-translate-y-1 transition-all duration-300 flex items-start gap-4">

                  {/* Info Text */}
                  <div className="space-y-1">
                    <h3 className="text-base font-black text-[#113669] uppercase italic tracking-tight">
                      {t(`transfersPage.features.${feature.key}.title`)}
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                      {t(`transfersPage.features.${feature.key}.desc`)}
                    </p>
                  </div>
                </div>
              </ScrollAnimator>
            ))}

            {/* Additional info badge box */}
            <ScrollAnimator delay={400}>
              <div className="bg-[#113669] rounded-2xl p-6 text-white border-2 border-[#113669] shadow-[4px_4px_0px_0px_#113669] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#f58a2d]/20 rounded-full blur-2xl pointer-events-none" />
                <h4 className="text-sm font-black uppercase italic tracking-wider text-[#f58a2d] mb-2">
                  {t("transfersPage.taxiHeader")}
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  {t("transfersPage.taxiDesc")}
                </p>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex text-[10px] font-black uppercase tracking-widest text-[#113669] bg-white px-3 py-1.5 border-2 border-[#113669] shadow-[2px_2px_0px_0px_#f58a2d] hover:bg-[#f58a2d] hover:text-white transition-all duration-300 rounded-lg"
                >
                  {t("transfersPage.contactUs")}
                </a>
              </div>
            </ScrollAnimator>
          </div>

        </div>
      </div>
    </section>
  );
}
