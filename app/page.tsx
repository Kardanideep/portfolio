import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ISHWAT Technologies | Custom Web & Mobile Applications",
  description: "We build digital solutions for businesses. Specialized in web development, e-commerce, mobile applications, and custom software.",
};
import Header from "./components/Header";
import Footer from "./components/Footer";
import {
  HeroSection,
  TechStackSection,
  WorkSection,
  ServicesSection,
  ProcessSection,
  TrustSection,
  TestimonialSection,
  AboutSection,   
  CTASection,
  FloatingWhatsApp,
} from "./components/sections";

export default function Home() {
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

      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <TechStackSection />
      <ProcessSection />
      <WorkSection limit={3} />
      <TrustSection />
      <TestimonialSection />
      <CTASection />
      <FloatingWhatsApp />
      <Footer />
    </main>
  );
}