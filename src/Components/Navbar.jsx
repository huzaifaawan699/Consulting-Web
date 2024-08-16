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
    <nav className="bg-teal-400 text-white p-4 shadow-2xl ">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
        <img src={logo} alt="Logo" className="h-30 w-20" />
        </div>

        {/* Navbar Links */}
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

        {/* Mobile Menu */}
        <Transition
          show={isOpen}
          enter="transition ease-out duration-200"
          enterFrom="transform scale-95 opacity-0"
          enterTo="transform scale-100 opacity-100"
          leave="transition ease-in duration-150"
          leaveFrom="transform scale-100 opacity-100"
          leaveTo="transform scale-95 opacity-0"
          className="md:hidden"
        >
          <div className="absolute top-16 left-0 w-full bg-teal-300 text-black">
            <div className="py-2">
              <a href="#home" className="block px-4 py-2 hover:bg-teal-200 transition-opacity duration-300 underline-link">Home</a>
              <div className="relative">
                <button
                  onClick={() => handleDropdown('mobile-services')}
                  className="block px-4 py-2 hover:bg-teal-200 w-full text-left"
                >
                  Services
                </button>
                <Transition
                  show={dropdown === 'mobile-services'}
                  enter="transition ease-out duration-200"
                  enterFrom="transform scale-95 opacity-0"
                  enterTo="transform scale-100 opacity-100"
                  leave="transition ease-in duration-150"
                  leaveFrom="transform scale-100 opacity-100"
                  leaveTo="transform scale-95 opacity-0"
                  className="bg-teal-200"
                >
                  <div className="py-1">
                    <a href="#service1" className="block px-4 py-2 text-sm hover:bg-teal-50 transition-opacity duration-300">Service 1</a>
                    <a href="#service2" className="block px-4 py-2 text-sm hover:bg-teal-50 transition-opacity duration-300">Service 2</a>
                  </div>
                </Transition>
              </div>
              <div className="relative">
                <button
                  onClick={() => handleDropdown('mobile-pages')}
                  className="block px-4 py-2 hover:bg-teal-200 w-full text-left"
                >
                  Pages
                </button>
                <Transition
                  show={dropdown === 'mobile-pages'}
                  enter="transition ease-out duration-200"
                  enterFrom="transform scale-95 opacity-0"
                  enterTo="transform scale-100 opacity-100"
                  leave="transition ease-in duration-150"
                  leaveFrom="transform scale-100 opacity-100"
                  leaveTo="transform scale-95 opacity-0"
                  className="bg-teal-200"
                >
                  <div className="py-1">
                    <a href="#team" className="block px-4 py-2 text-sm hover:bg-teal-50 transition-opacity duration-300">Team</a>
                    <a href="#pricing" className="block px-4 py-2 text-sm hover:bg-teal-50 transition-opacity duration-300">Pricing</a>
                    <a href="#faq" className="block px-4 py-2 text-sm hover:bg-teal-50 transition-opacity duration-300">FAQ</a>
                  </div>
                </Transition>
              </div>
              <div className="relative">
                <button
                  onClick={() => handleDropdown('mobile-blog')}
                  className="block px-4 py-2 hover:bg-teal-200 w-full text-left"
                >
                  Blog
                </button>
                <Transition
                  show={dropdown === 'mobile-blog'}
                  enter="transition ease-out duration-200"
                  enterFrom="transform scale-95 opacity-0"
                  enterTo="transform scale-100 opacity-100"
                  leave="transition ease-in duration-150"
                  leaveFrom="transform scale-100 opacity-100"
                  leaveTo="transform scale-95 opacity-0"
                  className="bg-teal-200"
                >
                  <div className="py-1">
                    <a href="#blog" className="block px-4 py-2 text-sm hover:bg-teal-50 transition-opacity duration-300">Blog</a>
                    <a href="#single-post" className="block px-4 py-2 text-sm hover:bg-teal-50 transition-opacity duration-300">Single Post</a>
                  </div>
                </Transition>
              </div>
              <a href="#about" className="block px-4 py-2 hover:bg-teal-200 transition-opacity duration-300">About</a>
              <a href="#contact" className="block px-4 py-2 hover:bg-teal-200 transition-opacity duration-300">Contact Us</a>
            </div>
          </div>
        </Transition>
      </div>
    </nav>
  );
};

export default Navbar;
