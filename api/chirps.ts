import { api } from './axios';
import type { ChirpPage } from '@/types/chirp';

export const createChirp = async (content: string, onProgress?: (percent: number) => void) => {
  try {
    const res = await api.post('/api/tweets/', {
    content: content,
    onUploadProgress: (event: any) => {
        if (!event.total) return;
        const percent = Math.round((event.loaded * 100) / event.total);
        onProgress?.(percent); // call the progress callback
      },
  });
  return res.data;
  } catch (error: any) {
    throw error
  }
  
};

export const deleteChirp = async (chirpId: string) => {
  try {
    const res = await api.delete(`/api/tweets/${chirpId}`);
  return res.data;
  } catch (error: any) {
    throw error
  }
  
};

export const comment = async (chirpId: string, content: string, onProgress?: (percent: number) => void) => {
  try {
    const res = await api.post(`/api/comments/tweet/${chirpId}`, {
    content: content,
    onUploadProgress: (event: any) => {
        if (!event.total) return;
        const percent = Math.round((event.loaded * 100) / event.total);
        onProgress?.(percent); // call the progress callback
      },
  });
  return res.data;
  } catch (error: any) {
    throw error
  }
  
}; 

export const deleteComment = async (commentId: string, chirpId: string) => {
  try {
    const res = await api.delete(`/api/comments/${commentId}/tweet/${chirpId}`);
  return res.data;
  } catch (error: any) {
    throw error
  }
  
};

export const fetchHomeChirps = async (lastChirpId: string | null): Promise<ChirpPage> => {
  try {
    const res = await api.get(`/api/tweets/?lt=${lastChirpId ?? ''}`);
    if (!res.data) throw new Error("Failed to fetch chirps");
    return res.data; // this is assumed to be an array of chirps
  } catch (error: any) {
    throw error;
  }
};

// export const fetchMoreChirps = async (lastChirpId:any) => {
//   try {
//     const res = await api.get(`/api/tweets/?lt=${lastChirpId}`);
//   if (!res.data) throw new Error('Failed to fetch chirps');
//   return res.data; 
//   } catch (error: any) {
//     throw error
//   }
  
// };

export const fetchHashtagChirps = async (tag: string) => {
  try {
    const res = await api.get(`/api/hashtags/view?tag=${tag}`);
  if (!res.data) throw new Error('Failed to fetch chirps');
  return res.data; 
  } catch (error: any) {
    throw error
  }
  
};

export const fetchSingleChirp = async (chirpId: string) => {
  try {
    const res = await api.get(`/api/tweets/${chirpId}`);
  if (!res.data) throw new Error('Failed to fetch chirp data');
  return res.data;
  } catch (error: any) {
    throw error
  }
   
};

//all posts for a specific user
export const fetchUserChirps = async (userId: string) => {
  try {
    const res = await api.get(`/api/tweets/user/${userId}`);
  if (!res.data) throw new Error('Failed to fetch chirps');

 if (!res.data || (Array.isArray(res.data) && res.data.length === 0)) {
      const error = new Error('No chirps found');
      (error as any).status = 404; 
      throw error;
    }

  return res.data;
  } catch (error: any) {
    throw error
  }
   
};

export const fetchUserLikedChirps = async () => {
  try {
    const res = await api.get(`/api/likes/mine`);
  if (!res.data) throw new Error('Failed to fetch liked chirps');

if (!res.data || (Array.isArray(res.data) && res.data.length === 0)) {
      const error = new Error('No chirps found');
      (error as any).status = 404; 
      throw error;
    }

  return res.data;
  } catch (error: any) {
    throw error
  }
   
};

export const fetchUserRepostChirps = async (userId: string) => {
  try {
    const res = await api.get(`/api/retweets/user/${userId}`);
  if (!res.data) throw new Error('Failed to fetch reposted chirps');

if (!res.data || (Array.isArray(res.data) && res.data.length === 0)) {
      const error = new Error('No chirps found');
      (error as any).status = 404; 
      throw error;
    }

  return res.data;
  } catch (error: any) {
    throw error
  }
   
};