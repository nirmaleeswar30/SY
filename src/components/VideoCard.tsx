import React, { useState } from 'react';
import type { Video } from '../types/video';
import { VideoPlayer } from './VideoPlayerBha';
import { useTranslation } from 'react-i18next';

interface VideoCardProps {
  video: Video;
}

export const VideoCard: React.FC<VideoCardProps> = ({ video }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const { t } = useTranslation();
  const videoId = video.embedUrl.split('/').pop() || '';

  return (
    <>
      <div 
        className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
        onClick={() => setIsPlaying(true)}
      >
        <div className="relative pb-[56.25%]">
          <img
            src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
            alt={video.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
            <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center">
              <div className="w-0 h-0 border-t-8 border-b-8 border-l-12 border-transparent border-l-black translate-x-1" />
            </div>
          </div>
        </div>
        <div className="p-4">
          <h3 className="text-xl font-semibold mb-2">{t(`videos.${video.id}.title`)}</h3>
          <p className="text-gray-600">{t(`videos.${video.id}.description`)}</p>
        </div>
      </div>

      {isPlaying && (
        <VideoPlayer
          videoId={videoId}
          title={video.title}
          onClose={() => setIsPlaying(false)}
        />
      )}
    </>
  );
};