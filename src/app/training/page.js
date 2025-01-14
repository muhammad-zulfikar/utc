'use client';

import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/context/LanguageContext';
import { Building2, Users, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const ServicesSection = () => {
  const { t } = useLanguage();

  const services = [
    {
      title: 'Public Training Programs',
      description:
        'Open enrollment courses designed for individuals and small teams. Join a diverse group of professionals in our structured learning environment with industry-leading instructors.',
      features: [
        'Flexible scheduling options',
        'Networking opportunities',
        'Standardized curriculum',
        'Certificate upon completion',
      ],
      icon: <Users className="w-10 h-10 text-[#FFC000]" />,
      link: '/training/public',
      imageSrc: '/pexels2.jpg',
    },
    {
      title: 'In-House Training',
      description:
        'Customized training solutions delivered exclusively to your organization. We adapt our content to address your specific challenges and business objectives.',
      features: [
        'Tailored content delivery',
        'Company-specific cases',
        'On-site or virtual options',
        'Team building focus',
      ],
      icon: <Building2 className="w-10 h-10 text-[#FFC000]" />,
      link: '/training/in-house',
      imageSrc: '/pexels3.jpg',
    },
  ];

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Our Training Services
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Choose the training format that best suits your needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${service.imageSrc})`,
                  }}
                />
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute top-4 left-4">{service.icon}</div>
              </div>

              <CardHeader>
                <CardTitle className="text-2xl font-bold">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
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
                  <Button variant="default" className="w-full group">
                    Learn More
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
