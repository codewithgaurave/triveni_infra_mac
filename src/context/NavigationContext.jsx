import React, { createContext, useContext, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const NavigationContext = createContext();

export const useNavigation = () => {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error('useNavigation must be used within NavigationProvider');
  }
  return context;
};

export const NavigationProvider = ({ children }) => {
  const [allowedPaths, setAllowedPaths] = useState(new Set(['/']));
  const location = useLocation();

  useEffect(() => {
    const currentPath = location.pathname;
    if (!allowedPaths.has(currentPath) && !currentPath.startsWith('/admin')) {
      window.history.replaceState(null, '', '/');
      window.location.href = '/';
    }
  }, [location.pathname]);

  const allowNavigation = (path) => {
    setAllowedPaths(prev => new Set([...prev, path]));
  };

  return (
    <NavigationContext.Provider value={{ allowNavigation, allowedPaths }}>
      {children}
    </NavigationContext.Provider>
  );
};
