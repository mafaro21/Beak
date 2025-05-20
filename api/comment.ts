import { api } from './axios';

export const fetchComments = async (chirpId: string) => {
  const res = await api.get(`/api/comments/tweet/${chirpId}`);
  if (!res.data) throw new Error('Failed to fetch comments');
  return res.data; 
  
};