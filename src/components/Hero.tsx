"use client";

import { useLanguage } from "@/context/LanguageContext";
import { SOCIAL_LINKS } from "@/lib/constants";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

/* ─── image data ─── */
const FAN_CARDS = [
  { src: "/images/hero/1.jpg", rotate: -18, tx: -280 },
  { src: "/images/hero/2.jpg", rotate: -12, tx: -185 },
  { src: "/images/hero/3.jpg", rotate: -6, tx: -93 },
  { src: "/images/hero/4.jpg", rotate: 0, tx: 0 },
  { src: "/images/hero/5.jpg", rotate: 6, tx: 93 },
  { src: "/images/hero/6.jpg", rotate: 12, tx: 185 },
  { src: "/images/hero/7.jpg", rotate: 18, tx: 280 },
];

const SHOWCASE_CARDS = [
  { src: "/images/tours/sea/2.jpeg", z: 3 },
  { src: "/images/tours/safari/banner.JPG", z: 2 },
  { src: "/images/tours/history/banner.jpg", z: 1 },
];

const GRID_IMAGES = [
  "/images/family/1.jpg",
  "/images/family/2.jpg",
  "/images/family/3.jpg",
  "/images/family/4.jpg",
  "/images/family/5.jpg",
  "/images/family/6.jpg",
  "/images/family/7.jpg",
  "/images/family/8.jpg",
  "/images/family/9.jpg",
  "/images/family/10.jpg",
  "/images/family/11.jpg",
  "/images/family/12.jpg",
];

