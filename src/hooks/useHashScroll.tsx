
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { handleUrlHash } from '@/utils/scrollUtils';

/**
 * Hook that handles scrolling to elements based on URL hash
 */
export function useHashScroll() {
  const location = useLocation();
  
  useEffect(() => {
    handleUrlHash();
  }, [location]);
}
