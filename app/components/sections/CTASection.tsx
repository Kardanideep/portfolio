import home from "../../data/home.json";
import meta from "../../data/meta.json";
import WhatsAppIcon from "../shared/WhatsAppIcon";

const WHATSAPP_URL = `https://wa.me/919727927266?text=${encodeURIComponent(
  "Hi Deep, I need a website for my business",
)}`;

export default function CTASection() {
  const cta = home.cta;

  return (
    <div className="border-y border-border-soft bg-surface px-4 py-12 xs:px-5 xs:py-14 sm:px-6 sm:py-20 md:px-8 md:py-24">
      <div className="cta-card relative mx-auto w-full max-w-7xl overflow-hidden rounded-2xl border border-[#DCE7FF] px-5 py-10 shadow-[0_30px_80px_-50px_rgba(37,99,235,0.35)] xs:rounded-[1.5rem] xs:px-6 xs:py-12 sm:rounded-[2.5rem] sm:px-10 sm:py-14 md:px-16 md:py-16">
        <div aria-hidden="true" className="cta-dots pointer-events-none absolute inset-0 opacity-60" />
        <div
          aria-hidden="true"
          className="cta-glow-1 pointer-events-none absolute -top-24 -right-20 h-72 w-72 rounded-full bg-[#2563EB]/30 blur-[90px]"
        />
        <div
          aria-hidden="true"
          className="cta-glow-2 pointer-events-none absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-[#7C3AED]/30 blur-[90px]"
        />
        <div
          aria-hidden="true"
          className="cta-glow-3 pointer-events-none absolute left-1/2 top-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#2563EB]/20 blur-[80px]"
        />

        <div className="relative grid items-center gap-7 xs:gap-8 md:grid-cols-[1fr_auto] md:gap-12">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-[#2563EB]/20 bg-white px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-[#2563EB] shadow-[0_4px_12px_-6px_rgba(37,99,235,0.3)] xs:px-3.5 xs:text-[12px] xs:tracking-[0.2em] sm:text-[11px]">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#2563EB]/60 motion-reduce:animate-none" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#2563EB]" />
              </span>
              {cta?.eyebrow ?? "Ready to start?"}
            </span>

            <h2 className="mt-4 max-w-3xl text-[1.625rem] font-bold leading-[1.12] tracking-[-0.025em] text-[#0F1117] xs:mt-5 xs:text-[1.875rem] xs:leading-[1.1] sm:text-4xl sm:leading-[1.08] sm:tracking-[-0.03em] md:text-5xl">
              {cta?.heading ?? "Let's build something"}{" "}
              <span className="bg-gradient-to-r from-[#2563EB] to-[#7C3AED] bg-clip-text text-transparent">
                {cta?.headingHighlight ?? "worth remembering."}
              </span>
            </h2>

            <p className="mt-3 max-w-3xl text-[15px] leading-6 text-[#596171] xs:mt-4 xs:text-[15.5px] xs:leading-[1.7] sm:text-base sm:leading-8">
              {cta?.intro ??
                "Whether it's a new website, a product idea or a quick question — tell me what you have in mind. I usually reply within 24 hours."}
            </p>

            <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2.5 text-[13px] text-[#596171] xs:mt-6 xs:gap-x-6 xs:gap-y-3 xs:text-[14px] sm:text-sm">
              <span className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500/60 motion-reduce:animate-none" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                {meta.availability}
              </span>
              <span className="hidden h-3 w-px bg-[#0F1117]/10 sm:block" />
              <span>{meta.responseTime}</span>
            </div>
          </div>

          <div className="flex flex-col gap-2.5 xs:gap-3 md:w-[300px] md:shrink-0">
            <a
              href="/contact"
              className="group inline-flex items-center justify-between gap-2 rounded-full bg-[#111827] px-5 py-3 text-[13px] font-semibold text-white shadow-[0_15px_35px_-18px_rgba(17,24,39,0.5)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#2563EB] hover:shadow-[0_20px_45px_-18px_rgba(37,99,235,0.55)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2563EB] xs:gap-3 xs:px-6 xs:py-3.5 xs:text-[14px] sm:text-sm"
            >
              {cta?.primaryLabel ?? "Start a project"}
              <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-between gap-2 rounded-full border border-[#0F1117]/12 bg-white px-5 py-3 text-[13px] font-semibold text-[#0F1117] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#25D366] hover:text-[#25D366] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366] xs:gap-3 xs:px-6 xs:py-3.5 xs:text-[14px] sm:text-sm"
            >
              <span className="inline-flex items-center gap-2">
                <WhatsAppIcon className="h-4 w-4" />
                {cta?.secondaryLabel ?? "WhatsApp"}
              </span>
              <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}