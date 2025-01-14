import './globals.css';
import Favicon from './favicon.ico';
import { Inter } from 'next/font/google';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import { LanguageProvider } from '@/context/LanguageContext';
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'United Training Consulting',
  description:
    'Expert technology consulting for banks, tech companies, and enterprise industries',
  icons: [{ rel: 'icon', url: Favicon.src }],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" type="image/x-icon" />
      </head>
      <body className={inter.className}>
        <LanguageProvider>
          <Navigation />
          <main>{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
