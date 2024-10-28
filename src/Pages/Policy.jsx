import React from 'react';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
  return (
    <div className="max-w-3xl mx-auto p-5">
      <h1 className="text-2xl font-bold mb-4">Privacy Policy</h1>
      <p className="mb-4">
        Welcome to SolverSilver. Your privacy is important to us. This Privacy Policy outlines how we collect, use, and protect your information when you use our services.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">1. Information We Collect</h2>
      <p className="mb-4">
        We may collect personal information such as your name, email address, and any other information you provide when you contact us or use our services.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">2. How We Use Your Information</h2>
      <p className="mb-4">
        We use your information to:
        <ul className="list-disc list-inside">
          <li>Provide and improve our services.</li>
          <li>Respond to your inquiries.</li>
          <li>Send you updates and promotional materials (if you have opted in).</li>
          <li>Monitor usage of the site to improve user experience.</li>
        </ul>
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">3. Information Sharing</h2>
      <p className="mb-4">
        We do not sell or share your personal information with third parties without your consent, except as required by law or to protect our rights.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">4. Data Security</h2>
      <p className="mb-4">
        We take reasonable measures to protect your information from unauthorized access, disclosure, alteration, or destruction. However, no method of transmission over the internet or method of electronic storage is 100% secure.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">5. Your Rights</h2>
      <p className="mb-4">
        You have the right to:
        <ul className="list-disc list-inside">
          <li>Access the personal information we hold about you.</li>
          <li>Request corrections to your personal information.</li>
          <li>Request deletion of your personal information.</li>
        </ul>
        To exercise these rights, please contact us at <Link to="/contact" className='cursor-pointer underline text-blue-700'>here</Link>.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">6. Changes to This Policy</h2>
      <p className="mb-4">
        We may update our Privacy Policy from time to time. Any changes will be posted on this page, and we will notify you of any significant changes through email or by placing a notice on our site.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">7. Contact Information</h2>
      <p className="mb-4">
        If you have any questions or concerns about this Privacy Policy, please contact us at <Link to="/contact" className='cursor-pointer underline text-blue-700'>here</Link>.
      </p>
    </div>
  );
};

export default PrivacyPolicy;
  