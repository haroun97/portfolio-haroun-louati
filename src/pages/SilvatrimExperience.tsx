import { Briefcase, Wrench, FileText } from "lucide-react";
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

const SilvatrimExperience = () => {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-r from-amber-900 to-amber-700 py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center text-center">
            <Wrench size={64} className="text-white mb-4" />
            <h1 className="text-4xl font-bold text-white mb-4">Electrical Engineering Trainee</h1>
            <div className="flex items-center justify-center gap-2 text-amber-100 mb-4">
              <Briefcase size={18} />
              <span className="font-medium">Silvatrim Tunisia / WKW Automotive</span>
              <span className="mx-2">•</span>
              <span>Jan 2018 (1 month)</span>
            </div>
            <p className="text-xl text-amber-100 max-w-3xl">
              Utique, Bizerte
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
            <h2 className="text-3xl font-bold mb-8">Internship Overview</h2>
            <p className="text-lg mb-8">
              During my one-month training period at Silvatrim Tunisia (WKW Automotive), I gained valuable hands-on experience in industrial electrical systems. 
              The primary focus of my work was designing and implementing an electrical control cabinet for various industrial equipment used in the automotive parts manufacturing process.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <Card className="bg-slate-50 dark:bg-slate-800 border-amber-100 dark:border-slate-700">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <span className="p-2 bg-amber-100 dark:bg-amber-900/30 rounded-full">
                      <Briefcase size={18} className="text-amber-700 dark:text-amber-400" />
                    </span>
                    Duration
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Jan 2018 (1 month)</p>
                </CardContent>
              </Card>
              
              <Card className="bg-slate-50 dark:bg-slate-800 border-amber-100 dark:border-slate-700">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <span className="p-2 bg-amber-100 dark:bg-amber-900/30 rounded-full">
                      <Wrench size={18} className="text-amber-700 dark:text-amber-400" />
                    </span>
                    Position
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Electrical Engineering Trainee</p>
                </CardContent>
              </Card>
              
              <Card className="bg-slate-50 dark:bg-slate-800 border-amber-100 dark:border-slate-700">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <span className="p-2 bg-amber-100 dark:bg-amber-900/30 rounded-full">
                      <FileText size={18} className="text-amber-700 dark:text-amber-400" />
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
            <h2 className="text-3xl font-bold mb-6">Key Responsibilities</h2>
            <div className="space-y-8">
              <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-lg border border-slate-200 dark:border-slate-700">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-amber-100 dark:bg-amber-900/30 rounded-lg">
                    <FileText className="h-8 w-8 text-amber-700 dark:text-amber-400" />
                  </div>
                  <h3 className="text-xl font-semibold">Electrical Cabinet Design</h3>
                </div>
                <p className="mb-4">
                  Designed and implemented an electrical cabinet to control industrial equipment including chillers, dryers, 
                  compressors, and water pumps. This work involved circuit design, component selection, wiring, and implementation
                  of control logic.
                </p>
                <div>
                  <p className="font-medium mb-2">Skills Applied:</p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Electrical Engineering</Badge>
                    <Badge variant="secondary">Automotive</Badge>
                    <Badge variant="secondary">Industrial Controls</Badge>
                    <Badge variant="secondary">Circuit Design</Badge>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Technical Details */}
            <h2 className="text-3xl font-bold mt-12 mb-6">Technical Details & Project Scope</h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="project-details">
                <AccordionTrigger className="text-xl font-semibold">Project Details</AccordionTrigger>
                <AccordionContent className="text-base">
                  <p className="mb-4">The electrical cabinet project involved several key components and challenges:</p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                      <span className="font-medium">Equipment Integration:</span> Created a centralized control system for various industrial equipment (chillers, dryers, compressors, water pumps)
                    </li>
                    <li>
                      <span className="font-medium">Control Logic:</span> Implemented control logic for sequential operation and safety interlocks
                    </li>
                    <li>
                      <span className="font-medium">Power Distribution:</span> Designed power distribution with appropriate protection devices
                    </li>
                    <li>
                      <span className="font-medium">Monitoring System:</span> Incorporated status indicators and basic alarms for system monitoring
                    </li>
                    <li>
                      <span className="font-medium">Documentation:</span> Created electrical schematics and operation manuals for future reference
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="tools-technologies">
                <AccordionTrigger className="text-xl font-semibold">Tools & Technologies Used</AccordionTrigger>
                <AccordionContent className="text-base">
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Electrical CAD software for circuit design</li>
                    <li>Programmable Logic Controllers (PLCs) for equipment control</li>
                    <li>Circuit breakers, contactors, and relays for power control</li>
                    <li>Temperature and pressure sensors for monitoring</li>
                    <li>Control panels with Human-Machine Interface elements</li>
                    <li>Industrial networking components for system integration</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="learnings">
                <AccordionTrigger className="text-xl font-semibold">Key Learnings</AccordionTrigger>
                <AccordionContent className="text-base">
                  <p className="mb-4">
                    This training experience provided valuable insights and skills:
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Understanding of industrial electrical standards and safety requirements</li>
                    <li>Practical experience with industrial equipment control systems</li>
                    <li>Knowledge of electrical component selection based on load requirements</li>
                    <li>Experience with electrical troubleshooting in an industrial environment</li>
                    <li>Insight into manufacturing processes in the automotive industry</li>
                    <li>Experience working with cross-functional teams including production and maintenance staff</li>
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

export default SilvatrimExperience;
