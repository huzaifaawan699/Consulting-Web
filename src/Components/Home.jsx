import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import B from '../assets/home1.png';

const Home = () => {
  const textRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    // Animate image with zoom-out effect
    gsap.fromTo(
      imageRef.current,
      { opacity: 0, scale: 1.2 },
      { opacity: 1, scale: 1, duration: 1.5, ease: 'power2.out' }
    );

    // Animate text with color transitions and scale
    gsap.fromTo(
      textRef.current,
      { opacity: 0, x: -100, scale: 0.8, color: '#4a4a4a', backgroundColor: 'transparent' },
      { 
        opacity: 1, 
        x: 0, 
        scale: 1, 
        duration: 1.5, 
        ease: 'power2.out', 
        delay: 0.5,
        color: '#333333', // Change to a more prominent color
        backgroundColor: 'rgba(255, 255, 255, 0.1)', // Subtle background color for highlight
        onComplete: () => {
          gsap.to(textRef.current, { backgroundColor: 'transparent', duration: 1 }); // Fade out background color
        }
      }
    );
  }, []);

  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen p-6 md:p-10 bg-gradient-to-r from-teal-100 to-teal-300" id='home'>
      {/* Content on the Left */}
      <div className="w-full md:w-1/2 px-4 md:px-8 lg:px-16 mb-8 md:mb-0" ref={textRef}>
        <h1 className="text-xl md:text-3xl lg:text-4xl font-extrabold text-teal-500 mb-4">
          Elevate Your Business with Our Consulting Services
        </h1>
        <p className="text-base md:text-lg lg:text-xl text-gray-500 leading-relaxed">
          Explore personalized solutions designed to propel your business forward. Our expert team is dedicated to delivering results that matter.
        </p>
      </div>
      
      {/* Image on the Right */}
      <div className="w-full md:w-1/2 flex justify-center" ref={imageRef}>
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
