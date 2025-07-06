
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CalendarDays } from 'lucide-react';

export interface Experience {
  companyLogoUrl: string;
  companyLogoAiHint: string;
  companyName: string;
  jobTitle: string;
  dates: string;
  descriptionPoints: string[];
}

interface ExperienceItemProps {
  experience: Experience;
}

export function ExperienceItem({ experience }: ExperienceItemProps) {
  return (
    <Card className="w-full shadow-lg hover:shadow-xl transition-shadow duration-300">
      <CardHeader className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pb-3">
        <Image
          src={experience.companyLogoUrl}
          alt={`${experience.companyName} logo`}
          width={50}
          height={50}
          className="rounded-md object-contain"
          data-ai-hint={experience.companyLogoAiHint}
        />
        <div className="flex-1">
          <CardTitle className="text-xl font-semibold">{experience.jobTitle}</CardTitle>
          <p className="text-md text-accent">{experience.companyName}</p>
          <div className="flex items-center text-sm text-muted-foreground mt-1">
            <CalendarDays className="mr-2 h-4 w-4" />
            <span>{experience.dates}</span>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <ul className="list-disc space-y-2 pl-5 text-sm text-foreground/80 leading-relaxed">
          {experience.descriptionPoints.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
