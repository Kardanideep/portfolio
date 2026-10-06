"use client";

import { useEffect, useRef, useState } from "react";
import home from "../../data/home.json";

export default function ProcessSection() {
  const process = home.process;
  const PROCESS = process.items;
  const STEP_MS = process.timing.stepMs;
  const HOLD_MS = process.timing.holdMs;
  const RESET_MS = process.timing.resetMs;

  const [activeProcess, setActiveProcess] = useState(0);
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  const last = PROCESS.length - 1;

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting && entry.intersectionRatio > 0.25),
      { threshold: [0, 0.25, 0.5, 0.75, 1], rootMargin: "-10% 0px -10% 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) return;
    let delay = STEP_MS;
    if (activeProcess === last) delay = STEP_MS + HOLD_MS;
    else if (activeProcess === -1) delay = RESET_MS;
    const id = setTimeout(() => {
      setActiveProcess((a) => (a === last ? -1 : a + 1));
    }, delay);
    return () => clearTimeout(id);
  }, [activeProcess, last, inView, STEP_MS, HOLD_MS, RESET_MS]);

  const fill = activeProcess < 0 ? 0 : (activeProcess / last) * 100;

  return (
    <section
      ref={sectionRef}
      id="process"
      className="px-5 py-20 border-b border-border-soft bg-surface sm:px-6 sm:py-24 md:px-8 md:py-25"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="mb-12 sm:mb-16 md:mb-24">
          <p className="text-[14px] font-semibold uppercase tracking-[0.25em] text-accent sm:text-xs">
            {process.eyebrow}
          </p>
          <h2 className="mt-4 text-4xl font-bold leading-[1.05] tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
            {process.heading}
            <span className="italic text-muted">{process.headingHighlight}</span>
          </h2>
          <p className="mt-2 text-[16px] leading-7 text-muted sm:mt-2 sm:text-base md:text-lg md:leading-8">
            {process.intro}
          </p>
        </div>

        <div className="relative">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-0 right-0 top-7 hidden md:block"
          >
            <div className="relative mx-auto h-px w-[calc(100%-6rem)] max-w-5xl">
              <div className="absolute inset-0 border-t-2 border-dashed border-border-strong/60" />
              <div
                style={{ width: `${fill}%` }}
                className={`absolute inset-y-0 left-0 border-t-2 border-dashed border-accent ease-out ${
                  activeProcess < 0
                    ? "opacity-0 transition-opacity duration-300"
                    : "opacity-100 transition-[width,opacity] duration-1000"
                }`}
              />
            </div>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 sm:gap-8 md:grid-cols-4 md:gap-6 lg:gap-8">
            {PROCESS.map((step, i) => {
              const on = activeProcess >= i;
              return (
                <div
                  key={step.n}
                  className="group relative flex flex-col items-start md:items-center md:text-center"
                >
                  <div className="relative z-10 mb-6 sm:mb-8">
                    <span
                      className={`relative flex h-12 w-12 items-center justify-center rounded-full border-2 text-base font-bold tracking-[-0.02em] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] sm:h-14 sm:w-14 sm:text-lg ${
                        on
                          ? "scale-110 border-accent bg-accent text-white"
                          : "border-border-strong bg-bg"
                      }`}
                    >
                      {step.n}
                      <span
                        aria-hidden="true"
                        className={`pointer-events-none absolute inset-0 rounded-full border-2 border-accent transition-opacity duration-500 ${
                          on ? "animate-ping opacity-60" : "opacity-0"
                        }`}
                      />
                    </span>
                  </div>

                  <div className="flex w-full flex-col items-start md:items-center">
                    <span
                      aria-hidden="true"
                      className={`mb-4 block h-px bg-gradient-to-r from-accent to-transparent transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] sm:mb-5 ${
                        on ? "w-16" : "w-10"
                      }`}
                    />
                    <h3
                      className={`text-[22px] font-semibold leading-[1.15] tracking-[-0.02em] transition-colors duration-300 sm:text-xl md:text-2xl ${
                        on ? "text-text" : "text-text/60"
                      }`}
                    >
                      {step.t}
                    </h3>
                    <p className="mt-3 max-w-xs text-[17px] leading-7 text-muted sm:text-sm md:text-[15px]">
                      {step.d}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}