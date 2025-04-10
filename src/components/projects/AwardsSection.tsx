
import React, { useState } from 'react';
import { Trophy, Medal } from 'lucide-react';
import AwardCard from './AwardCard';
import ShowMoreButton from './ShowMoreButton';
import SectionTitle from './SectionTitle';
import { ProjectItem } from './ProjectCard';

const awardsExperiences: ProjectItem[] = [
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

const AwardsSection = () => {
  const [showAllAwards, setShowAllAwards] = useState(false);
  const displayedAwards = showAllAwards ? awardsExperiences : awardsExperiences.slice(0, 3);
  
  return (
    <>
      <SectionTitle id="awards" title="Awards & Achievements" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
        {displayedAwards.map((award, index) => (
          <AwardCard key={index} award={award} />
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
