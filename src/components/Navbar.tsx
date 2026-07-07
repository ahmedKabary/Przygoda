"use client";

import { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { LOCALES } from "@/lib/constants";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";

export default function Navbar() {
  const { locale, setLocale, t, dir } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const currentLocale = LOCALES.find((l) => l.code === locale)!;

  const navLinks = [
    { href: "/about", label: t("nav.about") },
    { href: "/adventures", label: t("nav.tours") },
    { href: "/transfers", label: t("nav.transfers") },
    { href: "/memories", label: t("nav.memories") },
    { href: "/contact", label: t("nav.contact") },
  ];

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    if (href.startsWith("/#")) {
      const hash = href.substring(1); // e.g. "#tours"
      if (pathname === "/") {
        const el = document.querySelector(hash);
        el?.scrollIntoView({ behavior: "smooth" });
      } else {
        router.push(href);
      }
    } else {
      router.push(href);
    }
  };

  const handleLogoClick = () => {
    if (pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      router.push("/");
    }
  };

  return (
    <nav
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-7xl transition-all duration-300 rounded-2xl bg-white border-2 border-[#113669] ${
        scrolled
          ? "shadow-[4px_4px_0px_0px_#113669] py-1.5"
          : "shadow-[6px_6px_0px_0px_#113669] py-3"
      }`}
    >
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12 sm:h-14">
          {/* Logo */}
          <div
            className="flex items-center gap-3 shrink-0 cursor-pointer hover:scale-105 transition-transform duration-300"
            onClick={handleLogoClick}
          >
            <div className="relative w-8 h-8 sm:w-10 sm:h-10">
              <Image
                src="/branding/logo.png"
                alt="Przygoda"
                fill
                sizes="48px"
                className="object-contain"
              />
            </div>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-1.5">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={`px-4 py-2 text-xs font-black uppercase tracking-widest rounded-xl transition-all duration-300 ${
                    isActive
                      ? "text-[#f58a2d] bg-[#113669]/5"
                      : "text-[#113669] hover:text-[#f58a2d] hover:bg-[#113669]/5"
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </div>

          {/* Right side: Home + Lang + Mobile */}
          <div className="flex items-center gap-3">
            {/* Language Switcher */}
            <div className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center justify-center gap-2 px-3 h-10 rounded-xl bg-white text-[#113669] text-xs font-black uppercase tracking-wider border-2 border-[#113669] shadow-[2px_2px_0px_0px_#113669] hover:bg-[#113669] hover:text-white transition-all duration-300"
              >
                <span className="text-base">{currentLocale.flag}</span>
                <span className="hidden sm:inline text-[10px] tracking-wide uppercase">{currentLocale.code}</span>
                <svg
                  className={`w-3.5 h-3.5 transition-transform duration-300 ${langOpen ? "rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {langOpen && (
                <>
                  <div className="fixed inset-0 z-40" onClick={() => setLangOpen(false)} />
                  <div
                    className={`absolute top-full mt-3 z-50 w-44 py-2 rounded-xl bg-white border-2 border-[#113669] shadow-[4px_4px_0px_0px_#113669] ${
                      dir === "rtl" ? "left-0" : "right-0"
                    }`}
                  >
                    {LOCALES.map((loc) => (
                      <button
                        key={loc.code}
                        onClick={() => {
                          setLocale(loc.code);
                          setLangOpen(false);
                        }}
                        className={`w-full flex items-center gap-3 px-4 py-2 text-xs font-black uppercase tracking-wider transition-colors duration-200 ${
                          locale === loc.code
                            ? "text-[#f58a2d] bg-[#f58a2d]/5"
                            : "text-[#113669] hover:text-[#f58a2d] hover:bg-[#113669]/5"
                        }`}
                      >
                        <span className="text-base">{loc.flag}</span>
                        <span>{loc.label}</span>
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Home Icon Button */}
            <button
              onClick={() => handleNavClick("/")}
              className={`flex items-center justify-center w-10 h-10 rounded-xl bg-white border-2 border-[#113669] shadow-[2px_2px_0px_0px_#113669] hover:bg-[#113669]/5 transition-all duration-300 ${
                pathname === "/" ? "text-[#f58a2d]" : "text-[#113669]"
              }`}
              aria-label="Home"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5 h-5"
              >
                <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
            </button>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden flex items-center justify-center w-10 h-10 text-[#113669] hover:text-[#f58a2d] transition-all rounded-xl border-2 border-[#113669] shadow-[2px_2px_0px_0px_#113669] bg-white hover:bg-[#113669]/5"
              aria-label="Toggle menu"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          mobileOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="border-t-2 border-[#113669]/10 px-6 py-4 space-y-1.5 bg-white rounded-b-2xl">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`block w-full text-start px-4 py-3 text-xs font-black uppercase tracking-widest rounded-xl transition-all ${
                  isActive
                    ? "text-[#f58a2d] bg-[#113669]/5"
                    : "text-[#113669] hover:text-[#f58a2d] hover:bg-[#113669]/5"
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
