import React from 'react';

const FullStack = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      {/* Hero Section */}
      <section className="bg-white py-16 px-4 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Full-Stack Web Development</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          End-to-end web solutions from concept to deployment with modern full-stack technologies.
        </p>
      </section>

      {/* Services Overview */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-white shadow-lg rounded-lg text-center">
            <h2 className="text-2xl font-semibold mb-4">Front-End Development</h2>
            <p className="text-gray-600">
              Stunning user interfaces using modern frameworks like React and Tailwind CSS.
            </p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-lg text-center">
            <h2 className="text-2xl font-semibold mb-4">Back-End Development</h2>
            <p className="text-gray-600">
              Robust and scalable APIs using Node.js, Express.js, and MongoDB.
            </p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-lg text-center">
            <h2 className="text-2xl font-semibold mb-4">Deployment & Support</h2>
            <p className="text-gray-600">
              End-to-end deployment and ongoing support for smooth operations.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-gray-200 py-16 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Why Choose Full-Stack Solutions?</h2>
          <ul className="text-gray-600 list-disc list-inside text-left inline-block">
            <li>Complete development from front-end to back-end</li>
            <li>Efficient and scalable solutions</li>
            <li>Custom APIs and database integration</li>
            <li>Responsive designs for all devices</li>
            <li>High performance and modern technology stack</li>
          </ul>
        </div>
      </section>

      {/* Call-to-Action */}
      <section className="py-12 px-4 text-center">
        <h3 className="text-3xl font-semibold mb-4">Transform Your Business with Full-Stack Development</h3>
        <p className="text-gray-600 mb-6">
          Build powerful, feature-rich web applications that drive results.
        </p>
        <a
          href="/contact"
          className="inline-block bg-gray-900 text-white px-6 py-3 rounded hover:bg-gray-700 transition-all"
        >
          Start Your Project
        </a>
      </section>
    </div>
  );
};

export default FullStack;