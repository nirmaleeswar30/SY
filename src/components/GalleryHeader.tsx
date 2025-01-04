import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface GalleryHeaderProps {
  title: string;
  description: string;
}

export function GalleryHeader({ title, description }: GalleryHeaderProps) {
  const { t } = useTranslation(); // Use the translation hook

  return (
    <div className="mb-8">
      <Link 
        to="/resources/gallery"
        className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors"
      >
        <ArrowLeft className="h-5 w-5" />
        {t('gallery.backToGalleries')} {/* Translated text */}
      </Link>
      <h1 className="text-4xl font-bold text-white mt-4">{title}</h1>
      <p className="text-white/80 mt-2">{description}</p>
    </div>
  );
}