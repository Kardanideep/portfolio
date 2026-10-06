"use client";

import Link from "next/link";
import home from "../../data/home.json";

const EASE = "ease-[cubic-bezier(0.22,1,0.36,1)]";

export default function TrustSection() {
  const trust = home.trust;
  const points = trust.points;

  return (
    <section className="border-y border-border-soft bg-surface px-4 py-14 xs:px-5 xs:py-16 sm:px-6 sm:py-24 md:px-8 md:py-25">
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid gap-8 xs:gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-24">
              <h2 className="text-[1.875rem] font-semibold leading-[1] tracking-[-0.04em] xs:text-[2.125rem] xs:leading-[0.98] sm:text-5xl sm:leading-[0.95] sm:tracking-[-0.05em] md:text-6xl lg:text-7xl">
                {trust.heading}{" "}
                <span className="text-muted">{trust.headingHighlight}</span>
              </h2>
              <p className="mt-4 max-w-sm text-[15px] leading-6 text-muted xs:mt-5 xs:text-[15.5px] xs:leading-[1.7] sm:mt-6 sm:text-base sm:leading-7 md:text-lg md:leading-8">
                {trust.intro}
              </p>
              <Link
                href="/contact"
                className="group mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-[#0F1117] py-2 pl-5 pr-2 text-[13px] font-semibold text-white transition-colors duration-300 hover:bg-[#2563EB] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563EB] xs:mt-7 xs:gap-3 xs:py-2.5 xs:pl-6 xs:pr-2.5 xs:text-[14px] sm:mt-8 sm:text-sm"
              >
                {trust.ctaLabel}
                <span
                  aria-hidden="true"
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#2563EB] transition-transform duration-300 group-hover:translate-x-0.5 xs:h-9 xs:w-9"
                >
                  →
                </span>
              </Link>
            </div>
          </div>

          <div className="grid gap-3 xs:gap-4 sm:grid-cols-2 lg:col-span-8">
            {points.map((point) => (
              <div
                key={point.n}
                className={`group relative flex min-h-[180px] flex-col justify-between overflow-hidden rounded-2xl border border-border-soft bg-bg p-5 transition-[background-color,color,transform,border-color] duration-700 ${EASE} hover:-translate-y-1 hover:border-transparent hover:bg-[#0F1117] hover:text-white motion-reduce:transition-none xs:min-h-[200px] xs:rounded-[2rem] xs:p-6 sm:min-h-[240px] md:min-h-[260px] md:p-9`}
              >
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -bottom-16 -right-16 h-52 w-52 rounded-full bg-[#2563EB]/40 opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-100"
                />
                <span
                  aria-hidden="true"
                  className={`relative h-2.5 w-2.5 rounded-full bg-[#2563EB] transition-all duration-700 ${EASE} group-hover:w-10 motion-reduce:transition-none`}
                />
                <div className="relative mt-4 xs:mt-5">
                  <h3 className="text-[19px] font-semibold tracking-[-0.03em] xs:text-[21px] sm:text-2xl md:text-3xl">
                    {point.title}
                  </h3>
                  <p className="mt-2.5 text-[14px] leading-6 text-muted transition-colors duration-700 group-hover:text-white/60 xs:mt-3 xs:text-[15px] xs:leading-[1.7] sm:text-sm">
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