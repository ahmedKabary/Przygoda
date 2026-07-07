"use client";

import React, { createContext, useContext, useState, useEffect, useCallback } from "react";
import type { Locale } from "@/lib/constants";

import en from "@/i18n/en.json";
import pl from "@/i18n/pl.json";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const dictionaries: Record<Locale, any> = { en, pl };

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  t: (key: string) => any;
  dir: "ltr" | "rtl";
  hasChosenLanguage: boolean;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("pl");
  const [hasChosenLanguage, setHasChosenLanguage] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("przygoda-locale") as Locale | null;
    if (stored && dictionaries[stored]) {
      setLocaleState(stored);
    }
    setMounted(true);
  }, []);

  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale);
    setHasChosenLanguage(true);
    localStorage.setItem("przygoda-locale", newLocale);
  }, []);

  const dir = "ltr";

  const t = useCallback(
    (key: string) => {
      const keys = key.split(".");
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      let value: any = dictionaries[locale];
      for (const k of keys) {
        value = value?.[k];
      }
      return value ?? key;
    },
    [locale]
  );

  // Update document direction and lang when locale changes
  useEffect(() => {
    if (mounted) {
      document.documentElement.setAttribute("dir", dir);
      document.documentElement.setAttribute("lang", locale);
    }
  }, [dir, locale, mounted]);

  if (!mounted) {
    return null; // Avoid hydration mismatch
  }

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t, dir, hasChosenLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
