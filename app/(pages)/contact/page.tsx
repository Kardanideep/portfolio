"use client";

import { FormEvent, useEffect, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import meta from "../../data/meta.json";
import contact from "../../data/contact-page.json";

const WHATSAPP_NUMBER = "919727927266";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Hi Deep, I need a website for my business",
)}`;
const INSTAGRAM_URL = "https://www.instagram.com/ishwattech/";
const LINKEDIN_URL = "https://www.linkedin.com/company/ishwat-technologies";

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

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  );
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M20.452 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.355V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

/* Helper: resolve CTA href — supports "whatsapp" keyword */
function resolveHref(href: string) {
  return href === "whatsapp" ? WHATSAPP_URL : href;
}

export default function ContactPage() {
  const { hero } = contact;

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
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!response.ok) throw new Error("Failed to send message");

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

  /* Auto-dismiss status banner after 5s */
  useEffect(() => {
    if (status !== "success" && status !== "error") return;

    const id = setTimeout(() => setStatus("idle"), 5000);
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

      <Header />

      {/* ── Contact Hero ─────────────────────────────────── */}
      <section className="relative overflow-hidden border-b border-border-soft bg-surface px-4 pb-12 pt-12 xs:px-5 xs:pb-14 xs:pt-14 sm:px-6 sm:pb-16 sm:pt-16 md:px-8 md:pb-20 md:pt-20 lg:px-10 lg:pb-24 lg:pt-24">
        {/* Ambient glows — blue accent */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
        >
          <div className="absolute -top-40 left-1/4 h-72 w-72 rounded-full bg-[#2563EB]/10 blur-[120px] sm:h-80 sm:w-80" />
          <div className="absolute -bottom-32 right-[-4rem] h-64 w-64 rounded-full bg-[#7C3AED]/10 blur-[120px] sm:h-72 sm:w-72" />
        </div>

        <div className="mx-auto w-full max-w-7xl">
          {/* ── Main headline block ── */}
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
            {/* Heading */}
            <div className="lg:col-span-11">
              <h1 className="text-[2rem] font-bold leading-[1.05] tracking-[-0.03em] text-text xs:text-[2.5rem] xs:leading-[1.02] sm:text-[3.25rem] sm:leading-[0.98] sm:tracking-[-0.035em] md:text-[4rem] lg:text-[5.5rem]">
                {hero.heading}{" "}
                <span className="relative inline-block">
                  <span className="relative z-10 font-serif italic text-muted">
                    {hero.headingHighlight}
                  </span>
                  {/* Blue underline swash */}
                  <span
                    aria-hidden="true"
                    className="absolute bottom-1 left-0 z-0 h-2 w-full bg-[#2563EB]/25 sm:h-3 md:h-4"
                  />
                </span>
              </h1>
            </div>
          </div>

          {/* ── Bottom row: intro + CTAs + stats ── */}
          <div className="mt-10 grid gap-8 sm:mt-12 lg:mt-20 lg:grid-cols-12 lg:gap-8">
            {/* Intro text */}
            <div className="lg:col-span-5">
              <p className="max-w-md text-[15px] leading-7 text-muted xs:text-[16px] xs:leading-8 sm:text-base sm:leading-8 md:text-[17px]">
                {hero.intro}
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col gap-3 lg:col-span-4 lg:pt-1">
              <a
                href={resolveHref(hero.primaryCta.href)}
                {...(hero.primaryCta.href === "whatsapp"
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="group inline-flex items-center justify-between gap-3 rounded-full bg-text px-5 py-3 text-[15px] font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#2563EB] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563EB] sm:px-6 sm:py-3.5 sm:text-sm"
              >
                {hero.primaryCta.label}
                <span
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                >
                  →
                </span>
              </a>

              <a
                href={resolveHref(hero.secondaryCta.href)}
                {...(hero.secondaryCta.href === "whatsapp"
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="group inline-flex items-center justify-between gap-3 rounded-full border border-border-soft bg-bg px-5 py-3 text-[15px] font-semibold text-text transition-all duration-300 hover:-translate-y-0.5 hover:border-[#25D366] hover:text-[#25D366] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366] sm:px-6 sm:py-3.5 sm:text-sm"
              >
                <span className="inline-flex items-center gap-2">
                  <WhatsAppIcon className="h-4 w-4" />
                  {hero.secondaryCta.label}
                </span>
                <span
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                >
                  →
                </span>
              </a>
            </div>

            {/* Stats / facts */}
            <div className="grid grid-cols-2 gap-5 sm:gap-6 lg:col-span-3 lg:pt-1">
              <div className="flex flex-col gap-1.5 border-l-2 border-[#2563EB] pl-4">
                <span className="text-[1.375rem] font-bold tracking-[-0.03em] text-text xs:text-[1.5rem] sm:text-3xl">
                  24<span className="text-muted">h</span>
                </span>
                <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted xs:text-[12px] sm:text-[10px]">
                  Avg reply
                </span>
              </div>

              <div className="flex flex-col gap-1.5 border-l-2 border-border-strong pl-4">
                <span className="text-[1.375rem] font-bold tracking-[-0.03em] text-text xs:text-[1.5rem] sm:text-3xl">
                  100<span className="text-muted">%</span>
                </span>
                <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-muted xs:text-[12px] sm:text-[10px]">
                  Response rate
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Contact form + details ───────────────────────── */}
      <section
        id="contact"
        className="border-t border-border-soft bg-surface px-4 py-14 xs:px-5 xs:py-16 sm:px-6 sm:py-20 md:px-8 md:py-24 lg:px-10 lg:py-28"
      >
        <div className="mx-auto w-full max-w-7xl">
          {/* ── Full-width header ── */}
          <div >
            <p className="text-[13px] font-semibold uppercase tracking-[0.25em] text-accent sm:text-xs">
              {contact.eyebrow}
            </p>

            <h2 className="mt-3 text-[1.75rem] font-semibold leading-[1.05] tracking-[-0.03em] xs:text-[2rem] xs:leading-[1] sm:mt-4 sm:text-[2.5rem] md:text-[3rem] lg:text-[3.25rem]">
              {contact.heading}{" "}
              <span className="italic text-muted">{contact.headingHighlight}</span>
            </h2>

            <p className="mt-4  text-[15px] leading-6 text-muted xs:text-[16px] xs:leading-7 sm:mt-5 sm:text-base sm:leading-7 md:text-lg md:leading-8">
              {contact.intro}
            </p>
          </div>

          {/* ── Two-column grid: cards + form ── */}
          <div className="mt-10 grid gap-10 sm:mt-12 sm:gap-12 lg:mt-14 lg:grid-cols-12 lg:gap-16">
            {/* Left: contact cards */}
            <div className="lg:col-span-5">
              <div className="lg:sticky lg:top-24">
                {/* ── GROUP 1: Contact ── */}
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-muted sm:text-[10px]">
                    Contact
                  </p>

                  <div className="mt-3 flex flex-col gap-3">
                    {/* Phone */}
                    <a
                      href={`tel:${meta.phoneTel}`}
                      className="group flex items-center gap-3 rounded-2xl border border-border-soft bg-bg p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#2563EB] hover:bg-[#2563EB]/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563EB] sm:gap-4 md:p-5"
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
                        <span className="text-[11px] font-medium uppercase tracking-[0.15em] text-muted xs:text-[12px] sm:text-[11px]">
                          {contact.phoneLabel}
                        </span>
                        <span className="mt-0.5 truncate text-[14px] font-semibold text-text xs:text-[15px] sm:text-base">
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
                      className="group flex items-center gap-3 rounded-2xl border border-border-soft bg-bg p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#F59E0B] hover:bg-[#F59E0B]/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F59E0B] sm:gap-4 md:p-5"
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
                        <span className="text-[11px] font-medium uppercase tracking-[0.15em] text-muted xs:text-[12px] sm:text-[11px]">
                          {contact.emailLabel}
                        </span>
                        <span className="mt-0.5 truncate text-[14px] font-semibold text-text xs:text-[15px] sm:text-base">
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
                      className="group flex items-center gap-3 rounded-2xl border border-border-soft bg-bg p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#25D366] hover:bg-[#25D366]/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366] sm:gap-4 md:p-5"
                    >
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#25D366]/10 text-[#25D366] transition-colors duration-300 group-hover:bg-[#25D366] group-hover:text-white sm:h-11 sm:w-11">
                        <WhatsAppIcon className="h-5 w-5" />
                      </span>
                      <span className="flex min-w-0 flex-1 flex-col">
                        <span className="text-[11px] font-medium uppercase tracking-[0.15em] text-muted xs:text-[12px] sm:text-[11px]">
                          {contact.whatsappLabel}
                        </span>
                        <span className="mt-0.5 truncate text-[14px] font-semibold text-text xs:text-[15px] sm:text-base">
                          {contact.whatsappValue}
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
                </div>

                {/* ── GROUP 2: Follow ── */}
                <div className="mt-4">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-muted sm:text-[10px]">
                    Follow us
                  </p>

                  <div className="mt-3 flex flex-col gap-3">
                    {/* Instagram */}
                    <a
                      href={INSTAGRAM_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Follow us on Instagram"
                      className="group flex items-center gap-3 rounded-2xl border border-border-soft bg-bg p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#DD2A7B] hover:bg-[#DD2A7B]/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#DD2A7B] sm:gap-4 md:p-5"
                    >
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF] text-white sm:h-11 sm:w-11">
                        <InstagramIcon className="h-5 w-5" />
                      </span>
                      <span className="flex min-w-0 flex-1 flex-col">
                        <span className="text-[11px] font-medium uppercase tracking-[0.15em] text-muted xs:text-[12px] sm:text-[11px]">
                          Instagram
                        </span>
                        <span className="mt-0.5 truncate text-[14px] font-semibold text-text xs:text-[15px] sm:text-base">
                          @ishwattech
                        </span>
                      </span>
                      <span
                        aria-hidden="true"
                        className="text-muted transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#DD2A7B]"
                      >
                        ↗
                      </span>
                    </a>

                    {/* LinkedIn */}
                    <a
                      href={LINKEDIN_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Connect with us on LinkedIn"
                      className="group flex items-center gap-3 rounded-2xl border border-border-soft bg-bg p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#0A66C2] hover:bg-[#0A66C2]/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0A66C2] sm:gap-4 md:p-5"
                    >
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#0A66C2] text-white sm:h-11 sm:w-11">
                        <LinkedInIcon className="h-5 w-5" />
                      </span>
                      <span className="flex min-w-0 flex-1 flex-col">
                        <span className="text-[11px] font-medium uppercase tracking-[0.15em] text-muted xs:text-[12px] sm:text-[11px]">
                          LinkedIn
                        </span>
                        <span className="mt-0.5 truncate text-[14px] font-semibold text-text xs:text-[15px] sm:text-base">
                          Ishwat Technologies
                        </span>
                      </span>
                      <span
                        aria-hidden="true"
                        className="text-muted transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#0A66C2]"
                      >
                        ↗
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: form */}
            <div className="lg:col-span-7">
              <form
                onSubmit={handleSubmit}
                className="rounded-2xl border border-border-soft bg-bg p-5 shadow-[0_20px_60px_-40px_rgba(15,23,42,0.25)] xs:rounded-3xl xs:p-6 sm:p-8 md:p-10"
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
                      className="text-[11px] font-medium uppercase tracking-[0.15em] text-muted xs:text-[12px] sm:text-[11px]"
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
                      className="w-full rounded-xl border border-border-soft bg-surface px-4 py-3 text-[14px] text-text placeholder-muted outline-none transition duration-300 focus:border-[#2563EB] focus:ring-4 focus:ring-[#2563EB]/10 xs:text-[15px] sm:py-3.5 sm:text-sm"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="email"
                      className="text-[11px] font-medium uppercase tracking-[0.15em] text-muted xs:text-[12px] sm:text-[11px]"
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
                      className="w-full rounded-xl border border-border-soft bg-surface px-4 py-3 text-[14px] text-text placeholder-muted outline-none transition duration-300 focus:border-[#2563EB] focus:ring-4 focus:ring-[#2563EB]/10 xs:text-[15px] sm:py-3.5 sm:text-sm"
                    />
                  </div>
                </div>

                {/* Row 2 */}
                <div className="mt-3 grid gap-3 md:grid-cols-2">
                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="phone"
                      className="text-[11px] font-medium uppercase tracking-[0.15em] text-muted xs:text-[12px] sm:text-[11px]"
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
                      className="w-full rounded-xl border border-border-soft bg-surface px-4 py-3 text-[14px] text-text placeholder-muted outline-none transition duration-300 focus:border-[#2563EB] focus:ring-4 focus:ring-[#2563EB]/10 xs:text-[15px] sm:py-3.5 sm:text-sm"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label
                      htmlFor="project"
                      className="text-[11px] font-medium uppercase tracking-[0.15em] text-muted xs:text-[12px] sm:text-[11px]"
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
                      className="w-full rounded-xl border border-border-soft bg-surface px-4 py-3 text-[14px] text-text placeholder-muted outline-none transition duration-300 focus:border-[#2563EB] focus:ring-4 focus:ring-[#2563EB]/10 xs:text-[15px] sm:py-3.5 sm:text-sm"
                    />
                  </div>
                </div>

                {/* Message */}
                <div className="mt-3 flex flex-col gap-1.5">
                  <label
                    htmlFor="message"
                    className="text-[11px] font-medium uppercase tracking-[0.15em] text-muted xs:text-[12px] sm:text-[11px]"
                  >
                    {contact.form.messageLabel}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={7}
                    required
                    placeholder={contact.form.messagePlaceholder}
                    value={form.message}
                    onChange={(e) =>
                      setForm((current) => ({
                        ...current,
                        message: e.target.value,
                      }))
                    }
                    className="w-full resize-none rounded-xl border border-border-soft bg-surface px-4 py-3 text-[14px] text-text placeholder-muted outline-none transition duration-300 focus:border-[#2563EB] focus:ring-4 focus:ring-[#2563EB]/10 xs:text-[15px] sm:py-3.5 sm:text-sm"
                  />
                </div>

                {/* Submit row */}
                <div className="mt-6 flex flex-col-reverse items-stretch gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-[12px] text-muted xs:text-[13px] sm:text-xs">
                    {meta.responseTime}
                  </p>

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="group inline-flex items-center justify-center gap-2 rounded-full bg-text px-6 py-3 text-[14px] font-semibold text-white transition-colors duration-300 hover:bg-[#2563EB] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563EB] disabled:cursor-not-allowed disabled:opacity-60 xs:text-[15px] sm:px-7 sm:py-3.5 sm:text-sm"
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
                    className="mt-4 rounded-xl border border-emerald-200 bg-emerald-50 px-5 py-4 text-center text-[13px] text-emerald-700 xs:text-[14px] sm:text-sm"
                  >
                    {contact.form.successMessage}
                  </div>
                )}

                {status === "error" && (
                  <div
                    aria-live="polite"
                    className="mt-4 rounded-xl border border-red-200 bg-red-50 px-5 py-4 text-center text-[13px] text-red-700 xs:text-[14px] sm:text-sm"
                  >
                    {contact.form.errorMessage}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Floating WhatsApp button */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="group fixed bottom-4 right-4 z-50 flex items-center gap-3 rounded-full border border-[#25D366]/25 bg-[#eafaf0] p-1.5 text-[#0F1117] shadow-[0_20px_40px_-15px_rgba(37,211,102,0.35)] transition-all duration-300 hover:-translate-y-1 border-[#25D366]/50 hover:bg-[#dff6e9] hover:shadow-[0_24px_50px_-15px_rgba(37,211,102,0.5)] sm:bottom-5 sm:right-5 sm:pr-5"
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

      <Footer />
    </main>
  );
}