import React from 'react';

interface VideoInfoProps {
  title: string;
}

export const VideoInfo: React.FC<VideoInfoProps> = ({ title }) => (
  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6">
    <h3 className="text-xl font-bold text-white">{title}</h3>
  </div>
);
