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
  try {
    const response = await api.post("/api/auth/login", data);

    // console.log(response.data)

    if (!response.data) {
      throw new Error(response.data.message || "Login failed");
    }
    
    return response.data
  } catch (error: any) {
    const message = error.response?.data?.message || error.message || "Something went wrong";
    throw new Error(message);
  }
};

export const register = async (data: RegisterData) => {
    try {
        const response = await api.post("/api/auth/register", data);
    
        if (!response.data.success) {
          throw new Error(response.data.message || "Registration failed");
        }
    
        return response.data;
      } catch (error: any) {
        const message = error.response?.data?.message || error.message || "Something went wrong";
        throw new Error(message);
      }
};

export const logout = async () => {
  const response = await api.post('/api/auth/logout');
  return response.data;
};

export const loginStatus = async () =>{
  const response = await api.get('/api/auth/loginstatus')
  return response.data
}
