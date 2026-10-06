"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import header from "../data/header.json";   // ← changed

const NAV = header.nav;                     // ← changed

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  /* ── Track scroll for floating pill nav ── */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ── Close mobile menu whenever the route changes ── */
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  /* ── Active link based on current route ── */
  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  const activeLabel =
    NAV.find((link) => isActive(link.href))?.label ?? "Menu";

  return (
    <>
      {/* Spacer: reserves the header's height in the document flow */}
      <div aria-hidden="true" className="h-16 md:h-20" />

      {/* ── Full header ── */}
      <header className="absolute inset-x-0 top-0 z-40 border-b border-border-soft bg-surface/90 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-8xl items-center justify-between px-5 md:grid md:h-20 md:grid-cols-[1fr_auto_1fr]">
          <Link
            href="/"
            className="group inline-flex items-center md:justify-self-start"
          >
            <img
              src="/logo.png"
              alt="Deep Kardani"
              className="h-12 w-auto object-contain lg:h-16"
            /> 
          </Link>

          {/* Desktop Navigation (center) */}
          <nav className="hidden items-center gap-1 rounded-full border border-border-soft bg-bg p-1.5 md:flex">
            {NAV.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    active
                      ? "bg-[#F0EEFF] text-[#4F46E5] shadow-sm shadow-indigo-500/10"
                      : "text-muted hover:bg-surface hover:text-[#2563EB] hover:shadow-sm"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <Link
            href="/contact"
            className="group hidden items-center gap-2 justify-self-end rounded-full bg-[#111827] px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-[#1D4ED8] hover:shadow-lg hover:shadow-blue-500/20 md:flex"
          >
            Let&apos;s Talk
            <span className="transition-transform group-hover:translate-x-0.5">
              →
            </span>
          </Link>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="flex h-8 w-8 flex-col items-center justify-center gap-1.5 rounded-xl border border-border-soft bg-surface transition hover:border-[#2563EB] md:hidden"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <span
              className={`h-px w-4 bg-text transition ${
                open ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-px w-4 bg-text transition ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`h-px w-4 bg-text transition ${
                open ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>

        {/* Mobile dropdown — attached to the header */}
        {open && !scrolled && (
          <div className="border-t border-border-soft bg-surface md:hidden">
            <nav className="flex flex-col px-5 py-4">
              {NAV.map((link) => {
                const active = isActive(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`flex items-center justify-between py-3 text-base font-medium transition last:border-0 ${
                      active
                        ? "text-[#2563EB]"
                        : "text-muted hover:text-[#2563EB]"
                    }`}
                  >
                    {link.label}
                    {active && (
                      <span className="h-1.5 w-1.5 rounded-full bg-[#2563EB]" />
                    )}
                  </Link>
                );
              })}

              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="mt-4 rounded-full bg-[#111827] py-3 text-center text-sm font-semibold text-white transition hover:bg-[#1D4ED8]"
              >
                Let&apos;s Talk →
              </Link>
            </nav>
          </div>
        )}
      </header>

      {/* ── Floating pill nav (desktop) ── */}
      <nav
        className={`fixed left-1/2 top-4 z-50 hidden -translate-x-1/2 items-center gap-1 rounded-full border border-border-soft bg-surface/85 p-1.5 shadow-[0_10px_35px_-15px_rgba(15,23,42,0.25)] backdrop-blur-xl transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] md:flex ${
          scrolled
            ? "translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-4 opacity-0"
        }`}
      >
        {NAV.map((link) => {
          const active = isActive(link.href);
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`relative rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                active
                  ? "bg-[#DDE4FF] text-[#4F46E5] shadow-sm shadow-indigo-500/10"
                  : "text-muted hover:bg-bg hover:text-[#2563EB]"
              }`}
            >
              {link.label}
            </Link>
          );
        })}
      </nav>

      {/* ── Floating mobile toggle — shows current page name ── */}
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className={`fixed left-1/2 top-4 z-50 flex -translate-x-1/2 items-center gap-2 rounded-full border border-border-soft bg-surface/90 px-4 py-2 text-sm font-medium text-text shadow-[0_10px_35px_-15px_rgba(15,23,42,0.25)] backdrop-blur-xl transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] md:hidden ${
          scrolled
            ? "translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-4 opacity-0"
        }`}
        aria-label={open ? "Close menu" : `Open menu — currently on ${activeLabel}`}
        aria-expanded={open}
      >
        <span className="h-1.5 w-1.5 rounded-full bg-[#2563EB]" />
        <span className="max-w-[140px] truncate">{activeLabel}</span>
        <span
          aria-hidden="true"
          className={`text-[10px] text-muted transition-transform duration-300 ${
            open ? "rotate-180" : ""
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
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`flex items-center justify-between rounded-xl px-4 py-3 text-base font-medium transition ${
                    active
                      ? "bg-[#2563EB]/10 text-[#2563EB]"
                      : "text-muted hover:bg-bg hover:text-[#2563EB]"
                  }`}
                >
                  {link.label}
                  {active && (
                    <span className="h-1.5 w-1.5 rounded-full bg-[#2563EB]" />
                  )}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </>
  );
}