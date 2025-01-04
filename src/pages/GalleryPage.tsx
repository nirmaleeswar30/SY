import React from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; // Import the translation hook
import { galleries } from '../data/galleries';
import { GalleryHeader } from '../components/GalleryHeader';
import { GalleryGrid } from '../components/GalleryGrid';
import { NotFound } from '../components/NotFound';

function GalleryPage() {
  const { t } = useTranslation(); // Use the translation hook
  const { id } = useParams();
  const gallery = galleries.find(g => g.id === id);

  if (!gallery) {
    return <NotFound message={t('gallery.notFound')} />; // Translated not found message
  }

  const allImages = [gallery.mainImage, ...gallery.relatedImages];

  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-[2000px] mx-auto px-4 py-8">
        <GalleryHeader title={gallery.title} description={gallery.description} />
        <GalleryGrid images={allImages} title={gallery.title} />
      </div>
    </div>
  );
}

export default GalleryPage;