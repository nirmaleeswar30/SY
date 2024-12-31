import React, { useState, useEffect } from 'react';
import { Header } from './Header';
import { SearchBar } from './SearchBarVideo';
import { SpeechCard } from './SpeechCard';
import { VideoPlayer } from './VideoPlayer';
import { speeches, updateSpeeches } from '../data/speeches';
import { Speech } from '../types/Speech';

interface SpeechBrowserProps {
  speechesData?: Speech[];
  onSpeechSelect?: (speech: Speech) => void;
}

export const SpeechBrowser: React.FC<SpeechBrowserProps> = ({
  speechesData: initialSpeeches = speeches,
  onSpeechSelect,
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeSpeech, setActiveSpeech] = useState<Speech | null>(null);
  const [loadedSpeeches, setLoadedSpeeches] = useState<Speech[]>(initialSpeeches);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadSpeeches = async () => {
      try {
        const updatedSpeeches = await updateSpeeches();
        setLoadedSpeeches(updatedSpeeches);
      } catch (error) {
        console.error('Error loading speeches:', error);
      } finally {
        setLoading(false);
      }
    };

    loadSpeeches();
  }, []);

  const filteredSpeeches = loadedSpeeches.filter(speech =>
    (speech.title?.toLowerCase().includes(searchTerm.toLowerCase()) || 
     speech.speaker.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const handlePlaySpeech = (speech: Speech) => {
    setActiveSpeech(speech);
    if (onSpeechSelect) {
      onSpeechSelect(speech);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary-50 to-primary-100 flex items-center justify-center">
        <div className="text-primary-600">Loading speeches...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-primary-100 px-6 py-12">
      <div className="max-w-7xl mx-auto">
        <Header />
        <SearchBar value={searchTerm} onChange={setSearchTerm} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredSpeeches.map((speech, index) => (
            <SpeechCard
              key={speech.id}
              speech={speech}
              index={index}
              onPlay={() => handlePlaySpeech(speech)}
            />
          ))}
        </div>
        {filteredSpeeches.length === 0 && (
          <div className="text-center mt-12 text-primary-600">
            No speeches found matching your search.
          </div>
        )}
        {activeSpeech && (
          <VideoPlayer
            speech={activeSpeech}
            onClose={() => setActiveSpeech(null)}
          />
        )}
      </div>
    </div>
  );
};