"use client";

import Link from "next/link";
import home from "../../data/home.json";
import workItems from "../../data/work-items.json";

const PROJECTS = workItems;
const WORK = home.work;

const accentMap: Record<string, string> = {
  blue: "hover:border-blue-200 hover:shadow-[0_20px_50px_-25px_rgba(37,99,235,0.35)]",
  violet: "hover:border-violet-200 hover:shadow-[0_20px_50px_-25px_rgba(99,102,241,0.25)]",
  pink: "hover:border-pink-200 hover:shadow-[0_20px_50px_-25px_rgba(236,72,153,0.2)]",
};

function ProjectMedia({
  image,
  short,
  accent,
  title,
}: {
  image?: string;
  short: string;
  accent: string;
  title: string;
}) {
  const accentStyles: Record<string, string> = {
    blue: "from-blue-50 via-white to-blue-100 text-blue-600",
    violet: "from-violet-50 via-white to-violet-100 text-violet-600",
    pink: "from-pink-50 via-white to-pink-100 text-pink-600",
  };

  if (image) {
    return (
      <div className="relative mb-6 h-44 overflow-hidden rounded-2xl border border-border-soft bg-bg-soft sm:mb-7 sm:h-52">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={image}
          alt={`${title} preview`}
          loading="lazy"
          className="h-full w-full object-fit transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
        />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute bottom-3 right-3 flex h-8 w-8 translate-y-1 items-center justify-center rounded-full bg-white/95 text-[13px] font-semibold text-[#0F1117] opacity-0 shadow-sm transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 sm:text-xs"
        >
          ↗
        </span>
      </div>
    );
  }

  return (
    <div
      className={`relative mb-6 h-44 overflow-hidden rounded-2xl border border-zinc-200 bg-gradient-to-br sm:mb-7 sm:h-52 ${
        accentStyles[accent] ?? accentStyles.blue
      }`}
    >
      <div className="absolute left-3 right-3 top-3 flex items-center gap-1.5">
        <span className="h-2 w-2 rounded-full bg-zinc-300" />
        <span className="h-2 w-2 rounded-full bg-zinc-300" />
        <span className="h-2 w-2 rounded-full bg-zinc-300" />
        <div className="ml-2 h-5 flex-1 rounded-md bg-white/80" />
      </div>
      <div className="absolute bottom-4 right-5 text-2xl font-black opacity-80">{short}</div>
    </div>
  );
}

interface WorkSectionProps {
  limit?: number;
  showViewAll?: boolean;
  viewAllHref?: string;
  viewAllLabel?: string;
}

export default function WorkSection({
  limit = 3,
  showViewAll = true,
  viewAllHref = "/work",
  viewAllLabel = "View all projects",
}: WorkSectionProps) {
  const visible = limit > 0 ? PROJECTS.slice(0, limit) : PROJECTS;

  return (
    <section id="work" className="px-5 py-20 sm:px-6 sm:py-24 md:px-8 md:py-25">
      <div className="mx-auto w-full max-w-7xl">
        <div className="mb-12 sm:mb-16 md:mb-20">
          <div className="flex items-center gap-3">
            <span className="text-[14px] font-semibold uppercase tracking-[0.25em] text-accent sm:text-xs">
              {WORK.eyebrow}
            </span>
          </div>

          <h2 className="mt-4 text-5xl font-semibold leading-[0.95] tracking-[-0.05em] sm:mt-5 sm:text-5xl md:text-6xl lg:text-[5.5rem] xl:text-[6rem]">
            {WORK.heading}{" "}
            <span className="text-muted">{WORK.headingHighlight}</span>
          </h2>

          <p className="mt-2 text-[16px] leading-7 text-muted sm:mt-2 sm:text-base md:text-lg md:leading-8">
            {WORK.intro}
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:mt-16 sm:gap-5 md:mt-20 md:grid-cols-2 lg:grid-cols-3">
          {visible.map((project, i) => {
            const hasLink = Boolean(project.liveLink);

            return (
              <article
                key={project.title}
                className={`group relative overflow-hidden rounded-2xl border border-border-soft bg-surface p-5 transition-all duration-300 hover:-translate-y-1 sm:rounded-3xl sm:p-6 md:p-7 ${
                  accentMap[project.accent]
                }`}
                style={{ animationDelay: `${i * 60}ms` }}
              >
                {hasLink ? (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit ${project.title}`}
                    className="block"
                  >
                    <ProjectMedia
                      image={project.img}
                      short={project.short}
                      accent={project.accent}
                      title={project.title}
                    />
                  </a>
                ) : (
                  <ProjectMedia
                    image={project.img}
                    short={project.short}
                    accent={project.accent}
                    title={project.title}
                  />
                )}

                <div className="flex items-start justify-between gap-3">
                  <span className="font-mono text-[13px] text-muted sm:text-xs">{project.n}</span>
                  <span className="rounded-full border border-border-soft bg-bg px-3 py-1 text-[12px] font-medium uppercase tracking-wider text-muted sm:text-[10px]">
                    {project.tag}
                  </span>
                </div>

                <h3 className="mt-6 text-[22px] font-bold tracking-tight sm:mt-7 sm:text-2xl md:text-3xl">
                  {hasLink ? (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-colors duration-300 hover:text-[#2563EB]"
                    >
                      {project.title}
                    </a>
                  ) : (
                    project.title
                  )}
                </h3>

                <p className="mt-3 text-[17px] leading-6 text-muted sm:text-sm">{project.desc}</p>

                <div className="mt-5 flex flex-wrap gap-2 sm:mt-6">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-border-soft bg-bg px-2.5 py-1 text-[12px] text-muted sm:px-3 sm:text-[11px]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-7 flex flex-wrap items-center gap-2 sm:mt-8">
                  {hasLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/visit inline-flex items-center gap-2 rounded-full border border-border-soft bg-bg px-3.5 py-2 text-[13px] font-semibold text-text transition-all duration-300 hover:border-[#2563EB] hover:bg-[#2563EB] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563EB] sm:px-4 sm:text-xs"
                    >
                      Visit project
                      <span
                        aria-hidden="true"
                        className="text-sm leading-none transition-transform duration-300 group-hover/visit:-translate-y-0.5 group-hover/visit:translate-x-0.5"
                      >
                        ↗
                      </span>
                    </a>
                  )}

                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 text-[13px] font-semibold uppercase tracking-wider text-accent sm:text-xs"
                  >
                    {WORK.ctaLabel}
                    <span className="transition group-hover:translate-x-1">→</span>
                  </Link>
                </div>
              </article>
            );
          })}
        </div>

        {showViewAll && (
          <div className="mt-12 flex justify-center sm:mt-14">
            <Link
              href={viewAllHref}
              className="group inline-flex items-center gap-3 rounded-full bg-[#111827] py-2 pl-6 pr-2 text-[15px] font-semibold text-white transition-all duration-300 hover:bg-[#2563EB] hover:shadow-[0_12px_30px_-12px_rgba(37,99,235,0.45)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563EB] sm:text-sm"
            >
              {viewAllLabel}
              <span
                aria-hidden="true"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#2563EB] transition-transform duration-300 group-hover:translate-x-0.5"
              >
                →
              </span>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}