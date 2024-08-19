import React from 'react';

const ContactUs = () => {
  return (
    <section className="bg-teal-200 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-teal-600 mb-4">Contact Us</h2>
          <p className="text-lg text-gray-700">
            We'd love to hear from you. Fill out the form below or reach out to us directly.
          </p>
        </div>
        <div className="flex flex-col md:flex-row">
          {/* Contact Form */}
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <form className="bg-white p-8 rounded-lg shadow-lg">
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  placeholder="Your Message"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-teal-600 text-white py-2 px-4 rounded-lg hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-600"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="w-full md:w-1/2 pl-4">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Contact Information</h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <i className="fas fa-map-marker-alt text-teal-600 mr-3"></i>
                <p className="text-gray-700">1234 Street Name, City, State, 12345</p>
              </li>
              <li className="flex items-center">
                <i className="fas fa-phone-alt text-teal-600 mr-3"></i>
                <p className="text-gray-700">+1 (234) 567-8901</p>
              </li>
              <li className="flex items-center">
                <i className="fas fa-envelope text-teal-600 mr-3"></i>
                <p className="text-gray-700">info@yourcompany.com</p>
              </li>
              <li className="flex items-center">
                <i className="fas fa-clock text-teal-600 mr-3"></i>
                <p className="text-gray-700">Mon-Fri: 9am - 6pm</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
