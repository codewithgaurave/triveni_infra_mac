import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';
import { scrollToTop } from '../../utils/scrollUtils';

const WebsiteLayout = () => {
  const location = useLocation();

  useEffect(() => {
    // Scroll to top when route changes
    scrollToTop();
  }, [location.pathname]);

  return (
    <div className="website-layout">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default WebsiteLayout;