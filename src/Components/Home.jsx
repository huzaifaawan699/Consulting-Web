import React, { useState, useEffect } from 'react';
import back1 from '../assets/back.jpg'; // Import your background images
import back2 from '../assets/back1.jpg';
import back3 from '../assets/back2.jpg';

const slides = [back1, back2, back3]; // Array of images

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Function to go to the previous slide
  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? slides.length - 1 : prevSlide - 1));
  };

  // Function to go to the next slide
  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
  };

  // Automatic slide transition every 4 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 4000); // 4000 milliseconds = 4 seconds
    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  return (
    <div className="relative flex items-center justify-center min-h-screen p-0">
      {/* Slider */}
      <div className="relative w-full h-screen overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-in-out"
          style={{
            backgroundImage: `url(${slides[currentSlide]})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '100%',
            width: '100%',
          }}
        ></div>
        
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        {/* Content Wrapper */}
        <div className="absolute top-1/2 left-1/4 transform -translate-y-1/2">
          {/* Content */}
          <div className="w-full max-w-md">
            <h1 className="text-xl md:text-3xl lg:text-4xl font-extrabold text-white mb-4">
              Elevate Your Business with Our Consulting Services
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-white leading-relaxed">
              Explore personalized solutions designed to propel your business forward. Our expert team is dedicated to delivering results that matter.
            </p>
          </div>
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 opacity-0 bg-white text-black p-3 rounded-full shadow-lg hover:shadow-xl focus:outline-none"
        >
          &#10094;
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 opacity-0 bg-white text-black p-3 rounded-full shadow-lg hover:shadow-xl focus:outline-none"
        >
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default Home;
