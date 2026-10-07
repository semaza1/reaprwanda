import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { 
      name: 'About Us', 
      to: '',
      subLinks: [
        { name: 'Philosophy', to: '/philosophy' },
        { name: 'History', to: '/history' },
        { name: 'Team', to: '/team' }
      ]
    },
    { name: 'Blog', to: '/blog' },
    { 
      name: 'Strategies', 
      to: '',
      subLinks: [
        { name: 'Education Enrichment', to: '/education-enrichment' },
        { name: 'Community Resilience', to: '/community-resilience' }
      ]
    },
    { 
      name: 'Impact', 
      to: '',
      subLinks: [
        { name: 'Accomplishments', to: '/accomplishments' },
        { name: 'Annual Reports', to: '/annual-reports' }
      ]
    },
    { name: 'Gallery', to: '/gallery' },
    { name: 'Join Us', to: '/join-us' },  
    { name: 'Contact', to: '/contact' },
  ];

  return (
    <header className="static z-50 bg-[#fcfcfc]">
      <div className="max-w-[1200px] mx-auto px-[34px] py-[5px] mt-[10px] mb-[10px]">
        <div className="flex justify-between items-center">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center">
              <img 
                src="/images/REAP_Logo.webp" 
                alt="Agahozo-Shalom Youth Village" 
                className="w-[164px] h-[150px] object-contain"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                <Link 
                  to={link.to} 
                  className="text-[14.5px] text-reap-green font-normal mx-[6.5px] py-[9px] hover:opacity-80 transition-opacity font-sans flex items-center gap-1"
                >
                  {link.name}
                  {link.subLinks && (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </Link>
                {/* Dropdown Menu */}
                {link.subLinks && (
                  <div className="absolute left-0 top-full pt-2 hidden group-hover:block w-auto min-w-[220px] z-50">
                    <div className="bg-white shadow-lg border border-gray-100 rounded-md py-2">
                      {link.subLinks.map((subLink) => (
                        <Link
                          key={subLink.name}
                          to={subLink.to}
                          className="block px-4 py-2 text-[14.5px] text-reap-green hover:bg-gray-50 hover:text-reap-yellow transition-colors font-sans whitespace-nowrap"
                        >
                          {subLink.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
            {/* CTA Buttons */}
            <div className="ml-[12.5px] flex space-x-[11px]">
              <Button 
                href="/donate"
                variant="outline"
                className="h-[40px] px-[15px] text-[15px]"
              >
                Donate
              </Button>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden lg:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-reap-yellow focus:outline-none p-2"
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
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg absolute w-full left-0 z-50">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <div key={link.name}>
                <Link
                  to={link.to}
                  className="block px-3 py-3 text-base font-semibold text-gray-800 hover:bg-gray-50 hover:text-reap-yellow rounded-md transition-colors"
                  onClick={() => !link.subLinks && setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
                {link.subLinks && (
                  <div className="pl-6 space-y-1 border-l-2 border-gray-100 ml-4 mb-2">
                    {link.subLinks.map((subLink) => (
                      <Link
                        key={subLink.name}
                        to={subLink.to}
                        className="block px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-reap-yellow rounded-md transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {subLink.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-4 px-3">
              <Button 
                href="/donate" 
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
