import React, { memo } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const sliderData = [
  { title: "Market Research & Analysis", description: "Gain insights into market trends, customer behavior, and competitive landscape. Key services include market segmentation, competitive analysis, and consumer behavior studies." },
  { title: "Brand Strategy & Management", description: "Build and maintain a strong brand identity. Key services include brand positioning, identity development, and messaging strategy." },
  { title: "Digital Marketing & Campaign Management", description: "Create and execute effective digital marketing strategies. Key services include SEO, PPC advertising, social media marketing, and email campaigns." }
];

const Service = () => {
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
    <div className="w-full px-4 md:px-8 lg:px-16 mt-8 bg-white" id='services'>
      <Slider {...settings} className="relative fade-in-up">
        {sliderData.map((slide, index) => (
          <div
            key={index}
            className="p-8 md:p-12 flex flex-col items-center text-center bg-white rounded-lg text-black transition-transform duration-500 ease-in-out transform hover:scale-105"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4">{slide.title}</h2>
            <p className="text-lg md:text-xl">{slide.description}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default memo(Service);
