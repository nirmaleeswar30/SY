import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { VideoCard } from '../components/VideoCard';
import { videosByCategory } from '../data/videos';
import { categories } from '../data/videoCategories';
import { ArrowLeft } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const CategoryPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { t } = useTranslation();

  // Find the category by ID
  const category = categories.find((c) => c.id === id);

  // Get videos for the category
  const videos = id ? videosByCategory[id as keyof typeof videosByCategory] : [];

  // If the category is not found, display an error message
  if (!category) {
    return <div>{t('category.notFound')}</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-12">
        {/* Back button */}
        <Link
          to="/resources/category"
          className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-8"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          {t('category.backToCategories')}
        </Link>

        {/* Category title and description */}
        <h1 className="text-4xl font-bold mb-4">
          {t(`categories.${category.id}.title`)} Videos
        </h1>
        <p className="text-gray-600 mb-8">
          {t(`categories.${category.id}.description`)}
        </p>

        {/* Video grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {videos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>

        {/* Display message if no videos are available */}
        {videos.length === 0 && (
          <div className="text-center text-gray-500 mt-8">
            {t('category.noVideosAvailable')}
          </div>
        )}
      </div>
    </div>
  );
};