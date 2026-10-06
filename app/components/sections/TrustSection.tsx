"use client";

import Link from "next/link";
import home from "../../data/home.json";

const EASE = "ease-[cubic-bezier(0.22,1,0.36,1)]";

export default function TrustSection() {
  const trust = home.trust;
  const points = trust.points;

  return (
    <section className="border-y border-border-soft bg-surface px-5 py-20 sm:px-6 sm:py-24 md:px-8 md:py-25">
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-24">
              <h2 className="text-4xl font-semibold leading-[0.95] tracking-[-0.05em] sm:text-5xl md:text-6xl lg:text-7xl">
                {trust.heading}{" "}
                <span className="text-muted">{trust.headingHighlight}</span>
              </h2>
              <p className="mt-5 max-w-sm text-[16px] leading-7 text-muted sm:mt-6 sm:text-base md:text-lg md:leading-8">
                {trust.intro}
              </p>
              <Link
                href="/contact"
                className="group mt-7 inline-flex w-fit items-center gap-3 rounded-full bg-[#0F1117] py-2 pl-5 pr-2 text-[15px] font-semibold text-white transition-colors duration-300 hover:bg-[#2563EB] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563EB] sm:mt-8 sm:pl-6 sm:text-sm"
              >
                {trust.ctaLabel}
                <span
                  aria-hidden="true"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#2563EB] transition-transform duration-300 group-hover:translate-x-0.5"
                >
                  →
                </span>
              </Link>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-8">
            {points.map((point) => (
              <div
                key={point.n}
                className={`group relative flex min-h-[200px] flex-col justify-between overflow-hidden rounded-[2rem] border border-border-soft bg-bg p-6 transition-[background-color,color,transform,border-color] duration-700 ${EASE} hover:-translate-y-1 hover:border-transparent hover:bg-[#0F1117] hover:text-white motion-reduce:transition-none sm:min-h-[240px] md:min-h-[260px] md:p-9`}
              >
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -bottom-16 -right-16 h-52 w-52 rounded-full bg-[#2563EB]/40 opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-100"
                />
                <span
                  aria-hidden="true"
                  className={`relative h-2.5 w-2.5 rounded-full bg-[#2563EB] transition-all duration-700 ${EASE} group-hover:w-10 motion-reduce:transition-none`}
                />
                <div className="relative mt-5">
                  <h3 className="text-[22px] font-semibold tracking-[-0.03em] sm:text-2xl md:text-3xl">
                    {point.title}
                  </h3>
                  <p className="mt-3 text-[17px] leading-7 text-muted transition-colors duration-700 group-hover:text-white/60 sm:text-sm">
                    {point.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}