
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, MessageSquare } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Simulate form submission
    toast.success("Message sent! I'll get back to you soon.");
    (e.target as HTMLFormElement).reset();
  };
  
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
                <div className="flex flex-wrap justify-center gap-4 mb-8">
                  <Button asChild className="bg-portfolio-blue-medium hover:bg-portfolio-blue-light">
                    <a href="https://github.com/username" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      <Github className="h-5 w-5" />
                      <span>GitHub</span>
                    </a>
                  </Button>
                  <Button asChild className="bg-portfolio-blue-medium hover:bg-portfolio-blue-light">
                    <a href="https://linkedin.com/in/username" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      <Linkedin className="h-5 w-5" />
                      <span>LinkedIn</span>
                    </a>
                  </Button>
                </div>
                
                <form onSubmit={handleSubmit} className="text-left">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-1 text-gray-300">Name</label>
                      <Input 
                        id="name" 
                        type="text" 
                        required 
                        className="bg-white/20 border-white/20 focus:border-portfolio-blue-light text-white placeholder:text-gray-400" 
                        placeholder="Your Name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-1 text-gray-300">Email</label>
                      <Input 
                        id="email" 
                        type="email" 
                        required 
                        className="bg-white/20 border-white/20 focus:border-portfolio-blue-light text-white placeholder:text-gray-400" 
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                  <div className="mb-4">
                    <label htmlFor="subject" className="block text-sm font-medium mb-1 text-gray-300">Subject</label>
                    <Input 
                      id="subject" 
                      type="text" 
                      required 
                      className="bg-white/20 border-white/20 focus:border-portfolio-blue-light text-white placeholder:text-gray-400" 
                      placeholder="Subject"
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="message" className="block text-sm font-medium mb-1 text-gray-300">Message</label>
                    <Textarea 
                      id="message" 
                      required 
                      className="bg-white/20 border-white/20 focus:border-portfolio-blue-light text-white placeholder:text-gray-400 min-h-[120px]" 
                      placeholder="Your message here..."
                    />
                  </div>
                  <Button type="submit" className="w-full bg-portfolio-orange-medium hover:bg-portfolio-orange-dark">
                    Send Message
                  </Button>
                </form>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
