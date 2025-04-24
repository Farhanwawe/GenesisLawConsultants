/**
 * A custom hook for smooth scrolling to anchor elements
 */
export const useSmoothScroll = () => {
  const scrollToAnchor = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    const anchor = event.currentTarget;
    const href = anchor.getAttribute('href');

    // Only process anchor links
    if (href && href.startsWith('/#')) {
      event.preventDefault();
      
      const targetId = href.replace('/#', '');
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        const offsetTop = targetElement.getBoundingClientRect().top + window.pageYOffset;
        
        window.scrollTo({
          top: offsetTop - 80, // Adjust for header height
          behavior: 'smooth'
        });
        
        // Update URL hash without scrolling
        window.history.pushState(null, '', href.replace('/', ''));
      }
    }
  };

  return { scrollToAnchor };
};

export default useSmoothScroll;