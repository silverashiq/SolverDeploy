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
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
