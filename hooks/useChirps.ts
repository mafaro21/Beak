import { useQuery } from "@tanstack/react-query";
import { fetchHomeChirps } from "@/api/chirps";
import { fetchSingleChirp } from "@/api/chirps";
import { fetchUserChirps } from "@/api/chirps";


export const useHomeChirps = () =>{
    return useQuery({ queryKey: ['homeChirps'], queryFn: fetchHomeChirps })
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
        queryKey: ['myChirps', userId], 
        queryFn: ()=> fetchUserChirps(userId),
    })
}


