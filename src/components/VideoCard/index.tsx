import React, { useState } from 'react';
import type { Video } from '../../types/video';
import { VideoPlayer } from '../VideoPlayerBha';
import { VideoThumbnail } from './VideoThumbnail';

interface VideoCardProps {
  video: Video;
}

export const VideoCard: React.FC<VideoCardProps> = ({ video }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoId = video.embedUrl.split('/').pop() || '';

  return (
    <>
      <div 
        className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
        onClick={() => setIsPlaying(true)}
      >
        <VideoThumbnail videoId={videoId} title={video.title} />
        <div className="p-4">
          <h3 className="text-xl font-semibold mb-2">{video.title}</h3>
          <p className="text-gray-600">{video.description}</p>
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