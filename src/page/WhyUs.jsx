import React from 'react';
import { MessageSquare, Cog, ShoppingCart, Wrench, CheckCircle } from 'lucide-react';
import { Helmet } from "react-helmet-async";

const steps = [
  {
    number: '01',
    title: 'Consultation',
    description: 'Initial assessment and requirement gathering to understand your energy needs.',
    icon: MessageSquare,
  },
  {
    number: '02',
    title: 'Design & Engineering',
    description: 'Customized system design and engineering solutions tailored to your site.',
    icon: Cog,
  },
  {
    number: '03',
    title: 'Procurement',
    description: 'Sourcing and procurement of high-quality solar components and materials.',
    icon: ShoppingCart,
  },
  {
    number: '04',
    title: 'Installation',
    description: 'Professional installation by certified technicians with quality assurance.',
    icon: Wrench,
  },
  {
    number: '05',
    title: 'Commissioning & Support',
    description: 'System testing, commissioning, and ongoing maintenance support.',
    icon: CheckCircle,
  },
];

const OurProcess = () => {
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

        {/* Section Heading */}
        <div className="mb-12">
          <span
            className="text-green-600 font-semibold tracking-wide text-sm uppercase"
            title="Solar EPC Process Faridabad Haryana"
          >
            OUR SOLAR EPC PROCESS FARIDABAD
          </span>

          {/* SEO H2 Fix */}
          <h2
            className="text-3xl md:text-4xl font-bold text-gray-800 mt-2"
            title="Solar Panel Installation Process in Faridabad NCR"
          >
            From Concept to Commissioning – Solar Execution Flow
          </h2>

          {/* Context paragraph for SEO */}
          <p className="text-gray-600 mt-3 max-w-2xl">
            BPS Solar follows a structured EPC workflow for solar panel installation
            across Faridabad, Gurgaon and Delhi NCR within a 50 km service radius,
            ensuring quality and efficiency at every step.
          </p>
        </div>

        {/* Timeline */}
        <div className="flex flex-col md:flex-row items-center justify-center">

          {steps.map((step, index) => (
            <div key={index} className="flex flex-col md:flex-row items-center">

              {/* Step */}
              <div
                className="flex flex-col items-center text-center mb-8 md:mb-0"
                title={`${step.title} - Solar EPC Step BPS Solar`}
              >
                <div className="w-20 h-20 rounded-full border-4 border-green-600 bg-white shadow-lg flex items-center justify-center mb-4">
                  <step.icon size={32} className="text-green-600" />
                </div>

                <span className="text-green-600 font-bold text-lg mb-2">
                  {step.number}
                </span>

                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  {step.title}
                </h3>

                <p className="text-gray-600 text-sm max-w-xs">
                  {step.description}
                </p>
              </div>

              {/* Connector */}
              {index < steps.length - 1 && (
                <div className="flex items-center md:flex-col">

                  <div className="hidden md:block w-px h-16 border-l-2 border-dotted border-gray-300"></div>

                  <div className="md:hidden w-16 h-px border-t-2 border-dotted border-gray-300"></div>

                  <div className="w-3 h-3 bg-yellow-500 rounded-full shadow-sm"></div>

                  <div className="hidden md:block w-px h-16 border-l-2 border-dotted border-gray-300"></div>

                  <div className="md:hidden w-16 h-px border-t-2 border-dotted border-gray-300"></div>

                </div>
              )}

            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default OurProcess;