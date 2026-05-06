import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import logos from "../assets/logos.jpeg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-lg border-b border-gray-200 w-full">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20 w-full">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/">
              <img src={logos} alt="BPS Renewables Logo" className="h-16 md:h-20" />
            </Link>
          </div>

          {/* Desktop Nav Links */}
       <div className="hidden md:flex flex-1 justify-center items-center space-x-8">
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

          {/* Right Side: Phone and CTA Button (Desktop) */}
          <div className="hidden md:flex md:items-center md:space-x-4 ml-auto">
            <div className="flex items-center space-x-2">
              <Phone className="h-5 w-5 text-gray-700" />
              <span className="text-gray-700 font-medium">+91 99999 12345</span>
            </div>
            <Link
              to="/contact"
              className="bg-yellow-500 text-white px-4 py-2 rounded-lg font-bold hover:bg-yellow-600 transition-colors duration-300 shadow-md hover:shadow-lg whitespace-nowrap"
            >
              GET A QUOTE
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md text-gray-700 hover:text-green-600 hover:bg-gray-100 transition-colors duration-300"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={toggleMenu}
          ></div>
        )}

        {/* Mobile Menu */}
        <div
          className={`fixed left-0 top-0 h-full w-56 max-w-[75vw] bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
            isOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className="flex justify-end p-4">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md text-gray-700 hover:text-green-600 hover:bg-gray-100 transition-colors duration-300"
            >
              <X size={24} />
            </button>
          </div>
          <div className="px-4 py-4 space-y-4 overflow-y-auto">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="block text-gray-700 hover:text-green-600 font-medium py-2 border-b border-gray-200 last:border-b-0 transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex items-center space-x-2 py-2">
              <Phone className="h-5 w-5 text-gray-700" />
              <span className="text-gray-700 font-medium">+91 99999 12345</span>
            </div>
            <Link
              to="/contact"
              className="block w-full bg-yellow-500 text-white px-4 py-2 rounded-lg font-bold text-center hover:bg-yellow-600 transition-colors duration-300"
              onClick={() => setIsOpen(false)}
            >
              GET A QUOTE
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;