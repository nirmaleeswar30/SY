import React from 'react';
import { useTranslation } from 'react-i18next'; // Import the translation hook
import { CategoryCard } from '../components/CategoryCard';
import { categories } from '../data/videoCategories';

export const HomePageBhajans: React.FC = () => {
  const { t } = useTranslation(); // Use the translation hook

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-6xl font-bold text-red-800 text-center mb-16">
          {t('homePageBhajans.title')} {/* Translated title */}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {categories.map((category) => (
            <CategoryCard key={category.id} {...category} />
          ))}
        </div>
      </div>
    </div>
  );
};