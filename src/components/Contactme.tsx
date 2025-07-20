import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaInstagram } from 'react-icons/fa';

const ContactSection: React.FC = () => {
  return (
    <section id='contact'
      className="relative bg-black py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 text-center"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-7xl mx-auto">
        <div className="relative">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-pink-600 to-purple-600 opacity-50 rounded-lg"></div>
          <div className="relative bg-black p-4 sm:p-6 md:p-8 rounded-lg shadow-lg">
            <h2
              id="contact-heading"
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 leading-tight"
            >
              <span className="text-pink-600 border-b-4 border-pink-600">Contact</span> Us
            </h2>
            <p className="text-gray-400 mb-6 text-base sm:text-lg md:text-xl leading-relaxed">
              Get in touch with Natanem Couture. We're here to answer your questions and bring your vision to life.
            </p>
            <div className="grid grid-cols-1 gap-4 sm:gap-6 max-w-3xl mx-auto">
              <div className="bg-gray-800 p-4 rounded-lg flex items-center gap-4">
                <FaPhone className="text-pink-600 text-2xl" aria-hidden="true" />
                <div className="text-left">
                  <p className="text-sm sm:text-base font-semibold text-white">Phone</p>
                  <p className="text-xs sm:text-sm text-gray-400">
                    <a href="tel:+251912345678" className="hover:text-pink-600 transition-colors">
                      +251 912 345 678
                    </a>
                  </p>
                </div>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg flex items-center gap-4">
                <FaEnvelope className="text-pink-600 text-2xl" aria-hidden="true" />
                <div className="text-left">
                  <p className="text-sm sm:text-base font-semibold text-white">Email</p>
                  <p className="text-xs sm:text-sm text-gray-400">
                    <a href="mailto:info@natanemcouture.com" className="hover:text-pink-600 transition-colors">
                      info@natanemcouture.com
                    </a>
                  </p>
                </div>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg flex items-center gap-4">
                <FaMapMarkerAlt className="text-pink-600 text-2xl" aria-hidden="true" />
                <div className="text-left">
                  <p className="text-sm sm:text-base font-semibold text-white">Address</p>
                  <p className="text-xs sm:text-sm text-gray-400">
                    Bole Road, Addis Ababa, Ethiopia
                  </p>
                </div>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg flex items-center gap-4">
                <FaInstagram className="text-pink-600 text-2xl" aria-hidden="true" />
                <div className="text-left">
                  <p className="text-sm sm:text-base font-semibold text-white">Instagram</p>
                  <p className="text-xs sm:text-sm text-gray-400">
                    <a href="https://www.instagram.com/natanem_couture?igsh=MXZ5NDQ2OGt6emt1Yw==" className="hover:text-pink-600 transition-colors">
                      @natanemcouture
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-6 flex justify-center space-x-4">
              <button className="bg-pink-600 text-white px-4 sm:px-6 py-2 rounded-full hover:bg-pink-700 text-sm sm:text-base">
                Send a Message
              </button>
              <button className="bg-transparent border border-white text-white px-4 sm:px-6 py-2 rounded-full hover:bg-gray-800 text-sm sm:text-base">
                Visit Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;