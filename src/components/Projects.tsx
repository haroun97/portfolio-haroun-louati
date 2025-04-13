
import { useEffect } from 'react';
import ProjectsContainer from './projects/ProjectsContainer';
import { useLocation } from 'react-router-dom';
import { scrollToElement, handleUrlHash } from '@/utils/scrollUtils';

const Projects = () => {
  const location = useLocation();
  
  useEffect(() => {
    // If hash is present in the URL (e.g., /#projects), scroll to that section
    if (location.hash) {
      // Remove the # character
      const targetId = location.hash.substring(1);
      scrollToElement(targetId);
    }
  }, [location]);

  return <ProjectsContainer />;
};

export default Projects;
