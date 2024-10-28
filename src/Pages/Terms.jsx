import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
  return (
    <div className="max-w-3xl mx-auto p-5">
      <h1 className="text-2xl font-bold mb-4">Terms and Conditions</h1>
      <p className="mb-4">
        Welcome to SolverSilver. By accessing or using my services, you agree to be bound by these terms and conditions.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">1. Acceptance of Terms</h2>
      <p className="mb-4">
        By using this site, you signify your acceptance of these terms. If you do not agree with any of these terms, please let us know before using our services.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">2. Changes to Terms</h2>
      <p className="mb-4">
        We reserve the right to update or change these terms at any time. Your continued use of the service after any changes constitutes your acceptance of the new terms.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">3. User Responsibilities</h2>
      <p className="mb-4">
        You agree to use the service only for lawful purposes. You are responsible for your own conduct and any content you submit.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">4. Intellectual Property</h2>
      <p className="mb-4">
        All content, trademarks, and other intellectual property on this site are owned by or licensed to SolverSilver. You may not use any content without our express written permission.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">5. Payment Terms</h2>
      <p className="mb-4">
        Payment for services is required in advance unless otherwise agreed. All payments are non-refundable unless otherwise agreed.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">6. Limitation of Liability</h2>
      <p className="mb-4">
        SolverSilver shall not be liable for any indirect, incidental, or consequential damages arising from your use of the service.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">7. Termination</h2>
      <p className="mb-4">
        We reserve the right to terminate your access to our services at any time, without notice, for conduct that we believe violates these terms or is harmful to other users or us.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">8. Governing Law</h2>
      <p className="mb-4">
        These terms are governed by applicable laws, and any disputes will be resolved accordingly.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">9. Contact Information</h2>
      <p className="mb-4">
        If you have any questions about these terms, please contact us  <Link to="/contact" className='cursor-pointer underline text-blue-700'>here</Link>.
      </p>
    </div>
  );
};

export default Terms;
