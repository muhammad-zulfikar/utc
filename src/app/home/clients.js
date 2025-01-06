"use client";

import React, { useEffect, useState } from 'react';
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

const ClientSection = () => {
  const { t } = useLanguage();
  const [scrollPosition, setScrollPosition] = useState(0);
  
  const logos = [
    { src: "/images/mitra/pln.png", alt: "PLN" },
    { src: "/images/mitra/chevron.png", alt: "Chevron" },
    { src: "/images/mitra/semen-padang.png", alt: "Semen Padang" },
    { src: "/images/mitra/krakatau-steel.png", alt: "Krakatau Steel" },
    { src: "/images/mitra/pelindo.png", alt: "Pelindo" },
    { src: "/images/mitra/mandiri.png", alt: "Mandiri" },
    { src: "/images/mitra/pertamina.png", alt: "Pertamina" },
    { src: "/images/mitra/pusri.png", alt: "PUSRI" },
    { src: "/images/mitra/bukit-asam.png", alt: "Bukit Asam" },
    // Duplicate logos for infinite scroll
    { src: "/images/mitra/pln.png", alt: "PLN" },
    { src: "/images/mitra/chevron.png", alt: "Chevron" },
    { src: "/images/mitra/semen-padang.png", alt: "Semen Padang" },
    { src: "/images/mitra/krakatau-steel.png", alt: "Krakatau Steel" },
    { src: "/images/mitra/pelindo.png", alt: "Pelindo" },
    { src: "/images/mitra/mandiri.png", alt: "Mandiri" },
    { src: "/images/mitra/pertamina.png", alt: "Pertamina" },
    { src: "/images/mitra/pusri.png", alt: "PUSRI" },
    { src: "/images/mitra/bukit-asam.png", alt: "Bukit Asam" },
  ];

  useEffect(() => {
    const animationFrame = () => {
      setScrollPosition(prev => (prev + 0.5) % (logos.length / 2 * 200));
      requestAnimationFrame(animationFrame);
    };

    const animation = requestAnimationFrame(animationFrame);
    return () => cancelAnimationFrame(animation);
  }, []);

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            {t('clients.title')}
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            {t('clients.subtitle')}
          </p>
        </div>

        <Card className="overflow-hidden border-none shadow-none bg-transparent">
          <div className="relative h-32">
            <div 
              className="absolute flex items-center gap-8 transition-transform duration-100"
              style={{ 
                transform: `translateX(-${scrollPosition}px)`,
                width: 'fit-content'
              }}
            >
              {logos.map((logo, index) => (
                <div 
                  key={index}
                  className="flex-shrink-0 w-48 h-24 relative bg-white rounded-lg shadow-sm overflow-hidden"
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    fill
                    className="object-contain p-2 transform hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              ))}
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ClientSection;