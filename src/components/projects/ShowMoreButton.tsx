
import React from 'react';
import { Button } from '@/components/ui/button';

interface ShowMoreButtonProps {
  showAll: boolean;
  toggleShowAll: () => void;
  isAmber?: boolean;
}

const ShowMoreButton = ({ showAll, toggleShowAll }: ShowMoreButtonProps) => {
  return (
    <div className="flex justify-center mb-16">
      <Button 
        variant="outline" 
        onClick={toggleShowAll}
        className="border-portfolio-blue-medium text-portfolio-blue-medium dark:border-portfolio-blue-light dark:text-portfolio-blue-light hover:bg-portfolio-blue-light/10"
      >
        {showAll ? "Show Less" : "View More"}
      </Button>
    </div>
  );
};

export default ShowMoreButton;
