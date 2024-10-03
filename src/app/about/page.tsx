"use client"

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { UserGroupIcon, ShieldCheckIcon, AcademicCapIcon, ChevronRightIcon } from '@heroicons/react/24/outline'
import backgroundImage from '../../images/office.jpeg'
import teamImage from '../../images/career2.jpg'

const MotionLink = motion(Link)

export default function About() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])

  const coreValues = [
    { icon: UserGroupIcon, title: "Expertise", description: "We bring over 20 years of experience in Local Authorities to every project." },
    { icon: ShieldCheckIcon, title: "Quality", description: "We uphold the highest standards in our services and recommendations." },
    { icon: AcademicCapIcon, title: "Innovation", description: "We continuously seek new ways to improve support standards and practices." },
  ]

  return (
    <div ref={containerRef} className="relative min-h-screen bg-gradient-to-br from-orange-50 to-blue-50 overflow-hidden">
      <motion.div
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: `url(${backgroundImage.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          y: backgroundY,
        }}
      />
      <div className="absolute inset-0 bg-black opacity-30 z-10"></div>
      <main className="relative z-20">
        <section className="min-h-screen flex flex-col justify-center items-center text-center text-white p-4">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            About REG 44 CONSULTANCY
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl mb-12"
          >
            Children & Young People at the Centre
          </motion.p>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-4xl font-bold mb-6 text-blue-900">About Us</h2>
                
                <p className="text-orange-700 mb-4">
                At REG 44 CONSULTANCY, we are committed to leveraging our extensive experience and diverse expertise to support and elevate support standards across the UK. Our team is dedicated to providing tailored, innovative solutions that make a real difference in the lives of children and young people.                 </p>
                <h3 className="text-blue-900 font-bold">Diverse Skill Set</h3>
                <p className="text-orange-700 mb-4">
                From social work to quality assurance, our team's diverse backgrounds ensure we can provide comprehensive support across all aspects of children’s homes and supported accommodation.                 </p>
                <h3 className="text-blue-900 font-bold">Local Authority Experience</h3>
                <p className="text-orange-700 mb-4">Our team brings over 20 years of combined experience working in Local Authorities, providing invaluable insights into the challenges and requirements of children’s homes and supported accommodation.</p>
              
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-gradient-to-br from-orange-100 to-blue-100 p-8 rounded-2xl shadow-xl"
              >
                <Image src={teamImage} alt="REG 44 CONSULTANCY Team" width={600} height={400} className="rounded-lg" />
              </motion.div>
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
              Our Core Values
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {coreValues.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg p-6 rounded-xl"
                >
                  <value.icon className="h-12 w-12 text-orange-200 mb-4" />
                  <h3 className="text-2xl font-semibold mb-4">{value.title}</h3>
                  <p>{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-bold mb-12 text-center text-blue-900"
            >
              Our Team's Expertise
            </motion.h2>
            <div className="space-y-8">
              {[
                { title: "Safeguarding", description: "Our team includes experienced Safeguarding Audit Officers, ensuring the highest standards of child protection in support settings." },
                { title: "Quality Assurance", description: "With Quality Assurance Leads on our team, we help organizations implement robust quality management systems." },
                { title: "Social Work", description: "Our team includes experienced Social Workers who understand the complexities of child support and protection." },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col md:flex-row items-center bg-gradient-to-br from-orange-100 to-blue-100 p-6 rounded-xl shadow-lg"
                >
                  <div className="md:w-1/4 mb-4 md:mb-0">
                    <span className="text-3xl font-bold text-blue-600">{item.title}</span>
                  </div>
                  <div className="md:w-3/4">
                    <p className="text-orange-700">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 relative">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.2 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 z-0"
          >
            <Image
              src=""
              alt="Office background"
              layout="fill"
              objectFit="cover"
            />
          </motion.div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-bold mb-8 text-blue-900"
            >
              Ready to Elevate Your Support Standards?
            </motion.h2>
            <MotionLink
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-orange-400 to-blue-400 text-white hover:from-blue-400 hover:to-orange-400 font-bold py-3 px-8 rounded-full transition duration-300 inline-flex items-center"
            >
              Get in Touch
              <ChevronRightIcon className="h-5 w-5 ml-2" />
            </MotionLink>
          </div>
        </section>
      </main>
    </div>
  )
}