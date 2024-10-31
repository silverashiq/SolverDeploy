// src/Layout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import ScrollToTop from '../Components/ScrollToTop';

function Layout() {
  return (
    <div>
      <Navbar />
      <main>
        <Outlet /> 
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default Layout;


