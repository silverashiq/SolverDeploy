import React, { useState } from "react";
import ReviewSection from "../Components/ReviewSection";
import WebsiteShowcase from "../Components/WebsiteShowcase";
import GraphicsShowcase from "../Components/GraphicsShowcase";

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("website"); // Default filter is "website"

  // Function to handle filter toggle
  const toggleFilter = (filter) => {
    setActiveFilter(filter);
  };

  return (
    <div>
      <div>
        <div className="bg-gray-100 min-h-screen flex flex-col items-center py-10">
          <h1 className="text-4xl font-bold mb-6 text-gray-800">My Portfolio</h1>
          <span className="w-[200px] h-[2px] block mt-[35px] mb-[25px] bg-[#D9B592] mx-auto"></span>
          <p className="max-w-2xl text-center text-lg text-gray-600 mb-10 px-4">
            Here are some of my projects and what clients are saying about my work.
          </p>

          {/* Filter Buttons */}
          <div className="flex space-x-4 mb-6">
            <button
              className={`px-6 py-2 text-lg font-medium ${
                activeFilter === "website" ? "bg-[#D9B592] text-white" : "bg-gray-200 text-gray-800"
              } rounded-lg`}
              onClick={() => toggleFilter("website")}
            >
              Website Design
            </button>
            <button
              className={`px-6 py-2 text-lg font-medium ${
                activeFilter === "graphics" ? "bg-[#D9B592] text-white" : "bg-gray-200 text-gray-800"
              } rounded-lg`}
              onClick={() => toggleFilter("graphics")}
            >
              Graphics Design
            </button>
          </div>

          {/* Conditionally Render Showcase */}
          {activeFilter === "website" && <WebsiteShowcase />}
          {activeFilter === "graphics" && <GraphicsShowcase />}
        </div>
      </div>
      <div>
        <ReviewSection />
      </div>
    </div>
  );
};

export default Portfolio;
