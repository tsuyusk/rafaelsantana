'use client'

import { useEffect, useState } from 'react';

type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

const useBreakpoint = (): Breakpoint => {
  const [breakpoint, setBreakpoint] = useState<Breakpoint>('lg');

  useEffect(() => {
    const handleWindowResize = () => {
      const windowWidth = window.innerWidth;
      let newBreakpoint: Breakpoint;

      if (windowWidth < 640) {
        newBreakpoint = 'xs';
      } else if (windowWidth < 768) {
        newBreakpoint = 'sm';
      } else if (windowWidth < 1024) {
        newBreakpoint = 'md';
      } else if (windowWidth < 1280) {
        newBreakpoint = 'lg';
      } else {
        newBreakpoint = 'xl';
      }

      setBreakpoint(newBreakpoint);
    };

    window.addEventListener('resize', handleWindowResize);
    handleWindowResize();

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  return breakpoint;
};

export { useBreakpoint };