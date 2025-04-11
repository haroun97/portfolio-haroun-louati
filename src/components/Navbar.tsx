
import React, { useState, useEffect } from 'react';
import { Code, Menu, X, Trophy, Briefcase, HandHeart } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isHomePage, setIsHomePage] = useState(true);

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

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  const getNavTextColor = () => {
    if (!isScrolled && isHomePage) {
      return "text-white hover:text-portfolio-orange-light";
    }
    return "text-portfolio-blue-dark dark:text-white hover:text-portfolio-orange-medium dark:hover:text-portfolio-orange-light";
  };

  const getLogoTextColor = () => {
    if (!isScrolled && isHomePage) {
      return "text-white";
    }
    return "text-portfolio-blue-dark dark:text-white";
  };

  return (
    <header 
      className={`fixed w-full z-30 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 dark:bg-portfolio-blue-dark/90 shadow-md backdrop-blur-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a 
          href="#home" 
          className={`flex items-center gap-2 font-bold text-xl ${getLogoTextColor()}`}
        >
          <Code className="text-portfolio-orange-medium" size={28} />
          <span>Haroun's Lab</span>
        </a>

        <nav className="hidden md:flex items-center space-x-4">
          {navLinks.map((link, index) => {
            if (index <= 2) {
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`transition-colors ${getNavTextColor()}`}
                >
                  {link.label}
                </a>
              );
            }
            
            if (index === 3) {
              return (
                <React.Fragment key="experiences-fragment">
                  <NavigationMenu key="experiences-menu" className="mr-0">
                    <NavigationMenuList>
                      <NavigationMenuItem>
                        <NavigationMenuTrigger 
                          className={`${getNavTextColor()} bg-transparent p-0 hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent focus:shadow-none`}
                          style={{ boxShadow: 'none' }}
                        >
                          <span className="flex items-center">
                            <span>Experiences</span>
                          </span>
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <ul className="grid gap-3 p-4 w-[200px]">
                            <li>
                              <NavigationMenuLink asChild>
                                <Link
                                  to="/professional-experience"
                                  className="flex items-center gap-2 p-2 rounded hover:bg-slate-100 dark:hover:bg-slate-800"
                                >
                                  <Briefcase size={18} />
                                  <span>Professional</span>
                                </Link>
                              </NavigationMenuLink>
                            </li>
                            <li>
                              <NavigationMenuLink asChild>
                                <Link
                                  to="/volunteering-experience"
                                  className="flex items-center gap-2 p-2 rounded hover:bg-slate-100 dark:hover:bg-slate-800"
                                >
                                  <HandHeart size={18} />
                                  <span>Volunteering</span>
                                </Link>
                              </NavigationMenuLink>
                            </li>
                            <li>
                              <NavigationMenuLink asChild>
                                <Link
                                  to="/awards"
                                  className="flex items-center gap-2 p-2 rounded hover:bg-slate-100 dark:hover:bg-slate-800"
                                >
                                  <Trophy size={18} />
                                  <span>Awards</span>
                                </Link>
                              </NavigationMenuLink>
                            </li>
                          </ul>
                        </NavigationMenuContent>
                      </NavigationMenuItem>
                    </NavigationMenuList>
                  </NavigationMenu>
                  
                  <a
                    href={link.href}
                    className={`transition-colors ${getNavTextColor()}`}
                  >
                    {link.label}
                  </a>
                </React.Fragment>
              );
            }
            
            if (index === 4) {
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`transition-colors ${getNavTextColor()}`}
                >
                  {link.label}
                </a>
              );
            }
            
            return null;
          })}
          
          <Button className="bg-portfolio-orange-medium hover:bg-portfolio-orange-dark text-white">
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
          </Button>
        </nav>

        <button
          className={`md:hidden ${!isScrolled && isHomePage ? 'text-white' : 'text-portfolio-blue-dark dark:text-white'}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-portfolio-blue-dark shadow-lg">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navLinks.slice(0, 3).map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-portfolio-blue-dark dark:text-white hover:text-portfolio-orange-medium dark:hover:text-portfolio-orange-light transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            
            <div className="border-t border-gray-200 dark:border-gray-700 pt-2">
              <p className="text-portfolio-blue-dark dark:text-white font-medium py-2">Experiences</p>
              <div className="pl-4 space-y-2">
                <Link 
                  to="/professional-experience"
                  className="flex items-center gap-2 text-portfolio-blue-dark dark:text-white hover:text-portfolio-orange-medium dark:hover:text-portfolio-orange-light transition-colors py-1"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Briefcase size={16} />
                  <span>Professional</span>
                </Link>
                <Link 
                  to="/volunteering-experience"
                  className="flex items-center gap-2 text-portfolio-blue-dark dark:text-white hover:text-portfolio-orange-medium dark:hover:text-portfolio-orange-light transition-colors py-1"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <HandHeart size={16} />
                  <span>Volunteering</span>
                </Link>
                <Link 
                  to="/awards"
                  className="flex items-center gap-2 text-portfolio-blue-dark dark:text-white hover:text-portfolio-orange-medium dark:hover:text-portfolio-orange-light transition-colors py-1"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Trophy size={16} />
                  <span>Awards</span>
                </Link>
              </div>
            </div>
            
            {navLinks.slice(3).map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-portfolio-blue-dark dark:text-white hover:text-portfolio-orange-medium dark:hover:text-portfolio-orange-light transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            
            <Button className="bg-portfolio-orange-medium hover:bg-portfolio-orange-dark text-white w-full">
              Resume
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
