import React from "react";
import MySwiper from "../Components/MySwiper";
import { Link } from "react-router-dom";

const Logos = () => {
  const logoSlides = [
    {
      url: "https://res.cloudinary.com/dntx46fvh/image/upload/q_auto/v1732118420/3d_Mockup_14_qxicys.jpg",
      alt: "Luxury modern minimalist elegant creative professional Logo design",
    },
    {
      url: "https://res.cloudinary.com/dntx46fvh/image/upload/q_auto/v1732118420/3d_Mockup_19_wvdp4l.jpg",
      alt: "Luxury modern minimalist elegant creative professional Logo design",
    },
    {
      url: "https://res.cloudinary.com/dntx46fvh/image/upload/q_auto/v1732118422/3d_Mockup_45_piabue.jpg",
      alt: "Luxury modern minimalist elegant creative professional Logo design",
    },
    {
      url: "https://res.cloudinary.com/dntx46fvh/image/upload/q_auto/v1732118423/3d_Mockup_54_wrkp5g.jpg",
      alt: "Luxury modern minimalist elegant creative professional Logo design",
    },
    {
      url: "https://res.cloudinary.com/dntx46fvh/image/upload/q_auto/v1732118424/CDGW_1_Mockup_snduka.jpg",
      alt: "Luxury modern minimalist elegant creative professional Logo design",
    },
    {
      url: "https://res.cloudinary.com/dntx46fvh/image/upload/q_auto/v1732118423/DW_3d_Mockup_tijua2.jpg",
      alt: "Luxury modern minimalist elegant creative professional Logo design",
    },
    {
      url: "https://res.cloudinary.com/dntx46fvh/image/upload/q_auto/v1732118423/3d_Mockup_JPG_avbrtf.jpg",
      alt: "Luxury modern minimalist elegant creative professional Logo design",
    },
    {
      url: "https://res.cloudinary.com/dntx46fvh/image/upload/q_auto/v1732118425/FS_3d_Mockup_llwcdi.jpg",
      alt: "Luxury modern minimalist elegant creative professional Logo design",
    },
    {
      url: "https://res.cloudinary.com/dntx46fvh/image/upload/q_auto/v1732118426/EV_Mockup_xky9or.jpg",
      alt: "Luxury modern minimalist elegant creative professional Logo design",
    },
    {
      url: "https://res.cloudinary.com/dntx46fvh/image/upload/q_auto/v1732118426/JF_Mockup_jdyjbp.jpg",
      alt: "Luxury modern minimalist elegant creative professional Logo design",
    },
    {
      url: "https://res.cloudinary.com/dntx46fvh/image/upload/q_auto/v1732118427/LK_Mockup_qnsyic.jpg",
      alt: "Luxury modern minimalist elegant creative professional Logo design",
    },


    {
      url: "https://res.cloudinary.com/dntx46fvh/image/upload/q_auto/v1732118428/MKI_3d_Mockup_sbnx7j.jpg",
      alt: "Luxury modern minimalist elegant creative professional Logo design",
    },
    {
      url: "https://res.cloudinary.com/dntx46fvh/image/upload/q_auto/v1732118428/MM_3d_Mockup_fncnwl.jpg",
      alt: "Luxury modern minimalist elegant creative professional Logo design",
    },
    {
      url: "https://res.cloudinary.com/dntx46fvh/image/upload/q_auto/v1732118430/NA_Mockup_lgdu2b.jpg",
      alt: "Luxury modern minimalist elegant creative professional Logo design",
    },
    {
      url: "https://res.cloudinary.com/dntx46fvh/image/upload/q_auto/v1732118431/OVE_3d_Mockup_lnezdc.jpg",
      alt: "Luxury modern minimalist elegant creative professional Logo design",
    },
    {
      url: "https://res.cloudinary.com/dntx46fvh/image/upload/q_auto/v1732118433/Penta_3d_Mockup_lquttv.jpg",
      alt: "Luxury modern minimalist elegant creative professional Logo design",
    },
    {
      url: "https://res.cloudinary.com/dntx46fvh/image/upload/q_auto/v1732118435/PR_Mokup_kmkuyc.jpg",
      alt: "Luxury modern minimalist elegant creative professional Logo design",
    },
    {
      url: "https://res.cloudinary.com/dntx46fvh/image/upload/q_auto/v1732118434/PH_3d_Mockup_dnasqw.jpg",
      alt: "Luxury modern minimalist elegant creative professional Logo design",
    },
    {
      url: "https://res.cloudinary.com/dntx46fvh/image/upload/q_auto/v1732118436/Q_Mockup_tiveol.jpg",
      alt: "Luxury modern minimalist elegant creative professional Logo design",
    },
    {
      url: "https://res.cloudinary.com/dntx46fvh/image/upload/q_auto/v1732118437/TSA_3d_Mockup_apdq9b.jpg",
      alt: "Luxury modern minimalist elegant creative professional Logo design",
    },
    {
      url: "https://res.cloudinary.com/dntx46fvh/image/upload/q_auto/v1732118438/WC_Mockup_b3wbfl.jpg",
      alt: "Luxury modern minimalist elegant creative professional Logo design",
    },
    {
      url: "https://res.cloudinary.com/dntx46fvh/image/upload/q_auto/v1732118439/WF_Mockup_eyspus.jpg",
      alt: "Luxury modern minimalist elegant creative professional Logo design",
    },

    // Add more logos as needed
  ];

  return (
    <div>
      {/* Swiper Section */}
      <MySwiper slides={logoSlides} />
      <div className="bg-white text-[#343434]">
        {/* Introduction */}
        <div className="px-6 py-8 md:px-16 lg:px-32">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-3xl md:5xl font-bold text-gray-700 mb-4">
              Logo Design
            </h1>
            <p className="text-lg text-[#525252]">
              Elevate your brand with a modern, minimalist, and luxury logo
              design tailored to your unique identity. Let’s make your business
              stand out.
            </p>
          </div>
        </div>

{/* Client Requirements Section */}
<section className="bg-[#f9f8f6] py-12 px-6 lg:px-32 mb-12 rounded-xl shadow-lg">
  <h2 className="text-3xl font-bold text-gray-700 mb-6 text-center">
    Requirements
  </h2>
  <div className="max-w-3xl mx-auto">
    <ul className="list-inside list-disc space-y-4 text-lg text-[#525252]">
      <li className="flex items-start space-x-3">
        <span className="text-[#D9B592] text-2xl">•</span>
        <p>Brief description of your brand/business</p>
      </li>
      <li className="flex items-start space-x-3">
        <span className="text-[#D9B592] text-2xl">•</span>
        <p>Logo Title</p>
      </li>
      <li className="flex items-start space-x-3">
        <span className="text-[#D9B592] text-2xl">•</span>
        <p>Slogan (if any)</p>
      </li>
      <li className="flex items-start space-x-3">
        <span className="text-[#D9B592] text-2xl">•</span>
        <p>Icon Preference (any specific shape, object, symbol, initial letters, etc.)</p>
      </li>
      <li className="flex items-start space-x-3">
        <span className="text-[#D9B592] text-2xl">•</span>
        <p>Color Preference</p>
      </li>
      <li className="flex items-start space-x-3">
        <span className="text-[#D9B592] text-2xl">•</span>
        <p>Sample Designs (if any)</p>
      </li>
      <li className="flex items-start space-x-3">
        <span className="text-[#D9B592] text-2xl">•</span>
        <p>Logo style you prefer (minimalist, luxury, etc.)</p>
      </li>
      <li className="flex items-start space-x-3">
        <span className="text-[#D9B592] text-2xl">•</span>
        <p>Any additional notes or ideas you may have</p>
      </li>
      <li className="flex items-start space-x-3">
        <span className="text-[#D9B592] text-2xl">•</span>
        <p>Budget (if any)</p>
      </li>
    </ul>
    <p className="mt-6 text-lg text-[#525252] italic text-center">
      * The cost of the project will depend on the number of concept designs to choose from, the deadline for submission, and the requirements for the logo.
      Custom packages can be created based on your specific budget if necessary.
    </p>
  </div>
</section>


        {/* You will get */}
        <section className="bg-[#f9f8f6] shadow-md rounded-xl py-12 px-6 md:px-12 lg:px-20 mx-4 lg:mx-32 mb-12">
          <h2 className="text-3xl font-bold text-gray-700 mb-6 text-center">
            You will get
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "100% client satisfaction",
              "Eye-catching and original Concepts",
              "Fast turnaround",
              "Gold mockups that stand out",
              "All relevant files: AI, PDF, SVG,  JPG, PNG",
              "Social optimized images",
              "Unlimited revisions until satisfaction",
              "Reliable and quick communication",
              "After sale-services",


            ].map((point, index) => (
              <div
                key={index}
                className="flex items-start space-x-3 p-4 bg-white rounded-md hover:shadow-lg transition"
              >
                <span className="text-[#D9B592] font-bold text-xl">•</span>
                <p className="text-[#525252] font-medium">{point}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Logo Styles */}
        <section className="text-center mb-16 px-6 lg:px-32">
          <h2 className="text-3xl font-bold text-gray-700 mb-8">
          Logo Styles I provide
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {[
              "Minimalist & Flat Logo",
              "Luxury & Elegant Logo",
              "Signature & Cursive Logo",
              "Business & Corporate Logo",
              "Creative & Abstract Logo",
              "Custom Logo & Re-design",
            ].map((service, index) => (
              <div
                key={index}
                className="p-4 border-1  rounded-xl hover:shadow-lg transition bg-[#f9f8f6] text-[#343434]"
              >
                <p className="font-medium">{service}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <div className="bg-[#D9B592] text-white py-12 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Elevate Your Brand?
          </h2>
          <p className="mb-8 text-lg">
            Let’s craft a logo and identity that speaks for your brand.
          </p>
          <Link to="/contact" className="px-10 py-4 bg-white text-[#D9B592] font-semibold rounded-md shadow-md hover:bg-opacity-90 transition">
            Start Your Project
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Logos;
