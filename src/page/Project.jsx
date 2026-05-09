import { useState } from 'react';
import { X } from 'lucide-react';

// engpar
import engpar1 from "../assets/projects/ENGPAR1.jpg";
import engpar2 from "../assets/projects/ENGPAR2.jpg";
import engpar3 from "../assets/projects/ENGPAR3.jpg";
import engpar4 from "../assets/projects/ENGPAR4.jpg";
//haryana
import haryana1 from "../assets/projects/HARYANA1.jpg";
import haryana2 from "../assets/projects/HARYANA2.jpg";
import haryana3 from "../assets/projects/HARYANA3.jpg";
// jindal-supream-india
import jind1 from "../assets/projects/JINDAL-SUPREAM-INDIA1.jpg";
import jind2 from "../assets/projects/JINDAL-SUPREAM-INDIA2.jpg";
import jind3 from "../assets/projects/JINDAL-SUPREAM-INDIA3.jpg";
import jind4 from "../assets/projects/JINDAL-SUPREAM-INDIA4.jpg";
import jind5 from "../assets/projects/JINDAL-SUPREAM-INDIA5.jpg";
import jind6 from "../assets/projects/JINDAL-SUPREAM-INDIA6.jpg";
// karnal 
import karnal1 from "../assets/projects/KARNAL1.jpg";
import karnal2 from "../assets/projects/KARNAL2.jpg";

// mehrulu
import mehrulu1 from "../assets/projects/MEHRULU-NEW-DELHI1.jpg";
import mehrulu2 from "../assets/projects/MEHRULU-NEW-DELHI2.jpg";
import mehrulu3 from "../assets/projects/MEHRULU-NEW-DELHI3.jpg";

// mohan
import mohan1 from "../assets/projects/MOHAN1.jpg";
import mohan2 from "../assets/projects/MOHAN2.jpg";
import mohan3 from "../assets/projects/MOHAN3.jpg";
//panipath
import panipath1 from "../assets/projects/PANIPATH1.jpg";
import panipath2 from "../assets/projects/PANIPATH2.jpg";
import panipath3 from "../assets/projects/PANIPATH3.jpg";
//redhu
import redhu1 from "../assets/projects/REDHU1.jpg";
import redhu2 from "../assets/projects/REDHU2.jpg";
//sangam
import sangam1 from "../assets/projects/SANGAM1.jpg";
import sangam2 from "../assets/projects/SANGAM2.jpg";
import sangam3 from "../assets/projects/SANGAM3.jpg";
// sikandarbad
import sikandarbad1 from "../assets/projects/SIKANDARBAD1.jpg";
import sikandarbad2 from "../assets/projects/SIKANDARBAD2.jpg";
// sonipat
import sonipat1 from "../assets/projects/SONIPATH1.jpg";
import sonipat2 from "../assets/projects/SONIPATH2.jpg";
import sonipat3 from "../assets/projects/SONIPATH3.jpg";
import service1 from "../assets/projects/service1.jpg";

const projects = [
  {
    title: 'ACCURATE POLYFAB',
    capacity: '420KW',
    location: 'PANIPAT',
    images: [panipath1, panipath2, panipath3],
  },
  {
    title: 'LAKSHYA FOODS PRIVATE LIMITED',
    capacity: '528KW',
    location: 'JIND',
    images: [jind1, jind2, jind3, jind4, jind5, jind6],
  },
  {
    title: 'AKASHDEEP FEEDS',
    capacity: '450KW',
    location: 'KARNAL',
    images: [karnal1, karnal2],
  },
  {
    title: 'ECO POLYMER, KHANDARA',
    capacity: '375KW',
    location: 'PANIPAT',
    images: [panipath1, panipath2, panipath3],
  },
  {
    title: 'NEWTECH MEDICAL DEVICES',
    capacity: '300KW',
    location: 'FARIDABAD, HARYANA',
    images: [haryana1, haryana2, haryana3],
  },
  {
    title: 'INTERARCH BUILDING PRODUCTS PVT LTD',
    capacity: '50KW',
    location: 'MEHRAULI, NEW DELHI',
    images: [mehrulu1, mehrulu2, mehrulu3],
  },
  {
    title: 'REDHU HATCHERY',
    capacity: '200KW',
    location: 'JIND',
    images: [redhu1, redhu2],
  },
  {
    title: 'ENGPAR INTERNATIONAL PVT LTD',
    capacity: '650KW',
    location: 'SAMLPA ROHTAK',
    images: [engpar1, engpar2, engpar3, engpar4],
  },
  {
    title: 'SANGAM INDUSTRY',
    capacity: '390KW',
    location: 'BHADURGARH',
    images: [sangam1, sangam2, sangam3],
  },
  {
    title: 'VRY LOGISTICS PARK LLP',
    capacity: '400KW',
    location: 'SIKANDERABAD UP',
    images: [sikandarbad1, sikandarbad2],
  },
  {
    title: 'JINDAL SUPREME INDIA LIMITED',
    capacity: '70KW',
    location: 'NEW DELHI',
    images: [jind1, jind2, jind3, jind4, jind5, jind6],
  },
  {
    title: 'MOHAN RICE MILL',
    capacity: '200KW',
    location: 'LADWA KURUKSHETRA',
    images: [mohan1, mohan2, mohan3],
  },
  {
    title: 'SUPREME SHAVER INDIA PRIVATE LIMITED',
    capacity: '550KW',
    location: 'SONIPAT',
    images: [sonipat1, sonipat2, sonipat3],
  },
];

