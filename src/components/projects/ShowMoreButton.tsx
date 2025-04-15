
import React, { useRef } from 'react';
import { Button } from '@/components/ui/button';

interface ShowMoreButtonProps {
  showAll: boolean;
  toggleShowAll: () => void;
  isAmber?: boolean;
  sectionId?: string;
}

const ShowMoreButton = ({ showAll, toggleShowAll, sectionId }: ShowMoreButtonProps) => {
  // Store the scroll position reference
  const scrollPositionRef = useRef(0);
  
  const handleToggle = () => {
    if (showAll) {
      // If showing all and about to collapse, remember the scroll position
      // and then scroll back to it after toggling
      if (sectionId) {
        const sectionElement = document.getElementById(sectionId);
        if (sectionElement) {
          const navbarHeight = 80; // approximate navbar height
          const elementPosition = sectionElement.getBoundingClientRect().top + window.pageYOffset;
          const offsetPosition = elementPosition - navbarHeight;
          
          // Execute the toggle first
          toggleShowAll();
          
          // Then scroll to the section
          setTimeout(() => {
            window.scrollTo({
              top: offsetPosition,
              behavior: "smooth",
            });
          }, 50);
          
          return;
        }
      }
    }
    
    // Default behavior if no sectionId or element not found
    toggleShowAll();
  };
  
  return (
    <div className="flex justify-center mb-16">
      <Button 
        variant="outline" 
        onClick={handleToggle}
        className="border-portfolio-blue-medium text-portfolio-blue-medium dark:border-portfolio-blue-light dark:text-portfolio-blue-light hover:bg-portfolio-blue-medium/10 dark:hover:bg-portfolio-blue-light/20 hover:text-portfolio-blue-dark dark:hover:text-white transition-colors duration-300"
      >
        {showAll ? "Show Less" : "View More"}
      </Button>
    </div>
  );
};

export default ShowMoreButton;
