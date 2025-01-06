import React from 'react';
import { PlayButton } from './PlayButton';

interface VideoThumbnailProps {
  videoId: string;
  title: string;
}

export const VideoThumbnail: React.FC<VideoThumbnailProps> = ({ videoId, title }) => (
  <div className="relative pb-[56.25%]">
    <img
      src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
      alt={title}
      className="absolute inset-0 w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
      <PlayButton />
    </div>
  </div>
);