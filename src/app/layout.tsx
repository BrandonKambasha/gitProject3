'use client'

import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import myImage from '../images/reg44.png'
import Link from 'next/link'
import Image from 'next/image';
import { PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/solid'
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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

const navItems = ['Home', 'About', 'Services', 'Team', 'Contact'];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gradient-to-br from-gray-100 to-white text-gray-800`}
      >
        <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-white bg-opacity-70 backdrop-filter backdrop-blur-lg shadow-lg' 
            : 'bg-white bg-opacity-90 border-b border-orange-300'
        }`}>
          <div className="container mx-auto px-4 py-4">
            <div className="flex justify-between items-center">
              <Link href="/" className="transform hover:scale-105 transition-transform duration-300 flex items-center space-x-4">
                <Image src={myImage} alt="Reg44 Consultancy Logo" width={80} height={40} className="rounded-lg border border-orange-300 hover:border-blue-400 transition-colors duration-300" />
                <div className="flex flex-col">
                  <h1 className="text-lg sm:text-xl font-bold text-gray-800">REG 44 CONSULTANCY</h1>
                  <p className="text-xs sm:text-sm text-gray-600  sm:block">Children & Young People at the Centre</p>
                </div>
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

              <div className="md:hidden">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-700"
                >
                  <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                    {isOpen ? (
                      <path fillRule="evenodd" clipRule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z" />
                    ) : (
                      <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
                    )}
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="md:hidden bg-white border-t border-gray-200"
              >
                <nav className="px-4 py-2">
                  <ul className="space-y-2">
                    {navItems.map((item) => (
                      <motion.li
                        key={item}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Link
                          href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                          className="block py-2 px-4 text-gray-700 hover:bg-gray-100 hover:text-orange-500 rounded transition duration-300"
                          onClick={() => setIsOpen(false)}
                        >
                          {item}
                        </Link>
                      </motion.li>
                    ))}
                  </ul>
                </nav>
              </motion.div>
            )}
          </AnimatePresence>
        </header>

        <main className="pt-20 relative">
          {children}
        </main>

        <footer className="bg-gray-800 bg-opacity-90 text-white py-12 border-t border-orange-300 relative z-10">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-8 md:mb-0 text-center md:text-left">
                <Image src={myImage} alt="Reg44 Consultancy Logo" width={120} height={60} className="mb-4 mx-auto md:mx-0 rounded-lg border border-orange-300 hover:border-blue-400 transition-colors duration-300" />
                <p className="text-sm animate-pulse">&copy; 2024 Reg44 Consultancy. Shaping the future of support, today.</p>
                <p className="text-sm animate-pulse">Company Number: 15296035</p>
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