const MARQUEE_ITEMS = [
  {
    translationKey: "marquee.pyramidsTrip",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        {/* Ground line */}
        <path d="M0 42h48" strokeWidth="1.5" />
        {/* Large pyramid */}
        <path d="M18 42L30 12l12 30H18Z" fill="currentColor" fillOpacity="0.08" />
        <path d="M30 12l-4 30" strokeDasharray="2 2" strokeWidth="1" />
        <path d="M30 12l4 30" strokeDasharray="2 2" strokeWidth="1" />
        {/* Small pyramid behind */}
        <path d="M4 42l10-18 10 18H4Z" fill="currentColor" fillOpacity="0.15" />
        <path d="M14 24l-3 18" strokeDasharray="2 2" strokeWidth="1" />
        {/* Sphinx silhouette */}
        <path d="M36 42v-4h2v-2h1v-2h2v2h1v2h1v4" fill="currentColor" fillOpacity="0.12" />
        {/* Sun with rays */}
        <circle cx="40" cy="8" r="3.5" fill="currentColor" fillOpacity="0.25" stroke="currentColor" strokeWidth="1.5" />
        <line x1="40" y1="2" x2="40" y2="3.5" strokeWidth="1.2" />
        <line x1="40" y1="12.5" x2="40" y2="14" strokeWidth="1.2" />
        <line x1="34" y1="8" x2="35.5" y2="8" strokeWidth="1.2" />
        <line x1="44.5" y1="8" x2="46" y2="8" strokeWidth="1.2" />
        <line x1="35.8" y1="3.8" x2="36.8" y2="4.8" strokeWidth="1.2" />
        <line x1="43.2" y1="11.2" x2="44.2" y2="12.2" strokeWidth="1.2" />
        <line x1="35.8" y1="12.2" x2="36.8" y2="11.2" strokeWidth="1.2" />
        <line x1="43.2" y1="4.8" x2="44.2" y2="3.8" strokeWidth="1.2" />
        {/* Camel silhouette */}
        <path d="M6 38c0-1 .5-2 1-2.5s1-.5 1.5-.5c0-1 .5-2 1.5-2 .5 0 1 .5 1 1h.5c.5 0 1 .5 1 1v1c.3 0 .5.5.5 1v2" strokeWidth="1.2" fill="currentColor" fillOpacity="0.1" />
      </svg>
    ),
  },
  {
    translationKey: "marquee.luxorTour",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        {/* Ground / base platform */}
        <rect x="4" y="40" width="40" height="3" rx="0.5" fill="currentColor" fillOpacity="0.1" />
        <path d="M2 43h44" strokeWidth="1.5" />
        {/* Left column with capital */}
        <rect x="8" y="14" width="4" height="26" fill="currentColor" fillOpacity="0.06" />
        <rect x="7" y="12" width="6" height="3" rx="0.5" fill="currentColor" fillOpacity="0.12" />
        {/* Center column with capital */}
        <rect x="22" y="14" width="4" height="26" fill="currentColor" fillOpacity="0.06" />
        <rect x="21" y="12" width="6" height="3" rx="0.5" fill="currentColor" fillOpacity="0.12" />
        {/* Right column with capital */}
        <rect x="36" y="14" width="4" height="26" fill="currentColor" fillOpacity="0.06" />
        <rect x="35" y="12" width="6" height="3" rx="0.5" fill="currentColor" fillOpacity="0.12" />
        {/* Lintel / roof beam */}
        <rect x="5" y="7" width="38" height="5" rx="1" fill="currentColor" fillOpacity="0.1" />
        <path d="M5 7h38" strokeWidth="2" />
        {/* Hieroglyph decorations on columns */}
        <circle cx="10" cy="22" r="1" fill="currentColor" fillOpacity="0.3" />
        <path d="M9 26h2v3H9z" fill="currentColor" fillOpacity="0.2" />
        <circle cx="24" cy="22" r="1" fill="currentColor" fillOpacity="0.3" />
        <path d="M23 26h2v3h-2z" fill="currentColor" fillOpacity="0.2" />
        <circle cx="38" cy="22" r="1" fill="currentColor" fillOpacity="0.3" />
        <path d="M37 26h2v3h-2z" fill="currentColor" fillOpacity="0.2" />
        {/* Winged sun disc on top */}
        <circle cx="24" cy="4" r="2" fill="currentColor" fillOpacity="0.2" />
        <path d="M19 4c-2-.5-4 0-5 1" strokeWidth="1.2" />
        <path d="M29 4c2-.5 4 0 5 1" strokeWidth="1.2" />
      </svg>
    ),
  },
  {
    translationKey: "marquee.diving",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        {/* Diver body */}
        <circle cx="16" cy="12" r="4" fill="currentColor" fillOpacity="0.1" />
        {/* Mask on face */}
        <rect x="13" y="10" width="7" height="4" rx="1.5" fill="currentColor" fillOpacity="0.15" />
        <line x1="16.5" y1="10" x2="16.5" y2="14" strokeWidth="1" />
        {/* Snorkel tube */}
        <path d="M20 11c1-1 2-2 2-4" strokeWidth="1.5" />
        <circle cx="22" cy="6" r="1.5" fill="currentColor" fillOpacity="0.2" />
        {/* Body swimming pose */}
        <path d="M16 16c0 2 1 4 3 5l6 2" strokeWidth="2" />
        <path d="M25 23l4-2" strokeWidth="1.8" />
        <path d="M25 23l3 3" strokeWidth="1.8" />
        {/* Fins */}
        <path d="M29 21l4-1.5c1-.3 2 .5 1.5 1.5l-2 3" fill="currentColor" fillOpacity="0.1" strokeWidth="1.5" />
        {/* Bubbles trail */}
        <circle cx="12" cy="8" r="1.2" />
        <circle cx="9" cy="5" r="1.8" />
        <circle cx="7" cy="9" r="1" />
        <circle cx="5" cy="3" r="1.5" />
        {/* Fish */}
        <path d="M34 32c2-1.5 5-1.5 6.5 0 1.5 1.5 1.5 3 0 4.5-1.5 1.5-4.5 1.5-6.5 0" fill="currentColor" fillOpacity="0.08" strokeWidth="1.5" />
        <path d="M33 34.5l-3-2.5v5Z" fill="currentColor" fillOpacity="0.1" />
        <circle cx="38" cy="33.5" r="0.8" fill="currentColor" />
        {/* Coral */}
        <path d="M4 46c0-4 1-7 2-8s2 1 3-2c1-3 2 0 3 1s1 4 1 9" strokeWidth="1.5" fill="currentColor" fillOpacity="0.06" />
        {/* Seaweed */}
        <path d="M40 46c0-3-.5-6-1-8s1-3 1-5" strokeWidth="1.2" />
        <path d="M43 46c0-2-.5-5-1-7" strokeWidth="1.2" />
      </svg>
    ),
  },
  {
    translationKey: "marquee.safari",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        {/* Sun with rays */}
        <circle cx="38" cy="10" r="4" fill="currentColor" fillOpacity="0.2" strokeWidth="1.5" />
        <line x1="38" y1="3" x2="38" y2="5" strokeWidth="1.2" />
        <line x1="38" y1="15" x2="38" y2="17" strokeWidth="1.2" />
        <line x1="31" y1="10" x2="33" y2="10" strokeWidth="1.2" />
        <line x1="43" y1="10" x2="45" y2="10" strokeWidth="1.2" />
        {/* Desert dunes */}
        <path d="M0 40c6-6 14-6 22 0" strokeWidth="1.5" />
        <path d="M16 40c8-5 16-5 24 0" strokeWidth="1.5" />
        <path d="M30 40c5-3 10-3 18 0" strokeWidth="1.5" />
        {/* Jeep body */}
        <path d="M6 34h18v-6c0-1-.5-2-1.5-2H14l-2-3H9l-1 3H7.5C6.5 26 6 27 6 28v6Z" fill="currentColor" fillOpacity="0.1" strokeWidth="1.8" />
        {/* Windshield */}
        <path d="M9 26l-1 3h6l-2-3" fill="currentColor" fillOpacity="0.15" strokeWidth="1" />
        {/* Roof rack */}
        <line x1="14" y1="25" x2="22" y2="25" strokeWidth="1.5" />
        <line x1="15" y1="23" x2="15" y2="25" strokeWidth="1.2" />
        <line x1="21" y1="23" x2="21" y2="25" strokeWidth="1.2" />
        {/* Headlight */}
        <circle cx="23" cy="31" r="1" fill="currentColor" fillOpacity="0.3" />
        {/* Wheels */}
        <circle cx="10" cy="36" r="3" strokeWidth="2" />
        <circle cx="10" cy="36" r="1" fill="currentColor" fillOpacity="0.3" />
        <circle cx="22" cy="36" r="3" strokeWidth="2" />
        <circle cx="22" cy="36" r="1" fill="currentColor" fillOpacity="0.3" />
        {/* Cactus */}
        <path d="M38 38v-10" strokeWidth="2" />
        <path d="M38 32c-3 0-4-1-4-3" strokeWidth="1.5" />
        <path d="M38 30c3 0 4-1 4-3" strokeWidth="1.5" />
        {/* Ground */}
        <path d="M0 42h48" strokeWidth="1" />
      </svg>
    ),
  },
  {
    translationKey: "marquee.seaTrips",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        {/* Main sail */}
        <path d="M24 6v22h10Z" fill="currentColor" fillOpacity="0.1" strokeWidth="1.8" />
        {/* Jib sail */}
        <path d="M24 8v18h-7Z" fill="currentColor" fillOpacity="0.06" strokeWidth="1.5" />
        {/* Mast */}
        <line x1="24" y1="4" x2="24" y2="28" strokeWidth="2" />
        {/* Flag */}
        <path d="M24 4l5 2-5 2" fill="currentColor" fillOpacity="0.2" strokeWidth="1" />
        {/* Hull */}
        <path d="M8 28h32l-4 8H12Z" fill="currentColor" fillOpacity="0.12" strokeWidth="2" />
        {/* Deck line */}
        <path d="M12 30h24" strokeWidth="1" />
        {/* Porthole */}
        <circle cx="20" cy="32" r="1.5" fill="currentColor" fillOpacity="0.15" />
        <circle cx="28" cy="32" r="1.5" fill="currentColor" fillOpacity="0.15" />
        {/* Waves */}
        <path d="M2 40c3-2 5-2 8 0s5 2 8 0 5-2 8 0 5 2 8 0 5-2 6 0" strokeWidth="1.8" />
        <path d="M0 44c3-1.5 5-1.5 8 0s5 1.5 8 0 5-1.5 8 0 5 1.5 8 0 5-1.5 8 0" strokeWidth="1.2" strokeOpacity="0.5" />
        {/* Birds */}
        <path d="M4 10c1-1 2-1 3 0" strokeWidth="1.2" />
        <path d="M9 8c1-1 2-1 3 0" strokeWidth="1.2" />
        <path d="M6 14c.8-.8 1.5-.8 2.3 0" strokeWidth="1" />
      </svg>
    ),
  },
];

