'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { useLanguage } from '@/context/LanguageContext';

export default function FaqSection() {
  const { t } = useLanguage();

  return (
    <div className="relative py-16 pb-28 overflow-hidden">
      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            {t('home.faq.title')}
          </h2>
        </div>

        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>
              {t('home.faq.questions.location.question')}
            </AccordionTrigger>
            <AccordionContent>
              {t('home.faq.questions.location.answer')}
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              {t('home.faq.questions.experience.question')}
            </AccordionTrigger>
            <AccordionContent>
              {t('home.faq.questions.experience.answer')}
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>
              {t('home.faq.questions.quality.question')}
            </AccordionTrigger>
            <AccordionContent>
              {t('home.faq.questions.quality.answer')}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
