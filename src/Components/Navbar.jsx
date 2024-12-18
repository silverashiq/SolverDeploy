import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/Logo.png";
import { LuMenu, LuX, LuChevronUp, LuChevronDown } from "react-icons/lu";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false); // Track dropdown state
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  // Handle the mobile dropdown toggle
  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  useEffect(() => {
    setIsOpen(false);
    setDropdownOpen(false); // Close dropdown on location change
  }, [location]);

  return (
    <>
      {/* Navbar */}
      <nav className="bg-[#343434] h-[130px] relative z-12">
        <div className="h-full mx-auto px-[20px] lg:px-[200px] flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/">
              <img
                className="h-[60px] object-contain"
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
            <Link to="/" className="menu-link hover:text-white">
              Home
            </Link>
            <Link to="/about" className="menu-link hover:text-white">
              About
            </Link>
            {/* Dropdown for Services */}
            <div className="relative dropdown dropdown-hover">
              <Link
                to="#"
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
                  <Link to="/services" className="hover:text-white">
                    All Services
                  </Link>
                </li>
                <li>
                  <Link to="/graphics" className="hover:text-white">
                    Graphics
                  </Link>
                </li>
                <li>
                  <Link to="/web" className="hover:text-white">
                    Website
                  </Link>
                </li>
              </ul>
            </div>
            <Link to="/portfolio" className="menu-link hover:text-white">
              Portfolio
            </Link>
            <Link to="/contact" className="menu-link hover:text-white">
              Contact
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`absolute top-0 left-0 w-full bg-[#343434] transform transition-transform duration-300 ease-in-out z-10 ${
          isOpen
            ? "translate-y-[130px] opacity-100"
            : "-translate-y-full opacity-0"
        }`}
      >
        <ul className="text-[#D9B592] p-4 text-right">
          <li className="mb-2">
            <Link
              to="/"
              className="inline-block py-2 text-right hover:text-white"
            >
              Home
            </Link>
          </li>
          <li className="mb-2">
            <Link
              to="/about"
              className="inline-block py-2 text-right hover:text-white"
            >
              About
            </Link>
          </li>
          {/* Mobile Services Dropdown */}
          <li className="mb-2">
            <div className="w-full text-right">
              <button
                onClick={toggleDropdown}
                className="w-full flex justify-end items-center gap-2 py-2 hover:text-white"
              >
                {dropdownOpen ? (
                  <LuChevronUp className="text-[#D9B592]" />
                ) : (
                  <LuChevronDown className="text-[#D9B592]" />
                )}
                <span>Services</span>
              </button>
              <div
                className={`overflow-hidden transition-max-h duration-300 ease-in-out ${
                  dropdownOpen ? "max-h-40" : "max-h-0"
                }`}
              >
                <ul className="bg-[#525252] text-[#b18e6a] p-3 rounded-box shadow-lg mt-2">
                  <li>
                    <Link
                      to="/services"
                      className="inline-block py-2 text-right hover:text-white"
                    >
                      All Services
                    </Link>
                  </li>
                  <li className="my-1">
                    <Link
                      to="/graphics"
                      className="inline-block py-2 text-right hover:text-white"
                    >
                      Graphics
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/web"
                      className="inline-block py-2 text-right hover:text-white"
                    >
                      Website
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li className="mb-2">
            <Link
              to="/portfolio"
              className="inline-block py-2 text-right hover:text-white"
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="inline-block py-2 text-right hover:text-white"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
