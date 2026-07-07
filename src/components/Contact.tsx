"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { SOCIAL_LINKS } from "@/lib/constants";
import ScrollAnimator from "./ScrollAnimator";
import {
  MapPin,
  Clock,
  ExternalLink,
  Smartphone,
} from "lucide-react";
import {
  OfficialInstagramIcon,
  OfficialFacebookIcon,
  OfficialWhatsAppIcon,
} from "./OfficialSocialIcons";

export default function Contact() {
  const { t } = useLanguage();

  // Facebook Chat Mock State
  const [chatMessages, setChatMessages] = useState<Array<{ sender: "user" | "bot"; text: string }>>([]);

  // Setup initial bot message on language mount/change
  useEffect(() => {
    setChatMessages([
      { sender: "bot", text: t("contact.bento.botWelcome") as string },
    ]);
  }, [t]);

  const [isTyping, setIsTyping] = useState(false);

  // Local clock state
  const [currentTime, setCurrentTime] = useState<string>("07:54 PM");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      let hours = now.getHours();
      const minutes = now.getMinutes().toString().padStart(2, "0");
      const ampm = hours >= 12 ? "PM" : "AM";
      hours = hours % 12;
      hours = hours ? hours : 12;
      setCurrentTime(`${hours.toString().padStart(2, "0")}:${minutes} ${ampm}`);
    };
    updateTime();
    const timer = setInterval(updateTime, 10000);
    return () => clearInterval(timer);
  }, []);

  // Chatbot flow for Facebook Mock
  const handleChatPromptClick = (question: string, answer: string) => {
    if (isTyping) return;

    setChatMessages((prev) => [...prev, { sender: "user", text: question }]);
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      setChatMessages((prev) => [...prev, { sender: "bot", text: answer }]);
    }, 1000);
  };

  return (
    <section id="contact" className="relative py-20 md:py-28 bg-[#f5f5f5] overflow-hidden px-4 sm:px-6">
      {/* Decorative Blurs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#f58a2d]/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#113669]/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">


        {/* Bento Grid Layout directly */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5" id="bento-layout">
          {/* Card 1: Header widget */}
          <div className="md:col-span-7 bg-[#113669] rounded-2xl p-8 text-white relative flex flex-col justify-between overflow-hidden border-2 border-[#113669] shadow-[6px_6px_0px_0px_#113669] h-72 md:h-80">
            <div className="absolute top-0 right-0 w-72 h-72 bg-[#f58a2d]/10 rounded-full blur-3xl pointer-events-none" />
            <div className="relative">

              <h2 className="text-2xl sm:text-3xl font-black mt-4 leading-none uppercase italic tracking-tight">
                {t("contact.bento.titlePart1")}
                <br />
                <span className="text-[#f58a2d] not-italic">
                  {t("contact.bento.titlePart2")}
                </span>
              </h2>
            </div>
            <div className="relative z-10">
              <p className="text-slate-300 text-xs max-w-md leading-relaxed">
                {t("contact.bento.desc")}
              </p>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.getElementById("social-cards-start");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="mt-4 flex items-center gap-2 text-xs text-[#f58a2d] hover:text-[#f58a2d]/80 transition-colors font-bold cursor-pointer bg-transparent border-none p-0 outline-none text-left"
              >
                <span>{t("contact.bento.scrollDown")}</span>
                <span className="animate-bounce">↓</span>
              </button>
            </div>
          </div>

          {/* Card 2: Local Time Clock */}
          <div className="md:col-span-5 bg-white rounded-2xl p-6 border-2 border-[#113669] shadow-[6px_6px_0px_0px_#113669] flex flex-col justify-between h-72 md:h-80">
            <div className="flex items-center justify-end">
              <Clock className="w-5 h-5 text-[#f58a2d]" />
            </div>

            <div className="my-auto py-4">
              <div className="text-4xl md:text-5xl font-black text-[#113669] font-mono tracking-tight text-center sm:text-left">
                {currentTime}
              </div>
              <div className="text-xs text-[#113669] font-bold text-center sm:text-left mt-2 flex items-center justify-center sm:justify-start gap-1">
                <MapPin className="w-3.5 h-3.5 text-[#f58a2d]" />
                <span>{t("contact.bento.hqDesc")}</span>
              </div>
            </div>

            <div className="pt-3 border-t-2 border-[#113669]/10 flex items-center justify-end text-[11px] text-slate-400">
              <span className="font-black text-[#113669] uppercase tracking-widest text-[10px]">
                {t("contact.bento.statusValue")}
              </span>
            </div>
          </div>

          {/* Card 3: WhatsApp Action widget */}
          <div id="social-cards-start" className="md:col-span-4 bg-[#f8fff9] rounded-2xl p-6 border-2 border-[#113669] shadow-[6px_6px_0px_0px_#113669] flex flex-col justify-between relative overflow-hidden group hover:-translate-y-1 transition-all duration-300 h-96">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50 rounded-full blur-2xl pointer-events-none" />

            <div className="flex items-center justify-between relative z-10">
              <div className="p-2 bg-emerald-100 rounded-xl border border-emerald-300">
                <OfficialWhatsAppIcon size={24} />
              </div>

            </div>

            <div className="my-auto relative z-10 space-y-3">
              <div>
                <h3 className="font-extrabold text-[#113669] uppercase text-base tracking-wider">
                  {t("contact.bento.whatsappTitle")}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mt-1">
                  {t("contact.bento.whatsappDesc")}
                </p>
              </div>

              {/* QR code */}
              <div className="w-28 h-28 bg-white border-2 border-[#113669] rounded-xl p-1.5 mx-auto relative flex items-center justify-center group-hover:scale-105 transition-transform shadow-[2px_2px_0px_0px_#113669] overflow-hidden">
                <div
                  className="absolute inset-x-2 top-2 h-0.5 bg-emerald-400 top-scan-line shadow-xs pointer-events-none"
                  style={{
                    animation: "scan 2s infinite ease-in-out",
                  }}
                />
                <img
                  src={`https://api.qrserver.com/v1/create-qr-code/?size=112x112&data=${encodeURIComponent(SOCIAL_LINKS.whatsapp)}`}
                  alt="WhatsApp QR Code"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            <div className="relative z-10">
              <a
                href={SOCIAL_LINKS.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="w-full py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-black text-xs uppercase tracking-widest flex items-center justify-center gap-1.5 border-2 border-[#113669] shadow-[3px_3px_0px_0px_#113669]"
              >
                <Smartphone className="w-4 h-4" />
                <span>{t("contact.bento.whatsappLaunch")}</span>
              </a>

            </div>
          </div>

          {/* Card 4: Instagram Visual widget */}
          <div className="md:col-span-4 bg-slate-50 rounded-2xl p-6 border-2 border-[#113669] shadow-[6px_6px_0px_0px_#113669] flex flex-col justify-between relative overflow-hidden group hover:-translate-y-1 transition-all duration-300 h-96">
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-50 rounded-full blur-2xl pointer-events-none" />

            <div className="flex items-center justify-between relative z-10">
              <div className="p-2 bg-gradient-to-tr from-[#fd5949] to-[#d6249f] rounded-xl text-white">
                <OfficialInstagramIcon size={24} />
              </div>

            </div>

            <div className="my-auto relative z-10 space-y-3">
              <div>
                <h3 className="font-extrabold text-[#113669] uppercase text-base tracking-wider">
                  {t("contact.bento.instagramTitle")}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mt-1">
                  {t("contact.bento.instagramDesc")}
                </p>
              </div>

              <div className="grid grid-cols-3 gap-1.5 pt-1">
                {[
                  { label: "Red Sea", image: "/images/tours/red_sea_instagram.png" },
                  { label: "Desert Safari", image: "/images/tours/desert_safari_instagram.png" },
                  { label: "Luxor Temple", image: "/images/tours/luxor_temple_instagram.png" },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="aspect-square rounded-xl relative overflow-hidden group/item flex items-center justify-center text-white text-[10px] font-bold shadow-xs border border-[#113669]/20 bg-slate-100"
                  >
                    <Image
                      src={item.image}
                      alt={item.label}
                      fill
                      sizes="(max-width: 640px) 33vw, 100px"
                      className="object-cover transition-transform duration-500 group-hover/item:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/item:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="text-[8px] uppercase tracking-wider">{t("common.view")}</span>
                    </div>
                    <span className="absolute bottom-1 left-1 right-1 text-center text-[7px] sm:text-[8px] leading-tight opacity-90 z-10 bg-black/50 py-0.5 rounded-md backdrop-blur-xs font-semibold">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative z-10">
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noreferrer"
                className="w-full py-2.5 rounded-xl bg-[radial-gradient(circle_at_30%_107%,#fdf497_0%,#fdf497_5%,#fd5949_45%,#d6249f_60%,#285ae5_90%)] text-white font-black text-xs uppercase tracking-widest flex items-center justify-center gap-1.5 border-2 border-[#113669] shadow-[3px_3px_0px_0px_#113669]"
              >
                <span>{t("contact.bento.instagramFollow")}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Card 5: Facebook Mock Bot widget */}
          <div className="md:col-span-4 bg-blue-50/40 rounded-2xl p-6 border-2 border-[#113669] shadow-[6px_6px_0px_0px_#113669] flex flex-col justify-between relative overflow-hidden group hover:-translate-y-1 transition-all duration-300 h-96">
            <div className="flex items-center justify-between">
              <div className="p-2 bg-[#1877F2]/10 rounded-xl border border-blue-200">
                <OfficialFacebookIcon size={24} />
              </div>

            </div>

            <div className="flex-1 my-3 bg-white border-2 border-[#113669] rounded-xl p-3 flex flex-col justify-between overflow-hidden shadow-[2px_2px_0px_0px_#113669]">
              <div className="space-y-2 overflow-y-auto max-h-36 pr-1 text-[10px] flex flex-col">
                {chatMessages.map((msg, i) => (
                  <div
                    key={i}
                    className={`p-2 rounded-xl max-w-[85%] leading-relaxed ${
                      msg.sender === "user"
                        ? "bg-[#1877F2] text-white ml-auto rounded-tr-none"
                        : "bg-slate-100 text-[#113669] rounded-tl-none border border-[#113669]/10 align-self-start"
                    }`}
                  >
                    {msg.text}
                  </div>
                ))}
                {isTyping && (
                  <div className="bg-slate-100 text-slate-400 p-2 rounded-xl rounded-tl-none max-w-[40px] text-center animate-pulse">
                    ...
                  </div>
                )}
              </div>

              <div className="space-y-1 pt-2 border-t border-slate-100 shrink-0">
                <div className="text-[8px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                  {t("contact.bento.botTapPrompt")}
                </div>
                <div className="flex flex-col gap-1">
                  <button
                    onClick={() =>
                      handleChatPromptClick(
                        t("contact.bento.botQ1") as string,
                        t("contact.bento.botA1") as string
                      )
                    }
                    className="text-[9px] bg-blue-50 hover:bg-blue-100 text-[#1877F2] font-semibold px-2 py-1 rounded border border-blue-100/50 text-left transition-all active:scale-95 whitespace-normal"
                  >
                    {t("contact.bento.botQ1")}
                  </button>
                  <button
                    onClick={() =>
                      handleChatPromptClick(
                        t("contact.bento.botQ2") as string,
                        t("contact.bento.botA2") as string
                      )
                    }
                    className="text-[9px] bg-blue-50 hover:bg-blue-100 text-[#1877F2] font-semibold px-2 py-1 rounded border border-blue-100/50 text-left transition-all active:scale-95 whitespace-normal"
                  >
                    {t("contact.bento.botQ2")}
                  </button>
                </div>
              </div>
            </div>

            <div>
              <a
                href={SOCIAL_LINKS.facebook}
                target="_blank"
                rel="noreferrer"
                className="w-full py-2.5 rounded-xl bg-[#1877F2] hover:bg-[#166fe5] text-white font-black text-xs uppercase tracking-widest flex items-center justify-center gap-1.5 border-2 border-[#113669] shadow-[3px_3px_0px_0px_#113669]"
              >
                <span>{t("contact.split.visitFacebook")}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
