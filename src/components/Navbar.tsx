
import { useState, useEffect } from 'react';
import { Code, Menu, X, ChevronDown, Trophy, Briefcase, HandHeart } from 'lucide-react';
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
      // Check if we've scrolled past the home section
      const homeSection = document.getElementById('home');
      const homeSectionHeight = homeSection?.offsetHeight || 0;
      
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
      
      // Set isHomePage based on whether we're still in the home section
      setIsHomePage(window.scrollY < (homeSectionHeight - 100));
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#projects", label: "Projects" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
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
          <span>Portfolio</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-5">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`transition-colors ${getNavTextColor()}`}
            >
              {link.label}
            </a>
          ))}
          
          {/* Experiences Navigation Dropdown */}
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className={`${getNavTextColor()} bg-transparent`}>
                  Experiences
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
          
          <Button className="bg-portfolio-orange-medium hover:bg-portfolio-orange-dark text-white">
            Resume
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden ${!isScrolled && isHomePage ? 'text-white' : 'text-portfolio-blue-dark dark:text-white'}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-portfolio-blue-dark shadow-lg">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-portfolio-blue-dark dark:text-white hover:text-portfolio-orange-medium dark:hover:text-portfolio-orange-light transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            
            {/* Mobile Experiences Menu */}
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
