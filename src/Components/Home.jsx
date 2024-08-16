import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import B from '../assets/businessman.jpg';
const Home = () => {
  const textRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    // Animate image
    gsap.fromTo(imageRef.current, { opacity: 0, scale: 0.5 }, { opacity: 1, scale: 1.2, duration: 2, ease: 'power2.out' });

    // Animate text
    gsap.fromTo(textRef.current, { opacity: 0, scale: 0.5 }, { opacity: 1, scale: 1, duration: 2.5, ease: 'power2.out', delay: 0.5 });
  }, []);

  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-6 md:p-10 bg-gray-100 h-screen">
      {/* Left side image */}
      <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
        <img
          src={B}
          alt="Cute Pig"
          className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover rounded-lg shadow-lg"
          ref={imageRef}
        />
      </div>

      {/* Right side content */}
      <div className="md:w-1/2 text-center md:text-left" ref={textRef}>
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Welcome to Our Page</h1>
        <p className="text-base md:text-lg text-gray-700">This is an example of a Home page built with React and Tailwind CSS.</p>
      </div>
    </div>
  );
};

export default Home;
