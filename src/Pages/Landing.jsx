import React from "react";
import WebsiteShowcase from "../Components/WebsiteShowcase";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      {/* Hero Section */}
      <section className="bg-white py-16 px-4 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Professional Landing Page Designs
        </h1>
        <span className="w-[200px] h-[2px] block mt-[35px] mb-[25px] bg-[#D9B592] mx-auto"></span>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Elevate your brand with custom-designed, responsive, and user-friendly
          landing pages tailored to your needs.
        </p>
      </section>

      {/* Services Overview */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Service 1 */}
          <div className="p-6 bg-white shadow-lg rounded-lg text-center">
            <h2 className="text-2xl font-semibold mb-4">Custom Design</h2>
            <p className="text-gray-600">
              Unique and creative designs tailored to fit your business identity
              and goals.
            </p>
          </div>

          {/* Service 2 */}
          <div className="p-6 bg-white shadow-lg rounded-lg text-center">
            <h2 className="text-2xl font-semibold mb-4">Responsive Layouts</h2>
            <p className="text-gray-600">
              Optimized for all devices, ensuring a seamless user experience
              across desktops, tablets, and phones.
            </p>
          </div>

          {/* Service 3 */}
          <div className="p-6 bg-white shadow-lg rounded-lg text-center">
            <h2 className="text-2xl font-semibold mb-4">Conversion Focused</h2>
            <p className="text-gray-600">
              Designed with strategic CTAs to turn visitors into customers and
              maximize your ROI.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-white py-12 px-6 lg:px-32 mb-12 rounded-xl shadow-lg">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-700 mb-6">
            Why Choose My Landing Page Designs?
          </h2>
          <p className="text-gray-700 mb-6">
            I specialize in creating impactful landing pages that help
            businesses attract customers, build trust, and grow.
          </p>
          <ul className="list-inside list-disc space-y-4 text-lg text-[#525252]">
            <li className="flex items-start space-x-3">
              <span className="text-[#D9B592] text-2xl">•</span>
              <p>Pixel-perfect designs tailored to your brand</p>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-[#D9B592] text-2xl">•</span>
              <p>SEO-friendly structure for higher visibility</p>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-[#D9B592] text-2xl">•</span>
              <p>Fast-loading and optimized performance</p>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-[#D9B592] text-2xl">•</span>
              <p>Unlimited revisions until you're satisfied</p>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-[#D9B592] text-2xl">•</span>
              <p>Full support from design to implementation</p>
            </li>
          </ul>
        </div>
      </section>

      <WebsiteShowcase />

      {/* Call-to-Action */}
      <section className="bg-[#D9B592] text-white py-12 text-center">
        <h3 className="text-3xl font-bold mb-4">Ready to Get Started?</h3>
        <p className="mb-8 text-lg">
          Contact me today to bring your ideas to life and create a
          high-performing landing page for your business.
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

export default Landing;
