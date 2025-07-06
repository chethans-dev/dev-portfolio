
"use client";

import { ExperienceItem } from '@/components/common/ExperienceItem';
import { AnimatedScrollWrapper } from '@/components/common/AnimatedScrollWrapper';
import { initialExperiencesData } from '@/lib/constants';

export function ExperienceSection({ id }: { id: string }) {
  return (
    <section id={id}>
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedScrollWrapper>
          <h2 className="section-title">My Journey</h2>
        </AnimatedScrollWrapper>

        <div className="relative mt-12 space-y-10">
          {/* Timeline line */}
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-border rounded-full md:left-1/2 md:-translate-x-1/2"></div>
          
          {initialExperiencesData.map((exp, index) => (
            <AnimatedScrollWrapper key={exp.companyName + exp.jobTitle} delay={index * 200}>
              <div className="relative pl-8 md:pl-0">
                 {/* Timeline dot */}
                <div className="absolute left-0 top-2 h-3 w-3 rounded-full bg-accent border-2 border-background md:left-1/2 md:-translate-x-1/2 md:transform"></div>
                <div className={`flex flex-col items-start md:items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className="md:w-5/12"></div> {/* Spacer for timeline layout */}
                  <div className="w-full md:w-7/12">
                       <ExperienceItem experience={exp} />
                  </div>
                </div>
              </div>
            </AnimatedScrollWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
