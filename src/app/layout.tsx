import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import myImage from '../images/reg44.png'
import Link from 'next/link'
import Image from 'next/image';
import { PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/solid'
import MobileMenu from './components/MobileMenu';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "REG 44 CONSULTANCY - Future of Care",
  description: "Pioneering the future of care services",
};

const navItems = ['Home', 'About', 'Services', 'Contact'];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gradient-to-br from-gray-100 to-white text-gray-800`}
        >
          <header id="main-header" className="bg-white bg-opacity-70 backdrop-filter backdrop-blur-lg shadow-lg sticky top-0 z-50 border-b border-orange-300">
            <div className="container mx-auto px-4 py-4">
              <div className="flex justify-between items-center">
                <Link href="/" className="transform hover:scale-105 transition-transform duration-300">
                  <Image src={myImage} alt="Reg44 Consultancy Logo" width={120} height={60} className="rounded-lg border border-orange-300 hover:border-blue-400 transition-colors duration-300" />
                </Link>
                <nav className="hidden md:block">
                  <ul className="flex space-x-8 text-gray-700">
                    {navItems.map((item) => (
                      <li key={item} className="relative overflow-hidden group">
                        <Link href={item === 'Home' ? '/' : `/${item.toLowerCase()}`} className="hover:text-orange-500 transition duration-300">
                          {item}
                          <span className="absolute bottom-0 left-0 w-full h-0.5 bg-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
                <MobileMenu navItems={navItems} />
              </div>
            </div>
          </header>
        <main className="min-h-screen">
          {children}
        </main>
        <footer className="bg-gray-800 text-white py-12 border-t border-orange-300">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-8 md:mb-0 text-center md:text-left">
                <Image src={myImage} alt="Reg44 Consultancy Logo" width={120} height={60} className="mb-4 mx-auto md:mx-0 rounded-lg border border-orange-300 hover:border-blue-400 transition-colors duration-300" />
                <p className="text-sm animate-pulse">&copy; 2024 Reg44 Consultancy. Shaping the future of care, today.</p>
              </div>
              <div className="flex flex-col space-y-4">
                <a href="tel:07704427990" className="flex items-center justify-center md:justify-start hover:text-orange-300 transition duration-300 group">
                  <PhoneIcon className="h-5 w-5 mr-2 group-hover:animate-bounce" />
                  <span className="relative">
                    <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-orange-300 transition-all duration-300 group-hover:w-full"></span>
                    07704427990
                  </span>
                </a>
                <a href="mailto:support@reg44visitor.co.uk" className="flex items-center justify-center md:justify-start hover:text-orange-300 transition duration-300 group">
                  <EnvelopeIcon className="h-5 w-5 mr-2 group-hover:animate-bounce" />
                  <span className="relative">
                    <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-orange-300 transition-all duration-300 group-hover:w-full"></span>
                    support@reg44visitor.co.uk
                  </span>
                </a>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}