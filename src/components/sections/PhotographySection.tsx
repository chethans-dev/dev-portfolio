
"use client";

import { useState } from 'react';
import Image from 'next/image';
import { Card } from '@/components/ui/card';
import { photographyData } from '@/lib/constants';
import { Lightbox } from '@/components/common/Lightbox';
import { Camera } from 'lucide-react';
import { AnimatedScrollWrapper } from '@/components/common/AnimatedScrollWrapper';

export function PhotographySection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [altText, setAltText] = useState<string>('');

  const openLightbox = (src: string, alt: string) => {
    setSelectedImage(src);
    setAltText(alt);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    setAltText('');
  };

  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedScrollWrapper>
          <h2 className="section-title pb-4">Through My Lens</h2>
        </AnimatedScrollWrapper>
        <AnimatedScrollWrapper delay={200}>
          <div className="masonry-grid">
            {photographyData.map((photo) => (
              <Card
                key={photo.src}
                className="overflow-hidden shadow-lg transition-all duration-300 ease-in-out group hover:shadow-2xl hover:-translate-y-1.5"
                onClick={() => openLightbox(photo.src, photo.title)}
              >
                <div className="relative w-full">
                  <Image
                    src={photo.src}
                    alt={photo.title}
                    width={600}
                    height={photo.height}
                    className="w-full h-auto block transition-transform duration-500 group-hover:scale-105"
                    loading='lazy'
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="text-center text-white p-4">
                      <Camera className="h-8 w-8 mx-auto mb-2" />
                      <h3 className="text-lg font-semibold">{photo.title}</h3>
                      <p className="text-sm opacity-90">{photo.description}</p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </AnimatedScrollWrapper>
      </div>
      {/* <Lightbox
        src={selectedImage}
        alt={altText}
        isOpen={!!selectedImage}
        onClose={closeLightbox}
      /> */}
    </div>
  );
}

    