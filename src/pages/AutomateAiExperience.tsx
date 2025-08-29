import { Briefcase, Users, Server, Monitor, Cloud, CheckCircle, Cpu } from "lucide-react";
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
    id: "leadership",
    title: "Team Leadership",
    description: "Led a cross-functional team to build a machine learning solution for automated crop boundary detection. Improved mapping accuracy and significantly reduced manual work.",
    skills: ["Team Leadership", "Machine Learning", "Project Management"],
    icon: <Users className="h-8 w-8 text-amber-500" />
  },
  {
    id: "architecture",
    title: "System Architecture",
    description: "Designed a scalable, modular architecture for the Crop Monitoring platform. Enabled smooth integration with other internal modules and future scalability.",
    skills: ["System Design", "Scalability", "Modular Architecture"],
    icon: <Cpu className="h-8 w-8 text-purple-500" />
  },
  {
    id: "backend",
    title: "Backend Development",
    description: "Built secure, stateless APIs with Django. Delivered fast, reliable data access with IAM-based security.",
    skills: ["Django", "Python", "API Development", "Security"],
    icon: <Server className="h-8 w-8 text-green-500" />
  },
  {
    id: "frontend",
    title: "Frontend Integration",
    description: "Developed an interactive dashboard with maps and charts. Reduced data loading time from 15 seconds to just 0.2 seconds.",
    skills: ["JavaScript", "TypeScript", "Data Visualization", "Performance"],
    icon: <Monitor className="h-8 w-8 text-blue-500" />
  },
  {
    id: "cloud",
    title: "Cloud Deployment",
    description: "Deployed the full stack on AWS (EC2, S3, CloudFront). Ensured low-latency data delivery and high availability across devices.",
    skills: ["AWS", "EC2", "S3", "CloudFront", "DevOps"],
    icon: <Cloud className="h-8 w-8 text-cyan-500" />
  },
  {
    id: "qa",
    title: "QA & Handoff",
    description: "Led testing, documentation, and training. Delivered a production-ready system with zero critical bugs and full client sign-off.",
    skills: ["Quality Assurance", "Software Testing", "Documentation", "Training"],
    icon: <CheckCircle className="h-8 w-8 text-emerald-500" />
  }
];

