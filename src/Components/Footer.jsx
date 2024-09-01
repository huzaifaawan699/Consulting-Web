import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-between">
                    {/* About Section */}
                    <div className="w-full lg:w-1/4 mb-6 lg:mb-0">
                        <h2 className="text-lg font-semibold mb-4">About Us</h2>
                        <p className="text-gray-400">
                            At Apex Consulting, we specialize in providing strategic solutions to help your business thrive. Our expert team offers tailored advice and innovative strategies to optimize your operations and drive growth.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="w-full lg:w-1/4 mb-6 lg:mb-0">
                        <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
                        <ul>
                            <li><a href="/" className="text-gray-400 hover:text-gray-300 transition duration-200 ease-in-out">Home</a></li>
                            <li><a href="/services" className="text-gray-400 hover:text-gray-300 transition duration-200 ease-in-out">Our Services</a></li>
                            <li><a href="/about" className="text-gray-400 hover:text-gray-300 transition duration-200 ease-in-out">About Us</a></li>
                            <li><a href="/blog" className="text-gray-400 hover:text-gray-300 transition duration-200 ease-in-out">Blog</a></li>
                            <li><a href="/contact" className="text-gray-400 hover:text-gray-300 transition duration-200 ease-in-out">Contact</a></li>
                        </ul>
                    </div>

                    {/* Contact Information */}
                    <div className="w-full lg:w-1/4 mb-6 lg:mb-0">
                        <h2 className="text-lg font-semibold mb-4">Contact Us</h2>
                        <p className="text-gray-400 mb-2">456 Business Ave.</p>
                        <p className="text-gray-400 mb-2">City, State, ZIP</p>
                        <p className="text-gray-400 mb-2">Email: <a href="mailto:info@apexconsulting.com" className="text-gray-300 hover:text-gray-200">info@apexconsulting.com</a></p>
                        <p className="text-gray-400">Phone: <a href="tel:+1234567890" className="text-gray-300 hover:text-gray-200">+1 (234) 567-890</a></p>
                    </div>

                    {/* Social Media */}
                    <div className="w-full lg:w-1/4 mb-6 lg:mb-0">
                        <h2 className="text-lg font-semibold mb-4">Follow Us</h2>
                        <div className="flex space-x-4">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-300 transition duration-200 ease-in-out">
                                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 2a6 6 0 00-6 6c0 1.59.36 3.09 1 4.43V13H9v3h4v7h3v-7h3l1-3h-4V8.01c0-.54.08-1.04.22-1.51.21-.65.62-1.23 1.12-1.69.48-.44 1.09-.74 1.76-.82.83-.09 1.65.16 2.33.63.43.3.78.72 1.01 1.21.13.27.22.55.29.85.04.18.07.37.07.57v2.83h-3a1 1 0 00-1 1v3z"/>
                                </svg>
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-300 transition duration-200 ease-in-out">
                                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M23 3a10.45 10.45 0 01-3 1 4.87 4.87 0 002.14-2.7 10.06 10.06 0 01-3.2 1.2 4.94 4.94 0 00-8.5 4.5A14.02 14.02 0 011.67 3a4.94 4.94 0 001.5 6.62A4.9 4.9 0 01.96 8v.06a4.95 4.95 0 003.95 4.8 5.05 5.05 0 01-1.26.17c-.31 0-.62-.03-.92-.08a4.95 4.95 0 004.6 3.42A9.92 9.92 0 010 19.54a14.04 14.04 0 007.55 2.21c9.06 0 14.03-7.51 14.03-14.03 0-.21 0-.42-.01-.63A10.01 10.01 0 0023 3z"/>
                                </svg>
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-300 transition duration-200 ease-in-out">
                                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2a10 10 0 00-10 10 10 10 0 0010 10 10 10 0 0010-10A10 10 0 0012 2zm0 18a8 8 0 01-8-8 8 8 0 018-8 8 8 0 018 8 8 8 0 01-8 8zm3-13h-6a1 1 0 00-1 1v6a1 1 0 001 1h6a1 1 0 001-1v-6a1 1 0 00-1-1zm-1 6h-4v-4h4v4zm-2-6.5a1.5 1.5 0 11-.001 3.001A1.5 1.5 0 0012 5.5z"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="mt-8 border-t border-gray-700 pt-4 text-center text-gray-400">
                    <p>&copy; {new Date().getFullYear()} Apex Consulting. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
