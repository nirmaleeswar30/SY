import { Speech } from '../types/Speech';
import { YOUTUBE_API_KEY } from './env';

/**
 * Extracts YouTube video ID from various URL formats
 */
function getYouTubeVideoId(url: string): string {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  const match = url.match(regExp);
  if (!match || match[2].length !== 11) {
    throw new Error('Invalid YouTube URL');
  }
  return match[2];
}

/**
 * Gets YouTube thumbnail URL for a video
 */
function getYouTubeThumbnail(videoId: string): string {
  return `https://img.youtube.com/vi/${videoId}/0.jpg`;
}

/**
 * Formats YouTube duration string to readable format
 */
function formatDuration(duration: string): string {
  const matches = duration.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);
  if (!matches) return '--:--';

  const [, hours, minutes, seconds] = matches;
  const parts: string[] = [];

  if (hours) parts.push(hours.padStart(2, '0'));
  parts.push((minutes || '0').padStart(2, '0'));
  parts.push((seconds || '0').padStart(2, '0'));

  return parts.join(':');
}

/**
 * Fetches video metadata from YouTube API
 */
async function fetchYouTubeData(videoId: string): Promise<{ title: string; duration: string }> {
  if (!YOUTUBE_API_KEY) {
    console.error('YouTube API key not found');
    return {
      title: 'API Key not configured',
      duration: '--:--'
    };
  }

  try {
    const response = await fetch(
      `https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails&id=${videoId}&key=${YOUTUBE_API_KEY}`
    );

    if (!response.ok) {
      throw new Error(`YouTube API error: ${response.status}`);
    }

    const data = await response.json();

    if (!data.items?.[0]) {
      throw new Error('Video not found');
    }

    const video = data.items[0];
    return {
      title: video.snippet.title,
      duration: formatDuration(video.contentDetails.duration)
    };
  } catch (error) {
    console.error('Error fetching YouTube data:', error);
    return {
      title: 'Error loading video title',
      duration: '--:--'
    };
  }
}

/**
 * Initial speeches data
 */
export const speeches: Speech[] = [
  {
    id: 1,
    speaker: "Martin Luther King Jr.",
    youtubeUrl: "https://www.youtube.com/watch?v=N3J2JRQg040",
    title: "Loading...",
    duration: "--:--"
  },
  {
    id: 2,
    speaker: "Steve Jobs",
    youtubeUrl: "https://www.youtube.com/watch?v=IpFX2vq8HKw",
    title: "Loading...",
    duration: "--:--"
  },
  {
    id: 3,
    speaker: "Brené Brown",
    youtubeUrl: "https://www.youtube.com/watch?v=2Vv-BfVoq4g",
    title: "Loading...",
    duration: "--:--"
  }
];

/**
 * Updates speeches with data from YouTube API
 */
export async function updateSpeeches(): Promise<Speech[]> {
  try {
    return await Promise.all(
      speeches.map(async (speech) => {
        try {
          const videoId = getYouTubeVideoId(speech.youtubeUrl);
          const thumbnail = getYouTubeThumbnail(videoId);
          const { title, duration } = await fetchYouTubeData(videoId);
          
          return {
            ...speech,
            title,
            duration,
            thumbnail
          };
        } catch (error) {
          console.error(`Error updating speech ${speech.id}:`, error);
          return {
            ...speech,
            title: 'Error loading video',
            duration: '--:--',
            thumbnail: ''
          };
        }
      })
    );
  } catch (error) {
    console.error('Error updating speeches:', error);
    return speeches;
  }
}