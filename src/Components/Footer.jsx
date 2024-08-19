import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:justify-between">
          {/* Left Side */}
          <div className="w-full md:w-1/3 mb-8 md:mb-0">
            <h1 className="text-3xl font-bold text-white mb-4">Your Company</h1>
            <p className="mb-4">
              We provide innovative solutions and exceptional services. Discover our offerings and join us in making a difference.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-teal-400 hover:text-teal-600">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-teal-400 hover:text-teal-600">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-teal-400 hover:text-teal-600">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#" className="text-teal-400 hover:text-teal-600">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="w-full md:w-1/3 mb-8 md:mb-0">
            <h2 className="text-xl font-semibold text-white mb-4">Quick Links</h2>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">Home</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">About Us</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">Services</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">Contact</a>
              </li>
            </ul>
          </div>

          {/* Useful Links */}
          <div className="w-full md:w-1/3 mb-8 md:mb-0">
            <h2 className="text-xl font-semibold text-white mb-4">Useful Links</h2>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">Terms of Service</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">FAQs</a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">Support</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Get in Touch */}
        <div className="mt-12">
          <h2 className="text-xl font-semibold text-white mb-4">Get in Touch</h2>
          <div className="space-y-4">
            <p className="text-gray-400">1234 Street Name, City, State, 12345</p>
            <p className="text-gray-400">Email: info@yourcompany.com</p>
            <p className="text-gray-400">Phone: +1 (234) 567-8901</p>
            <p className="text-gray-400">Opening Hours: Mon-Fri 9am - 6pm</p>
          </div>
        </div>

        {/* Copyright Notice */}
        <div className="mt-12 border-t border-gray-700 pt-4 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Your Company. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
