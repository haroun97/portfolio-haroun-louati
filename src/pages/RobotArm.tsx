
import { ThermometerIcon, Heart, Activity, Cloud, Database, Smartphone, Cpu, Hammer, Code, Github, Users, User, Images } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
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

const RobotArm = () => {
  const hardwareTechnologies = ["Arduino Uno", "Stepper Motors", "CNC Shield A4988", "3D Printing"];
  const softwareTechnologies = ["Python", "OpenCV", "Visual Studio", "C Programming", "Haarcascade Classifier"];
  const skills = ["Embedded Systems", "Problem Solving", "Embedded Software", "Software Development", "Mechanical Design"];

  return (
    <div className="min-h-screen bg-white dark:bg-portfolio-blue-dark">
      {/* Hero Section */}
      <section className="bg-portfolio-blue-dark text-white relative overflow-hidden py-24">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjMWEyZTQ0Ij48L3JlY3Q+CjxwYXRoIGQ9Ik0wIDVMNSAwWk02IDRMNCA2Wk0tMSAxTDEgLTFaIiBzdHJva2U9IiMyYTRhN2YiIHN0cm9rZS13aWR0aD0iMSI+PC9wYXRoPgo8L3N2Zz4=')] opacity-20"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Autonomous Robot Arm</h1>
            <p className="text-xl md:text-2xl text-portfolio-blue-lightest max-w-3xl mb-8">
              Based on Machine Learning and Computer Vision for people with reduced mobility
            </p>
            <Link to="/#projects">
              <Button variant="outline" className="border-portfolio-blue-light text-portfolio-blue-lightest hover:bg-portfolio-blue-medium/20">
                Back to Projects
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
              Development of an Autonomous Robot Arm for people with reduced mobility, leveraging 
              machine learning and computer vision technologies. The project aims to provide 
              assistance to those who need help manipulating objects in their environment.
            </p>
            
            <div className="my-12 flex flex-col md:flex-row gap-8">
              <div className="flex-1 bg-blue-50 dark:bg-portfolio-blue-medium/30 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2 dark:text-white">
                  <Cpu className="text-portfolio-orange-medium" /> 
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
              <Images className="text-portfolio-orange-medium" />
              Project Gallery
            </span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            {/* Robot Arm Solution */}
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-center dark:text-white">The Robot Arm</h3>
              <Card className="overflow-hidden h-full">
                <AspectRatio ratio={16 / 9}>
                  <img 
                    src="/lovable-uploads/833ab8c3-1109-4160-9975-984c336d6563.png" 
                    alt="SALAH Robot Arm" 
                    className="w-full h-full object-contain"
                  />
                </AspectRatio>
                <CardContent>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    "SALAH" - Named after my father who believed in me and invested in this project
                  </p>
                </CardContent>
              </Card>
            </div>
            
            {/* Vision System */}
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-center dark:text-white">Computer Vision System</h3>
              <Card className="overflow-hidden h-full">
                <AspectRatio ratio={16 / 9}>
                  <img 
                    src="/lovable-uploads/e15743c8-6243-42ee-8e4e-51003d35a896.png"
                    alt="Computer Vision Face Detection"
                    className="w-full h-full object-cover"
                  />
                </AspectRatio>
                <CardContent>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    The vision system uses OpenCV and Haarcascade classifiers to detect and track objects in real-time.
                  </p>
                </CardContent>
              </Card>
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
              <CardContent className="pt-6">
                <div className="mb-4 flex justify-center">
                  <div className="bg-portfolio-blue-light/20 p-4 rounded-full">
                    <Cpu size={32} className="text-portfolio-blue-light" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-center mb-4 dark:text-white">Hardware System</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  The physical components including Arduino-controlled stepper motors, 3D printed mechanical parts, and CNC shield for precision movement.
                </p>
              </CardContent>
            </Card>
            
            <Card className="shadow-lg border-t-4 border-portfolio-orange-medium">
              <CardContent className="pt-6">
                <div className="mb-4 flex justify-center">
                  <div className="bg-portfolio-orange-medium/20 p-4 rounded-full">
                    <Activity size={32} className="text-portfolio-orange-medium" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-center mb-4 dark:text-white">Vision System</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Computer vision algorithms using OpenCV and Haarcascade classifiers to detect objects and determine optimal grasping positions.
                </p>
              </CardContent>
            </Card>
            
            <Card className="shadow-lg border-t-4 border-portfolio-blue-medium">
              <CardContent className="pt-6">
                <div className="mb-4 flex justify-center">
                  <div className="bg-portfolio-blue-medium/20 p-4 rounded-full">
                    <Code size={32} className="text-portfolio-blue-medium" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-center mb-4 dark:text-white">Control Logic</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Efficient motion control algorithms developed in C programming to interpret commands and coordinate the stepper motors.
                </p>
              </CardContent>
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
                  <span><strong>Stepper Motors:</strong> Precise movement control for the robot arm joints</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-portfolio-blue-light/20 p-1 rounded-full mt-1">
                    <div className="w-2 h-2 bg-portfolio-blue-light rounded-full"></div>
                  </span>
                  <span><strong>Arduino Uno:</strong> Central controller for the system's operations</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-portfolio-blue-light/20 p-1 rounded-full mt-1">
                    <div className="w-2 h-2 bg-portfolio-blue-light rounded-full"></div>
                  </span>
                  <span><strong>CNC Shield:</strong> A4988 drivers for controlling multiple stepper motors</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-portfolio-blue-light/20 p-1 rounded-full mt-1">
                    <div className="w-2 h-2 bg-portfolio-blue-light rounded-full"></div>
                  </span>
                  <span><strong>3D Printing:</strong> Custom parts for the mechanical structure</span>
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
                  <span><strong>OpenCV:</strong> Computer vision library for object detection and tracking</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-portfolio-blue-light/20 p-1 rounded-full mt-1">
                    <div className="w-2 h-2 bg-portfolio-blue-light rounded-full"></div>
                  </span>
                  <span><strong>Haarcascade Classifier:</strong> For object detection algorithms</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-portfolio-blue-light/20 p-1 rounded-full mt-1">
                    <div className="w-2 h-2 bg-portfolio-blue-light rounded-full"></div>
                  </span>
                  <span><strong>C Programming:</strong> For efficient motion control algorithms</span>
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
            <CardContent className="pt-6">
              <div className="flex flex-wrap gap-3 justify-center">
                {skills.map((skill, index) => (
                  <Badge key={index} variant="secondary" className="text-base py-2 px-4 bg-portfolio-blue-lightest/30 text-portfolio-blue-dark dark:text-portfolio-blue-lightest dark:bg-portfolio-blue-medium/30">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
          
          <div className="mt-12">
            <Card className="shadow-lg">
              <CardContent className="pt-6">
                <h3 className="text-xl font-bold mb-4 dark:text-white">Usage for People with Reduced Mobility</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  The system is designed to be easily operated through simple controls, making it 
                  accessible for individuals with limited mobility. Voice commands and simplified 
                  controller inputs allow users to direct the arm to perform everyday tasks.
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  The robot arm can be controlled via multiple interfaces, including game controllers 
                  like the PlayStation controller shown in the image, as well as through autonomous 
                  operation guided by the computer vision system.
                </p>
              </CardContent>
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

export default RobotArm;
