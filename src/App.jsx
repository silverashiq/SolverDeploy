// src/App.jsx
import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Graphics from "./Pages/Graphics";
import Portfolio from "./Pages/Portfolio";
import Web from "./Pages/Web";
import Contact from "./Pages/Contact";
import NotFound from "./Pages/NotFound";
import Terms from "./Pages/Terms";
import Policy from "./Pages/Policy";
import Appointment from "./Pages/Appointment";
import Logos from "./Pages/Logos";
import BrandGuidelines from "./Pages/BrandGuidelines ";
import Brochure from "./Pages/Brochure";

import Packaging from "./Pages/Packaging";
import Tshirt from "./Pages/Tshirt";
import SocialPage from "./Pages/SocialPage";
import Landing from "./Pages/Landing";
import Business from "./Pages/Business";
import Redesign from "./Pages/Redesign";
import Ecommerce from "./Pages/Ecommerce";
import WebApp from "./Pages/WebApp";
import FullStack from "./Pages/FullStack";
import FormSubmitted from "./Pages/FormSubmitted";
import FormSubmittedApp from "./Pages/FormSubmittedApp";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="graphics" element={<Graphics />} />
        {/* Route for portfolio with dynamic category */}
        <Route path="portfolio" element={<Portfolio />} />{" "}
        {/* Default portfolio page */}
        <Route path="portfolio/:category" element={<Portfolio />} />{" "}
        {/* Portfolio with category */}
        <Route path="web" element={<Web />} />
        <Route path="contact" element={<Contact />} />
        <Route path="appointment" element={<Appointment />} />
        <Route path="terms" element={<Terms />} />
        <Route path="policy" element={<Policy />} />
        <Route path="logo" element={<Logos />} />
        <Route path="brand" element={<BrandGuidelines />} />
        <Route path="print" element={<Brochure />} />
        <Route path="social" element={<SocialPage />} />
        <Route path="pack" element={<Packaging />} />
        <Route path="tshirt" element={<Tshirt />} />
        <Route path="landing" element={<Landing />} />
        <Route path="business" element={<Business />} />
        <Route path="redo" element={<Redesign />} />
        <Route path="ecommerce" element={<Ecommerce />} />
        <Route path="app" element={<WebApp />} />
        <Route path="stack" element={<FullStack />} />
        <Route path="confirmed" element={<FormSubmitted />} />
        <Route path="confirmedApp" element={<FormSubmittedApp />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
