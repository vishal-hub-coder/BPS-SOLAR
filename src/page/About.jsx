import React from "react";
import {
  FaBolt,
  FaUsers,
  FaMapMarkerAlt,
  FaClock,
  FaSolarPanel,
  FaBuilding,
  FaFileAlt,
  FaCog,
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

const About = () => {
  return (
    <div className="w-full overflow-hidden">
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

      {/* ⚪ Services Section */}
      <div className="bg-gray-50 py-16 px-6 md:px-16">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="animate-fadeInUp">
            <h3 className="text-green-600 text-sm font-semibold uppercase tracking-wider">
              OUR SERVICES
            </h3>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-4 leading-snug">
              Complete Solar Solutions <br /> Under One Roof
            </h2>

            <p className="text-gray-600 mt-5 leading-relaxed">
              We offer comprehensive EPC services for solar projects of all sizes
              with a focus on quality, safety and long-term performance.
            </p>

            <button className="mt-8 bg-[#123b63] text-white px-7 py-3 rounded-lg font-semibold shadow-md hover:bg-[#0f2a44] hover:scale-105 transition duration-300">
              EXPLORE SERVICES →
            </button>
          </div>

          {/* Right Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-sm p-6 text-center 
                hover:shadow-xl hover:-translate-y-2 transition duration-300"
              >
                {/* Icon */}
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-gray-100 rounded-full hover:scale-110 transition">
                    {service.icon}
                  </div>
                </div>

                {/* Gradient line */}
                <div className="w-12 h-1 bg-gradient-to-r from-green-400 to-yellow-400 mx-auto mb-4 rounded"></div>

                {/* Title */}
                <h4 className="text-lg font-semibold text-gray-800">
                  {service.title}
                </h4>

                {/* Description */}
                <p className="text-gray-500 text-sm mt-3 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;