import React from 'react';
import { Cog, Clock, Shield, TrendingUp } from 'lucide-react';
import { Helmet } from "react-helmet-async";

const features = [
  {
    title: "Engineering Excellence",
    description: "Cutting-edge design and engineering solutions for optimal solar performance.",
    icon: Cog,
  },
  {
    title: "On-Time Delivery",
    description: "Reliable project timelines with guaranteed completion within agreed schedules.",
    icon: Clock,
  },
  {
    title: "Premium Quality Components",
    description: "Only top-tier solar panels and components from trusted manufacturers.",
    icon: Shield,
  },
  {
    title: "High ROI Solutions",
    description: "Maximize your return on investment with efficient and cost-effective systems.",
    icon: TrendingUp,
  },
];

const WhyChooseUs = () => {
  return (
    <section
      className="py-16 px-6 md:px-16 bg-gradient-to-r from-slate-900 to-blue-900"
      aria-label="Why Choose BPS Solar Company Faridabad NCR"
    >

      {/* SEO Meta (section level boost) */}
      <Helmet>
        <meta
          name="description"
          content="Why choose BPS Solar in Faridabad? Trusted solar EPC company offering high ROI solar installation within 50 km radius including Gurgaon and Delhi NCR."
        />
        <meta
          name="keywords"
          content="best solar company Faridabad, BPS solar EPC, solar installation Haryana, rooftop solar NCR, solar ROI solutions"
        />
      </Helmet>

      <div className="max-w-7xl mx-auto">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Side - Text */}
          <div>
            <div className="mb-4">
              <span
                className="text-green-500 font-semibold tracking-wide text-sm uppercase"
                title="Trusted Solar EPC Company Faridabad Haryana"
              >
                WHY CHOOSE BPS SOLAR & RENEWABLES FARIDABAD
              </span>
            </div>

            {/* SEO H2 FIX */}
            <h2
              className="text-3xl md:text-4xl font-bold text-white mb-6"
              title="Best Solar EPC Company in Faridabad NCR"
            >
              Building Trust Through Quality Solar Solutions & Commitment
            </h2>

            {/* Extra SEO contextual paragraph (hidden intent boost) */}
            <p className="text-gray-300 text-sm md:text-base">
              BPS Solar provides premium solar panel installation services within
              50 km radius of Faridabad including Gurgaon, Noida and Delhi NCR,
              focusing on high ROI and long-term energy savings.
            </p>
          </div>

          {/* Divider */}
          <div className="hidden lg:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 h-64 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>

          {/* Right Side - Feature Blocks */}
          <div className="grid grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="text-center"
                title={`${feature.title} - BPS Solar Faridabad`}
              >
                <div className="mb-4 flex justify-center">
                  <div className="w-16 h-16 rounded-full border-2 border-green-500 bg-white/10 flex items-center justify-center shadow-lg shadow-green-500/20">
                    <feature.icon size={32} className="text-white" />
                  </div>
                </div>

                <h4 className="text-lg font-bold text-white mb-2">
                  {feature.title}
                </h4>

                <p className="text-gray-300 text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;