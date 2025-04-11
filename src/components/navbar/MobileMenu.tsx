
import React from 'react';
import { Briefcase, HandHeart, Trophy } from 'lucide-react';
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navLinks: { href: string; label: string }[];
}

const MobileMenu = ({ isOpen, onClose, navLinks }: MobileMenuProps) => {
  if (!isOpen) return null;

  return (
    <div className="md:hidden bg-white dark:bg-portfolio-blue-dark shadow-lg">
      <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
        {navLinks.slice(0, 3).map((link) => (
          <Link
            key={link.href}
            to={link.href}
            className="text-portfolio-blue-dark dark:text-white hover:text-portfolio-orange-medium dark:hover:text-portfolio-orange-light transition-colors py-2"
            onClick={onClose}
          >
            {link.label}
          </Link>
        ))}
        
        <div className="border-t border-gray-200 dark:border-gray-700 pt-2">
          <p className="text-portfolio-blue-dark dark:text-white font-medium py-2">Experiences</p>
          <div className="pl-4 space-y-2">
            <Link 
              to="/professional-experience"
              className="flex items-center gap-2 text-portfolio-blue-dark dark:text-white hover:text-portfolio-orange-medium dark:hover:text-portfolio-orange-light transition-colors py-1"
              onClick={onClose}
            >
              <Briefcase size={16} />
              <span>Professional</span>
            </Link>
            <Link 
              to="/volunteering-experience"
              className="flex items-center gap-2 text-portfolio-blue-dark dark:text-white hover:text-portfolio-orange-medium dark:hover:text-portfolio-orange-light transition-colors py-1"
              onClick={onClose}
            >
              <HandHeart size={16} />
              <span>Volunteering</span>
            </Link>
            <Link 
              to="/awards"
              className="flex items-center gap-2 text-portfolio-blue-dark dark:text-white hover:text-portfolio-orange-medium dark:hover:text-portfolio-orange-light transition-colors py-1"
              onClick={onClose}
            >
              <Trophy size={16} />
              <span>Awards</span>
            </Link>
          </div>
        </div>
        
        {navLinks.slice(3).map((link) => (
          <Link
            key={link.href}
            to={link.href}
            className="text-portfolio-blue-dark dark:text-white hover:text-portfolio-orange-medium dark:hover:text-portfolio-orange-light transition-colors py-2"
            onClick={onClose}
          >
            {link.label}
          </Link>
        ))}
        
        <Button className="bg-portfolio-orange-medium hover:bg-portfolio-orange-dark text-white w-full">
          <Link to="/resume" onClick={onClose}>Resume</Link>
        </Button>
      </div>
    </div>
  );
};

export default MobileMenu;
