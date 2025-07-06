
import { ProjectCard } from '@/components/common/ProjectCard';
import { AnimatedScrollWrapper } from '@/components/common/AnimatedScrollWrapper';
import { projectsData } from '@/lib/constants';

export function ProjectsSection({ id }: { id: string }) {
  return (
    <section id={id}>
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedScrollWrapper>
          <h2 className="section-title">Featured Projects</h2>
        </AnimatedScrollWrapper>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projectsData.map((project, index) => (
            <AnimatedScrollWrapper key={project.title} delay={index * 150}>
              <ProjectCard project={project} />
            </AnimatedScrollWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