function useTyping(text: string, speed = 40, delay = 800) {
  const [displayed, setDisplayed] = useState("");
  const [started, setStarted] = useState(false);
  const [key, setKey] = useState(0);

  useEffect(() => {
    const t = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(t);
  }, [delay]);

  useEffect(() => {
    if (!started) return;
    const interval = setInterval(() => {
      setKey((prev) => prev + 1);
    }, 7000);
    return () => clearInterval(interval);
  }, [started]);

  useEffect(() => {
    if (!started) return;
    setDisplayed("");
    let i = 0;
    const iv = setInterval(() => {
      i++;
      setDisplayed(text.slice(0, i));
      if (i >= text.length) clearInterval(iv);
    }, speed);
    return () => clearInterval(iv);
  }, [text, speed, started, key]);

  return displayed;
}

/* ─── scroll visibility hook ─── */
function useInView(threshold = 0.2) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.unobserve(el); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

/* ═══════════════════════════════════════════════
   HERO – multi-section animated landing
   ═══════════════════════════════════════════════ */
export default function Hero() {
  const { t } = useLanguage();
  const subtitle = useTyping(t("hero.subheadline") as string, 35, 1200);

  return (
    <div id="hero">
      {/* ── Section 1: Fan Cards Hero ── */}
      <HeroFanSection title={t("hero.headline")} subtitle={subtitle} cta={t("hero.cta")} readMore={t("showcase.readMore")} />

      {/* ── Section 2: Showcase (left text + right cascading cards) ── */}
      <ShowcaseSection t={t} />

      {/* ── Section 3: Marquee thumbnails ── */}
      <MarqueeStrip />

      {/* ── Section 4: Gallery Grid ── */}
      <GalleryGrid t={t} />

      {/* ── Section 5: Orange Marquee Banner ── */}
      <MarqueeBanner />

      {/* ── Section 6: Feature Cards ── */}
      <FeatureCards t={t} />
    </div>
  );
}

