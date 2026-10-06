"use client";

import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import about from "../../data/about-page.json";
import {
    ProcessSection,
    TrustSection,
    CTASection,
    FloatingWhatsApp,
} from "../../components/sections";

const { hero, story, values } = about;

/* ── Icon set — keyed by name from JSON ── */
function Icon({ name, className }: { name: string; className?: string }) {
    const props = {
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 1.8,
        strokeLinecap: "round" as const,
        strokeLinejoin: "round" as const,
        className,
    };

    switch (name) {
        case "chart":
            return (
                <svg {...props}>
                    <path d="M3 3v18h18" />
                    <path d="m7 12 3-3 4 4 5-6" />
                </svg>
            );
        case "sparkle":
            return (
                <svg {...props}>
                    <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1" />
                </svg>
            );
        case "cpu":
            return (
                <svg {...props}>
                    <rect x="6" y="6" width="12" height="12" rx="2" />
                    <path d="M9 2v2M15 2v2M9 20v2M15 20v2M2 9h2M2 15h2M20 9h2M20 15h2" />
                </svg>
            );
        case "trend":
            return (
                <svg {...props}>
                    <path d="m3 17 6-6 4 4 8-8" />
                    <path d="M14 7h7v7" />
                </svg>
            );
        case "briefcase":
            return (
                <svg {...props}>
                    <rect x="3" y="7" width="18" height="13" rx="2" />
                    <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                    <path d="M3 13h18" />
                </svg>
            );
        case "users":
            return (
                <svg {...props}>
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
            );
        case "layers":
            return (
                <svg {...props}>
                    <path d="m12 2 9 5-9 5-9-5 9-5Z" />
                    <path d="m3 12 9 5 9-5" />
                    <path d="m3 17 9 5 9-5" />
                </svg>
            );
        case "headset":
            return (
                <svg {...props}>
                    <path d="M3 14v-2a9 9 0 0 1 18 0v2" />
                    <path d="M3 14h3v6H5a2 2 0 0 1-2-2v-4Z" />
                    <path d="M21 14h-3v6h1a2 2 0 0 0 2-2v-4Z" />
                </svg>
            );
        default:
            return null;
    }
}

