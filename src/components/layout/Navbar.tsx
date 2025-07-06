
"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Rocket, Camera, Home } from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
  { label: 'About', href: '/#about' },
  { label: 'Skills', href: '/#skills' },
  { label: 'Projects', href: '/#projects' },
  { label: 'Experience', href: '/#experience' },
  { label: 'Contact', href: '/#contact' },
];

export function Navbar() {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('');
  const pathname = usePathname();
  const isPhotographyPage = pathname.startsWith('/photography');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Only run scroll-based highlighting on the homepage
      if (pathname === '/') {
        const sections = navItems
          .filter((item) => item.href.startsWith('/#'))
          .map((item) => document.getElementById(item.href.substring(2)));

        let currentSectionId = '';
        const navHeightOffset = 150; 

        for (const section of sections) {
          if (section && section.offsetTop <= window.scrollY + navHeightOffset) {
            currentSectionId = section.id;
          }
        }
        
        // Special case for contact section when at the very bottom of the page
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 50) {
          currentSectionId = 'contact';
        }

        setActiveLink(currentSectionId ? `/#${currentSectionId}` : '');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Run on mount to set initial state

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [pathname]);

  // Effect to handle page changes
  useEffect(() => {
    // If we navigate away from the homepage, clear the active section link.
    // The camera/home button highlight is handled by the `isPhotographyPage` boolean.
    if (pathname !== '/') {
      setActiveLink('');
    }
  }, [pathname]);


  const closeSheet = () => setIsSheetOpen(false);

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full transition-all duration-300",
      isScrolled ? "bg-background/80 backdrop-blur-lg border-b border-border/50 shadow-md" : "bg-transparent"
    )}>
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2 text-2xl font-bold" onClick={closeSheet}>
          <Rocket className="h-7 w-7 text-accent" />
          <span>Chethan<span className="text-accent">Portfolio</span></span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <Button 
              key={item.label} 
              variant="ghost" 
              asChild 
              className={cn(
                "text-foreground/80 hover:text-accent hover:bg-accent/10 transition-colors duration-200",
                activeLink === item.href && "text-accent bg-accent/10 font-semibold"
              )}
            >
              <Link href={item.href}>{item.label}</Link>
            </Button>
          ))}
          {/* Photography Toggle Button */}
          <Button
            variant="ghost"
            size="icon"
            asChild
            className={cn(
              'text-foreground/80 hover:text-accent hover:bg-accent/10 transition-colors duration-200 ml-2',
              isPhotographyPage && 'text-accent bg-accent/10 font-semibold'
            )}
            aria-label={isPhotographyPage ? 'Go to Home Page' : 'Go to Photography Page'}
          >
            <Link href={isPhotographyPage ? '/' : '/photography'}>
              {isPhotographyPage ? <Home className="h-5 w-5" /> : <Camera className="h-5 w-5" />}
            </Link>
          </Button>
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-xs bg-background p-6">
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <div className="flex flex-col gap-6">
                <div className="flex justify-between items-center mb-4">
                    <Link href="/" className="flex items-center gap-2 text-xl font-bold" onClick={closeSheet}>
                        <Rocket className="h-6 w-6 text-accent" />
                        <span>Chethan<span className="text-accent">Portfolio</span></span>
                    </Link>
                </div>
                {navItems.map((item) => (
                  <Button
                    key={item.label}
                    variant="ghost"
                    asChild
                    className={cn(
                      "w-full justify-start text-lg py-3",
                      activeLink === item.href && "text-accent bg-accent/10 font-semibold"
                    )}
                    onClick={closeSheet}
                  >
                    <Link href={item.href}>{item.label}</Link>
                  </Button>
                ))}
                {/* Photography Toggle Button for Mobile */}
                <Button
                  key="photography-toggle"
                  variant="ghost"
                  asChild
                  className={cn(
                    "w-full justify-start text-lg py-3",
                    isPhotographyPage && "text-accent bg-accent/10 font-semibold"
                  )}
                  onClick={closeSheet}
                >
                  <Link href={isPhotographyPage ? "/" : "/photography"} className="flex items-center gap-4">
                    {isPhotographyPage ? <Home className="h-6 w-6" /> : <Camera className="h-6 w-6" />}
                    <span>{isPhotographyPage ? "Home" : "Photography"}</span>
                  </Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
