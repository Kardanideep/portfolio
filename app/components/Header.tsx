"use client";

import { useEffect, useState } from "react";
import site from "../data/site.json";

const NAV = site.nav;

export default function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);

  /* ── Scroll spy + scrolled flag ─────────────── */
  useEffect(() => {
    const sections = NAV.flatMap((n) => {
      const el = document.querySelector<HTMLElement>(n.href);
      return el ? [{ id: n.href, el }] : [];
    });

    const onScroll = () => {
      if (sections.length) {
        const scrollY = window.scrollY + 120;
        let current = "";

        for (const s of sections) {
          if (s.el.offsetTop <= scrollY) current = s.id;
        }

        if (
          window.innerHeight + window.scrollY >=
          document.body.offsetHeight - 4
        ) {
          current = sections[sections.length - 1].id;
        }

        setActive(current);
      }

      setScrolled(window.scrollY > 100);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  /* ── Current section label (for mobile floating pill) ── */
  const activeLabel =
    NAV.find((link) => link.href === active)?.label ?? "Menu";

  return (
    <>
      {/* Spacer: reserves the header's height in the document flow */}
      <div aria-hidden="true" className="h-16 md:h-20" />

      {/* ── Full header ── */}
      <header className="absolute inset-x-0 top-0 z-40 border-b border-border-soft bg-surface/90 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:grid md:h-20 md:grid-cols-[1fr_auto_1fr] ">
          <a
            href="#top"
            className="group inline-flex items-center md:justify-self-start"
          >
            <img
              src="/images/logo.png"
              alt="Deep Kardani"
              className="h-18 w-auto object-contain"
            />
          </a>
          {/* Desktop Navigation (center) */}
          <nav className="hidden items-center gap-1 rounded-full border border-border-soft bg-bg p-1.5 md:flex">
            {NAV.map((link) => {
              const isActive = active === link.href;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`relative rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${isActive
                    ? "bg-[#2563EB] text-white shadow-sm shadow-blue-500/25"
                    : "text-muted hover:bg-surface hover:text-[#2563EB] hover:shadow-sm"
                    }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <a
            href="#contact"
            className="group hidden items-center gap-2 justify-self-end rounded-full bg-[#111827] px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-[#1D4ED8] hover:shadow-lg hover:shadow-blue-500/20 md:flex"
          >
            Let's Talk
            <span className="transition-transform group-hover:translate-x-0.5">
              →
            </span>
          </a>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-xl border border-border-soft bg-surface transition hover:border-[#2563EB] md:hidden"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <span
              className={`h-px w-5 bg-text transition ${open ? "translate-y-[7px] rotate-45" : ""
                }`}
            />
            <span
              className={`h-px w-5 bg-text transition ${open ? "opacity-0" : ""
                }`}
            />
            <span
              className={`h-px w-5 bg-text transition ${open ? "-translate-y-[7px] -rotate-45" : ""
                }`}
            />
          </button>
        </div>

        {/* Mobile dropdown — attached to the header */}
        {open && !scrolled && (
          <div className="border-t border-border-soft bg-surface md:hidden">
            <nav className="flex flex-col px-5 py-4">
              {NAV.map((link) => {
                const isActive = active === link.href;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`flex items-center justify-between py-3 text-base font-medium transition last:border-0 ${isActive
                      ? "text-[#2563EB]"
                      : "text-muted hover:text-[#2563EB]"
                      }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="h-1.5 w-1.5 rounded-full bg-[#2563EB]" />
                    )}
                  </a>
                );
              })}

              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-4 rounded-full bg-[#111827] py-3 text-center text-sm font-semibold text-white transition hover:bg-[#1D4ED8]"
              >
                Let's Talk →
              </a>

            </nav>
          </div>
        )}
      </header>

      {/* ── Floating pill nav (desktop) ── */}
      <nav
        className={`fixed left-1/2 top-4 z-50 hidden -translate-x-1/2 items-center gap-1 rounded-full border border-border-soft bg-surface/85 p-1.5 shadow-[0_10px_35px_-15px_rgba(15,23,42,0.25)] backdrop-blur-xl transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] md:flex ${scrolled
          ? "translate-y-0 opacity-100"
          : "pointer-events-none -translate-y-4 opacity-0"
          }`}
      >
        {NAV.map((link) => {
          const isActive = active === link.href;
          return (
            <a
              key={link.href}
              href={link.href}
              className={`relative rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${isActive
                ? "bg-[#2563EB] text-white shadow-sm shadow-blue-500/25"
                : "text-muted hover:bg-bg hover:text-[#2563EB]"
                }`}
            >
              {link.label}
            </a>
          );
        })}
      </nav>

      {/* ── Floating mobile toggle — shows current section name ── */}
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className={`fixed left-1/2 top-4 z-50 flex -translate-x-1/2 items-center gap-2 rounded-full border border-border-soft bg-surface/90 px-4 py-2 text-sm font-medium text-text shadow-[0_10px_35px_-15px_rgba(15,23,42,0.25)] backdrop-blur-xl transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] md:hidden ${scrolled
          ? "translate-y-0 opacity-100"
          : "pointer-events-none -translate-y-4 opacity-0"
          }`}
        aria-label={open ? "Close menu" : `Open menu — currently in ${activeLabel}`}
        aria-expanded={open}
      >
        <span className="h-1.5 w-1.5 rounded-full bg-[#2563EB]" />
        <span className="max-w-[140px] truncate">{activeLabel}</span>
        <span
          aria-hidden="true"
          className={`text-[10px] text-muted transition-transform duration-300 ${open ? "rotate-180" : ""
            }`}
        >
          ▼
        </span>
      </button>

      {/* Mobile dropdown — floating panel (only when scrolled) */}
      {open && scrolled && (
        <div className="fixed inset-x-4 top-16 z-50 rounded-2xl border border-border-soft bg-surface/95 p-3 shadow-[0_20px_45px_-15px_rgba(15,23,42,0.3)] backdrop-blur-xl md:hidden">
          <nav className="flex flex-col">
            {NAV.map((link) => {
              const isActive = active === link.href;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`flex items-center justify-between rounded-xl px-4 py-3 text-base font-medium transition ${isActive
                    ? "bg-[#2563EB]/10 text-[#2563EB]"
                    : "text-muted hover:bg-bg hover:text-[#2563EB]"
                    }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="h-1.5 w-1.5 rounded-full bg-[#2563EB]" />
                  )}
                </a>
              );
            })}

          </nav>
        </div>
      )}
    </>
  );
}