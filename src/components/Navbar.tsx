
import React from 'react';
import { Menu, X } from 'lucide-react';
import { useNavbarState, getNavLinks, getNavTextColor, getLogoTextColor } from "./navbar/navbarUtils";
import NavLogo from "./navbar/NavLogo";
import DesktopNav from "./navbar/DesktopNav";
import MobileMenu from "./navbar/MobileMenu";

const Navbar = () => {
  const {
    isScrolled,
    isMobileMenuOpen,
    isHomePage,
    isHomeRoute,
    toggleMobileMenu,
    closeMobileMenu
  } = useNavbarState();
  
  const navLinks = getNavLinks(isHomeRoute);
  
  const getNavTextColorFn = () => getNavTextColor(isScrolled, isHomePage);
  const getLogoTextColorFn = () => getLogoTextColor(isScrolled, isHomePage);

  return (
    <header 
      className={`fixed w-full z-30 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 dark:bg-portfolio-blue-dark/90 shadow-md backdrop-blur-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <NavLogo getLogoTextColor={getLogoTextColorFn} />

        <DesktopNav 
          navLinks={navLinks} 
          getNavTextColor={getNavTextColorFn}
        />

        <button
          className={`md:hidden ${!isScrolled && isHomePage ? 'text-white' : 'text-portfolio-blue-dark dark:text-white'}`}
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        onClose={closeMobileMenu} 
        navLinks={navLinks} 
      />
    </header>
  );
};

export default Navbar;
