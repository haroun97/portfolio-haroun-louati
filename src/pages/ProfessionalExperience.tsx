
import { useState } from "react";
import { Briefcase, School, FileText, Award } from "lucide-react";
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
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

// Experience type
interface Experience {
  id: string;
  company: string;
  title: string;
  period: string;
  location: string;
  mission: string;
  responsibilities: {
    title: string;
    description: string;
    skills: string[];
    icon: JSX.Element;
  }[];
  path: string;
}

// Experiences data
const experiences: Experience[] = [
  {
    id: "siemens",
    company: "Siemens Healthineers",
    title: "Test Automation Engineer",
    period: "Jan 2023 - Sep 2024 · 1 yr 9 mos",
    location: "Forchheim, Bavaria, Germany",
    mission: "Supported the Advanced Therapy department at Siemens Healthineers as a consultant through K-Tronik, focusing on the development and quality assurance of radiography systems.",
    responsibilities: [
      {
        title: "Test Automation Development",
        description: "Developed diagnostic tests to accurately identify the root causes of radiography system failures. Improved troubleshooting processes, reducing resolution time significantly.",
        skills: ["Python", "Pytest", "Azure DevOps Server", "C++"],
        icon: <FileText className="h-8 w-8 text-blue-500" />
      },
      {
        title: "Test Strategy & Execution",
        description: "Developed comprehensive test plans, specifications, and cases. Executed software tests, documented results, and tracked defects for resolution.",
        skills: ["Writing documents", "HP Quality Center", "SAP"],
        icon: <FileText className="h-8 w-8 text-green-500" />
      },
      {
        title: "Tool & Interface Development",
        description: "Developed a data collection and visualization platform to assist service technicians in efficiently performing their tests, reducing time and effort.",
        skills: ["Visual Studio", "Electron", "HTML", "CSS", "JavaScript"],
        icon: <FileText className="h-8 w-8 text-indigo-500" />
      },
      {
        title: "Collaboration & Problem Solving",
        description: "Collaborated with cross-departmental teams to resolve issues and defects, ensuring optimal performance and reliability of system.",
        skills: ["Agile Scrum Methodologies", "C++"],
        icon: <FileText className="h-8 w-8 text-amber-500" />
      }
    ],
    path: "/siemens-experience"
  },
  {
    id: "roche",
    company: "Roche",
    title: "Master's Thesis Project in Computer Science",
    period: "Jun 2022 - Nov 2022 · 6 mos",
    location: "Mannheim, Baden-Württemberg, Germany",
    mission: "Supported the Portfolio Management Team to optimize processes and drive efficient decision-making.",
    responsibilities: [
      {
        title: "Resource Management System Development",
        description: "Developed a comprehensive Resource Management System to deliver accurate information for company leadership and stakeholders, facilitating informed decision-making.",
        skills: ["ETL", "JavaScript", "Apps Script", "Google Sheets", "Tableau", "Node.js", "Databases"],
        icon: <FileText className="h-8 w-8 text-blue-500" />
      },
      {
        title: "Cross-Site Collaboration",
        description: "Collaborated with teams across Roche sites in Penzberg and Mannheim to enhance project outcomes.",
        skills: ["Communication", "Problem Solving", "Trello Board"],
        icon: <FileText className="h-8 w-8 text-green-500" />
      },
    ],
    path: "/roche-experience"
  },
];

const ProfessionalExperience = () => {
  const [activeExperience, setActiveExperience] = useState<string>(experiences[0].id);
  
  const selectedExperience = experiences.find(exp => exp.id === activeExperience) || experiences[0];
  
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center text-center">
            <Briefcase size={64} className="text-white mb-4" />
            <h1 className="text-4xl font-bold text-white mb-4">Professional Experience</h1>
            <p className="text-xl text-blue-100 max-w-3xl">
              A showcase of my professional journey and career achievements
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

      {/* Experience Navigation */}
      <section className="py-8 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {experiences.map((exp) => (
              <Button
                key={exp.id}
                variant={activeExperience === exp.id ? "default" : "outline"}
                onClick={() => setActiveExperience(exp.id)}
                className="mb-2"
              >
                {exp.company} • {exp.title}
              </Button>
            ))}
          </div>
        </div>
      </section>
      
      {/* Selected Experience Details */}
      <section className="py-16 bg-white dark:bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8 text-center">
              <h2 className="text-3xl font-bold mb-2">{selectedExperience.company}</h2>
              <h3 className="text-xl font-medium mb-2">{selectedExperience.title}</h3>
              <div className="flex flex-wrap items-center justify-center gap-2 text-muted-foreground">
                <span>{selectedExperience.period}</span>
                <span>•</span>
                <span>{selectedExperience.location}</span>
              </div>
            </div>
            
            {/* Mission Overview */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg">{selectedExperience.mission}</p>
              </CardContent>
            </Card>
            
            {/* Responsibilities */}
            <h3 className="text-2xl font-bold mb-6">Key Responsibilities</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              {selectedExperience.responsibilities.map((resp, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader className="flex flex-row items-center gap-4 pb-2">
                    <div className="p-2 bg-slate-100 dark:bg-slate-700 rounded-lg">
                      {resp.icon}
                    </div>
                    <CardTitle className="text-lg">{resp.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">{resp.description}</p>
                    <div>
                      <p className="text-sm text-muted-foreground mb-2">Skills:</p>
                      <div className="flex flex-wrap gap-2">
                        {resp.skills.map((skill, i) => (
                          <Badge key={i} variant="secondary">{skill}</Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            {/* Detailed Experience Link */}
            {selectedExperience.path && (
              <div className="flex justify-center mt-8">
                <Button asChild>
                  <Link to={selectedExperience.path}>
                    View Detailed Experience
                  </Link>
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProfessionalExperience;
