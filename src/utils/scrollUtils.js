// Scroll utility functions

export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

export const isAtBottom = () => {
  const windowHeight = window.innerHeight;
  const documentHeight = document.documentElement.scrollHeight;
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
  return scrollTop + windowHeight >= documentHeight - 100; // 100px threshold
};

export const addScrollToTopOnBottom = () => {
  const handleScroll = () => {
    if (isAtBottom()) {
      // Add a small delay to ensure smooth experience
      setTimeout(() => {
        const shouldScrollToTop = window.confirm('You\'ve reached the bottom. Would you like to scroll to top?');
        if (shouldScrollToTop) {
          scrollToTop();
        }
      }, 500);
    }
  };

  window.addEventListener('scroll', handleScroll);
  
  // Return cleanup function
  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
};