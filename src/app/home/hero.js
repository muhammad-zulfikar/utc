"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import FormModal from "@/app/components/FormModal";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

const images = ["/pexels.jpg", "/pexels2.jpg", "/pexels3.jpg"];

export default function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="relative h-screen bg-gray-50 flex items-center justify-center overflow-hidden">
      {images.map((image, index) => (
        <div
          key={index}
          className="absolute inset-0 transition-opacity duration-1000"
          style={{ opacity: currentImageIndex === index ? 1 : 0 }}
        >
          <Image src={image} alt={`Slide ${index + 1}`} fill className="object-cover" priority={index === 0} />
        </div>
      ))}
      <div className="absolute inset-0 bg-black/60 z-[1]"></div>
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8 z-10">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
            <span className="block">Smart Education</span>
            <span className="block text-[#FFC000]">Smart People</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-white sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            {t('hero.description')}
          </p>
          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <Button size="lg" onClick={() => setIsModalOpen(true)}>
              {t('hero.scheduleButton')}
            </Button>
            <FormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
            <div className="mt-3 rounded-md sm:mt-0 sm:ml-3">
              <Link href="/training/public">
                <Button variant="outline" size="lg">
                  {t('hero.viewProgramsButton')}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}