import Image from 'next/image'
import { UserGroupIcon, ShieldCheckIcon, AcademicCapIcon, ChevronRightIcon, PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/solid'
import myImage from '../../images/reg44.png'

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-blue-50">


      <main>
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-blue-500 opacity-80"></div>
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=600&width=1200')] bg-cover bg-center mix-blend-overlay"></div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <h1 className="text-5xl font-bold mb-4 text-white drop-shadow-lg">About Reg44 Consultancy</h1>
            <p className="text-xl max-w-2xl mx-auto mb-8 text-white drop-shadow-md">Pioneering the future of care with expertise and innovation</p>
          </div>
        </section>

        <section className="container mx-auto px-4 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Our Mission</h2>
              <p className="text-gray-600 mb-4">
                At Reg44 Consultancy, we are dedicated to elevating the standards of care in Semi Independent Accommodation and Residential Children's Homes across the United Kingdom. Our mission is to empower care providers with cutting-edge solutions and expert guidance, ensuring the best possible outcomes for young people in care.
              </p>
              <p className="text-gray-600 mb-4">
                We believe in harnessing the power of technology and human expertise to create a brighter future for children and young adults in care settings. Our innovative approaches and commitment to excellence drive us to continually improve and adapt to the evolving needs of the care sector.
              </p>
            </div>
            <div className="bg-white bg-opacity-70 backdrop-filter backdrop-blur-lg p-8 rounded-2xl shadow-xl">
              <Image src={myImage} alt="Reg44 Consultancy Team" width={600} height={400} className="rounded-lg" />
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center">Our Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: UserGroupIcon, title: "Compassion", description: "We approach our work with empathy and understanding, always putting the needs of young people first." },
                { icon: ShieldCheckIcon, title: "Integrity", description: "We uphold the highest standards of professionalism and ethical conduct in all our interactions." },
                { icon: AcademicCapIcon, title: "Innovation", description: "We continuously seek new and improved ways to support care providers and enhance the lives of young people." },
              ].map((value, index) => (
                <div key={index} className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg p-6 rounded-xl">
                  <value.icon className="h-12 w-12 text-orange-300 mb-4" />
                  <h3 className="text-2xl font-semibold mb-4">{value.title}</h3>
                  <p>{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-20">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">Our Journey</h2>
          <div className="space-y-8">
            <div className="flex flex-col md:flex-row items-center bg-white bg-opacity-70 backdrop-filter backdrop-blur-lg p-6 rounded-xl shadow-lg">
              <div className="md:w-1/4 mb-4 md:mb-0">
                <span className="text-3xl font-bold text-blue-600">2004</span>
              </div>
              <div className="md:w-3/4">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Foundation</h3>
                <p className="text-gray-600">Reg44 Consultancy was established with a vision to improve care standards across the UK.</p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center bg-white bg-opacity-70 backdrop-filter backdrop-blur-lg p-6 rounded-xl shadow-lg">
              <div className="md:w-1/4 mb-4 md:mb-0">
                <span className="text-3xl font-bold text-blue-600">2010</span>
              </div>
              <div className="md:w-3/4">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Expansion of Services</h3>
                <p className="text-gray-600">We broadened our expertise to include comprehensive house inspections and specialized consultancy services.</p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center bg-white bg-opacity-70 backdrop-filter backdrop-blur-lg p-6 rounded-xl shadow-lg">
              <div className="md:w-1/4 mb-4 md:mb-0">
                <span className="text-3xl font-bold text-blue-600">2020</span>
              </div>
              <div className="md:w-3/4">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Digital Transformation</h3>
                <p className="text-gray-600">We embraced cutting-edge technology to enhance our services and provide more efficient, data-driven solutions.</p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center bg-white bg-opacity-70 backdrop-filter backdrop-blur-lg p-6 rounded-xl shadow-lg">
              <div className="md:w-1/4 mb-4 md:mb-0">
                <span className="text-3xl font-bold text-blue-600">Today</span>
              </div>
              <div className="md:w-3/4">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">Leading the Future of Care</h3>
                <p className="text-gray-600">We continue to innovate and set new standards in the care sector, always striving for excellence and positive outcomes for young people.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-r from-orange-400 to-blue-500">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-8 text-white">Ready to Elevate Your Care Standards?</h2>
            <a href="/contact" className="bg-white text-blue-600 hover:bg-blue-600 hover:text-white font-bold py-3 px-8 rounded-full transition duration-300 transform hover:scale-105 inline-flex items-center">
              Get in Touch
              <ChevronRightIcon className="h-5 w-5 ml-2" />
            </a>
          </div>
        </section>
      </main>


    </div>
  )
}