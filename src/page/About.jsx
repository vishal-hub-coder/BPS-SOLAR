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
  FaShieldAlt,
  FaArrowRight,
  FaLeaf,
} from "react-icons/fa";

import solarPlantImage from "../assets/projects/ENGPAR1.jpg";

const stats = [
  {
    value: "100+ MW",
    label: "Installed Capacity",
    icon: <FaBolt className="text-yellow-400 text-4xl" />,
  },
  {
    value: "200+",
    label: "Projects Completed",
    icon: <FaUsers className="text-green-400 text-4xl" />,
  },
  {
    value: "20+",
    label: "States Pan India",
    icon: <FaMapMarkerAlt className="text-yellow-400 text-4xl" />,
  },
  {
    value: "24×7",
    label: "Support & Maintenance",
    icon: <FaClock className="text-green-400 text-4xl" />,
  },
];

const services = [
  {
    title: "Solar Power Infrastructure",
    description:
      "Ground-mounted and rooftop solar EPC solutions for industrial, commercial, and utility-scale applications.",
    icon: <FaSolarPanel className="text-4xl text-green-600" />,
  },
  {
    title: "Energy Storage Systems (ESS)",
    description:
      "Advanced battery storage solutions to maximize renewable energy utilization and grid stability.",
    icon: <FaBatteryFull className="text-4xl text-blue-600" />,
  },
  {
    title: "EV Charging Infrastructure",
    description:
      "Comprehensive electric vehicle charging solutions for commercial and public infrastructure.",
    icon: <FaChargingStation className="text-4xl text-yellow-500" />,
  },
  {
    title: "Electrical & Industrial Infrastructure",
    description:
      "Complete electrical infrastructure solutions including transmission and power distribution.",
    icon: <FaNetworkWired className="text-4xl text-purple-600" />,
  },
];

const values = [
  {
    title: "Engineering Excellence",
    icon: <FaTools className="text-4xl text-yellow-500" />,
  },
  {
    title: "Integrity & Transparency",
    icon: <FaHandshake className="text-4xl text-green-500" />,
  },
  {
    title: "Innovation & Sustainability",
    icon: <FaLightbulb className="text-4xl text-blue-500" />,
  },
  {
    title: "Quality & Reliability",
    icon: <FaChartLine className="text-4xl text-purple-500" />,
  },
  {
    title: "Safety & Responsibility",
    icon: <FaShieldAlt className="text-4xl text-red-500" />,
  },
  {
    title: "Customer Commitment",
    icon: <FaUsers className="text-4xl text-cyan-500" />,
  },
];

const scopeItems = [
  "Solar Power Infrastructure",
  "Ground-Mounted & Rooftop Solar EPC",
  "Energy Storage Systems (ESS)",
  "EV Charging Infrastructure",
  "Electrical & Industrial Infrastructure",
  "Smart & Sustainable Energy Solutions",
  "Operation & Maintenance Services",
];

