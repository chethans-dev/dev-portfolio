"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';
import { AnimatedScrollWrapper } from '@/components/common/AnimatedScrollWrapper';

export function HeroSection({ id }: { id: string }) {
  return (
    <section id={id} className="relative flex min-h-screen items-center justify-center bg-transparent py-20 text-center overflow-hidden">
      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <AnimatedScrollWrapper delay={100}>
          <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
            <span className="block">Hello, I&apos;m </span>
            <span className="block text-accent">Chethan</span>
          </h1>
        </AnimatedScrollWrapper>
        <AnimatedScrollWrapper delay={300}>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-foreground/80 sm:text-xl md:text-2xl">
            A <span className="font-semibold text-foreground">Visionary Developer</span> crafting innovative solutions where web development and AI converge.
          </p>
        </AnimatedScrollWrapper>
        <AnimatedScrollWrapper delay={500}>
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <Button variant="outline" size="lg" asChild className="border-accent text-accent hover:bg-accent/10 hover:text-accent shadow-lg transform hover:scale-105 transition-transform duration-200">
              <Link href="#projects">
                View My Work
                <ArrowDown className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </AnimatedScrollWrapper>
      </div>
    </section>
  );
}
