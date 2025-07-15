import { api } from "./axios";

export const fetchUserDetails = async (userId: any) => {
  const res = await api.get(`/api/profile/user/${userId}`);
  if (!res.data) throw new Error('Failed to fetch user details');
  return res.data; 
  
}

export const editProfile = async (data: any) => {
  try {
    const res = await api.put(`/api/profile/mine/edit/`, data);
  if (!res.data) throw new Error('Failed to edit profile');
  return res.data; 
  
  } catch (error: any) {
    throw error
  }
  
}
