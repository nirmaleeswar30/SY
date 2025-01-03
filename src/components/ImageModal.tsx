import React from 'react';
import { X } from 'lucide-react';

interface ImageModalProps {
  image: string;
  title: string;
  onClose: () => void;
}

export function ImageModal({ image, title, onClose }: ImageModalProps) {
  return (
    <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
      <button 
        onClick={onClose}
        className="absolute top-4 right-4 text-white/80 hover:text-white"
      >
        <X className="h-6 w-6" />
      </button>
      <img
        src={image}
        alt={title}
        className="max-h-[90vh] max-w-[90vw] object-contain"
      />
    </div>
  );
}