import React from 'react';
import { motion } from 'framer-motion';
import { Speech } from '../types/Speech';

interface SpeechCardProps {
  speech: Speech;
  index: number;
  onPlay: (youtubeUrl: string) => void;
}

export const SpeechCard: React.FC<SpeechCardProps> = ({ speech, index, onPlay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
    >
      <div className="relative">
        <img
          src={speech.thumbnail}
          alt={speech.title}
          className="w-full h-56 object-cover transform group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary-600 rounded-full p-4 shadow-lg text-white"
            onClick={() => onPlay(speech.youtubeUrl)}
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </motion.button>
        </div>
        <div className="absolute top-3 right-3 bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
          {speech.duration}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-primary-900 mb-2">{speech.title}</h3>
        <p className="text-primary-600 font-medium">{speech.speaker}</p>
      </div>
    </motion.div>
  );
};
