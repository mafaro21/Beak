import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { editProfile, fetchUserDetails } from "@/api/profile";

export const useUserDetails = (userId: any) =>{
     return useQuery({ 
        queryKey: ["userDetails", userId], 
        queryFn: ()=> fetchUserDetails(userId) 
    })
    
}

export const useEditProfile = (userId: any) =>{
  const queryClient = useQueryClient();

     return useMutation({
        mutationFn: (data: any) => editProfile(data),
        onSuccess: ()=>{
            console.log(userId)
            queryClient.invalidateQueries({queryKey: ["userDetails", userId]})
        }
     })
    
}

