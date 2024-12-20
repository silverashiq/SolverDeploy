import React, { useState } from "react";
import { FaSearch, FaTimes } from "react-icons/fa";

const GraphicsShowcase = () => {
  const [selectedFilter, setSelectedFilter] = useState("Logo");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState("");
  const [loading, setLoading] = useState(false);

  const graphicsData = {
    Logo: [
      {
        url: "https://res.cloudinary.com/dntx46fvh/image/upload/q_auto/v1734617479/I_will_design_modern_minimalist_elegant_luxury_initial_logo_for_yoU_b0kksb.jpg",
        previewUrl: "https://res.cloudinary.com/dntx46fvh/image/upload/w_400/dpr_auto/q_auto/v1734617479/I_will_design_modern_minimalist_elegant_luxury_initial_logo_for_yoU_b0kksb.jpg",
        alt: "Luxury modern minimalist elegant creative professional Logo design and Brand Identity guidelines"
      },
      {
        url: "https://res.cloudinary.com/dntx46fvh/image/upload/q_auto/v1732205521/MV_Mockup_envhns.jpg",
        previewUrl: "https://res.cloudinary.com/dntx46fvh/image/upload/w_400/dpr_auto/q_auto/v1732205521/MV_Mockup_envhns.jpg",
        alt: "Luxury modern minimalist elegant creative professional Logo design and Brand Identity guidelines"
      },
      {
        url: "https://res.cloudinary.com/dntx46fvh/image/upload/q_auto/v1732118420/3d_Mockup_19_wvdp4l.jpg",
        previewUrl: "https://res.cloudinary.com/dntx46fvh/image/upload/w_400/dpr_auto/q_auto/v1732118420/3d_Mockup_19_wvdp4l.jpg",
        alt: "Luxury modern minimalist elegant creative professional Logo design"
      },
      {
        url: "https://res.cloudinary.com/dntx46fvh/image/upload/q_auto/v1732205513/JL_Mockup_1_bdxevl.jpg",
        previewUrl: "https://res.cloudinary.com/dntx46fvh/image/upload/w_400/dpr_auto/q_auto/v1732205513/JL_Mockup_1_bdxevl.jpg",
        alt: "Luxury modern minimalist elegant creative professional Logo design and Brand Identity guidelines"
      },
      {
        url: "https://res.cloudinary.com/dntx46fvh/image/upload/q_auto/v1732118424/CDGW_1_Mockup_snduka.jpg",
        previewUrl: "https://res.cloudinary.com/dntx46fvh/image/upload/w_400/dpr_auto/q_auto/v1732118424/CDGW_1_Mockup_snduka.jpg",
        alt: "Luxury modern minimalist elegant creative professional Logo design"
      },
      {
        url: "https://res.cloudinary.com/dntx46fvh/image/upload/q_auto/v1732205511/Asset_8_unywd2.jpg",
        previewUrl: "https://res.cloudinary.com/dntx46fvh/image/upload/w_400/dpr_auto/q_auto/v1732205511/Asset_8_unywd2.jpg",
        alt: "Luxury modern minimalist elegant creative professional Logo design and Brand Identity guidelines"
      },
      {
        url: "https://res.cloudinary.com/dntx46fvh/image/upload/q_auto/v1732118426/EV_Mockup_xky9or.jpg",
        previewUrl: "https://res.cloudinary.com/dntx46fvh/image/upload/w_400/dpr_auto/q_auto/v1732118426/EV_Mockup_xky9or.jpg",
        alt: "Luxury modern minimalist elegant creative professional Logo design"
      },
      {
        url: "https://res.cloudinary.com/dntx46fvh/image/upload/q_auto/v1732205517/BK_Mockup_uof5mh.jpg",
        previewUrl: "https://res.cloudinary.com/dntx46fvh/image/upload/w_400/dpr_auto/q_auto/v1732205517/BK_Mockup_uof5mh.jpg",
        alt: "Luxury modern minimalist elegant creative professional Logo design and Brand Identity guidelines"
      },
      {
        url: "https://res.cloudinary.com/dntx46fvh/image/upload/q_auto/v1732118427/LK_Mockup_qnsyic.jpg",
        previewUrl: "https://res.cloudinary.com/dntx46fvh/image/upload/w_400/dpr_auto/q_auto/v1732118427/LK_Mockup_qnsyic.jpg",
        alt: "Luxury modern minimalist elegant creative professional Logo design"
      },
      {
        url: "https://res.cloudinary.com/dntx46fvh/image/upload/q_auto/v1732205516/MB_Mockup_d7uzqt.jpg",
        previewUrl: "https://res.cloudinary.com/dntx46fvh/image/upload/w_400/dpr_auto/q_auto/v1732205516/MB_Mockup_d7uzqt.jpg",
        alt: "Luxury modern minimalist elegant creative professional Logo design and Brand Identity guidelines"
      },
      {
        url: "https://res.cloudinary.com/dntx46fvh/image/upload/q_auto/v1732118428/MM_3d_Mockup_fncnwl.jpg",
        previewUrl: "https://res.cloudinary.com/dntx46fvh/image/upload/w_400/dpr_auto/q_auto/v1732118428/MM_3d_Mockup_fncnwl.jpg",
        alt: "Luxury modern minimalist elegant creative professional Logo design"
      },
      {
        url: "https://res.cloudinary.com/dntx46fvh/image/upload/q_auto/v1732205511/A_Mockup_nmldii.jpg",
        previewUrl: "https://res.cloudinary.com/dntx46fvh/image/upload/w_400/dpr_auto/q_auto/v1732205511/A_Mockup_nmldii.jpg",
        alt: "Luxury modern minimalist elegant creative professional Logo design and Brand Identity guidelines"
      },
      {
        url: "https://res.cloudinary.com/dntx46fvh/image/upload/q_auto/v1732205512/Asset_12_rylbgc.jpg",
        previewUrl: "https://res.cloudinary.com/dntx46fvh/image/upload/w_400/dpr_auto/q_auto/v1732205512/Asset_12_rylbgc.jpg",
        alt: "Luxury modern minimalist elegant creative professional Logo design and Brand Identity guidelines"
      },
      {
        url: "https://res.cloudinary.com/dntx46fvh/image/upload/q_auto/v1732118430/NA_Mockup_lgdu2b.jpg",
        previewUrl: "https://res.cloudinary.com/dntx46fvh/image/upload/w_400/dpr_auto/q_auto/v1732118430/NA_Mockup_lgdu2b.jpg",
        alt: "Luxury modern minimalist elegant creative professional Logo design"
      },
      {
        url: "https://res.cloudinary.com/dntx46fvh/image/upload/q_auto/v1732205517/HSU_Mockup_hx6xcc.jpg",
        previewUrl: "https://res.cloudinary.com/dntx46fvh/image/upload/w_400/dpr_auto/q_auto/v1732205517/HSU_Mockup_hx6xcc.jpg",
        alt: "Luxury modern minimalist elegant creative professional Logo design and Brand Identity guidelines"
      },
      {
        url: "https://res.cloudinary.com/dntx46fvh/image/upload/q_auto/v1732118431/OVE_3d_Mockup_lnezdc.jpg",
        previewUrl: "https://res.cloudinary.com/dntx46fvh/image/upload/w_400/dpr_auto/q_auto/v1732118431/OVE_3d_Mockup_lnezdc.jpg",
        alt: "Luxury modern minimalist elegant creative professional Logo design"
      },
      {
        url: "https://res.cloudinary.com/dntx46fvh/image/upload/q_auto/v1732205509/3d_Mockup-1_qkncgh.jpg",
        previewUrl: "https://res.cloudinary.com/dntx46fvh/image/upload/w_400/dpr_auto/q_auto/v1732205509/3d_Mockup-1_qkncgh.jpg",
        alt: "Luxury modern minimalist elegant creative professional Logo design and Brand Identity guidelines"
      },
      {
        url: "https://res.cloudinary.com/dntx46fvh/image/upload/q_auto/v1732118433/Penta_3d_Mockup_lquttv.jpg",
        previewUrl: "https://res.cloudinary.com/dntx46fvh/image/upload/w_400/dpr_auto/q_auto/v1732118433/Penta_3d_Mockup_lquttv.jpg",
        alt: "Luxury modern minimalist elegant creative professional Logo design"
      },
      {
        url: "https://res.cloudinary.com/dntx46fvh/image/upload/q_auto/v1732205516/Helimo_3d_Mockup_yejvjj.jpg",
        previewUrl: "https://res.cloudinary.com/dntx46fvh/image/upload/w_400/dpr_auto/q_auto/v1732205516/Helimo_3d_Mockup_yejvjj.jpg",
        alt: "Luxury modern minimalist elegant creative professional Logo design and Brand Identity guidelines"
      },
      {
        url: "https://res.cloudinary.com/dntx46fvh/image/upload/q_auto/v1732118434/PH_3d_Mockup_dnasqw.jpg",
        previewUrl: "https://res.cloudinary.com/dntx46fvh/image/upload/w_400/dpr_auto/q_auto/v1732118434/PH_3d_Mockup_dnasqw.jpg",
        alt: "Luxury modern minimalist elegant creative professional Logo design"
      },

      {
        url: "https://res.cloudinary.com/dntx46fvh/image/upload/q_auto/v1732205508/Asset_5_zmq7ap.jpg",
        previewUrl: "https://res.cloudinary.com/dntx46fvh/image/upload/w_400/dpr_auto/q_auto/v1732205508/Asset_5_zmq7ap.jpg",
        alt: "Luxury modern minimalist elegant creative professional Logo design and Brand Identity guidelines"
      },
      {
        url: "https://res.cloudinary.com/dntx46fvh/image/upload/q_auto/v1732118436/Q_Mockup_tiveol.jpg",
        previewUrl: "https://res.cloudinary.com/dntx46fvh/image/upload/w_400/dpr_auto/q_auto/v1732118436/Q_Mockup_tiveol.jpg",
        alt: "Luxury modern minimalist elegant creative professional Logo design"
      },
      {
        url: "https://res.cloudinary.com/dntx46fvh/image/upload/q_auto/v1732205517/K_Mockup_otrupb.jpg",
        previewUrl: "https://res.cloudinary.com/dntx46fvh/image/upload/w_400/dpr_auto/q_auto/v1732205517/K_Mockup_otrupb.jpg",
        alt: "Luxury modern minimalist elegant creative professional Logo design and Brand Identity guidelines"
      },
      {
        url: "https://res.cloudinary.com/dntx46fvh/image/upload/q_auto/v1732118437/TSA_3d_Mockup_apdq9b.jpg",
        previewUrl: "https://res.cloudinary.com/dntx46fvh/image/upload/w_400/dpr_auto/q_auto/v1732118437/TSA_3d_Mockup_apdq9b.jpg",
        alt: "Luxury modern minimalist elegant creative professional Logo design"
      },
      {
        url: "https://res.cloudinary.com/dntx46fvh/image/upload/q_auto/v1734617497/Asset_3I_will_design_modern_minimalist_elegant_luxury_initial_logo_for_yoU_oq2zeg.jpg",
        previewUrl: "https://res.cloudinary.com/dntx46fvh/image/upload/w_400/dpr_auto/q_auto/v1734617497/Asset_3I_will_design_modern_minimalist_elegant_luxury_initial_logo_for_yoU_oq2zeg.jpg",
        alt: "Luxury modern minimalist elegant creative professional Logo design and Brand Identity guidelines"
      },
      {
        url: "https://res.cloudinary.com/dntx46fvh/image/upload/q_auto/v1732205520/M_Mockup_wb0w8b.jpg",
        previewUrl: "https://res.cloudinary.com/dntx46fvh/image/upload/w_400/dpr_auto/q_auto/v1732205520/M_Mockup_wb0w8b.jpg",
        alt: "Luxury modern minimalist elegant creative professional Logo design and Brand Identity guidelines"
      },
      {
        url: "https://res.cloudinary.com/dntx46fvh/image/upload/q_auto/v1732118438/WC_Mockup_b3wbfl.jpg",
        previewUrl: "https://res.cloudinary.com/dntx46fvh/image/upload/w_400/dpr_auto/q_auto/v1732118438/WC_Mockup_b3wbfl.jpg",
        alt: "Luxury modern minimalist elegant creative professional Logo design"
      },
      {
        url: "https://res.cloudinary.com/dntx46fvh/image/upload/q_auto/v1732205521/NF_Mockup_xdca7f.jpg",
        previewUrl: "https://res.cloudinary.com/dntx46fvh/image/upload/w_400/dpr_auto/q_auto/v1732205521/NF_Mockup_xdca7f.jpg",
        alt: "Luxury modern minimalist elegant creative professional Logo design and Brand Identity guidelines"
      },
      {
        url: "https://res.cloudinary.com/dntx46fvh/image/upload/q_auto/v1732118439/WF_Mockup_eyspus.jpg",
        previewUrl: "https://res.cloudinary.com/dntx46fvh/image/upload/w_400/dpr_auto/q_auto/v1732118439/WF_Mockup_eyspus.jpg",
        alt: "Luxury modern minimalist elegant creative professional Logo design"
      },
      {
        url: "https://res.cloudinary.com/dntx46fvh/image/upload/q_auto/v1732205522/QIA_Mockup_nj0v1a.jpg",
        previewUrl: "https://res.cloudinary.com/dntx46fvh/image/upload/w_400/dpr_auto/q_auto/v1732205522/QIA_Mockup_nj0v1a.jpg",
        alt: "Luxury modern minimalist elegant creative professional Logo design and Brand Identity guidelines"
      },
      {
        url: "https://res.cloudinary.com/dntx46fvh/image/upload/q_auto/v1732205525/Req_Mockup_aszzci.jpg",
        previewUrl: "https://res.cloudinary.com/dntx46fvh/image/upload/w_400/dpr_auto/q_auto/v1732205525/Req_Mockup_aszzci.jpg",
        alt: "Luxury modern minimalist elegant creative professional Logo design and Brand Identity guidelines"
      },
      {
        url: "https://res.cloudinary.com/dntx46fvh/image/upload/q_auto/v1732205516/Helimo_3d_Mockup_yejvjj.jpg",
        previewUrl: "https://res.cloudinary.com/dntx46fvh/image/upload/w_400/dpr_auto/q_auto/v1732205516/Helimo_3d_Mockup_yejvjj.jpg",
        alt: "Luxury modern minimalist elegant creative professional Logo design and Brand Identity guidelines"
      },
      {
        url: "https://res.cloudinary.com/dntx46fvh/image/upload/q_auto/v1732205511/3d_Mockup_12_lfb6gn.jpg",
        previewUrl: "https://res.cloudinary.com/dntx46fvh/image/upload/w_400/dpr_auto/q_auto/v1732205511/3d_Mockup_12_lfb6gn.jpg",
        alt: "Luxury modern minimalist elegant creative professional Logo design and Brand Identity guidelines"
      },
      {
        url: "https://res.cloudinary.com/dntx46fvh/image/upload/q_auto/v1732205511/Asset_9_cqybxk.jpg",
        previewUrl: "https://res.cloudinary.com/dntx46fvh/image/upload/w_400/dpr_auto/q_auto/v1732205511/Asset_9_cqybxk.jpg",
        alt: "Luxury modern minimalist elegant creative professional Logo design and Brand Identity guidelines"
      },
      {
        url: "https://res.cloudinary.com/dntx46fvh/image/upload/q_auto/v1732205512/CE_Mockup_goyh9s.jpg",
        previewUrl: "https://res.cloudinary.com/dntx46fvh/image/upload/w_400/dpr_auto/q_auto/v1732205512/CE_Mockup_goyh9s.jpg",
        alt: "Luxury modern minimalist elegant creative professional Logo design and Brand Identity guidelines"
      },
      {
        url: "https://res.cloudinary.com/dntx46fvh/image/upload/q_auto/v1732118420/3d_Mockup_14_qxicys.jpg",
        previewUrl: "https://res.cloudinary.com/dntx46fvh/image/upload/w_400/dpr_auto/q_auto/v1732118420/3d_Mockup_14_qxicys.jpg",
        alt: "Luxury modern minimalist elegant creative professional Logo design"
      },
      {
        url: "https://res.cloudinary.com/dntx46fvh/image/upload/q_auto/v1732118422/3d_Mockup_45_piabue.jpg",
        previewUrl: "https://res.cloudinary.com/dntx46fvh/image/upload/w_400/dpr_auto/q_auto/v1732118422/3d_Mockup_45_piabue.jpg",
        alt: "Luxury modern minimalist elegant creative professional Logo design"
      },
      {
        url: "https://res.cloudinary.com/dntx46fvh/image/upload/q_auto/v1734617516/Asset_4I_will_design_modern_minimalist_elegant_luxury_initial_logo_for_yoU_fjjhbz.jpg",
        previewUrl: "https://res.cloudinary.com/dntx46fvh/image/upload/w_400/dpr_auto/q_auto/v1734617516/Asset_4I_will_design_modern_minimalist_elegant_luxury_initial_logo_for_yoU_fjjhbz.jpg",
        alt: "Luxury modern minimalist elegant creative professional Logo design"
      },
      {
        url: "https://res.cloudinary.com/dntx46fvh/image/upload/q_auto/v1732118423/3d_Mockup_54_wrkp5g.jpg",
        previewUrl: "https://res.cloudinary.com/dntx46fvh/image/upload/w_400/dpr_auto/q_auto/v1732118423/3d_Mockup_54_wrkp5g.jpg",
        alt: "Luxury modern minimalist elegant creative professional Logo design"
      },
      {
        url: "https://res.cloudinary.com/dntx46fvh/image/upload/q_auto/v1732118423/DW_3d_Mockup_tijua2.jpg",
        previewUrl: "https://res.cloudinary.com/dntx46fvh/image/upload/w_400/dpr_auto/q_auto/v1732118423/DW_3d_Mockup_tijua2.jpg",
        alt: "Luxury modern minimalist elegant creative professional Logo design"
      },
      {
        url: "https://res.cloudinary.com/dntx46fvh/image/upload/q_auto/v1732118423/3d_Mockup_JPG_avbrtf.jpg",
        previewUrl: "https://res.cloudinary.com/dntx46fvh/image/upload/w_400/dpr_auto/q_auto/v1732118423/3d_Mockup_JPG_avbrtf.jpg",
        alt: "Luxury modern minimalist elegant creative professional Logo design"
      },
      {
        url: "https://res.cloudinary.com/dntx46fvh/image/upload/q_auto/v1732118425/FS_3d_Mockup_llwcdi.jpg",
        previewUrl: "https://res.cloudinary.com/dntx46fvh/image/upload/w_400/dpr_auto/q_auto/v1732118425/FS_3d_Mockup_llwcdi.jpg",
        alt: "Luxury modern minimalist elegant creative professional Logo design"
      },
      {
        url: "https://res.cloudinary.com/dntx46fvh/image/upload/q_auto/v1732118426/JF_Mockup_jdyjbp.jpg",
        previewUrl: "https://res.cloudinary.com/dntx46fvh/image/upload/w_400/dpr_auto/q_auto/v1732118426/JF_Mockup_jdyjbp.jpg",
        alt: "Luxury modern minimalist elegant creative professional Logo design"
      },
      {
        url: "https://res.cloudinary.com/dntx46fvh/image/upload/q_auto/v1732118428/MKI_3d_Mockup_sbnx7j.jpg",
        previewUrl: "https://res.cloudinary.com/dntx46fvh/image/upload/w_400/dpr_auto/q_auto/v1732118428/MKI_3d_Mockup_sbnx7j.jpg",
        alt: "Luxury modern minimalist elegant creative professional Logo design"
      },
      {
        url: "https://res.cloudinary.com/dntx46fvh/image/upload/q_auto/v1732118435/PR_Mokup_kmkuyc.jpg",
        previewUrl: "https://res.cloudinary.com/dntx46fvh/image/upload/w_400/dpr_auto/q_auto/v1732118435/PR_Mokup_kmkuyc.jpg",
        alt: "Luxury modern minimalist elegant creative professional Logo design"
      }
    ],
    "Print Media": [
      {
        url: "https://res.cloudinary.com/dntx46fvh/image/upload/q_auto/v1732288625/Print_Media_Design_Brochure_Flyer_32_ojuiet.jpg",
        previewUrl: "https://res.cloudinary.com/dntx46fvh/image/upload/w_400/dpr_auto/q_auto/v1732288625/Print_Media_Design_Brochure_Flyer_32_ojuiet.jpg",
        alt: "Sophisticated design with professional aesthetics"
      },
      {
        url: "https://res.cloudinary.com/dntx46fvh/image/upload/q_auto/v1733047776/Tri_MOCKUP_bt2dmq.jpg",
        previewUrl: "https://res.cloudinary.com/dntx46fvh/image/upload/w_400/dpr_auto/q_auto/v1733047776/Tri_MOCKUP_bt2dmq.jpg",
        alt: "Sophisticated design with professional aesthetics"
      },
      {
        url: "https://res.cloudinary.com/dntx46fvh/image/upload/q_auto/v1733047775/BC_3d_Mockup_stt3y6.jpg",
        previewUrl: "https://res.cloudinary.com/dntx46fvh/image/upload/w_400/dpr_auto/q_auto/v1733047775/BC_3d_Mockup_stt3y6.jpg",
        alt: "Sophisticated design with professional aesthetics"
      },
      {
        url: "https://res.cloudinary.com/dntx46fvh/image/upload/q_auto/v1732288633/Print_Media_Design_Brochure_Flyer_37_gk71te.jpg",
        previewUrl: "https://res.cloudinary.com/dntx46fvh/image/upload/w_400/dpr_auto/q_auto/v1732288633/Print_Media_Design_Brochure_Flyer_37_gk71te.jpg",
        alt: "Creative and professional print media design"
      },
      {
        url: "https://res.cloudinary.com/dntx46fvh/image/upload/q_auto/v1732288637/Print_Media_Design_Brochure_Flyer_43_v2riwc.jpg",
        previewUrl: "https://res.cloudinary.com/dntx46fvh/image/upload/w_400/dpr_auto/q_auto/v1732288637/Print_Media_Design_Brochure_Flyer_43_v2riwc.jpg",
        alt: "Eye-catching flyers and brochures designed to elevate your business"
      },
      {
        url: "https://res.cloudinary.com/dntx46fvh/image/upload/q_auto/v1732288517/Print_Media_Design_Brochure_Flyer_4_rrpnuu.png",
        previewUrl: "https://res.cloudinary.com/dntx46fvh/image/upload/w_400/dpr_auto/q_auto/v1732288517/Print_Media_Design_Brochure_Flyer_4_rrpnuu.png",
        alt: "High-quality print media designs for your business"
      },
      {
        url: "https://res.cloudinary.com/dntx46fvh/image/upload/q_auto/v1732288637/Print_Media_Design_Brochure_Flyer_41_h4x7ol.jpg",
        previewUrl: "https://res.cloudinary.com/dntx46fvh/image/upload/w_400/dpr_auto/q_auto/v1732288637/Print_Media_Design_Brochure_Flyer_41_h4x7ol.jpg",
        alt: "High-quality print media designs for your business"
      },
      {
        url: "https://res.cloudinary.com/dntx46fvh/image/upload/q_auto/v1732288634/Print_Media_Design_Brochure_Flyer_40_crjamo.jpg",
        previewUrl: "https://res.cloudinary.com/dntx46fvh/image/upload/w_400/dpr_auto/q_auto/v1732288634/Print_Media_Design_Brochure_Flyer_40_crjamo.jpg",
        alt: "Custom print media designs that represent your brand"
      },
      {
        url: "https://res.cloudinary.com/dntx46fvh/image/upload/q_auto/v1732288633/Print_Media_Design_Brochure_Flyer_36_gx8ij9.jpg",
        previewUrl: "https://res.cloudinary.com/dntx46fvh/image/upload/w_400/dpr_auto/q_auto/v1732288633/Print_Media_Design_Brochure_Flyer_36_gx8ij9.jpg",
        alt: "Premium print media designs tailored to your needs"
      },
      {
        url: "https://res.cloudinary.com/dntx46fvh/image/upload/q_auto/v1732288633/Print_Media_Design_Brochure_Flyer_37_gk71te.jpg",
        previewUrl: "https://res.cloudinary.com/dntx46fvh/image/upload/w_400/dpr_auto/q_auto/v1732288633/Print_Media_Design_Brochure_Flyer_37_gk71te.jpg",
        alt: "Attention-grabbing designs to promote your business"
      },
      {
        url: "https://res.cloudinary.com/dntx46fvh/image/upload/q_auto/v1732288633/Print_Media_Design_Brochure_Flyer_38_ifljvv.jpg",
        previewUrl: "https://res.cloudinary.com/dntx46fvh/image/upload/w_400/dpr_auto/q_auto/v1732288633/Print_Media_Design_Brochure_Flyer_38_ifljvv.jpg",
        alt: "Creative print media solutions for your brand"
      },
      {
        url: "https://res.cloudinary.com/dntx46fvh/image/upload/q_auto/v1732288632/Print_Media_Design_Brochure_Flyer_39_d5t9iq.jpg",
        previewUrl: "https://res.cloudinary.com/dntx46fvh/image/upload/w_400/dpr_auto/q_auto/v1732288632/Print_Media_Design_Brochure_Flyer_39_d5t9iq.jpg",
        alt: "Elegant and stylish print media designs"
      },
      {
        url: "https://res.cloudinary.com/dntx46fvh/image/upload/q_auto/v1732288627/Print_Media_Design_Brochure_Flyer_31_oht4v9.jpg",
        previewUrl: "https://res.cloudinary.com/dntx46fvh/image/upload/w_400/dpr_auto/q_auto/v1732288627/Print_Media_Design_Brochure_Flyer_31_oht4v9.jpg",
        alt: "Professional print designs that captivate"
      },
      {
        url: "https://res.cloudinary.com/dntx46fvh/image/upload/q_auto/v1732288627/Print_Media_Design_Brochure_Flyer_27_xnefzz.jpg",
        previewUrl: "https://res.cloudinary.com/dntx46fvh/image/upload/w_400/dpr_auto/q_auto/v1732288627/Print_Media_Design_Brochure_Flyer_27_xnefzz.jpg",
        alt: "Bespoke print designs tailored for your brand"
      },
      {
        url: "https://res.cloudinary.com/dntx46fvh/image/upload/q_auto/v1732288626/Print_Media_Design_Brochure_Flyer_33_rjkosn.jpg",
        previewUrl: "https://res.cloudinary.com/dntx46fvh/image/upload/w_400/dpr_auto/q_auto/v1732288626/Print_Media_Design_Brochure_Flyer_33_rjkosn.jpg",
        alt: "Striking print media designs for any occasion"
      },
      {
        url: "https://res.cloudinary.com/dntx46fvh/image/upload/q_auto/v1732288518/Print_Media_Design_Brochure_Flyer_3_i0wjvy.jpg",
        previewUrl: "https://res.cloudinary.com/dntx46fvh/image/upload/w_400/dpr_auto/q_auto/v1732288518/Print_Media_Design_Brochure_Flyer_3_i0wjvy.jpg",
        alt: "Striking print media designs for any occasion"
      },
      {
        url: "https://res.cloudinary.com/dntx46fvh/image/upload/q_auto/v1732288619/Print_Media_Design_Brochure_Flyer_30_yqs2rt.jpg",
        previewUrl: "https://res.cloudinary.com/dntx46fvh/image/upload/w_400/dpr_auto/q_auto/v1732288619/Print_Media_Design_Brochure_Flyer_30_yqs2rt.jpg",
        alt: "Dynamic and modern print media designs"
      },
      {
        url: "https://res.cloudinary.com/dntx46fvh/image/upload/q_auto/v1732288619/Print_Media_Design_Brochure_Flyer_28_d76ocj.jpg",
        previewUrl: "https://res.cloudinary.com/dntx46fvh/image/upload/w_400/dpr_auto/q_auto/v1732288619/Print_Media_Design_Brochure_Flyer_28_d76ocj.jpg",
        alt: "Versatile designs to suit your business needs"
      },
      {
        url: "https://res.cloudinary.com/dntx46fvh/image/upload/q_auto/v1732288618/Print_Media_Design_Brochure_Flyer_29_deukxg.jpg",
        previewUrl: "https://res.cloudinary.com/dntx46fvh/image/upload/w_400/dpr_auto/q_auto/v1732288618/Print_Media_Design_Brochure_Flyer_29_deukxg.jpg",
        alt: "High-quality print materials that leave an impression"
      },
      {
        url: "https://res.cloudinary.com/dntx46fvh/image/upload/q_auto/v1732288616/Print_Media_Design_Brochure_Flyer_26_h6urci.jpg",
        previewUrl: "https://res.cloudinary.com/dntx46fvh/image/upload/w_400/dpr_auto/q_auto/v1732288616/Print_Media_Design_Brochure_Flyer_26_h6urci.jpg",
        alt: "Customizable designs for any industry"
      },
      {
        url: "https://res.cloudinary.com/dntx46fvh/image/upload/q_auto/v1732288616/Print_Media_Design_Brochure_Flyer_23_n8htpa.jpg",
        previewUrl: "https://res.cloudinary.com/dntx46fvh/image/upload/w_400/dpr_auto/q_auto/v1732288616/Print_Media_Design_Brochure_Flyer_23_n8htpa.jpg",
        alt: "Creative solutions for your print media needs"
      },
      {
        url: "https://res.cloudinary.com/dntx46fvh/image/upload/q_auto/v1732288614/Print_Media_Design_Brochure_Flyer_25_xqtgkn.jpg",
        previewUrl: "https://res.cloudinary.com/dntx46fvh/image/upload/w_400/dpr_auto/q_auto/v1732288614/Print_Media_Design_Brochure_Flyer_25_xqtgkn.jpg",
        alt: "Stylish designs that communicate effectively"
      },
      {
        url: "https://res.cloudinary.com/dntx46fvh/image/upload/q_auto/v1732288613/Print_Media_Design_Brochure_Flyer_22_w7ouua.jpg",
        previewUrl: "https://res.cloudinary.com/dntx46fvh/image/upload/w_400/dpr_auto/q_auto/v1732288613/Print_Media_Design_Brochure_Flyer_22_w7ouua.jpg",
        alt: "Elegant print media designs to captivate your audience"
      },
      {
        url: "https://res.cloudinary.com/dntx46fvh/image/upload/q_auto/v1732288613/Print_Media_Design_Brochure_Flyer_21_cdfdt7.jpg",
        previewUrl: "https://res.cloudinary.com/dntx46fvh/image/upload/w_400/dpr_auto/q_auto/v1732288613/Print_Media_Design_Brochure_Flyer_21_cdfdt7.jpg",
        alt: "High-impact print media for all your needs"
      },
      {
        url: "https://res.cloudinary.com/dntx46fvh/image/upload/q_auto/v1732288612/Print_Media_Design_Brochure_Flyer_20_kze9u2.jpg",
        previewUrl: "https://res.cloudinary.com/dntx46fvh/image/upload/w_400/dpr_auto/q_auto/v1732288612/Print_Media_Design_Brochure_Flyer_20_kze9u2.jpg",
        alt: "Creative print media solutions for branding"
      },
      {
        url: "https://res.cloudinary.com/dntx46fvh/image/upload/q_auto/v1732288612/Print_Media_Design_Brochure_Flyer_19_b2ljqc.jpg",
        previewUrl: "https://res.cloudinary.com/dntx46fvh/image/upload/w_400/dpr_auto/q_auto/v1732288612/Print_Media_Design_Brochure_Flyer_19_b2ljqc.jpg",
        alt: "Exceptional print designs for your business"
      },
      {
        url: "https://res.cloudinary.com/dntx46fvh/image/upload/q_auto/v1732288609/Print_Media_Design_Brochure_Flyer_9_vu9j8q.jpg",
        previewUrl: "https://res.cloudinary.com/dntx46fvh/image/upload/w_400/dpr_auto/q_auto/v1732288609/Print_Media_Design_Brochure_Flyer_9_vu9j8q.jpg",
        alt: "Custom designs that speak for your brand"
      },
      {
        url: "https://res.cloudinary.com/dntx46fvh/image/upload/q_auto/v1732288608/Print_Media_Design_Brochure_Flyer_12_mcfeaj.jpg",
        previewUrl: "https://res.cloudinary.com/dntx46fvh/image/upload/w_400/dpr_auto/q_auto/v1732288608/Print_Media_Design_Brochure_Flyer_12_mcfeaj.jpg",
        alt: "Professional and clean print media designs"
      },
      {
        url: "https://res.cloudinary.com/dntx46fvh/image/upload/q_auto/v1732288607/Print_Media_Design_Brochure_Flyer_16_pdmztk.jpg",
        previewUrl: "https://res.cloudinary.com/dntx46fvh/image/upload/w_400/dpr_auto/q_auto/v1732288607/Print_Media_Design_Brochure_Flyer_16_pdmztk.jpg",
        alt: "Tailored print media designs for your goals"
      },
      {
        url: "https://res.cloudinary.com/dntx46fvh/image/upload/q_auto/v1732288605/Print_Media_Design_Brochure_Flyer_11_c5th8b.jpg",
        previewUrl: "https://res.cloudinary.com/dntx46fvh/image/upload/w_400/dpr_auto/q_auto/v1732288605/Print_Media_Design_Brochure_Flyer_11_c5th8b.jpg",
        alt: "Modern and impactful print media designs"
      },
      {
        url: "https://res.cloudinary.com/dntx46fvh/image/upload/q_auto/v1732288576/Print_Media_Design_Brochure_Flyer_14_ojzr2l.jpg",
        previewUrl: "https://res.cloudinary.com/dntx46fvh/image/upload/w_400/dpr_auto/q_auto/v1732288576/Print_Media_Design_Brochure_Flyer_14_ojzr2l.jpg",
        alt: "Beautiful print media solutions for your brand"
      },
      {
        url: "https://res.cloudinary.com/dntx46fvh/image/upload/q_auto/v1732288565/Print_Media_Design_Brochure_Flyer_10_ux5kjm.jpg",
        previewUrl: "https://res.cloudinary.com/dntx46fvh/image/upload/w_400/dpr_auto/q_auto/v1732288565/Print_Media_Design_Brochure_Flyer_10_ux5kjm.jpg",
        alt: "Creative and functional print media designs"
      },
      {
        url: "https://res.cloudinary.com/dntx46fvh/image/upload/q_auto/v1732288563/Print_Media_Design_Brochure_Flyer_7_a6ax56.jpg",
        previewUrl: "https://res.cloudinary.com/dntx46fvh/image/upload/w_400/dpr_auto/q_auto/v1732288563/Print_Media_Design_Brochure_Flyer_7_a6ax56.jpg",
        alt: "Innovative print media designs to stand out"
      },
      {
        url: "https://res.cloudinary.com/dntx46fvh/image/upload/q_auto/v1732288533/Print_Media_Design_Brochure_Flyer_2_mbp3rf.jpg",
        previewUrl: "https://res.cloudinary.com/dntx46fvh/image/upload/w_400/dpr_auto/q_auto/v1732288533/Print_Media_Design_Brochure_Flyer_2_mbp3rf.jpg",
        alt: "Eye-catching designs for print media materials"
      },
      {
        url: "https://res.cloudinary.com/dntx46fvh/image/upload/q_auto/v1732288534/Print_Media_Design_Brochure_Flyer_8_mkojye.jpg",
        previewUrl: "https://res.cloudinary.com/dntx46fvh/image/upload/w_400/dpr_auto/q_auto/v1732288534/Print_Media_Design_Brochure_Flyer_8_mkojye.jpg",
        alt: "Efficient and creative print designs for branding"
      }
    ],
    "Digital Media": [
      {
        url: "https://res.cloudinary.com/dntx46fvh/image/upload/q_auto/v1732813505/Social_Media_Design_8_uhu853.jpg",
        previewUrl: "https://res.cloudinary.com/dntx46fvh/image/upload/w_400/dpr_auto/q_auto/v1732813505/Social_Media_Design_8_uhu853.jpg",
        alt: "Dynamic social media design to boost online presence"
      },
      {
        url: "https://res.cloudinary.com/dntx46fvh/image/upload/q_auto/v1732813736/Social_Media_Design_xylgzf.jpg",
        previewUrl: "https://res.cloudinary.com/dntx46fvh/image/upload/w_400/dpr_auto/q_auto/v1732813736/Social_Media_Design_xylgzf.jpg",
        alt: "Professional social media design tailored for your needs"
      },
      {
        url: "https://res.cloudinary.com/dntx46fvh/image/upload/q_auto/v1732813476/Social_Media_Design_2_bzp0gd.jpg",
        previewUrl: "https://res.cloudinary.com/dntx46fvh/image/upload/w_400/dpr_auto/q_auto/v1732813476/Social_Media_Design_2_bzp0gd.jpg",
        alt: "Creative and stylish social media design templates"
      },
      {
        url: "https://res.cloudinary.com/dntx46fvh/image/upload/q_auto/v1732813505/Social_Media_Design_10_vdbhmm.jpg",
        previewUrl: "https://res.cloudinary.com/dntx46fvh/image/upload/w_400/dpr_auto/q_auto/v1732813505/Social_Media_Design_10_vdbhmm.jpg",
        alt: "Sophisticated social media design for brand elevation"
      },
      {
        url: "https://res.cloudinary.com/dntx46fvh/image/upload/q_auto/v1732813505/Social_Media_Design_9_nrg0ec.jpg",
        previewUrl: "https://res.cloudinary.com/dntx46fvh/image/upload/w_400/dpr_auto/q_auto/v1732813505/Social_Media_Design_9_nrg0ec.jpg",
        alt: "Trendy social media design perfect for promotions"
      },
      {
        url: "https://res.cloudinary.com/dntx46fvh/image/upload/q_auto/v1732813478/Social_Media_Design_6_hzvig6.jpg",
        previewUrl: "https://res.cloudinary.com/dntx46fvh/image/upload/w_400/dpr_auto/q_auto/v1732813478/Social_Media_Design_6_hzvig6.jpg",
        alt: "High-quality social media graphics for better engagement"
      },
      {
        url: "https://res.cloudinary.com/dntx46fvh/image/upload/q_auto/v1734619141/Social_Media_Design_12_nwdrqp.jpg",
        previewUrl: "https://res.cloudinary.com/dntx46fvh/image/upload/w_400/dpr_auto/q_auto/v1734619141/Social_Media_Design_12_nwdrqp.jpg",
        alt: "Modern social media design for impactful storytelling"
      },
      {
        url: "https://res.cloudinary.com/dntx46fvh/image/upload/q_auto/v1732813477/Social_Media_Design_4_a9mumv.jpg",
        previewUrl: "https://res.cloudinary.com/dntx46fvh/image/upload/w_400/dpr_auto/q_auto/v1732813477/Social_Media_Design_4_a9mumv.jpg",
        alt: "Modern social media design for impactful storytelling"
      },
      {
        url: "https://res.cloudinary.com/dntx46fvh/image/upload/q_auto/v1732813478/Social_Media_Design_5_zaeta2.jpg",
        previewUrl: "https://res.cloudinary.com/dntx46fvh/image/upload/w_400/dpr_auto/q_auto/v1732813478/Social_Media_Design_5_zaeta2.jpg",
        alt: "Custom social media design with vibrant aesthetics"
      },
      {
        url: "https://res.cloudinary.com/dntx46fvh/image/upload/q_auto/v1732813479/Social_Media_Design_7_q8i4t7.jpg",
        previewUrl: "https://res.cloudinary.com/dntx46fvh/image/upload/w_400/dpr_auto/q_auto/v1732813479/Social_Media_Design_7_q8i4t7.jpg",
        alt: "Engaging social media design for impactful branding"
      },
      {
        url: "https://res.cloudinary.com/dntx46fvh/image/upload/q_auto/v1734619141/Social_Media_Design_13_ntntml.jpg",
        previewUrl: "https://res.cloudinary.com/dntx46fvh/image/upload/w_400/dpr_auto/q_auto/v1734619141/Social_Media_Design_13_ntntml.jpg",
        alt: "Engaging social media design for impactful branding"
      },
      {
        url: "https://res.cloudinary.com/dntx46fvh/image/upload/q_auto/v1732813476/Social_Media_Design_3_azlv4k.jpg",
        previewUrl: "https://res.cloudinary.com/dntx46fvh/image/upload/w_400/dpr_auto/q_auto/v1732813476/Social_Media_Design_3_azlv4k.jpg",
        alt: "Eye-catching social media design for brand promotion"
      },
      {
        url: "https://res.cloudinary.com/dntx46fvh/image/upload/q_auto/v1732813475/Social_Media_Design_1_nij2g5.png",
        previewUrl: "https://res.cloudinary.com/dntx46fvh/image/upload/w_400/dpr_auto/q_auto/v1732813475/Social_Media_Design_1_nij2g5.png",
        alt: "Unique social media design for standout posts"
      },
      {
        url: "https://res.cloudinary.com/dntx46fvh/image/upload/q_auto/v1732813377/Social_Media_Design_1_lugat9.jpg",
        previewUrl: "https://res.cloudinary.com/dntx46fvh/image/upload/w_400/dpr_auto/q_auto/v1732813377/Social_Media_Design_1_lugat9.jpg",
        alt: "Elegant social media design for professional branding"
      },
      {
        url: "https://res.cloudinary.com/dntx46fvh/image/upload/q_auto/v1734619139/Social_Media_Design_11_xrcrks.jpg",
        previewUrl: "https://res.cloudinary.com/dntx46fvh/image/upload/w_400/dpr_auto/q_auto/v1734619139/Social_Media_Design_11_xrcrks.jpg",
        alt: "Elegant social media design for professional branding"
      },
    ],
    Packaging: [
      {
        url: "https://res.cloudinary.com/dntx46fvh/image/upload/q_auto/v1732813524/76421_jcmebz.jpg",
        previewUrl: "https://res.cloudinary.com/dntx46fvh/image/upload/w_400/dpr_auto/q_auto/v1732813524/76421_jcmebz.jpg",
        alt: "Sophisticated design with professional aesthetics"
      },
      {
        url: "https://res.cloudinary.com/dntx46fvh/image/upload/q_auto/v1732813523/130_a1k8tb.jpg",
        previewUrl: "https://res.cloudinary.com/dntx46fvh/image/upload/w_400/dpr_auto/q_auto/v1732813523/130_a1k8tb.jpg",
        alt: "Minimalist design focused on sleek presentation"
      },
      {
        url: "https://res.cloudinary.com/dntx46fvh/image/upload/q_auto/v1732813528/Leather_Bag_2000x1300px_Free_PSD_Mockup_by_MD15_rbqnpi.jpg",
        previewUrl: "https://res.cloudinary.com/dntx46fvh/image/upload/w_400/dpr_auto/q_auto/v1732813528/Leather_Bag_2000x1300px_Free_PSD_Mockup_by_MD15_rbqnpi.jpg",
        alt: "Premium leather bag mockup for branding visualization"
      },
      {
        url: "https://res.cloudinary.com/dntx46fvh/image/upload/q_auto/v1732813522/44_emhhep.jpg",
        previewUrl: "https://res.cloudinary.com/dntx46fvh/image/upload/w_400/dpr_auto/q_auto/v1732813522/44_emhhep.jpg",
        alt: "Elegant design showcasing minimalist aesthetics"
      },

      {
        url: "https://res.cloudinary.com/dntx46fvh/image/upload/q_auto/v1734692373/whack_aay6hj.jpg",
        previewUrl: "https://res.cloudinary.com/dntx46fvh/image/upload/w_500/dpr_auto/q_auto/v1734692373/whack_aay6hj.jpg",
        alt: "Elegant design showcasing minimalist aesthetics",
      },
      {
        url: "https://res.cloudinary.com/dntx46fvh/image/upload/q_auto/v1732813525/Flyer_24_x77kzo.jpg",
        previewUrl: "https://res.cloudinary.com/dntx46fvh/image/upload/w_400/dpr_auto/q_auto/v1732813525/Flyer_24_x77kzo.jpg",
        alt: "Vibrant flyer design ideal for promotions"
      },
      {
        url: "https://res.cloudinary.com/dntx46fvh/image/upload/q_auto/v1732813527/Flyer_5_rmrgg5.jpg",
        previewUrl: "https://res.cloudinary.com/dntx46fvh/image/upload/w_400/dpr_auto/q_auto/v1732813527/Flyer_5_rmrgg5.jpg",
        alt: "Creative flyer design for marketing campaigns"
      },
      {
        url: "https://res.cloudinary.com/dntx46fvh/image/upload/q_auto/v1732814047/wine_gnkli8.jpg",
        previewUrl: "https://res.cloudinary.com/dntx46fvh/image/upload/w_400/dpr_auto/q_auto/v1732814047/wine_gnkli8.jpg",
        alt: "Elegant wine label design for sophisticated branding"
      },
      {
        url: "https://res.cloudinary.com/dntx46fvh/image/upload/t_pot/q_auto/v1732813534/STRAWBERRY_MockUp_ttsrer.png",
        previewUrl: "https://res.cloudinary.com/dntx46fvh/image/upload/w_400/dpr_auto/t_pot/q_auto/v1732813534/STRAWBERRY_MockUp_ttsrer.png",
        alt: "Strawberry-themed product mockup for fresh branding"
      },
      {
        url: "https://res.cloudinary.com/dntx46fvh/image/upload/q_auto/v1733042392/BH2_Mockup1_n6k7v2.jpg",
        previewUrl: "https://res.cloudinary.com/dntx46fvh/image/upload/w_400/dpr_auto/q_auto/v1733042392/BH2_Mockup1_n6k7v2.jpg",
        alt: "Sophisticated design with professional aesthetics"
      },
      {
        url: "https://res.cloudinary.com/dntx46fvh/image/upload/q_auto/v1732813534/Vintage_Label_Tag_MockUp_jtlice.jpg",
        previewUrl: "https://res.cloudinary.com/dntx46fvh/image/upload/w_400/dpr_auto/q_auto/v1732813534/Vintage_Label_Tag_MockUp_jtlice.jpg",
        alt: "Vintage label tag mockup with classic aesthetics"
      },
      {
        url: "https://res.cloudinary.com/dntx46fvh/image/upload/q_auto/v1732813533/tyhtyr_rdgkpe.jpg",
        previewUrl: "https://res.cloudinary.com/dntx46fvh/image/upload/w_400/dpr_auto/q_auto/v1732813533/tyhtyr_rdgkpe.jpg",
        alt: "Modern design with a bold visual approach"
      },
      {
        url: "https://res.cloudinary.com/dntx46fvh/image/upload/q_auto/v1732813533/Social_Design_23_fmveyz.jpg",
        previewUrl: "https://res.cloudinary.com/dntx46fvh/image/upload/w_400/dpr_auto/q_auto/v1732813533/Social_Design_23_fmveyz.jpg",
        alt: "Dynamic social media design for impactful engagement"
      },
      {
        url: "https://res.cloudinary.com/dntx46fvh/image/upload/q_auto/v1732813533/Window_mockup_njesog.jpg",
        previewUrl: "https://res.cloudinary.com/dntx46fvh/image/upload/w_400/dpr_auto/q_auto/v1732813533/Window_mockup_njesog.jpg",
        alt: "Realistic window mockup for brand display"
      },
      {
        url: "https://res.cloudinary.com/dntx46fvh/image/upload/q_auto/v1732813533/Shop_Facade_Logo_MockUp_2_iuvjrk.jpg",
        previewUrl: "https://res.cloudinary.com/dntx46fvh/image/upload/w_400/dpr_auto/q_auto/v1732813533/Shop_Facade_Logo_MockUp_2_iuvjrk.jpg",
        alt: "Shop facade logo mockup for outdoor branding"
      },
      {
        url: "https://res.cloudinary.com/dntx46fvh/image/upload/q_auto/v1732813531/Reality_1_mockup_uizrzk.jpg",
        previewUrl: "https://res.cloudinary.com/dntx46fvh/image/upload/w_400/dpr_auto/q_auto/v1732813531/Reality_1_mockup_uizrzk.jpg",
        alt: "Stylish mockup with a realistic visual appeal"
      },
      {
        url: "https://res.cloudinary.com/dntx46fvh/image/upload/q_auto/v1732813530/seal_c_y7rq7p.jpg",
        previewUrl: "https://res.cloudinary.com/dntx46fvh/image/upload/w_400/dpr_auto/q_auto/v1732813530/seal_c_y7rq7p.jpg",
        alt: "Seal design mockup for official branding"
      },
      {
        url: "https://res.cloudinary.com/dntx46fvh/image/upload/q_auto/v1732813523/65900_ipe8w8.jpg",
        previewUrl: "https://res.cloudinary.com/dntx46fvh/image/upload/w_400/dpr_auto/q_auto/v1732813523/65900_ipe8w8.jpg",
        alt: "Creative composition with eye-catching visuals"
      },
      {
        url: "https://res.cloudinary.com/dntx46fvh/image/upload/q_auto/v1732813526/Flyer_27_b9zdet.jpg",
        previewUrl: "https://res.cloudinary.com/dntx46fvh/image/upload/w_400/dpr_auto/q_auto/v1732813526/Flyer_27_b9zdet.jpg",
        alt: "Stylish flyer design for impactful marketing"
      },
      {
        url: "https://res.cloudinary.com/dntx46fvh/image/upload/q_auto/v1732813525/183_jhuvdl.jpg",
        previewUrl: "https://res.cloudinary.com/dntx46fvh/image/upload/w_400/dpr_auto/q_auto/v1732813525/183_jhuvdl.jpg",
        alt: "Modern layout with a bold visual statement"
      },
    ],
    Tshirt: [
      {
        url: "https://res.cloudinary.com/dntx46fvh/image/upload/q_auto/v1732813047/Asset_10T_shirt_Design_jmyphj.jpg",
        previewUrl: "https://res.cloudinary.com/dntx46fvh/image/upload/w_400/dpr_auto/q_auto/v1732813047/Asset_10T_shirt_Design_jmyphj.jpg",
        alt: "Stylish T-shirt design with a modern aesthetic"
      },
      {
        url: "https://res.cloudinary.com/dntx46fvh/image/upload/q_auto/v1732813047/Asset_8T_shirt_Design_xbsbd5.jpg",
        previewUrl: "https://res.cloudinary.com/dntx46fvh/image/upload/w_400/dpr_auto/q_auto/v1732813047/Asset_8T_shirt_Design_xbsbd5.jpg",
        alt: "Creative T-shirt design showcasing bold patterns"
      },
      {
        url: "https://res.cloudinary.com/dntx46fvh/image/upload/q_auto/v1732813047/Tshirts_36_qvuqds.jpg",
        previewUrl: "https://res.cloudinary.com/dntx46fvh/image/upload/w_400/dpr_auto/q_auto/v1732813047/Tshirts_36_qvuqds.jpg",
        alt: "Minimalist T-shirt design for everyday wear"
      },
      {
        url: "https://res.cloudinary.com/dntx46fvh/image/upload/q_auto/v1732813043/Asset_3T_shirt_Design_lwunrl.jpg",
        previewUrl: "https://res.cloudinary.com/dntx46fvh/image/upload/w_400/dpr_auto/q_auto/v1732813043/Asset_3T_shirt_Design_lwunrl.jpg",
        alt: "Elegant T-shirt design with unique typography"
      },
      {
        url: "https://res.cloudinary.com/dntx46fvh/image/upload/q_auto/v1732813047/Asset_9T_shirt_Design_hruwti.jpg",
        previewUrl: "https://res.cloudinary.com/dntx46fvh/image/upload/w_400/dpr_auto/q_auto/v1732813047/Asset_9T_shirt_Design_hruwti.jpg",
        alt: "Eye-catching T-shirt design with vibrant elements"
      },
      {
        url: "https://res.cloudinary.com/dntx46fvh/image/upload/q_auto/v1732813048/Tshirts_42_dqvabo.png",
        previewUrl: "https://res.cloudinary.com/dntx46fvh/image/upload/w_400/dpr_auto/q_auto/v1732813048/Tshirts_42_dqvabo.png",
        alt: "Custom T-shirt design with detailed graphics"
      },
      {
        url: "https://res.cloudinary.com/dntx46fvh/image/upload/q_auto/v1732813048/Tshirts_38_pqfi7t.jpg",
        previewUrl: "https://res.cloudinary.com/dntx46fvh/image/upload/w_400/dpr_auto/q_auto/v1732813048/Tshirts_38_pqfi7t.jpg",
        alt: "Premium T-shirt design for casual outings"
      },
      {
        url: "https://res.cloudinary.com/dntx46fvh/image/upload/q_auto/v1732813047/Asset_6T_shirt_Design_c0hyha.jpg",
        previewUrl: "https://res.cloudinary.com/dntx46fvh/image/upload/w_400/dpr_auto/q_auto/v1732813047/Asset_6T_shirt_Design_c0hyha.jpg",
        alt: "Artistic T-shirt design featuring bold creativity"
      },
      {
        url: "https://res.cloudinary.com/dntx46fvh/image/upload/q_auto/v1732813047/Asset_7T_shirt_Design_fy6q1f.jpg",
        previewUrl: "https://res.cloudinary.com/dntx46fvh/image/upload/w_400/dpr_auto/q_auto/v1732813047/Asset_7T_shirt_Design_fy6q1f.jpg",
        alt: "Modern T-shirt design with a trendy touch"
      },
      {
        url: "https://res.cloudinary.com/dntx46fvh/image/upload/q_auto/v1732813044/Asset_5T_shirt_Design_ppzgyb.jpg",
        previewUrl: "https://res.cloudinary.com/dntx46fvh/image/upload/w_400/dpr_auto/q_auto/v1732813044/Asset_5T_shirt_Design_ppzgyb.jpg",
        alt: "Dynamic T-shirt design for the adventurous spirit"
      },
      {
        url: "https://res.cloudinary.com/dntx46fvh/image/upload/q_auto/v1734618658/Tshirts_40_d2pjdi.jpg",
        previewUrl: "https://res.cloudinary.com/dntx46fvh/image/upload/w_400/dpr_auto/q_auto/v1734618658/Tshirts_40_d2pjdi.jpg",
        alt: "Dynamic T-shirt design for the adventurous spirit"
      },
      {
        url: "https://res.cloudinary.com/dntx46fvh/image/upload/q_auto/v1732813043/Asset_2T_shirt_Design_qzhthx.jpg",
        previewUrl: "https://res.cloudinary.com/dntx46fvh/image/upload/w_400/dpr_auto/q_auto/v1732813043/Asset_2T_shirt_Design_qzhthx.jpg",
        alt: "Professional T-shirt design with sleek visuals"
      },
      {
        url: "https://res.cloudinary.com/dntx46fvh/image/upload/q_auto/v1732813043/2258798_fwslbn.jpg",
        previewUrl: "https://res.cloudinary.com/dntx46fvh/image/upload/w_400/dpr_auto/q_auto/v1732813043/2258798_fwslbn.jpg",
        alt: "Unique T-shirt design combining simplicity and style"
      },
      {
        url: "https://res.cloudinary.com/dntx46fvh/image/upload/q_auto/v1732813043/Asset_4T_shirt_Design_ckiio3.jpg",
        previewUrl: "https://res.cloudinary.com/dntx46fvh/image/upload/w_400/dpr_auto/q_auto/v1732813043/Asset_4T_shirt_Design_ckiio3.jpg",
        alt: "Versatile T-shirt design suitable for any occasion"
      },
      {
        url: "https://res.cloudinary.com/dntx46fvh/image/upload/q_auto/v1732813043/Asset_1T_shirt_Design_pc22en.jpg",
        previewUrl: "https://res.cloudinary.com/dntx46fvh/image/upload/w_400/dpr_auto/q_auto/v1732813043/Asset_1T_shirt_Design_pc22en.jpg",
        alt: "Innovative T-shirt design with artistic flair"
      },
    ]
  };

  const handleModalOpen = (image) => {
    setModalImage(image);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setModalImage("");
  };

  const handleFilterChange = (filter) => {
    setLoading(true);
    setSelectedFilter(filter);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  };

  return (
    <section className="py-16 px-8 lg:px-20 bg-[#f8f8f8]">
      <h2 className="text-3xl sm:text-4xl text-center font-semibold text-[#343434] mb-10">
        Explore My Graphics Showcase
      </h2>

      {/* Filters */}
      <div className="flex flex-wrap justify-center space-x-4 gap-y-4 mb-10">
        {["Logo", "Print Media", "Digital Media", "Packaging", "Tshirt"].map(
          (filter) => (
            <button
              key={filter}
              onClick={() => handleFilterChange(filter)}
              className={`px-4 py-2 text-sm sm:text-base rounded-lg text-white ${
                selectedFilter === filter
                  ? "bg-[#D9B592] shadow-lg"
                  : "bg-[#343434] hover:bg-[#D9B592] transition-colors"
              }`}
            >
              {filter}
            </button>
          )
        )}
      </div>

      {/* Show loading effect while images are loading */}
      {loading ? (
        <div className="flex justify-center items-center h-64 sm:h-40 md:h-60 lg:h-48 bg-gray-200 rounded-2xl">
          <span className="text-xl text-gray-500">Loading...</span>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-4 mx-0 lg:mx-24">
          {graphicsData[selectedFilter]?.map((item, index) => (
            <div key={index} className="relative group cursor-pointer">
              <div className="w-300 sm:h-40 md:h-60 lg:h-48 bg-gray-200 rounded-2xl overflow-hidden relative">
                <img
                  src={item.previewUrl}
                  alt={item.alt}
                  className="w-full h-full object-cover transition duration-300"
                  onClick={() => handleModalOpen(item.url)}
                />
                {/* Hover effect for desktop view */}
                <div className="absolute inset-0 bg-black bg-opacity-0 lg:group-hover:bg-opacity-50 lg:group-hover:backdrop-blur-sm transition duration-300 flex items-center justify-center opacity-0 lg:group-hover:opacity-100">
                  <FaSearch
                    className="text-white text-3xl mx-10 cursor-pointer"
                    onClick={() => handleModalOpen(item.url)}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Modal for Enlarged Image */}
      {isModalOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-90 z-50"
          onClick={handleModalClose}
        >
          <div
            className="relative w-full h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={modalImage}
              alt="Modal View"
              className="max-w-full max-h-full object-contain"
              style={{ width: "100%", height: "100%" }}
            />
            <button
              className="absolute top-4 right-4 text-white text-3xl z-50"
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

export default GraphicsShowcase;
