import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createChirp, deleteChirp, fetchHomeChirps } from "@/api/chirps";
import { fetchSingleChirp } from "@/api/chirps";
import { fetchUserChirps } from "@/api/chirps";

// const queryClient = useQueryClient();

export const useHomeChirps = () =>{
    return useQuery({ queryKey: ["homeChirps"], queryFn: fetchHomeChirps })
}

export const useSingleChirp = (chirpId: string) =>{
    return useQuery({
        queryKey: ['chirpDetails', chirpId],
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
            queryClient.invalidateQueries({queryKey: ["homeChirps", "myChirps"]})
        }
    })
}

export const useDeleteChirps = (chirpId: string) =>{
const queryClient = useQueryClient();
    return useMutation({
        mutationFn: ()=> deleteChirp(chirpId),
        onSuccess: (data) => {
            console.log(data)
            queryClient.invalidateQueries({queryKey: ["homeChirps", "myChirps"]})

        }
    })
}


