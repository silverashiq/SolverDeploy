import React from "react";
import ReviewSection from "../Components/ReviewSection";
import WebsiteShowcase from "../Components/WebsiteShowcase";

const Portfolio = () => {
  return (
    <div>
      <div>
        <div className="bg-gray-100 min-h-screen flex flex-col items-center py-10">
          <h1 className="text-4xl font-bold mb-6 text-gray-800">
            My Portfolio
          </h1>
          <span className="w-[200px] h-[2px] block mt-[35px] mb-[25px] bg-[#D9B592] mx-auto"></span>
          <p className="max-w-2xl text-center text-lg text-gray-600 mb-10 px-4">
            Here are some of my projects and what clients are saying about my
            work.
          </p>
          <WebsiteShowcase />
        </div>
      </div>
      <div>
        <ReviewSection />
      </div>
    </div>
  );
}

export default Portfolio;
