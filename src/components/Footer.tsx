
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-portfolio-blue-dark text-gray-300 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div>
            <p className="text-sm">
              &copy; {new Date().getFullYear()} Portfolio. All rights reserved.
            </p>
          </div>
          
          <div className="mt-4 md:mt-0">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp size={16} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;