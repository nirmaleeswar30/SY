import React from 'react';

interface VideoFrameProps {
  videoId: string;
  title: string;
}

export const VideoFrame: React.FC<VideoFrameProps> = ({ videoId, title }) => (
  <iframe
    src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
    title={title || 'Video Player'} // Provide a fallback title
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
    className="absolute inset-0 w-full h-full"
  />
);