const AutomateAiExperience = () => {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-r from-teal-900 to-teal-700 py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center text-center">
            <Briefcase size={64} className="text-white mb-4" />
            <h1 className="text-4xl font-bold text-white mb-4">Automate AI Experience</h1>
            <p className="text-xl text-teal-100 max-w-3xl">
              Full-Stack Engineer - GIS & Automation | May 2025 - Present · 4 mos
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
                  Leading full-stack development for GIS and automation solutions at Automate AI, 
                  focusing on building scalable machine learning platforms for agricultural technology 
                  and crop monitoring systems.
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {experienceAreas.map((area) => (
              <Card key={area.id} className="hover:shadow-lg transition-shadow">
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  <div className="p-2 bg-slate-100 dark:bg-slate-700 rounded-lg">
                    {area.icon}
                  </div>
                  <div>
                    <CardTitle className="text-base">{area.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-sm">{area.description}</p>
                  <div className="mt-4">
                    <p className="text-sm text-muted-foreground mb-2">Skills:</p>
                    <div className="flex flex-wrap gap-2">
                      {area.skills.map((skill, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">{skill}</Badge>
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
              <AccordionItem value="ml-platform">
                <AccordionTrigger>ML-Powered Crop Boundary Detection</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4">
                    <p>
                      Led the development of an advanced machine learning platform that automatically detects and maps crop boundaries using satellite imagery and GIS data.
                    </p>
                    <div className="mt-4">
                      <h4 className="font-medium mb-2">Key Achievements:</h4>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Improved mapping accuracy by 95% through advanced ML algorithms</li>
                        <li>Reduced manual mapping work from hours to minutes</li>
                        <li>Implemented real-time processing capabilities for large datasets</li>
                        <li>Created scalable architecture supporting multiple crop types</li>
                      </ul>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="performance">
                <AccordionTrigger>Performance Optimization</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4">
                    <p>
                      Achieved remarkable performance improvements through strategic frontend optimization and efficient data processing pipelines.
                    </p>
                    <div className="mt-4">
                      <h4 className="font-medium mb-2">Performance Metrics:</h4>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Data loading time reduced from 15 seconds to 0.2 seconds (98.7% improvement)</li>
                        <li>Implemented lazy loading and data caching strategies</li>
                        <li>Optimized API responses through efficient data serialization</li>
                        <li>Enhanced user experience with real-time updates and interactive maps</li>
                      </ul>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
              
              <AccordionItem value="infrastructure">
                <AccordionTrigger>Cloud Infrastructure & Deployment</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4">
                    <p>
                      Designed and implemented a robust AWS-based infrastructure ensuring high availability, scalability, and optimal performance across global regions.
                    </p>
                    <div className="mt-4">
                      <h4 className="font-medium mb-2">Infrastructure Components:</h4>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>AWS EC2 instances for scalable compute resources</li>
                        <li>S3 buckets for secure data storage and backup</li>
                        <li>CloudFront CDN for global content delivery</li>
                        <li>Load balancers for high availability and fault tolerance</li>
                        <li>Automated deployment pipelines with zero-downtime releases</li>
                      </ul>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="quality">
                <AccordionTrigger>Quality Assurance & Delivery</AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-4">
                    <p>
                      Established comprehensive quality assurance processes and delivered a production-ready system with exceptional reliability and client satisfaction.
                    </p>
                    <div className="mt-4">
                      <h4 className="font-medium mb-2">Quality Metrics:</h4>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Zero critical bugs in production deployment</li>
                        <li>100% client sign-off and satisfaction</li>
                        <li>Comprehensive test coverage including unit, integration, and E2E tests</li>
                        <li>Detailed documentation and user training materials</li>
                        <li>Established monitoring and alerting systems</li>
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
            <Tabs defaultValue="programming" className="w-full">
              <TabsList className="grid grid-cols-4 mb-8">
                <TabsTrigger value="programming">Programming</TabsTrigger>
                <TabsTrigger value="platforms">Platforms</TabsTrigger>
                <TabsTrigger value="specialties">Specialties</TabsTrigger>
                <TabsTrigger value="methodologies">Practices</TabsTrigger>
              </TabsList>
              
              <TabsContent value="programming" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Programming Languages & Frameworks</CardTitle>
                    <CardDescription>Core technologies used in development</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      <div className="bg-slate-100 dark:bg-slate-700 p-4 rounded-lg text-center">
                        <p className="font-medium">Python</p>
                        <p className="text-sm text-muted-foreground">Backend & ML</p>
                      </div>
                      <div className="bg-slate-100 dark:bg-slate-700 p-4 rounded-lg text-center">
                        <p className="font-medium">Django</p>
                        <p className="text-sm text-muted-foreground">Web framework</p>
                      </div>
                      <div className="bg-slate-100 dark:bg-slate-700 p-4 rounded-lg text-center">
                        <p className="font-medium">JavaScript</p>
                        <p className="text-sm text-muted-foreground">Frontend logic</p>
                      </div>
                      <div className="bg-slate-100 dark:bg-slate-700 p-4 rounded-lg text-center">
                        <p className="font-medium">TypeScript</p>
                        <p className="text-sm text-muted-foreground">Type safety</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="platforms" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Cloud & Platforms</CardTitle>
                    <CardDescription>Infrastructure and deployment platforms</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      <div className="bg-slate-100 dark:bg-slate-700 p-4 rounded-lg text-center">
                        <p className="font-medium">AWS</p>
                        <p className="text-sm text-muted-foreground">Cloud platform</p>
                      </div>
                      <div className="bg-slate-100 dark:bg-slate-700 p-4 rounded-lg text-center">
                        <p className="font-medium">EC2</p>
                        <p className="text-sm text-muted-foreground">Compute instances</p>
                      </div>
                      <div className="bg-slate-100 dark:bg-slate-700 p-4 rounded-lg text-center">
                        <p className="font-medium">S3</p>
                        <p className="text-sm text-muted-foreground">Object storage</p>
                      </div>
                      <div className="bg-slate-100 dark:bg-slate-700 p-4 rounded-lg text-center">
                        <p className="font-medium">CloudFront</p>
                        <p className="text-sm text-muted-foreground">CDN</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="specialties" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Specialized Skills</CardTitle>
                    <CardDescription>Domain-specific expertise and tools</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      <div className="bg-slate-100 dark:bg-slate-700 p-4 rounded-lg text-center">
                        <p className="font-medium">GIS</p>
                        <p className="text-sm text-muted-foreground">Geographic systems</p>
                      </div>
                      <div className="bg-slate-100 dark:bg-slate-700 p-4 rounded-lg text-center">
                        <p className="font-medium">Machine Learning</p>
                        <p className="text-sm text-muted-foreground">ML algorithms</p>
                      </div>
                      <div className="bg-slate-100 dark:bg-slate-700 p-4 rounded-lg text-center">
                        <p className="font-medium">ETL Tools</p>
                        <p className="text-sm text-muted-foreground">Data processing</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="methodologies" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Methodologies & Practices</CardTitle>
                    <CardDescription>Development and project management approaches</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      <div className="bg-slate-100 dark:bg-slate-700 p-4 rounded-lg text-center">
                        <p className="font-medium">Team Leadership</p>
                        <p className="text-sm text-muted-foreground">Project management</p>
                      </div>
                      <div className="bg-slate-100 dark:bg-slate-700 p-4 rounded-lg text-center">
                        <p className="font-medium">Quality Assurance</p>
                        <p className="text-sm text-muted-foreground">Testing practices</p>
                      </div>
                      <div className="bg-slate-100 dark:bg-slate-700 p-4 rounded-lg text-center">
                        <p className="font-medium">Software Testing</p>
                        <p className="text-sm text-muted-foreground">Test automation</p>
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

export default AutomateAiExperience;