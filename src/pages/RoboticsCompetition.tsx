
import { Trophy, Award, Bot } from "lucide-react";
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

// Robot project type
interface RobotProject {
  id: string;
  title: string;
  period: string;
  description: string;
  skills: string[];
  image: string;
}

// Award type
interface Award {
  title: string;
  issuer: string;
  date: string;
  icon: JSX.Element;
}

// Robot projects data
const robotProjects: RobotProject[] = [
  {
    id: "all-terrain",
    title: "All Terrain Robot",
    period: "Nov 2018 - Jan 2019",
    description: "All Terrain Robot is able to navigate across bumpy and rough terrains. It has 4 wheels and 4 motors. Also the robot can be controlled up to 15 meters by PS2 controller.",
    skills: ["Embedded Systems", "Problem Solving", "Embedded Software", "Software Development", "C (Programming Language)"],
    image: "/lovable-uploads/c8880da3-3cc5-4d77-907f-9e3f25c9fd3f.png",
  },
  {
    id: "maze-solver",
    title: "Maze Solver Robot",
    period: "2017 - 2018",
    description: "The Maze solver robot is an autonomous Robot. It must follow the best possible path among various possible paths. Also, it is able to find the end of the maze as fast as possible. The Robot uses 2 Ultrasonic sensors to determine the distance of the wall in two directions (front and right). In this project we use wall following algorithm. The electronic circuitry of the robot consists of the Arduino board, Ultrasonic sensors, L298 H-bridge motor driver coupled with two geared DC motors and 12V battery.",
    skills: ["Embedded Systems", "Problem Solving", "Embedded Software", "Software Development", "C (Programming Language)"],
    image: "/lovable-uploads/309b8922-00a9-4832-8df3-6ada442c0108.png",
  },
  {
    id: "line-follower",
    title: "Line Follower Robot",
    period: "2016 - 2017",
    description: "The line follower robot is an autonomous robot which follows either black line in white area or white line in black area. The robot must be able to detect particular line and keep following it.",
    skills: ["Embedded Systems", "Problem Solving", "Embedded Software", "Software Development", "C (Programming Language)"],
    image: "/lovable-uploads/925c19f0-af3f-4353-ac81-d63f6964ceb4.png",
  }
];

// Awards data
const awards: Award[] = [
  {
    title: "2nd prize in Maze Solver Robot competition",
    issuer: "Robotics Competition ISET Sousse",
    date: "Jan 2018",
    icon: <Trophy className="h-6 w-6 text-yellow-500" />
  },
  {
    title: "2nd prize in Maze Solver Robot competition",
    issuer: "Robotics Competition CRATT Junior ISET Rades",
    date: "Jan 2017",
    icon: <Award className="h-6 w-6 text-yellow-500" />
  },
  {
    title: "2nd prize in All Terrain Robot competition",
    issuer: "Robotics Competition CRATT Junior ISET Rades",
    date: "Jan 2017",
    icon: <Trophy className="h-6 w-6 text-yellow-500" />
  }
];

