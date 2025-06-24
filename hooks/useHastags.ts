import { trendingHashtags } from "@/api/hashtags";
import { useQuery } from "@tanstack/react-query";

export const useTrendingHashtags = () =>{
     return useQuery({ 
        queryKey: ["trendingHashtags"], 
        queryFn: ()=> trendingHashtags() 
    })
    
}