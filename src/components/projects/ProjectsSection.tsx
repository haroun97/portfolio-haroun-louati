
import React, { useState } from 'react';
import { Code, Bot, Lightbulb, Plane, Globe } from 'lucide-react';
import ProjectCard from './ProjectCard';
import ShowMoreButton from './ShowMoreButton';
import SectionTitle from './SectionTitle';
import { ProjectItem } from './ProjectCard';

const projects: ProjectItem[] = [
  {
    title: "Travel Blog Website",
    description: "A travel blog website to share nice places to visit and the best activities to do. Discover breathtaking destinations and travel experiences.",
    image: "/lovable-uploads/51443241-cb1f-4560-8a14-c5eae3612e95.png",
    tags: ["Travel", "Blog", "Web Development", "Tourism"],
    demo: "https://www.harountravel.com/",
    icon: <Globe size={20} />
  },
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
    localPath: "/robot-arm"
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
    image: "/lovable-uploads/3d31a27a-81c9-492b-a359-f378caede6ea.png",
    tags: ["Embedded Systems", "Arduino", "Robotics", "C Programming"],
    localPath: "/robotics-competition",
    icon: <Bot size={20} />
  },
  {
    title: "Flights & Car Rentals Booking",
    description: "A full-stack booking application for a travel agency with customer, agent, and administrator interfaces.",
    image: "/lovable-uploads/410fd57c-b32e-4bfa-be78-2b43c5c2faa7.png",
    tags: ["C Programming", "Glade Interface", "Software Development"],
    localPath: "/flights-car-rentals",
    icon: <Plane size={20} />
  },
  {
    title: "Smart Recycled Chandelier",
    description: "A chandelier created from recycled materials featuring smartphone-controlled RGB LED lighting via Bluetooth.",
    image: "/lovable-uploads/fea13577-7147-4458-9a24-3fe78dee9ec9.png", 
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
            sectionId="featured-projects"
          />
        </div>
      )}
    </>
  );
};

export default ProjectsSection;
