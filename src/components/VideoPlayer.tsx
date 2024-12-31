import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Speech } from '../types/Speech';

interface VideoPlayerProps {
  speech: Speech;
  onClose: () => void;
}

export const VideoPlayer: React.FC<VideoPlayerProps> = ({ speech, onClose }) => {
  // Extract video ID from YouTube URL
  const videoId = speech.youtubeUrl.split('v=')[1];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="relative w-full max-w-4xl aspect-video bg-black rounded-xl overflow-hidden"
          onClick={e => e.stopPropagation()}
        >
          <iframe
            src={`https://www.youtube.com/embed/${videoId}`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
          />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};