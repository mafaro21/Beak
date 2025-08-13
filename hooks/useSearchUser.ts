import { search } from "@/api/search";
import { useQuery, UseQueryOptions } from "@tanstack/react-query";


export const useSearchUser = (searchQuery: any, options?: Omit<UseQueryOptions<any>, 'queryKey' | 'queryFn'>) =>{
     return useQuery({ 
        queryKey: ["search", searchQuery], 
        queryFn: ()=> search(searchQuery) ,
        enabled: true,
        ...options
    })
    
}