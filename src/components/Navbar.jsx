import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Zap, Menu, X, Phone } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { to: '/', label: 'HOME' },
    { to: '/about', label: 'ABOUT US' },
    { to: '/services', label: 'SERVICES' },
    { to: '/projects', label: 'PROJECTS' },
    { to: '/why-us', label: 'WHY US' },
    { to: '/blog', label: 'BLOG' },
    { to: '/contact', label: 'CONTACT' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-lg border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-20">
          {/* Logo */}
          <div className="flex justify-start">
            <div className="flex items-center space-x-3">
              <Zap className="h-10 w-10 text-green-500" />
              <Link
                to="/"
                className="text-2xl md:text-3xl font-bold text-gray-800 hover:text-green-600 transition-colors tracking-wide"
              >
                BPS Renewables Pvt Ltd
              </Link>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <div className="flex-1 flex justify-center hidden md:flex">
            <div className="flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-gray-700 hover:text-green-600 font-medium transition-colors duration-300 relative group"
                >
                  {link.label}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-yellow-500 transition-all duration-300 ${link.label === 'HOME' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                </Link>
              ))}
            </div>
          </div>

          {/* Right Side: Phone and CTA Button */}
          <div className="flex justify-end hidden md:flex">
            <div className="flex flex-col items-end space-y-2">
              <div className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-gray-700" />
                <span className="text-gray-700 font-medium">+91 99999 12345</span>
              </div>
              <Link
                to="/contact"
                className="bg-yellow-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-yellow-600 transition-colors duration-300 shadow-md hover:shadow-lg"
              >
                GET A QUOTE
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex justify-end">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md text-gray-700 hover:text-green-600 hover:bg-gray-100 transition-colors duration-300"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white shadow-lg border-t border-gray-200">
            <div className="px-4 py-4 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="block text-gray-700 hover:text-green-600 font-medium py-2 border-b border-gray-200 last:border-b-0 transition-colors duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                  {link.label === 'HOME' && <span className="block w-full h-0.5 bg-yellow-500 mt-1"></span>}
                </Link>
              ))}
              <div className="flex items-center space-x-2 py-2">
                <Phone className="h-5 w-5 text-gray-700" />
                <span className="text-gray-700 font-medium">+91 99999 12345</span>
              </div>
              <Link
                to="/contact"
                className="block w-full bg-yellow-500 text-white px-6 py-3 rounded-lg font-bold text-center hover:bg-yellow-600 transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                GET A QUOTE
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;