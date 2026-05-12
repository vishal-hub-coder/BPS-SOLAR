import React from 'react';
import { Link } from 'react-router-dom';
import logos from "../assets/Fina.jpeg";
import './Footer.css';

const Footer = () => {

  const navLinks = [
    { to: '/', label: 'HOME' },
    { to: '/about', label: 'ABOUT US' },
    { to: '/services', label: 'SERVICES' },
    { to: '/project', label: 'PROJECTS' },
    { to: '/gallery', label: 'GALLERY' },
    { to: '/blog', label: 'BLOG' },
    { to: '/faq', label: 'FAQ' },
    { to: '/contact', label: 'CONTACT' },
  ];

  return (
    <footer className="bg-[#0b1220] text-white pt-16 pb-6 mt-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Top Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 border-b border-white/10 pb-12">

          {/* Company Info */}
          <div>
            <img
              src={logos}
              alt="BPS Renewables Logo"
              className="h-20 mb-5 object-contain"
            />

            <p className="text-gray-300 leading-7 text-sm">
              BPS Renewables Pvt Ltd is a leading solar EPC company delivering
              reliable and cost-effective solar solutions across India.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-4 mt-6">

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-yellow-400 hover:text-black transition-all duration-300 flex items-center justify-center"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286z" />
                </svg>
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-yellow-400 hover:text-black transition-all duration-300 flex items-center justify-center"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12S0 5.446 0 12.073c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-yellow-400 hover:text-black transition-all duration-300 flex items-center justify-center"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.017 0C8.396 0 7.994.014 6.802.067 5.618.12 4.902.26 4.28.509c-.66.26-1.22.61-1.78 1.17-.56.56-.91 1.12-1.17 1.78C.99 4.129.85 4.845.697 6.029.644 7.221.63 7.623.63 11.244s.014 4.023.067 5.215z" />
                </svg>
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-yellow-400 hover:text-black transition-all duration-300 flex items-center justify-center"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814z" />
                </svg>
              </a>

            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-yellow-400">
              Quick Links
            </h3>

            <ul className="space-y-4">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.to}
                    className="text-gray-300 hover:text-yellow-400 transition-all duration-300 text-sm tracking-wide"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-yellow-400">
              Services
            </h3>

            <ul className="space-y-4 text-sm text-gray-300">
              <li className="hover:text-yellow-400 transition-all duration-300 cursor-pointer">
                Solar EPC Solutions
              </li>

              <li className="hover:text-yellow-400 transition-all duration-300 cursor-pointer">
                Rooftop Solar
              </li>

              <li className="hover:text-yellow-400 transition-all duration-300 cursor-pointer">
                Net Metering & Approvals
              </li>

              <li className="hover:text-yellow-400 transition-all duration-300 cursor-pointer">
                Operations & Maintenance
              </li>

              <li className="hover:text-yellow-400 transition-all duration-300 cursor-pointer">
                Ground Mounted Plants
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-yellow-400">
              Contact Us
            </h3>

            <div className="space-y-6">

              {/* Address */}
              <div className="flex items-start gap-3">
                <div className="mt-1 text-yellow-400">
                  📍
                </div>

                <p className="text-gray-300 text-sm leading-7">
                  BPS RENEWABLES PRIVATE LIMITED <br />
                  RE-8, 2ND FLOOR SEC-69 <br />
                  BALLABGARH <br />
                  JDM BUSINESS TOWER <br />
                 
                  FARIDABAD-121004 <br />
                  HARYANA
                </p>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-3">
                <div className="text-yellow-400">
                  📞
                </div>

                <p className="text-gray-300 text-sm leading-7">
                  +91-9015901566 <br />
                  +91-7011800332
                </p>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3">
                <div className="text-yellow-400">
                  ✉️
                </div>

                <p className="text-gray-300 text-sm break-all">
                  info@bpskiransolar.com
                </p>
              </div>

              {/* Landline */}
              <div className="flex items-start gap-3">
                <div className="text-yellow-400">
                  ☎️
                </div>

                <p className="text-gray-300 text-sm">
                  0129-4086317
                </p>
              </div>

            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8">

          <p className="text-gray-400 text-sm text-center md:text-left">
            © 2024 BPS Renewables Pvt Ltd. All Rights Reserved.
          </p>

          <div className="flex items-center gap-6">
            <a
              href="/privacy"
              className="text-sm text-gray-400 hover:text-yellow-400 transition-all duration-300"
            >
              Privacy Policy
            </a>

            <a
              href="/terms"
              className="text-sm text-gray-400 hover:text-yellow-400 transition-all duration-300"
            >
              Terms & Conditions
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;