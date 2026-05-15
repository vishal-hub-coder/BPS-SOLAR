import { useState } from 'react';
import { X, ChevronLeft, ChevronRight, MapPin } from 'lucide-react';

// ==================== ALL IMAGE IMPORTS ====================
import engpar1 from "../assets/projects/ENGPAR1.jpg";
import engpar2 from "../assets/projects/ENGPAR2.jpg";
import engpar3 from "../assets/projects/ENGPAR3.jpg";
import engpar4 from "../assets/projects/ENGPAR4.jpg";

import haryana1 from "../assets/projects/HARYANA1.jpg";
import haryana2 from "../assets/projects/HARYANA2.jpg";
import haryana3 from "../assets/projects/HARYANA3.jpg";

import jind1 from "../assets/projects/JINDAL-SUPREAM-INDIA1.jpg";
import jind2 from "../assets/projects/JINDAL-SUPREAM-INDIA2.jpg";
import jind3 from "../assets/projects/JINDAL-SUPREAM-INDIA3.jpg";
import jind4 from "../assets/projects/JINDAL-SUPREAM-INDIA4.jpg";
import jind5 from "../assets/projects/JINDAL-SUPREAM-INDIA5.jpg";
import jind6 from "../assets/projects/JINDAL-SUPREAM-INDIA6.jpg";

import karnal1 from "../assets/projects/KARNAL1.jpg";
import karnal2 from "../assets/projects/KARNAL2.jpg";

import mehrulu1 from "../assets/projects/MEHRULU-NEW-DELHI1.jpg";
import mehrulu2 from "../assets/projects/MEHRULU-NEW-DELHI2.jpg";
import mehrulu3 from "../assets/projects/MEHRULU-NEW-DELHI3.jpg";

import mohan1 from "../assets/projects/MOHAN1.jpg";
import mohan2 from "../assets/projects/MOHAN2.jpg";
import mohan3 from "../assets/projects/MOHAN3.jpg";

import panipath1 from "../assets/projects/PANIPATH1.jpg";
import panipath2 from "../assets/projects/PANIPATH2.jpg";
import panipath3 from "../assets/projects/PANIPATH3.jpg";

import redhu1 from "../assets/projects/REDHU1.jpg";
import redhu2 from "../assets/projects/REDHU2.jpg";

import sangam1 from "../assets/projects/SANGAM1.jpg";
import sangam2 from "../assets/projects/SANGAM2.jpg";
import sangam3 from "../assets/projects/SANGAM3.jpg";

import sikandarbad1 from "../assets/projects/SIKANDARBAD1.jpg";
import sikandarbad2 from "../assets/projects/SIKANDARBAD2.jpg";

import sonipat1 from "../assets/projects/SONIPATH1.jpg";
import sonipat2 from "../assets/projects/SONIPATH2.jpg";
import sonipat3 from "../assets/projects/SONIPATH3.jpg";

import service1 from "../assets/projects/service1.jpg";

// ==================== PROJECTS DATA ====================
const projects = [
  { title: 'ACCURATE POLYFAB', capacity: '420KW', location: 'PANIPAT', images: [panipath1, panipath2, panipath3] },
  { title: 'LAKSHYA FOODS PRIVATE LIMITED', capacity: '528KW', location: 'JIND', images: [jind1, jind2, jind3, jind4, jind5, jind6] },
  { title: 'AKASHDEEP FEEDS', capacity: '450KW', location: 'KARNAL', images: [karnal1, karnal2] },
  { title: 'ECO POLYMER, KHANDARA', capacity: '375KW', location: 'PANIPAT', images: [panipath1, panipath2, panipath3] },
  { title: 'NEWTECH MEDICAL DEVICES', capacity: '300KW', location: 'FARIDABAD, HARYANA', images: [haryana1, haryana2, haryana3] },
  { title: 'INTERARCH BUILDING PRODUCTS PVT LTD', capacity: '50KW', location: 'MEHRAULI, NEW DELHI', images: [mehrulu1, mehrulu2, mehrulu3] },
  { title: 'REDHU HATCHERY', capacity: '200KW', location: 'JIND', images: [redhu1, redhu2] },
  { title: 'ENGPAR INTERNATIONAL PVT LTD', capacity: '650KW', location: 'SAMLPA ROHTAK', images: [engpar1, engpar2, engpar3, engpar4] },
  { title: 'SANGAM INDUSTRY', capacity: '390KW', location: 'BHADURGARH', images: [sangam1, sangam2, sangam3] },
  { title: 'VRY LOGISTICS PARK LLP', capacity: '400KW', location: 'SIKANDERABAD UP', images: [sikandarbad1, sikandarbad2] },
  { title: 'JINDAL SUPREME INDIA LIMITED', capacity: '70KW', location: 'NEW DELHI', images: [jind1, jind2, jind3, jind4, jind5, jind6] },
  { title: 'MOHAN RICE MILL', capacity: '200KW', location: 'LADWA KURUKSHETRA', images: [mohan1, mohan2, mohan3] },
  { title: 'SUPREME SHAVER INDIA PRIVATE LIMITED', capacity: '550KW', location: 'SONIPAT', images: [sonipat1, sonipat2, sonipat3] },
];

