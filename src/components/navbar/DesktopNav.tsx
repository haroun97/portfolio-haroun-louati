
import React from 'react';
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { scrollToElement } from '@/utils/scrollUtils';

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
  
  return (
    <nav className="hidden md:flex items-center space-x-4">
      {navLinks.map((link) => (
        <Link
          key={link.href}
          to={link.href}
          className={`transition-colors ${getNavTextColor()}`}
          onClick={(e) => handleNavClick(e, link.href)}
        >
          {link.label}
        </Link>
      ))}
      
      <Button className="bg-portfolio-orange-medium hover:bg-portfolio-orange-dark text-white">
        <Link to="/resume">Resume</Link>
      </Button>
    </nav>
  );
};

export default DesktopNav;