export default function AboutPage() {
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

            {/* ═══ HERO ═══ */}
            <section className="relative isolate overflow-hidden border-b border-border-soft bg-surface px-4 py-12 xs:px-5 xs:py-14 sm:px-6 sm:py-15 md:px-8 md:py-15 lg:px-10 lg:py-15">
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 -z-10 opacity-[0.35]"
                    style={{
                        backgroundImage:
                            "radial-gradient(rgba(15,23,42,0.08) 1px, transparent 1px)",
                        backgroundSize: "22px 22px",
                        maskImage:
                            "radial-gradient(ellipse 70% 60% at 45% 35%, black 20%, transparent 85%)",
                        WebkitMaskImage:
                            "radial-gradient(ellipse 70% 60% at 45% 35%, black 20%, transparent 85%)",
                    }}
                />

                <div className="mx-auto w-full max-w-7xl">
                    <div className="grid items-center gap-10 sm:gap-12 lg:grid-cols-[1fr_0.92fr] lg:gap-16">
                        {/* LEFT — copy */}
                        <div className="relative z-10 mx-auto max-w-[640px] text-center lg:mx-0 lg:text-left">
                            <div className="inline-flex items-center gap-2 rounded-full border border-[#E2E8F0] bg-white px-3 py-1.5 text-[12px] font-semibold uppercase tracking-[0.18em] text-[#64748B] shadow-[0_6px_20px_-14px_rgba(15,23,42,0.35)] sm:text-[10px]">
                                <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-[#7C3AED] to-[#2563EB]" />
                                {hero.eyebrow}
                            </div>

                            <h1 className="mt-4 text-[2.2rem] font-semibold leading-[1.05] tracking-[-0.035em] xs:text-[2.125rem] sm:mt-5 sm:text-[2.5rem] sm:leading-[1] md:text-[3rem] lg:text-[3.5rem] xl:text-[3.75rem]">
                                {hero.headingLine1}{" "}
                                <span className="relative inline-block">
                                    <span className="relative z-10 text-[#2563EB]">
                                        {hero.headingHighlight1}
                                    </span>
                                    <span
                                        aria-hidden="true"
                                        className="absolute inset-x-[-0.15em] bottom-[0.08em] -z-0 h-[0.45em] rounded-full bg-[#2563EB]/10"
                                    />
                                </span>
                                <br />
                                {hero.headingLine2}{" "}
                                <span className="relative inline-block">
                                    <span className="relative z-10">{hero.headingHighlight2}</span>
                                    <span
                                        aria-hidden="true"
                                        className="absolute -bottom-1 left-0 h-[2px] w-full bg-gradient-to-r from-[#0D9488] via-[#7C3AED] to-transparent"
                                    />
                                </span>
                                {hero.headingSuffix}
                            </h1>

                            <p className="mx-auto mt-5 max-w-xl text-[16px] leading-7 text-muted sm:mt-6 sm:text-base sm:leading-7 md:text-lg md:leading-8 lg:mx-0">
                                {hero.description}
                            </p>

                            <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:items-center sm:justify-center lg:justify-start">
                                <Link
                                    href={hero.primaryCta.href}
                                    className="group inline-flex items-center justify-center gap-3 rounded-2xl bg-text px-5 py-3 text-[15px] font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#0D9488] hover:shadow-[0_16px_35px_-18px_rgba(13,148,136,0.55)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0D9488] sm:px-6 sm:py-3.5 sm:text-sm"
                                >
                                    {hero.primaryCta.label}
                                    <span className="text-base transition-transform duration-300 group-hover:translate-x-1">
                                        →
                                    </span>
                                </Link>

                                <Link
                                    href={hero.secondaryCta.href}
                                    className="group inline-flex items-center justify-center gap-3 rounded-2xl border border-border-soft bg-bg px-5 py-3 text-[15px] font-semibold text-text transition-all duration-300 hover:-translate-y-0.5 hover:border-[#0D9488] hover:text-[#0D9488] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0D9488] sm:px-6 sm:py-3.5 sm:text-sm"
                                >
                                    {hero.secondaryCta.label}
                                    <span
                                        aria-hidden="true"
                                        className="text-base transition-transform duration-300 group-hover:translate-x-1"
                                    >
                                        ↗
                                    </span>
                                </Link>
                            </div>
                        </div>

                        {/* RIGHT — visual */}
                        <div className="relative mx-auto w-full max-w-[520px] sm:max-w-[560px] lg:max-w-none">
                            <div
                                aria-hidden="true"
                                className="pointer-events-none absolute -inset-4 -z-10 rounded-[3rem] bg-gradient-to-br from-[#0D9488]/10 via-transparent to-[#7C3AED]/10 blur-3xl sm:-inset-8"
                            />

                            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[1.5rem] border border-border-soft bg-bg p-1.5 shadow-[0_40px_80px_-42px_rgba(15,23,42,0.35)] sm:rounded-[2.25rem] sm:p-2">
                                <div className="h-full w-full overflow-hidden rounded-[1.25rem] sm:rounded-[1.75rem]">
                                    <img
                                        src={hero.image}
                                        alt={hero.imageAlt}
                                        className="h-full w-full object-cover"
                                    />
                                </div>
                            </div>

                            {/* Floating badges */}
                            {hero.floatingBadges.map((badge, i) => {
                                const isTopRight = badge.position === "top-right";
                                return (
                                    <div
                                        key={badge.label}
                                        className={`${isTopRight ? "float-card" : "float-card-slow"
                                            } absolute z-20 ${isTopRight
                                                ? "-right-1 -top-3 sm:-right-6 sm:-top-6"
                                                : "-bottom-3 -left-1 sm:-bottom-6 sm:-left-6"
                                            }`}
                                        style={!isTopRight ? { animationDelay: "-1.5s" } : undefined}
                                    >
                                        <div className="rounded-2xl border border-border-soft bg-white px-3 py-2 shadow-[0_22px_48px_-24px_rgba(15,23,42,0.4)] sm:rounded-3xl sm:px-4 sm:py-3">
                                            {badge.icon ? (
                                                <div className="flex items-center gap-2.5 sm:gap-3">
                                                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#0D9488]/10 text-[#0D9488] sm:h-9 sm:w-9 sm:rounded-xl">
                                                        <Icon name={badge.icon} className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                                                    </span>
                                                    <div>
                                                        <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-muted sm:text-[10px]">
                                                            {badge.label}
                                                        </p>
                                                        <p className="mt-0.5 text-[15px] font-semibold text-text sm:text-sm">
                                                            {badge.value}
                                                        </p>
                                                    </div>
                                                </div>
                                            ) : (
                                                <>
                                                    <p className="text-[12px] font-bold uppercase tracking-[0.2em] text-[#0D9488] sm:text-[10px]">
                                                        {badge.label}
                                                    </p>
                                                    <p className="mt-1 text-[15px] font-semibold text-text sm:text-sm">
                                                        {badge.value}
                                                    </p>
                                                </>
                                            )}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══ STORY ═══ */}
            <section className="border-b border-border-soft bg-surface px-4 py-14 xs:px-5 xs:py-16 sm:px-6 sm:py-20 md:px-8 md:py-24 lg:px-10">
                <div className="mx-auto w-full max-w-7xl">
                    <div className="grid items-center gap-10 sm:gap-12 lg:grid-cols-12 lg:gap-16">
                        {/* LEFT — illustration */}
                        <div className="lg:col-span-6">
                            <div className="relative">
                                <div
                                    aria-hidden="true"
                                    className="pointer-events-none absolute -inset-4 -z-10 rounded-[3rem] bg-gradient-to-br from-[#2563EB]/8 via-transparent to-[#F59E0B]/8 blur-3xl sm:-inset-6"
                                />

                                <div className="relative aspect-[5/4] w-full overflow-hidden rounded-[1.5rem] border border-border-soft bg-gradient-to-br from-[#EFF4FF] via-white to-[#FFF7ED] shadow-[0_30px_70px_-40px_rgba(15,23,42,0.25)] sm:rounded-[2rem]">
                                    <div
                                        aria-hidden="true"
                                        className="absolute inset-0 opacity-50"
                                        style={{
                                            backgroundImage:
                                                "radial-gradient(circle, rgba(37,99,235,0.08) 1px, transparent 1px)",
                                            backgroundSize: "22px 22px",
                                        }}
                                    />
                                    <img
                                        src={story.image}
                                        alt={story.imageAlt}
                                        className="relative h-full w-full object-cover"
                                    />
                                </div>

                                {/* Decorative accent card */}
                                <div
                                    aria-hidden="true"
                                    className="absolute -bottom-4 -right-4 hidden h-20 w-20 rounded-2xl border border-border-soft bg-white shadow-[0_20px_45px_-20px_rgba(15,23,42,0.25)] sm:block sm:h-24 sm:w-24"
                                >
                                    <div className="flex h-full w-full flex-col items-center justify-center gap-1.5">
                                        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#2563EB]/10 text-[#2563EB]">
                                            <Icon name="trend" className="h-4 w-4" />
                                        </span>
                                        <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-muted sm:text-[9px]">
                                            Growth
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT — content */}
                        <div className="lg:col-span-6">
                            <span className="inline-flex items-center gap-2 rounded-full border border-border-soft bg-white px-3 py-1.5 text-[13px] font-semibold uppercase tracking-[0.2em] text-muted shadow-[0_6px_20px_-14px_rgba(15,23,42,0.3)] sm:px-3.5 sm:text-[11px]">
                                <span className="h-1.5 w-1.5 rounded-full bg-[#2563EB]" />
                                {story.eyebrow}
                            </span>

                            <h2 className="mt-4 text-[1.75rem] font-bold leading-[1.08] tracking-[-0.03em] text-text xs:text-[2rem] sm:mt-5 sm:text-[2.5rem] sm:leading-[1.05] md:text-[2.75rem] lg:text-[3rem]">
                                {story.headingLine1}
                                <br />
                                <span className="text-[#2563EB]">{story.headingHighlight}</span>
                            </h2>

                            <div className="mt-5 space-y-4 text-[17px] leading-7 text-muted sm:mt-6 sm:text-base sm:leading-7 md:text-[17px] md:leading-8">
                                {story.paragraphs.map((p, i) => (
                                    <p key={i}>{p}</p>
                                ))}
                            </div>

                            {/* Feature cards */}
                            <div className="mt-6 grid gap-3 sm:mt-8 sm:grid-cols-2 sm:gap-4">
                                {story.features.map((item) => (
                                    <div
                                        key={item.title}
                                        className="group flex items-start gap-3 rounded-2xl border border-border-soft bg-bg p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#2563EB]/30 hover:shadow-[0_15px_35px_-20px_rgba(15,23,42,0.2)] sm:p-5"
                                    >
                                        <span
                                            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl"
                                            style={{
                                                backgroundColor: `${item.color}15`,
                                                color: item.color,
                                            }}
                                        >
                                            <Icon name={item.icon} className="h-4 w-4" />
                                        </span>

                                        <div className="min-w-0">
                                            <h3 className="text-[15px] font-semibold text-text sm:text-[15px]">
                                                {item.title}
                                            </h3>
                                            <p className="mt-1 text-[14px] leading-5 text-muted sm:text-xs">
                                                {item.desc}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* ═══ STATS BAR ═══ */}
                    <div className="relative mt-12 sm:mt-16 md:mt-20">
                        <div
                            aria-hidden="true"
                            className="pointer-events-none absolute -inset-x-2 -top-8 bottom-0 rounded-[40px] bg-gradient-to-r from-[#2563EB]/10 via-transparent to-[#7C3AED]/10 blur-2xl sm:-inset-x-4"
                        />

                        <div className="relative grid grid-cols-1 gap-3 xs:grid-cols-2 sm:gap-4 lg:grid-cols-4">
                            {story.stats.map((stat) => (
                                <div
                                    key={stat.label}
                                    className="group relative flex items-center gap-4 overflow-hidden rounded-2xl border border-border-soft bg-surface px-4 py-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#2563EB]/30 hover:shadow-[0_18px_40px_-24px_rgba(37,99,235,0.55)] sm:px-5 sm:py-5"
                                >
                                    <div
                                        aria-hidden="true"
                                        className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-[#2563EB]/15 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100"
                                    />

                                    <span className="relative flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#2563EB]/15 bg-gradient-to-br from-[#2563EB]/12 to-[#2563EB]/[0.03] text-[#2563EB] transition-transform duration-300 group-hover:scale-105 sm:h-12 sm:w-12">
                                        <Icon name={stat.icon} className="h-4 w-4 sm:h-5 sm:w-5" />
                                    </span>

                                    <div className="relative flex min-w-0 flex-col">
                                        <span className="text-[1.375rem] font-bold tracking-[-0.03em] text-text xs:text-2xl sm:text-[28px]">
                                            {stat.value}
                                            <span className="text-[#2563EB]">{stat.suffix}</span>
                                        </span>
                                        <span className="mt-0.5 truncate text-[12px] font-semibold uppercase tracking-[0.18em] text-muted sm:text-[11px]">
                                            {stat.label}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══ VALUES ═══ */}
            <section className="border-b border-border-soft px-4 py-14 xs:px-5 xs:py-16 sm:px-6 sm:py-20 md:px-8 md:py-24 lg:px-10 lg:py-28">
                <div className="mx-auto w-full max-w-7xl">
                    <div>
                        <p className="text-[14px] font-semibold uppercase tracking-[0.25em] text-accent sm:text-xs">
                            {values.eyebrow}
                        </p>

                        <h2 className="mt-3 text-[1.875rem] font-semibold leading-[1.05] tracking-[-0.035em] text-text xs:text-[2.125rem] sm:mt-4 sm:text-[2.5rem] sm:leading-[1] md:text-[3rem] lg:text-[3.5rem]">
                            {values.heading}{" "}
                            <span className="text-muted">{values.headingHighlight}</span>
                        </h2>

                        <p className="mt-3 max-w-2xl text-[16px] leading-7 text-muted sm:mt-4 sm:text-base sm:leading-7 md:text-lg md:leading-8">
                            {values.intro}
                        </p>
                    </div>

                    <div className="mt-10 grid gap-4 sm:mt-14 sm:gap-5 md:grid-cols-2 lg:mt-16 lg:grid-cols-4">
                        {values.items.map((value) => (
                            <div
                                key={value.n}
                                className="group relative flex min-h-[180px] flex-col justify-between overflow-hidden rounded-2xl border border-border-soft bg-bg p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#2563EB]/30 hover:shadow-[0_20px_50px_-25px_rgba(15,23,42,0.2)] sm:min-h-[220px] sm:p-6 md:min-h-[240px] md:p-7"
                            >
                                <div className="flex items-start justify-between">
                                    <span className="font-mono text-[15px] text-muted sm:text-xs">
                                        {value.n}
                                    </span>

                                    <span
                                        aria-hidden="true"
                                        className="h-2 w-2 rounded-full transition-all duration-500 group-hover:w-8"
                                        style={{ backgroundColor: value.accent }}
                                    />
                                </div>

                                <div className="mt-6 sm:mt-8">
                                    <h3 className="text-[20px] font-semibold tracking-[-0.02em] text-text xs:text-lg sm:text-xl">
                                        {value.title}
                                    </h3>
                                    <p className="mt-2 text-[17px] leading-6 text-muted sm:mt-3 sm:text-sm">
                                        {value.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Reused sections ── */}
            <ProcessSection />
            <TrustSection />
            <CTASection />

            <FloatingWhatsApp />
            <Footer />
        </main>
    );
}