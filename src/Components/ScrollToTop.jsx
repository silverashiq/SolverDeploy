// src/components/ScrollToTop.jsx
import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);
  const location = useLocation(); // Access current route location

  // Scroll to the top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]); // Dependency on location, triggers on route change

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      {visible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 p-2 rounded-full bg-[#D9B592] text-white shadow-lg hover:bg-[#D9B592]/80 hover:text-[#343434] focus:outline-none focus:ring focus:ring-[#D9B592]/50"
        >
          <FaArrowUp className="w-5 h-5" />
        </button>
      )}
    </div>
  );
};

export default ScrollToTop;
