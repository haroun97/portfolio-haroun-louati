
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap } from 'lucide-react';

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
    <Card className="h-full hover:shadow-lg transition-all duration-300 border-blue-100 dark:border-blue-900/20">
      <CardHeader className="flex flex-row items-center gap-4 bg-blue-50 dark:bg-blue-900/20">
        <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full">
          {education.image ? (
            <div className="w-16 h-16 overflow-hidden rounded-full">
              <img src={education.image} alt={education.institution} className="w-full h-full object-contain" />
            </div>
          ) : (
            <GraduationCap className="h-8 w-8 text-blue-600" />
          )}
        </div>
        <div className="flex-1">
          <CardTitle className="text-lg">{education.degree}</CardTitle>
          <p className="text-sm text-muted-foreground">{education.institution}</p>
        </div>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-900/20 dark:text-blue-300 dark:border-blue-700">
              {education.years}
            </Badge>
          </div>
          
          {education.description && (
            <p className="text-gray-700 dark:text-gray-300 text-sm">
              {education.description}
            </p>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default EducationCard;
