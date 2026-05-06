import React from 'react'
import HeroSection from '../page/HeroSection'
import About from '../page/About'
import Services from '../page/Services'
import Project from '../page/Project'
import WhyUs from '../page/WhyUs'
import Blog from '../page/Blog'
import ContactUS from '../page/ContactUS'

const Home = () => {
  return (
    <div className="w-full overflow-x-hidden">
      <HeroSection/>
      <About/>
      <Services/>
      <Project/>
      <WhyUs/>
      <Blog/>
      <ContactUS/>
    </div>
  )
}

export default Home
