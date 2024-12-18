import React, { useState, useEffect } from 'react';

const Appointment = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    meetingPlatform: '',
  });

  const [submissionStatus, setSubmissionStatus] = useState('');
  const [showContactInfo, setShowContactInfo] = useState(false);
  const [timeZone, setTimeZone] = useState('');

  useEffect(() => {
    setTimeZone(Intl.DateTimeFormat().resolvedOptions().timeZone);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Appointment booked:', formData);
    setSubmissionStatus('Your appointment has been booked! Thank you.');
    setFormData({ name: '', email: '', phone: '', date: '', time: '', meetingPlatform: '' });
  };

  const handleContactInquiry = () => {
    window.location.href = '/contact';
  };

  const toggleContactInfo = () => setShowContactInfo((prev) => !prev);

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 py-10">
              {/* Maintenance Notice */}
              <div className="bg-yellow-100 text-gray-800 px-6 py-3 rounded-lg mb-6 text-center shadow-md max-w-lg">
          <p>
            <strong>Notice:</strong> The backend system for form submission is
            currently under maintenance. Feel free to browse the page and try
            out the features, but submissions will not be processed at this
            time.
          </p>
        </div>
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
        <h2 className="text-4xl text-center font-bold text-gray-700">Book an Appointment</h2>
        <div className="flex justify-center">
          <span className="w-[200px] h-[2px] block mt-8 mb-6 bg-[#D9B592]"></span>
        </div>

        {submissionStatus && <p className="text-green-600 text-center mb-4">{submissionStatus}</p>}

        <p className="text-center text-lg text-gray-600 mb-8">Your Time Zone: {timeZone}</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          {['name', 'email', 'phone'].map((field) => (
            <div key={field}>
              <label className="block text-sm font-medium mb-1" htmlFor={field}>
                {field.charAt(0).toUpperCase() + field.slice(1)}
              </label>
              <input
                type={field === 'email' ? 'email' : 'text'}
                id={field}
                name={field}
                value={formData[field]}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          ))}

          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="date">Date</label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="time">Time</label>
            <input
              type="time"
              id="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="meetingPlatform">Meeting Platform</label>
            <select
              id="meetingPlatform"
              name="meetingPlatform"
              value={formData.meetingPlatform}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select a platform</option>
              <option value="Google Meet">Google Meet</option>
              <option value="Zoom">Zoom</option>
              <option value="Skype">Skype</option>
              <option value="Facebook">Facebook</option>
              <option value="WhatsApp">WhatsApp</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-[#D9B592] text-white rounded-lg py-2 hover:bg-[#343434] transition duration-200"
          >
            Book Appointment
          </button>
        </form>
      </div>

      <hr className="w-full max-w-lg my-6 border-gray-300 opacity-40" />

      <div className="flex flex-col items-center mb-6">
        <button
          onClick={toggleContactInfo}
          className="bg-[#343434] text-white font-semibold py-1 px-3 rounded-lg hover:bg-[#D9B592] transition duration-200"
        >
          {showContactInfo ? 'Hide Contact Info' : 'Contact Info'}
        </button>

        {showContactInfo && (
          <p className="mt-4 text-gray-600 text-center">
            Email: <a href="mailto:info@solversilver.com" className="text-blue-500">info@solversilver.com</a><br />
            WhatsApp: <a href="https://wa.me/8801686335821" className="text-blue-500">+8801686335821</a>
          </p>
        )}
      </div>

      <hr className="w-full max-w-lg mb-6 border-gray-300 opacity-40" />

      <div className="text-center">
        <p className="text-lg mb-4">Send an Email for Inquiry/Quote</p>
        <button
          onClick={handleContactInquiry}
          className="bg-[#343434] text-white font-semibold py-1 px-3 rounded-lg hover:bg-[#D9B592] transition duration-200"
        >
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default Appointment;
