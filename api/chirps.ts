import { api } from './axios';

export const createChirp = async (data: { title: string; content: string }) => {
  const response = await api.post('/posts', data);
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