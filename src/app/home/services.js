"use client";

import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/LanguageContext";
import { Building2, Users, ArrowRight } from "lucide-react";
import Link from "next/link";

const ServicesSection = () => {
  const { t } = useLanguage();

  const services = [
    {
      title: t('services.publicTraining.title'),
      description: t('services.publicTraining.description'),
      features: [
        t('services.publicTraining.features.0'),
        t('services.publicTraining.features.1'),
        t('services.publicTraining.features.2'),
        t('services.publicTraining.features.3')
      ],
      icon: <Users className="w-10 h-10 text-[#FFC000]" />,
      link: "/training/public",
      imageSrc: "/images/1.jpeg"
    },
    {
      title: t('services.inHouseTraining.title'),
      description: t('services.inHouseTraining.description'),
      features: [
        t('services.inHouseTraining.features.0'),
        t('services.inHouseTraining.features.1'),
        t('services.inHouseTraining.features.2'),
        t('services.inHouseTraining.features.3')
      ],
      icon: <Building2 className="w-10 h-10 text-[#FFC000]" />,
      link: "/training/in-house",
      imageSrc: "/images/2.jpeg"
    }
  ];

  return (
    <div className="relative py-16 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            {t('services.title').split('Training')[0]}
            <span className="text-primary">Training</span>
            {t('services.title').split('Training')[1]}
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            {t('services.subtitle')}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-48 overflow-hidden">
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${service.imageSrc})`,
                  }}
                />
                <div className="absolute inset-0 bg-black/30" />
              </div>
              
              <CardHeader>
                <CardTitle className="text-2xl font-bold">{service.title}</CardTitle>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardHeader>
              
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <span className="mr-2 text-[#FFC000]">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              
              <CardFooter>
                <Link href={service.link} className="w-full">
                  <Button 
                    variant="default" 
                    className="w-full group"
                  >
                    {t('services.learnMore')}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;