const RoboticsCompetition = () => {
  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-r from-slate-900 to-slate-800 py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center text-center">
            <Bot size={64} className="text-blue-400 mb-4" />
            <h1 className="text-4xl font-bold text-white mb-4">Robotics Competition Portfolio</h1>
            <p className="text-xl text-slate-300 max-w-2xl">
              Showcasing my journey through robotics competitions and the autonomous robots I've developed
            </p>
            <div className="flex gap-4 mt-8">
              <Button asChild>
                <Link to="/" className="flex items-center gap-2">
                  Back to Home
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <section className="py-12 bg-slate-50 dark:bg-slate-950">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Robot Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white dark:bg-slate-800 rounded-lg overflow-hidden shadow-md">
              <img 
                src="/lovable-uploads/925c19f0-af3f-4353-ac81-d63f6964ceb4.png" 
                alt="Line Follower Robot" 
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-4">
                <h3 className="font-medium">Line Follower Robot</h3>
              </div>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-lg overflow-hidden shadow-md">
              <img 
                src="/lovable-uploads/309b8922-00a9-4832-8df3-6ada442c0108.png" 
                alt="Maze Solver Robot" 
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-4">
                <h3 className="font-medium">Maze Solver Robot</h3>
              </div>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-lg overflow-hidden shadow-md">
              <img 
                src="/lovable-uploads/c8880da3-3cc5-4d77-907f-9e3f25c9fd3f.png" 
                alt="All Terrain Robot" 
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-4">
                <h3 className="font-medium">All Terrain Robot</h3>
              </div>
            </div>
            <div className="bg-white dark:bg-slate-800 rounded-lg overflow-hidden shadow-md">
              <img 
                src="/lovable-uploads/ade2a6f7-46f7-4c0b-9001-d3f49c9cda72.png" 
                alt="Advanced Robot" 
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-4">
                <h3 className="font-medium">Advanced Robot</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-16 bg-slate-100 dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Awards & Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {awards.map((award, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader className="flex flex-row items-center gap-4">
                  {award.icon}
                  <div>
                    <CardTitle>{award.title}</CardTitle>
                    <CardDescription>{award.issuer} · {award.date}</CardDescription>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Robot Projects Section */}
      <section className="py-16 bg-white dark:bg-slate-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Robot Projects</h2>
          
          <Tabs defaultValue="all-terrain" className="max-w-4xl mx-auto">
            <TabsList className="grid grid-cols-3 mb-8">
              <TabsTrigger value="all-terrain">All Terrain</TabsTrigger>
              <TabsTrigger value="maze-solver">Maze Solver</TabsTrigger>
              <TabsTrigger value="line-follower">Line Follower</TabsTrigger>
            </TabsList>
            
            {robotProjects.map((project) => (
              <TabsContent key={project.id} value={project.id} className="space-y-4">
                <Card>
                  <div className="md:flex">
                    <div className="md:w-1/3 h-64 bg-slate-100 dark:bg-slate-700 flex items-center justify-center">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="md:w-2/3">
                      <CardHeader>
                        <CardTitle>{project.title}</CardTitle>
                        <CardDescription>{project.period}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="mb-4">{project.description}</p>
                        <div className="flex flex-wrap gap-2 mt-4">
                          {project.skills.map((skill, index) => (
                            <Badge key={index} variant="secondary">{skill}</Badge>
                          ))}
                        </div>
                      </CardContent>
                    </div>
                  </div>
                </Card>
                
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="technical-details">
                    <AccordionTrigger>Technical Details</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-4">
                        <h4 className="font-medium">Components Used:</h4>
                        <ul className="list-disc pl-5 space-y-2">
                          {project.id === "all-terrain" && (
                            <>
                              <li>4 DC motors with high torque</li>
                              <li>4 rubber wheels with treads for terrain grip</li>
                              <li>PS2 controller with wireless receiver</li>
                              <li>Arduino Mega microcontroller</li>
                              <li>Motor drivers for power control</li>
                              <li>12V battery pack</li>
                            </>
                          )}
                          {project.id === "maze-solver" && (
                            <>
                              <li>Arduino board</li>
                              <li>2 Ultrasonic sensors (front and right positioning)</li>
                              <li>L298 H-bridge motor driver</li>
                              <li>2 geared DC motors</li>
                              <li>12V battery</li>
                              <li>Custom chassis design for maze navigation</li>
                            </>
                          )}
                          {project.id === "line-follower" && (
                            <>
                              <li>Arduino Uno microcontroller</li>
                              <li>IR sensor array for line detection</li>
                              <li>2 DC motors with wheels</li>
                              <li>Motor driver board</li>
                              <li>Compact chassis design</li>
                              <li>9V battery power supply</li>
                            </>
                          )}
                        </ul>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="challenges">
                    <AccordionTrigger>Challenges & Solutions</AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-4">
                        {project.id === "all-terrain" && (
                          <>
                            <div className="mb-4">
                              <h4 className="font-medium">Challenges:</h4>
                              <ul className="list-disc pl-5 space-y-2">
                                <li>Balancing power consumption with motor torque requirements</li>
                                <li>Ensuring stable wireless communication at range</li>
                                <li>Designing a chassis that can handle uneven surfaces</li>
                              </ul>
                            </div>
                            <div>
                              <h4 className="font-medium">Solutions:</h4>
                              <ul className="list-disc pl-5 space-y-2">
                                <li>Used high-capacity batteries with efficient power distribution</li>
                                <li>Implemented signal amplification for the wireless controller</li>
                                <li>Designed flexible chassis with shock absorption capabilities</li>
                              </ul>
                            </div>
                          </>
                        )}
                        
                        {project.id === "maze-solver" && (
                          <>
                            <div className="mb-4">
                              <h4 className="font-medium">Challenges:</h4>
                              <ul className="list-disc pl-5 space-y-2">
                                <li>Accurate distance measurement in narrow corridors</li>
                                <li>Managing decision-making at maze intersections</li>
                                <li>Optimizing the wall-following algorithm for speed</li>
                              </ul>
                            </div>
                            <div>
                              <h4 className="font-medium">Solutions:</h4>
                              <ul className="list-disc pl-5 space-y-2">
                                <li>Calibrated sensors for precise short-range measurements</li>
                                <li>Implemented priority-based decision tree for path selection</li>
                                <li>Fine-tuned PID controller for smooth wall following</li>
                              </ul>
                            </div>
                          </>
                        )}
                        
                        {project.id === "line-follower" && (
                          <>
                            <div className="mb-4">
                              <h4 className="font-medium">Challenges:</h4>
                              <ul className="list-disc pl-5 space-y-2">
                                <li>Handling varying lighting conditions affecting sensor readings</li>
                                <li>Navigating sharp turns in the line path</li>
                                <li>Maintaining consistent speed while following the line</li>
                              </ul>
                            </div>
                            <div>
                              <h4 className="font-medium">Solutions:</h4>
                              <ul className="list-disc pl-5 space-y-2">
                                <li>Implemented dynamic threshold adjustment for sensor readings</li>
                                <li>Used weighted average algorithm for smoother turning</li>
                                <li>Developed proportional speed control based on curve detection</li>
                              </ul>
                            </div>
                          </>
                        )}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>
    </main>
  );
};

export default RoboticsCompetition;
