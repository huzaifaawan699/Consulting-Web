import React, { useState } from 'react';
import { Transition } from '@headlessui/react';
import logo from '../assets/AJ.png';

const DropdownMenu = ({ isOpen, items, closeMenu }) => (
  <Transition
    show={isOpen}
    enter="transition ease-out duration-300"
    enterFrom="transform opacity-0 scale-95"
    enterTo="transform opacity-100 scale-100"
    leave="transition ease-in duration-150"
    leaveFrom="transform opacity-100 scale-100"
    leaveTo="transform opacity-0 scale-95"
    className="absolute mt-2 w-48 bg-white rounded-md shadow-lg z-50"
  >
    <div className="py-1">
      {items.map((item) => (
        <a
          key={item.href}
          href={item.href}
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-teal-500 hover:text-white transition-all duration-200"
          onClick={closeMenu}
        >
          {item.label}
        </a>
      ))}
    </div>
  </Transition>
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
      { href: "#blog", label: "Blog" },
      { href: "#single-post", label: "Single Post" },
    ],
  };

  const isMobile = window.innerWidth <= 768;

  return (
    <nav className="bg-teal-500 text-white p-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-16 w-16" />
        </div>

        {/* Navbar Links */}
        <div className="hidden md:flex space-x-12">
          <a href="#home" className="hover:text-gray-200 transition-all duration-200">Home</a>
          <a href="#services" className="hover:text-gray-200 transition-all duration-200">Services</a>
          <div
            className="relative"
            onMouseEnter={() => !isMobile && setDropdown('pages')}
            onMouseLeave={() => !isMobile && setDropdown(null)}
          >
            <button
              onClick={() => isMobile && handleDropdown('pages')}
              className="hover:text-gray-200 transition-all duration-200 focus:outline-none"
            >
              Pages
            </button>
            <DropdownMenu
              isOpen={dropdown === 'pages'}
              items={dropdownItems.pages}
              closeMenu={closeMobileMenu}
            />
          </div>
          <div
            className="relative"
            onMouseEnter={() => !isMobile && setDropdown('blog')}
            onMouseLeave={() => !isMobile && setDropdown(null)}
          >
            <button
              onClick={() => isMobile && handleDropdown('blog')}
              className="hover:text-gray-200 transition-all duration-200 focus:outline-none"
            >
              Blog
            </button>
            <DropdownMenu
              isOpen={dropdown === 'blog'}
              items={dropdownItems.blog}
              closeMenu={closeMobileMenu}
            />
          </div>
          <a href="#about" className="hover:text-gray-200 transition-all duration-200">About</a>
          <a href="#contact" className="hover:text-gray-200 transition-all duration-200">Contact Us</a>
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
        <Transition
          show={isOpen}
          enter="transition-transform transform ease-in-out duration-300"
          enterFrom="transform -translate-y-full scale-90 opacity-0"
          enterTo="transform translate-y-0 scale-100 opacity-100"
          leave="transition-transform transform ease-in-out duration-300"
          leaveFrom="transform translate-y-0 scale-100 opacity-100"
          leaveTo="transform -translate-y-full scale-90 opacity-0"
          className="fixed top-0 left-0 w-full sm:w-64 bg-white text-black z-50 h-full shadow-2xl overflow-auto"
        >
          <div className="relative p-6">
            <button
              onClick={closeMobileMenu}
              className="absolute top-4 right-4 text-black"
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
              <a href="#home" className="block text-lg text-gray-800 hover:bg-teal-200 transition-all duration-200" onClick={closeMobileMenu}>Home</a>
              <a href="#services" className="block text-lg text-gray-800 hover:bg-teal-200 transition-all duration-200" onClick={closeMobileMenu}>Services</a>
              <div className="relative">
                <button
                  onClick={() => handleDropdown('mobile-pages')}
                  className="block text-lg text-gray-800 w-full text-left hover:bg-teal-200 transition-all duration-200"
                >
                  Pages
                </button>
                <DropdownMenu
                  isOpen={dropdown === 'mobile-pages'}
                  items={dropdownItems.pages}
                  closeMenu={closeMobileMenu}
                />
              </div>
              <div className="relative">
                <button
                  onClick={() => handleDropdown('mobile-blog')}
                  className="block text-lg text-gray-800 w-full text-left hover:bg-teal-200 transition-all duration-200"
                >
                  Blog
                </button>
                <DropdownMenu
                  isOpen={dropdown === 'mobile-blog'}
                  items={dropdownItems.blog}
                  closeMenu={closeMobileMenu}
                />
              </div>
              <a href="#about" className="block text-lg text-gray-800 hover:bg-teal-200 transition-all duration-200" onClick={closeMobileMenu}>About</a>
              <a href="#contact" className="block text-lg text-gray-800 hover:bg-teal-200 transition-all duration-200" onClick={closeMobileMenu}>Contact Us</a>
            </div>
          </div>
        </Transition>
      </div>
    </nav>
  );
};

export default Navbar;
