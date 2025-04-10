
import React from 'react';
import { Trophy, Award } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { ProjectItem } from './ProjectCard';

interface AwardCardProps {
  award: ProjectItem;
}

const AwardCard = ({ award }: AwardCardProps) => {
  return (
    <Link 
      to={award.localPath || "#"}
      className="block h-full"
      onClick={(e) => {
        if (!award.localPath) {
          e.preventDefault();
        }
      }}
    >
      <Card className="project-card flex flex-col h-full hover:shadow-lg transition-all duration-300">
        <div className="h-48 bg-white dark:bg-amber-900/30 relative overflow-hidden">
          <img 
            src={award.image} 
            alt={award.title}
            className="w-full h-full object-contain p-2"
          />
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
              <Badge key={tagIndex} variant="secondary" className="bg-amber-100/50 text-amber-800 dark:text-amber-200 dark:bg-amber-800/30">
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
        
        <CardFooter className="flex justify-end gap-3 border-t pt-4 mt-auto">
          <div className="text-amber-500 hover:text-amber-600 dark:text-amber-400 dark:hover:text-amber-300">
            {award.icon || <Trophy size={20} />}
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default AwardCard;
