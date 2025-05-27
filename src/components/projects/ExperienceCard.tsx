
import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { ProjectItem } from './ProjectCard';

interface ExperienceCardProps {
  experience: ProjectItem;
}

const ExperienceCard = ({ experience }: ExperienceCardProps) => {
  const navigate = useNavigate();
  
  const handleCardClick = () => {
    if (experience.localPath) {
      navigate(experience.localPath);
    }
  };
  
  // Replace "Diagnostics" with "Software Development" in description if present
  const updatedDescription = experience.description.replace("Diagnostics", "Software Development");
  
  return (
    <Card 
      className="project-card flex flex-col h-full hover:shadow-lg transition-all duration-300 cursor-pointer"
      onClick={handleCardClick}
    >
      <div className="h-48 bg-white dark:bg-portfolio-blue-dark relative overflow-hidden">
        <img 
          src={experience.image} 
          alt={experience.title}
          className="w-full h-full object-contain p-2"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
          <div className="p-4">
            <CardTitle className="text-white">{experience.title}</CardTitle>
          </div>
        </div>
      </div>
      
      <CardContent className="pt-4 flex-grow">
        <CardDescription className="text-gray-700 dark:text-gray-300 mb-4">
          {updatedDescription}
        </CardDescription>
        
        <div className="flex flex-wrap gap-2 mt-2">
          {experience.tags.map((tag, tagIndex) => (
            <Badge key={tagIndex} variant="secondary" className="bg-portfolio-blue-lightest/30 text-portfolio-blue-dark dark:text-portfolio-blue-lightest dark:bg-portfolio-blue-medium/30">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      
      <CardFooter className="flex justify-between items-center border-t pt-4 mt-auto">
        {experience.dateRange && (
          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
            <Calendar size={16} />
            <span>{experience.dateRange}</span>
          </div>
        )}
        
        <div className="text-portfolio-blue-medium hover:text-portfolio-blue-dark dark:text-portfolio-blue-lightest dark:hover:text-white">
          {experience.icon || <Briefcase size={20} />}
        </div>
      </CardFooter>
    </Card>
  );
};

export default ExperienceCard;
