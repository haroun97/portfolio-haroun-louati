
import { ArrowDownCircle } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center relative bg-hero-gradient text-white section-padding">
      <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjMWEyZTQ0Ij48L3JlY3Q+CjxwYXRoIGQ9Ik0wIDVMNSAwWk02IDRMNCA2Wk0tMSAxTDEgLTFaIiBzdHJva2U9IiMyYTRhN2YiIHN0cm9rZS13aWR0aD0iMSI+PC9wYXRoPgo8L3N2Zz4=')] opacity-20"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="md:w-1/3">
            <div className="relative animate-fade-in">
              <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-portfolio-orange-light shadow-xl">
                <Avatar className="w-full h-full">
                  <div className="w-full h-full">
                    <AspectRatio ratio={1/1} className="h-full">
                      <AvatarImage 
                        src="/lovable-uploads/6dab73a1-c173-41cf-ad05-5f86ab37f3ae.png" 
                        alt="Haroun Louati" 
                        className="object-cover w-full h-full"
                        loading="eager"
                        fetchPriority="high"
                        decoding="sync"
                      />
                    </AspectRatio>
                  </div>
                  <AvatarFallback className="text-4xl bg-portfolio-blue-medium text-white">HL</AvatarFallback>
                </Avatar>
              </div>
              <div className="absolute -bottom-3 -right-3 w-24 h-24 rounded-full bg-portfolio-orange-medium opacity-20"></div>
              <div className="absolute -top-3 -left-3 w-16 h-16 rounded-full bg-portfolio-blue-light opacity-20"></div>
            </div>
          </div>

          <div className="md:w-2/3 animate-fade-in-right">
            <div className="mb-4">
              <p className="text-portfolio-orange-light font-mono">
                Hi, my name is Haroun Louati
              </p>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Software Engineer.</h1>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-300 mb-6">Transforming ideas into seamless, automated solutions.</h2>
            
            <div className="flex flex-wrap gap-4">
              <Button className="bg-portfolio-orange-medium hover:bg-portfolio-orange-dark text-white">
                <a href="#projects">View My Projects</a>
              </Button>
              <Button variant="outline" className="border-portfolio-blue-light text-portfolio-blue-lightest hover:bg-portfolio-blue-medium/20">
                <a href="#contact">Get In Touch</a>
              </Button>
            </div>
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
