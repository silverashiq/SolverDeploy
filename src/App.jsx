// src/App.jsx
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import Home from './Pages/Home';
import About from './Pages/About';
import Services from './Pages/Services';
import Graphics from './Pages/Graphics';
import Portfolio from './Pages/Portfolio';
import Web from './Pages/Web';
import Contact from './Pages/Contact';
import NotFound from './Pages/NotFound';
import Terms from './Pages/Terms';
import Policy from './Pages/Policy';
import Appointment from './Pages/Appointment';
import Logos from './Pages/Logos';
import BrandGuidelines from './Pages/BrandGuidelines ';
import Brochure from './Pages/Brochure';

import Packaging from './Pages/Packaging';
import Tshirt from './Pages/Tshirt';
import SocialPage from './Pages/Socialpage';



BrandGuidelines

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home/>} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="graphics" element={<Graphics />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="web" element={<Web />} />
        <Route path="contact" element={<Contact />} />
        <Route path="book" element={<Appointment />} />
        <Route path="terms" element={<Terms />} />
        <Route path="policy" element={<Policy />} />
        <Route path="logo" element={<Logos />} />
        <Route path="brand" element={<BrandGuidelines />} />
        <Route path="print" element={<Brochure />} />
        <Route path="social" element={<SocialPage />} />
        <Route path="pack" element={<Packaging />} />
        <Route path="tshirt" element={<Tshirt />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
