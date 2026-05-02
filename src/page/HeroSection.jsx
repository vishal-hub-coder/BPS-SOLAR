import React from "react";
import heroImage from "../assets/heroSectionImage.jpg";

const HeroSection = () => {
  return (
    <div
      className="relative h-screen w-full bg-cover bg-center flex items-center"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/30"></div>

      {/* Content */}
      <div className="relative z-10 px-6 md:px-16 max-w-2xl text-white animate-fadeInLeft">
        
        <span className="text-green-400 tracking-widest text-sm md:text-base">
          POWERING A SUSTAINABLE TOMORROW
        </span>

        <h1 className="mt-4 text-3xl md:text-5xl font-bold leading-tight">
          Engineering Clean Energy Infrastructure
        </h1>

        <p className="mt-4 text-gray-300 text-sm md:text-lg leading-relaxed">
          End-to-End solar EPC Solutions for industries, businesses and institutes across India
        </p>

        {/* Buttons */}
        <div className="mt-6 flex flex-col sm:flex-row gap-4">
          <button className="bg-yellow-400 text-black px-6 py-3 rounded-md font-semibold hover:bg-green-500 hover:scale-105 transition duration-300">
            GET FREE CONSULTATION
          </button>

          <button className="border border-white px-6 py-3 rounded-md font-semibold hover:bg-white hover:text-black hover:scale-105 transition duration-300">
            View Our Projects
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;