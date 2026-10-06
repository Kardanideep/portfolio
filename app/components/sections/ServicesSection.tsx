"use client";

import Link from "next/link";
import { useState } from "react";
import home from "../../data/home.json";
import servicesItems from "../../data/services-items.json";

const EASE = "ease-[cubic-bezier(0.22,1,0.36,1)]";

export default function ServicesSection() {
  const services = home.services;
  const SERVICES = servicesItems.slice(0, 6);
  const [active, setActive] = useState(0);

  const columns = SERVICES.map((_, i) => (i === active ? "5fr" : "1fr")).join(" ");

  return (
    <section
      id="services"
      className="border-y border-border-soft bg-surface px-5 py-16 sm:px-6 sm:py-20 md:px-8 md:py-25"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="flex items-center gap-3">
          <span className="text-[14px] font-semibold uppercase tracking-[0.25em] text-accent sm:text-xs">
            {services.eyebrow}
          </span>
        </div>

        <div className="mt-4 mb-8 flex flex-col gap-4 sm:mt-5 sm:mb-10 sm:gap-5 md:mb-14">
          <h2 className="text-4xl font-semibold leading-[1] tracking-[-0.04em] sm:text-4xl sm:leading-[0.95] md:text-5xl lg:text-7xl">
            {services.heading}{" "}
            <span className="text-muted">{services.headingHighlight}</span>
          </h2>
          <p className="text-[16px] leading-6 text-muted sm:text-base sm:leading-7">
            {services.intro}
          </p>
        </div>

        <div
          style={{ gridTemplateColumns: columns }}
          className={`flex flex-col gap-3 md:grid md:h-[480px] md:transition-[grid-template-columns] md:duration-700 lg:h-[540px] ${EASE} motion-reduce:transition-none`}
        >
          {SERVICES.map((service, i) => {
            const isActive = i === active;

            return (
              <div
                key={service.n}
                onMouseEnter={() => setActive(i)}
                className={`relative min-w-0 overflow-hidden rounded-3xl border transition-colors duration-700 md:rounded-[2rem] ${EASE} motion-reduce:transition-none ${
                  isActive
                    ? "border-transparent bg-[#0F1117] text-white"
                    : "border-border-soft text-text hover:bg-bg-soft"
                }`}
              >
                {/* MOBILE */}
                <div className="md:hidden">
                  <button
                    type="button"
                    onClick={() => setActive(i)}
                    aria-expanded={isActive}
                    className="flex w-full items-start justify-between gap-4 p-5 text-left sm:p-6"
                  >
                    <div className="min-w-0 flex-1">
                      <h3
                        className={`text-[22px] font-semibold leading-tight tracking-[-0.02em] transition-colors duration-300 sm:text-2xl ${
                          isActive ? "text-white" : "text-text"
                        }`}
                      >
                        {service.title}
                      </h3>
                      {!isActive && (
                        <p className="mt-1.5 line-clamp-2 text-[16px] leading-6 text-muted sm:text-sm">
                          {service.desc}
                        </p>
                      )}
                    </div>
                    <span
                      aria-hidden="true"
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm transition-all duration-500 ${EASE} ${
                        isActive
                          ? "-rotate-45 bg-[#2563EB] text-white"
                          : "border border-border-soft text-muted"
                      }`}
                    >
                      →
                    </span>
                  </button>

                  <div
                    className={`grid transition-all duration-500 ${EASE} motion-reduce:transition-none ${
                      isActive ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="space-y-4 px-5 pb-5 sm:px-6 sm:pb-6">
                        <p className="text-[17px] leading-7 text-white/70 sm:text-sm">{service.desc}</p>

                        {service.points?.length > 0 && (
                          <ul className="space-y-2.5">
                            {service.points.map((point: string) => (
                              <li
                                key={point}
                                className="flex items-start gap-3 text-[16px] text-white/80 sm:text-sm"
                              >
                                <span
                                  aria-hidden="true"
                                  className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#2563EB] text-[12px] font-bold text-white sm:text-[11px]"
                                >
                                  ✓
                                </span>
                                <span className="leading-6">{point}</span>
                              </li>
                            ))}
                          </ul>
                        )}

                        <Link
                          href="/contact"
                          className="inline-flex w-full items-center justify-between gap-3 rounded-full bg-white py-2 pl-5 pr-2 text-[15px] font-semibold text-[#0F1117] transition-colors duration-300 hover:bg-[#2563EB] hover:text-white sm:w-auto sm:justify-start sm:text-sm"
                        >
                          <span>{services.discussLabel}</span>
                          <span
                            aria-hidden="true"
                            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#2563EB] text-white"
                          >
                            →
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                {/* DESKTOP */}
                <div className="hidden md:block md:h-full">
                  <div className="relative h-full min-w-0 overflow-hidden p-8">
                    <button
                      type="button"
                      aria-expanded={isActive}
                      aria-label={service.title}
                      onClick={() => setActive(i)}
                      onFocus={() => setActive(i)}
                      className="absolute inset-0 z-0 rounded-[2rem] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#2563EB]"
                    />

                    <span
                      aria-hidden="true"
                      className={`pointer-events-none absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-[#2563EB]/40 blur-3xl transition-opacity duration-700 ${
                        isActive ? "opacity-100" : "opacity-0"
                      }`}
                    />

                    <span
                      aria-hidden="true"
                      style={{ willChange: "transform, right" }}
                      className={`pointer-events-none absolute right-8 top-8 flex h-10 w-10 items-center justify-center rounded-full transition-all duration-700 ${EASE} ${
                        isActive
                          ? "-rotate-45 bg-[#2563EB] text-white translate-x-0"
                          : "right-1/2 translate-x-1/2 border border-border-soft text-muted"
                      }`}
                    >
                      →
                    </span>

                    <span
                      aria-hidden="true"
                      className={`pointer-events-none absolute bottom-8 left-1/2 hidden -translate-x-1/2 rotate-180 whitespace-nowrap text-2xl font-semibold tracking-[-0.03em] transition-opacity duration-500 [writing-mode:vertical-rl] md:block ${
                        isActive ? "opacity-0 delay-0" : "opacity-100 delay-300"
                      }`}
                    >
                      {service.title}
                    </span>

                    <div
                      className={`pointer-events-none absolute inset-0 flex flex-col justify-between p-8 transition-all duration-700 ${EASE} motion-reduce:transition-none md:w-[400px] lg:w-[440px] ${
                        isActive
                          ? "translate-x-0 opacity-100 delay-200"
                          : "translate-x-6 opacity-0"
                      }`}
                    >
                      <div>
                        <h3 className="pt-12 text-4xl font-semibold tracking-[-0.03em] lg:text-5xl">
                          {service.title}
                        </h3>
                        <p className="max-w-md pt-4 text-base leading-7 text-white/60">
                          {service.desc}
                        </p>

                        {service.points?.length > 0 && (
                          <div className="mt-6 space-y-3">
                            {service.points.map((point: string) => (
                              <div
                                key={point}
                                className="flex items-start gap-3 text-[15px] text-white/80"
                              >
                                <span
                                  aria-hidden="true"
                                  className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#2563EB] text-[11px] font-bold text-white"
                                >
                                  ✓
                                </span>
                                <span className="leading-6">{point}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>

                      <div className="mt-8">
                        <Link
                          href="/contact"
                          tabIndex={isActive ? 0 : -1}
                          className={`relative z-10 inline-flex items-center gap-3 rounded-full bg-white py-1.5 pl-5 pr-1.5 text-sm font-semibold text-[#0F1117] transition-colors duration-300 hover:bg-[#2563EB] hover:text-white ${
                            isActive ? "pointer-events-auto" : "pointer-events-none"
                          }`}
                        >
                          {services.discussLabel}
                          <span
                            aria-hidden="true"
                            className="flex h-8 w-8 items-center justify-center rounded-full bg-[#2563EB] text-white"
                          >
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

        <div className="mt-12 flex justify-center sm:mt-14">
          <Link
            href="/services"
            className="group inline-flex items-center gap-3 rounded-full bg-[#111827] py-2 pl-6 pr-2 text-[15px] font-semibold text-white transition-all duration-300 hover:bg-[#2563EB] hover:shadow-[0_12px_30px_-12px_rgba(37,99,235,0.45)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563EB] sm:text-sm"
          >
            Explore all services
            <span
              aria-hidden="true"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#2563EB] transition-transform duration-300 group-hover:translate-x-0.5"
            >
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}