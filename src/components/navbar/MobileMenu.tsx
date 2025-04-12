
import React from 'react';
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { scrollToElement } from '@/utils/scrollUtils';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navLinks: { href: string; label: string }[];
}

const MobileMenu = ({ isOpen, onClose, navLinks }: MobileMenuProps) => {
  if (!isOpen) return null;

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      scrollToElement(href.substring(1));
      onClose(); // Close the menu after navigating
    }
  };

  return (
    <div className="md:hidden bg-white dark:bg-portfolio-blue-dark shadow-lg">
      <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            to={link.href}
            className="text-portfolio-blue-dark dark:text-white hover:text-portfolio-orange-medium dark:hover:text-portfolio-orange-light transition-colors py-2"
            onClick={(e) => {
              handleNavClick(e, link.href);
              onClose();
            }}
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
