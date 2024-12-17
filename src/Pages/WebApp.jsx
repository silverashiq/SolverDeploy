import React from 'react';

const WebApp = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      {/* Hero Section */}
      <section className="bg-white py-16 px-4 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Custom Web Application Development</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Scalable, secure, and innovative web applications tailored to meet your unique business needs.
        </p>
      </section>

      {/* Services Overview */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-white shadow-lg rounded-lg text-center">
            <h2 className="text-2xl font-semibold mb-4">Tailored Development</h2>
            <p className="text-gray-600">
              Web apps designed specifically for your business goals and workflow.
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
      <section className="bg-gray-200 py-16 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Benefits of My Web App Solutions</h2>
          <ul className="text-gray-600 list-disc list-inside text-left inline-block">
            <li>Custom features to solve complex problems</li>
            <li>Seamless integrations with existing systems</li>
            <li>High-performance, fast-loading apps</li>
            <li>User-friendly and intuitive design</li>
            <li>Ongoing support and optimization</li>
          </ul>
        </div>
      </section>

      {/* Call-to-Action */}
      <section className="py-12 px-4 text-center">
        <h3 className="text-3xl font-semibold mb-4">Let's Build Your Web Application</h3>
        <p className="text-gray-600 mb-6">
          Bring your ideas to life with custom-built web applications tailored for success.
        </p>
        <a
          href="/contact"
          className="inline-block bg-gray-900 text-white px-6 py-3 rounded hover:bg-gray-700 transition-all"
        >
          Get Started
        </a>
      </section>
    </div>
  );
};

export default WebApp;