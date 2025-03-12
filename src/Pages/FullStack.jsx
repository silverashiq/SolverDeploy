import React from "react";
import WebsiteShowcase from "../Components/WebsiteShowcase";
import { Link } from "react-router-dom";

const FullStack = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      {/* Hero Section */}
      <section className="bg-white py-16 px-4 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Full-Stack Web Development
        </h1>
        <span className="w-[200px] h-[2px] block mt-[35px] mb-[25px] bg-[#D9B592] mx-auto"></span>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          End-to-end web solutions from concept to deployment with modern
          full-stack technologies.
        </p>
      </section>

      {/* Services Overview */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-white shadow-lg rounded-lg text-center">
            <h2 className="text-2xl font-semibold mb-4">
              Front-End Development
            </h2>
            <p className="text-gray-600">
              Stunning user interfaces using modern frameworks like React and
              Tailwind CSS.
            </p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-lg text-center">
            <h2 className="text-2xl font-semibold mb-4">
              Back-End Development
            </h2>
            <p className="text-gray-600">
              Robust and scalable APIs using Node.js, Express.js, and MongoDB.
            </p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-lg text-center">
            <h2 className="text-2xl font-semibold mb-4">
              Deployment & Support
            </h2>
            <p className="text-gray-600">
              End-to-end deployment and ongoing support for smooth operations.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-white py-12 px-6 lg:px-32 mb-12 rounded-xl shadow-lg">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-700 mb-6">
            Why Choose our Full-Stack Solutions?
          </h2>
          <ul className="list-inside list-disc space-y-4 text-lg text-[#525252]">
            <li className="flex items-start space-x-3">
              <span className="text-[#D9B592] text-2xl">•</span>
              <p>Complete development from front-end to back-end</p>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-[#D9B592] text-2xl">•</span>
              <p>Efficient and scalable solutions</p>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-[#D9B592] text-2xl">•</span>
              <p>Custom APIs and database integration</p>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-[#D9B592] text-2xl">•</span>
              <p>Responsive designs for all devices</p>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-[#D9B592] text-2xl">•</span>
              <p>High performance and modern technology stack</p>
            </li>
          </ul>
        </div>
      </section>

      <WebsiteShowcase />

      {/* Call-to-Action */}
      <section className="bg-[#D9B592] text-white py-12 text-center">
        <h3 className="text-3xl font-bold mb-4">
          Transform Your Business with Full-Stack Development
        </h3>
        <p className="mb-8 text-lg">
          Build powerful, feature-rich web applications with frontend and
          backend development that drive results.
        </p>
        <div className="flex justify-center space-x-4">
          <Link
            to="/contact"
            className="px-6 py-2  bg-white text-[#D9B592] font-semibold rounded-full shadow-md hover:bg-[#343434] transition-colors duration-300"
          >
            Request a Quote
          </Link>
          <Link
            to="/appointment"
            className="px-6 py-2  bg-white text-[#D9B592] font-semibold rounded-full shadow-md hover:bg-[#343434] transition-colors duration-300"
          >
            Book an Appointment
          </Link>
        </div>
      </section>
    </div>
  );
};

export default FullStack;
