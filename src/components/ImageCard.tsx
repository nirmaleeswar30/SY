import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Gallery } from '../types/gallery';

interface ImageCardProps extends Gallery {}

const ImageCard: React.FC<ImageCardProps> = ({ 
  id,
  title, 
  mainImage, 
  relatedImages, 
  description 
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="group relative overflow-hidden rounded-lg shadow-xl transition-all duration-300 hover:scale-[1.02]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link 
        to={`/resources/gallery/${id}`}
        className="block aspect-[3/4]"
      >
        <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 gap-1 p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-10">
          {relatedImages.slice(0, 9).map((img, index) => (
            <div key={index} className="overflow-hidden rounded-lg bg-black/20 backdrop-blur-sm">
              <img
                src={img}
                alt={`Related ${index + 1}`}
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>

        <div className="relative h-full">
          <img
            src={mainImage}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
            <div className="absolute bottom-0 p-4 text-white">
              <h3 className="text-xl font-bold">{title}</h3>
              <p className="mt-2 text-sm opacity-90">{description}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default ImageCard;