"use client";

import Link from "next/link";
import { useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import servicesItems from "../../data/services-items.json";
import servicesPage from "../../data/services-page.json";
import {
  TechStackSection,
  ProcessSection,
  CTASection,
  FloatingWhatsApp,
} from "../../components/sections";

const { hero, services, faq } = servicesPage;

/* ── Floating card icons — keyed by name from JSON ── */
function CardIcon({ type, className }: { type: string; className?: string }) {
  const props = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    className,
  };

  switch (type) {
    case "code":
      return (
        <svg {...props}>
          <path d="m8 9-4 3 4 3" />
          <path d="m16 9 4 3-4 3" />
          <path d="m14 5-4 14" />
        </svg>
      );
    case "cart":
      return (
        <svg {...props}>
          <path d="M6 7h13l-1.5 8h-9L6 7Z" />
          <path d="M6 7 5 4H3" />
          <circle cx="10" cy="19" r="1.5" />
          <circle cx="17" cy="19" r="1.5" />
        </svg>
      );
    case "phone":
      return (
        <svg {...props}>
          <rect x="7" y="3" width="10" height="18" rx="2" />
          <path d="M10.5 18h3" />
        </svg>
      );
    case "database":
      return (
        <svg {...props}>
          <ellipse cx="12" cy="5" rx="7" ry="3" />
          <path d="M5 5v6c0 1.7 3.1 3 7 3s7-1.3 7-3V5" />
          <path d="M5 11v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6" />
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

export default function ServicesPage() {
  const SERVICES = servicesItems;
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [active, setActive] = useState(0);

  return (
    <main id="top" className="relative min-h-screen overflow-x-hidden bg-bg text-text">
      {/* Ambient background */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="glow-blob absolute -top-40 left-1/4 h-[300px] w-[300px] rounded-full bg-accent/10 blur-[120px] sm:h-[500px] sm:w-[500px] sm:blur-[140px]" />
        <div className="glow-blob absolute top-1/3 -right-40 h-[300px] w-[300px] rounded-full bg-accent/8 blur-[120px] sm:h-[500px] sm:w-[500px] sm:blur-[140px]" />
        <div className="glow-blob absolute bottom-0 left-0 h-[260px] w-[260px] rounded-full bg-accent/6 blur-[120px] sm:h-[400px] sm:w-[400px] sm:blur-[140px]" />
      </div>

      <Header />

      {/* ═══════════════════════════════════════════════════
          HERO
      ═══════════════════════════════════════════════════ */}
      <section className="relative isolate overflow-hidden bg-[#FBFCFE] px-4 py-10 xs:px-5 xs:py-14 sm:px-6 sm:py-15 md:px-8 md:py-15 lg:px-10 lg:py-15">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -right-32 -top-32 h-[20rem] w-[20rem] rounded-full bg-[#6366F1]/[0.07] blur-3xl sm:h-[26rem] sm:w-[26rem]" />
          <div className="absolute -bottom-40 right-[20%] h-[18rem] w-[18rem] rounded-full bg-[#4F46E5]/[0.05] blur-3xl sm:h-[24rem] sm:w-[24rem]" />

          {/* Faint grid */}
          <div
            className="absolute inset-0 opacity-[0.22]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(99,102,241,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.06) 1px, transparent 1px)",
              backgroundSize: "64px 64px",
              maskImage:
                "linear-gradient(to right, transparent 0%, transparent 40%, black 65%, black 100%)",
              WebkitMaskImage:
                "linear-gradient(to right, transparent 0%, transparent 40%, black 65%, black 100%)",
            }}
          />

          {/* Concentric arcs */}
          <div className="absolute right-[-12rem] top-1/2 hidden h-[30rem] w-[30rem] -translate-y-1/2 rounded-full border border-[#6366F1]/10 md:block md:h-[36rem] md:w-[36rem]" />
          <div className="absolute right-[-8rem] top-1/2 hidden h-[24rem] w-[24rem] -translate-y-1/2 rounded-full border border-[#6366F1]/10 md:block md:h-[28rem] md:w-[28rem]" />
          <div className="absolute right-[-4rem] top-1/2 hidden h-[18rem] w-[18rem] -translate-y-1/2 rounded-full border border-[#6366F1]/10 md:block md:h-[20rem] md:w-[20rem]" />
        </div>

        <div className="mx-auto w-full max-w-[1320px]">
          <div className="grid items-center gap-10 lg:grid-cols-[46%_54%] lg:gap-8">
            {/* ── LEFT: copy ── */}
            <div className="relative z-20 mx-auto max-w-[600px] text-center lg:mx-0 lg:text-left">
              {/* Eyebrow pill */}
              <div className="inline-flex items-center gap-2 rounded-full border border-[#E2E8F0] bg-white px-3 py-1.5 text-[12px] font-semibold uppercase tracking-[0.18em] text-[#64748B] shadow-[0_6px_20px_-14px_rgba(15,23,42,0.35)] sm:text-[10px]">
                <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-[#7C3AED] to-[#2563EB]" />
                {hero.eyebrow}
              </div>

              {/* Heading */}
              <h1 className="mt-4 text-[2.2rem] font-semibold leading-[1.08] tracking-[-0.03em] text-[#0B1F4D] xs:text-[2.125rem] sm:mt-5 sm:text-[2.5rem] sm:leading-[1.05] md:text-[3rem] lg:text-[3.25rem] xl:text-[3.5rem]">
                {hero.headingLine1}
                <br />
                {hero.headingLine2}
                <br />
                <span className="bg-gradient-to-r from-[#2563EB] via-[#4F46E5] to-[#7C3AED] bg-clip-text text-transparent">
                  {hero.headingHighlight}
                </span>
              </h1>

              {/* Description */}
              <p className="mx-auto mt-4 max-w-[520px] text-[16px] leading-7 text-[#64748B] sm:mt-5 sm:text-[15px] sm:leading-7 lg:mx-0">
                {hero.description}
              </p>

              {/* CTAs */}
              <div className="mt-6 flex flex-col gap-3 sm:mt-7 sm:flex-row sm:items-center sm:justify-center lg:justify-start">
                <Link
                  href={hero.primaryCta.href}
                  className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#0B1F4D] px-5 py-3 text-[15px] font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#142E63] hover:shadow-[0_14px_30px_-14px_rgba(11,31,77,0.45)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4F46E5] sm:text-sm sm:px-6"
                >
                  {hero.primaryCta.label}
                  <span className="text-base transition-transform duration-300 group-hover:translate-x-1">→</span>
                </Link>

                <Link
                  href={hero.secondaryCta.href}
                  className="group inline-flex items-center justify-center gap-3 rounded-full border border-[#D7DEE8] bg-white px-5 py-3 text-[15px] font-semibold text-[#0B1F4D] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#6366F1] hover:text-[#4338CA] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6366F1] sm:text-sm sm:px-6"
                >
                  {hero.secondaryCta.label}
                  <span className="text-base transition-transform duration-300 group-hover:translate-x-1">→</span>
                </Link>
              </div>

              {/* Trust checklist */}
              <div className="mt-6 flex flex-wrap items-center justify-center gap-x-4 gap-y-3 text-[14px] text-[#64748B] sm:mt-7 sm:gap-x-5 sm:text-xs lg:justify-start">
                {hero.trustItems.map((item) => (
                  <div key={item} className="flex items-center gap-1">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full border border-[#E2E8F0] bg-white text-[11px] text-[#4F46E5] sm:text-[10px]">
                      ✓
                    </span>
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* ── RIGHT: visual composition ── */}
            <div className="relative mx-auto h-[320px] w-full max-w-[520px] xs:h-[360px] sm:h-[420px] md:h-[460px] lg:h-[460px] lg:max-w-none xl:h-[460px]">
              {/* Orbit rings */}
              <div className="pointer-events-none absolute left-1/2 top-1/2 h-[16rem] w-[16rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#6366F1]/15 sm:h-[20rem] sm:w-[20rem] md:h-[22rem] md:w-[22rem] lg:h-[24rem] lg:w-[24rem]" />
              <div className="pointer-events-none absolute left-1/2 top-1/2 h-[13rem] w-[13rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[#6366F1]/20 sm:h-[16rem] sm:w-[16rem] md:h-[17rem] md:w-[17rem] lg:h-[19rem] lg:w-[19rem]" />
              <div className="pointer-events-none absolute left-1/2 top-1/2 h-[10rem] w-[10rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#6366F1]/10 sm:h-[12rem] sm:w-[12rem] md:h-[13rem] md:w-[13rem] lg:h-[14rem] lg:w-[14rem]" />

              {/* Orbit nodes */}
              <span className="absolute left-[20%] top-[36%] h-1.5 w-1.5 rounded-full bg-[#22C1C3] ring-4 ring-[#22C1C3]/10 sm:h-2 sm:w-2" />
              <span className="absolute right-[18%] top-[32%] h-1.5 w-1.5 rounded-full bg-[#2563EB] ring-4 ring-[#2563EB]/10 sm:h-2 sm:w-2" />
              <span className="absolute bottom-[22%] right-[24%] h-1.5 w-1.5 rounded-full bg-[#F97316] ring-4 ring-[#F97316]/10 sm:h-2 sm:w-2" />
              <span className="absolute bottom-[18%] left-[36%] h-1.5 w-1.5 rounded-full bg-[#6366F1] ring-4 ring-[#6366F1]/10 sm:h-2 sm:w-2" />

              {/* Laptop mockup (center) */}
              <div className="absolute left-1/2 top-1/2 z-20 w-[78%] max-w-[520px] -translate-x-1/2 -translate-y-1/2 sm:w-[72%] md:w-[70%] lg:w-[68%]">
                <div className="rounded-[12px] border-[4px] border-[#0B1220] bg-[#0B1220] shadow-[0_30px_60px_-30px_rgba(15,23,42,0.4)] sm:rounded-[16px] sm:border-[6px]">
                  <div className="overflow-hidden rounded-[8px] bg-[#F8FAFC] sm:rounded-[10px]">
                    <div className="flex h-5 items-center gap-1 border-b border-[#E5E7EB] bg-white px-2 sm:h-7 sm:gap-1.5 sm:px-3">
                      <span className="h-1 w-1 rounded-full bg-[#CBD5E1] sm:h-1.5 sm:w-1.5" />
                      <span className="h-1 w-1 rounded-full bg-[#CBD5E1] sm:h-1.5 sm:w-1.5" />
                      <span className="h-1 w-1 rounded-full bg-[#CBD5E1] sm:h-1.5 sm:w-1.5" />
                      <div className="ml-auto h-2.5 w-12 rounded-full bg-[#F1F5F9] sm:h-3.5 sm:w-16" />
                    </div>

                    <div className="grid grid-cols-[64px_1fr] gap-2 p-2 sm:grid-cols-[90px_1fr] sm:gap-3 sm:p-3">
                      <div className="space-y-1.5 sm:space-y-2">
                        <div className="h-4 w-9 rounded bg-[#0B1F4D] sm:h-5 sm:w-12" />
                        <div className="space-y-1 pt-1.5 sm:space-y-1.5 sm:pt-2">
                          <div className="h-4 rounded-md bg-[#E0E7FF] sm:h-6 sm:rounded-lg" />
                          <div className="h-3 w-4/5 rounded bg-[#E2E8F0] sm:h-4" />
                          <div className="h-3 w-3/4 rounded bg-[#E2E8F0] sm:h-4" />
                          <div className="h-3 w-5/6 rounded bg-[#E2E8F0] sm:h-4" />
                        </div>
                      </div>

                      <div>
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="h-3 w-16 rounded bg-[#0B1F4D]/90 sm:h-3.5 sm:w-24" />
                            <div className="mt-1 h-2 w-20 rounded bg-[#CBD5E1] sm:mt-1.5 sm:h-2.5 sm:w-32" />
                          </div>
                          <div className="h-4 w-10 rounded-md bg-[#4F46E5] sm:h-6 sm:w-16 sm:rounded-lg" />
                        </div>

                        <div className="mt-3 grid grid-cols-3 gap-1.5 sm:mt-4 sm:gap-2">
                          {[
                            { bar: "bg-[#C7D2FE]" },
                            { bar: "bg-[#A7F3D0]" },
                            { bar: "bg-[#FED7AA]" },
                          ].map((c, i) => (
                            <div key={i} className="rounded-md border border-[#E5E7EB] bg-white p-1.5 sm:rounded-lg sm:p-2.5">
                              <div className={`h-1.5 w-6 rounded sm:h-2 sm:w-8 ${c.bar}`} />
                              <div className="mt-1 h-2.5 w-7 rounded bg-[#0B1F4D] sm:mt-1.5 sm:h-3.5 sm:w-10" />
                            </div>
                          ))}
                        </div>

                        <div className="mt-2 rounded-md border border-[#E5E7EB] bg-white p-1.5 sm:mt-3 sm:rounded-lg sm:p-2.5">
                          <div className="flex h-12 items-end gap-1 sm:h-20 sm:gap-1.5">
                            <div className="h-[35%] w-full rounded-t bg-[#DDE4FF]" />
                            <div className="h-[52%] w-full rounded-t bg-[#C7D2FE]" />
                            <div className="h-[45%] w-full rounded-t bg-[#A5B4FC]" />
                            <div className="h-[70%] w-full rounded-t bg-[#818CF8]" />
                            <div className="h-[58%] w-full rounded-t bg-[#6366F1]" />
                            <div className="h-[82%] w-full rounded-t bg-[#4F46E5]" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mx-auto h-2 w-[86%] rounded-b-[10px] bg-gradient-to-b from-[#CBD5E1] to-[#94A3B8] shadow-[0_16px_25px_-18px_rgba(15,23,42,0.45)] sm:h-3 sm:rounded-b-[14px]" />
                <div className="mx-auto h-1 w-[20%] rounded-b-full bg-[#64748B]/40 sm:h-1.5" />
              </div>

              {/* Phone mockup */}
              <div className="absolute bottom-[14%] right-[10%] z-30 w-[70px] rotate-[4deg] rounded-[14px] border-[3px] border-[#101828] bg-[#101828] shadow-[0_20px_40px_-18px_rgba(15,23,42,0.4)] sm:bottom-[16%] sm:right-[14%] sm:w-[85px] sm:rounded-[16px] sm:border-[4px] md:w-[95px] lg:w-[105px]">
                <div className="overflow-hidden rounded-[10px] bg-white sm:rounded-[12px]">
                  <div className="mx-auto mt-1 h-2 w-8 rounded-full bg-[#101828] sm:h-2.5 sm:w-10" />
                  <div className="p-1.5 sm:p-2">
                    <div className="h-2 w-10 rounded bg-[#0B1F4D] sm:h-2.5 sm:w-14" />
                    <div className="mt-1 h-1 w-12 rounded bg-[#E2E8F0] sm:h-1.5 sm:w-16" />
                    <div className="mt-2 space-y-1 sm:mt-3 sm:space-y-1.5">
                      <div className="rounded-md bg-[#EEF2FF] p-1.5">
                        <div className="h-1 w-4 rounded bg-[#6366F1] sm:h-1.5 sm:w-6" />
                        <div className="mt-0.5 h-2 w-6 rounded bg-[#0B1F4D] sm:mt-1 sm:h-2.5 sm:w-8" />
                      </div>
                      <div className="rounded-md bg-[#ECFDF5] p-1.5">
                        <div className="h-1 w-4 rounded bg-[#10B981] sm:h-1.5 sm:w-6" />
                        <div className="mt-0.5 h-2 w-6 rounded bg-[#0B1F4D] sm:mt-1 sm:h-2.5 sm:w-8" />
                      </div>
                      <div className="rounded-md bg-[#FFF7ED] p-1.5">
                        <div className="h-1 w-4 rounded bg-[#F97316] sm:h-1.5 sm:w-6" />
                        <div className="mt-0.5 h-2 w-6 rounded bg-[#0B1F4D] sm:mt-1 sm:h-2.5 sm:w-8" />
                      </div>
                    </div>
                  </div>
                  <div className="mx-auto mb-1 h-0.5 w-5 rounded-full bg-[#CBD5E1] sm:mb-1.5 sm:h-1 sm:w-6" />
                </div>
              </div>

              {/* Floating service cards */}
              {hero.floatingCards.map((card) => (
                <div key={card.key} className={`absolute z-40 ${card.position}`}>
                  <div
                    className={`${card.floatClass} w-[125px] rounded-lg border border-white/80 bg-white/95 p-2 shadow-[0_16px_35px_-18px_rgba(15,23,42,0.25)] backdrop-blur sm:w-[145px] sm:rounded-xl sm:p-3 md:w-[155px] lg:w-[165px] lg:p-3.5`}
                    style={{ animationDelay: card.delay }}
                  >
                    <div className="flex items-start gap-2 sm:gap-2.5">
                      <div
                        className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-md sm:h-8 sm:w-8 sm:rounded-lg lg:h-9 lg:w-9 ${card.iconBg} ${card.iconColor}`}
                      >
                        <CardIcon type={card.icon} className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-[10px] font-semibold leading-tight text-[#0B1F4D] sm:text-[11px] lg:text-[12px]">
                          {card.title}
                        </p>
                        <p className="mt-0.5 text-[9px] leading-4 text-[#64748B] sm:text-[10px] sm:leading-4">
                          {card.subtitle}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          SERVICES — Accordion
      ═══════════════════════════════════════════════════ */}
      <section className="bg-surface border-b border-border-soft px-4 py-16 xs:px-5 xs:py-20 sm:px-6 sm:py-24 md:px-8 lg:px-10 lg:py-28">
        <div className="mx-auto w-full max-w-7xl">
          {/* Header */}
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between lg:gap-8">
            <div>
              <p className="text-[13px] font-semibold uppercase tracking-[0.25em] text-accent sm:text-xs">
                {services.eyebrow}
              </p>
              <h2 className="mt-3 text-[1.875rem] font-semibold leading-[1.05] tracking-[-0.03em] xs:text-[2.125rem] sm:mt-4 sm:text-[2.75rem] sm:leading-[1] md:text-[3.25rem] lg:text-[3.5rem] xl:text-[3.75rem]">
                {services.heading}{" "}
                <span className="text-muted">{services.headingHighlight}</span>
              </h2>
              <p className="mt-2 text-[16px] leading-7 text-muted sm:text-base sm:leading-7 md:text-lg md:leading-8">
                {services.intro}
              </p>
            </div>
            <p className="hidden shrink-0 font-mono text-[11px] font-bold uppercase tracking-[0.25em] text-muted lg:block">
              {SERVICES.length.toString().padStart(2, "0")} / {services.counterSuffix}
            </p>
          </div>

          {/* Accordion */}
          <div className="mt-10 border-t border-border-soft sm:mt-14 lg:mt-16">
            {SERVICES.map((service, i) => {
              const isActive = i === active;
              const panelId = `service-panel-${i}`;
              const triggerId = `service-trigger-${i}`;

              return (
                <div key={service.n} className="border-b border-border-soft">
                  <button
                    id={triggerId}
                    type="button"
                    onClick={() => setActive(i)}
                    aria-expanded={isActive}
                    aria-controls={panelId}
                    className="group flex w-full items-center gap-3 py-5 text-left sm:gap-5 sm:py-6 md:gap-6 md:py-7"
                  >
                    <span
                      className={`font-mono text-[13px] tabular-nums transition-colors duration-300 sm:text-xs ${
                        isActive ? "text-[#2563EB]" : "text-muted"
                      }`}
                    >
                      {service.n}
                    </span>

                    <span
                      className={`flex-1 text-[22px] font-semibold tracking-[-0.02em] transition-colors duration-300 xs:text-[19px] sm:text-xl md:text-2xl lg:text-3xl ${
                        isActive ? "text-[#2563EB]" : "text-text group-hover:text-text/60"
                      }`}
                    >
                      {service.title}
                    </span>

                    {service.timeline && (
                      <span className="hidden shrink-0 rounded-full border border-border-soft bg-bg px-3.5 py-1.5 text-xs font-medium text-muted md:inline-flex lg:px-3.5">
                        {service.timeline}
                      </span>
                    )}

                    <span
                      aria-hidden="true"
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-300 sm:h-9 sm:w-9 ${
                        isActive
                          ? "rotate-180 border-[#2563EB] bg-[#2563EB] text-white"
                          : "border-border-soft text-muted group-hover:border-[#2563EB]/40 group-hover:text-[#2563EB]"
                      }`}
                    >
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5 sm:h-4 sm:w-4">
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                    </span>
                  </button>

                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={triggerId}
                    className={`grid transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                      isActive ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="mb-6 rounded-2xl border border-border-soft bg-bg p-4 xs:p-5 sm:mb-8 sm:p-6 md:p-8 lg:p-10">
                        <div className="max-w-3xl">
                          {service.tagline && (
                            <p className="text-[17px] font-medium text-[#2563EB] sm:text-sm">
                              {service.tagline}
                            </p>
                          )}
                          {service.overview && (
                            <p className="mt-3 text-[17px] leading-7 text-muted sm:text-base md:text-[17px] md:leading-8">
                              {service.overview}
                            </p>
                          )}
                        </div>

                        <div className="mt-8 grid gap-8 border-t border-border-soft pt-6 sm:mt-10 sm:pt-8 md:grid-cols-2 md:gap-12 lg:gap-16">
                          {service.points?.length > 0 && (
                            <div>
                              <p className="text-[13px] font-bold uppercase tracking-[0.25em] text-muted sm:text-[11px]">
                                Key features
                              </p>
                              <ul className="mt-4 space-y-3.5 sm:mt-5 sm:space-y-4">
                                {service.points.map((point: string, idx: number) => (
                                  <li key={point} className="flex items-start gap-3">
                                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-[#2563EB]/10 font-mono text-[11px] font-bold text-[#2563EB] sm:text-[10px]">
                                      {(idx + 1).toString().padStart(2, "0")}
                                    </span>
                                    <span className="text-[16px] leading-6 text-text sm:text-sm">
                                      {point}
                                    </span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {service.idealFor?.length > 0 && (
                            <div>
                              <p className="text-[13px] font-bold uppercase tracking-[0.25em] text-muted sm:text-[11px]">
                                Ideal for
                              </p>
                              <ul className="mt-4 space-y-3.5 sm:mt-5 sm:space-y-4">
                                {service.idealFor.map((item: string) => (
                                  <li key={item} className="flex items-start gap-3">
                                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#2563EB]" />
                                    <span className="text-[16px] leading-6 text-text sm:text-sm">{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>

                        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-border-soft pt-5 sm:mt-10 sm:pt-6">
                          {service.timeline ? (
                            <span className="inline-flex items-center gap-2 text-[14px] font-medium text-muted sm:text-xs">
                              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5">
                                <circle cx="12" cy="12" r="9" />
                                <path d="M12 8v4l3 2" />
                              </svg>
                              Timeline · {service.timeline}
                            </span>
                          ) : (
                            <span />
                          )}

                          <Link
                            href="/contact"
                            className="group inline-flex items-center gap-3 rounded-full bg-text py-2 pl-5 pr-2 text-[15px] font-semibold text-white transition-colors duration-300 hover:bg-[#2563EB] sm:text-sm"
                          >
                            {services.discussCtaLabel}
                            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#2563EB] transition-transform duration-300 group-hover:translate-x-0.5">
                              →
                            </span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Footer note */}
          <p className="mt-6 text-[15px] text-muted sm:mt-8 sm:text-sm">
            {services.footerNote}{" "}
            <Link
              href={services.footerLinkHref}
              className="font-semibold text-[#2563EB] underline-offset-4 hover:underline"
            >
              {services.footerLinkLabel}
            </Link>
          </p>
        </div>
      </section>

      {/* Tech Stack */}
      <TechStackSection />

      {/* ── Process ── */}
      <ProcessSection />

      {/* ═══════════════════════════════════════════════════
          FAQ
      ═══════════════════════════════════════════════════ */}
      <section className="border-b border-border-soft px-4 py-16 xs:px-5 xs:py-20 sm:px-6 sm:py-24 md:px-8 lg:px-10 lg:py-28">
        <div className="mx-auto w-full max-w-3xl">
          <div className="text-center">
            <p className="text-[13px] font-semibold uppercase tracking-[0.25em] text-accent sm:text-xs">
              {faq.eyebrow}
            </p>

            <h2 className="mt-3 text-[1.875rem] font-semibold leading-[1.05] tracking-[-0.03em] xs:text-[2.125rem] sm:mt-4 sm:text-[2.75rem] sm:leading-[1] md:text-[3.25rem] lg:text-[3.5rem] xl:text-[3.75rem]">
              {faq.heading}{" "}
              <span className="text-muted">{faq.headingHighlight}</span>
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-[16px] leading-7 text-muted sm:mt-5 sm:text-base md:text-lg md:leading-8">
              {faq.intro}
            </p>
          </div>

          <div className="mt-10 space-y-3 sm:mt-14 lg:mt-16">
            {faq.items.map((item, i) => {
              const isOpen = openFaq === i;
              const panelId = `faq-panel-${i}`;
              const triggerId = `faq-trigger-${i}`;

              return (
                <div
                  key={item.q}
                  className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
                    isOpen
                      ? "border-[#2563EB]/25 bg-[#F7F8FA] shadow-[0_20px_45px_-30px_rgba(37,99,235,0.35)]"
                      : "border-border-soft bg-surface hover:border-[#2563EB]/20 hover:bg-[#F7F8FA]/60"
                  }`}
                >
                  <button
                    id={triggerId}
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    className="flex w-full items-center gap-3 px-4 py-4 text-left sm:gap-5 sm:px-6 sm:py-6"
                  >
                    <span
                      className={`font-mono text-[15px] tabular-nums transition-colors duration-300 sm:text-xs ${
                        isOpen ? "text-[#2563EB]" : "text-muted"
                      }`}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>

                    <span
                      className={`flex-1 text-[17px] font-semibold tracking-[-0.01em] transition-colors duration-300 sm:text-base md:text-lg ${
                        isOpen ? "text-[#2563EB]" : "text-text"
                      }`}
                    >
                      {item.q}
                    </span>

                    <span
                      aria-hidden="true"
                      className={`relative flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                        isOpen
                          ? "rotate-180 border-[#2563EB] bg-[#2563EB] text-white"
                          : "border-border-soft text-muted"
                      }`}
                    >
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                    </span>
                  </button>

                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={triggerId}
                    className={`grid transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none ${
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="border-t border-border-soft px-4 pb-5 pt-4 text-[17px] leading-7 text-muted sm:px-6 sm:pb-6 sm:pl-[3.75rem] sm:pt-5 sm:text-[15px] sm:leading-7">
                        {item.a}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-10 flex flex-col items-center gap-4 border-t border-border-soft pt-8 text-center sm:mt-12 sm:pt-10 lg:mt-14">
            <p className="text-[15px] text-muted sm:text-sm">{faq.footerText}</p>

            <Link
              href={faq.footerCta.href}
              className="group inline-flex items-center gap-3 rounded-full bg-text py-2 pl-5 pr-2 text-[15px] font-semibold text-white transition-colors duration-300 hover:bg-[#2563EB] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563EB] sm:text-sm sm:pl-6"
            >
              {faq.footerCta.label}
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#2563EB] transition-transform duration-300 group-hover:translate-x-0.5">
                →
              </span>
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
      <FloatingWhatsApp />
      <Footer />
    </main>
  );
}