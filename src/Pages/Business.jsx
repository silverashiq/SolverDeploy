import React from "react";
import WebsiteShowcase from "../Components/WebsiteShowcase";
import { Link } from "react-router-dom";

const Business = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      {/* Hero Section */}
      <section className="bg-white py-16 px-4 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Professional Business Website Design
        </h1>
        <span className="w-[200px] h-[2px] block mt-[35px] mb-[25px] bg-[#D9B592] mx-auto"></span>

        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Build a strong online presence with customized, scalable, and
          business-focused website solutions.
        </p>
      </section>

      {/* Services Overview */}
      <section className="py-12 px-4 bg-gray-100">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-white shadow-lg rounded-lg text-center">
            <h2 className="text-2xl font-semibold mb-4">
              Custom Business Solutions
            </h2>
            <p className="text-gray-600">
              Websites tailored to meet the specific needs of your business,
              driving growth and success.
            </p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-lg text-center">
            <h2 className="text-2xl font-semibold mb-4">SEO Optimized</h2>
            <p className="text-gray-600">
              Designed to rank higher in search results, ensuring your audience
              finds you easily.
            </p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-lg text-center">
            <h2 className="text-2xl font-semibold mb-4">
              User-Friendly Design
            </h2>
            <p className="text-gray-600">
              Intuitive designs for seamless navigation, helping you engage and
              retain visitors.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-white py-12 px-6 lg:px-32 mb-12 rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold text-gray-700 mb-6 text-center">
          Why Choose Us for your Business Website Design?
        </h2>
        <div className="max-w-3xl mx-auto">
          <ul className="list-inside list-disc space-y-4 text-lg text-[#525252]">
            <li className="flex items-start space-x-3">
              <span className="text-[#D9B592] text-2xl">•</span>
              <p>Custom-built websites tailored to your brand identity</p>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-[#D9B592] text-2xl">•</span>
              <p>Responsive layouts for all devices</p>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-[#D9B592] text-2xl">•</span>
              <p>SEO and speed optimized for better performance</p>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-[#D9B592] text-2xl">•</span>
              <p>Integrated contact forms and business features</p>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-[#D9B592] text-2xl">•</span>
              <p>Ongoing support and maintenance</p>
            </li>
          </ul>
        </div>
      </section>

      <WebsiteShowcase />

      {/* Call-to-Action */}
      <section className="bg-[#D9B592] text-white py-12 text-center">
        <h3 className="text-3xl font-bold mb-4">
          Take Your Business to the Next Level
        </h3>
        <p className="mb-8 text-lg">
          Let's collaborate to build a professional website that showcases your
          business and attracts clients.
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

export default Business;
