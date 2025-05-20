import { fetchComments } from "@/api/comment";
import { useQuery } from "@tanstack/react-query";

export const useFetchComments = (chirpId: string) => {
    return useQuery({
        queryKey: ['comments', chirpId], 
        queryFn: ()=> fetchComments(chirpId)
    })
}