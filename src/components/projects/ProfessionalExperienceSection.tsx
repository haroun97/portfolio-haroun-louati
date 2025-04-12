
import React, { useState } from 'react';
import { Briefcase, Code, Bot, Trophy, GraduationCap, Lightbulb, Plane, Award, Medal, HandHeart } from 'lucide-react';
import ExperienceCard from './ExperienceCard';
import ShowMoreButton from './ShowMoreButton';
import SectionTitle from './SectionTitle';
import { ProjectItem } from './ProjectCard';

const professionalExperiences: ProjectItem[] = [
  {
    title: "Siemens Healthineers",
    description: "Developing and implementing advanced diagnostics software solutions for healthcare systems.",
    image: "/lovable-uploads/2c12b290-f091-44ab-b535-e3fc89fe3301.png", 
    tags: ["Software Development", "Medical Technology", "Diagnostics"],
    localPath: "/siemens-experience",
    icon: <Briefcase size={20} />
  },
  {
    title: "Roche",
    description: "Working on innovative healthcare solutions and diagnostic systems.",
    image: "/lovable-uploads/0821873c-31c0-4049-abce-9b09466aec83.png",
    tags: ["Healthcare", "Diagnostics", "Research"],
    localPath: "/roche-experience",
    icon: <Briefcase size={20} />
  },
  {
    title: "Coding Betounsi",
    description: "Leading software development projects and technical initiatives.",
    image: "/lovable-uploads/0f1307dc-22fb-48af-ad49-4860776ab65b.png",
    tags: ["Software Development", "Team Leadership", "Project Management"],
    localPath: "/coding-betounsi-experience",
    icon: <Briefcase size={20} />
  },
  {
    title: "ESPRIT Internship",
    description: "Academic internship developing technical skills and industry experience.",
    image: "/lovable-uploads/3f02a935-1c51-449b-a5ef-e0b2a6fac9d8.png",
    tags: ["Internship", "Technical Development", "Academic"],
    localPath: "/esprit-internship-experience",
    icon: <Briefcase size={20} />
  },
  {
    title: "AKWEL Internship",
    description: "Industrial experience in mechanical and systems engineering.",
    image: "/lovable-uploads/f22477d8-4be7-4748-acdd-f49d97168bc6.png",
    tags: ["Mechanical Engineering", "Automotive", "Industrial"],
    localPath: "/akwel-internship-experience",
    icon: <Briefcase size={20} />
  },
  {
    title: "Silvatrim Internship",
    description: "Experience in manufacturing and production systems.",
    image: "/lovable-uploads/44e45b1f-3570-4dc3-b5f0-5782827edc9d.png",
    tags: ["Manufacturing", "Production", "Industrial"],
    localPath: "/silvatrim-experience",
    icon: <Briefcase size={20} />
  },
  {
    title: "Maintenance Experience",
    description: "Technical maintenance and system support role.",
    image: "/lovable-uploads/0fe50239-19a9-4be2-bd16-c25aabca71e8.png",
    tags: ["Technical Support", "Maintenance", "Engineering"],
    localPath: "/maintenance-experience",
    icon: <Briefcase size={20} />
  },
];

const ProfessionalExperienceSection = () => {
  const [showAllProfessional, setShowAllProfessional] = useState(false);
  const displayedProfessional = showAllProfessional ? professionalExperiences : professionalExperiences.slice(0, 3);
  
  return (
    <>
      <SectionTitle id="professional-experiences" title="Professional Experiences" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
        {displayedProfessional.map((exp, index) => (
          <ExperienceCard key={index} experience={exp} />
        ))}
      </div>
      
      {professionalExperiences.length > 3 && (
        <ShowMoreButton 
          showAll={showAllProfessional} 
          toggleShowAll={() => setShowAllProfessional(!showAllProfessional)} 
        />
      )}
    </>
  );
};

export default ProfessionalExperienceSection;
