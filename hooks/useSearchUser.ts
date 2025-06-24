import { search } from "@/api/search";
import { useQuery } from "@tanstack/react-query";


export const useSearchUser = (searchQuery: any) =>{
     return useQuery({ 
        queryKey: ["search", searchQuery], 
        queryFn: ()=> search(searchQuery) 
    })
    
}