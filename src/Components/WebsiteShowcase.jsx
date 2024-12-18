import React, { useState } from 'react';
import { FaSearch, FaLink, FaTimes } from 'react-icons/fa';

const websites = [

  {
    image: "https://res.cloudinary.com/dntx46fvh/image/upload/q_auto/v1734548323/14_a1f5nk.jpg",
    url: "https://ecommerce-gym.webflow.io/",
    alt: "Ecommerce Gym Website",
  },
  {
    image: "https://res.cloudinary.com/dntx46fvh/image/upload/q_auto/v1734544209/12_wfwqcp.jpg",
    url: "https://www.evoplan.solversilver.com/",
    alt: "EvoPlan Website",
  },
  {
    image: "https://res.cloudinary.com/dntx46fvh/image/upload/q_auto/v1734548323/13_gynzhl.jpg",
    url: "https://www.obeliskinsurance.com/",
    alt: "Obelisk Insurance Website",
  },
  {
    image: "https://res.cloudinary.com/dntx46fvh/image/upload/q_auto/v1734543654/3_gl7ajg.jpg",
    url: "https://www.lukavulicevic.com/",
    alt: "Luka Vulicevic Website",
  },
  {
    image: "https://res.cloudinary.com/dntx46fvh/image/upload/q_auto/v1734543662/5_fygi58.jpg",
    url: "https://www.getadelante.com/",
    alt: "Get Adelante Website",
  },
  {
    image: "https://res.cloudinary.com/dntx46fvh/image/upload/q_auto/v1734544209/8_ydy9pv.jpg",
    url: "https://www.plugeek.solversilver.com/",
    alt: "PluGeek Website",
  },
  {
    image: "https://res.cloudinary.com/dntx46fvh/image/upload/q_auto/v1734543654/4_viacdp.jpg",
    url: "https://smallship.webflow.io/",
    alt: "Smallship Website",
  },
  {
    image: "https://res.cloudinary.com/dntx46fvh/image/upload/q_auto/v1734543703/6_fb2wch.jpg",
    url: "https://www.skyther.solversilver.com/",
    alt: "Skyther Website",
  },
  {
    image: "https://res.cloudinary.com/dntx46fvh/image/upload/q_auto/v1734543654/1_wxgily.jpg",
    url: "https://www.chosencollective.org/",
    alt: "Choosen Collective Website",
  },
  {
    image: "https://res.cloudinary.com/dntx46fvh/image/upload/q_auto/v1734543655/2_ex98zv.jpg",
    url: "https://www.heroicmarketer.com/",
    alt: "Heroic Marketer Website",
  },
  
  {
    image: "https://res.cloudinary.com/dntx46fvh/image/upload/q_auto/v1734544209/11_cipmqc.jpg",
    url: "https://www.seosem.solversilver.com/",
    alt: "SEOSEM Website",
  },

  {
    image: "https://res.cloudinary.com/dntx46fvh/image/upload/q_auto/v1734544209/10_qbdmlm.jpg",
    url: "https://www.markfix.solversilver.com/",
    alt: "MarkFix Website",
  },  {
    image: "https://res.cloudinary.com/dntx46fvh/image/upload/q_auto/v1734544209/7_ly9qvh.jpg",
    url: "https://www.anymov.solversilver.com/",
    alt: "Anymov Website",
  },

  {
    image: "https://res.cloudinary.com/dntx46fvh/image/upload/q_auto/v1734544209/9_zv0yfx.jpg",
    url: "https://www.taskify.solversilver.com/",
    alt: "Taskify Website",
  },
//   {
//     image: "https://res.cloudinary.com/dntx46fvh/image/upload/q_auto/v1734548325/15_eee4tv.jpg",
//     url: "https://www.eveofbeltane.com/",
//     alt: "Eve of Beltane Website",
//   },
  // Add more website objects here
];

const WebsiteShowcase = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState("");

  const handleModalOpen = (image) => {
    setModalImage(image);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setModalImage("");
  };

  return (
    <section className="py-16 px-8 lg:px-20 bg-[#f8f8f8]">
      <h2 className="text-3xl sm:text-4xl text-center font-semibold text-[#343434] mb-10">
      Explore My Work
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mx-0 lg:mx-24">
        {websites.map((website, index) => (
          <div key={index} className="relative group cursor-pointer">
            {/* Image Container */}
            <div
  className="w-full h-64 lg:h-80 bg-gray-200 rounded-2xl overflow-hidden relative"
>
  <img
    src={website.image}
    alt={website.alt}
    className="w-full h-full object-cover transition duration-300"
  />
  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 group-hover:backdrop-blur-sm transition duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
    <FaSearch
      className="text-white text-3xl mx-10 cursor-pointer"
      onClick={() => handleModalOpen(website.image)}
    />
    <FaLink
      className="text-white text-3xl mx-10 cursor-pointer"
      onClick={(e) => {
        e.stopPropagation();
        window.open(website.url, "_blank");
      }}
    />
  </div>
</div>

            {/* Icons Below Image */}
            <div className="flex justify-between mt-4 text-sm text-[#343434]">
              <button
                className="flex items-center gap-1 hover:text-[#D9B592] transition-colors"
                onClick={() => handleModalOpen(website.image)}
              >
                <FaSearch />
                <span>View</span>
              </button>
              <a
                href={website.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 hover:text-[#D9B592] transition-colors"
              >
                <FaLink />
                <span>Visit Site</span>
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for Enlarged Image */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="relative">
            <img
              src={modalImage}
              alt="Modal View"
              className="max-w-[80vw] max-h-[80vh] object-contain rounded-lg shadow-lg"
            />
            <button
              className="absolute top-2 right-2 text-white text-3xl"
              onClick={handleModalClose}
            >
              <FaTimes />
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default WebsiteShowcase;
