// src/components/Navbar.jsx
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/Logo.png";
import { LuMenu, LuX } from "react-icons/lu";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Close the menu when the location changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav className="bg-[#343434] h-[130px] relative z-10">
      <div className="h-full mx-auto px-[20px] lg:px-[200px] flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/">
            <img
              className="h-[60px] mt-[1px] object-contain"
              src={Logo}
              alt="SolverSilver"
            />
          </Link>
        </div>
        {/* Hamburger Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-[#D9B592] focus:outline-none text-3xl"
          >
            {isOpen ? (
              <LuX className="text-[#D9B592]" />
            ) : (
              <LuMenu className="text-[#D9B592]" />
            )}
          </button>
        </div>
        {/* Desktop Menu */}
        <div className="hidden md:flex text-[#D9B592] items-center gap-[40px]">
          <Link to="/" className="menu-link hover:text-white">Home</Link>
          <Link to="/about" className="menu-link hover:text-white">About</Link>
          {/* Dropdown for Services */}
          <div className="relative dropdown dropdown-hover">
            <Link
              className="menu-link m-1 cursor-pointer hover:text-white"
              onMouseEnter={() => {}}
            >
              Services
            </Link>
            <ul
              tabIndex={0}
              className="dropdown-content dropdown-hover menu bg-[#525252] rounded-box z-[1] w-40 text-[#D9B592] p-1 shadow"
            >
              <li>
                <Link to="/services" className="hover:text-white">All Services</Link>
              </li>
              <li>
                <Link to="/graphics" className="hover:text-white">Graphics</Link>
              </li>
              <li>
                <Link to="/web" className="hover:text-white">Website</Link>
              </li>
            </ul>
          </div>
          <Link to="/portfolio" className="menu-link hover:text-white">Portfolio</Link>
          <Link to="/contact" className="menu-link hover:text-white">Contact</Link>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#343434] p-4 ">
          <ul className="text-[#D9B592]">
            <li>
              <Link to="/" className="block hover:text-white mb-2">Home</Link>
            </li>
            <li>
              <Link to="/about" className="block hover:text-white mb-2">About</Link>
            </li>
            <li>
              <details className="dropdown dropdown-right">
                <summary className="block mb-2">Services</summary>
                <ul className="menu dropdown-content bg-[#525252] rounded-box z-20 w-40 p-1 shadow ml-4">
                  <li>
                    <Link to="/services" className="block">All Services</Link>
                  </li>
                  <li>
                    <Link to="/graphics" className="block">Graphics</Link>
                  </li>
                  <li>
                    <Link to="/web" className="block">Website</Link>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <Link to="/portfolio" className="block hover:text-white mb-2">Portfolio</Link>
            </li>
            <li>
              <Link to="/contact" className="block hover:text-white ">Contact</Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
