
import React from 'react';
import { Trophy, Award } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ProjectItem } from './ProjectCard';

interface AwardCardProps {
  award: ProjectItem;
}

const AwardCard = ({ award }: AwardCardProps) => {
  return (
    <Card className="project-card flex flex-col h-full hover:shadow-lg transition-all duration-300">
      <div className="h-48 bg-portfolio-blue-dark relative overflow-hidden">
        <div className="w-full h-full bg-white dark:bg-white/90 flex items-center justify-center p-2">
          <img 
            src={award.image} 
            alt={award.title}
            className="w-full h-full object-contain"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
          <div className="p-4">
            <CardTitle className="text-white">{award.title}</CardTitle>
          </div>
        </div>
      </div>
      
      <CardContent className="pt-4 flex-grow">
        <CardDescription className="text-gray-700 dark:text-gray-300 mb-4">
          {award.description}
        </CardDescription>
        
        <div className="flex flex-wrap gap-2 mt-2">
          {award.tags.map((tag, tagIndex) => (
            <Badge key={tagIndex} variant="secondary" className="bg-portfolio-blue-lightest/30 text-portfolio-blue-dark dark:text-portfolio-blue-lightest dark:bg-portfolio-blue-medium/30">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      
      <CardFooter className="flex justify-end gap-3 border-t pt-4 mt-auto">
        <div className="text-portfolio-blue-medium hover:text-portfolio-blue-dark dark:text-portfolio-blue-lightest dark:hover:text-white">
          {award.icon || <Trophy size={20} />}
        </div>
      </CardFooter>
    </Card>
  );
};

export default AwardCard;
