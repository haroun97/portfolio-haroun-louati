
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GitHub, Linkedin, MessageSquare } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-portfolio-blue-dark text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center">Get In Touch</h2>
        <div className="max-w-3xl mx-auto">
          <Card className="bg-white/10 backdrop-blur-sm border-none shadow-xl">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <p className="text-lg text-gray-300 mb-6">
                  I'm always interested in new opportunities, collaborations, and challenges.
                  Whether you have a question or just want to say hi, feel free to reach out!
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button asChild className="bg-portfolio-blue-medium hover:bg-portfolio-blue-light">
                    <a href="https://github.com/username" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      <GitHub className="h-5 w-5" />
                      <span>GitHub</span>
                    </a>
                  </Button>
                  <Button asChild className="bg-portfolio-blue-medium hover:bg-portfolio-blue-light">
                    <a href="https://linkedin.com/in/username" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      <Linkedin className="h-5 w-5" />
                      <span>LinkedIn</span>
                    </a>
                  </Button>
                  <Button className="bg-portfolio-blue-medium hover:bg-portfolio-blue-light flex items-center gap-2">
                    <MessageSquare className="h-5 w-5" />
                    <span>Contact Me</span>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
