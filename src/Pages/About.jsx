import React from 'react';

function About() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center py-10">
      <h1 className="text-4xl font-bold mb-6 text-gray-800">About Me</h1>
      <p className="max-w-2xl text-center text-lg text-gray-600 mb-10 px-4">
        Hello! I'm a passionate developer with a love for creating
        engaging and dynamic web applications. I enjoy working with modern
        technologies and continuously learning to enhance my skills.
      </p>

      <div className="flex flex-col md:flex-row gap-8 px-4">
        <div className="bg-white rounded-lg shadow-lg p-6 max-w-xs text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Skills</h2>
          <ul className="list-disc list-inside text-gray-600">
            <li>JavaScript</li>
            <li>React</li>
            <li>Tailwind CSS</li>
            <li>Node.js</li>
            <li>Git & GitHub</li>
          </ul>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 max-w-xs text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Interests</h2>
          <ul className="list-disc list-inside text-gray-600">
            <li>Web Development</li>
            <li>UI/UX Design</li>
            <li>Open Source Contributions</li>
            <li>Machine Learning</li>
            <li>Traveling</li>
          </ul>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 max-w-xs text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact</h2>
          <p className="text-gray-600 mb-4">Feel free to reach out!</p>
          <a
            href="mailto:your-email@example.com"
            className="text-blue-500 hover:underline"
          >
            your-email@example.com
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
