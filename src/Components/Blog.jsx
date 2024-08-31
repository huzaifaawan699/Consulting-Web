import React, { useState, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import blogImage from '../assets/blog.jpg'; // Replace with your image path

const Blog = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Set isVisible to true after component mounts
    setIsVisible(true);
  }, []);

  return (
    <section className="bg-white py-16" id='single-post'>
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-black mb-4">Consulting for the Future</h2>
          <p className="text-lg text-black">
            Explore the emerging trends and strategies in consulting that will shape the future.
          </p>
        </div>

        {/* Content */}
        <div className="flex flex-col md:flex-row items-center md:justify-between">
          {/* Image */}
          <CSSTransition
            in={isVisible}
            timeout={1000}
            classNames="zoom"
            unmountOnExit
          >
            <img
              src={blogImage}
              alt="Consulting for the Future"
              className="w-full md:w-1/2 mb-8 md:mb-0 rounded-lg shadow-lg"
            />
          </CSSTransition>

          {/* Text */}
          <CSSTransition
            in={isVisible}
            timeout={1000}
            classNames="slide-fade"
            unmountOnExit
          >
            <div className="w-full md:w-1/2 md:pl-8">
              <h3 className="text-2xl font-semibold text-black mb-4">
                The Future of Consulting: Key Trends
              </h3>
              <p className="text-black mb-4">
                The consulting industry is rapidly evolving with advancements in technology and changing client needs. In the future, consulting will focus more on data-driven insights, personalized client solutions, and leveraging AI to drive strategic decisions.
              </p>
              <p className="text-black mb-4">
                Key trends include the rise of virtual consulting platforms, the growing importance of sustainability, and the integration of advanced analytics to provide actionable insights. Consultants will need to adapt to these changes to stay relevant and competitive in the market.
              </p>
              <p className="text-black">
                Embracing these trends and focusing on continuous learning will be crucial for future consultants. Staying updated with the latest technologies and understanding emerging market needs will help shape successful consulting strategies.
              </p>
            </div>
          </CSSTransition>
        </div>
      </div>
    </section>
  );
};

export default Blog;
