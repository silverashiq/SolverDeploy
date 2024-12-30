import React from "react";
import WebsiteShowcase from "../Components/WebsiteShowcase";
import { Link } from "react-router-dom";

const WebApp = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      {/* Hero Section */}
      <section className="bg-white py-16 px-4 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Custom Web Application Development
        </h1>
        <span className="w-[200px] h-[2px] block mt-[35px] mb-[25px] bg-[#D9B592] mx-auto"></span>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Scalable, secure, and innovative web applications tailored to meet
          your unique business needs.
        </p>
      </section>

      {/* Services Overview */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-white shadow-lg rounded-lg text-center">
            <h2 className="text-2xl font-semibold mb-4">
              Tailored Development
            </h2>
            <p className="text-gray-600">
              Web apps designed specifically for your business goals and
              workflow.
            </p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-lg text-center">
            <h2 className="text-2xl font-semibold mb-4">Secure and Reliable</h2>
            <p className="text-gray-600">
              Built with security and scalability to support growing user bases.
            </p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-lg text-center">
            <h2 className="text-2xl font-semibold mb-4">Modern Technologies</h2>
            <p className="text-gray-600">
              Leveraging the latest frameworks for seamless user experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-white py-12 px-6 lg:px-32 mb-12 rounded-xl shadow-lg">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-700 mb-6">
            Benefits of My Web App Solutions
          </h2>
          <ul className="list-inside list-disc space-y-4 text-lg text-[#525252]">
            <li className="flex items-start space-x-3">
              <span className="text-[#D9B592] text-2xl">•</span>
              <p>Custom features to solve complex problems</p>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-[#D9B592] text-2xl">•</span>
              <p>Seamless integrations with existing systems</p>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-[#D9B592] text-2xl">•</span>
              <p>High-performance, fast-loading apps</p>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-[#D9B592] text-2xl">•</span>
              <p>User-friendly and intuitive design</p>
            </li>
            <li className="flex items-start space-x-3">
              <span className="text-[#D9B592] text-2xl">•</span>
              <p>Ongoing support and optimization</p>
            </li>
          </ul>
        </div>
      </section>

      <WebsiteShowcase />

      {/* Call-to-Action */}
      <section className="bg-[#D9B592] text-white py-12 text-center">
        <h3 className="text-3xl font-bold mb-4">
          Let's Build Your Web Application
        </h3>
        <p className="mb-8 text-lg">
          Bring your ideas to life with custom-built web applications tailored
          for success.
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

export default WebApp;
