import React from "react";
import { Helmet } from "react-helmet-async";
import {
  FaBolt,
  FaUsers,
  FaMapMarkerAlt,
  FaClock,
  FaSolarPanel,
  FaBuilding,
  FaFileAlt,
  FaCog,
  FaLightbulb,
  FaRocket,
  FaHandshake,
  FaChartLine,
  FaNetworkWired,
  FaTools,
} from "react-icons/fa";

const stats = [
  {
    value: "50+ MW",
    label: "Installed Capacity",
    icon: <FaBolt className="text-yellow-400 text-3xl" />,
  },
  {
    value: "100+",
    label: "Happy Clients",
    icon: <FaUsers className="text-green-400 text-3xl" />,
  },
  {
    value: "15+",
    label: "States Pan India",
    icon: <FaMapMarkerAlt className="text-yellow-400 text-3xl" />,
  },
  {
    value: "24×7",
    label: "Support & Maintenance",
    icon: <FaClock className="text-green-400 text-3xl" />,
  },
];

const services = [
  {
    title: "Solar EPC Solutions",
    description:
      "End-to-end engineering, procurement and construction of solar power plants.",
    icon: <FaSolarPanel className="text-3xl text-gray-600" />,
  },
  {
    title: "Rooftop Solar (Industrial & Commercial)",
    description:
      "High-performance rooftop solar systems for industries and commercial buildings.",
    icon: <FaBuilding className="text-3xl text-gray-600" />,
  },
  {
    title: "Net Metering & Approvals",
    description:
      "Complete assistance in approvals, net metering and documentation support.",
    icon: <FaFileAlt className="text-3xl text-gray-600" />,
  },
  {
    title: "Operations & Maintenance",
    description:
      "Reliable O&M services to ensure maximum performance and system uptime.",
    icon: <FaCog className="text-3xl text-gray-600" />,
  },
];

const values = [
  {
    title: "Sustainability Focus",
    description: "Harnessing the infinite power of the sun to create clean, renewable energy for a greener tomorrow.",
    icon: <FaLightbulb className="text-4xl text-yellow-500" />,
  },
  {
    title: "Innovation Driven",
    description: "Embracing the latest solar technologies and rapid deployment innovations for better quality and lower costs.",
    icon: <FaRocket className="text-4xl text-blue-500" />,
  },
  {
    title: "Customer Trust",
    description: "Building lasting relationships through transparent processes, quality standards, and reliable service delivery.",
    icon: <FaHandshake className="text-4xl text-green-500" />,
  },
  {
    title: "High ROI",
    description: "Cost-effective investment returns through our unique Co-Developer approach for maximum financial benefits.",
    icon: <FaChartLine className="text-4xl text-purple-500" />,
  },
];

const scopeItems = [
  "Engineering Excellence & Design",
  "Procurement & Supply Chain",
  "Project Management & Execution",
  "Commissioning & Handover",
  "Net Metering & Regulatory Approvals",
  "Operations & Maintenance Support",
  "Transmission & Power Distribution",
  "Consulting & Advisory Services",
];

