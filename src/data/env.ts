// src/data/env.ts
export const YOUTUBE_API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;

if (!YOUTUBE_API_KEY) {
  console.error('YouTube API key is not configured in environment variables');
}