import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import AudioCard from '../components/AudioCard';
import SearchBar from '../components/SearchBarAudio';

// Sample audio data - in a real app this would come from an API
const audioList = [
  { id: 1, title: "Summer Breeze", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" },
  { id: 2, title: "Ocean Waves", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3" },
  { id: 3, title: "Mountain Echo", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3" },
  { id: 4, title: "Forest Dreams", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3" },
];

const Index = () => {
  const { t } = useTranslation(); // Use the translation hook
  const [searchTerm, setSearchTerm] = useState('');

  const filteredAudios = audioList.filter(audio =>
    audio.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12 text-maroon-500">
          {t('audioLibrary.title')} {/* Translated title */}
        </h1>
        
        <SearchBar value={searchTerm} onChange={setSearchTerm} />
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredAudios.map((audio) => (
            <AudioCard
              key={audio.id}
              title={audio.title}
              audioUrl={audio.url}
            />
          ))}
        </div>
        
        {filteredAudios.length === 0 && (
          <div className="text-center text-gray-500 mt-8">
            {t('audioLibrary.noResults')} {/* Translated no results message */}
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;