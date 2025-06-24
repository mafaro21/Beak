import { api } from "./axios";

export const search = async (searchQuery: any) => {
  const res = await api.get(`/api/extras/search?u=${searchQuery}`);
  if (!res.data) throw new Error('Failed to fetch search details');
  return res.data; 
  
}