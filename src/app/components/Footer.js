"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from "@/context/LanguageContext";
import { MapPin, Phone, Clock } from 'lucide-react';

export default function Footer() {
  const { t } = useLanguage();

  const quickLinks = [
    { name: t('footer.about'), href: '/about' },
    { name: t('footer.services'), href: '/services' },
    { name: t('footer.careers'), href: '/careers' },
    { name: t('footer.contact'), href: '/contact' },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 to-black text-white overflow-hidden">
      {/* Abstract Pattern Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-8">
            <div className="flex items-center space-x-4 justify-center md:justify-start">
              <img src="/images/logo.png" alt="Logo" className="h-12 w-auto object-contain" />
              <Link href="/" className="text-2xl font-bold tracking-wide hover:text-gray-300">
                {t('footer.companyName')}
              </Link>
            </div>
            <p className="text-gray-400 text-base leading-relaxed text-center md:text-left">
              {t('footer.description')}
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-center md:justify-start space-x-3">
                <MapPin className="w-5 h-5 text-gray-400" />
                <p className="text-gray-400">
                  Gedung ASCOM, Lt.2<br />
                  Jl. Matraman Raya No.67<br />
                  Jakarta Timur 13140
                </p>
              </div>
              <div className="flex items-center justify-center md:justify-start space-x-3">
                <Phone className="w-5 h-5 text-gray-400" />
                <p className="text-gray-400">+62 21 1234 5678</p>
              </div>
              <div className="flex items-center justify-center md:justify-start space-x-3">
                <Clock className="w-5 h-5 text-gray-400" />
                <p className="text-gray-400">Mon - Fri: 9:00 - 18:00</p>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-6">Newsletter</h3>
            <p className="text-gray-400 mb-4">Stay updated with our latest news and updates.</p>
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-white transition-colors"
              />
              <button
                type="submit"
                className="w-full px-6 py-2 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400">
              {t('footer.copyright')}
            </p>
            <div className="flex space-x-6">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" 
                className="transform hover:scale-110 transition-transform">
                <Image 
                  src="/images/socials/instagram.png" 
                  alt="Instagram" 
                  width={28} 
                  height={28} 
                  className="filter grayscale hover:filter-none transition-all"
                />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                className="transform hover:scale-110 transition-transform">
                <Image 
                  src="/images/socials/linkedin.png" 
                  alt="LinkedIn" 
                  width={28} 
                  height={28} 
                  className="filter grayscale hover:filter-none transition-all"
                />
              </a>
              <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer"
                className="transform hover:scale-110 transition-transform">
                <Image 
                  src="/images/socials/whatsapp.png" 
                  alt="WhatsApp" 
                  width={26} 
                  height={26} 
                  className="filter grayscale hover:filter-none transition-all"
                />
              </a>
              <a href="mailto:info@example.com"
                className="transform hover:scale-110 transition-transform">
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