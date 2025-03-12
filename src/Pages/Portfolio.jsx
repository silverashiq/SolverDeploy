import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import WebsiteShowcase from "../Components/WebsiteShowcase";
import GraphicsShowcase from "../Components/GraphicsShowcase";
import ReviewSection from "../Components/ReviewSection";

const Portfolio = () => {
  const { category } = useParams(); // Get the category from the URL (either "website" or "graphics")
  const [activeFilter, setActiveFilter] = useState(category || "website"); // Default to "website" if no category is provided

  useEffect(() => {
    if (category) {
      setActiveFilter(category); // Update activeFilter based on URL param
    }
  }, [category]);

  return (
    <div>
      <div>
        <div className="bg-gray-100 min-h-screen flex flex-col items-center py-10">
          <h1 className="text-4xl font-bold mb-6 text-gray-800">
            Our Portfolio
          </h1>
          <span className="w-[200px] h-[2px] block mt-[35px] mb-[25px] bg-[#D9B592] mx-auto"></span>
          <p className="max-w-2xl text-center text-lg text-gray-600 mb-10 px-4">
            Here are some of our projects and what clients are saying about our
            work.
          </p>

          {/* Filter Buttons */}
          <div className="flex space-x-4 mb-6">
            <button
              className={`px-6 py-2 text-lg font-medium ${
                activeFilter === "website"
                  ? "bg-[#D9B592] text-white"
                  : "bg-[#343434] text-white hover:bg-[#D9B592] transition-colors duration-300"
              } rounded-full`}
              onClick={() => setActiveFilter("website")}
            >
              Website Design
            </button>
            <button
              className={`px-6 py-2 text-lg font-medium ${
                activeFilter === "graphics"
                  ? "bg-[#D9B592] text-white"
                  : "bg-[#343434] text-white hover:bg-[#D9B592] transition-colors duration-300"
              } rounded-full`}
              onClick={() => setActiveFilter("graphics")}
            >
              Graphic Design
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
