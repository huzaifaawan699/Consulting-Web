import React from 'react';
import ContactImage from '../assets/contact.jpg'; // Update with your image path

const ContactUs = () => {
  return (
    <section className="bg-black py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Contact Us</h2>
          <p className="text-lg text-white">
            We'd love to hear from you. Fill out the form below or reach out to us directly.
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-center">
          {/* Contact Image */}
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <img
              src={ContactImage}
              alt="Contact"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Contact Form */}
          <div className="w-full md:w-1/2 pl-4">
            <form className="bg-black p-8 rounded-lg shadow-lg transition-colors duration-300 hover:bg-white hover:text-black">
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-semibold text-white mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  className="w-full px-4 py-2 border border-gray-700 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-teal-600"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-semibold text-white mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-2 border border-gray-700 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-teal-600"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-sm font-semibold text-white mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  placeholder="Your Message"
                  className="w-full px-4 py-2 border border-gray-700 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-teal-600"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-black text-white py-2 px-4 rounded-lg hover:bg-black focus:outline-none focus:ring-2 focus:ring-white transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
