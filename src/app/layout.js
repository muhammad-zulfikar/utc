import './globals.css'
import { Inter } from 'next/font/google'
import Navigation from './components/Navigation'
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'United Training Consulting | Enterprise Technology Consulting',
  description: 'Expert technology consulting for banks, tech companies, and enterprise industries',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
