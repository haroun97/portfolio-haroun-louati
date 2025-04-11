
import { ExternalLink, Github, Code } from 'lucide-react';
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
}

const projects: Project[] = [
  {
    title: "Box-Covid",
    description: "An intelligent monitoring system that enables doctors to remotely monitor COVID-19 patients using sensors and a cross-platform application.",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' fill='%230a192f'/%3E%3Ctext x='50' y='50' font-size='20' text-anchor='middle' alignment-baseline='middle' font-family='monospace' fill='%23ea580c'%3E%3Ctspan x='50' y='45'%3E%26lt;/%26gt;%3C/tspan%3E%3Ctspan x='50' y='65'%3ECovid%3C/tspan%3E%3C/text%3E%3C/svg%3E",
    tags: ["IoT", "AWS", "Raspberry Pi", "Mobile App"],
    localPath: "/box-covid"
  },
  {
    title: "E-commerce Platform",
    description: "A full-stack e-commerce application with product listings, shopping cart, and secure checkout.",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' fill='%230a192f'/%3E%3Ctext x='50' y='50' font-size='20' text-anchor='middle' alignment-baseline='middle' font-family='monospace' fill='%233b82f6'%3E%3Ctspan x='50' y='45'%3E%26lt;/%26gt;%3C/tspan%3E%3Ctspan x='50' y='65'%3EProject%3C/tspan%3E%3C/text%3E%3C/svg%3E",
    tags: ["React", "Node.js", "MongoDB", "Stripe API"],
    github: "https://github.com/yourusername/ecommerce-platform",
    demo: "https://ecommerce-demo.example.com"
  },
  {
    title: "Task Management App",
    description: "A productivity application for managing tasks, with features like drag-and-drop, tags, and reminders.",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' fill='%230a192f'/%3E%3Ctext x='50' y='50' font-size='20' text-anchor='middle' alignment-baseline='middle' font-family='monospace' fill='%233b82f6'%3E%3Ctspan x='50' y='45'%3E%26lt;/%26gt;%3C/tspan%3E%3Ctspan x='50' y='65'%3EProject%3C/tspan%3E%3C/text%3E%3C/svg%3E",
    tags: ["TypeScript", "Redux", "Firebase", "Material UI"],
    github: "https://github.com/yourusername/task-manager",
    demo: "https://task-app-demo.example.com"
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
                    <Code size={20} />
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
