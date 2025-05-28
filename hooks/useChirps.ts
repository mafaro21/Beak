import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { comment, createChirp, deleteChirp, deleteComment, fetchHomeChirps } from "@/api/chirps";
import { fetchSingleChirp } from "@/api/chirps";
import { fetchUserChirps } from "@/api/chirps";

// const queryClient = useQueryClient();

export const useHomeChirps = () =>{
    return useQuery({ queryKey: ["homeChirps"], queryFn: fetchHomeChirps })
}

export const useSingleChirp = (chirpId: string) =>{
    return useQuery({
        queryKey: ["chirpDetails", chirpId],
        queryFn: ()=> fetchSingleChirp(chirpId),
        enabled: !!chirpId,
    })
}

export const useUserChirps = (userId: string) =>{
    return useQuery({ 
        queryKey: ["myChirps", userId], 
        queryFn: ()=> fetchUserChirps(userId),
    })
}

export const useCreateChirps = () => {
const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (content: string)=> createChirp(content),
        onSuccess: (content) => {
            console.log(content)
            queryClient.invalidateQueries({queryKey: ["homeChirps"]})
            queryClient.invalidateQueries({queryKey: ["myChirps"]})
        }
    })
}

export const useDeleteChirps = (chirpId: string) =>{
const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (chirpId: string)=> deleteChirp(chirpId),
        onSuccess: (data) => {
            console.log(data)
            queryClient.invalidateQueries({queryKey: ["homeChirps"]})
            queryClient.invalidateQueries({queryKey: ["myChirps"]})
            queryClient.invalidateQueries({queryKey: ["chirpDetails", chirpId]})

        }
    })
}

interface CommentPayload {
  chirpId: string;
  content: string;
}

export const useComment = (chirpId: string) => {
const queryClient = useQueryClient();
    return useMutation({
        mutationFn: ({ chirpId, content }: CommentPayload)=> comment(chirpId, content),
        onSuccess: (content) => {
            console.log(content)
            queryClient.invalidateQueries({queryKey: ["chirpDetails", chirpId]})
            queryClient.invalidateQueries({queryKey: ["homeChirps"]})
            queryClient.invalidateQueries({queryKey: ["myChirps"]})
        }
    })
}

interface CommentDeletePayload{
    commentId: string
    chirpId: string
}

export const useDeleteComment = (chirpId: string) =>{
const queryClient = useQueryClient();
    return useMutation({
        mutationFn: ({commentId, chirpId}: CommentDeletePayload)=> deleteComment(commentId, chirpId),
        onSuccess: (data) => {
            console.log(data)
            queryClient.invalidateQueries({queryKey: ["chirpDetails", chirpId]})
            queryClient.invalidateQueries({queryKey: ["homeChirps"]})
            queryClient.invalidateQueries({queryKey: ["myChirps"]})

        }
    })
}


