import HeroSection from "@/app/home/hero";
import ClientSection from "./home/clients";
import ServicesSection from "@/app/home/services";
import TopicsSection from "@/app/home/topics";
import FaqSection from "@/app/home/faq";
import CtaSection from "@/app/home/cta";

export default function Home() {
  return (
    <div className="bg-white">
      <HeroSection />
      <ClientSection />
      <ServicesSection />
      <TopicsSection />
      <FaqSection />
      <CtaSection />
    </div>
  );
}