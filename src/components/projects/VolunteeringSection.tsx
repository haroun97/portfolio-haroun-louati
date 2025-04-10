
import React, { useState } from 'react';
import { HandHeart, School, Users } from 'lucide-react';
import VolunteeringCard from './VolunteeringCard';
import ShowMoreButton from './ShowMoreButton';
import SectionTitle from './SectionTitle';
import { ProjectItem } from './ProjectCard';

const volunteeringExperiences: ProjectItem[] = [
  {
    id: "ieee-training",
    title: "Training Manager - IEEE ESPRIT",
    description: "Leading training sessions for students on various technical topics and organizing training for SOS village.",
    image: "/lovable-uploads/e59e60bc-bfed-4b21-9d1b-b7ee66697331.png",
    tags: ["Teaching", "IEEE", "Education", "Training"],
    localPath: "/volunteering-experience",
    icon: <School className="h-5 w-5" />
  },
  {
    id: "ieee-robotics",
    title: "Robotics Instructor - IEEE ESPRIT",
    description: "Teaching robotics principles and practices to students of varying levels with hands-on training.",
    image: "/lovable-uploads/e59e60bc-bfed-4b21-9d1b-b7ee66697331.png",
    tags: ["Robotics", "IEEE", "Education", "Technology"],
    localPath: "/volunteering-experience",
    icon: <School className="h-5 w-5" />
  },
  {
    id: "gyl-robotics",
    title: "Robotics Instructor for Kids - GYL",
    description: "Led Micro:Bit robotics workshops for children during ALHAZEN BIN AL-HAYTHAM Olympiad for Science and Mathematics.",
    image: "/lovable-uploads/1fe3082a-4322-4d24-9b32-c125e0e13e7a.png",
    tags: ["Robotics", "Education", "Micro:Bit", "Children"],
    localPath: "/volunteering-experience",
    icon: <School className="h-5 w-5" />
  },
  {
    id: "jci-member",
    title: "Member - JCI Aousja",
    description: "Assisted in organizing community-building events and initiatives for positive change in communities.",
    image: "/lovable-uploads/33980929-9a59-4bc3-810a-44b911375c86.png",
    tags: ["Event Organization", "Community", "Leadership", "Networking"],
    localPath: "/volunteering-experience",
    icon: <Users className="h-5 w-5" />
  }
];

const VolunteeringSection = () => {
  const [showAllVolunteering, setShowAllVolunteering] = useState(false);
  const displayedVolunteering = showAllVolunteering ? volunteeringExperiences : volunteeringExperiences.slice(0, 3);
  
  return (
    <>
      <SectionTitle id="volunteering-experiences" title="Volunteering Experience" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
        {displayedVolunteering.map((exp, index) => (
          <VolunteeringCard key={exp.id || index} experience={exp} />
        ))}
      </div>
      
      {volunteeringExperiences.length > 3 && (
        <ShowMoreButton 
          showAll={showAllVolunteering} 
          toggleShowAll={() => setShowAllVolunteering(!showAllVolunteering)} 
        />
      )}
    </>
  );
};

export default VolunteeringSection;
