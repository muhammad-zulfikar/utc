"use client";

import Link from 'next/link';
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <div className="flex items-center space-x-4">
              <img src="/logo.png" alt="Logo" className="h-12 w-auto object-contain" />
              <Link href="/" className="text-2xl font-bold tracking-wide hover:text-gray-300">
                {t('footer.companyName')}
              </Link>
            </div>
            <p className="text-gray-400 text-base leading-relaxed">
              {t('footer.description')}
            </p>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-8">
          <p className="text-base text-gray-500 xl:text-center">
            {t('footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
}