"use client";

import { useEffect, useState } from "react";
import home from "../../data/home.json";

/* Icon set — keyed by name from JSON */
function ServiceIcon({ name, className }: { name: string; className?: string }) {
  const props = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className,
  };

  switch (name) {
    case "web":
      return (
        <svg {...props}>
          <path d="M4 5.5A1.5 1.5 0 0 1 5.5 4h13A1.5 1.5 0 0 1 20 5.5v9A1.5 1.5 0 0 1 18.5 16h-13A1.5 1.5 0 0 1 4 14.5v-9Z" />
          <path d="M8 20h8" />
          <path d="M12 16v4" />
        </svg>
      );
    case "mobile":
      return (
        <svg {...props}>
          <rect x="7" y="3" width="10" height="18" rx="2" />
          <path d="M10.5 18h3" />
        </svg>
      );
    case "code":
      return (
        <svg {...props}>
          <path d="m8 9-4 3 4 3" />
          <path d="m16 9 4 3-4 3" />
          <path d="m14 5-4 14" />
        </svg>
      );
    case "design":
      return (
        <svg {...props}>
          <circle cx="12" cy="12" r="8.5" />
          <circle cx="8.5" cy="9" r="1" />
          <circle cx="15.5" cy="8" r="1" />
          <circle cx="17" cy="13.5" r="1" />
          <path d="M7 15.5c1.2 1.6 2.8 2.5 5 2.5" />
        </svg>
      );
    case "support":
      return (
        <svg {...props}>
          <path d="M4 13v-1a8 8 0 0 1 16 0v1" />
          <path d="M4 13h2v5H5a1 1 0 0 1-1-1v-4Z" />
          <path d="M20 13h-2v5h1a1 1 0 0 0 1-1v-4Z" />
          <path d="M18 18c-.8 1.4-2.1 2-4 2h-2" />
        </svg>
      );
    default:
      return null;
  }
}

export default function HeroSection() {
  const hero = home.hero;
  const SERVICE_ROW = hero.serviceRow;
  const HERO_IMAGES = hero.images;

  const [heroIndex, setHeroIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setHeroIndex((i) => (i + 1) % HERO_IMAGES.length);
    }, hero.imageRotateMs ?? 1500);
    return () => clearInterval(id);
  }, [HERO_IMAGES.length, hero.imageRotateMs]);

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#f8f9fb] px-5 pb-4 sm:px-6 sm:pb-18 md:px-10 lg:min-h-[calc(100vh-80px)] lg:py-12"
    >
      <div className="pointer-events-none absolute -left-40 bottom-[-10rem] h-[28rem] w-[28rem] rounded-full bg-[#60A5FA]/[0.025] blur-3xl" />

      <div className="relative mx-auto flex min-h-full w-full max-w-[1440px] flex-col justify-center">
        <div className="grid w-full items-center lg:grid-cols-[42%_58%]">
          <div className="relative z-20 py-8 lg:py-0">
            <div className="reveal mb-5 inline-flex items-center gap-2 rounded-full border border-[#e5e7eb] bg-white px-3.5 py-2 text-xs font-medium text-[#4b5563] shadow-[0_6px_20px_-12px_rgba(15,23,42,0.25)]">
              <span className="relative flex h-2 w-2">
                <span className="absolute inset-0 animate-ping rounded-full bg-emerald-500/40" />
                <span className="relative block h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              {hero.badgeText}
            </div>

            <h1 className="reveal max-w-[650px] text-[3.50rem] font-semibold leading-[0.99] tracking-[-0.070em] text-[#111318] sm:text-5xl md:text-[4rem] lg:text-[4.9rem] xl:text-[5.5rem]">
              {hero.headlineLines}{" "}
              <span className="bg-gradient-to-r from-[#2563EB] to-[#7C3AED] bg-clip-text text-transparent">
                {hero.headlineHighlight}
              </span>
              <br />
              {hero.headlinehighlight2}
            </h1>

            <p className="reveal mt-5 max-w-[510px] text-[16px] leading-7 text-[#596171] sm:mt-6 sm:text-base md:text-lg md:leading-8">
              {hero.introBody}
            </p>

            <div className="reveal mt-7 flex flex-wrap items-center gap-3 sm:mt-8">
              <a
                href={hero.primaryCta.href}
                className="group inline-flex items-center gap-3 rounded-full bg-[#111827] px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#2563EB] hover:shadow-[0_12px_30px_-12px_rgba(37,99,235,0.45)] sm:px-6 sm:py-3.5"
              >
                {hero.primaryCta.label}
                <span className="text-base transition-transform duration-300 group-hover:translate-x-1">→</span>
              </a>

              <a
                href={hero.secondaryCta.href}
                className="inline-flex items-center rounded-full border border-[#d1d5db] bg-white px-5 py-3 text-sm font-semibold text-[#111318] transition-all duration-300 hover:border-[#2563EB] hover:text-[#2563EB] sm:px-6 sm:py-3.5"
              >
                {hero.secondaryCta.label}
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[900px] lg:-mt-20">
            <div className="relative aspect-[4/3] w-full">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={HERO_IMAGES[heroIndex]}
                alt={hero.imageAlt}
                className="absolute inset-0 block h-full w-full select-none object-cover"
              />
              <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-[12%] bg-gradient-to-r from-[#f8f9fb] to-transparent" />
              <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-[12%] bg-gradient-to-l from-[#f8f9fb] to-transparent" />
              <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-[12%] bg-gradient-to-b from-[#f8f9fb] to-transparent" />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-[12%] bg-gradient-to-t from-[#f8f9fb] to-transparent" />
            </div>
          </div>
        </div>

        {/* Services row */}
        <div className="reveal mt-6 w-full overflow-hidden pt-2 lg:mt-10 lg:overflow-visible">
          <div className="flex items-center gap-3 animate-marquee-rtl lg:gap-0 lg:animate-none lg:justify-center">
            {[...SERVICE_ROW, ...SERVICE_ROW].map((s, i) => (
              <div
                key={`${s.title}-${i}`}
                className={`flex shrink-0 items-center gap-3 lg:gap-0 ${i >= SERVICE_ROW.length ? "lg:hidden" : ""
                  }`}
              >
                {/* border on every item except the very first */}
                {i !== 0 && <div className="h-8 w-px bg-[#E5E7EB] lg:h-10" />}

                <div
                  className={`flex items-center gap-3 lg:gap-4 ${i % SERVICE_ROW.length === 0
                      ? "pr-1 lg:pr-6"
                      : i % SERVICE_ROW.length === SERVICE_ROW.length - 1
                        ? "pl-1 lg:pl-6"
                        : "px-1 lg:px-6"
                    }`}
                >
                  <div
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#E5E7EB] bg-white lg:h-11 lg:w-11 ${s.color} shadow-[0_4px_14px_-8px_rgba(15,23,42,0.25)]`}
                  >
                    <ServiceIcon name={s.icon} className="h-5 w-5" />
                  </div>
                  <div className="whitespace-nowrap">
                    <p className="text-[16px] font-semibold leading-4 text-[#111318] lg:text-sm lg:leading-5">
                      {s.title}
                    </p>
                    <p className="mt-0.5 text-[15px] text-[#667085] lg:text-xs">
                      {s.subtitle}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}