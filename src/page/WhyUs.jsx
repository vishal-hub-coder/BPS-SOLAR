import { useState } from 'react';
import { X,ArrowRight  } from 'lucide-react';
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
// commercials 
import com1 from "../assets/projects/Gallery/commercial/1.jpg";
import com2 from "../assets/projects/Gallery/commercial/2.jpg";
import com3 from "../assets/projects/Gallery/commercial/3.jpg";

// Domestics
import dom1 from "../assets/projects/Gallery/Domestic/1.jpg";
import dom2 from "../assets/projects/Gallery/Domestic/2.jpg";
import dom3 from "../assets/projects/Gallery/Domestic/3.jpg";
import dom4 from "../assets/projects/Gallery/Domestic/4.jpg";
import dom5 from "../assets/projects/Gallery/Domestic/5.jpg";
import dom6 from "../assets/projects/Gallery/Domestic/6.jpg";
import dom7 from "../assets/projects/Gallery/Domestic/7.jpg";
import dom8 from "../assets/projects/Gallery/Domestic/8.jpg";
import dom9 from "../assets/projects/Gallery/Domestic/9.jpg";
import dom10 from "../assets/projects/Gallery/Domestic/10.jpg";
import dom11 from "../assets/projects/Gallery/Domestic/11.jpg";
import dom12 from "../assets/projects/Gallery/Domestic/12.jpg";
// events 
import event1 from "../assets/projects/Gallery/events/1.jpg";
import event2 from "../assets/projects/Gallery/events/2.jpg";
import event3 from "../assets/projects/Gallery/events/3.jpg";
import event4 from "../assets/projects/Gallery/events/4.jpg";
import event5 from "../assets/projects/Gallery/events/5.jpg";
import event6 from "../assets/projects/Gallery/events/6.jpg";
import event7 from "../assets/projects/Gallery/events/7.jpg";
import event8 from "../assets/projects/Gallery/events/8.jpg";
import event9 from "../assets/projects/Gallery/events/9.jpg";
import event10 from "../assets/projects/Gallery/events/10.jpg";
import event11 from "../assets/projects/Gallery/events/11.jpg";
import event12 from "../assets/projects/Gallery/events/12.jpg";
// industories
import inds1 from "../assets/projects/Gallery/industries/1.jpg";
import inds2 from "../assets/projects/Gallery/industries/2.jpg";
import inds3 from "../assets/projects/Gallery/industries/3.jpg";
import inds4 from "../assets/projects/Gallery/industries/4.jpg";
import inds5 from "../assets/projects/Gallery/industries/5.jpg";
import inds6 from "../assets/projects/Gallery/industries/6.jpg";
import inds7 from "../assets/projects/Gallery/industries/7.jpg";
import inds8 from "../assets/projects/Gallery/industries/8.jpg";
import inds9 from "../assets/projects/Gallery/industries/9.jpg";
import inds10 from "../assets/projects/Gallery/industries/10.jpg";
// event broschor
import eventBro from "../assets/projects/Gallery/eventBro/1.jpg";

const galleryImages = {
  all: [com1, com2, com3, dom1, dom2, dom3, dom4, dom5, dom6, dom7, dom8, dom9, dom10, dom11, dom12, event1, event2, event3, event4, event5, event6, event7, event8, event9, event10, event11, event12, inds1, inds2, inds3, inds4, inds5, inds6, inds7, inds8, inds9, inds10, eventBro],
  commercial: [com1, com2, com3],
  domestic: [dom1, dom2, dom3, dom4, dom5, dom6, dom7, dom8, dom9, dom10, dom11, dom12],
  events: [event1, event2, event3, event4, event5, event6, event7, event8, event9, event10, event11, event12],
  industries: [inds1, inds2, inds3, inds4, inds5, inds6, inds7, inds8, inds9, inds10],
  eventBro: [eventBro],
};

const WhyUs = ({ limit }) => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => setSelectedImage(image);
  const closeModal = () => setSelectedImage(null);

  const filters = [
    { key: 'all', label: 'All' },
    { key: 'commercial', label: 'Commercial' },
    { key: 'domestic', label: 'Domestic' },
    { key: 'events', label: 'Events' },
    { key: 'industries', label: 'Industries' },
    { key: 'eventBro', label: 'Event Brochure' },
  ];

  // Get images for active filter
  const allImages = galleryImages[activeFilter];
  // Determine which images to show based on limit prop
  const displayedImages = limit ? allImages.slice(0, limit) : allImages;
  const showViewMore = limit && allImages.length > limit;

  return (
    <section
      className="py-16 px-6 md:px-16 bg-gray-50"
      aria-label="Solar Installation Process BPS Solar Faridabad NCR"
    >

      {/* SEO Meta Boost */}
      <Helmet>
        <meta
          name="description"
          content="Step-by-step solar installation process by BPS Solar in Faridabad including consultation, design, procurement, installation and maintenance across 50 km NCR region."
        />
        <meta
          name="keywords"
          content="solar installation process Faridabad, BPS solar EPC process, rooftop solar installation steps Haryana, solar company NCR workflow"
        />
      </Helmet>

      <div className="max-w-7xl mx-auto">

        {/* Gallery Section */}
        <div className="mt-20">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">
            Project Gallery
          </h2>
          
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {filters.map((filter) => (
              <button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                className={`px-6 py-2.5 rounded-full font-semibold text-sm transition-all transform hover:scale-105 ${
                  activeFilter === filter.key
                    ? 'bg-green-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-50 shadow-md'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>

          {/* Image Grid - Larger Images */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {displayedImages.map((image, index) => (
              <div
                key={index}
                className="group cursor-pointer overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
                onClick={() => openModal(image)}
              >
                <div className="relative">
                  <img
                    src={image}
                    alt={`Gallery ${index + 1}`}
                    className="w-full h-56 md:h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl flex items-center justify-center">
                    <span className="text-white font-semibold text-sm bg-black/50 px-3 py-1 rounded-full">
                      View Image
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* View More Button */}
          {showViewMore && (
            <div className="mt-8 text-center">
              <Link
                to="/gallery"
                className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-green-500/30 transition-all duration-300"
              >
                View More
                <ArrowRight size={18} className="transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          )}
        </div>

        {/* Modal - Larger image display */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <div className="relative max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
              <button
                onClick={closeModal}
                className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
              >
                <X size={32} />
              </button>
              <img
                src={selectedImage}
                alt="Gallery preview"
                className="w-full max-h-[85vh] object-contain rounded-xl shadow-2xl"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default WhyUs;