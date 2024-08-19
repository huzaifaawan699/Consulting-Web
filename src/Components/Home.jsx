import React from 'react';
import B from '../assets/home1.png';

const Home = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen p-6 md:p-10 bg-gradient-to-r from-teal-100 to-teal-300" id="home">
      {/* Content on the Left */}
      <div className="w-full md:w-1/2 px-4 md:px-8 lg:px-16 mb-8 md:mb-0 animate-fade-in-left">
        <h1 className="text-xl md:text-3xl lg:text-4xl font-extrabold text-teal-500 mb-4">
          Elevate Your Business with Our Consulting Services
        </h1>
        <p className="text-base md:text-lg lg:text-xl text-gray-500 leading-relaxed">
          Explore personalized solutions designed to propel your business forward. Our expert team is dedicated to delivering results that matter.
        </p>
      </div>
      
      {/* Image on the Right */}
      <div className="w-full md:w-1/2 flex justify-center animate-zoom-in">
        <img
          src={B}
          alt="Transparent Businessman"
          className="w-full h-auto object-contain rounded-lg shadow-xl"
        />
      </div>
    </div>
  );
};

export default Home;
