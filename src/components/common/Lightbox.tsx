
"use client";

import { Dialog, DialogContent, DialogDescription, DialogTitle } from '@/components/ui/dialog';
import Image from 'next/image';

interface LightboxProps {
  src: string | null;
  alt: string;
  isOpen: boolean;
  onClose: () => void;
}

export function Lightbox({ src, alt, isOpen, onClose }: LightboxProps) {
  if (!src) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="p-0 bg-transparent border-0 w-full max-w-5xl h-auto shadow-none">
        <DialogTitle className="sr-only">{alt}</DialogTitle>
        <DialogDescription className="sr-only">
          Enlarged view of the image: {alt}
        </DialogDescription>
        <div className="relative w-full h-[85vh]">
          <Image
            src={src}
            alt={alt}
            fill
            objectFit="contain"
            className="rounded-lg"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
