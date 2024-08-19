import React, { useEffect, useRef, memo } from 'react';
import Slider from 'react-slick';
import { gsap } from 'gsap';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Marketing from '../assets/Marketing.jpg';
import Brand from '../assets/brand.jpg';
import Digital from '../assets/Digital-marketing.jpg';

// Sample slider data
const sliderData = [
  { title: "Market Research & Analysis", description: "Gain insights into market trends, customer behavior, and competitive landscape. Key services include market segmentation, competitive analysis, and consumer behavior studies.", imgSrc: Marketing },
  { title: "Brand Strategy & Management", description: "Build and maintain a strong brand identity. Key services include brand positioning, identity development, and messaging strategy.", imgSrc: Brand },
  { title: "Digital Marketing & Campaign Management", description: "Create and execute effective digital marketing strategies. Key services include SEO, PPC advertising, social media marketing, and email campaigns.", imgSrc: Digital }
];

const Service = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    // GSAP slider animation
    gsap.fromTo(
      sliderRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: 'power2.out' }
    );
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <div className="w-full px-4 md:px-8 lg:px-16 mt-8" ref={sliderRef} id='services'>
      <Slider {...settings} className="relative">
        {sliderData.map((slide, index) => (
          <div key={index} className="p-4 md:p-6 flex flex-col items-center relative overflow-hidden group">
            <img
              src={slide.imgSrc}
              alt={slide.title}
              className="w-full h-[60vh] object-cover rounded-lg transition-transform duration-500 ease-in-out transform group-hover:scale-105 lazyload"
              loading="lazy"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-black p-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">{slide.title}</h2>
              <p className="text-base md:text-lg">{slide.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default memo(Service);
