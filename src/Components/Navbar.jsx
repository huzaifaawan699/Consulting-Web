import React, { useState } from 'react';
import { Transition } from '@headlessui/react';
import logo from '../assets/AJ.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdown, setDropdown] = useState('');

  const handleDropdown = (name) => {
    setDropdown(dropdown === name ? '' : name);
  };

  return (
    <nav className="bg-teal-400 text-white p-4 shadow-2xl">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-30 w-20" />
        </div>

        {/* Navbar Links (Desktop) */}
        <div className="hidden md:flex space-x-12">
          <a href="#home" className="underline-link hover:text-black">Home</a>
          <div className="relative">
            <button
              onClick={() => handleDropdown('services')}
              className="hover:text-black focus:outline-none"
            >
              Services
            </button>
            <Transition
              show={dropdown === 'services'}
              enter="transition ease-out duration-200"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition ease-in duration-150"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
              className="absolute mt-2 w-48 bg-teal-300 rounded-md shadow-lg"
            >
              <div className="py-1">
                <a href="#service1" className="block px-4 py-2 text-sm hover:bg-teal-200 transition-opacity duration-300">Service 1</a>
                <a href="#service2" className="block px-4 py-2 text-sm hover:bg-teal-200 transition-opacity duration-300">Service 2</a>
              </div>
            </Transition>
          </div>
          <div className="relative">
            <button
              onClick={() => handleDropdown('pages')}
              className="hover:text-black focus:outline-none"
            >
              Pages
            </button>
            <Transition
              show={dropdown === 'pages'}
              enter="transition ease-out duration-200"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition ease-in duration-150"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
              className="absolute mt-2 w-48 bg-teal-300 rounded-md shadow-lg"
            >
              <div className="py-1">
                <a href="#team" className="block px-4 py-2 text-sm hover:bg-teal-200 transition-opacity duration-300">Team</a>
                <a href="#pricing" className="block px-4 py-2 text-sm hover:bg-teal-200 transition-opacity duration-300">Pricing</a>
                <a href="#faq" className="block px-4 py-2 text-sm hover:bg-teal-200 transition-opacity duration-300">FAQ</a>
              </div>
            </Transition>
          </div>
          <div className="relative">
            <button
              onClick={() => handleDropdown('blog')}
              className="hover:text-black focus:outline-none"
            >
              Blog
            </button>
            <Transition
              show={dropdown === 'blog'}
              enter="transition ease-out duration-200"
              enterFrom="transform scale-95 opacity-0"
              enterTo="transform scale-100 opacity-100"
              leave="transition ease-in duration-150"
              leaveFrom="transform scale-100 opacity-100"
              leaveTo="transform scale-95 opacity-0"
              className="absolute mt-2 w-48 bg-teal-300 rounded-md shadow-lg"
            >
              <div className="py-1">
                <a href="#blog" className="block px-4 py-2 text-sm hover:bg-teal-200 transition-opacity duration-300">Blog</a>
                <a href="#single-post" className="block px-4 py-2 text-sm hover:bg-teal-200 transition-opacity duration-300">Single Post</a>
              </div>
            </Transition>
          </div>
          <a href="#about" className="underline-link hover:text-black">About</a>
          <a href="#contact" className="underline-link hover:text-black">Contact Us</a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-black focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Full-Screen Slide Menu */}
      <Transition
        show={isOpen}
        enter="transition-transform ease-in-out duration-300"
        enterFrom="transform translate-x-full opacity-0"
        enterTo="transform translate-x-0 opacity-100"
        leave="transition-transform ease-in-out duration-200"
        leaveFrom="transform translate-x-0 opacity-100"
        leaveTo="transform translate-x-full opacity-0"
        className="fixed inset-0 z-40 bg-teal-400 flex flex-col items-center justify-center"
      >
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-white text-2xl focus:outline-none"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
        <a href="#home" className="text-xl text-white hover:text-black transition-opacity duration-300">Home</a>
        <button
          onClick={() => handleDropdown('services')}
          className="text-xl text-white hover:text-black transition-opacity duration-300"
        >
          Services
        </button>
        {dropdown === 'services' && (
          <div className="space-y-4 mt-4">
            <a href="#service1" className="block text-lg hover:text-black transition-opacity duration-300">Service 1</a>
            <a href="#service2" className="block text-lg hover:text-black transition-opacity duration-300">Service 2</a>
          </div>
        )}
        <button
          onClick={() => handleDropdown('pages')}
          className="text-xl text-white hover:text-black transition-opacity duration-300"
        >
          Pages
        </button>
        {dropdown === 'pages' && (
          <div className="space-y-4 mt-4">
            <a href="#team" className="block text-lg hover:text-black transition-opacity duration-300">Team</a>
            <a href="#pricing" className="block text-lg hover:text-black transition-opacity duration-300">Pricing</a>
            <a href="#faq" className="block text-lg hover:text-black transition-opacity duration-300">FAQ</a>
          </div>
        )}
        <button
          onClick={() => handleDropdown('blog')}
          className="text-xl text-white hover:text-black transition-opacity duration-300"
        >
          Blog
        </button>
        {dropdown === 'blog' && (
          <div className="space-y-4 mt-4">
            <a href="#blog" className="block text-lg hover:text-black transition-opacity duration-300">Blog</a>
            <a href="#single-post" className="block text-lg hover:text-black transition-opacity duration-300">Single Post</a>
          </div>
        )}
        <a href="#about" className="text-xl text-white hover:text-black transition-opacity duration-300">About</a>
        <a href="#contact" className="text-xl text-white hover:text-black transition-opacity duration-300">Contact Us</a>
      </Transition>
    </nav>
  );
};

export default Navbar;
