import Link from 'next/link';
import { Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { href: "https://github.com/chethans-dev", icon: Github, label: "GitHub" },
    { href: "https://www.linkedin.com/in/chethans-dev", icon: Linkedin, label: "LinkedIn" },
    { href: "mailto:chethans4667@gmail.com", icon: Mail, label: "Email" },
  ];

  return (
    <footer className="border-t border-border/50 bg-background/50 backdrop-blur-lg">
      <div className="container mx-auto flex flex-col items-center justify-between gap-6 px-4 py-10 md:px-6 md:flex-row">
        <p className="text-sm text-muted-foreground">
          &copy; {currentYear} Chethan. All rights reserved.
        </p>
        <div className="flex items-center gap-2">
          {socialLinks.map((social) => (
            <Button key={social.label} variant="ghost" size="icon" asChild>
              <Link href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label}>
                <social.icon className="h-5 w-5 text-muted-foreground hover:text-accent transition-colors" />
              </Link>
            </Button>
          ))}
        </div>
      </div>
    </footer>
  );
}
