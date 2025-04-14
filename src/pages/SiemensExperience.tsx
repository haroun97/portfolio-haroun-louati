
import { Briefcase, Code, CheckCircle, Users } from "lucide-react";
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
    id: "automation",
    title: "Test Automation Development",
    description: "Developed diagnostic tests to accurately identify the root causes of radiography system failures. Improved troubleshooting processes, reducing resolution time significantly.",
    skills: ["Python", "Pytest", "Azure DevOps Server", "C++"],
    icon: <Code className="h-8 w-8 text-blue-500" />
  },
  {
    id: "strategy",
    title: "Test Strategy & Execution",
    description: "Developed comprehensive test plans, specifications, and cases. Executed software tests, documented results, and tracked defects for resolution.",
    skills: ["Writing documents", "HP Quality Center", "SAP"],
    icon: <CheckCircle className="h-8 w-8 text-green-500" />
  },
  {
    id: "tools",
    title: "Tool & Interface Development",
    description: "Developed a data collection and visualization platform to assist service technicians in efficiently performing their tests, reducing time and effort.",
    skills: ["Visual Studio", "Electron", "HTML", "Cascading Style Sheets (CSS)", "JavaScript"],
    icon: <Code className="h-8 w-8 text-indigo-500" />
  },
  {
    id: "collaboration",
    title: "Collaboration & Problem Solving",
    description: "Collaborated with cross-departmental teams to resolve issues and defects, ensuring optimal performance and reliability of system.",
    skills: ["Agile Scrum Methodologies", "C++"],
    icon: <Users className="h-8 w-8 text-amber-500" />
  }
];

const SiemensExperience = () => {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center text-center">
            <Briefcase size={64} className="text-white mb-4" />
            <h1 className="text-4xl font-bold text-white mb-4">Siemens Healthineers Experience</h1>
            <p className="text-xl text-blue-100 max-w-3xl">
              Test Automation Engineer | Jan 2023 - Sep 2024 · 1 yr 9 mos | Forchheim, Bavaria, Germany
            </p>
            <div className="flex gap-4 mt-8">
              <Button asChild variant="secondary">
                <Link to="/" className="flex items-center gap-2">
                  Back to Home
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
                  Supported the Advanced Therapy department at Siemens Healthineers as a consultant through K-Tronik, 
                  focusing on the development and quality assurance of radiography systems.
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
              <AccordionItem value="diagnostic">
                <AccordionTrigger>Diagnostic Testing Framework</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4">
                    <p>
                      Developed an automated diagnostic testing framework for radiography systems that helped identify hardware and software issues with greater accuracy and efficiency.
                    </p>
                    <div className="mt-4">
                      <h4 className="font-medium mb-2">Key Achievements:</h4>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Reduced troubleshooting time by 40% through automated test sequences</li>
                        <li>Implemented parameterized testing for comprehensive system evaluation</li>
                        <li>Created detailed reporting system for easy interpretation of test results</li>
                      </ul>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="visualization">
                <AccordionTrigger>Data Visualization Platform</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4">
                    <p>
                      Designed and developed an Electron-based desktop application for service technicians to visualize system data and test results in real-time.
                    </p>
                    <div className="mt-4">
                      <h4 className="font-medium mb-2">Features:</h4>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Interactive dashboards for real-time system monitoring</li>
                        <li>Historical data analysis and trend visualization</li>
                        <li>Test execution interface with user-friendly controls</li>
                        <li>Report generation capabilities</li>
                      </ul>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="collaboration">
                <AccordionTrigger>Cross-Departmental Collaboration</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4">
                    <p>
                      Worked with multiple teams including R&D, Quality Assurance, and Service departments to ensure seamless integration of testing processes throughout the product lifecycle.
                    </p>
                    <div className="mt-4">
                      <h4 className="font-medium mb-2">Collaborative Achievements:</h4>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Facilitated knowledge transfer workshops between departments</li>
                        <li>Improved defect resolution cycle through enhanced communication channels</li>
                        <li>Participated in Agile ceremonies to ensure alignment with product goals</li>
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
                <TabsTrigger value="languages">Programming Languages</TabsTrigger>
                <TabsTrigger value="tools">Tools & Platforms</TabsTrigger>
                <TabsTrigger value="methodologies">Methodologies</TabsTrigger>
              </TabsList>
              
              <TabsContent value="languages" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Programming Languages</CardTitle>
                    <CardDescription>Languages used throughout the project lifecycle</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      <div className="bg-slate-100 dark:bg-slate-700 p-4 rounded-lg text-center">
                        <p className="font-medium">Python</p>
                        <p className="text-sm text-muted-foreground">Test automation</p>
                      </div>
                      <div className="bg-slate-100 dark:bg-slate-700 p-4 rounded-lg text-center">
                        <p className="font-medium">C++</p>
                        <p className="text-sm text-muted-foreground">System integration</p>
                      </div>
                      <div className="bg-slate-100 dark:bg-slate-700 p-4 rounded-lg text-center">
                        <p className="font-medium">JavaScript</p>
                        <p className="text-sm text-muted-foreground">UI development</p>
                      </div>
                      <div className="bg-slate-100 dark:bg-slate-700 p-4 rounded-lg text-center">
                        <p className="font-medium">HTML/CSS</p>
                        <p className="text-sm text-muted-foreground">Frontend styling</p>
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
                        <p className="font-medium">Visual Studio</p>
                        <p className="text-sm text-muted-foreground">Development IDE</p>
                      </div>
                      <div className="bg-slate-100 dark:bg-slate-700 p-4 rounded-lg text-center">
                        <p className="font-medium">Azure DevOps</p>
                        <p className="text-sm text-muted-foreground">CI/CD & Project tracking</p>
                      </div>
                      <div className="bg-slate-100 dark:bg-slate-700 p-4 rounded-lg text-center">
                        <p className="font-medium">Pytest</p>
                        <p className="text-sm text-muted-foreground">Test framework</p>
                      </div>
                      <div className="bg-slate-100 dark:bg-slate-700 p-4 rounded-lg text-center">
                        <p className="font-medium">Electron</p>
                        <p className="text-sm text-muted-foreground">Desktop app framework</p>
                      </div>
                      <div className="bg-slate-100 dark:bg-slate-700 p-4 rounded-lg text-center">
                        <p className="font-medium">HP Quality Center</p>
                        <p className="text-sm text-muted-foreground">Test management</p>
                      </div>
                      <div className="bg-slate-100 dark:bg-slate-700 p-4 rounded-lg text-center">
                        <p className="font-medium">SAP</p>
                        <p className="text-sm text-muted-foreground">Enterprise resource planning</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="methodologies" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Methodologies & Practices</CardTitle>
                    <CardDescription>Approaches and methodologies applied</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      <div className="bg-slate-100 dark:bg-slate-700 p-4 rounded-lg text-center">
                        <p className="font-medium">Agile Scrum</p>
                        <p className="text-sm text-muted-foreground">Project management</p>
                      </div>
                      <div className="bg-slate-100 dark:bg-slate-700 p-4 rounded-lg text-center">
                        <p className="font-medium">Test-Driven Development</p>
                        <p className="text-sm text-muted-foreground">Development approach</p>
                      </div>
                      <div className="bg-slate-100 dark:bg-slate-700 p-4 rounded-lg text-center">
                        <p className="font-medium">Continuous Integration</p>
                        <p className="text-sm text-muted-foreground">DevOps practice</p>
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

export default SiemensExperience;
