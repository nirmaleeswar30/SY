import React from 'react';
import ImageCard from '../components/ImageCard';
import { galleries } from '../data/galleries';

function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <h1 className="text-4xl font-bold text-red-800">Our Journey</h1>
          </div>
          <p className="text-red-800 text-lg">
            Hover to explore related images • Click to view full gallery
          </p>
        </div>
        
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {galleries.map((gallery) => (
            <ImageCard key={gallery.id} {...gallery} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomePage;