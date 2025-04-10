import React, { useState } from 'react';
import { ExternalLink, Github, Code, Bot, Trophy, Briefcase, GraduationCap, Lightbulb, Plane, Award, Medal, HandHeart } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Button } from '@/components/ui/button';

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  github?: string;
  demo?: string;
  localPath?: string;
  icon?: JSX.Element;
}

const projects: Project[] = [
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
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' fill='%230a192f'/%3E%3Ctext x='50' y='50' font-size='20' text-anchor='middle' alignment-baseline='middle' font-family='monospace' fill='%233b82f6'%3E%3Ctspan x='50' y='45'%3E%26lt;/%26gt;%3C/tspan%3E%3Ctspan x='50' y='65'%3EProject%3C/tspan%3E%3C/text%3E%3C/svg%3E",
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

const professionalExperiences: Project[] = [
  {
    title: "Siemens Healthineers",
    description: "Developing and implementing advanced diagnostics software solutions for healthcare systems.",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' fill='%230a192f'/%3E%3Ctext x='50' y='50' font-size='20' text-anchor='middle' alignment-baseline='middle' font-family='monospace' fill='%233b82f6'%3E%3Ctspan x='50' y='45'%3E%26lt;/%26gt;%3C/tspan%3E%3Ctspan x='50' y='65'%3ESiemens%3C/tspan%3E%3C/text%3E%3C/svg%3E",
    tags: ["Software Development", "Medical Technology", "Diagnostics"],
    localPath: "/siemens-experience",
    icon: <Briefcase size={20} />
  },
  {
    title: "Roche",
    description: "Working on innovative healthcare solutions and diagnostic systems.",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' fill='%230a192f'/%3E%3Ctext x='50' y='50' font-size='20' text-anchor='middle' alignment-baseline='middle' font-family='monospace' fill='%233b82f6'%3E%3Ctspan x='50' y='45'%3E%26lt;/%26gt;%3C/tspan%3E%3Ctspan x='50' y='65'%3ERoche%3C/tspan%3E%3C/text%3E%3C/svg%3E",
    tags: ["Healthcare", "Diagnostics", "Research"],
    localPath: "/roche-experience",
    icon: <Briefcase size={20} />
  },
  {
    title: "Coding Betounsi",
    description: "Leading software development projects and technical initiatives.",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' fill='%230a192f'/%3E%3Ctext x='50' y='50' font-size='20' text-anchor='middle' alignment-baseline='middle' font-family='monospace' fill='%233b82f6'%3E%3Ctspan x='50' y='45'%3E%26lt;/%26gt;%3C/tspan%3E%3Ctspan x='50' y='65'%3ECoding%3C/tspan%3E%3C/text%3E%3C/svg%3E",
    tags: ["Software Development", "Team Leadership", "Project Management"],
    localPath: "/coding-betounsi-experience",
    icon: <Briefcase size={20} />
  },
  {
    title: "ESPRIT Internship",
    description: "Academic internship developing technical skills and industry experience.",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' fill='%230a192f'/%3E%3Ctext x='50' y='50' font-size='20' text-anchor='middle' alignment-baseline='middle' font-family='monospace' fill='%233b82f6'%3E%3Ctspan x='50' y='45'%3E%26lt;/%26gt;%3C/tspan%3E%3Ctspan x='50' y='65'%3EESPRIT%3C/tspan%3E%3C/text%3E%3C/svg%3E",
    tags: ["Internship", "Technical Development", "Academic"],
    localPath: "/esprit-internship-experience",
    icon: <Briefcase size={20} />
  },
  {
    title: "AKWEL Internship",
    description: "Industrial experience in mechanical and systems engineering.",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' fill='%230a192f'/%3E%3Ctext x='50' y='50' font-size='20' text-anchor='middle' alignment-baseline='middle' font-family='monospace' fill='%233b82f6'%3E%3Ctspan x='50' y='45'%3E%26lt;/%26gt;%3C/tspan%3E%3Ctspan x='50' y='65'%3EAKWEL%3C/tspan%3E%3C/text%3E%3C/svg%3E",
    tags: ["Mechanical Engineering", "Automotive", "Industrial"],
    localPath: "/akwel-internship-experience",
    icon: <Briefcase size={20} />
  },
  {
    title: "Silvatrim Experience",
    description: "Experience in manufacturing and production systems.",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' fill='%230a192f'/%3E%3Ctext x='50' y='50' font-size='20' text-anchor='middle' alignment-baseline='middle' font-family='monospace' fill='%233b82f6'%3E%3Ctspan x='50' y='45'%3E%26lt;/%26gt;%3C/tspan%3E%3Ctspan x='50' y='65'%3ESilvatrim%3C/tspan%3E%3C/text%3E%3C/svg%3E",
    tags: ["Manufacturing", "Production", "Industrial"],
    localPath: "/silvatrim-experience",
    icon: <Briefcase size={20} />
  },
  {
    title: "Maintenance Experience",
    description: "Technical maintenance and system support role.",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' fill='%230a192f'/%3E%3Ctext x='50' y='50' font-size='20' text-anchor='middle' alignment-baseline='middle' font-family='monospace' fill='%233b82f6'%3E%3Ctspan x='50' y='45'%3E%26lt;/%26gt;%3C/tspan%3E%3Ctspan x='50' y='65'%3EMaintenance%3C/tspan%3E%3C/text%3E%3C/svg%3E",
    tags: ["Technical Support", "Maintenance", "Engineering"],
    localPath: "/maintenance-experience",
    icon: <Briefcase size={20} />
  },
];

const volunteeringExperiences: Project[] = [
  {
    title: "Volunteering Experience",
    description: "Giving back to the community through education and technical training initiatives.",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' fill='%230a192f'/%3E%3Ctext x='50' y='50' font-size='20' text-anchor='middle' alignment-baseline='middle' font-family='monospace' fill='%2310b981'%3E%3Ctspan x='50' y='45'%3E%26lt;/%26gt;%3C/tspan%3E%3Ctspan x='50' y='65'%3EVolunteer%3C/tspan%3E%3C/text%3E%3C/svg%3E",
    tags: ["Teaching", "Robotics", "Education", "Community"],
    localPath: "/volunteering-experience",
    icon: <HandHeart size={20} />
  },
];

const awardsExperiences: Project[] = [
  {
    title: "Box-Covid Project Awards",
    description: "1st Prize in ESPRIT Projects Ball Event and Silver Medal among 200+ projects across all departments.",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' fill='%230a192f'/%3E%3Ctext x='50' y='50' font-size='20' text-anchor='middle' alignment-baseline='middle' font-family='monospace' fill='%23fbbf24'%3E%3Ctspan x='50' y='45'%3E%26lt;/%26gt;%3C/tspan%3E%3Ctspan x='50' y='65'%3EAwards%3C/tspan%3E%3C/text%3E%3C/svg%3E",
    tags: ["Box-Covid", "Recognition", "Excellence"],
    localPath: "/awards",
    icon: <Trophy size={20} />
  },
  {
    title: "Robotics Competition Awards",
    description: "Multiple awards for robotics competitions including maze-solving and all-terrain robot challenges.",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' fill='%230a192f'/%3E%3Ctext x='50' y='50' font-size='20' text-anchor='middle' alignment-baseline='middle' font-family='monospace' fill='%23fbbf24'%3E%3Ctspan x='50' y='45'%3E%26lt;/%26gt;%3C/tspan%3E%3Ctspan x='50' y='65'%3EMedal%3C/tspan%3E%3C/text%3E%3C/svg%3E",
    tags: ["Robotics", "Competition", "Innovation"],
    localPath: "/awards",
    icon: <Medal size={20} />
  },
];

const Projects = () => {
  const [showAllProfessional, setShowAllProfessional] = useState(false);
  const [showAllVolunteering, setShowAllVolunteering] = useState(false);
  const [showAllAwards, setShowAllAwards] = useState(false);
  const [showAllProjects, setShowAllProjects] = useState(false);
  
  const displayedProfessional = showAllProfessional ? professionalExperiences : professionalExperiences.slice(0, 3);
  const displayedVolunteering = showAllVolunteering ? volunteeringExperiences : volunteeringExperiences.slice(0, 3);
  const displayedAwards = showAllAwards ? awardsExperiences : awardsExperiences.slice(0, 3);
  const displayedProjects = showAllProjects ? projects : projects.slice(0, 3);
  
  return (
    <section id="projects" className="section-padding bg-white dark:bg-portfolio-blue-dark">
      <div className="container mx-auto">
        {/* Professional Experience Section */}
        <h2 id="professional-experiences" className="section-title">Professional Experiences</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
          {displayedProfessional.map((exp, index) => (
            <Link 
              key={index} 
              to={exp.localPath}
              className="block h-full"
            >
              <Card className="project-card flex flex-col h-full hover:shadow-lg transition-all duration-300">
                <div className="h-48 bg-portfolio-blue-dark relative overflow-hidden">
                  <img 
                    src={exp.image} 
                    alt={exp.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                    <div className="p-4">
                      <CardTitle className="text-white">{exp.title}</CardTitle>
                    </div>
                  </div>
                </div>
                
                <CardContent className="pt-4 flex-grow">
                  <CardDescription className="text-gray-700 dark:text-gray-300 mb-4">
                    {exp.description}
                  </CardDescription>
                  
                  <div className="flex flex-wrap gap-2 mt-2">
                    {exp.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary" className="bg-portfolio-blue-lightest/30 text-portfolio-blue-dark dark:text-portfolio-blue-lightest dark:bg-portfolio-blue-medium/30">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                
                <CardFooter className="flex justify-end gap-3 border-t pt-4 mt-auto">
                  <div className="text-portfolio-blue-medium hover:text-portfolio-blue-dark dark:text-portfolio-blue-lightest dark:hover:text-white">
                    {exp.icon || <Briefcase size={20} />}
                  </div>
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>
        
        {professionalExperiences.length > 3 && (
          <div className="flex justify-center mb-16">
            <Button 
              variant="outline" 
              onClick={() => setShowAllProfessional(!showAllProfessional)}
              className="border-portfolio-blue-medium text-portfolio-blue-medium dark:border-portfolio-blue-light dark:text-portfolio-blue-light hover:bg-portfolio-blue-light/10"
            >
              {showAllProfessional ? "Show Less" : "View More"}
            </Button>
          </div>
        )}
        
        {/* Volunteering Experience Section */}
        <h2 id="volunteering-experiences" className="section-title">Volunteering Experience</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
          {displayedVolunteering.map((exp, index) => (
            <Link 
              key={index} 
              to={exp.localPath}
              className="block h-full"
            >
              <Card className="project-card flex flex-col h-full hover:shadow-lg transition-all duration-300">
                <div className="h-48 bg-portfolio-blue-dark relative overflow-hidden">
                  <img 
                    src={exp.image} 
                    alt={exp.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                    <div className="p-4">
                      <CardTitle className="text-white">{exp.title}</CardTitle>
                    </div>
                  </div>
                </div>
                
                <CardContent className="pt-4 flex-grow">
                  <CardDescription className="text-gray-700 dark:text-gray-300 mb-4">
                    {exp.description}
                  </CardDescription>
                  
                  <div className="flex flex-wrap gap-2 mt-2">
                    {exp.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary" className="bg-portfolio-blue-lightest/30 text-portfolio-blue-dark dark:text-portfolio-blue-lightest dark:bg-portfolio-blue-medium/30">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                
                <CardFooter className="flex justify-end gap-3 border-t pt-4 mt-auto">
                  <div className="text-portfolio-blue-medium hover:text-portfolio-blue-dark dark:text-portfolio-blue-lightest dark:hover:text-white">
                    {exp.icon || <HandHeart size={20} />}
                  </div>
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>
        
        {volunteeringExperiences.length > 3 && (
          <div className="flex justify-center mb-16">
            <Button 
              variant="outline" 
              onClick={() => setShowAllVolunteering(!showAllVolunteering)}
              className="border-portfolio-blue-medium text-portfolio-blue-medium dark:border-portfolio-blue-light dark:text-portfolio-blue-light hover:bg-portfolio-blue-light/10"
            >
              {showAllVolunteering ? "Show Less" : "View More"}
            </Button>
          </div>
        )}
        
        {/* Awards Section */}
        <h2 id="awards" className="section-title">Awards & Achievements</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
          {displayedAwards.map((award, index) => (
            <Link 
              key={index} 
              to={award.localPath}
              className="block h-full"
            >
              <Card className="project-card flex flex-col h-full hover:shadow-lg transition-all duration-300 border-amber-200 dark:border-amber-800">
                <div className="h-48 bg-amber-50 dark:bg-amber-900/30 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-amber-500 dark:text-amber-400">
                      {award.icon || <Award size={64} />}
                    </div>
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
                      <Badge key={tagIndex} variant="secondary" className="bg-amber-100/50 text-amber-800 dark:text-amber-200 dark:bg-amber-800/30">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                
                <CardFooter className="flex justify-end gap-3 border-t pt-4 mt-auto">
                  <div className="text-amber-500 hover:text-amber-600 dark:text-amber-400 dark:hover:text-amber-300">
                    <Trophy size={20} />
                  </div>
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>
        
        {awardsExperiences.length > 3 && (
          <div className="flex justify-center mb-16">
            <Button 
              variant="outline" 
              onClick={() => setShowAllAwards(!showAllAwards)}
              className="border-amber-500 text-amber-600 dark:border-amber-400 dark:text-amber-400 hover:bg-amber-500/10"
            >
              {showAllAwards ? "Show Less" : "View More"}
            </Button>
          </div>
        )}
        
        {/* Projects Section */}
        <h2 id="featured-projects" className="section-title">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project, index) => (
            <Link 
              key={index} 
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
          ))}
        </div>
        
        {projects.length > 3 && (
          <div className="flex justify-center mt-8">
            <Button 
              variant="outline" 
              onClick={() => setShowAllProjects(!showAllProjects)}
              className="border-portfolio-blue-medium text-portfolio-blue-medium dark:border-portfolio-blue-light dark:text-portfolio-blue-light hover:bg-portfolio-blue-light/10"
            >
              {showAllProjects ? "Show Less" : "View More"}
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
