import Link from "next/link";
import footer from "../data/footer.json";
import meta from "../data/meta.json";
import header from "../data/header.json";

const NAV = header.nav;
const SERVICES = footer.services;
const WORK = footer.work;

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 px-5 pb-8 pt-16 text-slate-300 md:px-8 md:pt-20">
      <div className="mx-auto max-w-7xl">
        {/* 4 columns on md+ — single row */}
        <div className="grid gap-10 md:grid-cols-12 md:gap-8">
          {/* Brand + contact */}
          <div className="md:col-span-4">
            <Link
              href="/"
              className="group inline-flex items-center rounded-xl bg-white p-2"
            >
              <img
                src="/logo.png"
                alt="Deep Kardani"
                className="h-10 w-auto object-contain lg:h-14"
              />
            </Link>

            <p className="mt-5 max-w-xs text-sm leading-6 text-slate-400">
              {footer.tagline}
            </p>

            {/* Contact info */}
            <div className="mt-7 flex flex-col gap-3">
              {/* Phone */}
              <a
                href={`tel:${meta.phoneTel}`}
                className="group flex w-fit items-center gap-3 text-sm text-slate-400 transition-colors duration-300 hover:text-[#60A5FA]"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-slate-800 bg-slate-900 text-slate-400 transition-colors duration-300 group-hover:border-[#60A5FA]/40 group-hover:bg-[#60A5FA]/10 group-hover:text-[#60A5FA]">
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" />
                  </svg>
                </span>
                <span className="flex flex-col">
                  <span className="text-[10px] font-medium uppercase tracking-[0.15em] text-slate-500">
                    Phone
                  </span>
                  <span className="mt-0.5 font-medium">
                    {meta.phoneDisplay}
                  </span>
                </span>
              </a>

              {/* Email */}
              <a
                href={`mailto:${meta.email}`}
                className="group flex w-fit items-center gap-3 text-sm text-slate-400 transition-colors duration-300 hover:text-[#60A5FA]"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-slate-800 bg-slate-900 text-slate-400 transition-colors duration-300 group-hover:border-[#60A5FA]/40 group-hover:bg-[#60A5FA]/10 group-hover:text-[#60A5FA]">
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <path d="m3 7 9 6 9-6" />
                  </svg>
                </span>
                <span className="flex flex-col">
                  <span className="text-[10px] font-medium uppercase tracking-[0.15em] text-slate-500">
                    Email
                  </span>
                  <span className="mt-0.5 font-medium">{meta.email}</span>
                </span>
              </a>
            </div>
          </div>

          {/* Company */}
          <nav aria-label="Company" className="md:col-span-2">
            <p className="text-sm font-semibold text-white">
              {footer.companyTitle}
            </p>

            <ul className="mt-5 space-y-3 text-sm">
              {NAV.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-400 transition-colors duration-300 hover:text-[#60A5FA]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Services */}
          <div className="md:col-span-3">
            <p className="text-sm font-semibold text-white">
              {footer.servicesTitle}
            </p>

            <ul className="mt-5 space-y-3 text-sm">
              {SERVICES.map((service) => (
                <li key={service}>
                  <Link
                    href="/services"
                    className="text-slate-400 transition-colors duration-300 hover:text-[#60A5FA]"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Work */}
          <div className="md:col-span-3">
            <p className="text-sm font-semibold text-white">
              {footer.workTitle}
            </p>

            <ul className="mt-5 space-y-3 text-sm">
              {WORK.map((project) => (
                <li key={project}>
                  <Link
                    href="/work"
                    className="text-slate-400 transition-colors duration-300 hover:text-[#60A5FA]"
                  >
                    {project}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-14 flex flex-row justify-between gap-3 border-t border-slate-800 pt-6 text-xs text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {meta.name}. {footer.copyrightLabel}
          </p>
          <a
            href="#top"
            className="w-fit transition-colors duration-300 hover:text-[#60A5FA]"
          >
            {footer.backToTopLabel}
          </a>
        </div>
      </div>
    </footer>
  );
}