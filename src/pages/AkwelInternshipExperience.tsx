import { Briefcase, GraduationCap, FileText } from "lucide-react";
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

const AkwelInternshipExperience = () => {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-900 to-green-700 py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center text-center">
            <GraduationCap size={64} className="text-white mb-4" />
            <h1 className="text-4xl font-bold text-white mb-4">Bachelor's Thesis Project</h1>
            <div className="flex items-center justify-center gap-2 text-green-100 mb-4">
              <Briefcase size={18} />
              <span className="font-medium">AKWEL</span>
              <span className="mx-2">•</span>
              <span>Feb 2019 – May 2019 (4 months)</span>
            </div>
            <p className="text-xl text-green-100 max-w-3xl">
              Mateur, Bizerte, Tunisia
            </p>
            <div className="flex gap-4 mt-8">
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
            <h2 className="text-3xl font-bold mb-8">Project Overview</h2>
            <p className="text-lg mb-8">
              For my Bachelor's thesis project at AKWEL, I focused on improving the accuracy of computer vision systems 
              used in automotive quality control. The project addressed a critical need in manufacturing where consistent 
              lighting is essential for reliable image processing and quality inspection.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <Card className="bg-slate-50 dark:bg-slate-800 border-green-100 dark:border-slate-700">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <span className="p-2 bg-green-100 dark:bg-green-900/30 rounded-full">
                      <Briefcase size={18} className="text-green-700 dark:text-green-400" />
                    </span>
                    Duration
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Feb 2019 – May 2019 (4 months)</p>
                </CardContent>
              </Card>
              
              <Card className="bg-slate-50 dark:bg-slate-800 border-green-100 dark:border-slate-700">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <span className="p-2 bg-green-100 dark:bg-green-900/30 rounded-full">
                      <GraduationCap size={18} className="text-green-700 dark:text-green-400" />
                    </span>
                    Project Type
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Bachelor's Thesis Project</p>
                </CardContent>
              </Card>
              
              <Card className="bg-slate-50 dark:bg-slate-800 border-green-100 dark:border-slate-700">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <span className="p-2 bg-green-100 dark:bg-green-900/30 rounded-full">
                      <FileText size={18} className="text-green-700 dark:text-green-400" />
                    </span>
                    Industry
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Automotive Manufacturing</p>
                </CardContent>
              </Card>
            </div>
            
            {/* Key Responsibilities */}
            <h2 className="text-3xl font-bold mb-6">Key Contributions</h2>
            <div className="space-y-8">
              <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-lg border border-slate-200 dark:border-slate-700">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg">
                    <FileText className="h-8 w-8 text-green-700 dark:text-green-400" />
                  </div>
                  <h3 className="text-xl font-semibold">Lighting Control System</h3>
                </div>
                <p className="mb-4">
                  Developed an automatic lighting control system that maintained consistent illumination conditions
                  for computer vision quality inspections. The system adjusted lighting parameters based on ambient 
                  conditions and specific inspection requirements to ensure consistent image quality.
                </p>
                <div>
                  <p className="font-medium mb-2">Skills Applied:</p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Electrical Engineering</Badge>
                    <Badge variant="secondary">Automotive</Badge>
                    <Badge variant="secondary">Control Systems</Badge>
                  </div>
                </div>
              </div>
              
              <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-lg border border-slate-200 dark:border-slate-700">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg">
                    <FileText className="h-8 w-8 text-green-700 dark:text-green-400" />
                  </div>
                  <h3 className="text-xl font-semibold">HMI Development</h3>
                </div>
                <p className="mb-4">
                  Created a Human-Machine Interface (HMI) for consistent lighting and improved reliability.
                  The interface allowed operators to monitor lighting conditions, make manual adjustments when necessary,
                  and review historical data on system performance.
                </p>
                <div>
                  <p className="font-medium mb-2">Skills Applied:</p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">HMI</Badge>
                    <Badge variant="secondary">Embedded Systems</Badge>
                    <Badge variant="secondary">Electrical Engineering</Badge>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Technical Details */}
            <h2 className="text-3xl font-bold mt-12 mb-6">Technical Details & Challenges</h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="system-architecture">
                <AccordionTrigger className="text-xl font-semibold">System Architecture</AccordionTrigger>
                <AccordionContent className="text-base">
                  <p className="mb-4">The lighting control system consisted of several key components:</p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                      <span className="font-medium">Light Sensors:</span> Ambient light detection system with multiple sensors for accurate light measurement
                    </li>
                    <li>
                      <span className="font-medium">Control Unit:</span> Microcontroller-based system for processing sensor data and controlling lighting elements
                    </li>
                    <li>
                      <span className="font-medium">Lighting Array:</span> Customizable LED matrix with adjustable intensity and color temperature
                    </li>
                    <li>
                      <span className="font-medium">HMI Panel:</span> Touchscreen interface for system control and monitoring
                    </li>
                    <li>
                      <span className="font-medium">Data Logging System:</span> Recording of lighting conditions and system adjustments for quality control purposes
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="challenges">
                <AccordionTrigger className="text-xl font-semibold">Challenges & Solutions</AccordionTrigger>
                <AccordionContent className="text-base">
                  <div className="space-y-4">
                    <div>
                      <p className="font-medium">Challenge: Ambient Light Variations</p>
                      <p>Factory lighting conditions changed throughout the day, affecting inspection accuracy.</p>
                      <p className="mt-2">
                        <span className="font-medium">Solution:</span> Implemented a real-time ambient light compensation system that continuously adjusted the inspection lighting to maintain consistent illumination regardless of external conditions.
                      </p>
                    </div>
                    
                    <div>
                      <p className="font-medium">Challenge: Different Material Reflectivity</p>
                      <p>Various automotive parts had different surface properties, requiring different lighting configurations.</p>
                      <p className="mt-2">
                        <span className="font-medium">Solution:</span> Developed a part recognition system that automatically selected the appropriate lighting profile based on the component being inspected.
                      </p>
                    </div>
                    
                    <div>
                      <p className="font-medium">Challenge: User Interface Usability</p>
                      <p>The system needed to be accessible to operators with varying technical backgrounds.</p>
                      <p className="mt-2">
                        <span className="font-medium">Solution:</span> Created an intuitive interface with visual feedback and simplified controls, along with comprehensive training materials and quick reference guides.
                      </p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="outcomes">
                <AccordionTrigger className="text-xl font-semibold">Project Outcomes</AccordionTrigger>
                <AccordionContent className="text-base">
                  <p className="mb-4">
                    The project delivered significant improvements to the quality control process:
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>30% reduction in false rejection rates due to improved lighting consistency</li>
                    <li>25% increase in defect detection accuracy across various automotive components</li>
                    <li>Implementation of standardized lighting profiles for different part categories</li>
                    <li>Development of a user manual and maintenance documentation for long-term system support</li>
                    <li>Successful integration with the existing quality control workflow with minimal disruption</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AkwelInternshipExperience;
