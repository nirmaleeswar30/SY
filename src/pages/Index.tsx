import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import AudioCard from '../components/AudioCard';
import SearchBar from '../components/SearchBarAudio';

// Complete audio data with descriptions
const audioList = [
  { 
    id: 1, 
    title: "Sahaja Miracles Part:1", 
    description: "Experience the divine miracles of Sahaja Yoga meditation and their transformative effects on practitioners",
    url: "/public/Miracles/sahaja_miracle20.mp4" 
  },
  { 
    id: 2, 
    title: "Sahaja Miracles Part:2", 
    description: "Discover extraordinary experiences and miracles shared by Sahaja Yoga practitioners worldwide",
    url: "/public/Miracles/sahaja_miracle1.mp4" 
  },
  { 
    id: 3, 
    title: "Sahaja Miracles Part:3", 
    description: "Learn about the healing miracles and spiritual transformations through Sahaja Yoga meditation",
    url: "/public/Miracles/sahaja_miracle12.mp4" 
  },
  { 
    id: 4, 
    title: "Sahaja Miracles Part:4", 
    description: "Explore personal testimonies of miraculous healings and spiritual awakening in Sahaja Yoga",
    url: "/public/Miracles/sahaja_miracle13.mp4" 
  },
  { 
    id: 5, 
    title: "Sahaja Miracles Part:5", 
    description: "Witness the power of self-realization and its miraculous effects on practitioners' lives",
    url: "/public/Miracles/sahaja_miracle14.mp4" 
  },
  { 
    id: 6, 
    title: "Sahaja Miracles Part:6", 
    description: "Documentation of divine experiences and transformations through Sahaja Yoga meditation",
    url: "/public/Miracles/sahaja_miracle15.mp4" 
  },
  { 
    id: 7, 
    title: "Sahaja Miracles Part:7", 
    description: "Stories of spiritual growth and miraculous experiences in the journey of self-realization",
    url: "/public/Miracles/sahaja_miracle16.mp4" 
  },
  { 
    id: 8, 
    title: "Sahaja Miracles Part:8", 
    description: "Collection of profound spiritual experiences and divine interventions in Sahaja Yoga",
    url: "/public/Miracles/sahaja_miracle17.mp4" 
  },
  { 
    id: 9, 
    title: "Sahaja Miracles Part:9", 
    description: "Remarkable stories of transformation and spiritual awakening through meditation",
    url: "/public/Miracles/sahaja_miracle18.mp4" 
  },
  { 
    id: 10, 
    title: "Sahaja Miracles Part:10", 
    description: "Insights into the miraculous nature of Kundalini awakening and its effects",
    url: "/public/Miracles/sahaja_miracle19.mp4" 
  },
  { 
    id: 11, 
    title: "Sahaja Miracles Part:11", 
    description: "Testimonials of physical and mental healing through Sahaja Yoga practices",
    url: "/public/Miracles/sahaja_miracle2.mp4" 
  },
  { 
    id: 12, 
    title: "Sahaja Miracles Part:12", 
    description: "Exploring the divine connection and miraculous experiences in meditation",
    url: "/public/Miracles/sahaja_miracle3.mp4" 
  },
  { 
    id: 13, 
    title: "Sahaja Miracles Part:13", 
    description: "Documentation of spiritual experiences and divine grace in Sahaja Yoga",
    url: "/public/Miracles/sahaja_miracle4.mp4" 
  },
  { 
    id: 14, 
    title: "Sahaja Miracles Part:14", 
    description: "Stories of inner transformation and spiritual evolution through meditation",
    url: "/public/Miracles/sahaja_miracle5.mp4" 
  },
  { 
    id: 15, 
    title: "Sahaja Miracles Part:15", 
    description: "Collection of miraculous experiences and divine interventions in practitioners' lives",
    url: "/public/Miracles/sahaja_miracle6.mp4" 
  },
  { 
    id: 16, 
    title: "Sahaja Miracles Part:16", 
    description: "Experiences of collective consciousness and divine connections in Sahaja Yoga",
    url: "/public/Miracles/sahaja_miracle7.mp4" 
  },
  { 
    id: 17, 
    title: "Sahaja Miracles Part:17", 
    description: "Revelations of spiritual growth and transformation through self-realization",
    url: "/public/Miracles/sahaja_miracle8.mp4" 
  },
  { 
    id: 18, 
    title: "Sahaja Miracles Part:18", 
    description: "Accounts of miraculous healings and spiritual awakening in meditation",
    url: "/public/Miracles/sahaja_miracle9.mp4" 
  },
  { 
    id: 19, 
    title: "Sahaja Miracles Part:19", 
    description: "Journey through extraordinary experiences and divine manifestations",
    url: "/public/Miracles/sahaja_miracle10.mp4" 
  },
  { 
    id: 20, 
    title: "Sahaja Miracles Part:20", 
    description: "Final collection of transformative experiences and spiritual miracles in Sahaja Yoga",
    url: "/public/Miracles/sahaja_miracle11.mp4" 
  },
];

const Index = () => {
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState('');

  const filteredAudios = audioList.filter(audio =>
    audio.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    audio.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12 text-maroon-500">
          {t('audioLibrary.title')}
        </h1>
        
        <SearchBar 
          value={searchTerm} 
          onChange={setSearchTerm} 
          placeholder={t('audioLibrary.searchPlaceholder')}
        />
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredAudios.map((audio) => (
            <AudioCard
              key={audio.id}
              id={audio.id.toString()}
              title={t(`audio.${audio.id}.title`, { defaultValue: audio.title })}
              description={t(`audio.${audio.id}.description`, { defaultValue: audio.description })}
              audioUrl={audio.url}
            />
          ))}
        </div>
        
        {filteredAudios.length === 0 && (
          <div className="text-center text-gray-500 mt-8">
            {t('audioLibrary.noResults')}
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;