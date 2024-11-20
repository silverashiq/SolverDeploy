import React from "react";
import MySwiper from "../Components/MySwiper";


const BrandLogo = () => {
  const logoSlides = [
    { url: "https://res.cloudinary.com/dntx46fvh/image/upload/q_auto/v1732118420/3d_Mockup_14_qxicys.jpg", alt: "Luxury modern minimalist elegant creative professional Logo design" },
    { url: "https://res.cloudinary.com/dntx46fvh/image/upload/q_auto/v1732118420/3d_Mockup_19_wvdp4l.jpg", alt: "Luxury modern minimalist elegant creative professional Logo design" },
    { url: "https://res.cloudinary.com/dntx46fvh/image/upload/q_auto/v1732118422/3d_Mockup_45_piabue.jpg", alt: "Luxury modern minimalist elegant creative professional Logo design" },
    { url: "https://res.cloudinary.com/dntx46fvh/image/upload/q_auto/v1732118421/Brand_Identity_Logo_Design_qdvm4u.jpg", alt: "Luxury modern minimalist elegant creative professional Logo design" },
    { url: "https://res.cloudinary.com/dntx46fvh/image/upload/q_auto/v1732118422/3d_Mockup_18_tjnioj.jpg", alt: "Luxury modern minimalist elegant creative professional Logo design" },
    { url: "https://res.cloudinary.com/dntx46fvh/image/upload/q_auto/v1732118423/3d_Mockup_54_wrkp5g.jpg", alt: "Luxury modern minimalist elegant creative professional Logo design" },
    { url: "https://res.cloudinary.com/dntx46fvh/image/upload/q_auto/v1732118424/CDGW_1_Mockup_snduka.jpg", alt: "Luxury modern minimalist elegant creative professional Logo design" },
    { url: "https://res.cloudinary.com/dntx46fvh/image/upload/q_auto/v1732118423/DW_3d_Mockup_tijua2.jpg", alt: "Luxury modern minimalist elegant creative professional Logo design" },
    { url: "https://res.cloudinary.com/dntx46fvh/image/upload/q_auto/v1732118423/3d_Mockup_JPG_avbrtf.jpgg", alt: "Luxury modern minimalist elegant creative professional Logo design" },
    { url: "https://res.cloudinary.com/dntx46fvh/image/upload/q_auto/v1732118425/FS_3d_Mockup_llwcdi.jpg", alt: "Luxury modern minimalist elegant creative professional Logo design" },
    { url: "https://res.cloudinary.com/dntx46fvh/image/upload/q_auto/v1732118426/EV_Mockup_xky9or.jpg", alt: "Luxury modern minimalist elegant creative professional Logo design" },
    { url: "https://res.cloudinary.com/dntx46fvh/image/upload/q_auto/v1732118426/JF_Mockup_jdyjbp.jpg", alt: "Luxury modern minimalist elegant creative professional Logo design" },
    { url: "https://res.cloudinary.com/dntx46fvh/image/upload/q_auto/v1732118427/LK_Mockup_qnsyic.jpg", alt: "Luxury modern minimalist elegant creative professional Logo design" },


    { url: "https://res.cloudinary.com/dntx46fvh/image/upload/q_auto/v1732118427/LD_3d_Mockup_eepa3g.jpg", alt: "Luxury modern minimalist elegant creative professional Logo design" },
    { url: "https://res.cloudinary.com/dntx46fvh/image/upload/q_auto/v1732118428/MKI_3d_Mockup_sbnx7j.jpg", alt: "Luxury modern minimalist elegant creative professional Logo design" },
    { url: "https://res.cloudinary.com/dntx46fvh/image/upload/q_auto/v1732118428/MM_3d_Mockup_fncnwl.jpg", alt: "Luxury modern minimalist elegant creative professional Logo design" },
    { url: "https://res.cloudinary.com/dntx46fvh/image/upload/q_auto/v1732118429/MP_Mockup_apw5v0.jpg", alt: "Luxury modern minimalist elegant creative professional Logo design" },
    { url: "https://res.cloudinary.com/dntx46fvh/image/upload/q_auto/v1732118430/NA_Mockup_lgdu2b.jpg", alt: "Luxury modern minimalist elegant creative professional Logo design" },
    { url: "https://res.cloudinary.com/dntx46fvh/image/upload/q_auto/v1732118431/OVE_3d_Mockup_lnezdc.jpg", alt: "Luxury modern minimalist elegant creative professional Logo design" },
    { url: "https://res.cloudinary.com/dntx46fvh/image/upload/q_auto/v1732118433/Penta_3d_Mockup_lquttv.jpg", alt: "Luxury modern minimalist elegant creative professional Logo design" },
    { url: "https://res.cloudinary.com/dntx46fvh/image/upload/q_auto/v1732118435/PR_Mokup_kmkuyc.jpg", alt: "Luxury modern minimalist elegant creative professional Logo design" },
    { url: "https://res.cloudinary.com/dntx46fvh/image/upload/q_auto/v1732118434/PH_3d_Mockup_dnasqw.jpg", alt: "Luxury modern minimalist elegant creative professional Logo design" },
    { url: "https://res.cloudinary.com/dntx46fvh/image/upload/q_auto/v1732118436/Q_Mockup_tiveol.jpg", alt: "Luxury modern minimalist elegant creative professional Logo design" },
    { url: "https://res.cloudinary.com/dntx46fvh/image/upload/q_auto/v1732118437/TSA_3d_Mockup_apdq9b.jpg", alt: "Luxury modern minimalist elegant creative professional Logo design" },
    { url: "https://res.cloudinary.com/dntx46fvh/image/upload/q_auto/v1732118438/WC_Mockup_b3wbfl.jpg", alt: "Luxury modern minimalist elegant creative professional Logo design" },
    { url: "https://res.cloudinary.com/dntx46fvh/image/upload/q_auto/v1732118439/WF_Mockup_eyspus.jpg", alt: "Luxury modern minimalist elegant creative professional Logo design" },

    // Add more logos as needed
  ];

  return (
    <div>
      <MySwiper slides={logoSlides} />
      <div className="min-h-screen text-[#343434] px-6 py-12 md:px-16 lg:px-32">
        <div className="max-w-4xl mx-auto">
          <header className="text-center mb-12">
            <h1 className="text-4xl font-bold text-[#D9B592]">
              Logo & Brand Identity Design
            </h1>
            <p className="mt-4 text-lg">
              Helping your business stand out with a unique and impactful brand identity.
            </p>
          </header>

          <section className="space-y-12">
            <div>
              <h2 className="text-2xl font-semibold text-[#D9B592]">What You'll Get</h2>
              <ul className="mt-4 space-y-3">
                <li className="flex items-start">
                  <span className="text-[#D9B592] font-bold text-xl mr-2">•</span>
                  Custom logo tailored to your brand.
                </li>
                <li className="flex items-start">
                  <span className="text-[#D9B592] font-bold text-xl mr-2">•</span>
                  Brand guidelines (colors, typography, usage rules).
                </li>
                <li className="flex items-start">
                  <span className="text-[#D9B592] font-bold text-xl mr-2">•</span>
                  Business card and stationery design.
                </li>
                <li className="flex items-start">
                  <span className="text-[#D9B592] font-bold text-xl mr-2">•</span>
                  Social media kit.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-[#D9B592]">Requirements from You</h2>
              <ul className="mt-4 space-y-3">
                <li className="flex items-start">
                  <span className="text-[#D9B592] font-bold text-xl mr-2">•</span>
                  Business name and tagline (if any).
                </li>
                <li className="flex items-start">
                  <span className="text-[#D9B592] font-bold text-xl mr-2">•</span>
                  Preferred colors and style inspirations.
                </li>
                <li className="flex items-start">
                  <span className="text-[#D9B592] font-bold text-xl mr-2">•</span>
                  Details about your target audience and competitors.
                </li>
                <li className="flex items-start">
                  <span className="text-[#D9B592] font-bold text-xl mr-2">•</span>
                  Any specific ideas or sketches (optional).
                </li>
              </ul>
            </div>
          </section>

          <div className="mt-12 text-center">
            <button className="px-8 py-3 bg-[#D9B592] text-[#343434] font-semibold text-lg rounded-md shadow-md hover:bg-opacity-90 transition">
              Start Your Project
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandLogo;
