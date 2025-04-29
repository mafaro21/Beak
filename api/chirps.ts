import { api } from './axios';

export const createChirp = async (data: { title: string; content: string }) => {
  const response = await api.post('/posts', data);
  return response.data;
};

export const fetchChirp = async () => {
  const response = await api.get('/posts');
  return response.data;
};