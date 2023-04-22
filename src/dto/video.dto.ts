export default class IPlaylistData {
  title?: string;
  url?: string;
  id?: string;
  video_count?: number;
  view_count?: number;
  description?: string;
  isUnlisted?: boolean;
  isAlbum?: boolean;
  thumbnail_url?: string;
  author?: Author;
  videos?: Video[];
}

export class Author {
  name?: string;
  url?: string;
  avatar_url?: string;
}

export class Video {
  title?: string;
  url?: string;
  id?: string;
  length?: string;
  milis_length?: number;
  thumbnail_url?: string;
  author?: Author;
}
