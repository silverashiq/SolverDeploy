import React from "react";
import MySwiper from "../Components/MySwiper";
import { Link } from "react-router-dom";

const BrandGuidelines = () => {
const guidelineSlides = [
  {
    url: "https://res.cloudinary.com/dntx46fvh/image/upload/w_500/dpr_auto/q_auto/v1732289156/Preview_2_wx4ifz.jpg",
    alt: "Luxury modern minimalist elegant creative professional Logo design and Brand Identity guidelines",
  },
  {
    url: "https://res.cloudinary.com/dntx46fvh/image/upload/w_500/dpr_auto/q_auto/v1732205512/CE_Mockup_goyh9s.jpg",
    alt: "Luxury modern minimalist elegant creative professional Logo design and Brand Identity guidelines",
  },
    {
      url: "https://res.cloudinary.com/dntx46fvh/image/upload/w_500/dpr_auto/q_auto/v1732205511/Asset_9_cqybxk.jpg",
      alt: "Luxury modern minimalist elegant creative professional Logo design and Brand Identity guidelines",
    },

    {
      url: "https://res.cloudinary.com/dntx46fvh/image/upload/w_500/dpr_auto/q_auto/v1732205525/Req_Mockup_aszzci.jpg",
      alt: "Luxury modern minimalist elegant creative professional Logo design and Brand Identity guidelines",
    },
    {
      url: "https://res.cloudinary.com/dntx46fvh/image/upload/w_500/dpr_auto/q_auto/v1732205522/QIA_Mockup_nj0v1a.jpg",
      alt: "Luxury modern minimalist elegant creative professional Logo design and Brand Identity guidelines",
    },
    {
      url: "https://res.cloudinary.com/dntx46fvh/image/upload/w_500/dpr_auto/q_auto/v1732205521/NF_Mockup_xdca7f.jpg",
      alt: "Luxury modern minimalist elegant creative professional Logo design and Brand Identity guidelines",
    },
    {
      url: "https://res.cloudinary.com/dntx46fvh/image/upload/w_500/dpr_auto/q_auto/v1732205520/M_Mockup_wb0w8b.jpg",
      alt: "Luxury modern minimalist elegant creative professional Logo design and Brand Identity guidelines",
    },
    {
      url: "https://res.cloudinary.com/dntx46fvh/image/upload/w_500/dpr_auto/q_auto/v1732205517/K_Mockup_otrupb.jpg",
      alt: "Luxury modern minimalist elegant creative professional Logo design and Brand Identity guidelines",
    },
    {
      url: "https://res.cloudinary.com/dntx46fvh/image/upload/w_500/dpr_auto/q_auto/v1732205508/Asset_5_zmq7ap.jpg",
      alt: "Luxury modern minimalist elegant creative professional Logo design and Brand Identity guidelines",
    },
    {
      url: "https://res.cloudinary.com/dntx46fvh/image/upload/w_500/dpr_auto/q_auto/v1732205516/Helimo_3d_Mockup_yejvjj.jpg",
      alt: "Luxury modern minimalist elegant creative professional Logo design and Brand Identity guidelines",
    },
    {
      url: "https://res.cloudinary.com/dntx46fvh/image/upload/w_500/dpr_auto/q_auto/v1732205509/3d_Mockup-1_qkncgh.jpg",
      alt: "Luxury modern minimalist elegant creative professional Logo design and Brand Identity guidelines",
    },
    {
      url: "https://res.cloudinary.com/dntx46fvh/image/upload/w_500/dpr_auto/q_auto/v1732205517/HSU_Mockup_hx6xcc.jpg",
      alt: "Luxury modern minimalist elegant creative professional Logo design and Brand Identity guidelines",
    },
    {
      url: "https://res.cloudinary.com/dntx46fvh/image/upload/w_500/dpr_auto/q_auto/v1732205512/Asset_12_rylbgc.jpg",
      alt: "Luxury modern minimalist elegant creative professional Logo design and Brand Identity guidelines",
    },
    {
      url: "https://res.cloudinary.com/dntx46fvh/image/upload/w_500/dpr_auto/q_auto/v1732205511/A_Mockup_nmldii.jpg",
      alt: "Luxury modern minimalist elegant creative professional Logo design and Brand Identity guidelines",
    },
    {
      url: "https://res.cloudinary.com/dntx46fvh/image/upload/w_500/dpr_auto/q_auto/v1732205513/JL_Mockup_1_bdxevl.jpg",
      alt: "Luxury modern minimalist elegant creative professional Logo design and Brand Identity guidelines",
    },
    {
      url: "https://res.cloudinary.com/dntx46fvh/image/upload/w_500/dpr_auto/q_auto/v1732205516/MB_Mockup_d7uzqt.jpg",
      alt: "Luxury modern minimalist elegant creative professional Logo design and Brand Identity guidelines",
    },
    {
      url: "https://res.cloudinary.com/dntx46fvh/image/upload/w_500/dpr_auto/q_auto/v1732205517/BK_Mockup_uof5mh.jpg",
      alt: "Luxury modern minimalist elegant creative professional Logo design and Brand Identity guidelines",
    },
    {
      url: "https://res.cloudinary.com/dntx46fvh/image/upload/w_500/dpr_auto/q_auto/v1732205511/Asset_8_unywd2.jpg",
      alt: "Luxury modern minimalist elegant creative professional Logo design and Brand Identity guidelines",
    },
    {
      url: "https://res.cloudinary.com/dntx46fvh/image/upload/w_500/dpr_auto/q_auto/v1732205516/Helimo_3d_Mockup_yejvjj.jpg",
      alt: "Luxury modern minimalist elegant creative professional Logo design and Brand Identity guidelines",
    },
    {
      url: "https://res.cloudinary.com/dntx46fvh/image/upload/w_500/dpr_auto/q_auto/v1732205521/MV_Mockup_envhns.jpg",
      alt: "Luxury modern minimalist elegant creative professional Logo design and Brand Identity guidelines",
    },

    {
      url: "https://res.cloudinary.com/dntx46fvh/image/upload/w_500/dpr_auto/q_auto/v1732205511/3d_Mockup_12_lfb6gn.jpg",
      alt: "Luxury modern minimalist elegant creative professional Logo design and Brand Identity guidelines",
    },
    {
      url: "https://res.cloudinary.com/dntx46fvh/image/upload/w_500/dpr_auto/q_auto/v1732118420/3d_Mockup_14_qxicys.jpg",
      alt: "Luxury modern minimalist elegant creative professional Logo design",
    },
    {
      url: "https://res.cloudinary.com/dntx46fvh/image/upload/w_500/dpr_auto/q_auto/v1732118420/3d_Mockup_19_wvdp4l.jpg",
      alt: "Luxury modern minimalist elegant creative professional Logo design",
    },
    {
      url: "https://res.cloudinary.com/dntx46fvh/image/upload/w_500/dpr_auto/q_auto/v1732118422/3d_Mockup_45_piabue.jpg",
      alt: "Luxury modern minimalist elegant creative professional Logo design",
    },
    {
      url: "https://res.cloudinary.com/dntx46fvh/image/upload/w_500/dpr_auto/q_auto/v1732118423/3d_Mockup_54_wrkp5g.jpg",
      alt: "Luxury modern minimalist elegant creative professional Logo design",
    },
    {
      url: "https://res.cloudinary.com/dntx46fvh/image/upload/w_500/dpr_auto/q_auto/v1732118424/CDGW_1_Mockup_snduka.jpg",
      alt: "Luxury modern minimalist elegant creative professional Logo design",
    },
    {
      url: "https://res.cloudinary.com/dntx46fvh/image/upload/w_500/dpr_auto/q_auto/v1732118423/DW_3d_Mockup_tijua2.jpg",
      alt: "Luxury modern minimalist elegant creative professional Logo design",
    },
    {
      url: "https://res.cloudinary.com/dntx46fvh/image/upload/w_500/dpr_auto/q_auto/v1732118423/3d_Mockup_JPG_avbrtf.jpg",
      alt: "Luxury modern minimalist elegant creative professional Logo design",
    },
    {
      url: "https://res.cloudinary.com/dntx46fvh/image/upload/w_500/dpr_auto/q_auto/v1732118425/FS_3d_Mockup_llwcdi.jpg",
      alt: "Luxury modern minimalist elegant creative professional Logo design",
    },
    {
      url: "https://res.cloudinary.com/dntx46fvh/image/upload/w_500/dpr_auto/q_auto/v1732118426/EV_Mockup_xky9or.jpg",
      alt: "Luxury modern minimalist elegant creative professional Logo design",
    },
    {
      url: "https://res.cloudinary.com/dntx46fvh/image/upload/w_500/dpr_auto/q_auto/v1732118426/JF_Mockup_jdyjbp.jpg",
      alt: "Luxury modern minimalist elegant creative professional Logo design",
    },
    {
      url: "https://res.cloudinary.com/dntx46fvh/image/upload/w_500/dpr_auto/q_auto/v1732118427/LK_Mockup_qnsyic.jpg",
      alt: "Luxury modern minimalist elegant creative professional Logo design",
    },
    {
      url: "https://res.cloudinary.com/dntx46fvh/image/upload/w_500/dpr_auto/q_auto/v1732118428/MKI_3d_Mockup_sbnx7j.jpg",
      alt: "Luxury modern minimalist elegant creative professional Logo design",
    },
    {
      url: "https://res.cloudinary.com/dntx46fvh/image/upload/w_500/dpr_auto/q_auto/v1732118428/MM_3d_Mockup_fncnwl.jpg",
      alt: "Luxury modern minimalist elegant creative professional Logo design",
    },
    {
      url: "https://res.cloudinary.com/dntx46fvh/image/upload/w_500/dpr_auto/q_auto/v1732118430/NA_Mockup_lgdu2b.jpg",
      alt: "Luxury modern minimalist elegant creative professional Logo design",
    },
    {
      url: "https://res.cloudinary.com/dntx46fvh/image/upload/w_500/dpr_auto/q_auto/v1732118431/OVE_3d_Mockup_lnezdc.jpg",
      alt: "Luxury modern minimalist elegant creative professional Logo design",
    },
    {
      url: "https://res.cloudinary.com/dntx46fvh/image/upload/w_500/dpr_auto/q_auto/v1732118433/Penta_3d_Mockup_lquttv.jpg",
      alt: "Luxury modern minimalist elegant creative professional Logo design",
    },
    {
      url: "https://res.cloudinary.com/dntx46fvh/image/upload/w_500/dpr_auto/q_auto/v1732118435/PR_Mokup_kmkuyc.jpg",
      alt: "Luxury modern minimalist elegant creative professional Logo design",
    },
    {
      url: "https://res.cloudinary.com/dntx46fvh/image/upload/w_500/dpr_auto/q_auto/v1732118434/PH_3d_Mockup_dnasqw.jpg",
      alt: "Luxury modern minimalist elegant creative professional Logo design",
    },
    {
      url: "https://res.cloudinary.com/dntx46fvh/image/upload/w_500/dpr_auto/q_auto/v1732118436/Q_Mockup_tiveol.jpg",
      alt: "Luxury modern minimalist elegant creative professional Logo design",
    },
    {
      url: "https://res.cloudinary.com/dntx46fvh/image/upload/w_500/dpr_auto/q_auto/v1732118437/TSA_3d_Mockup_apdq9b.jpg",
      alt: "Luxury modern minimalist elegant creative professional Logo design",
    },
    {
      url: "https://res.cloudinary.com/dntx46fvh/image/upload/w_500/dpr_auto/q_auto/v1732118438/WC_Mockup_b3wbfl.jpg",
      alt: "Luxury modern minimalist elegant creative professional Logo design",
    },
    {
      url: "https://res.cloudinary.com/dntx46fvh/image/upload/w_500/dpr_auto/q_auto/v1732118439/WF_Mockup_eyspus.jpg",
      alt: "Luxury modern minimalist elegant creative professional Logo design",
    },
];

  return (
    <div>
      {/* Swiper Section */}
      <MySwiper slides={guidelineSlides} />
      <div className="bg-white text-[#343434]">
        {/* Introduction */}
        <div className="px-6 py-8 md:px-16 lg:px-32">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="text-3xl md:5xl font-bold text-gray-700 mb-4">
              Brand Identity Design
            </h1>
            <p className="text-lg text-[#525252]">
              Build a consistent and professional brand image with detailed
              Brand Guidelines, Color Palettes, Typography, and more. Elevate
              your business identity with custom designs for your brand’s
              presence across all channels.
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
                <p>Logo Title (if not already created)</p>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-[#D9B592] text-2xl">•</span>
                <p>Slogan (if any)</p>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-[#D9B592] text-2xl">•</span>
                <p>Color Palette preferences (if any)</p>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-[#D9B592] text-2xl">•</span>
                <p>Typography preferences</p>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-[#D9B592] text-2xl">•</span>
                <p>Brand guidelines for logo use</p>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-[#D9B592] text-2xl">•</span>
                <p>
                  Stationery designs (business cards, letterheads, envelopes
                  etc.)
                </p>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-[#D9B592] text-2xl">•</span>
                <p>Social media kit</p>
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
              * The cost of the project will depend on the specific designs and
              elements you wish to include, such as number of stationery items,
              social media templates, and the complexity of the brand
              guidelines. Custom packages can be created based on your specific
              budget if necessary.
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
              "Everything from Logo package",
              "Detailed Brand Guidelines",
              "Color palette with hex codes",
              "Typography with suggested fonts",
              "Logo usage guidelines (size, clear space, etc.)",
              "Stationery design files (business cards, letterhead, etc.)",
              "Social Media Kit",
              "Unlimited revisions until satisfaction",
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
            Brand Elements I provide
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {[
              "Brand Guidelines Document",
              "Logo Design & Variations",
              "Color Palette & Typography",
              "Business Stationery Design",
              "Social Media Kit",
              "Custom Templates & Designs",
            ].map((service, index) => (
              <div
                key={index}
                className="p-4 border-1 rounded-xl hover:shadow-lg transition bg-[#f9f8f6] text-[#343434]"
              >
                <p className="font-medium">{service}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Explore Full Graphics Portfolio Section */}
        <section className="py-12 px-6 lg:px-0 bg-[#f9f8f6] text-center ">
          <h2 className="text-3xl font-bold text-gray-700 mb-4">Explore My Graphics Portfolio</h2>
          <p className="text-lg text-[#525252] mb-8 max-w-2xl mx-auto">
            Dive into my complete collection of designs, from logos to creative graphics, and explore the visual stories I've created for brands and individuals.
          </p>
          <Link
            to="/portfolio/graphics"
            target="_blank"  // This ensures the link opens in a new tab
            className="inline-block bg-[#D9B592] text-white px-6 py-2 rounded-full font-semibold text-lg transition-colors duration-300 hover:bg-[#343434]"
          >
            Explore Now
          </Link>
        </section>

        {/* Call to Action */}
        <div className="bg-[#D9B592] text-white py-12 text-center px-6 lg:px-0">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Build a Strong Brand Identity?
          </h2>
          <p className="mb-8 text-lg">
            Let’s craft a professional and consistent brand that resonates with
            your target audience.
          </p>
          <div className="flex justify-center space-x-4">
                    <Link
                      to="/contact"
                      className="px-6 py-2  bg-white text-[#D9B592] font-semibold rounded-full shadow-md hover:bg-[#343434] transition-colors duration-300"
                    >
                      Request a Quote
                    </Link>
                    <Link
                      to="/appointment"
                      className="px-6 py-2  bg-white text-[#D9B592] font-semibold rounded-full shadow-md hover:bg-[#343434] transition-colors duration-300"
                    >
                      Book an Appointment
                    </Link>
                    </div>
        </div>
      </div>
    </div>
  );
};

export default BrandGuidelines;
