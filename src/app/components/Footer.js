"use client";

import Link from 'next/link';
import Image from 'next/image';
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
            <div className="text-gray-400">
              <p>
                Gedung ASCOM, Lt.2
                Jl. Matraman Raya No.67
                Palmerah, Matraman
                Jakarta Timur 13140
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-base text-gray-400 mb-4 md:mb-0">
              {t('footer.copyright')}
            </p>
            <div className="flex space-x-6">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:opacity-75 transition-opacity">
                <span className="sr-only">Instagram</span>
                <Image 
                  src="/images/socials/instagram.png" 
                  alt="Instagram" 
                  width={28} 
                  height={28} 
                  className="filter grayscale hover:filter-none transition-all"
                />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:opacity-75 transition-opacity">
                <span className="sr-only">LinkedIn</span>
                <Image 
                  src="/images/socials/linkedin.png" 
                  alt="LinkedIn" 
                  width={28} 
                  height={28} 
                  className="filter grayscale hover:filter-none transition-all"
                />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:opacity-75 transition-opacity">
                <span className="sr-only">WhatsApp</span>
                <Image 
                  src="/images/socials/whatsapp.png" 
                  alt="LinkedIn" 
                  width={26} 
                  height={26} 
                  className="filter grayscale hover:filter-none transition-all"
                />
              </a>
              <a href="mailto:info@example.com" className="text-gray-400 hover:opacity-75 transition-opacity">
                <span className="sr-only">Email</span>
                <Image 
                  src="/images/socials/gmail.png" 
                  alt="Email" 
                  width={26} 
                  height={26} 
                  className="filter grayscale hover:filter-none transition-all"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

