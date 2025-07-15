import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { comment, createChirp, deleteChirp, deleteComment, fetchHashtagChirps, fetchHomeChirps } from "@/api/chirps";
import { fetchSingleChirp, fetchUserChirps, fetchUserLikedChirps, fetchUserRepostChirps } from "@/api/chirps";

// const queryClient = useQueryClient();

//getting all posts for home
export const useHomeChirps = () =>{
    return useQuery({ queryKey: ["homeChirps"], queryFn: fetchHomeChirps })
}

//detailed expand of post
export const useSingleChirp = (chirpId: string) =>{
    return useQuery({
        queryKey: ["chirpDetails", chirpId],
        queryFn: ()=> fetchSingleChirp(chirpId),
        
    })
}

//all posts for a specific user
export const useUserChirps = (userId: string) =>{
    return useQuery({ 
        queryKey: ["myChirps", userId], 
        queryFn: ()=> fetchUserChirps(userId),
    })
}

//posts a user has liked
export const useUserLikedChirps = () =>{
    return useQuery({ 
        queryKey: ["myLikedChirps"], 
        queryFn: ()=> fetchUserLikedChirps(),
    })
}

//posts a user has reposted
export const useUserRepostChirps = (userId: string) =>{
    return useQuery({ 
        queryKey: ["myRepostedChirps"], 
        queryFn: ()=> fetchUserRepostChirps(userId),
    })
}

//sending a post
export const useCreateChirps = () => {
const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (content: string)=> createChirp(content),
        onSuccess: (content) => {
            // console.log(content)
            queryClient.invalidateQueries({queryKey: ["homeChirps"]})
            queryClient.invalidateQueries({queryKey: ["myChirps"]})
            queryClient.invalidateQueries({queryKey: ["trendingHashtags"]})
        }
    })
}

//deleting the post
export const useDeleteChirps = (chirpId: string) =>{
const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (chirpId: string)=> deleteChirp(chirpId),
        onSuccess: (data) => {
            // console.log(data)
            queryClient.invalidateQueries({queryKey: ["homeChirps"]})
            queryClient.invalidateQueries({queryKey: ["myChirps"]})
            queryClient.invalidateQueries({queryKey: ["chirpDetails", chirpId]})
            queryClient.invalidateQueries({queryKey: ["comments", chirpId]})

        }
    })
}

//sending a comment
interface CommentPayload {
  chirpId: string;
  content: string;
}

export const useComment = (chirpId: string) => {
const queryClient = useQueryClient();
    return useMutation({
        mutationFn: ({ chirpId, content }: CommentPayload)=> comment(chirpId, content),
        onSuccess: (content) => {
            // console.log(content)
            queryClient.invalidateQueries({queryKey: ["chirpDetails", chirpId]})
            queryClient.invalidateQueries({queryKey: ["comments", chirpId]})
            queryClient.invalidateQueries({queryKey: ["homeChirps"]})
            queryClient.invalidateQueries({queryKey: ["myChirps"]})
        }
    })
}

//deleting a comment
interface CommentDeletePayload{
    commentId: string
    chirpId: string
}

export const useDeleteComment = (chirpId: string) =>{
const queryClient = useQueryClient();
    return useMutation({
        mutationFn: ({commentId, chirpId}: CommentDeletePayload)=> deleteComment(commentId, chirpId),
        onSuccess: (data) => {
            // console.log(data)
            queryClient.invalidateQueries({queryKey: ["chirpDetails", chirpId]})
            queryClient.invalidateQueries({queryKey: ["comments", chirpId]})
            queryClient.invalidateQueries({queryKey: ["homeChirps"]})
            queryClient.invalidateQueries({queryKey: ["myChirps"]})

        }
    })
}

//fetching hastags
export const useHashtagChirp = (tag: string) =>{
    return useQuery({
        queryKey: ["hashtag", tag],
        queryFn: ()=> fetchHashtagChirps(tag),
    })
}


