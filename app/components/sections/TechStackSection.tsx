"use client";

import { useState } from "react";
import home from "../../data/home.json";

export default function TechStackSection() {
  const { techStack } = home;
  const [activeIdx, setActiveIdx] = useState(2);

  const activeCategory = techStack.categories[activeIdx];

  return (
    <section className="relative overflow-hidden border-y border-border-soft px-4 py-14 xs:px-5 xs:py-16 sm:px-6 sm:py-24 md:px-8 md:py-25">
      <div className="relative mx-auto w-full max-w-7xl">
        <div className="grid gap-10 xs:gap-12 lg:grid-cols-12 lg:gap-10">
          {/* LEFT: copy */}
          <div className="lg:col-span-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-border-soft bg-surface px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-muted xs:px-3.5 xs:text-[12px] sm:text-[11px]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#2563EB]" />
              {techStack.eyebrow}
            </div>

            <h2 className="mt-4 text-[1.75rem] font-extrabold leading-[1.08] tracking-[-0.03em] text-text xs:mt-5 xs:text-[2rem] xs:leading-[1.05] sm:text-4xl md:text-5xl lg:text-[3.25rem]">
              {techStack.heading}{" "}
              <span className="bg-gradient-to-r from-[#2563EB] to-[#7C3AED] bg-clip-text text-transparent">
                {techStack.headingHighlight}
              </span>{" "}
              {techStack.headingEnd}
            </h2>

            <p className="mt-4 max-w-md text-[15px] leading-6 text-muted xs:mt-5 xs:text-[15.5px] xs:leading-[1.7] sm:text-base sm:leading-8">
              {techStack.intro}
            </p>
          </div>

          {/* CENTER: tech grid */}
          <div className="lg:col-span-5">
            <div className="grid grid-cols-3 gap-2 xs:gap-3 sm:gap-4 md:gap-5">
              {activeCategory.techs.map((t) => (
                <div
                  key={t.name}
                  className="group flex flex-col items-center gap-2 rounded-xl p-2 transition-all duration-300 hover:-translate-y-1 xs:gap-3 xs:rounded-2xl sm:gap-4 sm:p-3"
                >
                  <span
                    className="flex h-14 w-14 items-center justify-center rounded-full bg-surface shadow-[0_8px_24px_-12px_rgba(15,23,42,0.15)] ring-1 ring-border-soft transition-all duration-300 group-hover:shadow-[0_14px_36px_-14px_rgba(37,99,235,0.35)] xs:h-16 xs:w-16 sm:h-20 sm:w-20"
                    style={{ color: t.color }}
                  >
                    <i className={`${t.faIcon} text-xl leading-none xs:text-2xl sm:text-3xl`} aria-hidden="true" />
                  </span>
                  <span className="text-center text-[11px] font-bold uppercase tracking-[0.1em] text-text/70 xs:text-[12px] xs:tracking-[0.12em] sm:text-[11px]">
                    {t.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: category selector */}
          <div className="lg:col-span-3">
            <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-muted xs:text-[12px] sm:text-[11px]">
              {techStack.selectLabel}
            </p>

            <div className="relative mt-4 pl-1 xs:mt-5">
              <ul className="relative flex flex-col gap-4 xs:gap-5 sm:gap-6">
                {techStack.categories.map((cat, i) => {
                  const isActive = i === activeIdx;
                  return (
                    <li key={cat.key}>
                      <button
                        type="button"
                        onClick={() => setActiveIdx(i)}
                        aria-pressed={isActive}
                        className="group flex w-full items-center gap-3 text-left xs:gap-4"
                      >
                        <span
                          className={`relative z-10 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 bg-bg-soft transition-all duration-300 xs:h-[22px] xs:w-[22px] ${
                            isActive
                              ? "border-[#2563EB]"
                              : "border-border-soft group-hover:border-[#2563EB]/50"
                          }`}
                        >
                          {isActive && <span className="h-2 w-2 rounded-full bg-[#2563EB] xs:h-2.5 xs:w-2.5" />}
                        </span>

                        <span
                          className={`text-[13px] font-bold uppercase tracking-[0.12em] transition-colors duration-300 xs:text-[14px] xs:tracking-[0.15em] sm:text-sm ${
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