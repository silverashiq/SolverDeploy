import React from 'react';

const Landing = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      {/* Hero Section */}
      <section className="bg-white py-16 px-4 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Professional Landing Page Designs</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Elevate your brand with custom-designed, responsive, and user-friendly landing pages tailored to your needs.
        </p>
      </section>

      {/* Services Overview */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Service 1 */}
          <div className="p-6 bg-white shadow-lg rounded-lg text-center">
            <h2 className="text-2xl font-semibold mb-4">Custom Design</h2>
            <p className="text-gray-600">
              Unique and creative designs tailored to fit your business identity and goals.
            </p>
          </div>

          {/* Service 2 */}
          <div className="p-6 bg-white shadow-lg rounded-lg text-center">
            <h2 className="text-2xl font-semibold mb-4">Responsive Layouts</h2>
            <p className="text-gray-600">
              Optimized for all devices, ensuring a seamless user experience across desktops, tablets, and phones.
            </p>
          </div>

          {/* Service 3 */}
          <div className="p-6 bg-white shadow-lg rounded-lg text-center">
            <h2 className="text-2xl font-semibold mb-4">Conversion Focused</h2>
            <p className="text-gray-600">
              Designed with strategic CTAs to turn visitors into customers and maximize your ROI.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-gray-200 py-16 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Why Choose My Landing Page Designs?</h2>
          <p className="text-gray-700 mb-4">
            I specialize in creating impactful landing pages that help businesses attract customers, build trust, and grow.
          </p>
          <ul className="text-gray-600 list-disc list-inside text-left inline-block">
            <li>Pixel-perfect designs tailored to your brand</li>
            <li>SEO-friendly structure for higher visibility</li>
            <li>Fast-loading and optimized performance</li>
            <li>Unlimited revisions until you're satisfied</li>
            <li>Full support from design to implementation</li>
          </ul>
        </div>
      </section>

      {/* Call-to-Action */}
      <section className="py-12 px-4 text-center">
        <h3 className="text-3xl font-semibold mb-4">Ready to Get Started?</h3>
        <p className="text-gray-600 mb-6">
          Contact me today to bring your ideas to life and create a high-performing landing page for your business.
        </p>
        <a
          href="/contact"
          className="inline-block bg-gray-900 text-white px-6 py-3 rounded hover:bg-gray-700 transition-all"
        >
          Get a Quote
        </a>
      </section>
    </div>
  );
};

export default Landing;