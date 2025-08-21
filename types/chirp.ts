export interface User {
  id: string;
  username: string;
  fullname: string;
}

export interface Chirp {
  id: string;
  user: {
    fullname: string;
    username: string;
  };
  dateposted: string;
  content: string;
  comments: number;
  retweets: number;
  likes: number;
  isLikedByMe: boolean;
  isRetweetByMe: boolean;
  isFollowedByMe: boolean;
}

export interface ChirpPage {
  chirps: Chirp[];
  nextCursor: string | null;
  length: any;
}
