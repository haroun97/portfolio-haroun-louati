
import { ExternalLink, Github, Code, Bot, Trophy, Briefcase } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  github?: string;
  demo?: string;
  localPath?: string;
  icon?: JSX.Element;
}

const projects: Project[] = [
  {
    title: "Professional Experience",
    description: "Overview of my professional experiences at Siemens Healthineers and Roche, showcasing industry projects and achievements.",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' fill='%230a192f'/%3E%3Ctext x='50' y='50' font-size='20' text-anchor='middle' alignment-baseline='middle' font-family='monospace' fill='%233b82f6'%3E%3Ctspan x='50' y='45'%3E%26lt;/%26gt;%3C/tspan%3E%3Ctspan x='50' y='65'%3EWork%3C/tspan%3E%3C/text%3E%3C/svg%3E",
    tags: ["Siemens Healthineers", "Roche", "Test Automation", "Resource Management"],
    localPath: "/professional-experience",
    icon: <Briefcase size={20} />
  },
  {
    title: "Siemens Healthineers Experience",
    description: "Professional experience as a Test Automation Engineer at Siemens Healthineers in Germany, focusing on radiography systems development.",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' fill='%230a192f'/%3E%3Ctext x='50' y='50' font-size='20' text-anchor='middle' alignment-baseline='middle' font-family='monospace' fill='%233b82f6'%3E%3Ctspan x='50' y='45'%3E%26lt;/%26gt;%3C/tspan%3E%3Ctspan x='50' y='65'%3EWork%3C/tspan%3E%3C/text%3E%3C/svg%3E",
    tags: ["Test Automation", "Python", "Electron", "C++"],
    localPath: "/siemens-experience",
    icon: <Briefcase size={20} />
  },
  {
    title: "Box-Covid",
    description: "An intelligent monitoring system that enables doctors to remotely monitor COVID-19 patients using sensors and a cross-platform application.",
    image: "/lovable-uploads/2043bb29-8e6c-4619-b395-3197dba69f81.png",
    tags: ["IoT", "AWS", "Raspberry Pi", "Mobile App"],
    localPath: "/box-covid"
  },
  {
    title: "Autonomous Robot Arm",
    description: "A machine learning and computer vision-based robot arm designed to assist people with reduced mobility in everyday tasks.",
    image: "/lovable-uploads/833ab8c3-1109-4160-9975-984c336d6563.png",
    tags: ["Computer Vision", "Arduino", "Machine Learning", "Python"],
    localPath: "/robot-arm"
  },
  {
    title: "Pan-Tilt-Head-Robot",
    description: "A camera system with pan-tilt mechanism for object and face detection and tracking using computer vision.",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' fill='%230a192f'/%3E%3Ctext x='50' y='50' font-size='20' text-anchor='middle' alignment-baseline='middle' font-family='monospace' fill='%233b82f6'%3E%3Ctspan x='50' y='45'%3E%26lt;/%26gt;%3C/tspan%3E%3Ctspan x='50' y='65'%3EProject%3C/tspan%3E%3C/text%3E%3C/svg%3E",
    tags: ["Computer Vision", "Arduino", "OpenCV", "Python"],
    localPath: "/pan-tilt-robot"
  },
  {
    title: "Robotics Competition",
    description: "A showcase of custom-built robots for competitions, including All Terrain, Maze Solver, and Line Follower robots with multiple awards.",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' fill='%230a192f'/%3E%3Ctext x='50' y='50' font-size='20' text-anchor='middle' alignment-baseline='middle' font-family='monospace' fill='%233b82f6'%3E%3Ctspan x='50' y='45'%3E%26lt;/%26gt;%3C/tspan%3E%3Ctspan x='50' y='65'%3ERobot%3C/tspan%3E%3C/text%3E%3C/svg%3E",
    tags: ["Embedded Systems", "Arduino", "Robotics", "C Programming"],
    localPath: "/robotics-competition",
    icon: <Bot size={20} />
  },
  {
    title: "E-commerce Platform",
    description: "A full-stack e-commerce application with product listings, shopping cart, and secure checkout.",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' fill='%230a192f'/%3E%3Ctext x='50' y='50' font-size='20' text-anchor='middle' alignment-baseline='middle' font-family='monospace' fill='%233b82f6'%3E%3Ctspan x='50' y='45'%3E%26lt;/%26gt;%3C/tspan%3E%3Ctspan x='50' y='65'%3EProject%3C/tspan%3E%3C/text%3E%3C/svg%3E",
    tags: ["React", "Node.js", "MongoDB", "Stripe API"],
    github: "https://github.com/yourusername/ecommerce-platform",
    demo: "https://ecommerce-demo.example.com"
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section-padding bg-white dark:bg-portfolio-blue-dark">
      <div className="container mx-auto">
        <h2 className="section-title">Featured Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="project-card">
              <div className="h-48 bg-portfolio-blue-dark relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                  <div className="p-4">
                    <CardTitle className="text-white">{project.title}</CardTitle>
                  </div>
                </div>
              </div>
              
              <CardContent className="pt-4">
                <CardDescription className="text-gray-700 dark:text-gray-300 mb-4">
                  {project.description}
                </CardDescription>
                
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary" className="bg-portfolio-blue-lightest/30 text-portfolio-blue-dark dark:text-portfolio-blue-lightest dark:bg-portfolio-blue-medium/30">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              
              <CardFooter className="flex justify-end gap-3 border-t pt-4">
                {project.github && (
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-portfolio-blue-medium hover:text-portfolio-blue-dark dark:text-portfolio-blue-lightest dark:hover:text-white"
                  >
                    <Github size={20} />
                  </a>
                )}
                
                {project.demo && (
                  <a 
                    href={project.demo} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-portfolio-blue-medium hover:text-portfolio-blue-dark dark:text-portfolio-blue-lightest dark:hover:text-white"
                  >
                    <ExternalLink size={20} />
                  </a>
                )}
                
                {project.localPath && (
                  <Link 
                    to={project.localPath}
                    className="text-portfolio-blue-medium hover:text-portfolio-blue-dark dark:text-portfolio-blue-lightest dark:hover:text-white"
                  >
                    {project.icon || <Code size={20} />}
                  </Link>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
