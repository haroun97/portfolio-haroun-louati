
import React from 'react';
import { Button } from "@/components/ui/button";
import { Download } from 'lucide-react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Resume = () => {
  return (
    <main className="bg-background min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-1 container mx-auto px-4 pt-32 pb-16">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between mb-8 gap-4">
            <h1 className="text-3xl md:text-4xl font-bold text-portfolio-blue-dark dark:text-white">
              My Resume
            </h1>
            
            <Button className="flex items-center gap-2 bg-portfolio-orange-medium hover:bg-portfolio-orange-dark">
              <Download size={18} />
              <a 
                href="/lovable-uploads/faf1b9ea-6810-4f32-a613-ae524e1fc705.png" 
                download="haroun_louati_resume.png"
                className="text-white"
              >
                Download Resume
              </a>
            </Button>
          </div>
          
          <div className="bg-white dark:bg-portfolio-blue-dark/50 rounded-lg shadow-lg overflow-hidden">
            <img 
              src="/lovable-uploads/faf1b9ea-6810-4f32-a613-ae524e1fc705.png" 
              alt="Haroun Louati Resume" 
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
      
      <Footer />
    </main>
  );
};

export default Resume;
