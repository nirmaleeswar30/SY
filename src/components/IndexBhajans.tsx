import React from 'react';
import { Link } from 'react-router-dom';
import { LucideIcon } from 'lucide-react';

interface CategoryCardProps {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  bgImage: string;
  color: string;
}

export const CategoryCard: React.FC<CategoryCardProps> = ({
  id,
  title,
  description,
  icon: Icon,
  bgImage,
  color
}) => (
  <Link
    to={`resources/category/${id}`}
    className="relative group overflow-hidden rounded-xl transition-transform duration-300 hover:scale-105"
  >
    <div className={`absolute inset-0 bg-gradient-to-br opacity-90 z-10 ${color}`} />
    <img
      src={bgImage}
      alt={title}
      className="absolute inset-0 w-full h-full object-cover"
    />
    <div className="relative z-20 p-6 h-full flex flex-col justify-between min-h-[300px]">
      <Icon className="w-12 h-12 text-white" />
      <div>
        <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
        <p className="text-white/90">{description}</p>
      </div>
    </div>
  </Link>
);