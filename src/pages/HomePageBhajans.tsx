import React from 'react';
import { CategoryCard } from '../components/CategoryCard';
import { categories } from '../data/videoCategories';

export const HomePageBhajans: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-12">
          Explore Video Categories
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