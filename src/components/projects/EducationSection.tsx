
import React from 'react';
import EducationCard, { EducationItem } from './EducationCard';
import SectionTitle from './SectionTitle';

const educationExperiences: EducationItem[] = [
  {
    id: "masters-esprit",
    degree: "Master's Degree in Computer Science",
    institution: "Private Higher School of Engineering and Technologies (ESPRIT), Tunisia",
    years: "2019–2022",
    image: "/lovable-uploads/039d1f43-7715-47f6-887a-aba82f2ea56d.png",
    description: "Specialized in embedded systems, software development, and mobile applications. Graduated with distinction and recognition for academic excellence."
  },
  {
    id: "bachelors-isetb",
    degree: "Bachelor's Degree in Electrical Engineering",
    institution: "Higher Institute of Technological Studies of Bizerte (ISETB), Tunisia",
    years: "2016–2019",
    image: "/lovable-uploads/a42907dd-29af-4946-a113-ba51f6861c80.png",
    description: "Foundation in electrical engineering principles, electronics, and automation systems. Strong background in mathematics and engineering fundamentals."
  }
];

const EducationSection = () => {
  return (
    <>
      <SectionTitle id="education" title="Education" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {educationExperiences.map((education) => (
          <EducationCard key={education.id} education={education} />
        ))}
      </div>
    </>
  );
};

export default EducationSection;
