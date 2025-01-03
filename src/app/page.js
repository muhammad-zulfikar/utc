import HeroSection from "@/app/home/hero";
import ServicesSection from "@/app/home/services";
import FaqSection from "@/app/home/faq";
import CtaSection from "@/app/home/cta";

export default function Home() {
  return (
    <div className="bg-white">
      <HeroSection />
      <ServicesSection />
      <FaqSection />
      <CtaSection />
    </div>
  );
}