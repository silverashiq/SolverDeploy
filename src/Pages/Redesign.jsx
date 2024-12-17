import React from 'react';

const Redesign = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      {/* Hero Section */}
      <section className="bg-white py-16 px-4 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Revamp Your Website with Modern Redesign Services</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Transform outdated websites into stunning, fast, and user-friendly experiences that drive results.
        </p>
      </section>

      {/* Services Overview */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-white shadow-lg rounded-lg text-center">
            <h2 className="text-2xl font-semibold mb-4">Modern Look</h2>
            <p className="text-gray-600">
              Give your website a fresh, contemporary design that attracts and engages users.
            </p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-lg text-center">
            <h2 className="text-2xl font-semibold mb-4">Performance Upgrades</h2>
            <p className="text-gray-600">
              Improve site speed and functionality for a seamless user experience.
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
      <section className="bg-gray-200 py-16 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Why Redesign Your Website?</h2>
          <ul className="text-gray-600 list-disc list-inside text-left inline-block">
            <li>Outdated websites lose visitors and credibility</li>
            <li>Fresh designs boost conversions and user trust</li>
            <li>Improved SEO and faster load times</li>
            <li>Enhanced mobile responsiveness for all users</li>
            <li>Modern features and sleek layouts</li>
          </ul>
        </div>
      </section>

      {/* Call-to-Action */}
      <section className="py-12 px-4 text-center">
        <h3 className="text-3xl font-semibold mb-4">Ready to Transform Your Website?</h3>
        <p className="text-gray-600 mb-6">
          Get a website that works for your audience and meets modern standards.
        </p>
        <a
          href="/contact"
          className="inline-block bg-gray-900 text-white px-6 py-3 rounded hover:bg-gray-700 transition-all"
        >
          Start Your Redesign
        </a>
      </section>
    </div>
  );
};

export default Redesign;
