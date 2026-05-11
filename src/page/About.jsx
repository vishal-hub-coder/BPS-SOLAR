import { Helmet } from "react-helmet-async";
import {
  FaBolt,
  FaUsers,
  FaMapMarkerAlt,
  FaClock,
  FaSolarPanel,
  FaLightbulb,
  FaHandshake,
  FaChartLine,
  FaNetworkWired,
  FaTools,
  FaBatteryFull,
  FaChargingStation,
} from "react-icons/fa";

const stats = [
  {
    value: "100+ MW",
    label: "Installed Capacity",
    icon: <FaBolt className="text-yellow-400 text-3xl" />,
  },
  {
    value: "200+",
    label: "Projects Completed",
    icon: <FaUsers className="text-green-400 text-3xl" />,
  },
  {
    value: "20+",
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
    title: "Solar Power Infrastructure",
    description:
      "Ground-mounted and rooftop solar EPC solutions for industrial, commercial, and utility-scale applications.",
    icon: <FaSolarPanel className="text-3xl text-gray-600" />,
  },
  {
    title: "Energy Storage Systems (ESS)",
    description:
      "Advanced battery storage solutions to maximize renewable energy utilization and grid stability.",
    icon: <FaBatteryFull className="text-3xl text-gray-600" />,
  },
  {
    title: "EV Charging Infrastructure",
    description:
      "Comprehensive electric vehicle charging solutions for commercial and public infrastructure.",
    icon: <FaChargingStation className="text-3xl text-gray-600" />,
  },
  {
    title: "Electrical & Industrial Infrastructure",
    description:
      "Complete electrical infrastructure solutions including transmission and power distribution.",
    icon: <FaNetworkWired className="text-3xl text-gray-600" />,
  },
];

const values = [
  {
    title: "Engineering Excellence",
    description: "Delivering high-quality projects with uncompromising standards of safety, reliability, and execution excellence.",
    icon: <FaTools className="text-4xl text-yellow-500" />,
  },
  {
    title: "Innovation & Sustainability",
    description: "Building future-ready technologies and sustainable energy ecosystems for a cleaner tomorrow.",
    icon: <FaLightbulb className="text-4xl text-blue-500" />,
  },
  {
    title: "Integrity & Transparency",
    description: "Building long-term partnerships through trust, performance, and responsible business practices.",
    icon: <FaHandshake className="text-4xl text-green-500" />,
  },
  {
    title: "Quality & Reliability",
    description: "Creating reliable energy ecosystems that support industrial growth and energy independence.",
    icon: <FaChartLine className="text-4xl text-purple-500" />,
  },
];

const scopeItems = [
  "Solar Power Infrastructure",
  "Energy Storage Systems (ESS)",
  "EV Charging Infrastructure",
  "Electrical & Industrial Infrastructure",
  "Smart & Sustainable Energy Solutions",
  "Operation & Maintenance Services",
  "Transmission & Power Distribution",
  "Consulting & Advisory Services",
];

const About = () => {
  return (
    <div className="w-full overflow-hidden">
      {/* SEO Meta Tags */}
      <Helmet>
        <title>About BPS Renewables | Leading Clean Energy Infrastructure Company in India</title>
        <meta
          name="description"
          content="BPS Renewables Pvt Ltd - Clean energy infrastructure company delivering solar power, energy storage, EV charging, and electrical infrastructure solutions across India."
        />
        <meta
          name="keywords"
          content="BPS Renewables, solar EPC company India, renewable energy infrastructure, solar power, energy storage systems, EV charging, electrical infrastructure"
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
                WELCOME TO BPS RENEWABLES
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-4 mb-6 leading-tight">
                Building Sustainable Energy Infrastructure for Tomorrow
              </h1>
              <div className="w-20 h-1 bg-gradient-to-r from-green-500 to-yellow-500 mb-6 rounded"></div>

              <div className="prose prose-lg text-gray-600 space-y-4">
                <p>
                  BPS Renewables Pvt Ltd is a clean energy infrastructure company committed to accelerating the transition toward a smarter, greener, and more sustainable future.
                </p>
                <p>
                  With a strong foundation built through years of execution experience in the renewable energy sector, BPS Renewables represents the next generation of integrated energy solutions focused on innovation, engineering excellence, and long-term value creation.
                </p>
                <p>
                  We develop and deliver advanced renewable energy and electrical infrastructure solutions for industrial, commercial, institutional, and utility-scale applications across India. Our expertise spans the complete lifecycle of projects — from concept, design, engineering, procurement, and execution to commissioning, operations, and long-term performance management.
                </p>
                <p className="text-lg font-semibold text-gray-800 border-l-4 border-green-500 pl-4 py-2">
                  Driven by Engineering Excellence & Innovation
                </p>
                <p>
                  Driven by a team of experienced engineers, project professionals, and energy specialists, we focus on delivering high-quality projects with uncompromising standards of safety, reliability, efficiency, and execution excellence.
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
                <FaSolarPanel className="absolute bottom-8 left-8 text-4xl text-blue-500 animate-bounce delay-300" />
                <FaChartLine className="absolute top-1/2 right-4 text-4xl text-green-500 animate-bounce delay-500" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ☀️ Our Vision & Mission */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Vision & Mission
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Accelerating India's transition to sustainable energy through innovative infrastructure solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To become one of India's most trusted renewable energy infrastructure companies by delivering innovative and sustainable energy solutions that empower industries and contribute toward a cleaner future.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To build reliable, efficient, and future-focused renewable energy infrastructure through engineering excellence, advanced technology, and customer-centric execution.
              </p>
            </div>
          </div>

          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">Our Core Values</h3>
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
              Diversified Business Areas
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-2 mb-4">
              Our Service Portfolio
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              We provide comprehensive renewable energy and electrical infrastructure solutions across multiple domains.
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
              OUR SOLUTIONS
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-2 mb-4">
              Complete Energy Infrastructure Solutions
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              We offer integrated renewable energy and electrical infrastructure services with focus on quality, safety and long-term performance.
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
            Ready to Build Sustainable Energy Infrastructure?
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8">
            Let's discuss how we can help you accelerate your transition to clean energy solutions.
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