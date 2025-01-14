'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Building2, Users2, Target, Settings } from 'lucide-react';
import CtaSection from '@/app/home/cta';
import { useLanguage } from '@/context/LanguageContext';

const featureIcons = {
  customContent: <Target className="w-6 h-6 text-[#FFC000]" />,
  teamDevelopment: <Users2 className="w-6 h-6 text-[#FFC000]" />,
  onSiteDelivery: <Building2 className="w-6 h-6 text-[#FFC000]" />,
  flexibleFormat: <Settings className="w-6 h-6 text-[#FFC000]" />,
};

function InHouseTraining() {
  const { t } = useLanguage();

  return (
    <div className="relative overflow-hidden">
      {/* Infinite Grid Background */}
      <div className="absolute inset-0 z-[-1] bg-transparent">
        <div className="absolute inset-0 bg-[length:50px_50px] bg-[linear-gradient(to_right,rgba(0,0,0,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.1)_1px,transparent_1px)] animate-scroll-grid"></div>
      </div>

      {/* Hero Section */}
      <div className="relative h-80 bg-primary">
        <div className="absolute inset-0 bg-cover bg-center opacity-30" />
        <div className="relative h-full flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-4xl font-bold mb-4">
              {t('services.inHouseTraining.title')}
            </h1>
            <p className="text-xl max-w-2xl mx-auto">
              {t('services.inHouseTraining.description')}
            </p>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          {t('services.inHouseTraining.whyChooseUs.title')}
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(
            t('services.inHouseTraining.whyChooseUs.features')
          ).map(([key, feature]) => (
            <Card key={key} className="border-2 border-gray-100">
              <CardHeader className="space-y-4">
                <div>{featureIcons[key]}</div>
                <CardTitle>{feature.title}</CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>

      <CtaSection />

      {/* FAQ Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">
          {t('services.inHouseTraining.faq.title')}
        </h2>
        <Accordion type="single" collapsible className="max-w-3xl mx-auto">
          {t('services.inHouseTraining.faq.items').map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}

export default InHouseTraining;
