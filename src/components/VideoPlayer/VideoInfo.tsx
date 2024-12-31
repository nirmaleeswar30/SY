import React from 'react';
import { motion } from 'framer-motion';
import { Speech } from '../../types/Speech';

interface VideoInfoProps {
  speech: Speech;
}

export const VideoInfo: React.FC<VideoInfoProps> = ({ speech }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 text-white"
  >
    <h3 className="text-xl font-bold mb-1">{speech.title}</h3>
    <p className="text-white/80">{speech.speaker}</p>
  </motion.div>
);
