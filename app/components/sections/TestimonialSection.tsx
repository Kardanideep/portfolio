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
        <figure className="group relative flex h-full w-[320px] shrink-0 flex-col justify-between rounded-2xl border border-border-soft bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#2563EB]/30 hover:shadow-[0_20px_50px_-25px_rgba(15,23,42,0.2)] sm:w-[380px] sm:rounded-3xl sm:p-7 md:w-[420px] md:p-8">
            <span
                aria-hidden="true"
                className={`pointer-events-none absolute right-6 top-5 select-none font-serif text-[5rem] leading-none ${theme.text} opacity-[0.12] sm:text-[6rem]`}
            >
                &ldquo;
            </span>

            <blockquote className="relative">
                <p className="text-[16px] leading-7 text-text sm:text-base sm:leading-8">
                    {testimonial.quote}
                </p>
            </blockquote>

            <span className="mt-6 block h-px w-full bg-border-soft" />

            <figcaption className="mt-6 flex items-center gap-4">
                <span
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-[13px] font-bold text-white sm:text-xs ${theme.bg}`}
                >
                    {testimonial.initials}
                </span>

                <div className="flex min-w-0 flex-1 flex-col">
                    <span className="truncate text-[15px] font-semibold text-text sm:text-sm">
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
                            className="h-3.5 w-3.5"
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
            className="overflow-hidden border-b border-border-soft py-20 sm:py-24 md:py-25"
        >
            {/* Section header */}
            <div className="mx-auto w-full px-5 sm:px-6 md:px-8">
                <div>
                    <p className="text-[14px] font-semibold uppercase tracking-[0.25em] text-accent sm:text-xs">
                        ✦ Testimonials
                    </p>

                    <h2 className="mt-4  text-4xl font-semibold leading-[0.98] tracking-[-0.045em] text-text sm:text-5xl md:text-6xl">
                        Trusted by businesses{" "}
                        <span className="text-muted">that value quality.</span>
                    </h2>

                    <p className="mt-2 text-[16px] leading-7 text-muted sm:text-[17px] sm:leading-8">
                        A few words from clients I&apos;ve worked with — from early-stage
                        founders to established teams shipping real products.
                    </p>
                </div>
            </div>

            {/* Marquee */}
            <div className="relative mt-14 sm:mt-16">
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-bg to-transparent sm:w-32"
                />
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-bg to-transparent sm:w-32"
                />

                <div
                    ref={scrollRef}
                    onMouseEnter={() => (pausedRef.current = true)}
                    onMouseLeave={() => (pausedRef.current = false)}
                    onTouchStart={() => (pausedRef.current = true)}
                    onTouchEnd={() => (pausedRef.current = false)}
                    className="flex gap-5 overflow-x-hidden py-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                >
                    <div className="flex shrink-0 gap-5 pl-5 sm:pl-6 md:pl-8">
                        {TESTIMONIALS.map((t) => (
                            <TestimonialCard key={`a-${t.name}`} testimonial={t} />
                        ))}
                    </div>
                    <div className="flex shrink-0 gap-5" aria-hidden="true">
                        {TESTIMONIALS.map((t) => (
                            <TestimonialCard key={`b-${t.name}`} testimonial={t} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}