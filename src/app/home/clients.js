"use client";

import React, { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

const ClientSection = () => {
  const { t } = useLanguage();
  const [scrollPosition, setScrollPosition] = useState(0);

  const logos = [
    { src: "/images/clients/pln.png", alt: "PLN" },
    { src: "/images/clients/chevron.png", alt: "Chevron" },
    { src: "/images/clients/semen-padang.png", alt: "Semen Padang" },
    { src: "/images/clients/krakatau-steel.png", alt: "Krakatau Steel" },
    { src: "/images/clients/pelindo.png", alt: "Pelindo" },
    { src: "/images/clients/mandiri.png", alt: "Mandiri" },
    { src: "/images/clients/pertamina.png", alt: "Pertamina" },
    { src: "/images/clients/pusri.png", alt: "PUSRI" },
    { src: "/images/clients/bukit-asam.png", alt: "Bukit Asam" },
    { src: "/images/clients/bogasari.png", alt: "Bogasari" },
    { src: "/images/clients/ahm.png", alt: "Astra Honda Motor" },
    { src: "/images/clients/nhm.png", alt: "Nusa Halmahera Mineral" },
    { src: "/images/clients/ytlpower.png", alt: "YTL Power" },
    { src: "/images/clients/mitsuba.png", alt: "Mitsuba Indonesia" },
    { src: "/images/clients/lbe.png", alt: "Lestari Banten Energi" },
  ];

  useEffect(() => {
    const animationFrame = () => {
      setScrollPosition((prev) => (prev + 0.5) % (logos.length * 200));
      requestAnimationFrame(animationFrame);
    };

    const animation = requestAnimationFrame(animationFrame);
    return () => cancelAnimationFrame(animation);
  }, []);

  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            {t("clients.title")}
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            {t("clients.subtitle")}
          </p>
        </div>

        <Card className="overflow-hidden border-none shadow-none bg-transparent">
          <div className="relative h-24 sm:h-32">
            <div
              className="absolute flex items-center gap-4 sm:gap-8 transition-transform duration-100"
              style={{
                transform: `translateX(-${scrollPosition}px)`,
                width: `${logos.length * 160}px`,
              }}
            >
              {logos.map((logo, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-24 h-16 sm:w-32 sm:h-24 relative overflow-hidden"
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    fill
                    className="object-contain p-2 transform hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 640px) 20vw, (max-width: 768px) 15vw, 10vw"
                  />
                </div>
              ))}
              {logos.map((logo, index) => (
                <div
                  key={`repeat-${index}`}
                  className="flex-shrink-0 w-24 h-16 sm:w-32 sm:h-24 relative overflow-hidden"
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    fill
                    className="object-contain p-2 transform hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 640px) 20vw, (max-width: 768px) 15vw, 10vw"
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