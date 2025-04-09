
/**
 * Smoothly scrolls to the specified element ID
 */
export const scrollToElement = (elementId: string) => {
  const element = document.getElementById(elementId);
  if (element) {
    // Add a small offset to account for the fixed navbar
    const navbarHeight = 80; // approximate navbar height
    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - navbarHeight;
    
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
};
