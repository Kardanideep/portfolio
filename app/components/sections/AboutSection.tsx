"use client";

import Link from "next/link";
import home from "../../data/home.json";

export default function AboutSection() {
    const about = home.about;

    return (
        <section
            id="about"
            className="border-t border-border-soft px-5 py-20 sm:px-6 sm:py-24 md:px-8 md:py-25"
        >
            <div className="mx-auto w-full max-w-7xl">
                <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
                    {/*  LEFT — Dark editorial panel*/}
                    <div className="lg:col-span-5">
                        <div className="relative h-full overflow-hidden rounded-3xl p-7 text-white sm:p-9 lg:p-10">
                            {/* Background image */}
                            <img
                                src="/images/about-panel.webp"
                                alt=""
                                aria-hidden="true"
                                className="absolute inset-0 h-full w-full object-fit"
                            />

                            {/* Dark overlay for text legibility */}
                            <div
                                aria-hidden="true"
                                className="absolute inset-0 bg-gradient-to-br from-[#0B1F4D]/95 via-[#0B1F4D]/85 to-[#1E1B4B]/90"
                            />

                            {/* Ambient glows */}
                            <span
                                aria-hidden="true"
                                className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-[#2563EB]/30 blur-[100px]"
                            />
                            <span
                                aria-hidden="true"
                                className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-[#7C3AED]/25 blur-[100px]"
                            />

                            {/* Subtle dot grid */}
                            <div
                                aria-hidden="true"
                                className="pointer-events-none absolute inset-0 opacity-25"
                                style={{
                                    backgroundImage:
                                        "radial-gradient(circle, rgba(255,255,255,0.14) 1px, transparent 1px)",
                                    backgroundSize: "26px 26px",
                                }}
                            />

                            <div className="relative flex h-full flex-col justify-between">
                                {/* Top — eyebrow + heading */}
                                <div>
                                    <p className="inline-flex items-center gap-2 text-[13px] font-bold uppercase tracking-[0.25em] text-white/60 sm:text-[11px]">
                                        {about.eyebrow}
                                    </p>

                                    <h2 className="mt-6 text-3xl font-semibold leading-[1.05] tracking-[-0.04em] sm:text-4xl lg:text-[2.5rem]">
                                        {about.heading}{" "}
                                        <span className="italic text-white/50">
                                            {about.headingHighlight}
                                        </span>
                                    </h2>
                                </div>

                                {/* Middle — profile card */}
                                <div className="my-10 rounded-2xl border border-white/10 bg-white/[0.06] p-5 backdrop-blur-md">
                                    <div className="flex items-start gap-4">
                                        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/10 backdrop-blur">
                                            <svg
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="1.8"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="h-5 w-5 text-white"
                                            >
                                                <path d="M3 21v-2a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v2" />
                                                <circle cx="10" cy="7" r="4" />
                                                <path d="M21 21v-2a4 4 0 0 0-3-3.87" />
                                                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                                            </svg>
                                        </span>

                                        <div className="flex flex-col">
                                            <p className="flex items-center gap-2 text-[15px] font-semibold text-white sm:text-sm">
                                                <span className="relative flex h-2 w-2">
                                                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/60 motion-reduce:animate-none" />
                                                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                                                </span>
                                                {about.profileCardText}
                                            </p>
                                            <p className="mt-1 text-[14px] text-white/60 sm:text-xs">
                                                Reply within 24 hours
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Bottom — stats */}
                                <div>
                                    <p className="text-[12px] font-bold uppercase tracking-[0.25em] text-white/40 sm:text-[10px]">
                                        By the numbers
                                    </p>

                                    <div className="mt-5 grid grid-cols-3 gap-4">
                                        {about.stats.map((stat) => (
                                            <div key={stat.label} className="flex flex-col">
                                                <span className="text-2xl font-bold tracking-[-0.03em] text-white sm:text-3xl">
                                                    {stat.value}
                                                    <span className="text-[#60A5FA]">{stat.suffix}</span>
                                                </span>
                                                <span className="mt-1 text-[12px] font-semibold uppercase tracking-[0.15em] text-white/50 sm:text-[10px]">
                                                    {stat.label}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* ══════════════════════════════════════════
              RIGHT — Story + Values + CTAs
          ══════════════════════════════════════════ */}
                    <div className="flex flex-col justify-between lg:col-span-7">
                        {/* Top: story */}
                        <div>
                            {/* Story headline */}
                            <p className="text-[20px] font-medium leading-[1.3] tracking-[-0.02em] text-text sm:text-2xl md:text-[1.75rem]">
                                {about.storyHeadline}
                            </p>

                            {/* Divider */}
                            <span className="mt-7 block h-px w-16 bg-[#2563EB]" />

                            {/* Paragraphs */}
                            <div className="mt-7 space-y-5">
                                {about.paragraphs.map((paragraph, i) => (
                                    <p
                                        key={i}
                                        className="text-[17px] leading-7 text-muted sm:text-[17px] sm:leading-8"
                                    >
                                        {paragraph}
                                    </p>
                                ))}
                            </div>
                        </div>

                        {/* Middle: values as inline chips */}
                        <div className="mt-10">
                            <p className="text-[12px] font-bold uppercase tracking-[0.25em] text-muted sm:text-[10px]">
                                How we work
                            </p>

                            <div className="mt-4 flex flex-wrap gap-2">
                                {about.values.map((value) => (
                                    <span
                                        key={value.n}
                                        className="group inline-flex items-center gap-1 rounded-full border border-border-soft bg-surface px-4 py-2 transition-colors duration-300 hover:border-[#2563EB]/40 hover:bg-[#2563EB]/[0.04]"
                                    >
                                        <span className="font-mono text-[12px] text-[#2563EB] sm:text-[10px]">
                                            {value.n}
                                        </span>
                                        <span className="text-[15px] font-medium text-text sm:text-sm">
                                            {value.label}
                                        </span>
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Bottom: CTAs */}
                        <div className="mt-10 flex flex-wrap items-center gap-3 border-t border-border-soft pt-8">
                            <Link
                                href={about.ctaHref}
                                className="group inline-flex items-center gap-3 rounded-full bg-text py-2.5 pl-6 pr-2.5 text-[15px] font-semibold text-white transition-colors duration-300 hover:bg-[#2563EB] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563EB] sm:text-sm"
                            >
                                {about.ctaLabel}
                                <span
                                    aria-hidden="true"
                                    className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#2563EB] transition-transform duration-300 group-hover:translate-x-0.5"
                                >
                                    →
                                </span>
                            </Link>

                            <Link
                                href={about.secondaryHref}
                                className="group inline-flex items-center gap-3 rounded-full border border-border-soft py-2.5 pl-6 pr-2.5 text-[15px] font-semibold text-text transition-colors duration-300 hover:border-[#2563EB] hover:bg-[#2563EB] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563EB] sm:text-sm"
                            >
                                {about.secondaryLabel}
                                <span
                                    aria-hidden="true"
                                    className="flex h-9 w-9 items-center justify-center rounded-full bg-[#2563EB] text-white transition-transform duration-300 group-hover:translate-x-0.5"
                                >
                                    ↗
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}