import React, { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Zap, Building, Sun, Home } from "lucide-react";

const categories = [
  { name: "All", icon: <Sun size={16} /> },
  { name: "Industrial", icon: <Building size={16} /> },
  { name: "Commercial", icon: <Building size={16} /> },
  { name: "Residential", icon: <Home size={16} /> },
];

const projectsData = [
  {
    id: 1,
    title: "100 kW Rooftop Solar Plant",
    location: "Noida, UP",
    capacity: "100 kW",
    type: "Commercial",
    description: "Efficient rooftop installation for commercial buildings, reducing energy costs by 70%.",
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=1200",
  },
  {
    id: 2,
    title: "500 kW Industrial Solar Setup",
    location: "Gurgaon, Haryana",
    capacity: "500 kW",
    type: "Industrial",
    description: "Large-scale solar solution for manufacturing facility, powering operations sustainably.",
    image:
      "https://images.unsplash.com/photo-1584277261846-c6a1672ed979?q=80&w=1200",
  },
  {
    id: 3,
    title: "25 kW Residential Solar System",
    location: "Delhi",
    capacity: "25 kW",
    type: "Residential",
    description: "Home solar system providing clean energy and significant savings on electricity bills.",
    image:
      "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?q=80&w=1200",
  },
  {
    id: 4,
    title: "1 MW Ground Mounted Solar Plant",
    location: "Rajasthan",
    capacity: "1 MW",
    type: "Industrial",
    description: "Mega solar farm harnessing desert sun for large-scale renewable energy production.",
    image:
      "https://images.unsplash.com/photo-1592833159155-c62df1b65634?q=80&w=1200",
  },
];

const Project = () => {
  const [active, setActive] = useState("All");

  const filteredProjects =
    active === "All"
      ? projectsData
      : projectsData.filter((p) => p.type === active);

  return (
    <div className="bg-gradient-to-br from-gray-50 to-white py-16 px-6 md:px-16 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,197,94,0.1),transparent_50%)]"></div>
      </div>
      <div className="max-w-7xl mx-auto">

        {/* 🔹 Heading */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="flex items-center justify-center gap-2 mb-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <Sun className="text-yellow-500" size={20} />
            <span className="text-green-500 font-semibold tracking-wide text-sm uppercase">
              Our Projects
            </span>
          </motion.div>

          <motion.h2
            className="text-3xl md:text-4xl font-bold text-gray-800 mt-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Solar Projects Across India
          </motion.h2>

          <motion.p
            className="text-gray-500 mt-3 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            Explore our successfully completed solar installations delivering
            clean and efficient energy solutions.
          </motion.p>
        </motion.div>

        {/* 🔹 Filter Buttons */}
        <motion.div
          className="flex justify-center flex-wrap gap-3 mb-10"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
                delayChildren: 0.8,
              },
            },
          }}
        >
          {categories.map((cat, index) => (
            <motion.button
              key={index}
              onClick={() => setActive(cat.name)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition flex items-center gap-2
              ${
                active === cat.name
                  ? "bg-green-500 text-white shadow-lg"
                  : "bg-white text-gray-600 border border-gray-300 hover:bg-green-50 hover:border-green-300"
              }`}
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {cat.icon}
              {cat.name}
            </motion.button>
          ))}
        </motion.div>

        {/* 🔹 Projects Grid */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group hover:-translate-y-2"
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover group-hover:scale-110 transition duration-700"
                />

                {/* Type Badge */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-gray-700">
                  {project.type}
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                  <button className="bg-white text-gray-800 px-6 py-2 rounded-lg text-sm font-semibold hover:bg-gray-100 transition shadow-lg">
                    View Details
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-800 group-hover:text-green-600 transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-600 text-sm mt-2 line-clamp-2">
                  {project.description}
                </p>

                <div className="flex items-center text-gray-500 text-sm mt-3 gap-2">
                  <MapPin size={16} />
                  {project.location}
                </div>

                <div className="flex justify-between items-center mt-4 text-sm">
                  <div className="flex items-center gap-1 text-green-600 font-medium">
                    <Zap size={16} />
                    {project.capacity}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* 🔹 CTA */}
        <motion.div
          className="text-center mt-12 relative z-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          <motion.button
            className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-900 transition-all duration-300 shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
            whileTap={{ scale: 0.95 }}
          >
            View All Projects →
          </motion.button>
        </motion.div>

      </div>
    </div>
  );
};

export default Project;