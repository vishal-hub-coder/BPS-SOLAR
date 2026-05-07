import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from "react-helmet-async";

import Navbar from './components/Navbar'
import Footer from './components/Footer'

import About from './page/About'
import Services from './page/Services'
import Project from './page/Project'
import WhyUs from './page/WhyUs'
import Blog from './page/Blog'
import Home from './components/Home'
import ContactUS from './page/ContactUS'

const App = () => {
  const [isDark, setIsDark] = useState(false);

  const toggleDarkMode = () => setIsDark(!isDark);

  return (
    <div className={isDark ? 'dark' : ''}>
      <HelmetProvider>
      <BrowserRouter>
        <Navbar isDark={isDark} toggleDarkMode={toggleDarkMode} />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/project" element={<Project />} />
          <Route path="/why-us" element={<WhyUs />} />
          <Route path="/blog" element={<Blog />} />
          <Route path='/contact' element={<ContactUS/>}/>
        </Routes>

        {/* <Footer /> */}
      </BrowserRouter>
      </HelmetProvider>
    </div>
  )
}

export default App