
"use client";

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AnimatedScrollWrapper } from '@/components/common/AnimatedScrollWrapper';
import { skillCategories } from '@/lib/constants';

export function SkillsSection({ id }: { id: string }) {
  return (
    <section id={id}>
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedScrollWrapper>
          <h2 className="section-title">My Expertise</h2>
        </AnimatedScrollWrapper>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, index) => (
            <AnimatedScrollWrapper key={category.title} delay={index * 150}>
              <Card className="h-full shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="flex items-center justify-center pb-4">
                  <CardTitle className="text-xl font-semibold">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-x-6 gap-y-4">
                    {category.skills.map((skill) => (
                      <div key={skill.name} className="flex items-center gap-3 transition-transform hover:translate-x-1">
                        <skill.icon className="h-6 w-6 text-accent/80" />
                        <span className="font-medium text-foreground/90">{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </AnimatedScrollWrapper>
          ))}
        </div>
      </div>
    </section>
  );
}
