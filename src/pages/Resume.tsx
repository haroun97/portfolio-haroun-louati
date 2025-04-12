import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Download, ZoomIn, ZoomOut } from 'lucide-react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Slider } from "@/components/ui/slider";
import { useLocation } from 'react-router-dom';
import { scrollToElement } from '@/utils/scrollUtils';

const Resume = () => {
  const [zoomLevel, setZoomLevel] = useState(100);
  const location = useLocation();
  
  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      const sectionId = hash.substring(1);
      setTimeout(() => {
        scrollToElement(sectionId);
      }, 100);
    }
  }, [location]);
  
  const handleZoomIn = () => {
    setZoomLevel(Math.min(zoomLevel + 10, 200));
  };
  
  const handleZoomOut = () => {
    setZoomLevel(Math.max(zoomLevel - 10, 50));
  };
  
  const handleSliderChange = (value: number[]) => {
    setZoomLevel(value[0]);
  };

  return (
    <main className="bg-background min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-1 container mx-auto px-4 pt-32 pb-16">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between mb-8 gap-4">
            <h1 className="text-3xl md:text-4xl font-bold text-portfolio-blue-dark dark:text-white">
              My Resume
            </h1>
            
            <div className="flex items-center gap-4">
              <div className="hidden md:flex items-center gap-2">
                <Button 
                  variant="outline" 
                  size="icon" 
                  onClick={handleZoomOut}
                  disabled={zoomLevel <= 50}
                  className="text-portfolio-blue-dark dark:text-white"
                >
                  <ZoomOut size={18} />
                </Button>
                
                <div className="w-40">
                  <Slider
                    value={[zoomLevel]}
                    min={50}
                    max={200}
                    step={10}
                    onValueChange={handleSliderChange}
                    className="z-10"
                  />
                </div>
                
                <Button 
                  variant="outline" 
                  size="icon" 
                  onClick={handleZoomIn}
                  disabled={zoomLevel >= 200}
                  className="text-portfolio-blue-dark dark:text-white"
                >
                  <ZoomIn size={18} />
                </Button>
                
                <span className="ml-2 text-sm text-muted-foreground">{zoomLevel}%</span>
              </div>
              
              <Button className="flex items-center gap-2 bg-portfolio-orange-medium hover:bg-portfolio-orange-dark">
                <Download size={18} />
                <a 
                  href="/lovable-uploads/faf1b9ea-6810-4f32-a613-ae524e1fc705.png" 
                  download="haroun_louati_resume.pdf"
                  className="text-white"
                >
                  Download Resume
                </a>
              </Button>
            </div>
          </div>
          
          <div className="bg-white dark:bg-portfolio-blue-dark/50 rounded-lg shadow-lg overflow-hidden">
            <div className="overflow-auto max-h-[calc(100vh-300px)]" style={{ minHeight: '600px' }}>
              <div 
                style={{ 
                  transform: `scale(${zoomLevel / 100})`, 
                  transformOrigin: 'top center',
                  transition: 'transform 0.2s ease-in-out'
                }}
                className="w-full flex justify-center"
              >
                <img 
                  src="/lovable-uploads/faf1b9ea-6810-4f32-a613-ae524e1fc705.png" 
                  alt="Haroun Louati Resume" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-6 md:hidden">
            <div className="flex items-center gap-2">
              <Button 
                variant="outline" 
                size="icon" 
                onClick={handleZoomOut}
                disabled={zoomLevel <= 50}
              >
                <ZoomOut size={18} />
              </Button>
              
              <div className="w-32">
                <Slider
                  value={[zoomLevel]}
                  min={50}
                  max={200}
                  step={10}
                  onValueChange={handleSliderChange}
                />
              </div>
              
              <Button 
                variant="outline" 
                size="icon" 
                onClick={handleZoomIn}
                disabled={zoomLevel >= 200}
              >
                <ZoomIn size={18} />
              </Button>
              
              <span className="ml-2 text-sm text-muted-foreground">{zoomLevel}%</span>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  );
};

export default Resume;
