
import { Briefcase, FileText } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";

// Experience area type
interface ExperienceArea {
  id: string;
  title: string;
  description: string;
  skills: string[];
  icon: JSX.Element;
}

// Experience areas data
const experienceAreas: ExperienceArea[] = [
  {
    id: "resource",
    title: "Resource Management System Development",
    description: "Developed a comprehensive Resource Management System to deliver accurate information for company leadership and stakeholders, facilitating informed decision-making.",
    skills: ["ETL", "JavaScript", "Apps Script", "Google Sheets", "Tableau", "Node.js", "Databases"],
    icon: <FileText className="h-8 w-8 text-blue-500" />
  },
  {
    id: "collaboration",
    title: "Cross-Site Collaboration",
    description: "Collaborated with teams across Roche sites in Penzberg and Mannheim to enhance project outcomes.",
    skills: ["Communication", "Problem Solving", "Trello Board"],
    icon: <FileText className="h-8 w-8 text-green-500" />
  }
];

const RocheExperience = () => {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-900 to-purple-700 py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center text-center">
            <Briefcase size={64} className="text-white mb-4" />
            <h1 className="text-4xl font-bold text-white mb-4">Roche Experience</h1>
            <p className="text-xl text-purple-100 max-w-3xl">
              Master's Thesis Project in Computer Science | Jun 2022 - Nov 2022 · 6 mos | Mannheim, Baden-Württemberg, Germany
            </p>
            <div className="flex gap-4 mt-8">
              <Button asChild variant="secondary">
                <Link to="/professional-experience" className="flex items-center gap-2">
                  Back to Professional Experience
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Mission Overview */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">Mission</h2>
            <Card>
              <CardContent className="pt-6">
                <p className="text-lg">
                  Supported the Portfolio Management Team to optimize processes and drive efficient decision-making.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience Areas */}
      <section className="py-16 bg-white dark:bg-slate-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Key Responsibilities</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {experienceAreas.map((area) => (
              <Card key={area.id} className="hover:shadow-lg transition-shadow">
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  <div className="p-2 bg-slate-100 dark:bg-slate-700 rounded-lg">
                    {area.icon}
                  </div>
                  <div>
                    <CardTitle>{area.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">{area.description}</p>
                  <div className="mt-4">
                    <p className="text-sm text-muted-foreground mb-2">Skills:</p>
                    <div className="flex flex-wrap gap-2">
                      {area.skills.map((skill, index) => (
                        <Badge key={index} variant="secondary">{skill}</Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Project Details</h2>
          
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="resource">
                <AccordionTrigger>Resource Management System</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4">
                    <p>
                      Developed a comprehensive Resource Management System to centralize and visualize resource allocation across departments and projects, enabling data-driven decision making for portfolio management.
                    </p>
                    <div className="mt-4">
                      <h4 className="font-medium mb-2">Key Achievements:</h4>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Automated data extraction from multiple sources, reducing manual data entry by 85%</li>
                        <li>Created interactive dashboards that improved leadership visibility into resource allocation</li>
                        <li>Implemented real-time analytics that reduced decision-making time by 60%</li>
                      </ul>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="technical">
                <AccordionTrigger>Technical Implementation</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4">
                    <p>
                      Implemented a modular architecture that connected various data sources, processing pipelines, and visualization tools to create a comprehensive resource management solution.
                    </p>
                    <div className="mt-4">
                      <h4 className="font-medium mb-2">Technical Components:</h4>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>ETL processes to extract and transform data from multiple enterprise systems</li>
                        <li>Node.js backend for data processing and API endpoints</li>
                        <li>Google Apps Script for automation and integration with Google Workspace</li>
                        <li>Tableau dashboards for interactive data visualization and analysis</li>
                      </ul>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="collaboration">
                <AccordionTrigger>Cross-Site Collaboration</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4">
                    <p>
                      Facilitated effective communication and collaboration between teams at multiple Roche sites, focusing on aligning project objectives and integrating feedback from diverse stakeholders.
                    </p>
                    <div className="mt-4">
                      <h4 className="font-medium mb-2">Collaborative Achievements:</h4>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Established regular cross-site sync meetings to facilitate knowledge sharing</li>
                        <li>Created documentation and training materials to ensure consistent system adoption</li>
                        <li>Implemented feedback loops for continuous improvement of the resource management system</li>
                      </ul>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Technical Skills Showcase */}
      <section className="py-16 bg-white dark:bg-slate-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Technical Skills Applied</h2>
          
          <div className="max-w-4xl mx-auto">
            <Tabs defaultValue="languages" className="w-full">
              <TabsList className="grid grid-cols-3 mb-8">
                <TabsTrigger value="languages">Programming</TabsTrigger>
                <TabsTrigger value="tools">Tools & Platforms</TabsTrigger>
                <TabsTrigger value="soft">Soft Skills</TabsTrigger>
              </TabsList>
              
              <TabsContent value="languages" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Programming Skills</CardTitle>
                    <CardDescription>Languages and technologies used throughout the project</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      <div className="bg-slate-100 dark:bg-slate-700 p-4 rounded-lg text-center">
                        <p className="font-medium">JavaScript</p>
                        <p className="text-sm text-muted-foreground">Core development</p>
                      </div>
                      <div className="bg-slate-100 dark:bg-slate-700 p-4 rounded-lg text-center">
                        <p className="font-medium">Node.js</p>
                        <p className="text-sm text-muted-foreground">Backend development</p>
                      </div>
                      <div className="bg-slate-100 dark:bg-slate-700 p-4 rounded-lg text-center">
                        <p className="font-medium">Apps Script</p>
                        <p className="text-sm text-muted-foreground">Automation</p>
                      </div>
                      <div className="bg-slate-100 dark:bg-slate-700 p-4 rounded-lg text-center">
                        <p className="font-medium">SQL</p>
                        <p className="text-sm text-muted-foreground">Data querying</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="tools" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Tools & Platforms</CardTitle>
                    <CardDescription>Technology stack and platforms utilized</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      <div className="bg-slate-100 dark:bg-slate-700 p-4 rounded-lg text-center">
                        <p className="font-medium">Google Sheets</p>
                        <p className="text-sm text-muted-foreground">Data management</p>
                      </div>
                      <div className="bg-slate-100 dark:bg-slate-700 p-4 rounded-lg text-center">
                        <p className="font-medium">Tableau</p>
                        <p className="text-sm text-muted-foreground">Data visualization</p>
                      </div>
                      <div className="bg-slate-100 dark:bg-slate-700 p-4 rounded-lg text-center">
                        <p className="font-medium">ETL Tools</p>
                        <p className="text-sm text-muted-foreground">Data processing</p>
                      </div>
                      <div className="bg-slate-100 dark:bg-slate-700 p-4 rounded-lg text-center">
                        <p className="font-medium">Trello</p>
                        <p className="text-sm text-muted-foreground">Project management</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="soft" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Soft Skills</CardTitle>
                    <CardDescription>Critical non-technical skills applied</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      <div className="bg-slate-100 dark:bg-slate-700 p-4 rounded-lg text-center">
                        <p className="font-medium">Communication</p>
                        <p className="text-sm text-muted-foreground">Cross-site coordination</p>
                      </div>
                      <div className="bg-slate-100 dark:bg-slate-700 p-4 rounded-lg text-center">
                        <p className="font-medium">Problem Solving</p>
                        <p className="text-sm text-muted-foreground">Critical thinking</p>
                      </div>
                      <div className="bg-slate-100 dark:bg-slate-700 p-4 rounded-lg text-center">
                        <p className="font-medium">Project Management</p>
                        <p className="text-sm text-muted-foreground">Resource planning</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>
    </main>
  );
};

export default RocheExperience;
