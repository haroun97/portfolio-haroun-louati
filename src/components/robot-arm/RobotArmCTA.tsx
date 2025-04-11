
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { scrollToElement } from "@/utils/scrollUtils";

const RobotArmCTA = () => {
  const navigate = useNavigate();
  
  const handleContactClick = () => {
    // Navigate to home page first, then scroll to contact section
    navigate("/");
    // Small delay to ensure navigation completes before scrolling
    setTimeout(() => {
      scrollToElement("contact");
    }, 100);
  };

  return (
    <section className="py-16 px-6 bg-gradient-to-r from-portfolio-blue-dark to-portfolio-blue-medium text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Interested in similar projects?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Check out my other work or get in touch to discuss collaboration opportunities.
        </p>
        <div className="flex justify-center">
          <Button 
            className="bg-portfolio-blue-light hover:bg-portfolio-blue-lightest/90 text-white"
            onClick={handleContactClick}
          >
            Contact Me
          </Button>
        </div>
      </div>
    </section>
  );
}

export default RobotArmCTA;
