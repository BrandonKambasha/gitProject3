"use client"

import { motion, useScroll, useTransform } from 'framer-motion'
import { useState, useRef } from 'react'
import Link from 'next/link'
import { ChevronRightIcon, StarIcon, HomeIcon, ClipboardDocumentCheckIcon } from '@heroicons/react/24/outline'
import backgroundImage from '../images/homeImage.jpg'

const MotionLink = motion(Link)

export default function Home() {
  const [hoveredService, setHoveredService] = useState<number | null>(null)
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])

  const services = [
    { icon: StarIcon, title: "Reg 44 Visits", description: "Expert Regulation 44 visits to residential children's homes" },
    { icon: HomeIcon, title: "House Inspections", description: "Thorough inspections of Semi Independent Accommodation" },
    { icon: ClipboardDocumentCheckIcon, title: "Consultancy Services", description: "Professional guidance for new and existing support provisions" },
  ]

  return (
    <div ref={containerRef} className="relative min-h-screen">
      <motion.div
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: `url(${backgroundImage.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          y: backgroundY,
          filter: 'brightness(0.7)'
        }}
      />
      <div className="relative z-10">
        <section className="h-screen flex items-center justify-center">
          <div className="container mx-auto px-4 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold mb-6 text-white"
            >
              REG 44 CONSULTANCY
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl mb-12 text-orange-200"
            >
              Specialist consultancy for Semi Independent Accommodation and Residential Children's Home Providers
            </motion.p>
            <MotionLink
              href="/services"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-500 text-white hover:bg-orange-500 font-bold py-3 px-8 rounded-full transition duration-300 inline-flex items-center"
            >
              Explore Our Services
              <ChevronRightIcon className="h-5 w-5 ml-2" />
            </MotionLink>
          </div>
        </section>

        <section className="py-20 bg-white bg-opacity-80 backdrop-filter backdrop-blur-lg">
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-bold text-center mb-16 text-blue-900"
            >
              Our Services
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                  onHoverStart={() => setHoveredService(index)}
                  onHoverEnd={() => setHoveredService(null)}
                  className="bg-gradient-to-br from-orange-100 to-blue-100 p-8 rounded-2xl shadow-xl text-center relative overflow-hidden"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: hoveredService === index ? 20 : 0 }}
                    transition={{ duration: 0.5 }}
                    style={{ originX: 0.5, originY: 0.5 }}
                    className="absolute inset-0 bg-gradient-to-r from-orange-200 to-blue-200 rounded-full opacity-50 z-0"
                  />
                  <service.icon className="h-16 w-16 text-blue-500 mx-auto relative z-10" />
                  <h3 className="text-2xl font-semibold mb-4 text-blue-900 relative z-10">{service.title}</h3>
                  <p className="text-orange-700 relative z-10">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-r from-orange-400 to-blue-400 text-white">
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-bold mb-12 text-center"
            >
              Why Choose REG 44 CONSULTANCY
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                { title: "Experienced Team", description: "Over 20 years of experience in Local Authorities and support provision." },
                { title: "Comprehensive Services", description: "From Reg 44 visits to management coaching and quality assurance." },
                { title: "Tailored Support", description: "Customized solutions for diverse support settings across the UK." },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg p-6 rounded-xl"
                >
                  <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
                  <p>{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-bold mb-8 text-blue-900"
            >
              Ready to Elevate Your Support Services?
            </motion.h2>
            <MotionLink
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-orange-400 to-blue-400 text-white font-bold py-3 px-8 rounded-full transition duration-300 inline-flex items-center"
            >
              Get Started Now
              <ChevronRightIcon className="h-5 w-5 ml-2" />
            </MotionLink>
          </div>
        </section>
      </div>
    </div>
  )
}