import Image from 'next/image'
import { PhoneIcon, EnvelopeIcon, MapPinIcon, ClockIcon } from '@heroicons/react/24/solid'
import myImage from '../images/reg44.png'
import Link from 'next/link'

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-blue-50">
      

      <main>
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-blue-500 opacity-80"></div>
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=600&width=1200')] bg-cover bg-center mix-blend-overlay"></div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <h1 className="text-5xl font-bold mb-4 text-white drop-shadow-lg">Get in Touch</h1>
            <p className="text-xl max-w-2xl mx-auto mb-8 text-white drop-shadow-md">We're here to answer your questions and discuss how we can help elevate your care standards</p>
          </div>
        </section>

        <section className="container mx-auto px-4 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white bg-opacity-70 backdrop-filter backdrop-blur-lg p-8 rounded-2xl shadow-xl">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-center">
                  <PhoneIcon className="h-6 w-6 text-orange-500 mr-4" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">Phone</h3>
                    <p className="text-gray-600">07704427990</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <EnvelopeIcon className="h-6 w-6 text-orange-500 mr-4" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">Email</h3>
                    <p className="text-gray-600">support@reg44visitor.co.uk</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <MapPinIcon className="h-6 w-6 text-orange-500 mr-4" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">Address</h3>
                    <p className="text-gray-600">Oak Lodge Business Centre, 129 School Lane, Little Melton, Norwich, NR9 3LB</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <ClockIcon className="h-6 w-6 text-orange-500 mr-4" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">Business Hours</h3>
                    <p className="text-gray-600">Monday - Friday: 9:00 AM - 5:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white bg-opacity-70 backdrop-filter backdrop-blur-lg p-8 rounded-2xl shadow-xl">
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Send Us a Message</h2>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input type="text" id="name" name="name" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input type="email" id="email" name="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea id="message" name="message" rows={4} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" required></textarea>
                </div>
                <button type="submit" className="bg-gradient-to-r from-orange-500 to-blue-600 text-white font-bold py-2 px-4 rounded-md hover:from-orange-600 hover:to-blue-700 transition duration-300">Send Message</button>
              </form>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-8 text-white">Visit Us</h2>
            <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg p-4 rounded-xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2422.140844005892!2d1.1815015!3d52.6228135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d9e3f5b8a8b88f%3A0x4c3c0c3c3c3c3c3c!2sOak%20Lodge%20Business%20Centre!5e0!3m2!1sen!2suk!4v1625581234567!5m2!1sen!2suk"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </section>
      </main>

    </div>
  )
}