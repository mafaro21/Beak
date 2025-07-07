import { api } from "./axios";

export const trendingHashtags = async () => {
  const res = await api.get(`/api/hashtags/trending`);
  if (!res.data) throw new Error('Failed to fetch trending hashtags');
  return res.data; 
  
}

// export const viewHashtags = async (tag: string) => {
//   const res = await api.get(`/api/hashtags/view?tag=${tag}`);
//   if (!res.data) throw new Error('Failed to fetch chirps');
//   return res.data; 
  
// }