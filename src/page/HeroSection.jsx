import heroImage from "../assets/heroSectionImage.jpg";
import { Helmet } from "react-helmet-async";

const HeroSection = () => {
  return (
    <section
      className="relative w-full min-h-screen flex items-center overflow-hidden pt-16 md:pt-20"
      aria-label="Solar Panel Installation Hero Section Faridabad BPS Solar"
    >

      {/* SEO Meta (safe placement inside component) */}
      <Helmet>
        <title>Best Solar Company in Faridabad | BPS Solar EPC Services</title>
        <meta
          name="description"
          content="Leading solar panel installation company in Faridabad within 50 km radius. Affordable rooftop solar solutions for homes and industries in Haryana NCR."
        />
        <meta
          name="keywords"
          content="solar company Faridabad, BPS solar, rooftop solar NCR, solar installation Haryana, solar EPC company near me"
        />
      </Helmet>

      {/* Background Image */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30"></div>

      {/* Content Wrapper */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20">

        {/* SEO-friendly keyword-rich label */}
        <span
          className="text-green-400 tracking-widest text-xs sm:text-sm md:text-base"
          title="Solar Energy Solutions Faridabad Haryana"
        >
          POWERING A SUSTAINABLE TOMORROW IN FARIDABAD & NCR
        </span>

        {/* H1 SEO FIX (IMPORTANT) */}
        <h1
          className="mt-4 text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-3xl"
          title="Best Solar Panel Installation Company in Faridabad Haryana"
        >
          Engineering Clean Energy Infrastructure with BPS Solar
        </h1>

        <p className="mt-4 text-gray-300 text-sm sm:text-base md:text-lg max-w-xl leading-relaxed">
          End-to-End solar EPC solutions for industries, businesses and homes across
          Faridabad, Gurgaon and Delhi NCR within 50 km radius.
        </p>

        {/* Buttons */}
        <div className="mt-6 flex flex-col sm:flex-row gap-4">

          {/* SEO CTA Button */}
          <button
            className="w-full sm:w-auto bg-yellow-400 text-black px-6 py-3 rounded-md font-semibold hover:bg-green-500 hover:scale-105 transition duration-300"
            title="Get Free Solar Consultation in Faridabad"
          >
            GET FREE SOLAR CONSULTATION
          </button>

          <button
            className="w-full sm:w-auto border border-white px-6 py-3 rounded-md font-semibold hover:bg-white hover:text-black hover:scale-105 transition duration-300"
            title="View Solar Installation Projects Haryana NCR"
          >
            View Our Solar Projects
          </button>

        </div>

      </div>
    </section>
  );
};

export default HeroSection;