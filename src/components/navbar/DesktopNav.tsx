
import React from 'react';
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { scrollToElement } from '@/utils/scrollUtils';
import ExperiencesDropdown from './ExperiencesDropdown';

interface DesktopNavProps {
  navLinks: { href: string; label: string }[];
  getNavTextColor: () => string;
}

const DesktopNav = ({ navLinks, getNavTextColor }: DesktopNavProps) => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      scrollToElement(href.substring(1));
    }
  };
  
  // Filter out "Experiences" link which will be replaced by dropdown
  const filteredNavLinks = navLinks.filter(link => link.label !== "Experiences");
  
  return (
    <nav className="hidden md:flex items-center space-x-4">
      {filteredNavLinks.map((link) => (
        <Link
          key={link.href}
          to={link.href}
          className={`transition-colors ${getNavTextColor()}`}
          onClick={(e) => handleNavClick(e, link.href)}
        >
          {link.label}
        </Link>
      ))}
      
      <ExperiencesDropdown getNavTextColor={getNavTextColor} />
      
      <Button className="bg-portfolio-blue-medium hover:bg-portfolio-blue-dark text-white">
        <Link to="/resume">Resume</Link>
      </Button>
    </nav>
  );
};

export default DesktopNav;
