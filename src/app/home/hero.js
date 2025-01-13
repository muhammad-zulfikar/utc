'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import FormModal from '@/app/components/FormModal';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';

const images = [
  '/images/hero/hero-1.jpg',
  '/images/hero/hero-2.jpg',
  '/images/hero/hero-3.jpg',
  '/images/hero/hero-4.jpeg',
];

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
    <div className="relative h-screen bg-gray-900 flex items-center justify-center overflow-hidden">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
            currentImageIndex === index
              ? 'opacity-100 scale-100'
              : 'opacity-0 scale-105'
          }`}
        >
          <Image
            src={image}
            alt={`Slide ${index + 1}`}
            fill
            className="object-cover brightness-75"
            priority={index === 0}
          />
        </div>
      ))}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-transparent z-10"></div>

      <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-6xl md:text-7xl">
          <span className="block">Smart Education</span>
          <span className="block text-primary">Smart People</span>
        </h1>
        <p className="mt-3 max-w-md mx-auto text-base text-white sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
          {t('hero.description')}
        </p>

        <div className="mt-8 flex flex-col items-center sm:flex-row sm:justify-center sm:space-x-4 gap-2">
          <Button
            variant="default"
            size="lg"
            className="shadow-md transition transform hover:scale-105"
            onClick={() => setIsModalOpen(true)}
          >
            {t('hero.scheduleButton')}
          </Button>

          <FormModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
          />

          <Link href="/training/public">
            <Button
              variant="outline"
              size="lg"
              className="shadow-md transition transform hover:scale-105"
            >
              {t('hero.downloadBrochureButton')}
            </Button>
          </Link>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              currentImageIndex === index ? 'bg-[#FFC000]' : 'bg-gray-500'
            }`}
            onClick={() => setCurrentImageIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </div>
  );
}
