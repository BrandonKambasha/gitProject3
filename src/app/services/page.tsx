import Image from 'next/image'
import { StarIcon, HomeIcon, ClipboardDocumentCheckIcon, ChartBarIcon, UserGroupIcon, AcademicCapIcon, PhoneIcon, EnvelopeIcon, ChevronRightIcon } from '@heroicons/react/24/solid'
import myImage from '../images/reg44.png'

export default function Services() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-blue-50">


      <main>
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-blue-500 opacity-80"></div>
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=600&width=1200')] bg-cover bg-center mix-blend-overlay"></div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <h1 className="text-5xl font-bold mb-4 text-white drop-shadow-lg">Our Services</h1>
            <p className="text-xl max-w-2xl mx-auto mb-8 text-white drop-shadow-md">Innovative solutions to elevate care standards in Semi Independent Accommodation and Residential Children's Homes</p>
          </div>
        </section>

        <section className="container mx-auto px-4 py-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: StarIcon, title: "AI-Enhanced Reg 44 Visitor", description: "Our cutting-edge AI-assisted visitors ensure comprehensive and insightful Regulation 44 visits to your residential children's homes. We combine human expertise with advanced technology to provide detailed reports and actionable recommendations." },
              { icon: HomeIcon, title: "Smart House Inspections", description: "Utilizing data-driven approaches and predictive analytics, our smart house inspections go beyond traditional assessments. We offer thorough evaluations of your facilities, identifying potential issues before they arise and providing tailored improvement strategies." },
              { icon: ClipboardDocumentCheckIcon, title: "Virtual Reality Consultancy", description: "Experience immersive consultancy sessions through our state-of-the-art VR technology. Our virtual reality platform allows for interactive training, scenario simulations, and remote consultations, enhancing the learning experience for care providers." },
              { icon: ChartBarIcon, title: "Data Analytics and Reporting", description: "Harness the power of your data with our advanced analytics services. We provide insightful reports and dashboards that help you make informed decisions, track progress, and identify areas for improvement in your care provision." },
              { icon: UserGroupIcon, title: "Staff Training and Development", description: "Equip your team with the skills they need to excel in the modern care environment. Our comprehensive training programs cover a wide range of topics, from the latest care practices to using technology in care settings." },
              { icon: AcademicCapIcon, title: "Compliance and Quality Assurance", description: "Stay ahead of regulatory requirements with our expert compliance services. We help you navigate the complex landscape of care regulations, ensuring your services meet and exceed the required standards." },
            ].map((service, index) => (
              <div key={index} className="bg-white bg-opacity-70 backdrop-filter backdrop-blur-lg p-8 rounded-2xl shadow-xl hover:shadow-2xl transition duration-300 transform hover:-translate-y-2">
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-blue-500 rounded-full opacity-20 blur-xl"></div>
                  <service.icon className="h-16 w-16 text-orange-500 relative z-10" />
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-blue-600">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center">Our Approach</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg p-6 rounded-xl">
                <h3 className="text-2xl font-semibold mb-4">Innovative</h3>
                <p>We continuously integrate the latest technologies and methodologies to provide cutting-edge solutions for the care sector.</p>
              </div>
              <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg p-6 rounded-xl">
                <h3 className="text-2xl font-semibold mb-4">Personalized</h3>
                <p>Our services are tailored to meet the unique needs of each care provider, ensuring maximum impact and relevance.</p>
              </div>
              <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg p-6 rounded-xl">
                <h3 className="text-2xl font-semibold mb-4">Collaborative</h3>
                <p>We work closely with our clients, fostering a partnership approach to achieve the best outcomes for young people in care.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-20">
          <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <p className="text-gray-600 mb-4">"Reg44 Consultancy's innovative approach has transformed how we operate our children's home. Their AI-enhanced visits provide insights we never thought possible."</p>
              <p className="font-semibold text-blue-600">- Sarah Johnson, Care Home Manager</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <p className="text-gray-600 mb-4">"The virtual reality training sessions have been a game-changer for our staff. It's an engaging and effective way to improve our care practices."</p>
              <p className="font-semibold text-blue-600">- Mark Thompson, Training Coordinator</p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-r from-orange-400 to-blue-500">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-8 text-white">Ready to Elevate Your Care Services?</h2>
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