const projectDetails = [
  {
    title: 'Swiss Biotech, Karnal',
    capacity: '250KW',
    description: 'At BPS Kiran Solar, we generally believes on determination. Therefore, as a symbol to that concept and with our strong focus on innovation and continuous improvement research, we recently commissioned a solar plant on the rooftop of one of our manufacturing units at SWISS BIOTECH, KARNAL 250KW.',
    image: karnal1,
  },
  {
    title: 'Apex Enterprises, Faridabad',
    capacity: null,
    description: 'BPS Kiran Solar, one of India\'s leading module manufacturers and a prominent Rooftop & Ground Mounted EPC solar solutions provider, commissioned rooftop solar plant for APEX ENTERPRISES at FARIDABAD.',
    image: panipath2,
  },
  {
    title: 'Mohyal Foods Pvt Ltd',
    capacity: '5MW',
    description: '5 MW grid-connected solar photovoltaic power plant. The solar PV plant is fixed at an optimum tilt angle and made south facing to maximize power generation. The PV modules used for the project are of c-Si type. The DC electrical output from the PV modules is fed via cables to string monitor boxes leading to the inverters. The inverters convert the DC power to AC power to step it upto 11kV medium grid voltage.',
    image: panipath3,
  },
  {
    title: 'Shri Balaji Industries, IMT Faridabad',
    capacity: null,
    description: 'At BPS Kiran Solar, we generally believes on determination. Therefore, as a symbol to that concept and with our strong focus on innovation and continuous improvement research, we recently commissioned a solar plant on the rooftop of one of our manufacturing units at SHRI BALAJI INDUSTRIES, IMT FARIDABAD.',
    image: karnal2,
  },
];

const institutionalProjects = [
  {
    title: 'Geeta Public School, Faridabad',
    capacity: null,
    description: 'The site is in the central part of Faridabad. It was a challenge for our Team BPS Kiran Solar for transporting the project materials to a site situated at one of the busiest & crowded places of Faridabad. Also, movement of heavy vehicles is prohibited there in most of the time of the day. To mitigate the above issues, early morning material deliveries were planned to overcome restrictions on entry of heavy vehicles in the area.',
    image: haryana1,
  },
];

const residentialProjects = [
  {
    title: 'Ballabgarh, Faridabad',
    capacity: null,
    description: 'At BPS Kiran Solar, we generally believes on determination. Therefore, as a symbol to that concept and with our strong focus on innovation and continuous improvement research, we recently commissioned a solar plant on the rooftop of one of our manufacturing units at BALLABGARH, FARIDABAD.',
    image: mehrulu1,
  },
  {
    title: 'Sector-15, Faridabad',
    capacity: '5MW',
    description: '5 MW grid-connected solar photovoltaic power plant. The solar PV plant is fixed at an optimum tilt angle and made south facing to maximize power generation. The PV modules used for the project are of c-Si type. The DC electrical output from the PV modules is fed via cables to string monitor boxes leading to the inverters. The inverters convert the DC power to AC power to step it upto 11kV medium grid voltage.',
    image: mehrulu2,
  },
  {
    title: 'Sector-64, Faridabad',
    capacity: null,
    description: 'At BPS Kiran Solar, we generally believes on determination. Therefore, as a symbol to that concept and with our strong focus on innovation and continuous improvement research, we recently commissioned a solar plant on the rooftop of one of our manufacturing units at SECTOR-64, FARIDABAD. Understanding the need for immediate transformation in the behind the meter energy conservation space where a huge potential of industry lies, BPS Kiran Solar commissioned this solar plant to encourage, inspire and to raise awareness within the state and the nation.',
    image: mehrulu3,
  },
];

