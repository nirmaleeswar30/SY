import React from 'react';
import { X } from 'lucide-react';

interface CloseButtonProps {
  onClick: () => void;
}

export const CloseButton: React.FC<CloseButtonProps> = ({ onClick }) => (
  <button
    className="absolute top-4 right-4 z-10 bg-white/10 backdrop-blur-sm rounded-full p-2 text-white/90 hover:bg-white/20 transition-colors"
    onClick={onClick}
  >
    <X size={24} />
  </button>
);