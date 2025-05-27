
import React from 'react';
import ProfessionalExperienceSection from './ProfessionalExperienceSection';
import VolunteeringSection from './VolunteeringSection';
import AwardsSection from './AwardsSection';
import EducationSection from './EducationSection';
import ProjectsSection from './ProjectsSection';

const ProjectsContainer = () => {
  return (
    <section id="projects" className="section-padding bg-white dark:bg-portfolio-blue-dark">
      <div className="container mx-auto">
        <ProfessionalExperienceSection />
        <ProjectsSection />
        <EducationSection />
        <VolunteeringSection />
        <AwardsSection />
      </div>
    </section>
  );
};

export default ProjectsContainer;
