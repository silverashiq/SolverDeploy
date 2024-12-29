import React from "react";
import WebsiteShowcase from "../Components/WebsiteShowcase";
import { Link } from "react-router-dom";

const Ecommerce = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      {/* Hero Section */}
      <section className="bg-white py-16 px-4 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          E-Commerce Website Development
        </h1>
        <span className="w-[200px] h-[2px] block mt-[35px] mb-[25px] bg-[#D9B592] mx-auto"></span>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Launch a stunning online store that boosts sales, engages customers,
          and simplifies management.
        </p>
      </section>

      {/* Services Overview */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-white shadow-lg rounded-lg text-center">
            <h2 className="text-2xl font-semibold mb-4">Custom Store Design</h2>
            <p className="text-gray-600">
              Unique designs tailored to your brand for a standout shopping
              experience.
            </p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-lg text-center">
            <h2 className="text-2xl font-semibold mb-4">Payment Integration</h2>
            <p className="text-gray-600">
              Secure payment gateways to ensure smooth and safe transactions.
            </p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-lg text-center">
            <h2 className="text-2xl font-semibold mb-4">
              Inventory Management
            </h2>
            <p className="text-gray-600">
              Simplified product management to keep your store organized and
              efficient.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-white py-12 px-6 lg:px-32 mb-12 rounded-xl shadow-lg">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-700 mb-6">
            Why Choose My E-Commerce Services?
          </h2>
          <ul className="list-inside list-disc space-y-4 text-lg text-[#525252]">
            <li className="flex items-start space-x-3">
              <span className="text-[#D9B592] text-2xl">•</span>
              <p>Fully responsive and user-friendly stores</p>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-[#D9B592] text-2xl">•</span>
              <p>SEO-optimized to drive organic traffic</p>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-[#D9B592] text-2xl">•</span>
              <p>Secure payment and order systems</p>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-[#D9B592] text-2xl">•</span>
              <p>Integration with popular platforms</p>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-[#D9B592] text-2xl">•</span>
              <p>Custom features to suit your needs</p>
            </li>
          </ul>
        </div>
      </section>

      <WebsiteShowcase />

      {/* Call-to-Action */}
      <section className="bg-[#D9B592] text-white py-12 text-center">
        <h3 className="text-3xl font-bold mb-4">Start Selling Online</h3>
        <p className="mb-8 text-lg">
          Let's build your perfect e-commerce website to grow your business and
          maximize sales.
        </p>
        <div className="flex justify-center space-x-4">
                            <Link
                              to="/contact"
                              className="px-4 py-2  bg-white text-[#D9B592] font-semibold rounded-md shadow-md hover:bg-[#343434] transition"
                            >
                              Request a Quote
                            </Link>
                            <Link
                              to="/appointment"
                              className="px-4 py-2  bg-white text-[#D9B592] font-semibold rounded-md shadow-md hover:bg-[#343434] transition"
                            >
                              Book an Appointment
                            </Link>
                            </div>
      </section>
    </div>
  );
};

export default Ecommerce;
