
import React, { useState } from 'react';
import { Trophy, Medal } from 'lucide-react';
import AwardCard from './AwardCard';
import ShowMoreButton from './ShowMoreButton';
import SectionTitle from './SectionTitle';
import { ProjectItem } from './ProjectCard';

const awardsExperiences: ProjectItem[] = [
  {
    id: "box-covid-1st",
    title: "1st Prize – \"Box-Covid\" Project",
    description: "Recognized as the best project in the 4th year – SLEAM specialization (Embedded Systems & Software and Mobile Development).",
    image: "/lovable-uploads/ac2f3304-5a81-47d3-89c1-062d394f4cf0.png",
    tags: ["Box-Covid", "Recognition", "Academic Excellence"],
    localPath: "/box-covid",
    icon: <Trophy size={20} />
  },
  {
    id: "box-covid-2nd",
    title: "Silver Medal for \"Box-Covid\" Project",
    description: "Ranked 2nd among 200+ projects across all departments at ESPRIT.",
    image: "/lovable-uploads/f2f8fc35-6bbd-4b43-bc1d-dbac118bec7a.png",
    tags: ["Box-Covid", "Recognition", "Academic Excellence"],
    localPath: "/box-covid",
    icon: <Medal size={20} />
  },
  {
    id: "maze-solver-iset",
    title: "2nd Prize – Maze Solver Robot Competition",
    description: "Secured 2nd place with a maze-solving robot built for autonomous navigation challenges - ISET Sousse.",
    image: "/lovable-uploads/f2f8fc35-6bbd-4b43-bc1d-dbac118bec7a.png",
    tags: ["Robotics", "Competition", "Innovation"],
    localPath: "/robotics-competition",
    icon: <Medal size={20} />
  },
  {
    id: "all-terrain-robot",
    title: "2nd Prize – All Terrain Robot Competition",
    description: "Awarded for outstanding performance in the All Terrain Robot challenge - CRATT Junior Robotics Competition.",
    image: "/lovable-uploads/f2f8fc35-6bbd-4b43-bc1d-dbac118bec7a.png",
    tags: ["Robotics", "Competition", "Innovation"],
    localPath: "/robotics-competition",
    icon: <Medal size={20} />
  },
  {
    id: "maze-solver-cratt",
    title: "2nd Prize – Maze Solver Robot Competition",
    description: "Earned 2nd place with an efficient maze-solving robot design - CRATT Junior Robotics Competition.",
    image: "/lovable-uploads/f2f8fc35-6bbd-4b43-bc1d-dbac118bec7a.png",
    tags: ["Robotics", "Competition", "Innovation"],
    localPath: "/robotics-competition",
    icon: <Medal size={20} />
  }
];

const AwardsSection = () => {
  const [showAllAwards, setShowAllAwards] = useState(false);
  const displayedAwards = showAllAwards ? awardsExperiences : awardsExperiences.slice(0, 3);
  
  return (
    <>
      <SectionTitle id="awards" title="Awards & Achievements" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
        {displayedAwards.map((award, index) => (
          <AwardCard key={award.id || index} award={award} />
        ))}
      </div>
      
      {awardsExperiences.length > 3 && (
        <ShowMoreButton 
          showAll={showAllAwards} 
          toggleShowAll={() => setShowAllAwards(!showAllAwards)} 
          isAmber={true}
        />
      )}
    </>
  );
};

export default AwardsSection;