const About = () => {
  return (
    <div className="w-full overflow-hidden bg-white">

      {/* SEO */}
      <Helmet>
        <title>
          About BPS Renewables | Leading Clean Energy Infrastructure Company in India
        </title>

        <meta
          name="description"
          content="BPS Renewables Pvt Ltd - Clean energy infrastructure company delivering solar power, energy storage, EV charging, and electrical infrastructure solutions across India."
        />

        <meta
          name="keywords"
          content="BPS Renewables, solar EPC company India, renewable energy infrastructure, solar power, energy storage systems, EV charging, electrical infrastructure"
        />
      </Helmet>

      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-r from-[#071421] via-[#0f2a44] to-[#123b63] py-24 lg:py-32 overflow-hidden">

        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-green-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20 relative z-10">

          <div className="grid lg:grid-cols-2 gap-14 items-center">

            {/* LEFT */}
            <div>

              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-white px-5 py-2 rounded-full text-sm font-medium mb-6">
                <FaLeaf className="text-green-400" />
                Renewable Energy Infrastructure Company
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
                Building Sustainable Energy Infrastructure for Tomorrow
              </h1>

              <p className="text-gray-300 text-lg leading-8 mb-8">
                BPS Renewables Pvt Ltd is a clean energy infrastructure company committed to accelerating the transition toward a smarter, greener, and more sustainable future.
              </p>

              <div className="flex flex-wrap gap-4">

                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-black font-bold px-8 py-4 rounded-xl transition duration-300 hover:scale-105 shadow-2xl"
                >
                  Get Started
                  <FaArrowRight />
                </a>

                <a
                  href="/project"
                  className="inline-flex items-center gap-2 border border-white/30 text-white hover:bg-white hover:text-black px-8 py-4 rounded-xl transition duration-300"
                >
                  View Projects
                </a>

              </div>

            </div>

            {/* RIGHT */}
            <div className="relative">

              <div className="absolute -top-6 -left-6 w-24 h-24 bg-green-500 rounded-3xl blur-2xl opacity-30"></div>

              <div className="relative rounded-[30px] overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.4)] border border-white/10">

                <img
                  src={solarPlantImage}
                  alt="BPS Renewables Solar Plant"
                  className="w-full h-[600px] object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"></div>

                <div className="absolute bottom-8 left-8 right-8">
                  <div className="bg-white/15 backdrop-blur-md border border-white/20 rounded-2xl p-5">
                    <h3 className="text-white font-bold text-xl mb-2">
                      650 kW Solar Installation - Rohtak
                    </h3>

                    <p className="text-gray-200 text-sm">
                      High-efficiency renewable energy infrastructure project delivering sustainable power solutions.
                    </p>
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* STATS */}
      <section className="relative -mt-14 z-20 px-4 sm:px-6 md:px-12 lg:px-20">

        <div className="max-w-7xl mx-auto bg-white rounded-[30px] shadow-2xl border border-gray-100 p-8 md:p-12">

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

            {stats.map((item, index) => (
              <div
                key={index}
                className="text-center group"
              >

                <div className="flex justify-center mb-5 transform group-hover:scale-110 transition duration-300">
                  {item.icon}
                </div>

                <h3 className="text-4xl font-black text-gray-900 mb-2">
                  {item.value}
                </h3>

                <p className="text-gray-600 font-medium">
                  {item.label}
                </p>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* ABOUT SECTION */}
      <section className="py-24 bg-white">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20">

          <div className="grid lg:grid-cols-2 gap-16 items-start">

            {/* LEFT */}
            <div>

              <span className="text-green-600 font-bold uppercase tracking-[3px] text-sm">
                About Us
              </span>

              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mt-4 mb-6 leading-tight">
                Building Sustainable Energy Infrastructure for Tomorrow
              </h2>

              <div className="w-24 h-1.5 bg-gradient-to-r from-green-500 to-yellow-500 rounded-full mb-8"></div>

              <div className="space-y-6 text-gray-600 text-[17px] leading-9">

                <p>
                  BPS Renewables Pvt Ltd is a clean energy infrastructure company committed to accelerating the transition toward a smarter, greener, and more sustainable future.
                </p>

                <p>
                  With a strong foundation built through years of execution experience in the renewable energy sector, BPS Renewables represents the next generation of integrated energy solutions focused on innovation, engineering excellence, and long-term value creation.
                </p>

                <p>
                  We develop and deliver advanced renewable energy and electrical infrastructure solutions for industrial, commercial, institutional, and utility-scale applications across India. Our expertise spans the complete lifecycle of projects — from concept, design, engineering, procurement, and execution to commissioning, operations, and long-term performance management.
                </p>

                <p>
                  At BPS Renewables, we believe the future of energy lies in intelligent, efficient, and sustainable infrastructure. Our goal is not only to generate clean power, but to create reliable energy ecosystems that support industrial growth, energy independence, and environmental responsibility.
                </p>

              </div>

            </div>

            {/* RIGHT */}
            <div className="sticky top-28">

              <div className="relative rounded-[30px] overflow-hidden shadow-2xl">

                <img
                  src={solarPlantImage}
                  alt="Solar Plant"
                  className="w-full h-[850px] object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"></div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* SERVICES */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20">

          <div className="text-center mb-16">

            <span className="text-green-600 font-bold uppercase tracking-[3px] text-sm">
              Diversified Business Areas
            </span>

            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mt-4 mb-6">
              Our Service Portfolio
            </h2>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">

            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-[28px] p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:-translate-y-3 group"
              >

                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center mb-8 group-hover:scale-110 transition duration-300">
                  {service.icon}
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>

                <p className="text-gray-600 leading-8">
                  {service.description}
                </p>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* BUSINESS AREAS */}
      <section className="py-24 bg-[#071421]">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20">

          <div className="text-center mb-16">

            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              Our diversified business areas include:
            </h2>

          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

            {scopeItems.map((item, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition duration-300"
              >

                <div className="flex items-center gap-4">

                  <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center text-white font-bold text-lg">
                    {index + 1}
                  </div>

                  <h3 className="text-white font-semibold text-lg leading-7">
                    {item}
                  </h3>

                </div>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* VALUES */}
      <section className="py-24 bg-white">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20">

          <div className="text-center mb-16">

            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              Our Core Values
            </h2>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {values.map((value, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-white to-gray-50 border border-gray-100 rounded-[30px] p-10 shadow-lg hover:shadow-2xl transition duration-500 hover:-translate-y-2"
              >

                <div className="mb-8 group-hover:scale-110 transition duration-300">
                  {value.icon}
                </div>

                <h3 className="text-2xl font-bold text-gray-900">
                  {value.title}
                </h3>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* VISION & MISSION */}
      <section className="py-24 bg-gradient-to-br from-green-50 via-white to-blue-50">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20">

          <div className="grid md:grid-cols-2 gap-10">

            <div className="bg-white rounded-[30px] p-10 shadow-xl border border-gray-100">

              <h3 className="text-4xl font-black text-gray-900 mb-6">
                Our Vision
              </h3>

              <p className="text-gray-600 leading-9 text-lg">
                To become one of India’s most trusted renewable energy infrastructure companies by delivering innovative and sustainable energy solutions that empower industries and contribute toward a cleaner future.
              </p>

            </div>

            <div className="bg-white rounded-[30px] p-10 shadow-xl border border-gray-100">

              <h3 className="text-4xl font-black text-gray-900 mb-6">
                Our Mission
              </h3>

              <p className="text-gray-600 leading-9 text-lg">
                To build reliable, efficient, and future-focused renewable energy infrastructure through engineering excellence, advanced technology, and customer-centric execution.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* COMMITMENT */}
      <section className="py-24 bg-gradient-to-r from-[#0f2a44] to-[#123b63]">

        <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-12 text-center">

          <h2 className="text-4xl md:text-5xl font-black text-white mb-8">
            Our Commitment
          </h2>

          <p className="text-gray-300 text-lg leading-9 mb-10">
            We are committed to building long-term partnerships through trust, performance, and responsible business practices while creating sustainable energy solutions that drive economic and environmental progress.
          </p>

          <div className="inline-block bg-yellow-500 text-black px-10 py-5 rounded-2xl font-black text-2xl shadow-2xl">
            One Team. One Goal. A Sustainable Future.
          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="py-24 bg-black">

        <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-12 text-center">

          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Ready to Build Sustainable Energy Infrastructure?
          </h2>

          <p className="text-gray-400 text-lg leading-8 mb-10">
            Let's discuss how we can help you accelerate your transition to clean energy solutions.
          </p>

          <a
            href="/contact"
            className="inline-flex items-center gap-3 bg-yellow-500 hover:bg-yellow-400 text-black font-bold px-10 py-5 rounded-2xl transition duration-300 hover:scale-105 shadow-2xl"
          >
            Get Started Today
            <FaArrowRight />
          </a>

        </div>

      </section>

    </div>
  );
};

export default About;