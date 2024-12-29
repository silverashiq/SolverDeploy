import React from "react";
import WebsiteShowcase from "../Components/WebsiteShowcase";
import { Link } from "react-router-dom";

const Redesign = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      {/* Hero Section */}
      <section className="bg-white py-16 px-4 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Revamp Your Website with Modern Redesign Services
        </h1>
        <span className="w-[200px] h-[2px] block mt-[35px] mb-[25px] bg-[#D9B592] mx-auto"></span>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Transform outdated websites into stunning, fast, and user-friendly
          experiences that drive results.
        </p>
      </section>

      {/* Services Overview */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-white shadow-lg rounded-lg text-center">
            <h2 className="text-2xl font-semibold mb-4">Modern Look</h2>
            <p className="text-gray-600">
              Give your website a fresh, contemporary design that attracts and
              engages users.
            </p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-lg text-center">
            <h2 className="text-2xl font-semibold mb-4">
              Performance Upgrades
            </h2>
            <p className="text-gray-600">
              Improve site speed and functionality for a seamless user
              experience.
            </p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-lg text-center">
            <h2 className="text-2xl font-semibold mb-4">Mobile Optimization</h2>
            <p className="text-gray-600">
              Ensure your site looks and performs beautifully on all devices.
            </p>
          </div>
        </div>
      </section>
{/* Benefits Section */}
<section className="bg-white py-12 px-6 lg:px-32 mb-12 rounded-xl shadow-lg">
  <div className="max-w-3xl mx-auto text-center">
    <h2 className="text-3xl font-bold text-gray-700 mb-6">
      Why Redesign Your Website?
    </h2>
    <ul className="list-inside list-disc space-y-4 text-lg text-[#525252]">
      <li className="flex items-start space-x-3">
        <span className="text-[#D9B592] text-2xl">•</span>
        <p>Outdated websites lose visitors and credibility</p>
      </li>
      <li className="flex items-start space-x-3">
        <span className="text-[#D9B592] text-2xl">•</span>
        <p>Fresh designs boost conversions and user trust</p>
      </li>
      <li className="flex items-start space-x-3">
        <span className="text-[#D9B592] text-2xl">•</span>
        <p>Improved SEO and faster load times</p>
      </li>
      <li className="flex items-start space-x-3">
        <span className="text-[#D9B592] text-2xl">•</span>
        <p>Enhanced mobile responsiveness for all users</p>
      </li>
      <li className="flex items-start space-x-3">
        <span className="text-[#D9B592] text-2xl">•</span>
        <p>Modern features and sleek layouts</p>
      </li>
    </ul>
  </div>
</section>


      <WebsiteShowcase />

      {/* Call-to-Action */}
      <section className="bg-[#D9B592] text-white py-12 text-center">
        <h3 className="text-3xl font-bold mb-4">
          Ready to Transform Your Website
        </h3>
        <p className="mb-8 text-lg">
          Get a website that works for your audience and meets modern standards.
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

export default Redesign;
