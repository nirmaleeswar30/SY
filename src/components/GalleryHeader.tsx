import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

interface GalleryHeaderProps {
  title: string;
  description: string;
}

export function GalleryHeader({ title, description }: GalleryHeaderProps) {
  return (
    <div className="mb-8">
      <Link 
        to="/"
        className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors"
      >
        <ArrowLeft className="h-5 w-5" />
        Back to galleries
      </Link>
      <h1 className="text-4xl font-bold text-white mt-4">{title}</h1>
      <p className="text-white/80 mt-2">{description}</p>
    </div>
  );
}