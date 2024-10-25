import React from 'react';

function Website() {
  const projects = [
    {
      id: 1,
      title: 'WordPress Development',
      description: 'Custom themes and plugin integration for tailored functionality.',
      imageUrl: 'https://via.placeholder.com/300', // Replace with actual image URL
      link: '#', // Replace with actual project link
    },
    {
      id: 2,
      title: 'Landing Page',
      description: 'High-converting, responsive designs optimized for user engagement.',
      imageUrl: 'https://via.placeholder.com/300', // Replace with actual image URL
      link: '#',
    },
    {
      id: 3,
      title: 'Business Website',
      description: 'Professional, SEO-optimized websites with user-friendly navigation.',
      imageUrl: 'https://via.placeholder.com/300', // Replace with actual image URL
      link: '#',
    },
    {
      id: 4,
      title: 'Web-App',
      description: 'Custom solutions with a focus on UI/UX and API integration.',
      imageUrl: 'https://via.placeholder.com/300', // Replace with actual image URL
      link: '#',
    },
    {
      id: 5,
      title: 'MERN (Frontend + Backend)',
      description: 'Full-stack applications built with MongoDB, Express.js, React, and Node.js.',
      imageUrl: 'https://via.placeholder.com/300', // Replace with actual image URL
      link: '#',
    },
    {
      id: 6,
      title: 'E-Commerce site',
      description: 'Custom online stores with secure payment integration and inventory management.',
      imageUrl: 'https://via.placeholder.com/300', // Replace with actual image URL
      link: '#',
    },
    // Add more projects as needed
  ];

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center py-10">
      <h1 className="text-4xl font-bold mb-6 text-gray-800">Full Stack Web-Development</h1>
      <p className="max-w-2xl text-center text-lg text-gray-600 mb-10 px-4">
      Discover the comprehensive web design services I offer. Please select any area of interest for more information.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6  mx-4 md:mx-14 px-4">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300"
          >
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h2>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <a
                href={project.link}
                className="text-blue-500 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Website;
