import { useMutation } from '@tanstack/react-query';
import { register } from '@/api/auth';
import { useAuthStore } from '@/store/authStore';

export const useRegister = () => {

  const setUser = useAuthStore((state) => state.setUser)

  return useMutation({
    mutationFn: register,
    onSuccess: (data) =>{
      console.log(data)
      setUser(data)
    }
  });
};
