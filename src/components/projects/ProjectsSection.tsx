
import React, { useState } from 'react';
import { Code, Bot, Lightbulb, Plane } from 'lucide-react';
import ProjectCard from './ProjectCard';
import ShowMoreButton from './ShowMoreButton';
import SectionTitle from './SectionTitle';
import { ProjectItem } from './ProjectCard';

const projects: ProjectItem[] = [
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
    localPath: "/robot-arm#robotArmHero"
  },
  {
    title: "Pan-Tilt-Head-Robot",
    description: "A camera system with pan-tilt mechanism for object and face detection and tracking using computer vision.",
    image: "/lovable-uploads/025885b2-7c7b-453f-a374-1214fc8015fb.png",
    tags: ["Computer Vision", "Arduino", "OpenCV", "Python"],
    localPath: "/pan-tilt-robot",
    icon: <Bot size={20} />
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
    title: "Flights & Car Rentals Booking",
    description: "A full-stack booking application for a travel agency with customer, agent, and administrator interfaces.",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' fill='%230a192f'/%3E%3Ctext x='50' y='50' font-size='20' text-anchor='middle' alignment-baseline='middle' font-family='monospace' fill='%233b82f6'%3E%3Ctspan x='50' y='45'%3E%26lt;/%26gt;%3C/tspan%3E%3Ctspan x='50' y='65'%3EProject%3C/tspan%3E%3C/text%3E%3C/svg%3E",
    tags: ["C Programming", "Glade Interface", "Software Development"],
    localPath: "/flights-car-rentals",
    icon: <Plane size={20} />
  },
  {
    title: "Smart Recycled Chandelier",
    description: "A chandelier created from recycled materials featuring smartphone-controlled RGB LED lighting via Bluetooth.",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' fill='%230a192f'/%3E%3Ctext x='50' y='50' font-size='20' text-anchor='middle' alignment-baseline='middle' font-family='monospace' fill='%233b82f6'%3E%3Ctspan x='50' y='45'%3E%26lt;/%26gt;%3C/tspan%3E%3Ctspan x='50' y='65'%3EProject%3C/tspan%3E%3C/text%3E%3C/svg%3E",
    tags: ["Arduino", "Bluetooth", "Embedded Systems", "Sustainable Design"],
    localPath: "/chandelier-project",
    icon: <Lightbulb size={20} />
  },
];

const ProjectsSection = () => {
  const [showAllProjects, setShowAllProjects] = useState(false);
  const displayedProjects = showAllProjects ? projects : projects.slice(0, 3);
  
  return (
    <>
      <SectionTitle id="featured-projects" title="Featured Projects" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {displayedProjects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
      
      {projects.length > 3 && (
        <div className="flex justify-center mt-8">
          <ShowMoreButton 
            showAll={showAllProjects} 
            toggleShowAll={() => setShowAllProjects(!showAllProjects)} 
          />
        </div>
      )}
    </>
  );
};

export default ProjectsSection;
