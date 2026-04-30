import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Building, FileText, Cog } from 'lucide-react';

const services = [
  {
    title: "Solar EPC Solutions",
    description: "End-to-end engineering, procurement and construction of solar power plants.",
    icon: <Zap size={40} className="text-gray-600 group-hover:text-green-600 transition-colors" />,
  },
  {
    title: "Rooftop Solar (Industrial & Commercial)",
    description: "High-performance rooftop solar systems for industries and commercial buildings.",
    icon: <Building size={40} className="text-gray-600 group-hover:text-green-600 transition-colors" />,
  },
  {
    title: "Net Metering & Approvals",
    description: "Complete assistance in approvals, net metering and documentation support.",
    icon: <FileText size={40} className="text-gray-600 group-hover:text-green-600 transition-colors" />,
  },
  {
    title: "Operations & Maintenance",
    description: "Reliable O&M services to ensure maximum performance and system uptime.",
    icon: <Cog size={40} className="text-gray-600 group-hover:text-green-600 transition-colors" />,
  },
];



const Services = () => {
  return (
    <>
      {/* Services Section */}
      <section className="py-16 px-6 md:px-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Text */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="mb-4">
                <span className="text-green-500 font-semibold tracking-wide text-sm uppercase">
                  Our Services
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                Complete Solar Solutions Under One Roof
              </h2>

              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                We offer comprehensive EPC services for solar projects of all sizes with a focus on quality, safety and long-term performance.
              </p>

              <button className="bg-blue-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                Explore Services →
              </button>
            </motion.div>

            {/* Right Side - Service Cards */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="mb-4">
                    {service.icon}
                    <div className="w-12 h-1 bg-gradient-to-r from-green-400 to-yellow-400 mx-auto mt-2"></div>
                  </div>
                  <h4 className="text-lg font-bold text-gray-800 mb-2">{service.title}</h4>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>


    </>
  );
};

export default Services;
