
import React from 'react';
import { HandHeart } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { ProjectItem } from './ProjectCard';

interface VolunteeringCardProps {
  experience: ProjectItem;
}

const VolunteeringCard = ({ experience }: VolunteeringCardProps) => {
  return (
    <Link 
      to={experience.localPath || "#"}
      className="block h-full"
      onClick={(e) => {
        if (!experience.localPath) {
          e.preventDefault();
        }
      }}
    >
      <Card className="project-card flex flex-col h-full hover:shadow-lg transition-all duration-300">
        <div className="h-48 bg-white dark:bg-portfolio-blue-dark relative overflow-hidden">
          <img 
            src={experience.image} 
            alt={experience.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
            <div className="p-4">
              <CardTitle className="text-white">{experience.title}</CardTitle>
            </div>
          </div>
        </div>
        
        <CardContent className="pt-4 flex-grow">
          <CardDescription className="text-gray-700 dark:text-gray-300 mb-4">
            {experience.description}
          </CardDescription>
          
          <div className="flex flex-wrap gap-2 mt-2">
            {experience.tags.map((tag, tagIndex) => (
              <Badge key={tagIndex} variant="secondary" className="bg-portfolio-blue-lightest/30 text-portfolio-blue-dark dark:text-portfolio-blue-lightest dark:bg-portfolio-blue-medium/30">
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
        
        <CardFooter className="flex justify-end gap-3 border-t pt-4 mt-auto">
          <div className="text-portfolio-blue-medium hover:text-portfolio-blue-dark dark:text-portfolio-blue-lightest dark:hover:text-white">
            {experience.icon || <HandHeart size={20} />}
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default VolunteeringCard;
