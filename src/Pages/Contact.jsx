import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to an API)
    console.log('Form submitted:', formData);
    // Reset form after submission
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center py-10">
      <h1 className="text-4xl font-bold mb-6 text-gray-800">Contact Me</h1>
      <p className="max-w-2xl text-center text-lg text-gray-600 mb-10 px-4">
        I'd love to hear from you! Please fill out the form below to get in touch.
      </p>

      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-lg shadow-lg p-8 max-w-lg w-full"
      >
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="border border-gray-300 p-2 w-full rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="border border-gray-300 p-2 w-full rounded-lg focus:outline-none focus:border-blue-500"
          />
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            name="message"
            id="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="4"
            className="border border-gray-300 p-2 w-full rounded-lg focus:outline-none focus:border-blue-500"
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;
