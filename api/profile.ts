import { api } from "./axios";

export const fetchUserDetails = async (userId: any) => {
  const res = await api.get(`/api/profile/user/${userId}`);
  if (!res.data) throw new Error('Failed to fetch user details');
  return res.data; 
  
}