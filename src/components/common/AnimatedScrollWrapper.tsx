
"use client";

import { useEffect, useRef, useState, type ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedScrollWrapperProps {
  children: ReactNode;
  className?: string;
  delay?: number; // Optional delay in ms
  threshold?: number; // Optional threshold for IntersectionObserver
}

export function AnimatedScrollWrapper({ 
  children, 
  className, 
  delay = 0,
  threshold = 0.1 
}: AnimatedScrollWrapperProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentRef = ref.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Apply delay if specified
          if (delay > 0) {
            setTimeout(() => setIsVisible(true), delay);
          } else {
            setIsVisible(true);
          }
          observer.unobserve(currentRef); // Stop observing once visible
        }
      },
      { threshold } // Trigger when specified percentage of the element is visible
    );

    observer.observe(currentRef);

    return () => {
      observer.unobserve(currentRef);
    };
  }, [delay, threshold]);

  return (
    <div
      ref={ref}
      className={cn(
        'transition-all duration-1000 ease-out',
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12', // Start further down for more noticeable effect
        className
      )}
    >
      {children}
    </div>
  );
}
