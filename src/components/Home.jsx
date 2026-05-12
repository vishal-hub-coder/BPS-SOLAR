import React from 'react'
import HeroSection from '../page/HeroSection'
import About from '../page/About'
import Services from '../page/Services'
import Project from '../page/Project'
import WhyUs from '../page/WhyUs'
import Blog from '../page/Blog'
import { Helmet } from "react-helmet-async";
import ContactUS from '../page/ContactUS'

const Home = () => {
  return (
    <div className="w-full overflow-x-hidden">

      <Helmet>
        <title>BPS Solar | Best Solar Company in Faridabad</title>
        <meta
          name="description"
          content="Top solar EPC company in Faridabad providing rooftop solar installation within 50 km radius including Gurgaon & Delhi NCR."
        />
        <meta
          name="keywords"
          content="solar company Faridabad, BPS solar, rooftop solar NCR, solar installation Haryana"
        />
      </Helmet>

      <HeroSection/>
      <About/>
      <Services limit={3} />
      <Project limit={3} />
      <WhyUs limit={3} />
      <Blog limit={3} />
      <ContactUS/>
    </div>
  );
};

export default Home;