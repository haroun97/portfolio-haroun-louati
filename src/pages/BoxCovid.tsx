
import { ThermometerIcon, Heart, Activity, Cloud, Database, Smartphone, Tablet, Users, User, Images, Award } from 'lucide-react';
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

const BoxCovid = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-portfolio-blue-dark">
      {/* Hero Section */}
      <section className="bg-portfolio-blue-dark text-white relative overflow-hidden py-24">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjMWEyZTQ0Ij48L3JlY3Q+CjxwYXRoIGQ9Ik0wIDVMNSAwWk02IDRMNCA2Wk0tMSAxTDEgLTFaIiBzdHJva2U9IiMyYTRhN2YiIHN0cm9rZS13aWR0aD0iMSI+PC9wYXRoPgo8L3N2Zz4=')] opacity-20"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Box-Covid</h1>
            <p className="text-xl md:text-2xl text-portfolio-blue-lightest max-w-3xl mb-8">
              An intelligent remote monitoring system for COVID-19 patients that protects healthcare providers
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
              Box-Covid is an academic project focused on designing and developing an intelligent system that allows doctors 
              to remotely monitor and contact their COVID-19 patients. The primary goal is to minimize direct contact, 
              reduce infection risks, and protect healthcare providers while providing quality care.
            </p>
            
            {/* Award Section */}
            <div className="my-8 p-6 bg-blue-50 dark:bg-portfolio-blue-medium/30 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 flex items-center justify-center gap-3 dark:text-white">
                <Award className="text-portfolio-orange-medium" size={28}/>
                Award-Winning Project
                <Award className="text-portfolio-orange-medium" size={28}/>
              </h3>
              <p className="text-center dark:text-gray-300">
                This project won two prestigious awards among over 200 competing projects on campus, 
                recognizing its innovation and positive impact on healthcare delivery during the pandemic.
              </p>
            </div>
            
            <div className="my-12 flex flex-col md:flex-row gap-8">
              <div className="flex-1 bg-blue-50 dark:bg-portfolio-blue-medium/30 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2 dark:text-white">
                  <ThermometerIcon className="text-portfolio-orange-medium" /> 
                  The Challenge
                </h3>
                <p className="dark:text-gray-300">
                  During the COVID-19 pandemic, healthcare providers faced significant risks of infection when monitoring patients.
                  Traditional methods required close contact for vital sign measurements, increasing exposure risk.
                </p>
              </div>
              
              <div className="flex-1 bg-blue-50 dark:bg-portfolio-blue-medium/30 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2 dark:text-white">
                  <Activity className="text-portfolio-orange-medium" /> 
                  Our Solution
                </h3>
                <p className="dark:text-gray-300">
                  Box-Covid creates a connected ecosystem that allows remote monitoring of vital signs and environmental conditions,
                  while enabling doctors to communicate with and provide care to patients without physical contact.
                </p>
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
          
          {/* The Box-Covid Device */}
          <div className="mb-16">
            <div className="flex justify-center">
              <div className="max-w-md">
                <div className="relative">
                  <img 
                    src="/lovable-uploads/aa6d06ca-d7c2-4565-bd75-db41336265c2.png" 
                    alt="Box-Covid physical device" 
                    className="w-full object-contain animate-floating-center p-4"
                  />
                </div>
                <div className="text-center mt-4">
                  <h4 className="text-xl font-semibold dark:text-white">Box-Covid</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                    The physical monitoring device with integrated sensors
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Multi-Platform Application */}
          <div className="mb-16">
            <div className="relative">
              <img 
                src="/lovable-uploads/26e03e3a-2314-4165-867b-2e090ca2828c.png" 
                alt="Box-Covid application screenshots" 
                className="w-full object-contain"
              />
            </div>
            <div className="text-center mt-4">
              <h4 className="text-xl font-semibold dark:text-white">Multi-Platform Application</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                The application interface showing patient monitoring dashboard, chat functionality, and login screen across multiple devices.
              </p>
            </div>
          </div>
          
          {/* Development Team */}
          <div className="mb-16">
            <div className="relative">
              <AspectRatio ratio={16 / 9}>
                <img 
                  src="/lovable-uploads/67d493e2-52b0-4230-91ff-93b9c61a63e7.png" 
                  alt="Box-Covid development team" 
                  className="w-full h-full object-contain"
                />
              </AspectRatio>
            </div>
            <div className="text-center mt-4">
              <h3 className="text-2xl font-semibold mb-4 dark:text-white">Development Team</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                The talented team of developers and engineers who brought the Box-Covid solution to life.
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
              <CardContent className="pt-6">
                <div className="mb-4 flex justify-center">
                  <div className="bg-portfolio-blue-light/20 p-4 rounded-full">
                    <ThermometerIcon size={32} className="text-portfolio-blue-light" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-center mb-4 dark:text-white">The Box</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Collects patient data (body temperature, heart rate, oxygen saturation) and environmental data 
                  (humidity, ambient temperature) using various sensors, then transmits this data to AWS Cloud.
                </p>
              </CardContent>
            </Card>
            
            <Card className="shadow-lg border-t-4 border-portfolio-orange-medium">
              <CardContent className="pt-6">
                <div className="mb-4 flex justify-center">
                  <div className="bg-portfolio-orange-medium/20 p-4 rounded-full">
                    <Cloud size={32} className="text-portfolio-orange-medium" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-center mb-4 dark:text-white">AWS Cloud</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Stores all data transmitted from the monitoring box and the application, 
                  acting as a secure central repository for patient information.
                </p>
              </CardContent>
            </Card>
            
            <Card className="shadow-lg border-t-4 border-portfolio-blue-medium">
              <CardContent className="pt-6">
                <div className="mb-4 flex justify-center">
                  <div className="bg-portfolio-blue-medium/20 p-4 rounded-full">
                    <Smartphone size={32} className="text-portfolio-blue-medium" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-center mb-4 dark:text-white">Application</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Cross-platform application that allows doctors to write prescriptions, monitor patients, 
                  and communicate remotely. Patients can view their dashboard and follow medical recommendations.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Technical Details */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center dark:text-white">Technical Details</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2 dark:text-white">
                <Heart className="text-portfolio-orange-medium" /> Hardware Components
              </h3>
              <ul className="space-y-4 text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="bg-portfolio-blue-light/20 p-1 rounded-full mt-1">
                    <div className="w-2 h-2 bg-portfolio-blue-light rounded-full"></div>
                  </span>
                  <span><strong>Raspberry Pi 3B+:</strong> Core processing unit of the system</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-portfolio-blue-light/20 p-1 rounded-full mt-1">
                    <div className="w-2 h-2 bg-portfolio-blue-light rounded-full"></div>
                  </span>
                  <span><strong>ESP32:</strong> Wireless communication module</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-portfolio-blue-light/20 p-1 rounded-full mt-1">
                    <div className="w-2 h-2 bg-portfolio-blue-light rounded-full"></div>
                  </span>
                  <span><strong>Sensors:</strong> Oximeter, body temperature sensor, ambient temperature sensor, humidity sensor</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-portfolio-blue-light/20 p-1 rounded-full mt-1">
                    <div className="w-2 h-2 bg-portfolio-blue-light rounded-full"></div>
                  </span>
                  <span><strong>PCB:</strong> Custom printed circuit board for integration</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2 dark:text-white">
                <Database className="text-portfolio-orange-medium" /> Software Stack
              </h3>
              <ul className="space-y-4 text-gray-700 dark:text-gray-300">
                <li className="flex items-start gap-3">
                  <span className="bg-portfolio-blue-light/20 p-1 rounded-full mt-1">
                    <div className="w-2 h-2 bg-portfolio-blue-light rounded-full"></div>
                  </span>
                  <span><strong>Node-RED:</strong> For flow-based programming and data management</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-portfolio-blue-light/20 p-1 rounded-full mt-1">
                    <div className="w-2 h-2 bg-portfolio-blue-light rounded-full"></div>
                  </span>
                  <span><strong>Arduino IDE:</strong> For programming the ESP32 and sensors</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-portfolio-blue-light/20 p-1 rounded-full mt-1">
                    <div className="w-2 h-2 bg-portfolio-blue-light rounded-full"></div>
                  </span>
                  <span><strong>Apache Cordova:</strong> For cross-platform mobile application development</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-portfolio-blue-light/20 p-1 rounded-full mt-1">
                    <div className="w-2 h-2 bg-portfolio-blue-light rounded-full"></div>
                  </span>
                  <span><strong>MySQL & phpMyAdmin:</strong> For database management and administration</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* User Roles Section */}
      <section className="py-16 px-6 bg-gray-50 dark:bg-portfolio-blue-dark/50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center dark:text-white">User Roles</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="shadow-lg">
              <CardContent className="pt-6">
                <div className="mb-4 flex justify-center">
                  <div className="bg-portfolio-blue-light/20 p-4 rounded-full">
                    <User size={32} className="text-portfolio-blue-medium" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-center mb-4 dark:text-white">Doctors</h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li className="flex items-center gap-2">
                    <span className="text-portfolio-orange-medium">•</span> 
                    <span>Remote patient monitoring</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-portfolio-orange-medium">•</span> 
                    <span>Write digital prescriptions</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-portfolio-orange-medium">•</span> 
                    <span>Virtual consultations</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-portfolio-orange-medium">•</span> 
                    <span>Patient data analysis</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="shadow-lg">
              <CardContent className="pt-6">
                <div className="mb-4 flex justify-center">
                  <div className="bg-portfolio-orange-light/20 p-4 rounded-full">
                    <Users size={32} className="text-portfolio-orange-medium" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-center mb-4 dark:text-white">Patients & Family</h3>
                <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                  <li className="flex items-center gap-2">
                    <span className="text-portfolio-blue-medium">•</span> 
                    <span>View health dashboard</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-portfolio-blue-medium">•</span> 
                    <span>Access medication schedules</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-portfolio-blue-medium">•</span> 
                    <span>Receive doctor's recommendations</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-portfolio-blue-medium">•</span> 
                    <span>Remote communication with healthcare providers</span>
                  </li>
                </ul>
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
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/#contact">
              <Button className="bg-portfolio-blue-medium hover:bg-portfolio-blue-dark text-white">
                Contact Me
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BoxCovid;
