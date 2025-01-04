"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import FormModal from "@/app/components/FormModal";
import { useLanguage } from "@/context/LanguageContext";

export default function CtaSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <div className="mt-12 bg-[#FFC000]">
      <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
          <span className="block">{t('cta.title1')}</span>
          <span className="block">{t('cta.title2')}</span>
        </h2>
        <p className="mt-4 text-lg leading-6 text-white text-opacity-80">
          {t('cta.description')}
        </p>
        <Button size="lg" variant="secondary" className="mt-8" onClick={() => setIsModalOpen(true)}>
          {t('cta.contactButton')}
        </Button>
        <FormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </div>
    </div>
  );
}