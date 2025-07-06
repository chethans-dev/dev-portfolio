
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Github, ExternalLink } from 'lucide-react';

export interface Project {
  title: string;
  description: string;
  imageUrl: string;
  imageAiHint: string;
  githubUrl?: string;
  liveUrl?: string;
  tags: string[];
}

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="flex flex-col h-full overflow-hidden shadow-lg transition-all duration-300 ease-in-out group [perspective:1000px] hover:shadow-2xl hover:-translate-y-1.5 hover:rotate-x-1 hover:rotate-y-1 hover:scale-[1.02]">
      <div className="relative w-full h-48 md:h-56 overflow-hidden">
        <Image
          src={project.imageUrl}
          alt={project.title}
          fill
          objectFit="cover"
          className="transition-transform duration-500"
          data-ai-hint={project.imageAiHint}
        />
      </div>
      <CardHeader className="pb-3">
        <CardTitle className="text-xl font-semibold">{project.title}</CardTitle>
        <div className="flex flex-wrap gap-2 pt-2">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">{tag}</Badge>
          ))}
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardDescription className="text-sm text-foreground/80 leading-relaxed">
          {project.description}
        </CardDescription>
      </CardContent>
      <CardFooter className="pt-4 flex flex-wrap gap-3">
        {project.githubUrl && (
          <Button variant="outline" size="sm" asChild className="border-primary text-primary hover:bg-primary/10">
            <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" /> GitHub
            </Link>
          </Button>
        )}
        {project.liveUrl && (
          <Button variant="outline" size="sm" asChild className="border-accent text-accent hover:bg-accent/10">
            <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
            </Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
