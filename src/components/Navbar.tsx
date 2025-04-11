
import { useState, useEffect } from 'react';
import { Code, Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";

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
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`transition-colors ${getNavTextColor()}`}
            >
              {link.label}
            </a>
          ))}
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