const institutionalProjects = [
  {
    title: 'Geeta Public School, Faridabad',
    description: 'The site is in the central part of Faridabad. BPS Kiran Solar successfully installed and commissioned the solar power plant with high efficiency modules and advanced inverters.',
    image: haryana1,
  },
];

const residentialProjects = [
  {
    title: 'Ballabgarh, Faridabad',
    description: 'At BPS Kiran Solar, we take pride in delivering high-quality residential solar solutions tailored to meet the energy needs of modern homes.',
    image: mehrulu1,
  },
  {
    title: 'Sector-15, Faridabad',
    capacity: '5MW',
    description: '5 MW grid-connected solar photovoltaic power plant with advanced monitoring system and excellent performance.',
    image: mehrulu2,
  },
  {
    title: 'Sector-64, Faridabad',
    description: 'Premium residential solar installation with sleek design and maximum energy generation.',
    image: mehrulu3,
  },
];

const IndustrialSolarShowcase = ({ limit }) => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeTab, setActiveTab] = useState('industrial');

  if (limit) {
    const limitedProjects = projects.slice(0, limit);
    return (
      <section className="bg-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center text-3xl font-bold mb-10">Our Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {limitedProjects.map((project, i) => (
              <div key={i} className="rounded-xl overflow-hidden shadow-sm border">
                <img src={project.images[0]} alt={project.title} className="w-full h-52 object-cover" />
                <div className="p-4">
                  <h3 className="font-semibold text-lg">{project.title}</h3>
                  <p className="text-green-700 text-sm">{project.capacity}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  const openModal = (project, index = 0) => {
    setSelectedProject(project);
    setCurrentImageIndex(index);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => (prev + 1) % selectedProject.images.length);
    }
  };

  const prevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => (prev - 1 + selectedProject.images.length) % selectedProject.images.length);
    }
  };

  return (
    <section className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-5">
            <img src={service1} alt="Service" className="max-w-[240px]" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900">Our Solar Projects</h1>
          <p className="text-gray-600 mt-3 text-lg">Reliable solar installations across Haryana, Delhi & UP</p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex bg-gray-100 rounded-xl p-1">
            {['industrial', 'institutional', 'residential'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-8 py-3 rounded-xl font-medium transition-all ${
                  activeTab === tab 
                    ? 'bg-white shadow text-gray-900' 
                    : 'text-gray-600 hover:bg-white/60'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* INDUSTRIAL PROJECTS */}
        {activeTab === 'industrial' && (
          <div className="space-y-16">
            {projects.map((project, i) => (
              <div key={i} className="border border-gray-200 rounded-2xl overflow-hidden">
                {/* Header */}
                <div className="bg-gray-50 px-6 py-5 border-b flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h2 className="text-2xl font-semibold text-gray-900">{project.title}</h2>
                    <div className="flex items-center text-gray-500 mt-1">
                      <MapPin className="w-4 h-4 mr-1" />
                      {project.location}
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-sm text-gray-500">Capacity</span>
                    <p className="text-2xl font-semibold text-green-700">{project.capacity}</p>
                  </div>
                </div>

                {/* All Images Grid - Compact */}
                <div className="p-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {project.images.map((img, idx) => (
                      <div
                        key={idx}
                        className="relative overflow-hidden rounded-xl cursor-pointer group"
                        onClick={() => openModal(project, idx)}
                      >
                        <img
                          src={img}
                          alt={`${project.title} ${idx + 1}`}
                          className="w-full h-52 object-cover transition-transform group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-all">
                          <span className="text-white text-xs bg-black/60 px-4 py-1.5 rounded-lg">Click to View</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* INSTITUTIONAL & RESIDENTIAL */}
        {(activeTab === 'institutional' || activeTab === 'residential') && (
          <div className="space-y-12">
            {(activeTab === 'institutional' ? institutionalProjects : residentialProjects).map((proj, i) => (
              <div key={i} className="border border-gray-200 rounded-2xl overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-5/12">
                    <img 
                      src={proj.image} 
                      alt={proj.title} 
                      className="w-full h-80 md:h-full object-cover"
                    />
                  </div>
                  <div className="md:w-7/12 p-8">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">{proj.title}</h3>
                    {proj.capacity && <p className="text-xl font-medium text-green-700 mb-4">{proj.capacity}</p>}
                    <p className="text-gray-600 leading-relaxed">{proj.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* MODAL */}
      {selectedProject && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div className="relative max-w-5xl w-full" onClick={e => e.stopPropagation()}>
            
            <button
              onClick={closeModal}
              className="absolute -top-4 -right-4 bg-white p-3 rounded-full shadow-lg z-50"
            >
              <X size={28} />
            </button>

            <img
              src={selectedProject.images[currentImageIndex]}
              className="w-full max-h-[82vh] object-contain rounded-2xl"
              alt="Project"
            />

            {selectedProject.images.length > 1 && (
              <>
                <button onClick={prevImage} className="absolute left-4 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow">
                  <ChevronLeft size={28} />
                </button>
                <button onClick={nextImage} className="absolute right-4 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow">
                  <ChevronRight size={28} />
                </button>
              </>
            )}

            <div className="text-center text-white mt-4 text-lg">
              {selectedProject.title} — {selectedProject.capacity}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default IndustrialSolarShowcase;