import React from 'react';

const Ecommerce = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      {/* Hero Section */}
      <section className="bg-white py-16 px-4 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">E-Commerce Website Development</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Launch a stunning online store that boosts sales, engages customers, and simplifies management.
        </p>
      </section>

      {/* Services Overview */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-white shadow-lg rounded-lg text-center">
            <h2 className="text-2xl font-semibold mb-4">Custom Store Design</h2>
            <p className="text-gray-600">
              Unique designs tailored to your brand for a standout shopping experience.
            </p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-lg text-center">
            <h2 className="text-2xl font-semibold mb-4">Payment Integration</h2>
            <p className="text-gray-600">
              Secure payment gateways to ensure smooth and safe transactions.
            </p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-lg text-center">
            <h2 className="text-2xl font-semibold mb-4">Inventory Management</h2>
            <p className="text-gray-600">
              Simplified product management to keep your store organized and efficient.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-gray-200 py-16 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Why Choose My E-Commerce Services?</h2>
          <ul className="text-gray-600 list-disc list-inside text-left inline-block">
            <li>Fully responsive and user-friendly stores</li>
            <li>SEO-optimized to drive organic traffic</li>
            <li>Secure payment and order systems</li>
            <li>Integration with popular platforms</li>
            <li>Custom features to suit your needs</li>
          </ul>
        </div>
      </section>

      {/* Call-to-Action */}
      <section className="py-12 px-4 text-center">
        <h3 className="text-3xl font-semibold mb-4">Start Selling Online</h3>
        <p className="text-gray-600 mb-6">
          Let's build your perfect e-commerce website to grow your business and maximize sales.
        </p>
        <a
          href="/contact"
          className="inline-block bg-gray-900 text-white px-6 py-3 rounded hover:bg-gray-700 transition-all"
        >
          Launch Your Store
        </a>
      </section>
    </div>
  );
};

export default Ecommerce;