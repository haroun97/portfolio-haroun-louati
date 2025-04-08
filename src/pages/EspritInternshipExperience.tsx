
import { Briefcase, Robot, FileText } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const EspritInternshipExperience = () => {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center text-center">
            <Robot size={64} className="text-white mb-4" />
            <h1 className="text-4xl font-bold text-white mb-4">Robotics Engineer Intern</h1>
            <div className="flex items-center justify-center gap-2 text-blue-100 mb-4">
              <Briefcase size={18} />
              <span className="font-medium">ESPRIT</span>
              <span className="mx-2">•</span>
              <span>Jul 2021 – Sep 2021 (3 months)</span>
            </div>
            <p className="text-xl text-blue-100 max-w-3xl">
              Ariana Governorate, Tunisia
            </p>
            <div className="flex gap-4 mt-8">
              <Button asChild variant="secondary">
                <Link to="/professional-experience" className="flex items-center gap-2">
                  All Experiences
                </Link>
              </Button>
              <Button asChild variant="outline" className="bg-white/10 text-white hover:bg-white/20 border-white/20">
                <Link to="/" className="flex items-center gap-2">
                  Back to Home
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Overview Section */}
      <section className="py-16 bg-white dark:bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Internship Overview</h2>
            <p className="text-lg mb-8">
              As a Robotics Engineer Intern at ESPRIT, I contributed to the design and development of a humanoid robot using AI and computer vision. 
              This internship provided valuable hands-on experience in robotics design, programming, and integration of various technologies.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <Card className="bg-slate-50 dark:bg-slate-800 border-blue-100 dark:border-slate-700">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <span className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-full">
                      <Briefcase size={18} className="text-blue-700 dark:text-blue-400" />
                    </span>
                    Duration
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Jul 2021 – Sep 2021 (3 months)</p>
                </CardContent>
              </Card>
              
              <Card className="bg-slate-50 dark:bg-slate-800 border-blue-100 dark:border-slate-700">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <span className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-full">
                      <FileText size={18} className="text-blue-700 dark:text-blue-400" />
                    </span>
                    Position
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Robotics Engineer Intern</p>
                </CardContent>
              </Card>
              
              <Card className="bg-slate-50 dark:bg-slate-800 border-blue-100 dark:border-slate-700">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <span className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-full">
                      <Robot size={18} className="text-blue-700 dark:text-blue-400" />
                    </span>
                    Department
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Robotics Engineering</p>
                </CardContent>
              </Card>
            </div>
            
            {/* Key Responsibilities */}
            <h2 className="text-3xl font-bold mb-6">Key Responsibilities</h2>
            <div className="space-y-8">
              <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-lg border border-slate-200 dark:border-slate-700">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                    <FileText className="h-8 w-8 text-blue-700 dark:text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold">Robot Design</h3>
                </div>
                <p className="mb-4">
                  3D-designed the humanoid robot with a focus on functionality and aesthetics. 
                  This involved creating detailed models of robot components, considering weight distribution, 
                  movement capabilities, and overall structural integrity.
                </p>
                <div>
                  <p className="font-medium mb-2">Skills Applied:</p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">SketchUp</Badge>
                    <Badge variant="secondary">CAD</Badge>
                    <Badge variant="secondary">Mechanical Design</Badge>
                  </div>
                </div>
              </div>
              
              <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-lg border border-slate-200 dark:border-slate-700">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                    <FileText className="h-8 w-8 text-blue-700 dark:text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold">Hardware Implementation</h3>
                </div>
                <p className="mb-4">
                  Assembled components and programmed STM32 microcontroller for servo control.
                  This included integrating various sensors, actuators, power systems, and 
                  developing the control algorithms for coordinated movement.
                </p>
                <div>
                  <p className="font-medium mb-2">Skills Applied:</p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">STM32</Badge>
                    <Badge variant="secondary">Embedded Software</Badge>
                    <Badge variant="secondary">Programming (C)</Badge>
                    <Badge variant="secondary">Problem Solving</Badge>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Technical Details */}
            <h2 className="text-3xl font-bold mt-12 mb-6">Technical Details & Achievements</h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="robot-specs">
                <AccordionTrigger className="text-xl font-semibold">Robot Specifications</AccordionTrigger>
                <AccordionContent className="text-base">
                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                      <span className="font-medium">Height:</span> 60 cm
                    </li>
                    <li>
                      <span className="font-medium">Weight:</span> 2.5 kg
                    </li>
                    <li>
                      <span className="font-medium">Degrees of Freedom:</span> 16
                    </li>
                    <li>
                      <span className="font-medium">Power Supply:</span> Rechargeable Li-Po battery, 11.1V
                    </li>
                    <li>
                      <span className="font-medium">Main Controller:</span> STM32F4 Discovery
                    </li>
                    <li>
                      <span className="font-medium">Sensors:</span> Camera, IMU, distance sensors
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="challenges">
                <AccordionTrigger className="text-xl font-semibold">Challenges & Solutions</AccordionTrigger>
                <AccordionContent className="text-base">
                  <div className="space-y-4">
                    <div>
                      <p className="font-medium">Challenge: Weight Distribution & Stability</p>
                      <p>The robot had stability issues when attempting to walk or perform movements.</p>
                      <p className="mt-2">
                        <span className="font-medium">Solution:</span> Redesigned the lower body with a lower center of gravity and implemented dynamic balance algorithms that adjusted the robot's posture in real-time.
                      </p>
                    </div>
                    
                    <div>
                      <p className="font-medium">Challenge: Power Consumption</p>
                      <p>High power usage limited the robot's operational time.</p>
                      <p className="mt-2">
                        <span className="font-medium">Solution:</span> Implemented power management routines that optimized servo usage and put non-essential systems into low-power mode when not in use.
                      </p>
                    </div>
                    
                    <div>
                      <p className="font-medium">Challenge: Motion Coordination</p>
                      <p>Coordinating multiple servo movements for natural-looking motion was difficult.</p>
                      <p className="mt-2">
                        <span className="font-medium">Solution:</span> Developed a servo sequencing system that allowed for creating and fine-tuning complex motion patterns.
                      </p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="outcomes">
                <AccordionTrigger className="text-xl font-semibold">Project Outcomes</AccordionTrigger>
                <AccordionContent className="text-base">
                  <p className="mb-4">
                    The humanoid robot project achieved several significant outcomes:
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Successfully developed a functioning humanoid robot capable of basic movements and interactions</li>
                    <li>Implemented computer vision capabilities for object recognition</li>
                    <li>Created a wireless control system allowing for remote operation</li>
                    <li>Demonstrated the robot's capabilities in an end-of-internship presentation</li>
                    <li>Documentation provided for future development and improvements</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            
            {/* Navigation buttons */}
            <div className="flex justify-center mt-12 gap-4">
              <Button asChild>
                <Link to="/professional-experience">View All Experiences</Link>
              </Button>
              <Button asChild variant="outline">
                <Link to="/">Back to Home</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default EspritInternshipExperience;
