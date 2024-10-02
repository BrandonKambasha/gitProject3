"use client"

import { motion, useScroll, useTransform } from 'framer-motion'
import { useState, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { StarIcon, HomeIcon, ClipboardDocumentCheckIcon, ChartBarIcon, UserGroupIcon, AcademicCapIcon, ChevronRightIcon } from '@heroicons/react/24/outline'
import myImage from '../../images/services.jpeg'
import myImage2 from '../../images/img3.jpg'

const MotionLink = motion(Link)

const serviceCategories = [
  {
    title: "Core Services",
    services: [
      { icon: StarIcon, name: "Reg 44 Visits", description: "Expert Regulation 44 visits to residential children's homes" },
      { icon: HomeIcon, name: "House Inspections", description: "Thorough inspections of Semi Independent Accommodation" },
      { icon: ClipboardDocumentCheckIcon, name: "Consultancy Services", description: "Professional guidance for new and existing care provisions" },
    ]
  },
  {
    title: "Quality & Management",
    services: [
      { icon: ChartBarIcon, name: "Quality Assurance", description: "Developing and implementing Quality Assurance Frameworks" },
      { icon: UserGroupIcon, name: "Management Coaching", description: "Coaching and mentoring for care management teams" },
      { icon: AcademicCapIcon, name: "Training Programs", description: "Bespoke training and development solutions" },
    ]
  }
]

const additionalServices = [
  "Undertaking Location Risk Assessments",
  "Development of Practice Templates",
  "Ofsted Preparation Visits",
  "Support with improvement plans",
  "Learning and Development for Local Authorities",
  "Specialized support for diverse communities"
]

export default function Services() {
  const [hoveredService, setHoveredService] = useState<string | null>(null)
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  return (
    <div ref={containerRef} className="min-h-screen bg-gradient-to-br from-orange-50 to-blue-50 overflow-hidden">
      <motion.div
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: `url(${myImage2.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          y: backgroundY
        }}
      />
      <main className="relative z-10">
        <section className="h-screen flex items-center justify-center">
          <div className="container mx-auto px-4 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-7xl font-bold mb-6 text-blue-900"
            >
              Our Services
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-2xl mb-12 text-orange-700"
            >
              Comprehensive solutions to elevate care standards in Semi Independent Accommodation and Residential Children's Homes
            </motion.p>
          </div>
        </section>

        {serviceCategories.map((category, categoryIndex) => (
          <section key={categoryIndex} className="py-20 bg-white bg-opacity-80 backdrop-filter backdrop-blur-lg">
            <div className="container mx-auto px-4">
              <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="text-4xl font-bold mb-12 text-center text-blue-900"
              >
                {category.title}
              </motion.h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {category.services.map((service, serviceIndex) => (
                  <motion.div
                    key={serviceIndex}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: serviceIndex * 0.1, duration: 0.5 }}
                    whileHover={{ scale: 1.05 }}
                    onHoverStart={() => setHoveredService(`${categoryIndex}-${serviceIndex}`)}
                    onHoverEnd={() => setHoveredService(null)}
                    className="bg-gradient-to-br from-orange-100 to-blue-100 p-8 rounded-2xl shadow-xl text-center relative overflow-hidden"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: hoveredService === `${categoryIndex}-${serviceIndex}` ? 20 : 0 }}
                      transition={{ duration: 0.5 }}
                      style={{ originX: 0.5, originY: 0.5 }}
                      className="absolute inset-0 bg-gradient-to-r from-orange-200 to-blue-200 rounded-full opacity-50 z-0"
                    />
                    <service.icon className="h-16 w-16 text-blue-500 mx-auto relative z-10" />
                    <h3 className="text-2xl font-semibold mb-4 text-blue-900 relative z-10">{service.name}</h3>
                    <p className="text-orange-700 relative z-10">{service.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        ))}

        <section className="py-20 bg-gradient-to-r from-orange-400 to-blue-400 text-white">
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-bold mb-12 text-center"
            >
              Additional Services
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {additionalServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg p-6 rounded-xl flex items-center"
                >
                  <ChevronRightIcon className="h-6 w-6 mr-4 text-orange-200" />
                  <p>{service}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-white bg-opacity-80 backdrop-filter backdrop-blur-lg">
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-bold mb-12 text-center text-blue-900"
            >
              Our Approach
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-gradient-to-br from-orange-100 to-blue-100 p-6 rounded-lg shadow-lg"
              >
                <h3 className="text-2xl font-semibold mb-4 text-blue-600">Tailored Solutions</h3>
                <p className="text-orange-700 mb-4">We understand that each care provider has unique challenges and needs. Our services are customized to address your specific requirements, ensuring maximum impact and relevance.</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-gradient-to-br from-orange-100 to-blue-100 p-6 rounded-lg shadow-lg"
              >
                <h3 className="text-2xl font-semibold mb-4 text-blue-600">Continuous Improvement</h3>
                <p className="text-orange-700 mb-4">We don't just provide one-off services. Our approach focuses on continuous improvement, working alongside you to implement changes and monitor progress over time.</p>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-r from-orange-400 to-blue-400 relative">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src={myImage.src}
              alt="CTA Background"
              layout="fill"
              objectFit="cover"
            />
          </motion.div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-bold mb-8 text-white"
            >
              Ready to Enhance Your Care Provision?
            </motion.h2>
            <MotionLink
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-600 hover:bg-orange-100 font-bold py-3 px-8 rounded-full transition duration-300 inline-flex items-center"
            >
              Get Started Today
              <ChevronRightIcon className="h-5 w-5 ml-2" />
            </MotionLink>
          </div>
        </section>
      </main>
    </div>
  )
}