import { Bot, Camera, Code, Computer, Database, Eye, Heart, Hammer, Smartphone, ThermometerIcon, User, Users } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Link } from "react-router-dom";
import { Separator } from "@/components/ui/separator";

const PanTiltRobot = () => {
  const hardwareTechnologies = ["Arduino", "Servo Motors", "Camera Module", "Pan-Tilt Mechanism"];
  const softwareTechnologies = ["Python", "OpenCV", "Arduino IDE", "C Programming"];
  const skills = ["Embedded Systems", "Problem Solving", "Embedded Software", "Software Development", "C Programming"];

  return (
    <div className="min-h-screen bg-white dark:bg-portfolio-blue-dark">
      {/* Hero Section */}
      <section className="bg-portfolio-blue-dark text-white relative overflow-hidden py-24">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjMWEyZTQ0Ij48L3JlY3Q+CjxwYXRoIGQ9Ik0wIDVMNSAwWk02IDRMNCA2Wk0tMSAxTDEgLTFaIiBzdHJva2U9IiMyYTRhN2YiIHN0cm9rZS13aWR0aD0iMSI+PC9wYXRoPgo8L3N2Zz4=')] opacity-20"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Pan-Tilt-Head-Robot</h1>
            <p className="text-xl md:text-2xl text-portfolio-blue-lightest max-w-3xl mb-8">
              Objects and Faces Detection and Tracking System
            </p>
            <Link to="/">
              <Button variant="outline" className="border-portfolio-blue-light text-portfolio-blue-lightest hover:bg-portfolio-blue-medium/20">
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center dark:text-white">Project Overview</h2>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-lg dark:text-gray-300">
              The Pan-Tilt-Head-Robot project aims to detect and track objects and faces using 
              computer vision technology. The system consists of a pan-tilt head system, a camera,
              and an Arduino board working together to enable accurate object tracking.
            </p>
            
            <div className="my-12 flex flex-col md:flex-row gap-8">
              <div className="flex-1 bg-blue-50 dark:bg-portfolio-blue-medium/30 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2 dark:text-white">
                  <Bot className="text-portfolio-orange-medium" /> 
                  Hardware Components
                </h3>
                <ul className="space-y-2 dark:text-gray-300">
                  {hardwareTechnologies.map((tech, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <span className="text-portfolio-orange-medium">•</span> {tech}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex-1 bg-blue-50 dark:bg-portfolio-blue-medium/30 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2 dark:text-white">
                  <Code className="text-portfolio-orange-medium" /> 
                  Software Technologies
                </h3>
                <ul className="space-y-2 dark:text-gray-300">
                  {softwareTechnologies.map((tech, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <span className="text-portfolio-orange-medium">•</span> {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery Section */}
      <section className="py-16 px-6 bg-gray-50 dark:bg-portfolio-blue-dark/70">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center dark:text-white">
            <span className="flex items-center justify-center gap-2">
              <Eye className="text-portfolio-orange-medium" />
              Project Gallery
            </span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            {/* Direct images instead of cards */}
            <div>
              <AspectRatio ratio={16 / 9} className="rounded-lg overflow-hidden">
                <img
                  src="/lovable-uploads/025885b2-7c7b-453f-a374-1214fc8015fb.png"
                  alt="Pan-Tilt Head Robot"
                  className="w-full h-full object-cover"
                />
              </AspectRatio>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-3 text-center">
                The pan-tilt head system with two servo motors for precise camera positioning
              </p>
            </div>
            
            <div>
              <AspectRatio ratio={16 / 9} className="rounded-lg overflow-hidden">
                <img
                  src="/lovable-uploads/a2b775ce-0488-4369-93b1-cb5466eb98dc.png"
                  alt="Computer Vision Object Detection"
                  className="w-full h-full object-cover"
                />
              </AspectRatio>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-3 text-center">
                The vision system uses OpenCV to detect and track objects and faces in real-time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* System Architecture */}
      <section className="py-16 px-6 bg-gray-50 dark:bg-portfolio-blue-dark/50">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center dark:text-white">System Architecture</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <Card className="shadow-lg border-t-4 border-portfolio-blue-light">
              <div className="pt-6 p-6">
                <div className="mb-4 flex justify-center">
                  <div className="bg-portfolio-blue-light/20 p-4 rounded-full">
                    <Camera size={32} className="text-portfolio-blue-light" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-center mb-4 dark:text-white">Camera System</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Camera module attached to the pan-tilt-head for capturing real-time images for object detection and tracking.
                </p>
              </div>
            </Card>
            
            <Card className="shadow-lg border-t-4 border-portfolio-orange-medium">
              <div className="pt-6 p-6">
                <div className="mb-4 flex justify-center">
                  <div className="bg-portfolio-orange-medium/20 p-4 rounded-full">
                    <Computer size={32} className="text-portfolio-orange-medium" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-center mb-4 dark:text-white">Computer Vision</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Computer processes images from the camera using OpenCV, detects objects and faces, and sends control commands to Arduino.
                </p>
              </div>
            </Card>
            
            <Card className="shadow-lg border-t-4 border-portfolio-blue-medium">
              <div className="pt-6 p-6">
                <div className="mb-4 flex justify-center">
                  <div className="bg-portfolio-blue-medium/20 p-4 rounded-full">
                    <Bot size={32} className="text-portfolio-blue-medium" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-center mb-4 dark:text-white">Arduino Control</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Arduino board receives decisions from the computer and controls the servo motors for panning and tilting the camera.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Technical Details */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center dark:text-white">Technical Implementation</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2 dark:text-white">
                <Hammer className="text-portfolio-orange-medium" /> Hardware Design
              </h3>
              <ul className="space-y-4 text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="bg-portfolio-blue-light/20 p-1 rounded-full mt-1">
                    <div className="w-2 h-2 bg-portfolio-blue-light rounded-full"></div>
                  </span>
                  <span><strong>Pan-Tilt Mechanism:</strong> Two servo motors for horizontal and vertical movement</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-portfolio-blue-light/20 p-1 rounded-full mt-1">
                    <div className="w-2 h-2 bg-portfolio-blue-light rounded-full"></div>
                  </span>
                  <span><strong>Camera Module:</strong> Attached to the pan-tilt head for image capturing</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-portfolio-blue-light/20 p-1 rounded-full mt-1">
                    <div className="w-2 h-2 bg-portfolio-blue-light rounded-full"></div>
                  </span>
                  <span><strong>Arduino Board:</strong> For controlling the servo motors</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-portfolio-blue-light/20 p-1 rounded-full mt-1">
                    <div className="w-2 h-2 bg-portfolio-blue-light rounded-full"></div>
                  </span>
                  <span><strong>USB Connection:</strong> For communication between computer and Arduino</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2 dark:text-white">
                <Database className="text-portfolio-orange-medium" /> Software Implementation
              </h3>
              <ul className="space-y-4 text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="bg-portfolio-blue-light/20 p-1 rounded-full mt-1">
                    <div className="w-2 h-2 bg-portfolio-blue-light rounded-full"></div>
                  </span>
                  <span><strong>Python:</strong> Main programming language for computer vision processing</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-portfolio-blue-light/20 p-1 rounded-full mt-1">
                    <div className="w-2 h-2 bg-portfolio-blue-light rounded-full"></div>
                  </span>
                  <span><strong>OpenCV:</strong> Library for image processing and object detection</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-portfolio-blue-light/20 p-1 rounded-full mt-1">
                    <div className="w-2 h-2 bg-portfolio-blue-light rounded-full"></div>
                  </span>
                  <span><strong>Arduino IDE:</strong> For programming the Arduino board</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-portfolio-blue-light/20 p-1 rounded-full mt-1">
                    <div className="w-2 h-2 bg-portfolio-blue-light rounded-full"></div>
                  </span>
                  <span><strong>C Programming:</strong> For Arduino firmware development</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Applied Section */}
      <section className="py-16 px-6 bg-gray-50 dark:bg-portfolio-blue-dark/50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center dark:text-white">Skills Applied</h2>
          
          <Card className="shadow-lg">
            <div className="pt-6 p-6">
              <div className="flex flex-wrap gap-3 justify-center">
                {skills.map((skill, index) => (
                  <Badge key={index} variant="secondary" className="text-base py-2 px-4 bg-portfolio-blue-lightest/30 text-portfolio-blue-dark dark:text-portfolio-blue-lightest dark:bg-portfolio-blue-medium/30">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </Card>
          
          <div className="mt-12">
            <Card className="shadow-lg">
              <div className="pt-6 p-6">
                <h3 className="text-xl font-bold mb-4 dark:text-white">Object and Face Detection System</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  The system is designed to detect and track objects and faces in real-time. When an 
                  object or face is detected, the computer sends commands to the Arduino board to adjust 
                  the pan and tilt angles of the camera, keeping the target centered in the frame.
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  This technology can be applied in various fields such as security systems, 
                  interactive installations, and robotic vision systems. The ability to track 
                  objects smoothly makes it useful for automated camera systems in various applications.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-gradient-to-r from-portfolio-blue-dark to-portfolio-blue-medium text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Interested in similar projects?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Check out my other work or get in touch to discuss collaboration opportunities.
          </p>
          <div className="flex justify-center">
            <Link to="/#contact">
              <Button className="bg-portfolio-blue-light hover:bg-portfolio-blue-lightest/90 text-white">
                Contact Me
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PanTiltRobot;