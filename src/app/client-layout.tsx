"use client";

import { useLanguage } from "@/context/LanguageContext";
import LanguageGate from "@/components/LanguageGate";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const { hasChosenLanguage } = useLanguage();

  return (
    <>
      <LanguageGate />
      {hasChosenLanguage && (
        <>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <WhatsAppButton />
        </>
      )}
    </>
  );
}