const IndustrialSolarShowcase = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openModal = (project, imageIndex) => {
    setSelectedProject(project);
    setCurrentImageIndex(imageIndex);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  const nextImage = () => {
    if (selectedProject && currentImageIndex < selectedProject.images.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };

  const prevImage = () => {
    if (selectedProject && currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };

  return (
    <section className="bg-white py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-center text-lg md:text-xl lg:text-2xl font-bold text-gray-900 mb-10 tracking-tight">
          Industrial Solar Projects
        </h1>

        <div className="flex justify-center mb-10">
          <img src={service1} alt="Solar Service" className="max-w-[300px] w-full h-auto object-contain" />
        </div>

        <h2 className="text-base font-semibold text-green-600 mb-4">Industrial Projects</h2>
        {projectDetails.map((detail, idx) => (
          <div key={idx} className="mb-16 last:mb-0 flex flex-col md:flex-row items-center gap-6">
            <div className="w-full md:w-1/2">
              <h2 className="text-lg md:text-xl font-bold text-gray-800 mb-3">
                {detail.title}{detail.capacity && <span className="text-green-600"> - {detail.capacity}</span>}
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed">{detail.description}</p>
            </div>
            <div className="w-full md:w-1/2">
              <img 
                src={detail.image} 
                alt={detail.title}
                className="w-full h-40 md:h-44 object-cover rounded-lg shadow-md"
              />
            </div>
          </div>
        ))}

        <h2 className="text-base font-semibold text-green-600 mb-4">Institutional Projects</h2>
        {institutionalProjects.map((detail, idx) => (
          <div key={idx} className="mb-16 last:mb-0 flex flex-col md:flex-row items-center gap-6">
            <div className="w-full md:w-1/2">
              <h2 className="text-lg md:text-xl font-bold text-gray-800 mb-3">
                {detail.title}{detail.capacity && <span className="text-green-600"> - {detail.capacity}</span>}
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed">{detail.description}</p>
            </div>
            <div className="w-full md:w-1/2">
              <img 
                src={detail.image} 
                alt={detail.title}
                className="w-full h-40 md:h-44 object-cover rounded-lg shadow-md"
              />
            </div>
          </div>
        ))}

        <h2 className="text-base font-semibold text-green-600 mb-4">Residential Projects</h2>
        {residentialProjects.map((detail, idx) => (
          <div key={idx} className="mb-16 last:mb-0 flex flex-col md:flex-row items-center gap-6">
            <div className="w-full md:w-1/2">
              <h2 className="text-lg md:text-xl font-bold text-gray-800 mb-3">
                {detail.title}{detail.capacity && <span className="text-green-600"> - {detail.capacity}</span>}
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed">{detail.description}</p>
            </div>
            <div className="w-full md:w-1/2">
              <img 
                src={detail.image} 
                alt={detail.title}
                className="w-full h-40 md:h-44 object-cover rounded-lg shadow-md"
              />
            </div>
          </div>
        ))}

        {projects.map((project, projectIndex) => (
          <div key={projectIndex} className="mb-16 last:mb-0">
            <h2 className="text-center text-base md:text-lg lg:text-xl font-bold text-gray-800 mb-6">
              {project.capacity}, {project.title}, {project.location}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {project.images.map((image, imageIndex) => (
                <div
                  key={imageIndex}
                  className="group relative cursor-pointer overflow-hidden rounded-lg shadow-sm transition-all duration-300 hover:shadow-md"
                  onClick={() => openModal(project, imageIndex)}
                >
                  <img
                    src={image}
                    alt={`${project.title} ${imageIndex + 1}`}
                    className="w-full h-44 md:h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {selectedProject && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div
            className="relative max-w-3xl w-full max-h-[80vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute -top-10 right-0 text-white hover:text-gray-300 transition-colors z-10"
            >
              <X size={24} />
            </button>

            <div className="relative rounded-lg overflow-hidden">
              <img
                src={selectedProject.images[currentImageIndex]}
                alt={`${selectedProject.title} ${currentImageIndex + 1}`}
                className="w-full max-h-[65vh] object-contain"
              />
              
              {selectedProject.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    disabled={currentImageIndex === 0}
                    className={`absolute left-2 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white rounded-full p-1.5 transition-all ${currentImageIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button
                    onClick={nextImage}
                    disabled={currentImageIndex === selectedProject.images.length - 1}
                    className={`absolute right-2 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white rounded-full p-1.5 transition-all ${currentImageIndex === selectedProject.images.length - 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </>
              )}
            </div>

            <div className="mt-3 text-center">
              <h3 className="text-sm font-bold text-white mb-0.5">
                {selectedProject.capacity}, {selectedProject.title}
              </h3>
              <p className="text-gray-300 text-xs">
                {selectedProject.location} • Image {currentImageIndex + 1} of {selectedProject.images.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default IndustrialSolarShowcase;