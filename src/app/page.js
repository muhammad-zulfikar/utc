import HeroSection from "@/app/home/hero";
import ClientSection from "./home/clients";
import ServicesSection from "@/app/home/services";
import SyllabusSection from "@/app/home/syllabus";
import FaqSection from "@/app/home/faq";
import CtaSection from "@/app/home/cta";

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      {/* Infinite Grid Background */}
      <div className="absolute inset-0 z-[-1] bg-transparent">
        <div className="absolute inset-0 bg-[length:50px_50px] bg-[linear-gradient(to_right,rgba(0,0,0,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.1)_1px,transparent_1px)] animate-scroll-grid"></div>
      </div>
      <HeroSection />
      <ClientSection />
      <ServicesSection />
      <SyllabusSection />
      <FaqSection />
      <CtaSection />
    </div>
  );
}