/* ─────────────────────────────────────────────
   Section 1 – Fan of tilted cards
   ───────────────────────────────────────────── */
function HeroFanSection({ title, subtitle, cta, readMore }: { title: string; subtitle: string; cta: string; readMore: string }) {
  const [loaded, setLoaded] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0); // start from first card, cycle in order
  const cardCount = FAN_CARDS.length;

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  // Start cycling in order after initial load animation completes
  useEffect(() => {
    if (!loaded) return;
    let intervalId: ReturnType<typeof setInterval> | null = null;
    const delayId = setTimeout(() => {
      intervalId = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % cardCount);
      }, 5000);
    }, 1800);
    return () => {
      clearTimeout(delayId);
      if (intervalId) clearInterval(intervalId);
    };
  }, [loaded, cardCount]);

  // Compute position for each card relative to activeIndex
  const getCardStyle = (i: number) => {
    // Calculate the shortest distance on the circular array
    let offset = i - activeIndex;
    if (offset > cardCount / 2) offset -= cardCount;
    if (offset < -cardCount / 2) offset += cardCount;

    const isCenter = offset === 0;
    const absOffset = Math.abs(offset);

    // Positions: center card at 0, neighbors fan out
    const tx = offset * 95;
    const rotate = offset * 6;
    const scale = isCenter ? 1.15 : Math.max(0.7, 1 - absOffset * 0.1);
    const z = 10 - absOffset;

    if (!loaded) {
      return {
        transform: `translate(-50%, 80%) translateX(0px) rotate(0deg) scale(0.8)`,
        opacity: 0,
        transitionDelay: `${i * 80}ms`,
        zIndex: 1,
      };
    }

    return {
      transform: `translate(-50%, -50%) translateX(${tx}px) rotate(${rotate}deg) scale(${scale})`,
      opacity: 1,
      transitionDelay: `0ms`,
      zIndex: z,
      filter: isCenter ? 'brightness(1.05)' : `brightness(${1 - absOffset * 0.05})`,
    };
  };

  return (
    <section className="relative min-h-screen bg-[#f5f5f5] flex flex-col items-center justify-center overflow-hidden px-6 pt-28 sm:pt-36 pb-12">
      {/* Heading */}
      <h1
        className={`text-4xl sm:text-5xl md:text-7xl font-black text-[#113669] text-center leading-tight max-w-4xl mb-8 uppercase italic tracking-tight transition-all duration-1000 ${
          loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        {title.split(/(Marsa Alam)/gi).map((part, i) => 
          part.toLowerCase() === "marsa alam" ? (
            <span key={i} className="text-[#f58a2d]">{part}</span>
          ) : (
            part
          )
        )}
      </h1>

      {/* Fan of Cards – Animated Carousel */}
      <div className="relative w-full max-w-3xl h-[260px] sm:h-[320px] md:h-[380px] mb-10">
        {FAN_CARDS.map((card, i) => (
          <div
            key={i}
            className="absolute top-1/2 left-1/2 w-[140px] h-[190px] sm:w-[160px] sm:h-[220px] md:w-[180px] md:h-[250px] rounded-2xl overflow-hidden border-2 border-[#113669] shadow-[4px_4px_0px_0px_#113669] transition-all duration-[800ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)]"
            style={getCardStyle(i)}
          >
            <Image
              src={card.src}
              alt="Tour"
              fill
              sizes="180px"
              className="object-cover"
            />
            {/* Active card glow ring */}
            {activeIndex === i && loaded && (
              <div className="absolute inset-0 rounded-2xl ring-2 ring-[#f58a2d] ring-offset-2 ring-offset-transparent transition-all duration-500" />
            )}
          </div>
        ))}
      </div>

      {/* Subtitle typing */}
      <p
        className={`text-[#f58a2d] font-bold text-base sm:text-lg text-center max-w-xl mb-8 min-h-[28px] transition-opacity duration-700 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      >
        {subtitle}
        <span className="inline-block w-[2px] h-5 bg-[#f58a2d] ml-1 animate-pulse" />
      </p>

      {/* Buttons */}
      <div
        className={`flex items-center gap-4 transition-all duration-700 delay-[1400ms] ${
          loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        <a
          href={SOCIAL_LINKS.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-3.5 bg-[#113669] text-white text-xs font-black uppercase tracking-widest rounded-xl border-2 border-[#113669] shadow-[3px_3px_0px_0px_#113669] hover:bg-[#f58a2d] hover:border-[#f58a2d] transition-all duration-300"
        >
          {cta}
        </a>
        <a
          href="/reviews"
          className="inline-block px-8 py-3.5 bg-white text-[#113669] text-xs font-black uppercase tracking-widest rounded-xl border-2 border-[#113669] shadow-[3px_3px_0px_0px_#113669] hover:bg-[#113669] hover:text-white transition-all duration-300"
        >
          {readMore}
        </a>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   Section 2 – Showcase: left text + cascading cards
   ───────────────────────────────────────────── */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function ShowcaseSection({ t }: { t: (k: string) => any }) {
  const { ref, visible } = useInView(0.25);
  const [activeCard, setActiveCard] = useState(0);
  const cardCount = SHOWCASE_CARDS.length;

  // Cycle cards in order every 5 seconds once visible
  useEffect(() => {
    if (!visible) return;
    let intervalId: ReturnType<typeof setInterval> | null = null;
    const delayId = setTimeout(() => {
      intervalId = setInterval(() => {
        setActiveCard((prev) => (prev + 1) % cardCount);
      }, 5000);
    }, 1200);
    return () => {
      clearTimeout(delayId);
      if (intervalId) clearInterval(intervalId);
    };
  }, [visible, cardCount]);

  // Detect mobile / tablet for responsive card sizing
  const [screenSize, setScreenSize] = useState<'mobile' | 'tablet' | 'desktop'>('desktop');
  useEffect(() => {
    const check = () => {
      const w = window.innerWidth;
      setScreenSize(w < 480 ? 'mobile' : w < 768 ? 'tablet' : 'desktop');
    };
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  // Compute symmetric position for each card relative to the active one
  const getShowcaseStyle = (i: number) => {
    // Shortest circular distance (negative = left, positive = right)
    let offset = i - activeCard;
    if (offset > cardCount / 2) offset -= cardCount;
    if (offset < -cardCount / 2) offset += cardCount;

    const absOffset = Math.abs(offset);
    const isActive = offset === 0;

    // Responsive sizes tuned per breakpoint
    const sizes = {
      mobile:  { activeW: 200, activeH: 265, baseW: 155, baseH: 210, shrinkW: 18, shrinkH: 22, minW: 120, minH: 165 },
      tablet:  { activeW: 230, activeH: 310, baseW: 185, baseH: 250, shrinkW: 20, shrinkH: 28, minW: 145, minH: 195 },
      desktop: { activeW: 270, activeH: 350, baseW: 230, baseH: 300, shrinkW: 25, shrinkH: 35, minW: 180, minH: 230 },
    };
    const s = sizes[screenSize];

    const width = isActive ? s.activeW : Math.max(s.minW, s.baseW - absOffset * s.shrinkW);
    const height = isActive ? s.activeH : Math.max(s.minH, s.baseH - absOffset * s.shrinkH);

    // Center the stack horizontally; offset cards spread left/right
    const spreadMap = { mobile: 18, tablet: 15, desktop: 16 };
    const left = `${50 + offset * spreadMap[screenSize]}%`;

    // Active card slightly higher; others step down gently
    const stepMap = { mobile: 4, tablet: 5, desktop: 6 };
    const baseTop = screenSize === 'mobile' ? 8 : 10;
    const top = `${baseTop + absOffset * stepMap[screenSize]}%`;

    // Active card on top, others behind based on distance
    const z = 10 - absOffset;

    // Scale: active pops, others recede
    const scaleActive = screenSize === 'mobile' ? 1.03 : 1.05;
    const scaleStep = screenSize === 'mobile' ? 0.04 : 0.03;

    return {
      width: `${width}px`,
      height: `${height}px`,
      left,
      top,
      zIndex: z,
      transform: `translateX(-50%) scale(${isActive ? scaleActive : Math.max(0.85, 1 - absOffset * scaleStep)})`,
      filter: isActive ? 'brightness(1.05)' : `brightness(${Math.max(0.82, 1 - absOffset * 0.05)})`,
    };
  };

  return (
    <section ref={ref} className="relative bg-[#f5f5f5] py-16 sm:py-20 md:py-28 px-4 sm:px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-10 lg:gap-20">
        {/* Left text */}
        <div className={`flex-1 max-w-xl text-center lg:text-left transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <p className="text-xs font-bold tracking-[0.25em] text-[#113669]/60 uppercase mb-4">{t("showcase.tagline")}</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#113669] leading-tight uppercase italic tracking-tight mb-2">
            {t("showcase.heading1")}
          </h2>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight uppercase tracking-tight mb-2">
            <span className="text-[#f58a2d] not-italic">{t("showcase.heading2")}</span>
          </h2>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#113669] leading-tight uppercase italic tracking-tight mb-8">
            {t("showcase.heading3")}
          </h2>

          <p className="text-slate-600 text-sm leading-relaxed mb-8 max-w-md mx-auto lg:mx-0">
            {t("about.description")}
          </p>

          <div className="flex items-center justify-center lg:justify-start gap-4">
            <a
              href={SOCIAL_LINKS.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-7 py-3 bg-[#113669] text-white text-xs font-black uppercase tracking-widest rounded-xl border-2 border-[#113669] shadow-[3px_3px_0px_0px_#113669] hover:bg-[#f58a2d] hover:border-[#f58a2d] transition-all duration-300"
            >
              {t("hero.facebook")}
            </a>
            <a
              href={SOCIAL_LINKS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-7 py-3 bg-white text-[#113669] text-xs font-black uppercase tracking-widest rounded-xl border-2 border-[#113669] shadow-[3px_3px_0px_0px_#113669] hover:bg-[#113669] hover:text-white transition-all duration-300"
            >
              {t("hero.instagram")}
            </a>
          </div>
        </div>

        {/* Right cascading cards – animated carousel */}
        <div className="flex-1 relative min-h-[380px] sm:min-h-[420px] md:min-h-[500px] w-full max-w-[500px] lg:max-w-none mx-auto">
          {SHOWCASE_CARDS.map((card, i) => (
            <div
              key={i}
              className={`absolute rounded-2xl overflow-hidden border-2 border-[#113669] shadow-[6px_6px_0px_0px_#113669] transition-all duration-[900ms] ease-[cubic-bezier(0.25,0.46,0.45,0.94)] hover:scale-105 ${
                visible ? "opacity-100" : "opacity-0 translate-y-20"
              }`}
              style={getShowcaseStyle(i)}
            >
              <Image src={card.src} alt="Tour" fill sizes="(max-width: 480px) 200px, (max-width: 768px) 230px, 280px" className="object-cover" />
              {/* Active card subtle glow ring */}
              {activeCard === i && visible && (
                <div className="absolute inset-0 rounded-2xl ring-2 ring-[#f58a2d] ring-offset-2 ring-offset-transparent transition-all duration-500" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   Section 3 – Scrolling thumbnail marquee
   ───────────────────────────────────────────── */
function MarqueeStrip() {
  const allImages = [...GRID_IMAGES, ...GRID_IMAGES];
  return (
    <section className="bg-[#f5f5f5] py-10 overflow-hidden">
      <div className="flex animate-[marquee_40s_linear_infinite] gap-4 w-max py-2">
        {allImages.map((src, i) => (
          <div
            key={i}
            className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden shrink-0 border-2 border-[#113669] shadow-[4px_4px_0px_0px_#113669] hover:-translate-y-1 transition-all duration-300"
          >
            <Image src={src} alt="Tour" width={96} height={96} className="object-cover w-full h-full" />
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   Section 4 – Gallery Grid (5 cols, 3 rows, center enlarged)
   ───────────────────────────────────────────── */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function GalleryGrid({ t }: { t: (k: string) => any }) {
  const { ref, visible } = useInView(0.15);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const handlePrev = (e?: React.MouseEvent | React.TouchEvent) => {
    if (e) e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev === null ? null : (prev - 1 + GRID_IMAGES.length) % GRID_IMAGES.length));
    }
  };

  const handleNext = (e?: React.MouseEvent | React.TouchEvent) => {
    if (e) e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((prev) => (prev === null ? null : (prev + 1) % GRID_IMAGES.length));
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart === null || touchEnd === null) return;
    const distance = touchStart - touchEnd;
    const minSwipeDistance = 50;
    if (distance > minSwipeDistance) {
      handleNext();
    } else if (distance < -minSwipeDistance) {
      handlePrev();
    }
  };

  return (
    <section ref={ref} className="bg-[#f5f5f5] py-20 md:py-28 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4">
          {GRID_IMAGES.map((src, i) => {
            const isCenter = i === 7; // center card
            return (
              <div
                key={i}
                onClick={() => setLightboxIndex(i)}
                className={`relative rounded-2xl overflow-hidden border-2 border-[#113669] shadow-[4px_4px_0px_0px_#113669] transition-all duration-300 group cursor-pointer hover:-translate-y-1 ${
                  isCenter
                    ? "col-span-1 row-span-1 sm:col-span-2 sm:row-span-2 sm:min-h-[320px] z-10 aspect-square sm:aspect-auto"
                    : "aspect-square"
                } ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                <Image src={src} alt="Tour" fill sizes={isCenter ? "400px" : "200px"} className="object-cover group-hover:scale-105 transition-transform duration-700" />

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#113669]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white text-[10px] font-black uppercase tracking-widest bg-[#113669] px-3.5 py-1.5 border-2 border-white rounded-xl shadow-[3px_3px_0px_0px_white] scale-75 group-hover:scale-100 transition-all duration-300">
                    {t("common.view")}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* View More Memories CTA Button */}
        <div className="flex justify-center mt-12">
          <a
            href="/memories"
            className="inline-block px-8 py-3.5 bg-[#113669] text-white text-xs font-black uppercase tracking-widest rounded-xl border-2 border-[#113669] shadow-[3px_3px_0px_0px_#113669] hover:bg-[#f58a2d] hover:border-[#f58a2d] transition-all duration-300"
          >
            {t("gallery.viewMore")}
          </a>
        </div>
      </div>

      {/* Lightbox Modal overlay */}
      {lightboxIndex !== null && (
        <div
          onClick={() => setLightboxIndex(null)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          className="fixed inset-0 bg-[#113669]/90 backdrop-blur-md z-[9999] flex items-center justify-center p-4 cursor-zoom-out animate-fade-in"
        >
          {/* Close button */}
          <button
            onClick={() => setLightboxIndex(null)}
            className="absolute top-4 right-4 text-white hover:text-[#f58a2d] transition-colors p-2 bg-[#113669] border-2 border-white rounded-full shadow-[3px_3px_0px_0px_white] z-50"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>

          {/* Navigation arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white text-[#113669] p-3 rounded-full border-2 border-[#113669] hover:bg-[#f58a2d] hover:text-white transition-colors z-50 shadow-[2px_2px_0px_0px_#113669] hidden sm:block"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
          </button>
          <button
            onClick={handleNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white text-[#113669] p-3 rounded-full border-2 border-[#113669] hover:bg-[#f58a2d] hover:text-white transition-colors z-50 shadow-[2px_2px_0px_0px_#113669] hidden sm:block"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </button>

          {/* Enlarged image container */}
          <div className="relative w-full max-w-[500px] aspect-square flex items-center justify-center p-2">
            <Image
              key={lightboxIndex}
              src={GRID_IMAGES[lightboxIndex]}
              alt="Client memory enlarged"
              fill
              sizes="(max-width: 640px) 100vw, 500px"
              className="object-cover border-4 border-white rounded-2xl shadow-[6px_6px_0px_0px_#f58a2d] animate-[fadeInScale_0.3s_ease-out]"
            />
          </div>
        </div>
      )}
    </section>
  );
}

/* ─────────────────────────────────────────────
   Section 5 – Orange Marquee Banner
   ───────────────────────────────────────────── */
function MarqueeBanner() {
  const { t } = useLanguage();
  const items = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS];
  return (
    <section className="bg-[#f58a2d] py-6 overflow-hidden">
      <div className="flex animate-[marquee_30s_linear_infinite] gap-8 w-max items-center">
        {items.map((item, i) => (
          <span key={i} className="flex items-center text-white text-2xl sm:text-3xl md:text-4xl font-extrabold whitespace-nowrap">
            <span className="mr-3 opacity-90">{item.icon}</span>
            {t(item.translationKey)}
            <span className="mx-6 text-white/40">✦</span>
          </span>
        ))}
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   Section 6 – Two-column Feature Cards
   ───────────────────────────────────────────── */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function FeatureCards({ t }: { t: (k: string) => any }) {
  const { ref, visible } = useInView(0.2);

  return (
    <section id="tours" ref={ref} className="bg-[#f5f5f5] py-20 md:py-28 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-5">
        {/* Card 1: Sea Tours */}
        <div
          className={`relative rounded-2xl overflow-hidden min-h-[450px] md:min-h-[550px] group cursor-pointer transition-all duration-700 border-2 border-[#113669] shadow-[6px_6px_0px_0px_#113669] hover:-translate-y-1 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          } md:col-span-4`}
        >
          <Image
            src="/images/tours/sea/2.jpeg"
            alt="Sea Tours"
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#113669]/90 via-[#113669]/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10">

            <h3 className="text-white text-2xl md:text-3xl font-extrabold mb-2 uppercase italic tracking-tight font-black">
              {t("tours.sea.title")}
            </h3>
            <p className="text-white/80 text-xs leading-relaxed mb-6 max-w-sm">
              {t("tours.sea.desc")}
            </p>
            <a
              href="/adventures?category=sea"
              className="inline-block px-6 py-2.5 bg-white text-[#113669] text-xs font-black uppercase tracking-widest rounded-xl border-2 border-[#113669] shadow-[3px_3px_0px_0px_#113669] hover:bg-[#f58a2d] hover:text-white transition-all duration-300"
            >
              {t("tours.readMore")}
            </a>
          </div>
        </div>

        {/* Card 2: Desert Safari */}
        <div
          className={`relative rounded-2xl overflow-hidden min-h-[450px] md:min-h-[550px] group cursor-pointer transition-all duration-700 border-2 border-[#113669] shadow-[6px_6px_0px_0px_#113669] hover:-translate-y-1 delay-200 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          } md:col-span-4`}
        >
          <Image
            src="/images/tours/safari/banner.JPG"
            alt="Desert Safari"
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/80 via-transparent to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10">

            <h3 className="text-white text-2xl md:text-3xl font-extrabold mb-2 uppercase italic tracking-tight font-black">
              {t("tours.safari.title")}
            </h3>
            <p className="text-white/80 text-xs leading-relaxed mb-6 max-w-sm">
              {t("tours.safari.desc")}
            </p>
            <a
              href="/adventures?category=safari"
              className="inline-block px-6 py-2.5 bg-[#113669] text-white text-xs font-black uppercase tracking-widest rounded-xl border-2 border-white shadow-[3px_3px_0px_0px_#fff] hover:bg-[#f58a2d] transition-all duration-300"
            >
              {t("tours.readMore")}
            </a>
          </div>
        </div>

        {/* Card 3: Adventures */}
        <div
          className={`relative rounded-2xl overflow-hidden min-h-[450px] md:min-h-[550px] group cursor-pointer transition-all duration-700 border-2 border-[#113669] shadow-[6px_6px_0px_0px_#113669] hover:-translate-y-1 delay-400 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          } md:col-span-4`}
        >
          <Image
            src="/images/tours/history/banner.jpg"
            alt="History Tours"
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#f58a2d]/90 via-[#f58a2d]/25 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10">

            <h3 className="text-white text-2xl md:text-3xl font-extrabold mb-2 uppercase italic tracking-tight font-black">
              {t("tours.adventure.title")}
            </h3>
            <p className="text-white/80 text-xs leading-relaxed mb-6 max-w-sm">
              {t("tours.adventure.desc")}
            </p>
            <a
              href="/adventures?category=history"
              className="inline-block px-6 py-2.5 bg-white text-[#113669] text-xs font-black uppercase tracking-widest rounded-xl border-2 border-[#113669] shadow-[3px_3px_0px_0px_#113669] hover:bg-[#113669] hover:text-white transition-all duration-300"
            >
              {t("tours.readMore")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
