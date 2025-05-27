
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar } from 'lucide-react';

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  years: string;
  image?: string;
  description?: string;
}

interface EducationCardProps {
  education: EducationItem;
}

const EducationCard = ({ education }: EducationCardProps) => {
  return (
    <Card className="project-card flex flex-col h-full hover:shadow-lg transition-all duration-300">
      <div className="h-48 bg-white dark:bg-portfolio-blue-dark relative overflow-hidden">
        {education.image ? (
          <img 
            src={education.image} 
            alt={education.institution}
            className="w-full h-full object-contain p-2"
          />
        ) : (
          <div className="w-full h-full bg-portfolio-blue-dark flex items-center justify-center">
            <GraduationCap className="h-16 w-16 text-white" />
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
          <div className="p-4">
            <CardTitle className="text-white">{education.degree}</CardTitle>
          </div>
        </div>
      </div>
      
      <CardContent className="pt-4 flex-grow">
        <CardDescription className="text-gray-700 dark:text-gray-300 mb-4">
          <strong>{education.institution}</strong>
        </CardDescription>
        
        {education.description && (
          <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">
            {education.description}
          </p>
        )}
      </CardContent>
      
      <CardFooter className="flex justify-between items-center border-t pt-4 mt-auto">
        <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
          <Calendar size={16} />
          <span>{education.years}</span>
        </div>
        
        <div className="text-portfolio-blue-medium hover:text-portfolio-blue-dark dark:text-portfolio-blue-lightest dark:hover:text-white">
          <GraduationCap size={20} />
        </div>
      </CardFooter>
    </Card>
  );
};

export default EducationCard;
