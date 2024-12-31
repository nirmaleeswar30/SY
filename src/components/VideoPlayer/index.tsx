import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CloseButton } from './CloseButton';
import { VideoFrame } from './VideoFrame';
import { VideoInfo } from './VideoInfo';
import { Speech } from '../../types/Speech';

interface VideoPlayerProps {
  speech: Speech;
  onClose: () => void;
}

export const VideoPlayer: React.FC<VideoPlayerProps> = ({ speech, onClose }) => {
  const videoId = speech.youtubeUrl.split('v=')[1];

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-50 p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="relative w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl"
          onClick={e => e.stopPropagation()}
        >
          <CloseButton onClick={onClose} />
          <VideoFrame videoId={videoId} title={speech.title} />
          <VideoInfo speech={speech} />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};