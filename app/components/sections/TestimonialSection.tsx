"use client";

import { useEffect, useRef } from "react";
import home from "../../data/home.json";

/* Read testimonials from home.json */
const TESTIMONIALS = home.testimonials;

const accentMap: Record<string, { bg: string; text: string }> = {
    blue: { bg: "bg-[#2563EB]", text: "text-[#2563EB]" },
    violet: { bg: "bg-[#7C3AED]", text: "text-[#7C3AED]" },
    amber: { bg: "bg-[#F59E0B]", text: "text-[#F59E0B]" },
};

/* ── Single testimonial card ── */
function TestimonialCard({
    testimonial,
}: {
    testimonial: (typeof TESTIMONIALS)[number];
}) {
    const theme = accentMap[testimonial.accent] ?? accentMap.blue;

    return (
        <figure className="group relative flex h-full w-[280px] shrink-0 flex-col justify-between rounded-xl border border-border-soft bg-surface p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#2563EB]/30 hover:shadow-[0_20px_50px_-25px_rgba(15,23,42,0.2)] xs:w-[300px] xs:rounded-2xl xs:p-6 sm:w-[380px] sm:rounded-3xl sm:p-7 md:w-[420px] md:p-8">
            <span
                aria-hidden="true"
                className={`pointer-events-none absolute right-5 top-4 select-none font-serif text-[4rem] leading-none xs:right-6 xs:top-5 xs:text-[5rem] ${theme.text} opacity-[0.12] sm:text-[6rem]`}
            >
                &ldquo;
            </span>

            <blockquote className="relative">
                <p className="text-[15px] leading-6 text-text xs:text-[15.5px] xs:leading-[1.7] sm:text-base sm:leading-8">
                    {testimonial.quote}
                </p>
            </blockquote>

            <span className="mt-5 block h-px w-full bg-border-soft xs:mt-6" />

            <figcaption className="mt-5 flex items-center gap-3 xs:mt-6 xs:gap-4">
                <span
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-[12px] font-bold text-white xs:h-11 xs:w-11 xs:text-[13px] sm:text-xs ${theme.bg}`}
                >
                    {testimonial.initials}
                </span>

                <div className="flex min-w-0 flex-1 flex-col">
                    <span className="truncate text-[14px] font-semibold text-text xs:text-[15px] sm:text-sm">
                        {testimonial.name}
                    </span>
                </div>

                <span
                    className={`flex shrink-0 items-center gap-0.5 ${theme.text}`}
                    aria-label="5 out of 5 stars"
                >
                    {[...Array(5)].map((_, i) => (
                        <svg
                            key={i}
                            aria-hidden="true"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="h-3 w-3 xs:h-3.5 xs:w-3.5"
                        >
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.56 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z" />
                        </svg>
                    ))}
                </span>
            </figcaption>
        </figure>
    );
}

export default function TestimonialSection() {
    const scrollRef = useRef<HTMLDivElement | null>(null);
    const pausedRef = useRef(false);

    /* ── Auto-scroll right to left ── */
    useEffect(() => {
        const el = scrollRef.current;
        if (!el) return;

        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

        const SPEED = 0.5;
        let raf = 0;
        let pos = 0;

        const tick = () => {
            const half = el.scrollWidth / 2;

            if (!pausedRef.current) {
                pos += SPEED;
                if (pos >= half) pos -= half;
                el.scrollLeft = pos;
            } else {
                pos = el.scrollLeft;
                if (pos >= half) pos -= half;
            }

            raf = requestAnimationFrame(tick);
        };

        raf = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(raf);
    }, []);

    return (
        <section
            id="testimonials"
            className="overflow-hidden border-b border-border-soft py-14 xs:py-16 sm:py-24 md:py-25"
        >
            {/* Section header */}
            <div className="mx-auto w-full px-4 xs:px-5 sm:px-6 md:px-8">
                <div>
                    <p className="text-[12px] font-semibold uppercase tracking-[0.22em] text-accent xs:text-[13px] xs:tracking-[0.25em] sm:text-xs">
                        ✦ Testimonials
                    </p>

                    <h2 className="mt-3 text-[1.875rem] font-semibold leading-[1.02] tracking-[-0.035em] text-text xs:mt-4 xs:text-[2.125rem] xs:leading-[1] sm:text-5xl sm:leading-[0.98] sm:tracking-[-0.045em] md:text-6xl">
                        Trusted by businesses{" "}
                        <span className="text-muted">that value quality.</span>
                    </h2>

                    <p className="mt-2 text-[15px] leading-6 text-muted xs:text-[15.5px] xs:leading-[1.7] sm:text-[17px] sm:leading-8">
                        A few words from clients I&apos;ve worked with — from early-stage
                        founders to established teams shipping real products.
                    </p>
                </div>
            </div>

            {/* Marquee */}
            <div className="relative mt-10 xs:mt-12 sm:mt-16">
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-bg to-transparent xs:w-16 sm:w-32"
                />
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-bg to-transparent xs:w-16 sm:w-32"
                />

                <div
                    ref={scrollRef}
                    onMouseEnter={() => (pausedRef.current = true)}
                    onMouseLeave={() => (pausedRef.current = false)}
                    onTouchStart={() => (pausedRef.current = true)}
                    onTouchEnd={() => (pausedRef.current = false)}
                    className="flex gap-4 overflow-x-hidden py-4 xs:gap-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                >
                    <div className="flex shrink-0 gap-4 pl-4 xs:gap-5 xs:pl-5 sm:pl-6 md:pl-8">
                        {TESTIMONIALS.map((t) => (
                            <TestimonialCard key={`a-${t.name}`} testimonial={t} />
                        ))}
                    </div>
                    <div className="flex shrink-0 gap-4 xs:gap-5" aria-hidden="true">
                        {TESTIMONIALS.map((t) => (
                            <TestimonialCard key={`b-${t.name}`} testimonial={t} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}