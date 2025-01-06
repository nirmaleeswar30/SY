import type { Video } from '../types/video';
import type { Speech } from '../types/Speech';

export const convertToSpeechData = (video: Video): Speech => ({
  id: Number(video.id), // Convert string to number
  title: video.title,
  speaker: 'Speaker',
  youtubeUrl: `https://youtube.com/watch?v=${video.embedUrl.split('/').pop()}`,
});