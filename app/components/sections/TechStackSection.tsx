"use client";

import { useState } from "react";
import home from "../../data/home.json";

export default function TechStackSection() {
  const { techStack } = home;
  const [activeIdx, setActiveIdx] = useState(2);

  const activeCategory = techStack.categories[activeIdx];

  return (
    <section className="relative overflow-hidden border-y border-border-soft px-5 py-20 sm:px-6 sm:py-24 md:px-8 md:py-25">
      <div className="relative mx-auto w-full max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          {/* LEFT: copy */}
          <div className="lg:col-span-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-border-soft bg-surface px-3.5 py-1.5 text-[13px] font-semibold uppercase tracking-[0.2em] text-muted sm:text-[11px]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#2563EB]" />
              {techStack.eyebrow}
            </div>

            <h2 className="mt-5 text-3xl font-extrabold leading-[1.05] tracking-[-0.03em] text-text sm:text-4xl md:text-5xl lg:text-[3.25rem]">
              {techStack.heading}{" "}
              <span className="bg-gradient-to-r from-[#2563EB] to-[#7C3AED] bg-clip-text text-transparent">
                {techStack.headingHighlight}
              </span>{" "}
              {techStack.headingEnd}
            </h2>

            <p className="mt-5 max-w-md text-[16px] leading-7 text-muted sm:text-base sm:leading-8">
              {techStack.intro}
            </p>
          </div>

          {/* CENTER: tech grid */}
          <div className="lg:col-span-5">
            <div className="grid grid-cols-3 gap-3 sm:gap-4 md:gap-5">
              {activeCategory.techs.map((t) => (
                <div
                  key={t.name}
                  className="group flex flex-col items-center gap-3 rounded-2xl p-2 transition-all duration-300 hover:-translate-y-1 sm:gap-4 sm:p-3"
                >
                  <span
                    className="flex h-16 w-16 items-center justify-center rounded-full bg-surface shadow-[0_8px_24px_-12px_rgba(15,23,42,0.15)] ring-1 ring-border-soft transition-all duration-300 group-hover:shadow-[0_14px_36px_-14px_rgba(37,99,235,0.35)] sm:h-20 sm:w-20"
                    style={{ color: t.color }}
                  >
                    <i className={`${t.faIcon} text-2xl leading-none sm:text-3xl`} aria-hidden="true" />
                  </span>
                  <span className="text-center text-[12px] font-bold uppercase tracking-[0.12em] text-text/70 sm:text-[11px]">
                    {t.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: category selector */}
          <div className="lg:col-span-3">
            <p className="text-[13px] font-semibold uppercase tracking-[0.25em] text-muted sm:text-[11px]">
              {techStack.selectLabel}
            </p>

            <div className="relative mt-5 pl-1">
              <ul className="relative flex flex-col gap-6">
                {techStack.categories.map((cat, i) => {
                  const isActive = i === activeIdx;
                  return (
                    <li key={cat.key}>
                      <button
                        type="button"
                        onClick={() => setActiveIdx(i)}
                        aria-pressed={isActive}
                        className="group flex w-full items-center gap-4 text-left"
                      >
                        <span
                          className={`relative z-10 flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-full border-2 bg-bg-soft transition-all duration-300 ${
                            isActive
                              ? "border-[#2563EB]"
                              : "border-border-soft group-hover:border-[#2563EB]/50"
                          }`}
                        >
                          {isActive && <span className="h-2.5 w-2.5 rounded-full bg-[#2563EB]" />}
                        </span>

                        <span
                          className={`text-[15px] font-bold uppercase tracking-[0.15em] transition-colors duration-300 sm:text-sm ${
                            isActive
                              ? "text-[#2563EB]"
                              : "text-text/40 group-hover:text-text/70"
                          }`}
                        >
                          {cat.label}
                        </span>

                        <span
                          aria-hidden="true"
                          className={`ml-auto h-px bg-[#2563EB] transition-all duration-500 ${
                            isActive ? "w-8 opacity-100" : "w-0 opacity-0"
                          }`}
                        />
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}