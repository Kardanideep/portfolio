import Link from "next/link";
import footer from "../data/footer.json";
import meta from "../data/meta.json";
import header from "../data/header.json";

const NAV = header.nav;
const SERVICES = footer.services;
const WORK = footer.work;

const INSTAGRAM_URL = "https://www.instagram.com/ishwattech/";
const LINKEDIN_URL = "https://www.linkedin.com/company/ishwat-technologies";
const ADDRESS = "Rajkot, Gujarat, India";

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

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 px-5 pb-6 pt-12 text-slate-300 md:px-8 md:pt-14">
      <div className="mx-auto max-w-7xl">
        {/* 4 columns on md+ */}
        <div className="grid gap-8 md:grid-cols-12 md:gap-6">
          {/* Brand + contact */}
          <div className="md:col-span-4">
            <Link
              href="/"
              className="inline-flex items-center rounded-lg bg-white p-1.5"
            >
              <img
                src="/logo.png"
                alt="Ishwat Technologies"
                className="h-8 w-auto object-contain lg:h-10"
              />
            </Link>

            <p className="mt-4 max-w-xs text-[13px] leading-5 text-slate-400">
              {footer.tagline}
            </p>

            {/* Contact info */}
            <div className="mt-5 flex flex-col gap-2.5">
              {/* Phone */}
              <a
                href={`tel:${meta.phoneTel}`}
                className="group flex w-fit items-center gap-2.5 text-[13px] text-slate-400 transition-colors duration-300 hover:text-[#60A5FA]"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-slate-800 bg-slate-900 text-slate-400 transition-colors duration-300 group-hover:border-[#60A5FA]/40 group-hover:bg-[#60A5FA]/10 group-hover:text-[#60A5FA]">
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-3.5 w-3.5"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" />
                  </svg>
                </span>
                <span className="flex flex-col leading-tight">
                  <span className="text-[9px] font-medium uppercase tracking-[0.14em] text-slate-500">
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
                className="group flex w-fit items-center gap-2.5 text-[13px] text-slate-400 transition-colors duration-300 hover:text-[#60A5FA]"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-slate-800 bg-slate-900 text-slate-400 transition-colors duration-300 group-hover:border-[#60A5FA]/40 group-hover:bg-[#60A5FA]/10 group-hover:text-[#60A5FA]">
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-3.5 w-3.5"
                  >
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <path d="m3 7 9 6 9-6" />
                  </svg>
                </span>
                <span className="flex flex-col leading-tight">
                  <span className="text-[9px] font-medium uppercase tracking-[0.14em] text-slate-500">
                    Email
                  </span>
                  <span className="mt-0.5 font-medium">{meta.email}</span>
                </span>
              </a>

              {/* Location */}
              <div className="flex w-fit items-center gap-2.5 text-[13px] text-slate-400">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-slate-800 bg-slate-900 text-slate-400">
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-3.5 w-3.5"
                  >
                    <path d="M12 21s-7-6.1-7-11a7 7 0 1 1 14 0c0 4.9-7 11-7 11Z" />
                    <circle cx="12" cy="10" r="2.5" />
                  </svg>
                </span>
                <span className="flex flex-col leading-tight">
                  <span className="text-[9px] font-medium uppercase tracking-[0.14em] text-slate-500">
                    Location
                  </span>
                  <span className="mt-0.5 font-medium">{ADDRESS}</span>
                </span>
              </div>
            </div>

            {/* Social links */}
            <div className="mt-5">
              <p className="text-[9px] font-medium uppercase tracking-[0.14em] text-slate-500">
                Follow us
              </p>

              <div className="mt-2.5 flex items-center gap-2">
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow us on Instagram"
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-800 bg-slate-900 text-slate-400 transition-colors duration-300 hover:border-[#DD2A7B]/40 hover:bg-[#DD2A7B]/10 hover:text-[#DD2A7B]"
                >
                  <InstagramIcon className="h-3.5 w-3.5" />
                </a>

                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Connect with us on LinkedIn"
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-800 bg-slate-900 text-slate-400 transition-colors duration-300 hover:border-[#0A66C2]/40 hover:bg-[#0A66C2]/10 hover:text-[#0A66C2]"
                >
                  <LinkedInIcon className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Company */}
          <nav aria-label="Company" className="md:col-span-2">
            <p className="text-[13px] font-semibold text-white">
              {footer.companyTitle}
            </p>

            <ul className="mt-3.5 space-y-2 text-[13px]">
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
            <p className="text-[13px] font-semibold text-white">
              {footer.servicesTitle}
            </p>

            <ul className="mt-3.5 space-y-2 text-[13px]">
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
            <p className="text-[13px] font-semibold text-white">
              {footer.workTitle}
            </p>

            <ul className="mt-3.5 space-y-2 text-[13px]">
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
        <div className="mt-10 flex flex-row items-center justify-between gap-3 border-t border-slate-800 pt-5 text-[11px] text-slate-500">
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