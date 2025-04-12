
import { useEffect } from 'react';
import ProjectsContainer from './projects/ProjectsContainer';
import { useLocation } from 'react-router-dom';
import { scrollToElement } from '@/utils/scrollUtils';

const Projects = () => {
  const location = useLocation();
  
  useEffect(() => {
    // If hash is present in the URL (e.g., /#projects), scroll to that section
    if (location.hash) {
      // Remove the # character
      const targetId = location.hash.substring(1);
      
      // Small delay to ensure the component is fully mounted
      setTimeout(() => {
        scrollToElement(targetId);
      }, 100);
    }
  }, [location]);

  return <ProjectsContainer />;
};

export default Projects;
