
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
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' fill='%230a192f'/%3E%3Ctext x='50' y='50' font-size='20' text-anchor='middle' alignment-baseline='middle' font-family='monospace' fill='%23fbbf24'%3E%3Ctspan x='50' y='45'%3E%26lt;/%26gt;%3C/tspan%3E%3Ctspan x='50' y='65'%3EAwards%3C/tspan%3E%3C/text%3E%3C/svg%3E",
    tags: ["Box-Covid", "Recognition", "Academic Excellence"],
    localPath: "/box-covid",
    icon: <Trophy size={20} />
  },
  {
    id: "box-covid-2nd",
    title: "Silver Medal for \"Box-Covid\" Project",
    description: "Ranked 2nd among 200+ projects across all departments at ESPRIT.",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' fill='%230a192f'/%3E%3Ctext x='50' y='50' font-size='20' text-anchor='middle' alignment-baseline='middle' font-family='monospace' fill='%23fbbf24'%3E%3Ctspan x='50' y='45'%3E%26lt;/%26gt;%3C/tspan%3E%3Ctspan x='50' y='65'%3EMedal%3C/tspan%3E%3C/text%3E%3C/svg%3E",
    tags: ["Box-Covid", "Recognition", "Academic Excellence"],
    localPath: "/box-covid",
    icon: <Medal size={20} />
  },
  {
    id: "maze-solver-iset",
    title: "2nd Prize – Maze Solver Robot Competition",
    description: "Secured 2nd place with a maze-solving robot built for autonomous navigation challenges - ISET Sousse.",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' fill='%230a192f'/%3E%3Ctext x='50' y='50' font-size='20' text-anchor='middle' alignment-baseline='middle' font-family='monospace' fill='%23fbbf24'%3E%3Ctspan x='50' y='45'%3E%26lt;/%26gt;%3C/tspan%3E%3Ctspan x='50' y='65'%3ERobotics%3C/tspan%3E%3C/text%3E%3C/svg%3E",
    tags: ["Robotics", "Competition", "Innovation"],
    localPath: "/robotics-competition",
    icon: <Medal size={20} />
  },
  {
    id: "all-terrain-robot",
    title: "2nd Prize – All Terrain Robot Competition",
    description: "Awarded for outstanding performance in the All Terrain Robot challenge - CRATT Junior Robotics Competition.",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' fill='%230a192f'/%3E%3Ctext x='50' y='50' font-size='20' text-anchor='middle' alignment-baseline='middle' font-family='monospace' fill='%23fbbf24'%3E%3Ctspan x='50' y='45'%3E%26lt;/%26gt;%3C/tspan%3E%3Ctspan x='50' y='65'%3ERobotics%3C/tspan%3E%3C/text%3E%3C/svg%3E",
    tags: ["Robotics", "Competition", "Innovation"],
    localPath: "/robotics-competition",
    icon: <Medal size={20} />
  },
  {
    id: "maze-solver-cratt",
    title: "2nd Prize – Maze Solver Robot Competition",
    description: "Earned 2nd place with an efficient maze-solving robot design - CRATT Junior Robotics Competition.",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' fill='%230a192f'/%3E%3Ctext x='50' y='50' font-size='20' text-anchor='middle' alignment-baseline='middle' font-family='monospace' fill='%23fbbf24'%3E%3Ctspan x='50' y='45'%3E%26lt;/%26gt;%3C/tspan%3E%3Ctspan x='50' y='65'%3ERobotics%3C/tspan%3E%3C/text%3E%3C/svg%3E",
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
