import React from 'react';

function Graphics() {
  const graphicsData = [
    {
      id: 1,
      title: 'Graphic Design 1',
      description: 'A brief description of graphic design 1.',
      imageUrl: 'https://via.placeholder.com/300', // Replace with actual image URL
    },
    {
      id: 2,
      title: 'Graphic Design 2',
      description: 'A brief description of graphic design 2.',
      imageUrl: 'https://via.placeholder.com/300', // Replace with actual image URL
    },
    {
      id: 3,
      title: 'Graphic Design 3',
      description: 'A brief description of graphic design 3.',
      imageUrl: 'https://via.placeholder.com/300', // Replace with actual image URL
    },
    {
      id: 4,
      title: 'Graphic Design 4',
      description: 'A brief description of graphic design 4.',
      imageUrl: 'https://via.placeholder.com/300', // Replace with actual image URL
    },
    // Add more graphics as needed
  ];

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center py-10">
      <h1 className="text-4xl font-bold mb-6 text-gray-800">Graphic Designs</h1>
      <p className="max-w-2xl text-center text-lg text-gray-600 mb-10 px-4">
        Here are some of my graphic design works. Click on the images for more details.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4">
        {graphicsData.map((graphic) => (
          <div
            key={graphic.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <img
              src={graphic.imageUrl}
              alt={graphic.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">{graphic.title}</h2>
              <p className="text-gray-600">{graphic.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Graphics;
