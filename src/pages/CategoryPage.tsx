import React, { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { VideoCard } from '../components/VideoCard';
import { SearchBar } from '../components/SearchBarBhajans';
import { videosByCategory } from '../data/videos';
import { categories } from '../data/videoCategories';
import { ArrowLeft } from 'lucide-react';

export const CategoryPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [searchQuery, setSearchQuery] = useState('');
  
  const category = categories.find(c => c.id === id);
  const videos = id ? videosByCategory[id as keyof typeof videosByCategory] : [];
  
  const filteredVideos = useMemo(() => {
    return videos.filter(video => 
      video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      video.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [videos, searchQuery]);

  if (!category) {
    return <div>Category not found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-12">
        <Link
          to="/"
          className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-8"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Categories
        </Link>
        <h1 className="text-4xl font-bold mb-8">{category.title} Videos</h1>
        
        <SearchBar 
          value={searchQuery}
          onChange={setSearchQuery}
          placeholder={`Search ${category.title.toLowerCase()} videos...`}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredVideos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>
        
        {filteredVideos.length === 0 && (
          <div className="text-center text-gray-500 mt-8">
            No videos found matching your search.
          </div>
        )}
      </div>
    </div>
  );
};