import { StarIcon, HomeIcon, ClipboardDocumentCheckIcon, ChartBarIcon, UserGroupIcon, AcademicCapIcon, ChevronRightIcon } from '@heroicons/react/24/solid'

export default function Services() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-blue-50">
      <main>
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-blue-500 opacity-80"></div>
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=600&width=1200')] bg-cover bg-center mix-blend-overlay"></div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <h1 className="text-5xl font-bold mb-4 text-white drop-shadow-lg">Our Services</h1>
            <p className="text-xl max-w-2xl mx-auto mb-8 text-white drop-shadow-md">Comprehensive solutions to elevate care standards in Semi Independent Accommodation and Residential Children's Homes</p>
          </div>
        </section>

        <section className="container mx-auto px-4 py-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: StarIcon, title: "Reg 44 Visits", description: "Our experienced Regulation 44 visitors conduct thorough visits to residential children's homes, spending time with children, talking to staff, and assessing the condition of the house to ensure compliance and quality care." },
              { icon: HomeIcon, title: "House Inspections", description: "We offer monthly house inspections for Semi Independent Accommodation, providing professional challenge and support to organizations. Our team prepares detailed reports and improvement plans to enhance your provision." },
              { icon: ClipboardDocumentCheckIcon, title: "Consultancy Services", description: "Whether you're setting up a new provision or need support for an existing one, our consultancy services offer expert guidance tailored to your specific needs." },
              { icon: ChartBarIcon, title: "Quality Assurance", description: "We help develop and implement Quality Assurance Frameworks to ensure consistent, high-quality care across your organization." },
              { icon: UserGroupIcon, title: "Management Coaching", description: "Our experienced team provides coaching and mentoring for management, helping to develop strong leadership in care settings." },
              { icon: AcademicCapIcon, title: "Training and Development", description: "We offer bespoke training programs based on organizational needs, covering a wide range of topics relevant to care provision." },
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

        <section className="py-20 bg-gradient-to-r from-orange-400 to-blue-500">
          <div className="container mx-auto px-4 text-center">
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