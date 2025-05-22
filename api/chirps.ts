import { api } from './axios';

export const createChirp = async (content: string, onProgress?: (percent: number) => void) => {
  const response = await api.post('/api/tweets/', {
    content: content,
    onUploadProgress: (event: any) => {
        if (!event.total) return;
        const percent = Math.round((event.loaded * 100) / event.total);
        onProgress?.(percent); // call the progress callback
      },
  });
  return response.data;
};

export const deleteChirp = async (chirpId: string) => {
  const response = await api.delete(`/tweets/${chirpId}`);
  return response.data;
};

export const fetchHomeChirps = async () => {
  const res = await api.get('/api/tweets/');
  if (!res.data) throw new Error('Failed to fetch chirps');
  return res.data; 
};

export const fetchSingleChirp = async (chirpId: string) => {
  const res = await api.get(`/api/tweets/${chirpId}`);
  if (!res.data) throw new Error('Failed to fetch chirp data');
  return res.data; 
};

export const fetchUserChirps = async (userId: string) => {
  const res = await api.get(`/api/tweets/user/${userId}`);
  if (!res.data) throw new Error('Failed to fetch chirps');
  return res.data; 
};