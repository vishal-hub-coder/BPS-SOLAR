import React from 'react';
import { Cog, Clock, Shield, TrendingUp } from 'lucide-react';

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
    <section className="py-16 px-6 md:px-16 bg-gradient-to-r from-slate-900 to-blue-900">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text */}
          <div>
            <div className="mb-4">
              <span className="text-green-500 font-semibold tracking-wide text-sm uppercase">
                WHY CHOOSE BPS RENEWABLES?
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Building Trust Through Quality & Commitment
            </h2>
          </div>

          {/* Divider */}
          <div className="hidden lg:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 h-64 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>

          {/* Right Side - Feature Blocks */}
          <div className="grid grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="mb-4 flex justify-center">
                  <div className="w-16 h-16 rounded-full border-2 border-green-500 bg-white/10 flex items-center justify-center shadow-lg shadow-green-500/20">
                    <feature.icon size={32} className="text-white" />
                  </div>
                </div>
                <h4 className="text-lg font-bold text-white mb-2">{feature.title}</h4>
                <p className="text-gray-300 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
