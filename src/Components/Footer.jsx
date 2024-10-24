import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

function Footer() {
  // Function to scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-[#343434] text-[#D9B592] py-10">
      <div className="container mx-auto px-4 lg:px-20">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <div className="mb-4 md:mb-0">
            <h2 className="font-bold text-xl">SolverSilver</h2>
            <p className="mt-1 text-sm">Your creative design partner.</p>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-white">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-white">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-white">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-white">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm mb-4 md:mb-0">
            <Link to="/" className="hover:text-white mx-2" onClick={scrollToTop}>Home</Link>
            <Link to="/about" className="hover:text-white mx-2" onClick={scrollToTop}>About</Link>
            <Link to="/services" className="hover:text-white mx-2" onClick={scrollToTop}>All Services</Link>
            <Link to="/portfolio" className="hover:text-white mx-2" onClick={scrollToTop}>Portfolio</Link>
            <Link to="/contact" className="hover:text-white mx-2" onClick={scrollToTop}>Contact</Link>
          </div>
          <div className="text-sm">
            <p>&copy; {new Date().getFullYear()} SolverSilver. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