const About = () => {
  return (
    <div className="w-full overflow-hidden">
      {/* SEO Meta Tags */}
      <Helmet>
        <title>About BPS Kiran Solar | Leading Solar EPC Company in Faridabad</title>
        <meta
          name="description"
          content="BPS Kiran Solar - established 2017, largest solar developer & EPC management company in Faridabad. Serving 15+ states with 50+ MW installed capacity."
        />
        <meta
          name="keywords"
          content="BPS Kiran Solar, solar EPC company Faridabad, solar developer India, rooftop solar, ground mounted solar, National Solar Mission"
        />
      </Helmet>

      {/* 🔵 Stats Bar */}
      <div className="bg-gradient-to-r from-[#0f2a44] to-[#123b63] py-10 px-6 md:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 text-center divide-y sm:divide-y-0 sm:divide-x divide-white/20">
          {stats.map((item, index) => (
            <div
              key={index}
              className="py-6 flex flex-col items-center justify-center gap-3 hover:scale-105 transition duration-300"
            >
              {item.icon}
              <h3 className="text-2xl md:text-3xl font-bold text-white">
                {item.value}
              </h3>
              <p className="text-gray-300 text-sm">{item.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 🏢 Company Intro */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Text Content */}
            <div className="animate-fadeInUp">
              <span className="text-green-600 font-semibold tracking-wider text-sm uppercase">
                WELCOME TO BPS KIRAN SOLAR SOLUTION
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-4 mb-6 leading-tight">
                One of the Largest Solar Developer & EPC Management Company
              </h1>
              <div className="w-20 h-1 bg-gradient-to-r from-green-500 to-yellow-500 mb-6 rounded"></div>

              <div className="prose prose-lg text-gray-600 space-y-4">
                <p>
                  BPS Kiran Solar established in 2017 has been one of the pioneers
                  in Faridabad and now an established player in Haryana, Punjab,
                  Uttarakhand, UP, and Rajasthan for Solar EPC services.
                </p>
                <p>
                  We have commissioned solar projects for Domestic, Education
                  Institutions, Commercial establishments, and Industrial sectors
                  amounting to MW-scale installations.
                </p>
                <p>
                  With its presence in almost all major corners of the country,
                  we have significantly contributed to the National Solar Mission.
                  Apart from being an EPC solution provider, the company is known
                  for its differentiated and unique "Co-Developer" approach,
                  offering cost-effective investment returns to private equity
                  investors.
                </p>
                <p className="text-lg font-semibold text-gray-800 border-l-4 border-green-500 pl-4 py-2">
                  09+ Years Of Experience In Solar Energy
                </p>
                <p>
                  As a result, we have gained the confidence of our customers and
                  investors in a short stint. The company is on the way to gain
                  expertise in the Transmission and Power Distribution segment as well.
                </p>
              </div>
            </div>

            {/* Right - Illustration/Shapes */}
            <div className="relative hidden lg:block">
              <div className="relative w-full h-96 bg-gradient-to-br from-green-50 to-blue-50 rounded-3xl overflow-hidden">
                {/* Decorative Elements */}
                <div className="absolute top-10 left-10 w-32 h-32 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
                <div className="absolute bottom-10 right-10 w-48 h-48 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-700"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse delay-1000"></div>

                {/* Central Visual */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    <FaSolarPanel className="text-8xl text-green-600 mb-4" />
                    <div className="absolute -inset-4 border-4 border-dashed border-yellow-400 rounded-full animate-spin-slow"></div>
                  </div>
                </div>

                {/* Floating Icons */}
                <FaBolt className="absolute top-8 right-8 text-4xl text-yellow-500 animate-bounce" />
                <FaBuilding className="absolute bottom-8 left-8 text-4xl text-blue-500 animate-bounce delay-300" />
                <FaChartLine className="absolute top-1/2 right-4 text-4xl text-green-500 animate-bounce delay-500" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ☀️ Our Values / Philosophy */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Solar Energy Matters
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              The Sun has been around since life existed—the oldest and most
              powerful source of energy, belonging to everyone equally.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 text-center"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-gradient-to-br from-gray-50 to-gray-100 rounded-full">
                    {value.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🔧 Scope of Services */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
          <div className="text-center mb-16">
            <span className="text-green-600 font-semibold tracking-wider text-sm uppercase">
              FROM IDEA TO REALIZATION
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-2 mb-4">
              Scope of Services
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              We provide end-to-end solar energy solutions, handling every aspect
              from initial concept to final commissioning and beyond.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {scopeItems.map((item, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl border border-gray-100 hover:border-green-500 transition-all duration-300 hover:shadow-lg"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-bold">
                    {index + 1}
                  </div>
                  <p className="text-gray-800 font-medium leading-relaxed pt-2">
                    {item}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 📋 Services Cards Section */}
      <div className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
          <div className="text-center mb-12 md:mb-16">
            <span className="text-green-600 font-semibold tracking-wider text-sm uppercase">
              OUR SOLAR SERVICES
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-2 mb-4">
              Complete Solar Solutions Under One Roof
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              We offer comprehensive EPC services for solar projects of all sizes
              with a focus on quality, safety and long-term performance.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl p-8 text-center transition-all duration-300 hover:-translate-y-2 group"
              >
                {/* Icon */}
                <div className="flex justify-center mb-6">
                  <div className="p-4 bg-gradient-to-br from-green-50 to-blue-50 rounded-full group-hover:scale-110 transition duration-300">
                    {service.icon}
                  </div>
                </div>

                {/* Title */}
                <h4 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h4>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 📞 Call to Action */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-slate-900 to-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Go Solar?
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8">
            Let's discuss how we can help you harness solar energy for your home,
            business, or institution.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-yellow-500 hover:bg-yellow-400 text-black font-semibold text-lg rounded-xl shadow-lg transition-all duration-300 hover:scale-105"
          >
            Get Started Today
          </a>
        </div>
      </section>

      {/* Custom Animations */}
      <style>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }

        .delay-300 {
          animation-delay: 300ms;
        }

        .delay-500 {
          animation-delay: 500ms;
        }

        .delay-700 {
          animation-delay: 700ms;
        }

        .delay-1000 {
          animation-delay: 1000ms;
        }
      `}</style>
    </div>
  );
};

export default About;