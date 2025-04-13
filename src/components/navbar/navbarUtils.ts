import { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";

export const useNavbarState = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isHomePage, setIsHomePage] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const homeSection = document.getElementById('home');
      const homeSectionHeight = homeSection?.offsetHeight || 0;
      
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
      
      setIsHomePage(window.scrollY < (homeSectionHeight - 100));
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const isHomeRoute = location.pathname === '/';

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return {
    isScrolled,
    isMobileMenuOpen,
    isHomePage,
    isHomeRoute,
    toggleMobileMenu,
    closeMobileMenu
  };
};

export const getNavLinks = (isHomeRoute: boolean) => [
  { href: isHomeRoute ? "#home" : "/", label: "Home" },
  { href: isHomeRoute ? "#about" : "/#about", label: "About" },
  { href: isHomeRoute ? "#skills" : "/#skills", label: "Skills" },
  { href: isHomeRoute ? "#experiences" : "/#experiences", label: "Experiences" },
  { href: isHomeRoute ? "#featured-projects" : "/#featured-projects", label: "Projects" },
  { href: isHomeRoute ? "#contact" : "/#contact", label: "Contact" },
];

export const getNavTextColor = (isScrolled: boolean, isHomePage: boolean) => {
  if (!isScrolled && isHomePage) {
    return "text-white hover:text-portfolio-orange-light";
  }
  return "text-portfolio-blue-dark dark:text-white hover:text-portfolio-orange-medium dark:hover:text-portfolio-orange-light";
};

export const getLogoTextColor = (isScrolled: boolean, isHomePage: boolean) => {
  if (!isScrolled && isHomePage) {
    return "text-white";
  }
  return "text-portfolio-blue-dark dark:text-white";
};
