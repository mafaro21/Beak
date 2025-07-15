import { useMutation, useQuery } from '@tanstack/react-query';
import { login, loginStatus } from '@/api/auth';
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

export const useCheckStatus = () =>{
  return useQuery({
    queryKey: ["loginStatus"],
    queryFn: ()=> loginStatus()
  })
}
