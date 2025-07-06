import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { AnimatedScrollWrapper } from '@/components/common/AnimatedScrollWrapper';

export function AboutMeSection({ id }: { id:string }) {
  return (
    <section id={id}>
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedScrollWrapper>
          <h2 className="section-title">About Me</h2>
        </AnimatedScrollWrapper>
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:gap-16">
          <AnimatedScrollWrapper delay={200}>
            <Card className="overflow-hidden shadow-xl">
              <Image
                src="https://res.cloudinary.com/dyre5kz3t/image/upload/v1751778921/WhatsApp_Image_2025-07-06_at_9.41.48_AM_amfxgs.jpg"
                alt="Chethan - Headshot"
                width={600}
                height={600}
                className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
                data-ai-hint="professional headshot"
              />
            </Card>
          </AnimatedScrollWrapper>
          <AnimatedScrollWrapper delay={400}>
            <div className="space-y-6 text-lg text-foreground/80">
              <p>
                Hi, I&apos;m <span className="font-semibold text-foreground">Chethan</span>, a creative and results-oriented developer with a deep passion for technology and innovation. My journey in the tech world has been driven by a relentless curiosity and a desire to build impactful digital experiences.
              </p>
              <p>
                I specialize in full-stack web development and AI integration, transforming complex challenges into elegant, user-friendly solutions. I thrive in dynamic environments where I can collaborate with teams to push the boundaries of what&apos;s possible.
              </p>
              <p>
                Beyond coding, I&apos;m an avid learner, always exploring new technologies and methodologies to stay at the forefront of the ever-evolving tech landscape. My commitment to growth is demonstrated by achievements such as becoming an <span className="font-semibold text-accent">AWS Certified (Developer – Associate)</span>. I believe in the power of technology to solve real-world problems and am excited to contribute to projects that make a difference.
              </p>
            </div>
          </AnimatedScrollWrapper>
        </div>
      </div>
    </section>
  );
}
