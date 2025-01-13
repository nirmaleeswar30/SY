import React, { useState } from 'react';
import { ImageModal } from './ImageModal';
import { useTranslation } from 'react-i18next';

interface GalleryGridProps {
  images: string[];
  title: string;
}

export function GalleryGrid({ images, title }: GalleryGridProps) {
  const { t } = useTranslation();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <div 
            key={index}
            className="aspect-[3/4] group relative cursor-pointer overflow-hidden"
            onClick={() => setSelectedImage(image)}
          >
            <img
              src={image}
              alt={`${title} - ${index + 1}`}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        ))}
      </div>

      {selectedImage && (
        <ImageModal
          image={selectedImage}
          title={title}
          onClose={() => setSelectedImage(null)}
        />
      )}
    </>
  );
}