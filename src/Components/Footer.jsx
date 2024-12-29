import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaCalendarAlt } from 'react-icons/fa';

function Footer() {
  const [showContactInfo, setShowContactInfo] = useState(false); // State for contact info visibility

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const toggleContactInfo = () => {
    setShowContactInfo(!showContactInfo); // Toggle the contact info visibility
  };

  return (
    <footer className="bg-[#343434] text-[#D9B592] py-10">
      <div className="container mx-auto px-4 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-8 ">
          {/* Logo and Description */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl tracking-wide mb-2">SolverSilver</h2>
            <p className="text-sm">Your creative design partner.</p>
          </div>

          {/* Links Section */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg mb-2">Quick Links</h3>
            <Link to="/" className="hover:text-white transition duration-200" onClick={scrollToTop}>Home</Link>
            <Link to="/about" className="hover:text-white transition duration-200" onClick={scrollToTop}>About</Link>
            <Link to="/services" className="hover:text-white transition duration-200" onClick={scrollToTop}>All Services</Link>
            <Link to="/portfolio" className="hover:text-white transition duration-200" onClick={scrollToTop}>Portfolio</Link>
            <Link to="/contact" className="hover:text-white transition duration-200" onClick={scrollToTop}>Contact</Link>
            <Link to="/terms" className="hover:text-white transition duration-200" onClick={scrollToTop}>Terms & Conditions</Link>
            <Link to="/policy" className="hover:text-white transition duration-200" onClick={scrollToTop}>Privacy Policy</Link>
          </div>

          {/* Appointment and Social Media Links */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg mb-2">Book an Appointment</h3>
            <div className="flex items-center mb-4">
              <FaCalendarAlt className="text-2xl mr-2" />
              <Link to="/appointment" className="hover:text-white text-lg transition duration-200" onClick={scrollToTop}>
                Schedule Now
              </Link>
            </div>

            <h3 className="text-lg mb-2">Follow Us</h3>
            <div className="flex space-x-4 mb-4">
              <a href="#" className="text-[#D9B592] hover:text-white transition duration-200">
                <FaFacebookF size={20} />
              </a>
              <a href="#" className="text-[#D9B592] hover:text-white transition duration-200">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-[#D9B592] hover:text-white transition duration-200">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="text-[#D9B592] hover:text-white transition duration-200">
                <FaLinkedinIn size={20} />
              </a>
            </div>

            {/* Instant Contact Button */}
            <button
              onClick={toggleContactInfo}
              className="bg-[#4a4a4a] text-[#D9B592] font-semibold py-2 px-4 rounded-lg hover:bg-[#5c5b5b] transition duration-200"
            >
              {showContactInfo ? 'Hide Contact Info' : 'Contact Info'}
            </button>

            {showContactInfo && (
              <p className="mt-2 text-gray-300 sm:text-center md:text-left">
                E-mail: <a href="mailto:silverashiq@gmail.com" className="text-blue-500">info@solversilver.com</a> <br />
                WhatsApp: <a               href="https://wa.me/8801759565304"
              className="text-blue-500 hover:underline"
            >
              +8801759565304</a>
              </p>
            )}
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="text-sm text-center">
          <p>&copy; {new Date().getFullYear()} SolverSilver. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
