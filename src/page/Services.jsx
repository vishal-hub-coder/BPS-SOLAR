import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Mail, Phone, ArrowRight, MessageCircle } from "lucide-react";
import serv1 from "../assets/projects/service/1.jpg";
import serv2 from "../assets/projects/service/2.jpg";
import serv3 from "../assets/projects/service/3.jpg";
import serv4 from "../assets/projects/service/4.jpg";
import serv5 from "../assets/projects/service/5.jpg";
import serv6 from "../assets/projects/service/6.jpg";

const services = [
  {
    id: 1,
    title: "Industrial Solar Panel",
    description:
      "Solar energy provides a good return on investment through the use of un-utilized rooftop space in Industrial and requires minimal maintenance.",
    image: serv1,
    slug: "industrial-solar",
  },
  {
    id: 2,
    title: "Institutional Solar Panel",
    description:
      "Solar energy provides a good return on investment through the use of un-utilized rooftop space in Schools and requires minimal maintenance.",
    image: serv2,
    slug: "institutional-solar",
  },
  {
    id: 3,
    title: "Residential Solar Panel",
    description:
      "Solar energy provides a good return on investment through the use of un-utilized rooftop space in Domestic and requires minimal maintenance.",
    image: serv3,
    slug: "residential-solar",
  },
  {
    id: 4,
    title: "On-Grid Solar Power System",
    description:
      "On-grid solar power plant or grid-tie solar plants are commonly and widely used by homes, commercial and Industrial.",
    image: serv4,
    slug: "on-grid-solar",
  },
  {
    id: 5,
    title: "Off-Grid Solar Power System",
    description:
      "An off-grid system is not connected to the electricity grid and therefore requires battery storage.",
    image: serv5,
    slug: "off-grid-solar",
  },
  {
    id: 6,
    title: "Hybrid Solar Power System",
    description:
      "When choosing a type of solar system for home, institute, business or industry, mostly choose either an on grid solar system or an off grid solar system.",
    image: serv6,
    slug: "hybrid-solar",
  },
];

const Services = ({ limit }) => {
  const displayedServices = limit ? services.slice(0, limit) : services;
  const showViewMore = limit && services.length > limit;

  return (
    <section
      className="py-16 md:py-24 bg-gray-50"
      aria-label="Solar Services BPS Faridabad"
    >
      <Helmet>
        <title>Solar Services | Industrial, Residential, On-Grid, Off-Grid Solutions</title>
        <meta
          name="description"
          content="Complete solar solutions in Faridabad NCR: Industrial, Institutional, Residential solar panels, On-Grid, Off-Grid and Hybrid systems with high ROI and minimal maintenance."
        />
        <meta
          name="keywords"
          content="industrial solar Faridabad, residential solar panel, on-grid solar system, off-grid solar, hybrid solar system, solar installation Faridabad"
        />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="text-green-600 font-semibold tracking-wider text-sm uppercase">
            OUR SOLAR SERVICES
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-2 mb-4">
            Comprehensive Solar Solutions for Every Need
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            From industrial complexes to residential homes, we offer tailored solar
            solutions that maximize ROI with minimal maintenance.
          </p>
        </div>

        {/* Services Grid - 3 Rows × 2 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {displayedServices.map((service, index) => (
            <div
              key={service.id}
              className="group relative bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image Container */}
              <div className="relative h-48 md:h-56 overflow-hidden">
                <img
                  src={service.image}
                  alt={`${service.title} - BPS Solar Faridabad`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                {/* Enquiry Badge */}
                <a
                  href="/contact"
                  className="absolute top-4 right-4 bg-green-500 text-white p-2.5 rounded-full shadow-lg hover:bg-green-600 transition-colors duration-300 cursor-pointer group/enquiry"
                  aria-label={`Enquire about ${service.title}`}
                >
                  <MessageCircle size={20} />
                </a>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                  {service.title}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed line-clamp-3">
                  {service.description}
                </p>

                {/* Enquiry Button */}
                <a
                  href="/contact"
                  className="w-full flex items-center justify-center gap-2 px-5 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-green-500/30 transition-all duration-300 group/btn"
                  aria-label={`Enquire about ${service.title}`}
                >
                  <Mail size={18} />
                  <span>Enquire Now</span>
                  <ArrowRight
                    size={18}
                    className="transform group-hover/btn:translate-x-1 transition-transform"
                  />
                </a>
              </div>
            </div>
          ))}
        </div>

        {showViewMore && (
          <div className="mt-8 text-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-green-500/30 transition-all duration-300"
            >
              View More
              <ArrowRight size={18} className="transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        )}

        {/* CTA Banner */}
        <div className="mt-16 md:mt-20 bg-gradient-to-r from-slate-900 to-blue-900 rounded-3xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Need Help Choosing the Right Solar Solution?
          </h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Our experts will analyze your requirements and recommend the best solar
            system for maximum savings and efficiency.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-yellow-500 hover:bg-yellow-400 text-black font-semibold text-lg rounded-xl shadow-lg transition-all duration-300 hover:scale-105"
          >
            <Phone size={20} />
            <span>Get Free Consultation</span>
          </a>
        </div>
      </div>

      <style>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeUp {
          animation: fadeUp 0.8s ease-out forwards;
          opacity: 0;
        }

        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

export default Services;