import heroImage from "../assets/HomePageFirst.jpeg";
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

        {/* Main H1 Heading */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4">
          Best Solar Company in{" "}
          <span className="text-yellow-400">Faridabad</span>
        </h1>

        {/* H2 Subheading */}
        <h2 className="text-xl md:text-2xl text-gray-200 max-w-3xl mb-6">
          Leading solar panel installation EPC company in Faridabad within 50 km radius.
          Affordable rooftop solar solutions for homes and industries in Haryana NCR.
        </h2>

        {/* CTA Buttons */}
        <div className="mt-6 flex flex-col sm:flex-row gap-4">
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-yellow-500 hover:bg-yellow-400 text-black font-semibold text-lg rounded-lg transition-colors duration-300 shadow-lg"
            aria-label="Get Free Solar Consultation"
          >
            Get Free Solar Consultation
          </a>
          <a
            href="/services"
            className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white hover:bg-white hover:text-black text-white font-semibold text-lg rounded-lg transition-all duration-300"
            aria-label="View Our Solar Services"
          >
            Our Solar Services
          </a>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;