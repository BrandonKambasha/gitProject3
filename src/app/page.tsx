import { StarIcon, HomeIcon, ClipboardDocumentCheckIcon, ChevronRightIcon, LightBulbIcon, ShieldCheckIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'
import Link from 'next/link'
import myImage from '../images/img9.avif'
import myImage2 from '../images/img2.avif'
import myImage3 from '../images/img4.avif'

export default function Home() {
  const services = [
    { icon: StarIcon, title: "Reg 44 Visits", description: "Expert Regulation 44 visits to residential children's homes", image: myImage },
    { icon: HomeIcon, title: "House Inspections", description: "Thorough inspections of Semi Independent Accommodation", image: myImage2 },
    { icon: ClipboardDocumentCheckIcon, title: "Consultancy Services", description: "Professional guidance for new and existing care provisions", image: myImage3 },
  ]

  const features = [
    { icon: LightBulbIcon, title: "Experienced Team", description: "Over 20 years of experience in Local Authorities and care provision." },
    { icon: ClipboardDocumentCheckIcon, title: "Comprehensive Services", description: "From Reg 44 visits to management coaching and quality assurance." },
    { icon: ShieldCheckIcon, title: "Tailored Support", description: "Customized solutions for diverse care settings across the UK." },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <main>
        <section className="relative py-20 overflow-hidden bg-gradient-to-br from-blue-600 to-indigo-700">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-700 opacity-90"></div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <h1 className="text-5xl font-bold mb-4 text-white drop-shadow-lg">Welcome to REG 44 CONSULTANCY</h1>
            <p className="text-xl max-w-2xl mx-auto mb-8 text-white drop-shadow-md">Pioneering excellence in Semi Independent Accommodation and Residential Children's Home care since 2010</p>
            <Link href="/services" className="bg-white text-indigo-600 hover:bg-indigo-600 hover:text-white font-bold py-3 px-8 rounded-full transition duration-300 transform hover:scale-105 inline-flex items-center">
              Discover Our Approach
              <ChevronRightIcon className="h-5 w-5 ml-2" />
            </Link>
          </div>
        </section>

        <section className="container mx-auto px-4 py-20">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">Our Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-xl text-center hover:shadow-2xl transition duration-300 transform hover:-translate-y-2">
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full opacity-20 blur-xl"></div>
                  <service.icon className="h-16 w-16 text-indigo-500 mx-auto relative z-10" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-indigo-600">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Image
                  src={service.image}
                  alt={service.title}
                  width={300}
                  height={200}
                  className="rounded-lg"
                />
              </div>
            ))}
          </div>
        </section>

        <section className="bg-gradient-to-r from-indigo-600 to-blue-700 text-white py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center">Why Choose REG 44 CONSULTANCY</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {features.map((feature, index) => (
                <div key={index} className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg p-6 rounded-xl">
                  <feature.icon className="h-12 w-12 text-indigo-300 mb-4" />
                  <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-8 text-gray-800">Ready to Elevate Your Care Services?</h2>
            <Link href="/contact" className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-bold py-3 px-8 rounded-full transition duration-300 transform hover:scale-105 inline-flex items-center">
              Get Started Now
              <ChevronRightIcon className="h-5 w-5 ml-2" />
            </Link>
          </div>
        </section>
      </main>
    </div>
  )
}