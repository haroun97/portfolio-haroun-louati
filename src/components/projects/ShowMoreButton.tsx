
import React from 'react';
import { Button } from '@/components/ui/button';

interface ShowMoreButtonProps {
  showAll: boolean;
  toggleShowAll: () => void;
  isAmber?: boolean;
}

const ShowMoreButton = ({ showAll, toggleShowAll, isAmber = false }: ShowMoreButtonProps) => {
  return (
    <div className="flex justify-center mb-16">
      <Button 
        variant="outline" 
        onClick={toggleShowAll}
        className={isAmber 
          ? "border-amber-500 text-amber-600 dark:border-amber-400 dark:text-amber-400 hover:bg-amber-500/10" 
          : "border-portfolio-blue-medium text-portfolio-blue-medium dark:border-portfolio-blue-light dark:text-portfolio-blue-light hover:bg-portfolio-blue-light/10"
        }
      >
        {showAll ? "Show Less" : "View More"}
      </Button>
    </div>
  );
};

export default ShowMoreButton;
