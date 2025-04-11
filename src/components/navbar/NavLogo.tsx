
import React from 'react';
import { Code } from 'lucide-react';
import { Link } from "react-router-dom";

interface NavLogoProps {
  getLogoTextColor: () => string;
}

const NavLogo = ({ getLogoTextColor }: NavLogoProps) => {
  return (
    <Link 
      to="/"
      className={`flex items-center gap-2 font-bold text-xl ${getLogoTextColor()}`}
    >
      <Code className="text-portfolio-orange-medium" size={28} />
      <span>Haroun's Lab</span>
    </Link>
  );
};

export default NavLogo;
