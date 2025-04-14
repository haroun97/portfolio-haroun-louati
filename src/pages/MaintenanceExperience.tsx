
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const MaintenanceExperience = () => {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-r from-slate-900 to-slate-700 py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center text-center">
            <Wrench size={64} className="text-white mb-4" />
            <h1 className="text-4xl font-bold text-white mb-4">Maintenance Trainee Roles</h1>
            <div className="flex items-center justify-center gap-2 text-slate-100 mb-4">
              <Briefcase size={18} />
              <span className="font-medium">Various Companies</span>
              <span className="mx-2">•</span>
              <span>Jan 2017 - Aug 2017</span>
            </div>
            <p className="text-xl text-slate-100 max-w-3xl">
              Tunisia
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
            <h2 className="text-3xl font-bold mb-8">Training Overview</h2>
            <p className="text-lg mb-8">
              During 2017, I gained valuable hands-on experience through maintenance training roles at two different companies. 
              These positions helped me develop practical skills in electrical engineering and gain exposure to different industrial environments.
            </p>
            
            <Tabs defaultValue="natilait" className="w-full mb-12">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="natilait">Natilait</TabsTrigger>
                <TabsTrigger value="steg">STEG</TabsTrigger>
              </TabsList>
              
              <TabsContent value="natilait" className="mt-6">
                <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-lg border border-slate-200 dark:border-slate-700">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-slate-200 dark:bg-slate-700 rounded-full">
                      <Briefcase className="h-6 w-6 text-slate-700 dark:text-slate-300" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-xl">Natilait</h3>
                      <p className="text-muted-foreground">Aug 2017 (1 month) • Utique, Bizerte</p>
                    </div>
                  </div>
                  
                  <p className="mb-6">
                    At Natilait, a dairy products manufacturing company, I assisted the maintenance team in 
                    optimizing production systems and ensuring smooth operations throughout the facility.
                  </p>
                  
                  <h4 className="font-semibold text-lg mb-3">Responsibilities:</h4>
                  <ul className="list-disc pl-5 space-y-2 mb-6">
                    <li>Assisted in preventive maintenance of dairy processing equipment</li>
                    <li>Helped troubleshoot electrical issues in production machinery</li>
                    <li>Supported the documentation of maintenance procedures</li>
                    <li>Participated in safety inspections and compliance checks</li>
                  </ul>
                  
                  <div>
                    <p className="font-medium mb-2">Skills Applied:</p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">Electrical Engineering</Badge>
                      <Badge variant="secondary">Maintenance</Badge>
                      <Badge variant="secondary">Food Processing Equipment</Badge>
                    </div>
                  </div>
                </div>
              </TabsContent>
              
              <TabsContent value="steg" className="mt-6">
                <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-lg border border-slate-200 dark:border-slate-700">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-slate-200 dark:bg-slate-700 rounded-full">
                      <Briefcase className="h-6 w-6 text-slate-700 dark:text-slate-300" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-xl">Tunisian Electricity and Gas Company (STEG)</h3>
                      <p className="text-muted-foreground">Jan 2017 (1 month) • Bizerte, Tunisia</p>
                    </div>
                  </div>
                  
                  <p className="mb-6">
                    At STEG, Tunisia's national electricity and gas company, I supported maintenance operations, 
                    troubleshooting, and assisting with electrical network reliability initiatives.
                  </p>
                  
                  <h4 className="font-semibold text-lg mb-3">Responsibilities:</h4>
                  <ul className="list-disc pl-5 space-y-2 mb-6">
                    <li>Shadowed technicians during routine maintenance of electrical distribution equipment</li>
                    <li>Assisted in testing and verifying electrical components</li>
                    <li>Helped document maintenance activities and inspection results</li>
                    <li>Participated in safety training and emergency procedure drills</li>
                  </ul>
                  
                  <div>
                    <p className="font-medium mb-2">Skills Applied:</p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary">Electrical Engineering</Badge>
                      <Badge variant="secondary">Power Systems</Badge>
                      <Badge variant="secondary">Electrical Distribution</Badge>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
            
            {/* Technical Details */}
            <h2 className="text-3xl font-bold mt-12 mb-6">Learning Outcomes & Key Takeaways</h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="skills-developed">
                <AccordionTrigger className="text-xl font-semibold">Skills Developed</AccordionTrigger>
                <AccordionContent className="text-base">
                  <p className="mb-4">Through these training experiences, I developed several valuable skills:</p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                      <span className="font-medium">Practical Electrical Knowledge:</span> Hands-on experience with electrical systems in different industrial environments
                    </li>
                    <li>
                      <span className="font-medium">Troubleshooting:</span> Identifying and resolving technical issues in various electrical systems
                    </li>
                    <li>
                      <span className="font-medium">Maintenance Procedures:</span> Understanding preventive and corrective maintenance workflows
                    </li>
                    <li>
                      <span className="font-medium">Documentation:</span> Recording maintenance activities and technical information
                    </li>
                    <li>
                      <span className="font-medium">Safety Awareness:</span> Understanding and following industrial safety protocols
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="industry-exposure">
                <AccordionTrigger className="text-xl font-semibold">Industry Exposure</AccordionTrigger>
                <AccordionContent className="text-base">
                  <div className="space-y-4">
                    <div>
                      <p className="font-medium">Food Processing Industry (Natilait)</p>
                      <ul className="list-disc pl-5 space-y-1 mt-2">
                        <li>Understanding of hygiene requirements in food production environments</li>
                        <li>Exposure to specialized dairy processing equipment</li>
                        <li>Insight into quality control processes in food manufacturing</li>
                      </ul>
                    </div>
                    
                    <div>
                      <p className="font-medium">Utilities Industry (STEG)</p>
                      <ul className="list-disc pl-5 space-y-1 mt-2">
                        <li>Exposure to electrical distribution networks and infrastructure</li>
                        <li>Understanding of public utility operations and standards</li>
                        <li>Insight into large-scale electrical systems management</li>
                      </ul>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="career-impact">
                <AccordionTrigger className="text-xl font-semibold">Career Impact</AccordionTrigger>
                <AccordionContent className="text-base">
                  <p className="mb-4">
                    These early training experiences had several important impacts on my professional development:
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Provided practical context for theoretical knowledge gained during academic studies</li>
                    <li>Helped identify areas of interest for further specialization</li>
                    <li>Developed professional soft skills including communication in technical environments</li>
                    <li>Built foundational experience that supported later roles and projects</li>
                    <li>Established understanding of different industry practices and requirements</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            
            {/* Navigation buttons - removed bottom buttons as requested */}
          </div>
        </div>
      </section>
    </main>
  );
};

export default MaintenanceExperience;
