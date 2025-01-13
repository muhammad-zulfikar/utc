'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import FormModal from '@/app/components/FormModal';
import { useLanguage } from '@/context/LanguageContext';

export default function CtaSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <div className="py-16 mx-4">
      <div className="relative max-w-7xl mx-auto text-center p-8 sm:p-12 rounded-xl shadow-lg bg-primary">
        <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl space-y-2">
          <span className="block tracking-tight">{t('home.cta.title1')}</span>
          <span className="block text-white tracking-tight">
            {t('home.cta.title2')}
          </span>
        </h2>
        <p className="mt-6 text-lg leading-7 text-gray-700 text-opacity-80">
          {t('home.cta.description')}
        </p>
        <div className="flex flex-col items-center sm:flex-row sm:justify-center sm:space-x-4 mt-8 gap-4">
          <Button
            size="lg"
            variant="outline"
            className="px-10 py-3 shadow-md transition transform hover:scale-105"
            onClick={() => setIsModalOpen(true)}
          >
            {t('home.cta.scheduleButton')}
          </Button>
          <Button
            size="lg"
            className="bg-black hover:bg-black text-white px-10 py-3 shadow-md transition transform hover:scale-105"
            onClick={() => setIsModalOpen(true)}
          >
            {t('home.cta.downloadBrochureButton')}
          </Button>
        </div>
        <FormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </div>
    </div>
  );
}
