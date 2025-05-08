import { useQuery } from "@tanstack/react-query";
import { fetchUserDetails } from "@/api/profile";

export const useUserDetails = (userId: any) =>{
     return useQuery({ 
        queryKey: ['userDetails', userId], 
        queryFn: ()=> fetchUserDetails(userId) 
    })
    
}
