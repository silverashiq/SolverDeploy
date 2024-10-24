import React from 'react';
import { Link } from 'react-router-dom';

const Policy = () => {
  return (
    <div className="max-w-3xl mx-auto p-5">
      <h1 className="text-2xl font-bold mb-4">Privacy Policy</h1>
      <p className="mb-4">
        Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your information.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">1. Information We Collect</h2>
      <p className="mb-4">
        We may collect personal information such as your name, email address, and any other information you provide when using our service.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">2. How We Use Your Information</h2>
      <p className="mb-4">
        We use your information to improve our services, communicate with you, and provide a better user experience.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">3. Sharing Your Information</h2>
      <p className="mb-4">
        We do not sell or rent your personal information to third parties. We may share your information with trusted partners to help us operate our service.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">4. Security of Your Information</h2>
      <p className="mb-4">
        We take reasonable measures to protect your personal information from unauthorized access, use, or disclosure.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">5. Changes to This Policy</h2>
      <p className="mb-4">
        We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">6. Contact Us</h2>
      <p className="mb-4">
        If you have any questions about this Privacy Policy, please contact us  <Link to="/contact" className='cursor-pointer underline text-blue-700'>here</Link>.
      </p>
    </div>
  );
};

export default Policy;
