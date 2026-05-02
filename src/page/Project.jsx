import React from 'react';
import { MapPin, ChevronRight } from 'lucide-react';

const projects = [
  {
    title: 'Rooftop Solar Plant',
    capacity: '500 kW',
    location: 'Mumbai, Maharashtra',
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=800',
  },
  {
    title: 'Industrial Solar Setup',
    capacity: '1 MW',
    location: 'Ahmedabad, Gujarat',
    image: 'https://images.unsplash.com/photo-1584277261846-c6a1672ed979?q=80&w=800',
  },
  {
    title: 'Commercial Solar System',
    capacity: '250 kW',
    location: 'Bangalore, Karnataka',
    image: 'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?q=80&w=800',
  },
  {
    title: 'Ground Mounted Solar Plant',
    capacity: '2 MW',
    location: 'Jaipur, Rajasthan',
    image: 'https://images.unsplash.com/photo-1592833159155-c62df1b65634?q=80&w=800',
  },
];

const OurProjects = () => {
  return (
    <section className="py-16 px-6 md:px-16 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          <div>
            <span className="text-green-500 font-semibold tracking-wide text-sm uppercase">
              OUR PROJECTS
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2">
              Powering Industries. Energizing Future.
            </h2>
          </div>
          <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 hover:border-gray-400 transition-colors">
            VIEW ALL PROJECTS →
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-2">{project.title}</h3>
                <p className="text-2xl font-bold text-gray-900 mb-2">{project.capacity}</p>
                <div className="flex justify-between items-center">
                  <div className="flex items-center text-gray-600 text-sm">
                    <MapPin size={16} className="text-green-500 mr-1" />
                    {project.location}
                  </div>
                  <ChevronRight size={20} className="text-yellow-500" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurProjects;