import React, { useEffect, useState } from 'react';
import { Outlet, useLocation, Navigate } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';
import Icons from './Icons';
import { scrollToTop } from '../../utils/scrollUtils';
import { useNavigation } from '../../context/NavigationContext';

const WebsiteLayout = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { allowedPaths } = useNavigation();
  const [shouldRedirect, setShouldRedirect] = useState(false);

  useEffect(() => {
    scrollToTop();
    const currentPath = location.pathname;
    const isAllowed = allowedPaths.has(currentPath) || currentPath === '/' || location.state?.fromNavbar;
    
    if (!isAllowed) {
      setShouldRedirect(true);
    }
  }, [location.pathname, allowedPaths, location.state]);

  if (shouldRedirect) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="website-layout">
      <Navbar onMobileMenuToggle={setIsMobileMenuOpen} />
      <main>
        <Outlet />
      </main>
      <Footer />
      <ScrollToTop />
      <Icons isMobileMenuOpen={isMobileMenuOpen} />
    </div>
  );
};

export default WebsiteLayout;