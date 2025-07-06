
import { HeroSection } from '@/components/sections/HeroSection';
import { AboutMeSection } from '@/components/sections/AboutMeSection';
import { SkillsSection } from '@/components/sections/SkillsSection';
import { ProjectsSection } from '@/components/sections/ProjectsSection';
import { ExperienceSection } from '@/components/sections/ExperienceSection';
import { ContactSection } from '@/components/sections/ContactSection';

export default function HomePage() {
  return (
    <>
      <HeroSection id="hero" />
      <AboutMeSection id="about" />
      <SkillsSection id="skills" />
      <ProjectsSection id="projects" />
      <ExperienceSection id="experience" />
      <ContactSection id="contact" />
    </>
  );
}
