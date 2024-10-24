import React from 'react';

function Website() {
  const projects = [
    {
      id: 1,
      title: 'Project One',
      description: 'A brief description of Project One, highlighting its features and technologies used.',
      imageUrl: 'https://via.placeholder.com/300', // Replace with actual image URL
      link: '#', // Replace with actual project link
    },
    {
      id: 2,
      title: 'Project Two',
      description: 'A brief description of Project Two, highlighting its features and technologies used.',
      imageUrl: 'https://via.placeholder.com/300', // Replace with actual image URL
      link: '#',
    },
    {
      id: 3,
      title: 'Project Three',
      description: 'A brief description of Project Three, highlighting its features and technologies used.',
      imageUrl: 'https://via.placeholder.com/300', // Replace with actual image URL
      link: '#',
    },
    {
      id: 4,
      title: 'Project Four',
      description: 'A brief description of Project Four, highlighting its features and technologies used.',
      imageUrl: 'https://via.placeholder.com/300', // Replace with actual image URL
      link: '#',
    },
    // Add more projects as needed
  ];

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center py-10">
      <h1 className="text-4xl font-bold mb-6 text-gray-800">My Websites</h1>
      <p className="max-w-2xl text-center text-lg text-gray-600 mb-10 px-4">
        Here are some of the websites I have developed. Click on the project titles to view more details.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
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
