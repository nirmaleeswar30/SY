import React, { useState } from 'react';
import { ImageModal } from './ImageModal';
import { useTranslation } from 'react-i18next'; // Import the translation hook

interface GalleryGridProps {
  images: string[];
  title: string;
}

export function GalleryGrid({ images, title }: GalleryGridProps) {
  const { t } = useTranslation(); // Use the translation hook
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      <div className="grid grid-cols-12 auto-rows-auto gap-1">
        {/* Hero image */}
        <div 
          className="col-span-8 row-span-2 cursor-pointer"
          onClick={() => setSelectedImage(images[0])}
        >
          <img
            src={images[0]}
            alt={`${title} - Hero`}
            className="w-full h-auto"
          />
        </div>

        {/* Gallery images */}
        {images.slice(1).map((image, index) => (
          <div 
            key={index}
            className="col-span-4 cursor-pointer"
            onClick={() => setSelectedImage(image)}
          >
            <img
              src={image}
              alt={`${title} - Detail ${index + 1}`}
              className="w-full h-auto"
            />
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