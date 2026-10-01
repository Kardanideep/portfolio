"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import site from "./data/site.json";

const EASE = "ease-[cubic-bezier(0.22,1,0.36,1)]";

/* ── Destructure site data ─────────────────────────── */
const { meta, hero, work, services, trust, about, contact } = site;

const WHATSAPP_NUMBER = "919727927266";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Hi Deep, I need a website for my business",
)}`;

const TECH = site.tech;
const PROJECTS = work.items;
const SERVICES = services.items;
const TRUST_POINTS = trust.points;
const PROCESS = site.process.items;

const PROCESS_STEP_MS = site.process.timing.stepMs;
const PROCESS_HOLD_MS = site.process.timing.holdMs;
const PROCESS_RESET_MS = site.process.timing.resetMs;

/* ── Hero rotating images ──────────────────────────── */
const HERO_IMAGES = [
  "/images/hero-workspace.png",
  "/images/hero-workspace-2.png",
  "/images/hero-workspace-3.png",
  "/images/hero-workspace-4.png",
];

const accentMap: Record<string, string> = {
  blue: "hover:border-blue-200 hover:shadow-[0_20px_50px_-25px_rgba(37,99,235,0.35)]",
  violet:
    "hover:border-violet-200 hover:shadow-[0_20px_50px_-25px_rgba(99,102,241,0.25)]",
  pink: "hover:border-pink-200 hover:shadow-[0_20px_50px_-25px_rgba(236,72,153,0.2)]",
};

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.3-.15-1.263-.465-2.403-1.485-.888-.795-1.484-1.77-1.66-2.07-.174-.3-.019-.465.13-.615.136-.135.301-.345.451-.523.146-.181.194-.301.297-.496.1-.21.049-.375-.025-.524-.075-.15-.672-1.62-.922-2.206-.24-.584-.487-.51-.672-.51-.172-.015-.371-.015-.571-.015-.2 0-.523.074-.797.359-.273.3-1.045 1.02-1.045 2.475s1.07 2.865 1.219 3.075c.149.18 2.095 3.195 5.076 4.483.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.123-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}

/* ── Project media — image or placeholder ──────────── */
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

  /* ── Real image branch ── */
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

        {/* Hover overlay hint */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        />

        <span
          aria-hidden="true"
          className="pointer-events-none absolute bottom-3 right-3 flex h-8 w-8 translate-y-1 items-center justify-center rounded-full bg-white/95 text-xs font-semibold text-[#0F1117] opacity-0 shadow-sm transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100"
        >
          ↗
        </span>
      </div>
    );
  }

  /* ── Fallback placeholder ── */
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

      <div className="absolute inset-x-4 bottom-4 top-12 sm:inset-x-6 sm:bottom-6 sm:top-16">
        <div className="grid h-full grid-cols-[0.75fr_1.25fr] gap-2 sm:gap-3">
          <div className="rounded-xl border border-white/80 bg-white/80 p-2.5 shadow-sm sm:p-3">
            <div className="h-2 w-12 rounded-full bg-zinc-200" />
            <div className="mt-3 h-12 rounded-lg bg-zinc-100 sm:mt-4 sm:h-16" />
            <div className="mt-2.5 h-2 w-16 rounded-full bg-zinc-200 sm:mt-3" />
            <div className="mt-2 h-2 w-10 rounded-full bg-zinc-100" />
          </div>

          <div className="rounded-xl border border-white/80 bg-white/80 p-2.5 shadow-sm sm:p-3">
            <div className="flex items-center justify-between">
              <div className="h-2 w-16 rounded-full bg-zinc-200" />
              <div className="h-5 w-5 rounded-full bg-zinc-100" />
            </div>

            <div className="mt-3 grid grid-cols-3 gap-1.5 sm:mt-4 sm:gap-2">
              <div className="h-10 rounded-lg bg-zinc-100 sm:h-14" />
              <div className="h-10 rounded-lg bg-zinc-100 sm:h-14" />
              <div className="h-10 rounded-lg bg-zinc-100 sm:h-14" />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-4 right-5 text-2xl font-black opacity-80">
        {short}
      </div>
    </div>
  );
}

/* ── Process section — animation runs only while in view ── */
function ProcessSection() {
  const [activeProcess, setActiveProcess] = useState(0);
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  const lastProcessIndex = PROCESS.length - 1;

  /* ── Watch visibility ── */
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting && entry.intersectionRatio > 0.25);
      },
      {
        threshold: [0, 0.25, 0.5, 0.75, 1],
        rootMargin: "-10% 0px -10% 0px",
      },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  /* ── Loop only while in view ── */
  useEffect(() => {
    if (!inView) return;

    let delay = PROCESS_STEP_MS;
    if (activeProcess === lastProcessIndex)
      delay = PROCESS_STEP_MS + PROCESS_HOLD_MS;
    else if (activeProcess === -1) delay = PROCESS_RESET_MS;

    const id = setTimeout(() => {
      setActiveProcess((a) => (a === lastProcessIndex ? -1 : a + 1));
    }, delay);

    return () => clearTimeout(id);
  }, [activeProcess, lastProcessIndex, inView]);

  const processFill =
    activeProcess < 0 ? 0 : (activeProcess / lastProcessIndex) * 100;

  return (
    <section
      ref={sectionRef}
      id="process"
      className="px-5 py-20 sm:px-6 sm:py-24 md:px-8 md:py-25"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="mb-12 sm:mb-16 md:mb-24">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
            {site.process.eyebrow}
          </p>

          <h2 className="mt-4 text-4xl font-bold leading-[1.05] tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
            {site.process.heading}
            <br />
            <span className="italic text-muted">
              {site.process.headingHighlight}
            </span>
          </h2>

          <p className="mt-5 text-base leading-7 text-muted sm:mt-6 md:text-lg md:leading-8">
            {site.process.intro}
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
                data-flow-fill
                style={{ width: `${processFill}%` }}
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
                  data-flow-step
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
                      className={`text-lg font-semibold leading-[1.15] tracking-[-0.02em] transition-colors duration-300 sm:text-xl md:text-2xl ${
                        on ? "text-text" : "text-text/60"
                      }`}
                    >
                      {step.t}
                    </h3>

                    <p className="mt-3 max-w-xs text-sm leading-7 text-muted md:text-[15px]">
                      {step.d}
                    </p>
                  </div>

                  {i < PROCESS.length - 1 && (
                    <span
                      aria-hidden="true"
                      className={`absolute left-1/2 top-7.5 hidden -translate-y-1/2 translate-x-[calc(50%+2.25rem)] transition-colors duration-500 md:block ${
                        activeProcess > i ? "text-accent" : "text-accent/25"
                      }`}
                    >
                      ▶
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10 hidden md:flex flex-col gap-4 pt-6 sm:pt-8 md:mt-5 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-muted">{site.process.ctaNote}</p>

          <a
            href="#contact"
            className="group inline-flex w-fit items-center gap-3 rounded-full border border-border-soft py-2 pl-5 pr-2 text-sm font-semibold transition-colors duration-300 hover:border-[#2563EB] hover:bg-[#2563EB] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563EB] sm:pl-6"
          >
            {site.process.ctaLabel}
            <span
              aria-hidden="true"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-[#2563EB] text-white transition-transform duration-300 group-hover:translate-x-0.5"
            >
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

/* ── Tech marquee — auto-scroll, pauses on hover/touch, draggable ── */
function TechMarquee() {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const pausedRef = useRef(false);
  const resumeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const drag = useRef({ active: false, startX: 0, startScroll: 0 });

  const pause = () => {
    if (resumeTimer.current) clearTimeout(resumeTimer.current);
    pausedRef.current = true;
  };

  const resume = (delay = 0) => {
    if (resumeTimer.current) clearTimeout(resumeTimer.current);
    resumeTimer.current = setTimeout(() => {
      pausedRef.current = false;
    }, delay);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    // Respect "reduce motion" setting
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const SPEED = 0.6; // increase for faster movement
    let raf = 0;
    let pos = el.scrollLeft;

    const tick = () => {
      const half = el.scrollWidth / 2; // content is duplicated, so half = one full loop

      if (pausedRef.current) {
        // User is in control: just follow their position and keep the loop seamless
        pos = el.scrollLeft;
        if (pos <= 0) {
          pos = half - 1;
          el.scrollLeft = pos;
        } else if (pos >= half) {
          pos -= half;
          el.scrollLeft = pos;
        }
      } else {
        pos += SPEED;
        if (pos >= half) pos -= half;
        el.scrollLeft = pos;
      }

      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      if (resumeTimer.current) clearTimeout(resumeTimer.current);
    };
  }, []);

  return (
    <section className="border-y border-border-soft bg-bg-soft py-6 md:mt-10 md:py-8">
     <div
  ref={scrollRef}
  className="flex cursor-ew-resize select-none overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        /* Mouse: pause on hover, drag to move */
        onPointerEnter={(e) => {
          if (e.pointerType === "mouse") pause();
        }}
        onPointerLeave={(e) => {
          if (e.pointerType === "mouse") {
            drag.current.active = false;
            resume();
          }
        }}
        onPointerDown={(e) => {
          if (e.pointerType !== "mouse") return;
          const el = scrollRef.current;
          if (!el) return;
          drag.current = {
            active: true,
            startX: e.clientX,
            startScroll: el.scrollLeft,
          };
        }}
        onPointerMove={(e) => {
          const el = scrollRef.current;
          if (!el || !drag.current.active) return;
          el.scrollLeft =
            drag.current.startScroll - (e.clientX - drag.current.startX);
        }}
        onPointerUp={() => {
          drag.current.active = false;
        }}
        onPointerCancel={() => {
          drag.current.active = false;
        }}
        /* Touch: pause while touching, resume 1.5s after finger lifts */
        onTouchStart={pause}
        onTouchEnd={() => resume(1500)}
      >
        <div className="flex shrink-0 items-center gap-8 pr-8 sm:gap-12 sm:pr-12 md:gap-16 md:pr-16">
          {[...TECH, ...TECH].map((tech, i) => (
            <span
              key={`${tech}-${i}`}
              className="flex shrink-0 items-center gap-8 text-lg font-semibold tracking-tight text-muted sm:gap-12 sm:text-2xl md:gap-16 md:text-4xl"
            >
              {tech}
              <span className="text-border-strong">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const [active, setActive] = useState(0);

  /* ── Hero image rotation ─────────────────────────── */
  const [heroIndex, setHeroIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setHeroIndex((i) => (i + 1) % HERO_IMAGES.length);
    }, 1500);

    return () => clearInterval(id);
  }, []);

  // Animating grid columns is smoother than animating flex sizes
  const columns = SERVICES.map((_, i) => (i === active ? "5fr" : "1fr")).join(
    " ",
  );

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    project: "",
    message: "",
    website: "",
  });

  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (status === "loading") return;

    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setForm({
        name: "",
        email: "",
        phone: "",
        project: "",
        message: "",
        website: "",
      });

      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  /* ── Auto-dismiss status banner after 5s ── */
  useEffect(() => {
    if (status !== "success" && status !== "error") return;

    const id = setTimeout(() => {
      setStatus("idle");
    }, 5000);

    return () => clearTimeout(id);
  }, [status]);

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

      {/* Navbar */}
      <Header />

      {/* ── Hero ─────────────────────────────────────────── */}
      <section
        id="home"
        className="relative overflow-hidden bg-[#f8f9fb] px-5 pb-14 sm:px-6 sm:pb-18 md:px-10 lg:min-h-[calc(100vh-80px)] lg:py-0"
      >
        {/* Very subtle background light */}
        <div className="pointer-events-none absolute -left-40 bottom-[-10rem] h-[28rem] w-[28rem] rounded-full bg-[#60A5FA]/[0.025] blur-3xl" />

        <div className="relative mx-auto flex min-h-full w-full max-w-[1440px] items-center">
          <div className="grid w-full items-center lg:grid-cols-[42%_58%]">
            {/* =====================================================
          LEFT CONTENT
      ====================================================== */}
            <div className="relative z-20 py-8 lg:py-10">
              {/* Availability */}
              <div className="reveal mb-5 inline-flex items-center gap-2 rounded-full border border-[#e5e7eb] bg-white px-3.5 py-2 text-xs font-medium text-[#4b5563] shadow-[0_6px_20px_-12px_rgba(15,23,42,0.25)]">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inset-0 animate-ping rounded-full bg-emerald-500/40" />
                  <span className="relative block h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                Your Idea. My Expertise.
              </div>

              {/* Heading */}
              <h1 className="reveal max-w-[650px] text-[3.50rem] font-semibold leading-[0.99] tracking-[-0.055em] text-[#111318] sm:text-5xl md:text-[4rem] lg:text-[4.9rem] xl:text-[5.5rem]">
                {hero.headlineLines}{" "}
                <span className="text-[#2563EB]">{hero.headlineHighlight}</span>
                <br />
                {hero.headlinehighlight2}
              </h1>

              {/* Description */}
              <p className="reveal mt-5 max-w-[510px] text-[15px] leading-7 text-[#596171] sm:mt-6 sm:text-base md:text-lg md:leading-8">
                {hero.introBody}
              </p>

              {/* CTA */}
              <div className="reveal mt-7 flex flex-wrap items-center gap-3 sm:mt-8">
                {/* Primary */}
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-3 rounded-full bg-[#111827] px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#2563EB] hover:shadow-[0_12px_30px_-12px_rgba(37,99,235,0.45)] sm:px-6 sm:py-3.5"
                >
                  Start a Project
                  <span className="text-base transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </a>

                {/* Secondary */}
                <a
                  href="#projects"
                  className="inline-flex items-center rounded-full border border-[#d1d5db] bg-white px-5 py-3 text-sm font-semibold text-[#111318] transition-all duration-300 hover:border-[#2563EB] hover:text-[#2563EB] sm:px-6 sm:py-3.5"
                >
                  View Projects
                </a>
              </div>

              {/* =====================================================
            SERVICES (desktop)
        ====================================================== */}
              <div className="reveal mt-9 hidden grid-cols-4 gap-x-6 gap-y-6 sm:mt-11 sm:gap-x-5 lg:grid">
                {/* Web */}
                <div className="group">
                  <div className="mb-2.5 flex h-10 w-10 items-center justify-center rounded-xl border border-[#e5e7eb] bg-white text-[#2563EB] shadow-sm transition-all duration-300 group-hover:border-[#2563EB]/25 group-hover:bg-[#2563EB]/5">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      className="h-[19px] w-[19px]"
                    >
                      <path d="m8 9-3 3 3 3" />
                      <path d="m16 9 3 3-3 3" />
                      <path d="m14 5-4 14" />
                    </svg>
                  </div>
                  <p className="text-[11px] font-medium leading-4 text-[#111318] sm:text-xs">
                    Web
                    <br />
                    Development
                  </p>
                </div>

                {/* Mobile */}
                <div className="group">
                  <div className="mb-2.5 flex h-10 w-10 items-center justify-center rounded-xl border border-[#e5e7eb] bg-white text-[#2563EB] shadow-sm transition-all duration-300 group-hover:border-[#2563EB]/25 group-hover:bg-[#2563EB]/5">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      className="h-[19px] w-[19px]"
                    >
                      <rect x="7" y="3" width="10" height="18" rx="2" />
                      <path d="M10.5 18h3" />
                    </svg>
                  </div>
                  <p className="text-[11px] font-medium leading-4 text-[#111318] sm:text-xs">
                    Mobile App
                    <br />
                    Development
                  </p>
                </div>

                {/* Backend */}
                <div className="group">
                  <div className="mb-2.5 flex h-10 w-10 items-center justify-center rounded-xl border border-[#e5e7eb] bg-white text-[#2563EB] shadow-sm transition-all duration-300 group-hover:border-[#2563EB]/25 group-hover:bg-[#2563EB]/5">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      className="h-[19px] w-[19px]"
                    >
                      <path d="M6.5 17.5h11a4 4 0 0 0 .6-7.95A5.5 5.5 0 0 0 7.2 8.4 4.5 4.5 0 0 0 6.5 17.5Z" />
                    </svg>
                  </div>
                  <p className="text-[11px] font-medium leading-4 text-[#111318] sm:text-xs">
                    API &
                    <br />
                    Backend
                  </p>
                </div>

                {/* Support */}
                <div className="group">
                  <div className="mb-2.5 flex h-10 w-10 items-center justify-center rounded-xl border border-[#e5e7eb] bg-white text-[#2563EB] shadow-sm transition-all duration-300 group-hover:border-[#2563EB]/25 group-hover:bg-[#2563EB]/5">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      className="h-[19px] w-[19px]"
                    >
                      <circle cx="12" cy="12" r="3" />
                      <path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1-1.8 1.8-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.6v.2h-2.6V20a1.7 1.7 0 0 0-1-1.6 1.7 1.7 0 0 0-1.9.3l-.1.1-1.8-1.8.1-.1a1.7 1.7 0 0 0 .3-1.9 1.7 1.7 0 0 0-1.6-1H4.3v-2.6h.1a1.7 1.7 0 0 0 1.6-1 1.7 1.7 0 0 0-.3-1.9l-.1-.1 1.8-1.8.1.1a1.7 1.7 0 0 0 1.9.3 1.7 1.7 0 0 0 1-1.6V5h2.6v.1a1.7 1.7 0 0 0 1 1.6 1.7 1.7 0 0 0 1.9-.3l.1-.1 1.8 1.8-.1.1a1.7 1.7 0 0 0-.3 1.9 1.7 1.7 0 0 0 1.6 1h.1v2.6h-.1a1.7 1.7 0 0 0-1.6 1Z" />
                    </svg>
                  </div>
                  <p className="text-[11px] font-medium leading-4 text-[#111318] sm:text-xs">
                    Maintenance
                    <br />& Support
                  </p>
                </div>
              </div>
            </div>

            {/* =====================================================
      RIGHT DEVICE VISUAL — auto-rotating images
  ====================================================== */}
            <div className="relative lg:-mt-20 -px-10 mx-auto w-full max-w-[900px]">
              <div className="relative aspect-[4/3] w-full">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={HERO_IMAGES[heroIndex]}
                  alt="Web and mobile development workspace"
                  className="absolute inset-0 block h-full w-full select-none object-cover"
                />

                {/* LEFT FADE */}
                <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-[12%] bg-gradient-to-r from-[#f8f9fb] to-transparent" />

                {/* RIGHT FADE */}
                <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-[12%] bg-gradient-to-l from-[#f8f9fb] to-transparent" />

                {/* TOP FADE */}
                <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-[12%] bg-gradient-to-b from-[#f8f9fb] to-transparent" />

                {/* BOTTOM FADE */}
                <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-[12%] bg-gradient-to-t from-[#f8f9fb] to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Tech marquee ── */}
      <TechMarquee />

      {/* ── Work ─────────────────────────────────────────── */}
      <section
        id="work"
        className="px-5 py-20 sm:px-6 sm:py-24 md:px-8 md:py-25"
      >
        <div className="mx-auto w-full max-w-7xl">
          <div className="mb-12 sm:mb-16 md:mb-20">
            <div className="flex items-center gap-3">
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
                {work.eyebrow}
              </span>
            </div>

            <h2 className="mt-4 text-5xl font-semibold leading-[0.95] tracking-[-0.05em] sm:mt-5 sm:text-5xl md:text-6xl lg:text-[5.5rem] xl:text-[6rem]">
              {work.heading}{" "}
              <span className="text-muted">{work.headingHighlight}</span>
            </h2>

            <p className="mt-5 text-base leading-7 text-muted sm:mt-6 md:text-lg md:leading-8">
              {work.intro}
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:mt-16 sm:gap-5 md:mt-20 md:grid-cols-2 lg:grid-cols-3">
            {PROJECTS.map((project, i) => {
              const hasLink = Boolean(project.liveLink);

              return (
                <article
                  key={project.title}
                  className={`group relative overflow-hidden rounded-2xl border border-border-soft bg-surface p-5 transition-all duration-300 hover:-translate-y-1 sm:rounded-3xl sm:p-6 md:p-7 ${
                    accentMap[project.accent]
                  }`}
                  style={{ animationDelay: `${i * 60}ms` }}
                >
                  {/* ── Preview ── */}
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
                    <span className="font-mono text-xs text-muted">
                      {project.n}
                    </span>

                    <span className="rounded-full border border-border-soft bg-bg px-3 py-1 text-[10px] font-medium uppercase tracking-wider text-muted">
                      {project.tag}
                    </span>
                  </div>

                  <h3 className="mt-6 text-xl font-bold tracking-tight sm:mt-7 sm:text-2xl md:text-3xl">
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

                  <p className="mt-3 text-sm leading-6 text-muted">
                    {project.desc}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2 sm:mt-6">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-border-soft bg-bg px-2.5 py-1 text-[10px] text-muted sm:px-3 sm:text-[11px]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* ── Footer: visit + start a project ── */}
                  <div className="mt-7 flex flex-wrap items-center gap-2 sm:mt-8">
                    {hasLink && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/visit inline-flex items-center gap-2 rounded-full border border-border-soft bg-bg px-3.5 py-2 text-xs font-semibold text-text transition-all duration-300 hover:border-[#2563EB] hover:bg-[#2563EB] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563EB] sm:px-4"
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

                    <a
                      href="#contact"
                      className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-accent"
                    >
                      {work.ctaLabel}
                      <span className="transition group-hover:translate-x-1">
                        →
                      </span>
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Services ─────────────────────────────────────── */}
      <section
        id="services"
        className="border-y border-border-soft bg-surface px-5 py-16 sm:px-6 sm:py-20 md:px-8 md:py-25"
      >
        <div className="mx-auto w-full max-w-7xl">
          <div className="flex items-center gap-3">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
              {services.eyebrow}
            </span>
          </div>

          <div className="mt-4 mb-8 flex flex-col gap-4 sm:mt-5 sm:mb-10 sm:gap-5 md:mb-14">
            <h2 className="text-4xl font-semibold leading-[1] tracking-[-0.04em] sm:text-4xl sm:leading-[0.95] md:text-5xl lg:text-7xl">
              {services.heading}{" "}
              <span className="text-muted">{services.headingHighlight}</span>
            </h2>
            <p className="max-w-2xl text-sm leading-6 text-muted sm:text-base sm:leading-7">
              {services.intro}
            </p>
          </div>

          <div
            style={{ gridTemplateColumns: columns }}
            className={`flex flex-col gap-3 md:grid md:h-[480px] md:transition-[grid-template-columns] md:duration-700 lg:h-[540px] ${EASE} motion-reduce:transition-none`}
          >
            {SERVICES.map((service, i) => {
              const isActive = i === active;

              return (
                <div
                  key={service.n}
                  onMouseEnter={() => setActive(i)}
                  className={`relative min-w-0 overflow-hidden rounded-3xl border transition-colors duration-700 md:rounded-[2rem] ${EASE} motion-reduce:transition-none ${
                    isActive
                      ? "border-transparent bg-[#0F1117] text-white"
                      : "border-border-soft text-text hover:bg-bg-soft"
                  }`}
                >
                  {/* ─────────────────────────────────────────
                      MOBILE / TABLET (below md) — accordion card
                      ───────────────────────────────────────── */}
                  <div className="md:hidden">
                    <button
                      type="button"
                      onClick={() => setActive(i)}
                      aria-expanded={isActive}
                      className="flex w-full items-start justify-between gap-4 p-5 text-left sm:p-6"
                    >
                      <div className="min-w-0 flex-1">
                        <h3
                          className={`text-xl font-semibold leading-tight tracking-[-0.02em] transition-colors duration-300 sm:text-2xl ${
                            isActive ? "text-white" : "text-text"
                          }`}
                        >
                          {service.title}
                        </h3>

                        {!isActive && (
                          <p
                            className={`mt-1.5 line-clamp-2 text-sm leading-6 transition-colors duration-300 ${
                              isActive ? "text-white/60" : "text-muted"
                            }`}
                          >
                            {service.desc}
                          </p>
                        )}
                      </div>

                      <span
                        aria-hidden="true"
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm transition-all duration-500 ${EASE} ${
                          isActive
                            ? "-rotate-45 bg-[#2563EB] text-white"
                            : "border border-border-soft text-muted"
                        }`}
                      >
                        →
                      </span>
                    </button>

                    {/* Expanded body (mobile) */}
                    <div
                      className={`grid transition-all duration-500 ${EASE} motion-reduce:transition-none ${
                        isActive
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="space-y-4 px-5 pb-5 sm:px-6 sm:pb-6">
                          <p className="text-sm leading-7 text-white/70">
                            {service.desc}
                          </p>

                          {service.points?.length > 0 && (
                            <ul className="space-y-2.5">
                              {service.points.map((point: string) => (
                                <li
                                  key={point}
                                  className="flex items-start gap-3 text-sm text-white/80"
                                >
                                  <span
                                    aria-hidden="true"
                                    className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#2563EB] text-[11px] font-bold text-white"
                                  >
                                    ✓
                                  </span>
                                  <span className="leading-6">{point}</span>
                                </li>
                              ))}
                            </ul>
                          )}

                          <a
                            href="#contact"
                            className=" inline-flex w-full items-center justify-between gap-3 rounded-full bg-white py-2 pl-5 pr-2 text-sm font-semibold text-[#0F1117] transition-colors duration-300 hover:bg-[#2563EB] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:w-auto sm:justify-start"
                          >
                            <span>{services.discussLabel}</span>
                            <span
                              aria-hidden="true"
                              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#2563EB] text-white"
                            >
                              →
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* ─────────────────────────────────────────
                      DESKTOP (md and up) — expanding grid columns
                      ───────────────────────────────────────── */}
                  <div className="hidden md:block md:h-full">
                    <div className="relative h-full min-w-0 overflow-hidden p-8">
                      <button
                        type="button"
                        aria-expanded={isActive}
                        aria-label={service.title}
                        onClick={() => setActive(i)}
                        onFocus={() => setActive(i)}
                        className="absolute inset-0 z-0 rounded-[2rem] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#2563EB]"
                      />

                      {/* Glow */}
                      <span
                        aria-hidden="true"
                        className={`pointer-events-none absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-[#2563EB]/40 blur-3xl transition-opacity duration-700 ${
                          isActive ? "opacity-100" : "opacity-0"
                        }`}
                      />

                      {/* Arrow */}
                      <span
                        aria-hidden="true"
                        style={{ willChange: "transform, right" }}
                        className={`pointer-events-none absolute right-8 top-8 flex h-10 w-10 items-center justify-center rounded-full transition-all duration-700 ${EASE} ${
                          isActive
                            ? "-rotate-45 bg-[#2563EB] text-white translate-x-0"
                            : "right-1/2 translate-x-1/2 border border-border-soft text-muted"
                        }`}
                      >
                        →
                      </span>

                      {/* Collapsed vertical title */}
                      <span
                        aria-hidden="true"
                        className={`pointer-events-none absolute bottom-8 left-1/2 hidden -translate-x-1/2 rotate-180 whitespace-nowrap text-2xl font-semibold tracking-[-0.03em] transition-opacity duration-500 [writing-mode:vertical-rl] md:block ${
                          isActive
                            ? "opacity-0 delay-0"
                            : "opacity-100 delay-300"
                        }`}
                      >
                        {service.title}
                      </span>

                      {/* Active content */}
                      <div
                        className={`pointer-events-none absolute inset-0 flex flex-col justify-between p-8 transition-all duration-700 ${EASE} motion-reduce:transition-none md:w-[400px] lg:w-[440px] ${
                          isActive
                            ? "translate-x-0 opacity-100 delay-200"
                            : "translate-x-6 opacity-0"
                        }`}
                      >
                        <div>
                          <h3 className="pt-12 text-4xl font-semibold tracking-[-0.03em] lg:text-5xl">
                            {service.title}
                          </h3>

                          <p className="max-w-md pt-4 text-base leading-7 text-white/60">
                            {service.desc}
                          </p>

                          {service.points?.length > 0 && (
                            <div className="mt-6 space-y-3">
                              {service.points.map((point: string) => (
                                <div
                                  key={point}
                                  className="flex items-start gap-3 text-[15px] text-white/80"
                                >
                                  <span
                                    aria-hidden="true"
                                    className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#2563EB] text-[11px] font-bold text-white"
                                  >
                                    ✓
                                  </span>
                                  <span className="leading-6">{point}</span>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>

                        <div className="mt-8">
                          <a
                            href="#contact"
                            tabIndex={isActive ? 0 : -1}
                            className={`relative z-10 inline-flex items-center gap-3 rounded-full bg-white py-1.5 pl-5 pr-1.5 text-sm font-semibold text-[#0F1117] transition-colors duration-300 hover:bg-[#2563EB] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${
                              isActive
                                ? "pointer-events-auto"
                                : "pointer-events-none"
                            }`}
                          >
                            {services.discussLabel}
                            <span
                              aria-hidden="true"
                              className="flex h-8 w-8 items-center justify-center rounded-full bg-[#2563EB] text-white"
                            >
                              →
                            </span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA */}
          <div className="mt-10 hidden md:flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-muted">{services.ctaNote}</p>

            <a
              href="#contact"
              className="group inline-flex w-fit items-center gap-3 rounded-full border border-border-soft py-2 pl-5 pr-2 text-sm font-semibold transition-colors duration-300 hover:border-[#2563EB] hover:bg-[#2563EB] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563EB] sm:pl-6"
            >
              {services.ctaLabel}
              <span
                aria-hidden="true"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-[#2563EB] text-white transition-transform duration-300 group-hover:translate-x-0.5"
              >
                →
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* ── Process ──────────────────────────────────────── */}
      <ProcessSection />

      {/* ── Why work with me ─────────────────────────────── */}
      <section className="border-y border-border-soft bg-surface px-5 py-20 sm:px-6 sm:py-24 md:px-8 md:py-25">
        <div className="mx-auto w-full max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <div className="lg:sticky lg:top-24">
                <h2 className="text-4xl font-semibold leading-[0.95] tracking-[-0.05em] sm:text-5xl md:text-6xl lg:text-7xl">
                  {trust.heading}{" "}
                  <span className="text-muted">{trust.headingHighlight}</span>
                </h2>

                <p className="mt-5 max-w-sm text-base leading-7 text-muted sm:mt-6 md:text-lg md:leading-8">
                  {trust.intro}
                </p>

                <a
                  href="#contact"
                  className="group mt-7 inline-flex w-fit items-center gap-3 rounded-full bg-[#0F1117] py-2 pl-5 pr-2 text-sm font-semibold text-white transition-colors duration-300 hover:bg-[#2563EB] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563EB] sm:mt-8 sm:pl-6"
                >
                  {trust.ctaLabel}
                  <span
                    aria-hidden="true"
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#2563EB] transition-transform duration-300 group-hover:translate-x-0.5"
                  >
                    →
                  </span>
                </a>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:col-span-8">
              {TRUST_POINTS.map((point) => (
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
                    <h3 className="text-xl font-semibold tracking-[-0.03em] sm:text-2xl md:text-3xl">
                      {point.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-muted transition-colors duration-700 group-hover:text-white/60">
                      {point.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── About ────────────────────────────────────────── */}
      <section
        id="about"
        className="border-t border-border-soft px-5 py-20 sm:px-6 sm:py-24 md:px-8 md:py-25"
      >
        <div className="mx-auto grid w-full max-w-7xl gap-10 sm:gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <h2 className="text-4xl font-semibold leading-[0.95] tracking-[-0.05em] sm:text-5xl md:text-6xl lg:text-7xl">
              Hi, I&apos;m{" "}
              <span className="text-muted">{about.headingHighlight}</span>
            </h2>

            <div
              className={`group relative mt-8 overflow-hidden rounded-[2rem] bg-[#0F1117] p-5 text-white transition-transform duration-700 ${EASE} hover:-translate-y-1 motion-reduce:transition-none sm:mt-10 sm:p-6 md:p-7`}
            >
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-20 -right-20 h-56 w-56 rounded-full bg-[#2563EB]/30 blur-3xl transition-opacity duration-700 group-hover:bg-[#2563EB]/40"
              />
              <p className="relative flex items-center gap-2 text-sm text-white/70">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60 motion-reduce:animate-none" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                </span>
                {about.profileCardText}
              </p>
            </div>
          </div>

          <div className="space-y-5 sm:space-y-6 lg:col-span-6 lg:col-start-7">
            <p className="text-lg font-medium leading-[1.4] tracking-[-0.02em] text-text sm:text-xl md:text-2xl lg:text-3xl">
              {about.storyHeadline}
            </p>

            {about.paragraphs.map((paragraph, i) => (
              <p
                key={i}
                className="text-base leading-7 text-muted sm:text-[17px] md:text-lg md:leading-8"
              >
                {paragraph}
              </p>
            ))}

            <a
              href="#contact"
              className="group hidden md:inline-flex w-fit items-center gap-3 rounded-full border border-border-soft py-2 pl-5 pr-2 text-sm font-semibold transition-colors duration-300 hover:border-[#2563EB] hover:bg-[#2563EB] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563EB] sm:pl-6"
            >
              {about.ctaLabel}
              <span
                aria-hidden="true"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-[#2563EB] text-white transition-transform duration-300 group-hover:translate-x-0.5"
              >
                →
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* ── Contact ──────────────────────────────────────── */}
      <section
        id="contact"
        className="border-t border-border-soft bg-surface px-5 py-20 sm:px-6 sm:py-24 md:px-8 md:py-25"
      >
        <div className="mx-auto grid w-full max-w-7xl gap-10 sm:gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left: contact info */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-24">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">
                {contact.eyebrow}
              </p>

              <h2 className="mt-4 text-4xl font-semibold leading-[0.95] tracking-[-0.05em] sm:text-5xl md:text-6xl">
                {contact.heading}{" "}
                <span className="italic text-muted">
                  {contact.headingHighlight}
                </span>
              </h2>

              <p className="mt-5 max-w-md text-base leading-7 text-muted md:text-lg md:leading-8">
                {contact.intro}
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:mt-10">
                {/* Phone */}
                <a
                  href={`tel:${meta.phoneTel}`}
                  className="group flex items-center gap-4 rounded-2xl border border-border-soft bg-bg p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#2563EB] hover:bg-[#2563EB]/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563EB] md:p-5"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#2563EB]/10 text-[#2563EB] transition-colors duration-300 group-hover:bg-[#2563EB] group-hover:text-white sm:h-11 sm:w-11">
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" />
                    </svg>
                  </span>

                  <span className="flex min-w-0 flex-1 flex-col">
                    <span className="text-[11px] font-medium uppercase tracking-[0.15em] text-muted">
                      {contact.phoneLabel}
                    </span>
                    <span className="mt-0.5 truncate text-base font-semibold text-text">
                      {meta.phoneDisplay}
                    </span>
                  </span>

                  <span
                    aria-hidden="true"
                    className="text-muted transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#2563EB]"
                  >
                    ↗
                  </span>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${meta.email}`}
                  className="group flex items-center gap-4 rounded-2xl border border-border-soft bg-bg p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#F59E0B] hover:bg-[#F59E0B]/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F59E0B] md:p-5"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#F59E0B]/10 text-[#F59E0B] transition-colors duration-300 group-hover:bg-[#F59E0B] group-hover:text-white sm:h-11 sm:w-11">
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <rect x="3" y="5" width="18" height="14" rx="2" />
                      <path d="m3 7 9 6 9-6" />
                    </svg>
                  </span>

                  <span className="flex min-w-0 flex-1 flex-col">
                    <span className="text-[11px] font-medium uppercase tracking-[0.15em] text-muted">
                      {contact.emailLabel}
                    </span>
                    <span className="mt-0.5 truncate text-base font-semibold text-text">
                      {meta.email}
                    </span>
                  </span>

                  <span
                    aria-hidden="true"
                    className="text-muted transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#F59E0B]"
                  >
                    ↗
                  </span>
                </a>

                {/* WhatsApp */}
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 rounded-2xl border border-border-soft bg-bg p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#25D366] hover:bg-[#25D366]/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366] md:p-5"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#25D366]/10 text-[#25D366] transition-colors duration-300 group-hover:bg-[#25D366] group-hover:text-white sm:h-11 sm:w-11">
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-5 w-5"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.3-.15-1.263-.465-2.403-1.485-.888-.795-1.484-1.77-1.66-2.07-.174-.3-.019-.465.13-.615.136-.135.301-.345.451-.523.146-.181.194-.301.297-.496.1-.21.049-.375-.025-.524-.075-.15-.672-1.62-.922-2.206-.24-.584-.487-.51-.672-.51-.172-.015-.371-.015-.571-.015-.2 0-.523.074-.797.359-.273.3-1.045 1.02-1.045 2.475s1.07 2.865 1.219 3.075c.149.18 2.095 3.195 5.076 4.483.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.123-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                  </span>

                  <span className="flex min-w-0 flex-1 flex-col">
                    <span className="text-[11px] font-medium uppercase tracking-[0.15em] text-muted">
                      WhatsApp me
                    </span>
                    <span className="mt-0.5 truncate text-base font-semibold text-text">
                      Chat instantly
                    </span>
                  </span>

                  <span
                    aria-hidden="true"
                    className="text-muted transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#25D366]"
                  >
                    ↗
                  </span>
                </a>
              </div>

              {/* Availability pill */}
              <p className="mt-6 flex items-center gap-2 text-sm text-muted">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500/60 motion-reduce:animate-none" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                {meta.availability}
              </p>
            </div>
          </div>

          {/* Right: form */}
          <div className="lg:col-span-7 lg:mt-20">
            <form
              onSubmit={handleSubmit}
              className="rounded-3xl border border-border-soft bg-bg p-5 shadow-[0_20px_60px_-40px_rgba(15,23,42,0.25)] sm:p-6 md:p-8"
            >
              {/* Honeypot */}
              <div className="hidden" aria-hidden="true">
                <label htmlFor="website">Website</label>
                <input
                  id="website"
                  type="text"
                  name="website"
                  autoComplete="off"
                  tabIndex={-1}
                  value={form.website}
                  onChange={(e) =>
                    setForm((current) => ({
                      ...current,
                      website: e.target.value,
                    }))
                  }
                />
              </div>

              {/* Row 1 */}
              <div className="grid gap-3 md:grid-cols-2">
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="name"
                    className="text-[11px] font-medium uppercase tracking-[0.15em] text-muted"
                  >
                    {contact.form.nameLabel}
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    required
                    autoComplete="name"
                    placeholder={contact.form.namePlaceholder}
                    value={form.name}
                    onChange={(e) =>
                      setForm((current) => ({
                        ...current,
                        name: e.target.value,
                      }))
                    }
                    className="w-full rounded-xl border border-border-soft bg-surface px-4 py-3 text-sm text-text placeholder-muted outline-none transition duration-300 focus:border-[#2563EB] focus:ring-4 focus:ring-[#2563EB]/10 sm:py-3.5"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="email"
                    className="text-[11px] font-medium uppercase tracking-[0.15em] text-muted"
                  >
                    {contact.form.emailLabel}
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    required
                    autoComplete="email"
                    placeholder={contact.form.emailPlaceholder}
                    value={form.email}
                    onChange={(e) =>
                      setForm((current) => ({
                        ...current,
                        email: e.target.value,
                      }))
                    }
                    className="w-full rounded-xl border border-border-soft bg-surface px-4 py-3 text-sm text-text placeholder-muted outline-none transition duration-300 focus:border-[#2563EB] focus:ring-4 focus:ring-[#2563EB]/10 sm:py-3.5"
                  />
                </div>
              </div>

              {/* Row 2 */}
              <div className="mt-3 grid gap-3 md:grid-cols-2">
                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="phone"
                    className="text-[11px] font-medium uppercase tracking-[0.15em] text-muted"
                  >
                    {contact.form.phoneLabel}
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    required
                    autoComplete="tel"
                    placeholder={contact.form.phonePlaceholder}
                    value={form.phone}
                    onChange={(e) =>
                      setForm((current) => ({
                        ...current,
                        phone: e.target.value,
                      }))
                    }
                    className="w-full rounded-xl border border-border-soft bg-surface px-4 py-3 text-sm text-text placeholder-muted outline-none transition duration-300 focus:border-[#2563EB] focus:ring-4 focus:ring-[#2563EB]/10 sm:py-3.5"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label
                    htmlFor="project"
                    className="text-[11px] font-medium uppercase tracking-[0.15em] text-muted"
                  >
                    {contact.form.projectLabel}
                  </label>
                  <input
                    id="project"
                    type="text"
                    name="project"
                    required
                    placeholder={contact.form.projectPlaceholder}
                    value={form.project}
                    onChange={(e) =>
                      setForm((current) => ({
                        ...current,
                        project: e.target.value,
                      }))
                    }
                    className="w-full rounded-xl border border-border-soft bg-surface px-4 py-3 text-sm text-text placeholder-muted outline-none transition duration-300 focus:border-[#2563EB] focus:ring-4 focus:ring-[#2563EB]/10 sm:py-3.5"
                  />
                </div>
              </div>

              {/* Message */}
              <div className="mt-3 flex flex-col gap-1.5">
                <label
                  htmlFor="message"
                  className="text-[11px] font-medium uppercase tracking-[0.15em] text-muted"
                >
                  {contact.form.messageLabel}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  placeholder={contact.form.messagePlaceholder}
                  value={form.message}
                  onChange={(e) =>
                    setForm((current) => ({
                      ...current,
                      message: e.target.value,
                    }))
                  }
                  className="w-full resize-none rounded-xl border border-border-soft bg-surface px-4 py-3 text-sm text-text placeholder-muted outline-none transition duration-300 focus:border-[#2563EB] focus:ring-4 focus:ring-[#2563EB]/10 sm:py-3.5"
                />
              </div>

              {/* Submit row */}
              <div className="mt-6 flex flex-col-reverse items-stretch gap-3 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-xs text-muted">{meta.responseTime}</p>

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-text px-7 py-3.5 text-sm font-semibold text-white transition-colors duration-300 hover:bg-[#2563EB] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563EB] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {status === "loading"
                    ? contact.form.submitLoadingLabel
                    : contact.form.submitLabel}
                  {status !== "loading" && (
                    <span
                      aria-hidden="true"
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    >
                      →
                    </span>
                  )}
                </button>
              </div>

              {/* Status banners */}
              {status === "success" && (
                <div
                  aria-live="polite"
                  className="mt-4 rounded-xl border border-emerald-200 bg-emerald-50 px-5 py-4 text-center text-sm text-emerald-700"
                >
                  {contact.form.successMessage}
                </div>
              )}

              {status === "error" && (
                <div
                  aria-live="polite"
                  className="mt-4 rounded-xl border border-red-200 bg-red-50 px-5 py-4 text-center text-sm text-red-700"
                >
                  {contact.form.errorMessage}
                </div>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* Floating WhatsApp button */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="group fixed bottom-5 right-5 z-50 flex items-center gap-3 rounded-full border border-[#25D366]/25 bg-[#eafaf0] p-1.5 text-[#0F1117] shadow-[0_20px_40px_-15px_rgba(37,211,102,0.35)] transition-all duration-300 hover:-translate-y-1 border-[#25D366]/50 hover:bg-[#dff6e9] hover:shadow-[0_24px_50px_-15px_rgba(37,211,102,0.5)] sm:pr-5"
      >
        <span className="relative flex h-10 w-10 items-center justify-center rounded-full bg-[#25D366] text-white">
          <WhatsAppIcon className="h-6 w-6" />
          <span className="absolute right-0 top-0 flex h-3 w-3">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/70" />
            <span className="relative inline-flex h-3 w-3 rounded-full border-2 border-[#eafaf0] bg-emerald-500" />
          </span>
        </span>

        <span className="hidden flex-col leading-tight sm:flex">
          <span className="text-[13px] font-semibold text-[#0F1117]">
            Chat on WhatsApp
          </span>
          <span className="text-[11px] text-[#4b5d52]">
            Usually replies fast
          </span>
        </span>
      </a>
      {/* Footer */}
      <Footer />
    </main>
  );
}
