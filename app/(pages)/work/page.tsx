"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import workItems from "../../data/work-items.json";
import workPage from "../../data/work-page.json";
import {
    CTASection,
    FloatingWhatsApp,
} from "../../components/sections";

type WorkItem = (typeof workItems)[number];

const { hero, projects, modal, card } = workPage;

/* ── Accent map ── */
const accentMap: Record<
    string,
    { bg: string; text: string; soft: string; ring: string }
> = {
    blue: {
        bg: "bg-[#2563EB]",
        text: "text-[#2563EB]",
        soft: "bg-[#2563EB]/10",
        ring: "ring-[#2563EB]/30",
    },
    violet: {
        bg: "bg-[#7C3AED]",
        text: "text-[#7C3AED]",
        soft: "bg-[#7C3AED]/10",
        ring: "ring-[#7C3AED]/30",
    },
    pink: {
        bg: "bg-[#EC4899]",
        text: "text-[#EC4899]",
        soft: "bg-[#EC4899]/10",
        ring: "ring-[#EC4899]/30",
    },
};

/* ═══════════════════════════════════════════════════
   PROJECT MODAL
═══════════════════════════════════════════════════ */
function ProjectModal({
    project,
    onClose,
}: {
    project: WorkItem | null;
    onClose: () => void;
}) {
    useEffect(() => {
        if (!project) return;
        const original = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = original;
        };
    }, [project]);

    useEffect(() => {
        if (!project) return;
        const handler = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        window.addEventListener("keydown", handler);
        return () => window.removeEventListener("keydown", handler);
    }, [project, onClose]);

    if (!project) return null;

    const theme = accentMap[project.accent] ?? accentMap.blue;

    return (
        <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            className="fixed inset-0 z-[100] flex items-end justify-center overflow-y-auto sm:items-center"
        >
            {/* Backdrop */}
            <button
                type="button"
                aria-label="Close modal"
                onClick={onClose}
                className="fixed inset-0 cursor-default bg-[#0B1F4D]/60 backdrop-blur-sm"
            />

            {/* Panel */}
            <div className="relative my-0 w-full max-w-4xl rounded-t-3xl border border-border-soft bg-surface shadow-[0_40px_100px_-30px_rgba(15,23,42,0.5)] sm:my-8 sm:rounded-3xl">
                <div className="max-h-[92vh] overflow-y-auto sm:max-h-[90vh]">
                    {/* Top: image */}
                    <div className="relative aspect-[16/10] w-full overflow-hidden rounded-t-3xl bg-bg-soft sm:aspect-[16/9]">
                        <img
                            src={project.img}
                            alt={project.title}
                            className="h-full w-full object-fit"
                        />

                        <div className="absolute left-3 top-3 flex flex-wrap gap-2 sm:left-4 sm:top-4">
                            <span className="rounded-full bg-black/60 px-2.5 py-1 text-[11px] font-semibold text-white backdrop-blur-sm sm:px-3 sm:py-1.5 sm:text-[11px]">
                                {project.year}
                            </span>
                            <span
                                className={`rounded-full bg-white/95 px-2.5 py-1 text-[11px] font-semibold backdrop-blur-sm sm:px-3 sm:py-1.5 sm:text-[11px] ${theme.text}`}
                            >
                                {project.category}
                            </span>
                        </div>

                        <button
                            type="button"
                            onClick={onClose}
                            aria-label="Close"
                            className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/95 text-text shadow-[0_10px_25px_-10px_rgba(15,23,42,0.4)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-white sm:right-4 sm:top-4 sm:h-10 sm:w-10"
                        >
                            <svg
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="h-4 w-4"
                            >
                                <path d="M18 6 6 18" />
                                <path d="m6 6 12 12" />
                            </svg>
                        </button>
                    </div>

                    {/* Body */}
                    <div className="p-5 xs:p-6 sm:p-8 md:p-10">
                        <div className="flex flex-wrap items-center gap-3">
                            <span className="font-mono text-[13px] text-muted sm:text-xs">
                                {project.n}
                            </span>
                            <span className="h-3 w-px bg-border-soft" />
                            <span className="text-[12px] font-medium uppercase tracking-[0.15em] text-muted sm:text-[11px]">
                                {project.tag}
                            </span>
                        </div>

                        <h2
                            id="project-modal-title"
                            className="mt-3 text-[1.75rem] font-semibold leading-[1.05] tracking-[-0.03em] text-text xs:text-[2rem] sm:mt-4 sm:text-4xl md:text-5xl"
                        >
                            {project.title}
                        </h2>

                        {/* Meta grid */}
                        <div className="mt-6 grid grid-cols-2 gap-4 border-y border-border-soft py-5 sm:mt-7 sm:grid-cols-4 sm:py-6">
                            <div>
                                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-muted sm:text-[10px]">
                                    {modal.clientLabel}
                                </p>
                                <p className="mt-1 text-[15px] font-semibold text-text sm:text-sm">
                                    {project.client}
                                </p>
                            </div>
                            <div>
                                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-muted sm:text-[10px]">
                                    {modal.roleLabel}
                                </p>
                                <p className="mt-1 text-[15px] font-semibold text-text sm:text-sm">
                                    {project.role}
                                </p>
                            </div>
                            <div>
                                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-muted sm:text-[10px]">
                                    {modal.timelineLabel}
                                </p>
                                <p className="mt-1 text-[15px] font-semibold text-text sm:text-sm">
                                    {project.timeline}
                                </p>
                            </div>
                            <div>
                                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-muted sm:text-[10px]">
                                    {modal.yearLabel}
                                </p>
                                <p className="mt-1 text-[15px] font-semibold text-text sm:text-sm">
                                    {project.year}
                                </p>
                            </div>
                        </div>

                        {/* Overview */}
                        <div className="mt-6 sm:mt-8">
                            <p className="text-[12px] font-bold uppercase tracking-[0.25em] text-muted sm:text-[11px]">
                                {modal.overviewLabel}
                            </p>
                            <p className="mt-3 text-[16px] leading-7 text-text sm:text-base sm:leading-7 md:text-[17px] md:leading-8">
                                {project.overview}
                            </p>
                        </div>

                        {/* Two-column: features + highlights */}
                        <div className="mt-8 grid gap-8 border-t border-border-soft pt-6 sm:pt-8 md:grid-cols-2 md:gap-12">
                            <div>
                                <p className="text-[12px] font-bold uppercase tracking-[0.25em] text-muted sm:text-[11px]">
                                    {modal.keyFeaturesLabel}
                                </p>
                                <ul className="mt-4 space-y-3">
                                    {project.features.map((f, i) => (
                                        <li
                                            key={f}
                                            className="flex items-start gap-3 text-[15px] leading-6 text-text sm:text-sm"
                                        >
                                            <span className="mt-0.5 w-6 shrink-0 font-mono text-[13px] text-[#2563EB] sm:text-xs">
                                                {(i + 1).toString().padStart(2, "0")}
                                            </span>
                                            <span>{f}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div>
                                <p className="text-[12px] font-bold uppercase tracking-[0.25em] text-muted sm:text-[11px]">
                                    {modal.highlightsLabel}
                                </p>
                                <ul className="mt-4 space-y-4">
                                    {project.highlights.map((h) => (
                                        <li
                                            key={h.label}
                                            className="flex flex-col gap-1 border-l-2 border-[#2563EB]/30 pl-4"
                                        >
                                            <span className="text-2xl font-bold tracking-[-0.02em] text-text sm:text-3xl">
                                                {h.value}
                                            </span>
                                            <span className="text-[12px] font-semibold uppercase tracking-[0.15em] text-muted sm:text-[10px]">
                                                {h.label}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Stack */}
                        <div className="mt-8 border-t border-border-soft pt-6">
                            <p className="text-[12px] font-bold uppercase tracking-[0.25em] text-muted sm:text-[11px]">
                                {modal.techStackLabel}
                            </p>
                            <div className="mt-3 flex flex-wrap gap-2">
                                {project.stack.map((tech) => (
                                    <span
                                        key={tech}
                                        className="rounded-full border border-border-soft bg-bg px-3 py-1.5 text-[13px] font-medium text-text sm:text-xs"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Footer actions */}
                        <div className="mt-8 flex flex-wrap items-center gap-3 border-t border-border-soft pt-6">
                            {project.liveLink ? (
                                <a
                                    href={project.liveLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group inline-flex items-center gap-3 rounded-full bg-text py-2.5 pl-5 pr-2.5 text-[15px] font-semibold text-white transition-colors duration-300 hover:bg-[#2563EB] sm:pl-6 sm:text-sm"
                                >
                                    {modal.visitLiveSiteLabel}
                                    <span
                                        aria-hidden="true"
                                        className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#2563EB] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                                    >
                                        ↗
                                    </span>
                                </a>
                            ) : (
                                <span className="inline-flex items-center gap-2 rounded-full border border-border-soft bg-bg px-4 py-2.5 text-[13px] italic text-muted sm:text-xs">
                                    {modal.liveLinkComingSoon}
                                </span>
                            )}

                            <Link
                                href={modal.startSimilarHref}
                                className="group inline-flex items-center gap-2 text-[13px] font-semibold uppercase tracking-[0.15em] text-[#2563EB] sm:text-xs"
                            >
                                {modal.startSimilarLabel}
                                <span
                                    aria-hidden="true"
                                    className="transition-transform duration-300 group-hover:translate-x-1"
                                >
                                    →
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

/* ═══════════════════════════════════════════════════
   PROJECT CARD
═══════════════════════════════════════════════════ */
function ProjectCard({
    project,
    onOpen,
}: {
    project: WorkItem;
    onOpen: () => void;
}) {
    const theme = accentMap[project.accent] ?? accentMap.blue;
    const hasLink = Boolean(project.liveLink);

    return (
        <article className="group flex flex-col overflow-hidden rounded-2xl border border-border-soft bg-surface transition-all duration-300 hover:-translate-y-1 hover:border-[#2563EB]/30 hover:shadow-[0_20px_50px_-25px_rgba(15,23,42,0.2)] sm:rounded-3xl">
            {/* Image */}
            <div className="relative aspect-[4/3] overflow-hidden bg-bg-soft">
                <img
                    src={project.img}
                    alt={project.title}
                    loading="lazy"
                    className="h-full w-full object-fit transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
                />

                <span className="absolute left-3 top-3 rounded-full bg-black/60 px-2.5 py-1 text-[11px] font-semibold text-white backdrop-blur-sm sm:text-[10px]">
                    {project.year}
                </span>

                <span
                    className={`absolute right-3 top-3 rounded-full bg-white/95 px-2.5 py-1 text-[11px] font-semibold backdrop-blur-sm sm:text-[10px] ${theme.text}`}
                >
                    {project.category}
                </span>
            </div>

            {/* Body */}
            <div className="flex flex-1 flex-col p-4 xs:p-5 sm:p-6">
                <div className="flex items-center justify-between gap-3">
                    <span className="font-mono text-[15px] text-muted sm:text-[11px]">
                        {project.n}
                    </span>
                    <span className="text-[11px] font-medium uppercase tracking-[0.15em] text-muted sm:text-[10px]">
                        {project.tag}
                    </span>
                </div>

                <h3 className="mt-3 text-[20px] font-semibold tracking-[-0.02em] text-text xs:text-[22px] sm:text-2xl">
                    {project.title}
                </h3>

                <p className="mt-1.5 text-[14px] text-muted sm:text-xs">
                    {project.role} · {project.timeline}
                </p>

                <p className="mt-3 line-clamp-3 text-[17px] leading-6 text-muted sm:text-sm">
                    {project.desc}
                </p>

                {/* Stack */}
                <div className="my-4 flex flex-wrap gap-1.5">
                    {project.stack.map((tech) => (
                        <span
                            key={tech}
                            className="rounded-full border border-border-soft bg-bg px-2 py-0.5 text-[13px] text-muted sm:text-[10px]"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                {/* Footer actions */}
                <div className="mt-auto flex flex-wrap items-center gap-2 border-t border-border-soft pt-4 sm:pt-5">
                    <button
                        type="button"
                        onClick={onOpen}
                        className="group/read inline-flex items-center gap-2 rounded-full bg-text py-2 pl-4 pr-2 text-[13px] font-semibold text-white transition-colors duration-300 hover:bg-[#2563EB] sm:text-xs"
                    >
                        {card.readFullInfoLabel}
                        <span
                            aria-hidden="true"
                            className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-[#2563EB] transition-transform duration-300 group-hover/read:translate-x-0.5"
                        >
                            →
                        </span>
                    </button>

                    {hasLink && (
                        <a
                            href={project.liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`group/visit inline-flex items-center gap-1.5 rounded-full border border-border-soft px-3 py-2 text-[13px] font-semibold transition-colors duration-300 hover:border-current sm:text-xs ${theme.text}`}
                        >
                            {card.liveLabel}
                            <span
                                aria-hidden="true"
                                className="transition-transform duration-300 group-hover/visit:-translate-y-0.5 group-hover/visit:translate-x-0.5"
                            >
                                ↗
                            </span>
                        </a>
                    )}
                </div>
            </div>
        </article>
    );
}

/* ═══════════════════════════════════════════════════
   PAGE
═══════════════════════════════════════════════════ */
export default function WorkPage() {
    const [openProject, setOpenProject] = useState<WorkItem | null>(null);

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
            <section className="relative isolate overflow-hidden border-b border-border-soft bg-[#FBFCFE] px-4 py-12 xs:px-5 xs:py-14 sm:px-6 sm:py-15 md:px-8 md:py-15 lg:px-10 lg:py-15">
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
                >
                    <div className="absolute -right-40 top-0 h-[24rem] w-[24rem] rounded-full bg-[#7C3AED]/[0.06] blur-[120px] sm:h-[32rem] sm:w-[32rem]" />
                    <div className="absolute -left-40 bottom-0 h-[20rem] w-[20rem] rounded-full bg-[#2563EB]/[0.05] blur-[120px] sm:h-[28rem] sm:w-[28rem]" />
                </div>

                <div className="mx-auto w-full max-w-7xl">
                    <div className="grid items-center gap-10 sm:gap-12 lg:grid-cols-[46%_54%] lg:gap-10">
                        {/* LEFT — copy */}
                        <div className="relative z-10 mx-auto max-w-[640px] text-center lg:mx-0 lg:-mt-10 lg:text-left">
                            <div className="inline-flex items-center gap-2 rounded-full border border-[#E2E8F0] bg-white px-3 py-1.5 text-[12px] font-semibold uppercase tracking-[0.18em] text-[#64748B] shadow-[0_6px_20px_-14px_rgba(15,23,42,0.35)] sm:text-[10px]">
                                <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-[#7C3AED] to-[#2563EB]" />
                                {hero.eyebrow}
                            </div>

                            <h1 className="mt-4 text-[2.2rem] font-semibold leading-[1.05] tracking-[-0.035em] xs:text-[2.125rem] sm:mt-5 sm:text-[2.5rem] sm:leading-[1] md:text-[3rem] lg:text-[3.5rem] xl:text-[3.75rem]">
                                {hero.headingLine1}
                                <br />
                                {hero.headingLine2}{" "}
                                <span className="bg-gradient-to-r from-[#2563EB] via-[#4F46E5] to-[#7C3AED] bg-clip-text text-transparent">
                                    {hero.headingHighlight}
                                </span>
                            </h1>

                            <p className="mx-auto mt-5 max-w-lg text-[16px] leading-7 text-[#64748B] sm:mt-6 sm:text-base sm:leading-7 md:text-lg md:leading-8 lg:mx-0">
                                {hero.description}
                            </p>

                            <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:items-center sm:justify-center lg:justify-start">
                                <Link
                                    href={hero.primaryCta.href}
                                    className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#0B1F4D] px-6 py-3 text-[15px] font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#142E63] hover:shadow-[0_14px_30px_-14px_rgba(11,31,77,0.45)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563EB] sm:px-7 sm:py-3.5 sm:text-sm"
                                >
                                    {hero.primaryCta.label}
                                    <span className="text-base transition-transform duration-300 group-hover:translate-x-1">
                                        →
                                    </span>
                                </Link>

                                <Link
                                    href={hero.secondaryCta.href}
                                    className="group inline-flex items-center justify-center gap-3 rounded-full border border-[#D7DEE8] bg-white px-6 py-3 text-[15px] font-semibold text-[#0B1F4D] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#2563EB] hover:text-[#2563EB] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563EB] sm:px-7 sm:py-3.5 sm:text-sm"
                                >
                                    {hero.secondaryCta.label}
                                </Link>
                            </div>

                            <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-5 border-t border-border-soft pt-4 sm:mt-8 sm:justify-start sm:gap-x-12">
                                {hero.stats.map((stat, i) => (
                                    <div key={stat.label} className="flex items-center gap-x-6 sm:gap-x-12">
                                        {i > 0 && (
                                            <span className="hidden h-12 w-px bg-border-soft sm:block" />
                                        )}
                                        <div className="flex flex-col gap-1">
                                            <span className="text-[1.75rem] font-bold tracking-[-0.03em] text-[#0B1F4D] sm:text-4xl">
                                                {stat.value}
                                                <span className="text-[#2563EB]">{stat.suffix}</span>
                                            </span>
                                            <span className="text-[13px] font-medium text-[#64748B] sm:text-sm">
                                                {stat.label}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* RIGHT — hero image */}
                        <div className="relative mx-auto w-full max-w-[720px] sm:max-w-[800px] lg:max-w-none">
                            <div
                                aria-hidden="true"
                                className="pointer-events-none absolute -inset-4 -z-10 rounded-[3rem] bg-gradient-to-br from-[#2563EB]/10 via-transparent to-[#7C3AED]/10 blur-3xl sm:-inset-6"
                            />

                            <img
                                src={hero.image}
                                alt={hero.imageAlt}
                                className="block h-auto w-full select-none"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══ PROJECTS ═══ */}
            <section
                id="projects"
                className="border-b border-border-soft px-4 py-14 xs:px-5 xs:py-16 sm:px-6 sm:py-20 md:px-8 md:py-24 lg:px-10 lg:py-28"
            >
                <div className="mx-auto w-full max-w-7xl">
                    <div>
                        <div>
                            <p className="text-[14px] font-semibold uppercase tracking-[0.25em] text-accent sm:text-xs">
                                {projects.eyebrow}
                            </p>

                            <h2 className="mt-3 text-[1.875rem] font-semibold leading-[1.05] tracking-[-0.035em] text-text xs:text-[2.125rem] sm:mt-4 sm:text-[2.5rem] sm:leading-[1] md:text-[3rem] lg:text-[3.5rem]">
                                {projects.heading}{" "}
                                <span className="text-muted">{projects.headingHighlight}</span>
                            </h2>

                            <p className="mt-3 max-w-2xl text-[16px] leading-7 text-muted sm:mt-4 sm:text-base sm:leading-7 md:text-[17px] md:leading-8">
                                {projects.intro}
                            </p>
                        </div>
                    </div>

                    <div className="mt-10 grid gap-4 xs:gap-5 sm:mt-14 md:grid-cols-2 lg:mt-16 lg:grid-cols-3">
                        {workItems.map((project) => (
                            <ProjectCard
                                key={project.n}
                                project={project}
                                onOpen={() => setOpenProject(project)}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══ MODAL ═══ */}
            <ProjectModal
                project={openProject}
                onClose={() => setOpenProject(null)}
            />

            <CTASection />
            <FloatingWhatsApp />
            <Footer />
        </main>
    );
}