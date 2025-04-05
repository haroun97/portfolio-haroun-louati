
import { ArrowDownCircle } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center relative bg-hero-gradient text-white section-padding">
      <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjMWEyZTQ0Ij48L3JlY3Q+CjxwYXRoIGQ9Ik0wIDVMNSAwWk02IDRMNCA2Wk0tMSAxTDEgLTFaIiBzdHJva2U9IiMyYTRhN2YiIHN0cm9rZS13aWR0aD0iMSI+PC9wYXRoPgo8L3N2Zz4=')] opacity-20"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-3xl animate-fade-in" style={{animationDelay: "0.2s"}}>
          <p className="text-portfolio-orange-light font-mono mb-4">Hi, my name is</p>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Software Engineer.</h1>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-300 mb-6">I build things for the web.</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-xl">
            I'm a software engineer specializing in building exceptional digital experiences. 
            Currently, I'm focused on building accessible, human-centered products.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Button className="bg-portfolio-orange-medium hover:bg-portfolio-orange-dark text-white">
              View My Projects
            </Button>
            <Button variant="outline" className="border-portfolio-blue-light text-portfolio-blue-lightest hover:bg-portfolio-blue-medium/20">
              Get In Touch
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#projects" className="text-gray-300 hover:text-white">
          <ArrowDownCircle size={32} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
