
import React, { useState } from 'react';
import { HandHeart } from 'lucide-react';
import VolunteeringCard from './VolunteeringCard';
import ShowMoreButton from './ShowMoreButton';
import SectionTitle from './SectionTitle';
import { ProjectItem } from './ProjectCard';

const volunteeringExperiences: ProjectItem[] = [
  {
    title: "Volunteering Experience",
    description: "Giving back to the community through education and technical training initiatives.",
    image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' fill='%230a192f'/%3E%3Ctext x='50' y='50' font-size='20' text-anchor='middle' alignment-baseline='middle' font-family='monospace' fill='%2310b981'%3E%3Ctspan x='50' y='45'%3E%26lt;/%26gt;%3C/tspan%3E%3Ctspan x='50' y='65'%3EVolunteer%3C/tspan%3E%3C/text%3E%3C/svg%3E",
    tags: ["Teaching", "Robotics", "Education", "Community"],
    localPath: "/volunteering-experience",
    icon: <HandHeart size={20} />
  },
];

const VolunteeringSection = () => {
  const [showAllVolunteering, setShowAllVolunteering] = useState(false);
  const displayedVolunteering = showAllVolunteering ? volunteeringExperiences : volunteeringExperiences.slice(0, 3);
  
  return (
    <>
      <SectionTitle id="volunteering-experiences" title="Volunteering Experience" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
        {displayedVolunteering.map((exp, index) => (
          <VolunteeringCard key={index} experience={exp} />
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
