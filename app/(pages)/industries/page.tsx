"use client";

import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import industriesData from "../../data/industries-page.json";
import {
    ServicesSection,
    ProcessSection,
    CTASection,
    FloatingWhatsApp,
} from "../../components/sections";

const { hero, industries, benefits } = industriesData;

export default function IndustriesPage() {
    return (
        <main
            id="top"
            className="relative min-h-screen overflow-x-hidden bg-bg text-text"
        >
            {/* Ambient background */}
            <div className="pointer-events-none fixed inset-0 -z-10">
                <div className="glow-blob absolute -top-40 left-1/4 h-[300px] w-[300px] rounded-full bg-accent/10 blur-[120px] sm:h-[500px] sm:w-[500px] sm:blur-[140px]" />
                <div className="glow-blob absolute top-1/3 -right-40 h-[300px] w-[300px] rounded-full bg-accent/8 blur-[120px] sm:h-[500px] sm:w-[500px] sm:blur-[140px]" />
                <div className="glow-blob absolute bottom-0 left-0 h-[260px] w-[260px] rounded-full bg-accent/6 blur-[120px] sm:h-[400px] sm:w-[400px] sm:blur-[140px]" />
            </div>

            <Header />

            {/* Hero section */}
            <section className="relative isolate overflow-hidden border-b border-border-soft bg-[#FBFCFE] px-4 py-12 xs:px-5 xs:py-14 sm:px-6 sm:py-15 md:px-8 md:py-15 lg:px-10 lg:py-15">
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
                >
                    <div className="absolute -right-40 -top-20 h-[24rem] w-[24rem] rounded-full bg-[#7C3AED]/[0.07] blur-[130px] sm:h-[34rem] sm:w-[34rem]" />
                    <div className="absolute -left-40 bottom-0 h-[20rem] w-[20rem] rounded-full bg-[#2563EB]/[0.05] blur-[120px] sm:h-[28rem] sm:w-[28rem]" />
                </div>

                <div className="mx-auto w-full max-w-7xl">
                    <div className="flex items-center gap-3">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#2563EB]" />
                        <p className="text-[12px] font-semibold uppercase tracking-[0.24em] text-[#64748B] xs:text-[13px] xs:tracking-[0.28em] sm:text-[11px]">
                            {hero.eyebrow}
                        </p>
                    </div>

                    <h1 className="mt-4 text-[2rem] font-bold leading-[1.05] tracking-[-0.03em] text-[#0B1F4D] xs:text-[2.25rem] xs:leading-[1.02] sm:mt-5 sm:text-[2.75rem] sm:leading-[1] sm:tracking-[-0.035em] md:text-[3.25rem] lg:text-[4rem]">
                        {hero.headingLine1}{" "}
                        <span className="relative inline-block">
                            <span className="relative z-10 bg-gradient-to-r from-[#2563EB] via-[#4F46E5] to-[#7C3AED] bg-clip-text text-transparent">
                                {hero.headingHighlight}
                            </span>
                            <span
                                aria-hidden="true"
                                className="absolute inset-x-[-0.1em] bottom-[0.05em] -z-0 h-[0.35em] rounded-full bg-[#2563EB]/10"
                            />
                        </span>
                    </h1>

                    <div className="mt-10 grid gap-8 border-t border-[#D7DEE8]/60 pt-8 sm:mt-12 lg:grid-cols-[1.4fr_1fr_1fr] lg:gap-0 lg:pt-10">
                        <div className="lg:pr-10">
                            <p className="text-[13px] font-semibold uppercase tracking-[0.15em] text-[#2563EB] sm:text-sm">
                                Overview
                            </p>
                            <p className="mt-3 max-w-md text-[15px] leading-6 text-[#64748B] xs:text-[16px] xs:leading-7 sm:text-base sm:leading-8">
                                {hero.description}
                            </p>
                        </div>

                        <div className="lg:border-l lg:border-[#D7DEE8]/60 lg:px-10">
                            <p className="text-[13px] font-semibold uppercase tracking-[0.15em] text-[#2563EB] sm:text-sm">
                                Get started
                            </p>

                            <div className="mt-3 flex flex-col gap-2.5">
                                <Link
                                    href={hero.primaryCta.href}
                                    className="group inline-flex items-center justify-between gap-3 rounded-full bg-[#0B1F4D] px-5 py-3 text-[15px] font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#142E63] hover:shadow-[0_14px_30px_-14px_rgba(11,31,77,0.45)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563EB] sm:text-sm"
                                >
                                    {hero.primaryCta.label}
                                    <span className="text-base transition-transform duration-300 group-hover:translate-x-1">
                                        →
                                    </span>
                                </Link>

                                <Link
                                    href={hero.secondaryCta.href}
                                    className="group inline-flex items-center justify-between gap-3 rounded-full border border-[#D7DEE8] bg-white px-5 py-3 text-[15px] font-semibold text-[#0B1F4D] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#2563EB] hover:text-[#2563EB] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563EB] sm:text-sm"
                                >
                                    {hero.secondaryCta.label}
                                    <span className="text-base transition-transform duration-300 group-hover:translate-x-1">
                                        ↗
                                    </span>
                                </Link>
                            </div>
                        </div>

                        <div className="lg:border-l lg:border-[#D7DEE8]/60 lg:pl-10">
                            <p className="text-[13px] font-semibold uppercase tracking-[0.15em] text-[#2563EB] sm:text-sm">
                                At a glance
                            </p>

                            <ul className="mt-4 space-y-4">
                                {hero.stats.map((stat) => (
                                    <li
                                        key={stat.label}
                                        className="flex items-baseline gap-3 border-b border-[#D7DEE8]/40 pb-3 last:border-0 last:pb-0"
                                    >
                                        <span className="w-20 shrink-0 text-[1.5rem] font-bold tracking-[-0.03em] text-[#0B1F4D] xs:text-[1.625rem] sm:text-3xl">
                                            {stat.value}
                                            <span className="text-[#2563EB]">{stat.suffix}</span>
                                        </span>
                                        <span className="text-[13px] font-medium text-[#64748B] xs:text-[14px] sm:text-sm">
                                            {stat.label}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Industries grid section */}
            <section className="border-b border-border-soft px-4 py-14 xs:px-5 xs:py-16 sm:px-6 sm:py-20 md:px-8 md:py-24 lg:px-10 lg:py-28">
                <div className="mx-auto w-full max-w-7xl">
                    <div>
                        <p className="text-[13px] font-semibold uppercase tracking-[0.25em] text-accent sm:text-xs">
                            {industries.eyebrow}
                        </p>

                        <h2 className="mt-3 text-[1.75rem] font-semibold leading-[1.08] tracking-[-0.03em] text-text xs:text-[2rem] xs:leading-[1.05] sm:mt-4 sm:text-[2.5rem] sm:leading-[1] md:text-[3rem] lg:text-[3.5rem]">
                            {industries.heading}{" "}
                            <span className="text-muted">{industries.headingHighlight}</span>
                        </h2>

                        <p className="mt-3 max-w-2xl text-[15px] leading-6 text-muted xs:text-[16px] xs:leading-7 sm:mt-4 sm:text-base sm:leading-7 md:text-[17px] md:leading-8">
                            {industries.intro}
                        </p>
                    </div>

                    <div className="mt-10 border-t border-border-soft sm:mt-14 lg:mt-16">
                        {industries.items.map((item) => (
                            <article
                                key={item.n}
                                className="group relative border-b border-border-soft"
                            >
                                <div className="grid gap-5 py-6 transition-colors duration-500 group-hover:bg-bg-soft/40 xs:gap-6 xs:py-8 sm:gap-8 sm:py-10 md:grid-cols-12 md:gap-10 md:py-10">
                                    {/* Left: big full-height image */}
                                    <div className="relative md:col-span-4">
                                        <div className="relative h-56 w-full overflow-hidden rounded-2xl bg-bg-soft xs:h-64 sm:h-72 md:h-full md:min-h-[220px]">
                                            {/* eslint-disable-next-line @next/next/no-img-element */}
                                            <img
                                                src={item.img}
                                                alt={item.title}
                                                loading="lazy"
                                                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
                                            />

                                            {/* Number badge */}
                                            <span className="absolute left-3 top-3 inline-flex items-center rounded-full bg-black/55 px-3 py-1.5 font-mono text-[13px] font-semibold text-white backdrop-blur-sm xs:left-4 xs:top-4 xs:text-[14px] sm:text-xs">
                                                {item.n}
                                            </span>

                                            {/* Accent tint overlay */}
                                            <span
                                                aria-hidden="true"
                                                className={`pointer-events-none absolute inset-0 ${item.accentSoft} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
                                            />
                                        </div>

                                        {/* Mobile-only title block under the image */}
                                        <div className="mt-4 md:hidden">
                                            <h3 className="text-[20px] font-semibold tracking-[-0.02em] text-text xs:text-[22px]">
                                                {item.title}
                                            </h3>
                                            <p className={`mt-1 text-[14px] font-medium xs:text-[15px] ${item.accentText}`}>
                                                {item.tagline}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Middle: title + description */}
                                    <div className="md:col-span-4">
                                        <h3 className="hidden text-2xl font-semibold leading-[1.1] tracking-[-0.03em] text-text transition-colors duration-300 group-hover:text-[#2563EB] md:block md:text-3xl">
                                            {item.title}
                                        </h3>
                                        <p className={`mt-2 hidden text-sm font-medium md:block ${item.accentText}`}>
                                            {item.tagline}
                                        </p>

                                        <p className="mt-1 text-[15px] leading-6 text-muted xs:text-[16px] xs:leading-7 sm:mt-3 sm:text-sm sm:leading-6">
                                            {item.desc}
                                        </p>
                                    </div>

                                    {/* Right: use cases */}
                                    <div className="md:col-span-3">
                                        <p className="text-[12px] font-bold uppercase tracking-[0.25em] text-muted xs:text-[13px] sm:text-[10px]">
                                            Use cases
                                        </p>

                                        <div className="mt-3 flex flex-wrap gap-1.5 xs:gap-2">
                                            {item.useCases.map((uc) => (
                                                <span
                                                    key={uc}
                                                    className="inline-flex items-center rounded-full border border-border-soft bg-bg px-2.5 py-1 text-[13px] font-medium text-muted transition-colors duration-300 group-hover:border-[#2563EB]/25 group-hover:bg-[#2563EB]/[0.04] group-hover:text-text xs:px-3 xs:py-1.5 xs:text-[14px] sm:px-2.5 sm:py-1 sm:text-[11px]"
                                                >
                                                    {uc}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* CTA column */}
                                    <div className="flex items-start md:col-span-1 md:justify-end">
                                        <Link
                                            href="/contact"
                                            aria-label={`Discuss ${item.title}`}
                                            className="flex h-11 w-11 items-center justify-center rounded-full border border-border-soft text-muted transition-all duration-500 group-hover:-rotate-45 group-hover:border-[#2563EB] group-hover:bg-[#2563EB] group-hover:text-white xs:h-12 xs:w-12 sm:h-12 sm:w-12"
                                        >
                                            <svg
                                                aria-hidden="true"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="1.8"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="h-4 w-4"
                                            >
                                                <path d="M7 17 17 7" />
                                                <path d="M7 7h10v10" />
                                            </svg>
                                        </Link>
                                    </div>
                                </div>

                                <span
                                    aria-hidden="true"
                                    className="absolute bottom-0 left-0 h-px w-0 bg-[#2563EB] transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:w-full"
                                />
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits section */}
            <section className="relative overflow-hidden border-b border-[#E5E7EB] bg-[#FBFCFE] px-4 py-14 xs:px-5 xs:py-16 sm:px-6 sm:py-20 md:px-8 md:py-24 lg:px-10 lg:py-28">
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
                >
                    <div className="absolute -left-40 top-20 h-72 w-72 rounded-full bg-[#6366F1]/[0.035] blur-3xl" />
                    <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#7C3AED]/[0.04] blur-3xl" />
                </div>

                <div className="mx-auto w-full max-w-7xl">
                    <div className="grid gap-10 sm:gap-12 lg:grid-cols-12 lg:gap-16">
                        <div className="lg:col-span-4">
                            <div className="lg:sticky lg:top-24">
                                <p className="text-[13px] font-semibold uppercase tracking-[0.25em] text-[#6366F1] sm:text-xs">
                                    {benefits.eyebrow}
                                </p>

                                <h2 className="mt-3 text-[1.75rem] font-semibold leading-[1.08] tracking-[-0.03em] text-[#0B1F4D] xs:text-[2rem] xs:leading-[1.05] sm:mt-4 sm:text-[2.5rem] sm:leading-[1] md:text-[3rem] lg:text-[3.25rem]">
                                    {benefits.heading}{" "}
                                    <span className="bg-gradient-to-r from-[#2563EB] via-[#4F46E5] to-[#7C3AED] bg-clip-text text-transparent">
                                        {benefits.headingHighlight}
                                    </span>
                                </h2>

                                <p className="mt-5 max-w-sm text-[15px] leading-6 text-[#64748B] xs:text-[16px] xs:leading-7 sm:mt-6 sm:text-base sm:leading-7 md:text-[17px] md:leading-8">
                                    {benefits.intro}
                                </p>

                                <Link
                                    href="/contact"
                                    className="group mt-6 inline-flex items-center gap-2 rounded-full bg-[#0B1F4D] py-2.5 pl-5 pr-2.5 text-[14px] font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#142E63] hover:shadow-[0_14px_30px_-14px_rgba(11,31,77,0.45)] xs:mt-7 xs:gap-3 xs:py-3 xs:pl-6 xs:pr-3 xs:text-[15px] sm:mt-8 sm:text-sm"
                                >
                                    Start a project
                                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#0B1F4D] transition-transform duration-300 group-hover:translate-x-0.5">
                                        →
                                    </span>
                                </Link>

                                <p className="mt-8 font-mono text-[11px] uppercase tracking-[0.2em] text-[#94A3B8] xs:text-[12px] sm:mt-10 sm:text-[11px]">
                                    {benefits.items.length.toString().padStart(2, "0")} key points
                                </p>
                            </div>
                        </div>

                        <div className="lg:col-span-8">
                            <ul className="border-t border-[#E2E8F0]">
                                {benefits.items.map((b) => (
                                    <li
                                        key={b.n}
                                        className="group relative border-b border-[#E2E8F0]"
                                    >
                                        <div className="flex items-start gap-4 py-6 xs:gap-5 xs:py-7 sm:gap-8 sm:py-10 md:gap-10">
                                            <span className="w-8 shrink-0 pt-1 font-mono text-[13px] tracking-[0.15em] text-[#94A3B8] transition-colors duration-300 group-hover:text-[#4F46E5] xs:w-10 xs:text-[14px] sm:text-base">
                                                {b.n}
                                            </span>

                                            <div className="flex-1 min-w-0">
                                                <div className="flex items-start justify-between gap-3 sm:gap-4">
                                                    <h3 className="text-[18px] font-semibold leading-[1.15] tracking-[-0.025em] text-[#0B1F4D] transition-colors duration-300 group-hover:text-[#3730A3] xs:text-[20px] sm:text-[1.75rem] md:text-[2rem]">
                                                        {b.title}
                                                    </h3>

                                                    <span
                                                        aria-hidden="true"
                                                        className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#E2E8F0] text-[#4F46E5] opacity-0 transition-all duration-500 group-hover:rotate-45 group-hover:border-[#C7D2FE] group-hover:bg-[#EEF2FF] group-hover:opacity-100 sm:h-9 sm:w-9"
                                                    >
                                                        <svg
                                                            viewBox="0 0 24 24"
                                                            fill="none"
                                                            stroke="currentColor"
                                                            strokeWidth="1.8"
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            className="h-4 w-4"
                                                        >
                                                            <path d="M7 17 17 7" />
                                                            <path d="M7 7h10v10" />
                                                        </svg>
                                                    </span>
                                                </div>

                                                <p className="mt-3 max-w-2xl text-[15px] leading-6 text-[#64748B] xs:text-[16px] xs:leading-7 sm:mt-4 sm:text-base sm:leading-7 md:text-[17px] md:leading-8">
                                                    {b.desc}
                                                </p>
                                            </div>
                                        </div>

                                        <span
                                            aria-hidden="true"
                                            className="absolute bottom-0 left-0 h-px w-0 bg-[#6366F1] transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:w-full"
                                        />
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <ServicesSection />
            <ProcessSection />
            <CTASection />

            <FloatingWhatsApp />
            <Footer />
        </main>
    );
}