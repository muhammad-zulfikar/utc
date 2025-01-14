'use client';

import React from 'react';
import { Card } from '@/components/ui/card';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { Users } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const ClientSection = () => {
  const { t } = useLanguage();

  const categories = {
    all: t('about.clients.categories.all'),
    energy: t('about.clients.categories.energy'),
    manufacturing: t('about.clients.categories.manufacturing'),
    mining: t('about.clients.categories.mining'),
  };

  const logos = [
    {
      src: '/images/clients/pln.png',
      alt: 'PLN',
      category: 'energy',
    },
    {
      src: '/images/clients/chevron.png',
      alt: 'Chevron',
      category: 'energy',
    },
    {
      src: '/images/clients/cirebon-power.png',
      alt: 'Cirebon Power',
      category: 'energy',
    },
    {
      src: '/images/clients/semen-padang.png',
      alt: 'Semen Padang',
      category: 'manufacturing',
    },
    {
      src: '/images/clients/krakatau-steel.png',
      alt: 'Krakatau Steel',
      category: 'manufacturing',
    },
    {
      src: '/images/clients/pelindo.png',
      alt: 'Pelindo',
      category: 'energy',
    },
    {
      src: '/images/clients/mandiri.png',
      alt: 'Mandiri',
      category: 'manufacturing',
    },
    {
      src: '/images/clients/pertamina.png',
      alt: 'Pertamina',
      category: 'energy',
    },
    {
      src: '/images/clients/badak-lng.png',
      alt: 'Badak LNG',
      category: 'energy',
    },
    {
      src: '/images/clients/pusri.png',
      alt: 'PUSRI',
      category: 'manufacturing',
    },
    {
      src: '/images/clients/bukit-asam.png',
      alt: 'Bukit Asam',
      category: 'mining',
    },
    {
      src: '/images/clients/cnooc.png',
      alt: 'Cnooc',
      category: 'mining',
    },
    {
      src: '/images/clients/bogasari.png',
      alt: 'Bogasari',
      category: 'manufacturing',
    },
    {
      src: '/images/clients/ahm.png',
      alt: 'Astra Honda Motor',
      category: 'manufacturing',
    },
    {
      src: '/images/clients/nhm.png',
      alt: 'Nusa Halmahera Mineral',
      category: 'mining',
    },
    {
      src: '/images/clients/antam.png',
      alt: 'Antam',
      category: 'mining',
    },
    {
      src: '/images/clients/ytlpower.png',
      alt: 'YTL Power',
      category: 'energy',
    },
    {
      src: '/images/clients/mitsuba.png',
      alt: 'Mitsuba Indonesia',
      category: 'manufacturing',
    },
    {
      src: '/images/clients/lbe.png',
      alt: 'Lestari Banten Energi',
      category: 'energy',
    },
  ];

  const stats = [
    { number: '150+', label: t('about.clients.stats.totalClients') },
    { number: '15+', label: t('about.clients.stats.yearsExperience') },
    { number: '3', label: t('about.clients.stats.industries') },
  ];

  return (
    <div className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-12">
          <div className="flex items-center justify-center space-x-2">
            <Users className="w-8 h-8 text-primary" />
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              {t('about.clients.title')}
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('about.clients.subtitle')}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {stats.map((stat, index) => (
              <div key={index} className="p-6 bg-white shadow-md">
                <div className="text-3xl font-bold text-primary">
                  {stat.number}
                </div>
                <div className="text-gray-600 mt-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <Tabs defaultValue="all" className="w-full mb-12">
          <TabsList className="grid w-full grid-cols-4 gap-4 mb-6">
            {Object.entries(categories).map(([key, label]) => (
              <TabsTrigger
                key={key}
                value={key}
                className="px-6 py-2 text-sm font-medium transition-all hover:bg-gray-100"
              >
                {label}
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value="all">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
              {logos.map((logo, index) => (
                <div key={index}>
                  <Card className="h-32 flex items-center justify-center p-6 bg-white transition-all duration-300">
                    <div className="relative w-full h-full">
                      <Image
                        src={logo.src}
                        alt={logo.alt}
                        fill
                        className="object-contain"
                        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                      />
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </TabsContent>

          {Object.entries(categories).map(([key, label]) => (
            <TabsContent key={key} value={key}>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                {logos
                  .filter((logo) => logo.category === key)
                  .map((logo, index) => (
                    <div key={index}>
                      <Card className="h-32 flex items-center justify-center p-6 bg-white transition-all duration-300">
                        <div className="relative w-full h-full">
                          <Image
                            src={logo.src}
                            alt={logo.alt}
                            fill
                            className="object-contain"
                            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                          />
                        </div>
                      </Card>
                    </div>
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
};

export default ClientSection;
