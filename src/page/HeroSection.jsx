import heroImage from "../assets/HomePageFirst.jpeg";

const HeroSection = () => {
  return (
    <section className="w-full pt-20 bg-black">

      <img
        src={heroImage}
        alt="Hero"
        className="w-full h-auto object-contain"
      />

    </section>
  );
};

export default HeroSection;