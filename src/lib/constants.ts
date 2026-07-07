// ============================================================
// ToursPals — Business Constants
// Update these values with your actual social media links
// ============================================================

export const BUSINESS = {
  name: "Przygoda",
  tagline: "Adventure Awaits You!",
  whatsapp: "+201040541910", // Replace with your WhatsApp number
  email: "info@przygoda.com",
} as const;

export const SOCIAL_LINKS = {
  whatsapp: "https://wa.me/201040541910", // Replace with your number
  facebook: "https://web.facebook.com/profile.php?id=61591243902324", // Replace with your page
  instagram: "https://instagram.com/przygoda.eg", // Replace with your profile
} as const;

export type Locale = "pl" | "en";

export const LOCALES: {
  code: Locale;
  label: string;
  flag: string;
  dir: "ltr" | "rtl";
}[] = [
  { code: "pl", label: "Polski", flag: "🇵🇱", dir: "ltr" },
  { code: "en", label: "English", flag: "🇬🇧", dir: "ltr" },
];
