import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'What We Do', to: '/what-we-do-1' },
    { name: 'About Us', to: '/about-us' },
    { name: 'Visit the Village', to: '/visit-the-village' },
    { name: 'Get Involved', to: '/get-involved' },
    { name: 'News & Media', to: '/new-folder' },
  ];

  return (
    <header className="static z-50 bg-[#fcfcfc]">
      <div className="max-w-[1200px] mx-auto px-[34px] py-[5px] mt-[10px] mb-[10px]">
        <div className="flex justify-between items-center">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center">
              <img 
                src="/images/Agahozo_Shalom_Logo.png" 
                alt="Agahozo-Shalom Youth Village" 
                className="w-[164px] h-auto object-contain"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.to} 
                className="text-[14.5px] text-asyv-green font-normal mx-[6.5px] py-[9px] hover:opacity-80 transition-opacity font-sans"
              >
                {link.name}
              </Link>
            ))}
            {/* CTA Buttons */}
            <div className="ml-[12.5px] flex space-x-[11px]">
              <Button 
                href="https://fundraise.asyv.org/campaign/759445/donate"
                variant="outline"
                className="h-[47px] px-[17px] text-[15.5px]"
              >
                Donate
              </Button>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-red-700 focus:outline-none p-2"
              aria-expanded={isMobileMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {/* Hamburger Icon */}
              <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg absolute w-full left-0">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                className="block px-3 py-3 text-base font-semibold text-gray-800 hover:bg-gray-50 hover:text-red-700 rounded-md transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 px-3">
              <Button 
                href="https://fundraise.asyv.org/campaign/759445/donate" 
                target="_blank" 
                rel="noopener noreferrer"
                variant="primary"
                className="w-full justify-center text-lg py-3"
              >
                Donate
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
