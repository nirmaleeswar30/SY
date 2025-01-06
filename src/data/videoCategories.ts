import { Play, Music, Gamepad2, Camera } from 'lucide-react';

export const categories = [
  {
    id: 'entertainment',
    title: 'Entertainment',
    description: 'Top entertainment videos from around the world',
    icon: Play,
    bgImage: 'https://images.unsplash.com/photo-1603739903239-8b6e64c3b185?auto=format&fit=crop&q=80&w=1000',
    color: 'from-pink-500 to-rose-500'
  },
  {
    id: 'music',
    title: 'Music',
    description: 'Latest music videos and performances',
    icon: Music,
    bgImage: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&q=80&w=1000',
    color: 'from-purple-500 to-indigo-500'
  },
  {
    id: 'gaming',
    title: 'Gaming',
    description: 'Gaming highlights and walkthroughs',
    icon: Gamepad2,
    bgImage: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&q=80&w=1000',
    color: 'from-green-500 to-emerald-500'
  },
  {
    id: 'photography',
    title: 'Photography',
    description: 'Photography tutorials and tips',
    icon: Camera,
    bgImage: 'https://images.unsplash.com/photo-1554048612-b6a482bc67e5?auto=format&fit=crop&q=80&w=1000',
    color: 'from-blue-500 to-cyan-500'
  }
];