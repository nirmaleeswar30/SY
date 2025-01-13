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
    speaker: "H.H Shri Mataji Nirmala Devi",
    youtubeUrl: "https://www.youtube.com/watch?v=wmVYxiNcI4E",
    title: "Guru Puja Excerpts",
    duration: "--:--"
  },
  {
    id: 2,
    speaker: "H.H Shri Mataji Nirmala Devi",
    youtubeUrl: "https://www.youtube.com/watch?v=JtFjpMToNp8",
    title: "It is Important to Open Our Hearts - 27-12-1989 Talk to Yogis Pune",
    duration: "--:--"
  },
  {
    id: 3,
    speaker: "H.H Shri Mataji Nirmala Devi",
    youtubeUrl: "https://www.youtube.com/watch?v=DjE3vWEm-os",
    title: "Self Realisation Steps By Shri Mataji",
    duration: "--:--"
  },
  {
    id: 4,
    speaker: "H.H Shri Mataji Nirmala Devi",
    youtubeUrl: "https://www.youtube.com/watch?v=f8zDB8ORiMI",
    title: "Short Description of 7 Chakras",
    duration: "--:--"
  },
  {
    id: 5,
    speaker: "H.H Shri Mataji Nirmala Devi",
    youtubeUrl: "https://www.youtube.com/watch?v=IQEcPNAPJ74",
    title: "1989 Shri Radha Krishna Puja Excerpt(Importance of Friendship)",
    duration: "--:--"
  },
  {
    id: 6,
    speaker: "H.H Shri Mataji Nirmala Devi",
    youtubeUrl: "https://www.youtube.com/watch?v=-VEGiPCZiK8",
    title: "1987 Makar Sankranti Puja",
    duration: "--:--"
  },
  {
    id: 7,
    speaker: "H.H Shri Mataji Nirmala Devi",
    youtubeUrl: "https://www.youtube.com/embed/sjEmN6hWREc",
    title: "Introduction to Sahaja Yoga | சஹஜ யோகா - முகவுரை | Tamil Subtitles",
    duration: "--:--"
  },
  {
    id: 8,
    speaker: "H.H Shri Mataji Nirmala Devi",
    youtubeUrl: "https://www.youtube.com/embed/cTMWxdVQq_c",
    title: "Thoughtless Awareness | எண்ணங்களற்ற விழிப்புணர்வு - Tamil Subtitles",
    duration: "--:--"
  },
  {
    id: 9,
    speaker: "H.H Shri Mataji Nirmala Devi",
    youtubeUrl: "https://www.youtube.com/embed/jGPsbGm1iqg",
    title: "1977 Jan 27 Attention and Joy",
    duration: "--:--"
  },
  {
    id: 10,
    speaker: "H.H Shri Mataji Nirmala Devi",
    youtubeUrl: "https://www.youtube.com/embed/71RsWgCyWwA",
    title: "அமைதி பற்றி ஸ்ரீ மாதாஜியின் அறிவுரை | Excerpts About Peace - Shri Mataji Nirmala Devi",
    duration: "--:--"
  },
  {
    id: 11,
    speaker: "H.H Shri Mataji Nirmala Devi",
    youtubeUrl: "https://www.youtube.com/embed/ZSKHVpeGMhU",
    title: "What are vibrations? - நுண்ணதிர்வுகள் என்றால் என்ன?",
    duration: "--:--"
  },
  {
    id: 12,
    speaker: "H.H Shri Mataji Nirmala Devi",
    youtubeUrl: "https://www.youtube.com/embed/RXOLMQsQ6ic",
    title: "IMPORTANCE OF EVERYDAY MEDITATION AND FOOTSOAKING - Tamil Subtitles",
    duration: "--:--"
  },
  {
    id: 13,
    speaker: "H.H Shri Mataji Nirmala Devi",
    youtubeUrl: "https://www.youtube.com/embed/yamtZlJnyS8",
    title: "Meaning of Aum - Tamil subtitles",
    duration: "--:--"
  },
  {
    id:14,
    speaker: "H.H Shri Mataji Nirmala Devi",
    youtubeUrl: "https://www.youtube.com/embed/GVmOKP-UZRE",
    title: "Importance of Meditaiton HD",
    duration: "--:--"
  },
  {
    id: 15,
    speaker: "H.H Shri Mataji Nirmala Devi",
    youtubeUrl: "https://www.youtube.com/embed/bYq6nXPilMo",
    title: "1981 Sahasrara Chakra",
    duration: "--:--"
  },
  {
    id: 16,
    speaker: "H.H Shri Mataji Nirmala Devi",
    youtubeUrl: "https://www.youtube.com/embed/Z_rUwrMtiCg",
    title: "Vishuddhi Chakra - விஷுத்தி சக்கரம் | Tamil Subtitles",
    duration: "--:--"
  },
  {
    id: 17,
    speaker: "H.H Shri Mataji Nirmala Devi",
    youtubeUrl: "https://www.youtube.com/embed/ht473xqlbkI",
    title: "1989 0723 Importance of Pure Attention | தூய கவனத்தின் முக்கியத்துவம்",
    duration: "--:--"
  },
  {
    id: 18,
    speaker: "H.H Shri Mataji Nirmala Devi",
    youtubeUrl: "https://www.youtube.com/embed/iY7vwiknV-8",
    title: "1991 Shri Bhavasagar Puja Excerpt | Tamil Subtiles",
    duration: "--:--"
  },
  {
    id: 19,
    speaker: "H.H Shri Mataji Nirmala Devi",
    youtubeUrl: "https://www.youtube.com/embed/jzAGC-b9MVQ",
    title: "Relax God Is With you - Tamil Subtitles | கவலைப்படாதீர்கள் கடவுள் உங்களுடன் இருக்கிறார்",
    duration: "--:--"
  },
  {
    id: 20,
    speaker: "H.H Shri Mataji Nirmala Devi",
    youtubeUrl: "https://www.youtube.com/embed/Z9mVdmFCaWw",
    title: "1983 Heart Chakra With Tamil Subtitles",
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