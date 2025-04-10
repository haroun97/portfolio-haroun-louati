
import React from 'react';
import { ExternalLink, Github, Code } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

export interface ProjectItem {
  title: string;
  description: string;
  image: string;
  tags: string[];
  github?: string;
  demo?: string;
  localPath?: string;
  icon?: JSX.Element;
}

interface ProjectCardProps {
  project: ProjectItem;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <Link 
      to={project.localPath || "#"} 
      className="block h-full"
      onClick={(e) => {
        if (!project.localPath) {
          e.preventDefault();
        }
      }}
    >
      <Card className="project-card flex flex-col h-full hover:shadow-lg transition-all duration-300">
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
        
        <CardContent className="pt-4 flex-grow">
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
        
        <CardFooter className="flex justify-end gap-3 border-t pt-4 mt-auto">
          {project.github && (
            <a 
              href={project.github} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-portfolio-blue-medium hover:text-portfolio-blue-dark dark:text-portfolio-blue-lightest dark:hover:text-white"
              onClick={(e) => e.stopPropagation()}
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
              onClick={(e) => e.stopPropagation()}
            >
              <ExternalLink size={20} />
            </a>
          )}
          
          <div className="text-portfolio-blue-medium hover:text-portfolio-blue-dark dark:text-portfolio-blue-lightest dark:hover:text-white">
            {project.icon || <Code size={20} />}
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default ProjectCard;
