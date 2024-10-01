import Image from 'next/image'
import { StarIcon, HomeIcon, ClipboardDocumentCheckIcon, ChartBarIcon, UserGroupIcon, AcademicCapIcon, ChevronRightIcon } from '@heroicons/react/24/solid'
import myImage from '../../images/reg44.png'
import teamImage from '../../images/img4.avif'
import officeImage from '../../images/img9.avif'
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
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-blue-50">
      <main>
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-blue-500 opacity-80"></div>
          <Image
            src={teamImage}
            alt="Services Hero"
            layout="fill"
            objectFit="cover"
            className="mix-blend-overlay"
          />
          <div className="container mx-auto px-4 text-center relative z-10">
            <h1 className="text-5xl font-bold mb-4 text-white drop-shadow-lg">Our Services</h1>
            <ol className="list-disc list-inside text-white mb-8">
              <li>Reg 44 visit to residential children’s homes</li>
              <li>Independent Visits and Inspection to Semi Independent Accommodation</li>
              <li>Undertaking Location Risk Assessments</li>
              <li>Management Coaching and Mentoring</li>
              <li>Development of Practice Templates for recordings</li>
              <li>Developing and Implementation of Quality Assurance Frameworks</li>
              <li>Ofsted Preparation Visits</li>
              <li>Support with improvement plans following Ofsted visits</li>
              <li>Learning and Development for Local Authorities</li>
              <li>Developing and delivering relevant training based on organisational needs</li>

            </ol>
          

            <p className="text-xl max-w-2xl mx-auto mb-8 text-white drop-shadow-md">Comprehensive solutions to elevate care standards in Semi Independent Accommodation and Residential Children's Homes</p>
          </div>
        </section>

        {serviceCategories.map((category, index) => (
          <section key={index} className="container mx-auto px-4 py-20">
            <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">{category.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {category.services.map((service, serviceIndex) => (
                <div key={serviceIndex} className="bg-white bg-opacity-70 backdrop-filter backdrop-blur-lg p-8 rounded-2xl shadow-xl hover:shadow-2xl transition duration-300 transform hover:-translate-y-2">
                  <div className="relative mb-6">
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-blue-500 rounded-full opacity-20 blur-xl"></div>
                    <service.icon className="h-16 w-16 text-orange-500 relative z-10" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4 text-blue-600">{service.name}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              ))}
            </div>
          </section>
        ))}

        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 relative">
          <Image
            src={officeImage}
            alt="Additional Services"
            layout="fill"
            objectFit="cover"
            className="opacity-20"
          />
          <div className="container mx-auto px-4 relative z-10">
            <h2 className="text-4xl font-bold mb-12 text-center">Additional Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg p-6 rounded-xl">
                <h3 className="text-2xl font-semibold mb-4">Location Risk Assessments</h3>
                <p>Comprehensive assessments to ensure the safety and suitability of care locations.</p>
              </div>
              <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg p-6 rounded-xl">
                <h3 className="text-2xl font-semibold mb-4">Ofsted Preparation</h3>
                <p>Expert support in preparing for Ofsted inspections and implementing improvement plans.</p>
              </div>

              <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg p-6 rounded-xl">
                <h3 className="text-2xl font-semibold mb-4">Management Coaching and Mentoring</h3>
                <p>Expert support in preparing for Ofsted inspections and implementing improvement plans.</p>
              </div>

              <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg p-6 rounded-xl">
                <h3 className="text-2xl font-semibold mb-4">Specialized Support</h3>
                <p>Tailored services for working with migrant communities and Black and Asian Ethnic Minority communities.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-20">
          <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">Our Approach</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4 text-blue-600">Tailored Solutions</h3>
              <p className="text-gray-600 mb-4">We understand that each care provider has unique challenges and needs. Our services are customized to address your specific requirements, ensuring maximum impact and relevance.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4 text-blue-600">Continuous Improvement</h3>
              <p className="text-gray-600 mb-4">We don't just provide one-off services. Our approach focuses on continuous improvement, working alongside you to implement changes and monitor progress over time.</p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-r from-orange-400 to-blue-500 relative">
          <Image
            src={myImage}
            alt="CTA Background"
            layout="fill"
            objectFit="cover"
            className="opacity-20"
          />
          <div className="container mx-auto px-4 text-center relative z-10">
            <h2 className="text-4xl font-bold mb-8 text-white">Ready to Enhance Your Care Provision?</h2>
            <a href="/contact" className="bg-white text-blue-600 hover:bg-blue-600 hover:text-white font-bold py-3 px-8 rounded-full transition duration-300 transform hover:scale-105 inline-flex items-center">
              Get Started Today
              <ChevronRightIcon className="h-5 w-5 ml-2" />
            </a>
          </div>
        </section>
      </main>
    </div>
  )
}