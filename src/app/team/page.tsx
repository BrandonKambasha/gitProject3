"use client"

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { UserIcon } from '@heroicons/react/24/outline'
import backgroundImage from '../../images/career1.jpg'

export default function Team() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])

  const teamMembers = [
    { name: "Social Workers",  },
    { name: "Safeguarding Audit Officers",},
    { name: "Youth Workers", },
    { name: "Quality Assurance Leads",  },
    { name: "Regulations 44 Visitors",  },
    { name: "Performance Improvement Leads", },
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
            Our Team
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl mb-12"
          >
            Meet the experts behind REG 44 CONSULTANCY
          </motion.p>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-bold mb-12 text-center text-blue-900"
            >
              Our Experienced Professionals
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="bg-gradient-to-br from-orange-100 to-blue-100 p-6 rounded-xl shadow-lg text-center"
                >
                  <UserIcon className="h-16 w-16 text-blue-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-semibold mb-2 text-blue-900">{member.name}</h3>
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
              Our Collective Expertise
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg p-6 rounded-xl"
              >
                <h3 className="text-2xl font-semibold mb-4">Local Authority Experience</h3>
                <p>Our team brings over 20 years of combined experience working in Local Authorities, providing invaluable insights into the challenges and requirements of care provision.</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg p-6 rounded-xl"
              >
                <h3 className="text-2xl font-semibold mb-4">Diverse Skill Set</h3>
                <p>From social work to quality assurance, our team's diverse backgrounds ensure we can provide comprehensive support across all aspects of care provision.</p>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 text-center">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-bold mb-8 text-blue-900"
            >
              Our Commitment
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-xl text-orange-700 max-w-3xl mx-auto"
            >
              At REG 44 CONSULTANCY, we are committed to leveraging our extensive experience and diverse expertise to support and elevate care standards across the UK. Our team is dedicated to providing tailored, innovative solutions that make a real difference in the lives of young people in care.
            </motion.p>
          </div>
        </section>
      </main>
    </div>
  )
}