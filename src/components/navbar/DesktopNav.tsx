
import React from 'react';
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ExperiencesDropdown from './ExperiencesDropdown';

interface DesktopNavProps {
  navLinks: { href: string; label: string }[];
  getNavTextColor: () => string;
}

const DesktopNav = ({ navLinks, getNavTextColor }: DesktopNavProps) => {
  return (
    <nav className="hidden md:flex items-center space-x-4">
      {navLinks.map((link, index) => {
        if (index <= 2) {
          return (
            <Link
              key={link.href}
              to={link.href}
              className={`transition-colors ${getNavTextColor()}`}
            >
              {link.label}
            </Link>
          );
        }
        
        if (index === 3) {
          return (
            <React.Fragment key="experiences-fragment">
              <ExperiencesDropdown getNavTextColor={getNavTextColor} />
              
              <Link
                to={link.href}
                className={`transition-colors ${getNavTextColor()}`}
              >
                {link.label}
              </Link>
            </React.Fragment>
          );
        }
        
        if (index === 4) {
          return (
            <Link
              key={link.href}
              to={link.href}
              className={`transition-colors ${getNavTextColor()}`}
            >
              {link.label}
            </Link>
          );
        }
        
        return null;
      })}
      
      <Button className="bg-portfolio-orange-medium hover:bg-portfolio-orange-dark text-white">
        <Link to="/resume">Resume</Link>
      </Button>
    </nav>
  );
};

export default DesktopNav;
