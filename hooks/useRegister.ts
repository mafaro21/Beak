import { useMutation } from '@tanstack/react-query';
import { register } from '@/api/auth';

export const useRegister = () => {
  return useMutation({
    mutationFn: register,
    onSuccess: (data) => {
        //   saveToken(data.token); 
        console.log(data)
        },
  });
};
