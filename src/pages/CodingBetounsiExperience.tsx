
import { Briefcase, Code, FileText } from "lucide-react";
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

const CodingBetounsiExperience = () => {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-900 to-indigo-700 py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center text-center">
            <Code size={64} className="text-white mb-4" />
            <h1 className="text-4xl font-bold text-white mb-4">Software Engineer - Apprenticeship</h1>
            <div className="flex items-center justify-center gap-2 text-indigo-100 mb-4">
              <Briefcase size={18} />
              <span className="font-medium">Coding Betounsi</span>
              <span className="mx-2">•</span>
              <span>Oct 2024 – Present (7 months)</span>
            </div>
            <p className="text-xl text-indigo-100 max-w-3xl">
              Building scalable, efficient, and user-friendly web applications
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
            <h2 className="text-3xl font-bold mb-8">Role Overview</h2>
            <p className="text-lg mb-8">
              As a Software Engineer apprentice at Coding Betounsi, I've been working on building scalable, 
              efficient, and user-friendly web applications. This role has allowed me to gain hands-on experience
              with modern web development technologies and methodologies while working on real-world projects.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <Card className="bg-slate-50 dark:bg-slate-800 border-indigo-100 dark:border-slate-700">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <span className="p-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-full">
                      <Briefcase size={18} className="text-indigo-700 dark:text-indigo-400" />
                    </span>
                    Duration
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Oct 2024 – Present (7 months)</p>
                </CardContent>
              </Card>
              
              <Card className="bg-slate-50 dark:bg-slate-800 border-indigo-100 dark:border-slate-700">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <span className="p-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-full">
                      <FileText size={18} className="text-indigo-700 dark:text-indigo-400" />
                    </span>
                    Position
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Software Engineer - Apprenticeship</p>
                </CardContent>
              </Card>
              
              <Card className="bg-slate-50 dark:bg-slate-800 border-indigo-100 dark:border-slate-700">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <span className="p-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-full">
                      <Code size={18} className="text-indigo-700 dark:text-indigo-400" />
                    </span>
                    Department
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Software Development</p>
                </CardContent>
              </Card>
            </div>
            
            {/* Key Responsibilities */}
            <h2 className="text-3xl font-bold mb-6">Key Responsibilities</h2>
            <div className="space-y-8">
              <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-lg border border-slate-200 dark:border-slate-700">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg">
                    <FileText className="h-8 w-8 text-indigo-700 dark:text-indigo-400" />
                  </div>
                  <h3 className="text-xl font-semibold">Architecture Design</h3>
                </div>
                <p className="mb-4">
                  Designed UML diagrams (Class, ERD, Sequence) to structure and optimize architecture.
                  This involved analyzing system requirements, identifying key components, and establishing
                  relationships between different modules to ensure a scalable and maintainable system design.
                </p>
                <div>
                  <p className="font-medium mb-2">Skills Applied:</p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">UML</Badge>
                    <Badge variant="secondary">Software Architecture</Badge>
                    <Badge variant="secondary">System Design</Badge>
                  </div>
                </div>
              </div>
              
              <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-lg border border-slate-200 dark:border-slate-700">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg">
                    <FileText className="h-8 w-8 text-indigo-700 dark:text-indigo-400" />
                  </div>
                  <h3 className="text-xl font-semibold">API Development</h3>
                </div>
                <p className="mb-4">
                  Developed RESTful APIs for CRUD operations and seamless database integration. 
                  This work included implementing endpoints following REST principles, handling authentication 
                  and authorization, and ensuring proper error handling and response formatting.
                </p>
                <div>
                  <p className="font-medium mb-2">Skills Applied:</p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Node.js</Badge>
                    <Badge variant="secondary">AngularJS</Badge>
                    <Badge variant="secondary">JavaScript</Badge>
                    <Badge variant="secondary">RESTful APIs</Badge>
                  </div>
                </div>
              </div>
              
              <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-lg border border-slate-200 dark:border-slate-700">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg">
                    <FileText className="h-8 w-8 text-indigo-700 dark:text-indigo-400" />
                  </div>
                  <h3 className="text-xl font-semibold">Testing Implementation</h3>
                </div>
                <p className="mb-4">
                  Implemented unit tests to ensure backend reliability and high code coverage.
                  This focused on creating comprehensive test suites to verify functionality,
                  identify edge cases, and ensure the robustness of the application before deployment.
                </p>
                <div>
                  <p className="font-medium mb-2">Skills Applied:</p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Unit Testing</Badge>
                    <Badge variant="secondary">HTML</Badge>
                    <Badge variant="secondary">CSS</Badge>
                    <Badge variant="secondary">FastAPI</Badge>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Technical Details */}
            <h2 className="text-3xl font-bold mt-12 mb-6">Technical Details</h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="tech-stack">
                <AccordionTrigger className="text-xl font-semibold">Technology Stack</AccordionTrigger>
                <AccordionContent className="text-base">
                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                      <span className="font-medium">Frontend:</span> AngularJS, HTML5, CSS3, JavaScript
                    </li>
                    <li>
                      <span className="font-medium">Backend:</span> Node.js, FastAPI (Python)
                    </li>
                    <li>
                      <span className="font-medium">Testing:</span> Jest, Pytest
                    </li>
                    <li>
                      <span className="font-medium">Tools:</span> Git, VS Code, Postman
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="projects">
                <AccordionTrigger className="text-xl font-semibold">Projects Undertaken</AccordionTrigger>
                <AccordionContent className="text-base">
                  <ul className="list-disc pl-5 space-y-4">
                    <li>
                      <p className="font-medium">E-commerce Platform</p>
                      <p>Developed a scalable e-commerce platform with user authentication, product catalog, shopping cart functionality, and secure checkout process.</p>
                    </li>
                    <li>
                      <p className="font-medium">CRM System</p>
                      <p>Contributed to building a customer relationship management system with contact management, lead tracking, and analytics dashboards.</p>
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="methodologies">
                <AccordionTrigger className="text-xl font-semibold">Development Methodologies</AccordionTrigger>
                <AccordionContent className="text-base">
                  <p className="mb-4">
                    At Coding Betounsi, we employed the following development practices:
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Agile Scrum with 2-week sprints</li>
                    <li>Test-Driven Development (TDD)</li>
                    <li>Continuous Integration/Continuous Deployment (CI/CD)</li>
                    <li>Code reviews and pair programming</li>
                    <li>Regular retrospectives for process improvement</li>
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

export default CodingBetounsiExperience;
