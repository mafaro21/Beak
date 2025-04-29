import { useMutation } from '@tanstack/react-query';
import { login } from '@/api/auth';
// import { saveToken } from '@/lib/token'; 

export const useLogin = () => {
  return useMutation({
    mutationFn: login,
    onSuccess: (data) => {
    //   saveToken(data.token); 
    console.log(data)
    },
  });
};
