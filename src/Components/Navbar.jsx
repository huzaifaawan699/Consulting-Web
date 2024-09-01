import React, { useState } from 'react';
import logo from '../assets/logos.jpg';

const DropdownMenu = ({ isOpen, items, closeMenu }) => (
  isOpen && (
    <div className="absolute mt-2 w-48 bg-white rounded-md shadow-lg z-50">
      <div className="py-1">
        {items.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="block px-4 py-2 text-sm text-black hover:text-black hover:bg-gray-400"
            onClick={closeMenu}
          >
            {item.label}
          </a>
        ))}
      </div>
    </div>
  )
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdown, setDropdown] = useState(null);

  const handleDropdown = (name) => {
    setDropdown(dropdown === name ? null : name);
  };

  const closeMobileMenu = () => {
    setIsOpen(false);
    setDropdown(null);
  };

  const dropdownItems = {
    pages: [
      { href: "#team", label: "Team" },
      { href: "#pricing", label: "Pricing" },
      { href: "#faq", label: "FAQ" },
    ],
    blog: [
      { href: "#single-post", label: "Single Post" },
    ],
  };

  const isMobile = window.innerWidth <= 768;

  return (
    <nav className="bg-black text-white p-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-16 w-17" />
        </div>

        {/* Navbar Links */}
        <div className="hidden md:flex space-x-12">
          <a href="#home" className="hover:text-white relative">
            <span className="hover:underline transition-all duration-200 after:content-[''] after:block after:w-full after:h-1 after:bg-white after:absolute after:left-0 after:bottom-0 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left">
              Home
            </span>
          </a>
          <a href="#services" className="hover:text-white relative">
            <span className="hover:underline transition-all duration-200 after:content-[''] after:block after:w-full after:h-1 after:bg-white after:absolute after:left-0 after:bottom-0 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left">
              Services
            </span>
          </a>
          <div
            className="relative group"
            onMouseEnter={() => !isMobile && setDropdown('pages')}
            onMouseLeave={() => !isMobile && setDropdown(null)}
          >
            <button
              onClick={() => isMobile && handleDropdown('pages')}
              className="flex items-center space-x-1 hover:text-white transition-all duration-200 focus:outline-none relative"
            >
              <span className="hover:underline after:content-[''] after:block after:w-full after:h-1 after:bg-white after:absolute after:left-0 after:bottom-0 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left">
                Pages
              </span>
              {isMobile ? (
                <span className="text-white">{dropdown === 'pages' ? '^' : '+'}</span>
              ) : (
                <span className="text-white">+</span>
              )}
            </button>
            <DropdownMenu
              isOpen={dropdown === 'pages'}
              items={dropdownItems.pages}
              closeMenu={closeMobileMenu}
            />
          </div>
          <div
            className="relative group"
            onMouseEnter={() => !isMobile && setDropdown('blog')}
            onMouseLeave={() => !isMobile && setDropdown(null)}
          >
            <button
              onClick={() => isMobile && handleDropdown('blog')}
              className="flex items-center space-x-1 hover:text-white transition-all duration-200 focus:outline-none relative"
            >
              <span className="hover:underline after:content-[''] after:block after:w-full after:h-1 after:bg-white after:absolute after:left-0 after:bottom-0 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left">
                Blog
              </span>
              {isMobile ? (
                <span className="text-white">{dropdown === 'blog' ? '^' : '+'}</span>
              ) : (
                <span className="text-white">+</span>
              )}
            </button>
            <DropdownMenu
              isOpen={dropdown === 'blog'}
              items={dropdownItems.blog}
              closeMenu={closeMobileMenu}
            />
          </div>
          <a href="#about" className="hover:text-white relative">
            <span className="hover:underline transition-all duration-200 after:content-[''] after:block after:w-full after:h-1 after:bg-white after:absolute after:left-0 after:bottom-0 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left">
              About
            </span>
          </a>
          <a href="#contact" className="hover:text-white relative">
            <span className="hover:underline transition-all duration-200 after:content-[''] after:block after:w-full after:h-1 after:bg-white after:absolute after:left-0 after:bottom-0 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left">
              Contact Us
            </span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isOpen && (
          <div
            onClick={closeMobileMenu}
            className="fixed inset-0 bg-black opacity-50 z-40"
          ></div>
        )}

        {/* Mobile Menu */}
        {isOpen && (
          <div className="fixed top-0 left-0 w-full sm:w-64 bg-black text-white z-50 h-full shadow-2xl overflow-auto">
            <div className="relative p-6">
              <button
                onClick={closeMobileMenu}
                className="absolute top-4 right-4 text-white"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
              {/* Logo in Mobile Menu */}
              <div className="flex justify-center mb-6">
                <img src={logo} alt="Logo" className="h-16 w-16" />
              </div>
              <div className="space-y-4">
                <a href="#home" className="block text-lg text-white hover:bg-gray-300" onClick={closeMobileMenu}>Home</a>
                <a href="#services" className="block text-lg text-white hover:bg-gray-300" onClick={closeMobileMenu}>Services</a>
                <div className="relative">
                  <button
                    onClick={() => handleDropdown('pages')}
                    className="block w-full text-lg text-white hover:bg-gray-300 flex items-center justify-between"
                  >
                    Pages
                    <span>{dropdown === 'pages' ? '^' : '+'}</span>
                  </button>
                  <DropdownMenu
                    isOpen={dropdown === 'pages'}
                    items={dropdownItems.pages}
                    closeMenu={closeMobileMenu}
                  />
                </div>
                <div className="relative">
                  <button
                    onClick={() => handleDropdown('blog')}
                    className="block w-full text-lg text-white hover:bg-gray-300 flex items-center justify-between"
                  >
                    Blog
                    <span>{dropdown === 'blog' ? '^' : '+'}</span>
                  </button>
                  <DropdownMenu
                    isOpen={dropdown === 'blog'}
                    items={dropdownItems.blog}
                    closeMenu={closeMobileMenu}
                  />
                </div>
                <a href="#about" className="block text-lg text-white hover:bg-gray-300" onClick={closeMobileMenu}>About</a>
                <a href="#contact" className="block text-lg text-white hover:bg-gray-300" onClick={closeMobileMenu}>Contact Us</a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
