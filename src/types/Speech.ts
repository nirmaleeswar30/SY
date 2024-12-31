export interface Speech {
  id: number;
  speaker: string;
  youtubeUrl: string;
  title: string;  // Remove the optional marker (?)
  duration?: string;
  thumbnail?: string;
}