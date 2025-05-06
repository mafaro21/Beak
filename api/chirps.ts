import { api } from './axios';

// export const createChirp = async (data: { title: string; content: string }) => {
//   const response = await api.post('/posts', data);
//   return response.data;
// };

export const fetchHomeChirps = async () => {
  const res = await api.get('/api/tweets/');
  if (!res.data) throw new Error('Failed to fetch');
  return res.data; 
  
};