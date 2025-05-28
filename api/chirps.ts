import { api } from './axios';

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

export const fetchHomeChirps = async () => {
  try {
    const res = await api.get('/api/tweets/');
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

export const fetchUserChirps = async (userId: string) => {
  try {
    const res = await api.get(`/api/tweets/user/${userId}`);
  if (!res.data) throw new Error('Failed to fetch chirps');
  return res.data;
  } catch (error: any) {
    throw error
  }
   
};