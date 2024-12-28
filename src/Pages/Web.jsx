import React from 'react';

function Website() {
  const projects = [
    {
      id: 1,
      title: 'Landing Page',
      description: 'A clean, conversion-focused landing page with clear CTAs, responsive design, and engaging visuals.',
      imageUrl: 'https://res.cloudinary.com/dntx46fvh/image/upload/w_500/dpr_auto/q_auto/v1733608692/landing-page-design-modern-responsive_hdwifs.png',
      link: '/landing',
    },
    {
      id: 2,
      title: 'Business Website',
      description: 'A professional, user-friendly business website with responsive design and clear navigation.',
      imageUrl: 'https://res.cloudinary.com/dntx46fvh/image/upload/w_500/dpr_auto/q_auto/v1733608693/business-website-design-professional-responsive_q2tlxw.png',
      link: '/business',
    },
    {
      id: 3,
      title: 'Website Re-design',
      description: 'A modern, responsive website redesign with enhanced usability and optimized performance.',
      imageUrl: 'https://res.cloudinary.com/dntx46fvh/image/upload/w_500/dpr_auto/q_auto/v1733608693/full-website-redesign-modern-responsive_xvj5cd.png',
      link: '/redo',
    },
    {
      id: 4,
      title: 'E-Commerce Website',
      description: 'High-converting, sleek, responsive e-commerce website with easy navigation and secure checkout.',
      imageUrl: 'https://res.cloudinary.com/dntx46fvh/image/upload/w_500/dpr_auto/q_auto/v1733608693/ecommerce-website-design-modern-responsive_baotvu.png',
      link: '/ecommerce',
    },
    {
      id: 5,
      title: 'Web Application',
      description: 'A robust, user-friendly web application with seamless functionality and intuitive design.',
      imageUrl: 'https://res.cloudinary.com/dntx46fvh/image/upload/w_500/dpr_auto/q_auto/v1733608692/web-application-development-modern-secure_etjmkx.png',
      link: '/app',
    },
    {
      id: 6,
      title: 'Full-Stack Web Devolvement',
      description: 'Full-stack applications built using MongoDB, Express.js, React, and Node.js.',
      imageUrl: 'https://res.cloudinary.com/dntx46fvh/image/upload/w_500/dpr_auto/q_auto/v1733608693/full-stack-development-mern-modern_h2mwu7.png',
      link: '/stack',
    },
    // Add more projects as needed
  ];



  return (
    <div className="bg-gray-50 min-h-screen flex flex-col items-center py-10 px-2 md:px-10 lg:px-60 ">
      <h1 className="text-4xl font-bold text-gray-700 text-center">Web Design & Devolvement</h1>
      <div className='flex justify-center'>
  <span className='w-[200px] h-[2px] block mt-[35px] mb-[25px] bg-[#D9B592]'></span>
</div>
      <p className="max-w-2xl text-center text-lg text-gray-600 mb-10 px-4">
        Discover the comprehensive web design services I offer. Please select any area of interest for more information.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 lg:gap-16 mx-4 md:mx-14 px-4 mb-10 md:mb-20">
        {projects.map((project) => (
          <a
            key={project.id}
            href={project.link}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300 cursor-pointer"
          >
            <img
              src={project.imageUrl}
              alt={project.title}
              className="w-full h-auto object-cover"
            />
            <div className="p-4">
              <h2 className="text-2xl text-center font-semibold text-[#D9B592] mb-2">{project.title}</h2>
              <p className="text-gray-600 mb-2 text-center">{project.description}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Website;
