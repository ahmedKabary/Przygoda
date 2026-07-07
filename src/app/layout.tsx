import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { LanguageProvider } from "@/context/LanguageContext";
import ClientLayout from "./client-layout";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Przygoda — Adventure Awaits You!",
  description:
    "Discover the wonders of Egypt with Przygoda. Sea tours, desert safaris, quad biking, and unforgettable adventures. Book your next trip today!",
  keywords: [
    "Egypt tours",
    "Red Sea tours",
    "desert safari Egypt",
    "adventure tours",
    "Przygoda",
    "snorkeling Egypt",
    "quad biking Egypt",
  ],
  openGraph: {
    title: "Przygoda — Adventure Awaits You!",
    description:
      "Discover the wonders of Egypt with Przygoda. Sea tours, desert safaris, quad biking, and unforgettable adventures.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      dir="ltr"
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <LanguageProvider>
          <ClientLayout>{children}</ClientLayout>
        </LanguageProvider>
      </body>
    </html>
  );
}
