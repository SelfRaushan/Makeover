import React, { useState } from 'react';
import Logo from "../assets/image/logo-bg.png";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-transparent shadow-md z-50">
      <div className="container mx-auto flex items-center justify-between py-4 px-5 md:px-10">
        {/* Logo */}
        <a href="/" className="flex items-center">
          <img src={Logo} alt="Logo" className="h-10 w-auto" />
          {/*<span className="ml-2 font-semibold text-lg text-pink-600">Makeover</span>*/}
        </a>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
          {['Home', 'About', 'Services', 'Portfolio', 'Booking', 'Contact'].map(page => (
            <li key={page}>
              <a href={`#${page.toLowerCase()}`} className="hover:text-pink-600 transition">{page}</a>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          <svg className="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
            {isMobileMenuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M3 12h18M3 6h18M3 18h18" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <ul className="md:hidden bg-white shadow-md py-4 px-5 space-y-4 text-center font-medium text-gray-700">
          {['Home', 'About', 'Services', 'Portfolio', 'Booking', 'Contact'].map(page => (
            <li key={page}>
              <a href={`#${page.toLowerCase()}`} onClick={() => setMobileMenuOpen(false)} className="block hover:text-pink-600 transition">{page}</a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
