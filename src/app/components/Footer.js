'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { MapPin, Phone, Clock } from 'lucide-react';

export default function Footer() {
  const { t } = useLanguage();

  const quickLinks = {
    profile: {
      title: t('nav.profile.title'),
      links: [
        { name: t('nav.profile.aboutUs'), href: '/about' },
        { name: t('nav.profile.partnersAndClients'), href: '/partners-and-clients' },
        { name: t('nav.profile.gallery'), href: '/gallery' },
      ]
    },
    services: {
      title: t('nav.services.title'),
      links: [
        { name: t('nav.services.publicTraining'), href: '/training/public' },
        { name: t('nav.services.inHouseTraining'), href: '/training/in-house' },
      ]
    },
    other: {
      title: t('footer.quickLinks'),
      links: [
        { name: t('nav.home'), href: '/' },
        { name: t('nav.contact'), href: '/contact' },
      ]
    }
  };

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 to-black text-white overflow-hidden">
      {/* Abstract Pattern Background */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-8">
            <div className="flex items-center space-x-4 justify-center md:justify-start">
              <Image
                src="/images/logo.png"
                alt="Logo"
                width={56}
                height={56}
                className="object-contain"
              />
              <Link
                href="/"
                className="text-2xl font-bold tracking-wide hover:text-gray-300"
              >
                {t('footer.companyName')}
              </Link>
            </div>
            <p className="text-gray-400 text-base leading-relaxed text-center md:text-left">
              {t('footer.description')}
            </p>
          </div>

          {/* Quick Links - Split into 2 columns */}
          {Object.values(quickLinks).map((section) => (
            <div key={section.title} className="text-center md:text-left">
              <h3 className="text-lg font-semibold mb-6">{section.title}</h3>
              <ul className="space-y-4">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-200 ease-in-out"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row md:space-x-6 mt-12 space-y-4 md:space-y-0 items-center md:items-start justify-center text-center md:text-left">
          <div className="flex items-center space-x-3">
            <MapPin className="w-5 h-5 text-gray-400 flex-shrink-0" />
            <p className="text-gray-400">{t('footer.address')}</p>
          </div>
          <div className="flex items-center space-x-3">
            <Phone className="w-5 h-5 text-gray-400 flex-shrink-0" />
            <p className="text-gray-400">+62 821 2283 6526 (Gunawan)</p>
          </div>
          <div className="flex items-center space-x-3">
            <Phone className="w-5 h-5 text-gray-400 flex-shrink-0" />
            <p className="text-gray-400">+62 813 1851 7205 (Mimie)</p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0 mt-8">
            <p className="hidden md:flex text-gray-400 text-center">{t('footer.copyright')}</p>
            <div className="flex space-x-6">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transform hover:scale-110 transition-transform"
              >
                <Image
                  src="/images/socials/instagram.png"
                  alt="Instagram"
                  width={28}
                  height={28}
                  className="filter grayscale hover:filter-none transition-all"
                />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="transform hover:scale-110 transition-transform"
              >
                <Image
                  src="/images/socials/linkedin.png"
                  alt="LinkedIn"
                  width={28}
                  height={28}
                  className="filter grayscale hover:filter-none transition-all"
                />
              </a>
              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="transform hover:scale-110 transition-transform"
              >
                <Image
                  src="/images/socials/whatsapp.png"
                  alt="WhatsApp"
                  width={26}
                  height={26}
                  className="filter grayscale hover:filter-none transition-all"
                />
              </a>
              <a
                href="mailto:info@example.com"
                className="transform hover:scale-110 transition-transform"
              >
                <Image
                  src="/images/socials/gmail.png"
                  alt="Email"
                  width={26}
                  height={26}
                  className="filter grayscale hover:filter-none transition-all"
                />
              </a>
            </div>
            <p className="md:hidden text-gray-400 text-center">{t('footer.copyright')}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}