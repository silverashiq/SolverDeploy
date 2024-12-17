import React from 'react';

const Business = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      {/* Hero Section */}
      <section className="bg-white py-16 px-4 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Professional Business Website Design</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Build a strong online presence with customized, scalable, and business-focused website solutions.
        </p>
      </section>

      {/* Services Overview */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-white shadow-lg rounded-lg text-center">
            <h2 className="text-2xl font-semibold mb-4">Custom Business Solutions</h2>
            <p className="text-gray-600">
              Websites tailored to meet the specific needs of your business, driving growth and success.
            </p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-lg text-center">
            <h2 className="text-2xl font-semibold mb-4">SEO Optimized</h2>
            <p className="text-gray-600">
              Designed to rank higher in search results, ensuring your audience finds you easily.
            </p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-lg text-center">
            <h2 className="text-2xl font-semibold mb-4">User-Friendly Design</h2>
            <p className="text-gray-600">
              Intuitive designs for seamless navigation, helping you engage and retain visitors.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-gray-200 py-16 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Why Choose My Business Website Design?</h2>
          <ul className="text-gray-600 list-disc list-inside text-left inline-block">
            <li>Custom-built websites tailored to your brand identity</li>
            <li>Responsive layouts for all devices</li>
            <li>SEO and speed optimized for better performance</li>
            <li>Integrated contact forms and business features</li>
            <li>Ongoing support and maintenance</li>
          </ul>
        </div>
      </section>

      {/* Call-to-Action */}
      <section className="py-12 px-4 text-center">
        <h3 className="text-3xl font-semibold mb-4">Take Your Business to the Next Level</h3>
        <p className="text-gray-600 mb-6">
          Let's collaborate to build a professional website that showcases your business and attracts clients.
        </p>
        <a
          href="/contact"
          className="inline-block bg-gray-900 text-white px-6 py-3 rounded hover:bg-gray-700 transition-all"
        >
          Get Started Now
        </a>
      </section>
    </div>
  );
};

export default Business;