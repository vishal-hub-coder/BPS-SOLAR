import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';   // Changed Link to NavLink
import { Menu, X, Phone } from 'lucide-react';
import logos from "../assets/Fina.jpeg";

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
    { to: '/project', label: 'PROJECTS' },
    { to: '/gallery', label: 'GALLERY' },
    { to: '/blog', label: 'BLOG' },
    { to: '/faq', label: 'FAQ' },
    { to: '/contact', label: 'CONTACT' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-lg border-b border-gray-200 w-full">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20 w-full">
          
          {/* Logo */}
          <div className="flex-shrink-0">
            <NavLink to="/" aria-label="BPS Solar Home">
              <img src={logos} alt="BPS Renewables Logo" className="h-16 md:h-20" />
            </NavLink>
          </div>

          {/* Desktop Nav Links - Active Menu Added */}
          <div className="hidden md:flex flex-1 justify-center items-center space-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `text-gray-700 hover:text-green-600 font-medium transition-colors duration-300 relative group pb-1
                   ${isActive ? 'text-green-600 font-semibold' : ''}`
                }
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 h-0.5 bg-yellow-500 transition-all duration-300 w-0 group-hover:w-full"></span>
                
                {/* Active Underline */}
                {({ isActive }) => (
                  <span 
                    className={`absolute -bottom-1 left-0 h-0.5 bg-green-600 transition-all duration-300 ${isActive ? 'w-full' : 'w-0'}`}
                  />
                )}
              </NavLink>
            ))}
          </div>

          {/* Right Side: Phone and CTA Button (Desktop) */}
          <div className="hidden md:flex md:items-center md:space-x-4 ml-auto">
            <div className="flex items-center space-x-2">
              <Phone className="h-5 w-5 text-gray-700" />
              <span className="text-gray-700 font-medium">+91-9015901566</span>
            </div>
            <NavLink
              to="/contact"
              className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-4 py-2 rounded-lg font-bold hover:from-yellow-600 hover:to-orange-600 transition-all duration-300 shadow-md hover:shadow-lg whitespace-nowrap"
            >
              GET A QUOTE
            </NavLink>
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
            className="fixed inset-0 bg-black/50 z-40 md:hidden"
            onClick={toggleMenu}
          ></div>
        )}

        {/* Mobile Menu - Active Style Added */}
        <div
          className={`fixed left-0 top-0 h-full w-64 max-w-[80vw] bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-out ${
            isOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className="flex justify-between items-center p-4 border-b border-gray-100">
            <span className="text-lg font-bold text-green-600">Menu</span>
            <button onClick={toggleMenu} className="p-2 rounded-full text-gray-700 hover:text-green-600 hover:bg-gray-100">
              <X size={24} />
            </button>
          </div>
          
          <div className="px-4 py-4 space-y-1 overflow-y-auto h-[calc(100vh-80px)]">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block text-gray-700 hover:text-green-600 font-medium py-3 px-3 rounded-lg hover:bg-gray-50 transition-all duration-300
                   ${isActive ? 'bg-green-50 text-green-700 font-semibold border-l-4 border-green-600' : ''}`
                }
              >
                {link.label}
              </NavLink>
            ))}

            <div className="flex items-center space-x-2 py-3 px-3">
              <Phone className="h-5 w-5 text-green-600" />
              <span className="text-gray-700 font-medium">+91-9015901566</span>
            </div>

            <NavLink
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="block w-full bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-4 py-3 rounded-lg font-bold text-center hover:from-yellow-600 hover:to-orange-600 transition-all duration-300 shadow-md"
            >
              GET A QUOTE
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;