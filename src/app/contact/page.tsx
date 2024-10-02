"use client"

import { motion, useScroll, useTransform } from 'framer-motion'
import { useState, useRef } from 'react'
import { PhoneIcon, EnvelopeIcon, MapPinIcon, ClockIcon } from '@heroicons/react/24/outline'
import myImage from '../../images/contact.jpeg'

export default function Contact() {
  const [formStatus, setFormStatus] = useState({ message: '', isError: false })
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  const contactInfo = [
    { icon: PhoneIcon, title: "Phone", content: "07704427990" },
    { icon: EnvelopeIcon, title: "Email", content: "support@reg44visitor.co.uk" },
    { icon: MapPinIcon, title: "Address", content: "Oak Lodge Business Centre, 129 School Lane, Little Melton, Norwich, NR9 3LB" },
    { icon: ClockIcon, title: "Business Hours", content: "Monday - Friday: 9:00 AM - 5:00 PM" },
  ]

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Simulating form submission
    setFormStatus({ message: 'Sending...', isError: false })
    await new Promise(resolve => setTimeout(resolve, 2000))
    setFormStatus({ message: 'Message sent successfully!', isError: false })
  }

  return (
    <div ref={containerRef} className="min-h-screen bg-gradient-to-br from-orange-50 to-blue-50 overflow-hidden">
      <motion.div
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: `url(${myImage.src})`,
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
              Get in Touch
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-2xl mb-12 text-orange-700"
            >
              We're here to answer your questions and discuss how we can help elevate your care standards
            </motion.p>
          </div>
        </section>

        <section className="py-20 bg-white bg-opacity-80 backdrop-filter backdrop-blur-lg">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-gradient-to-br from-orange-100 to-blue-100 p-8 rounded-2xl shadow-xl"
              >
                <h2 className="text-3xl font-bold mb-6 text-blue-900">Contact Information</h2>
                <div className="space-y-6">
                  {contactInfo.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      className="flex items-center"
                    >
                      <item.icon className="h-6 w-6 text-blue-500 mr-4" />
                      <div>
                        <h3 className="text-lg font-semibold text-blue-900">{item.title}</h3>
                        <p className="text-orange-700">{item.content}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-gradient-to-br from-orange-100 to-blue-100 p-8 rounded-2xl shadow-xl"
              >
                <h2 className="text-3xl font-bold mb-6 text-blue-900">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-blue-900 mb-1">Name</label>
                    <input type="text" id="name" name="name" className="w-full px-3 py-2 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500" required />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-blue-900 mb-1">Email</label>
                    <input type="email" id="email" name="email" className="w-full px-3 py-2 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500" required />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-blue-900 mb-1">Message</label>
                    <textarea id="message" name="message" rows={4} className="w-full px-3 py-2 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500" required></textarea>
                  </div>
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-orange-400 to-blue-400 text-white font-bold py-2 px-4 rounded-md hover:from-blue-400 hover:to-orange-400 transition duration-300"
                  >
                    Send Message
                  </motion.button>
                </form>
                {formStatus.message && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className={`mt-4 text-center ${formStatus.isError ? 'text-red-600' : 'text-green-600'}`}
                  >
                    {formStatus.message}
                  </motion.p>
                )}
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-r from-orange-400 to-blue-400">
          <div className="container mx-auto px-4 text-center">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-bold mb-8 text-white"
            >
              Visit Us
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg p-4 rounded-xl"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2422.140844005892!2d1.1815015!3d52.6228135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d9e3f5b8a8b88f%3A0x4c3c0c3c3c3c3c3c!2sOak%20Lodge%20Business%20Centre%2C%20129%20School%20Lane%2C%20Little%20Melton%2C%20Norwich%2C%20NR9%203LB!5e0!3m2!1sen!2suk!4v1625581234567!5m2!1sen!2suk"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
              ></iframe>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  )
}