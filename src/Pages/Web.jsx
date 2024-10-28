import React from 'react';

function Website() {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Site',
      description: 'Custom online stores with secure payment integration and inventory management.',
      imageUrl: 'https://via.placeholder.com/300',
      link: '#',
    },
    {
      id: 2,
      title: 'Web-App',
      description: 'Custom solutions focused on UI/UX and API integration.',
      imageUrl: 'https://via.placeholder.com/300',
      link: '#',
    },
    {
      id: 3,
      title: 'Frontend Design',
      description: 'High-converting, responsive designs optimized for user engagement.',
      imageUrl: 'https://via.placeholder.com/300',
      link: '#',
    },
    {
      id: 4,
      title: 'Business Website',
      description: 'Professional, SEO-optimized websites with user-friendly navigation.',
      imageUrl: 'https://via.placeholder.com/300',
      link: '#',
    },
    {
      id: 5,
      title: 'Full-Stack Development',
      description: 'Full-stack applications built using MongoDB, Express.js, React, and Node.js.',
      imageUrl: 'https://via.placeholder.com/300',
      link: '#',
    },
    {
      id: 6,
      title: 'WordPress',
      description: 'Custom themes and plugin integration for tailored functionality.',
      imageUrl: 'https://via.placeholder.com/300',
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

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 mx-4 md:mx-14 px-4">
        {projects.map((project) => (
          <a
            key={project.id}
            href={project.link}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300 cursor-pointer"
          >
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h2>
              <p className="text-gray-600 mb-4">{project.description}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Website;
