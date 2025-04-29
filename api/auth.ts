import { api } from './axios'; // reusing our axios instance

type LoginData = {
  username: string;
  password: string;
};

type RegisterData = {
  fullname: string;
  email: string;
  password: string;
  rePassword: string;
};

export const login = async (data: LoginData) => {
  const response = await api.post('/auth/login', data);
  return response.data;
};

export const register = async (data: RegisterData) => {
  const response = await api.post('/auth/register', data);
  return response.data;
};

export const logout = async () => {
  const response = await api.post('/auth/logout');
  return response.data;
};
