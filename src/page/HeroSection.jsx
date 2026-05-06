import heroImage from "../assets/heroSectionImage.jpg";

const HeroSection = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center overflow-hidden pt-16 md:pt-20">
      
      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30"></div>

      {/* Content Wrapper */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
        
        <span className="text-green-400 tracking-widest text-xs sm:text-sm md:text-base">
          POWERING A SUSTAINABLE TOMORROW
        </span>

        <h1 className="mt-4 text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-3xl">
          Engineering Clean Energy Infrastructure
        </h1>

        <p className="mt-4 text-gray-300 text-sm sm:text-base md:text-lg max-w-xl leading-relaxed">
          End-to-End solar EPC Solutions for industries, businesses and institutes across India
        </p>

        {/* Buttons */}
        <div className="mt-6 flex flex-col sm:flex-row gap-4">
          <button className="w-full sm:w-auto bg-yellow-400 text-black px-6 py-3 rounded-md font-semibold hover:bg-green-500 hover:scale-105 transition duration-300">
            GET FREE CONSULTATION
          </button>

          <button className="w-full sm:w-auto border border-white px-6 py-3 rounded-md font-semibold hover:bg-white hover:text-black hover:scale-105 transition duration-300">
            View Our Projects
          </button>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;