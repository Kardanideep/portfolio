import WhatsAppIcon from "../shared/WhatsAppIcon";

const WHATSAPP_URL = `https://wa.me/919727927266?text=${encodeURIComponent(
  "Hi Deep, I need a website for my business",
)}`;

export default function FloatingWhatsApp() {
  return (
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
        <span className="text-[13px] font-semibold text-[#0F1117]">Chat on WhatsApp</span>
        <span className="text-[11px] text-[#4b5d52]">Usually replies fast</span>
      </span>
    </a>
  );
}