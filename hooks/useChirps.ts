import { useQuery } from "@tanstack/react-query";
import { fetchHomeChirps } from "@/api/chirps";
import { fetchSingleChirp } from "@/api/chirps";


export const useHomeChirps = () =>{

    return useQuery({ queryKey: ['homeTweets'], queryFn: fetchHomeChirps })
}

export const useSingleChirp = (chirpId: string) =>{
    return useQuery({
        queryKey: ['chirpDetails', chirpId],
        queryFn: ()=> fetchSingleChirp(chirpId),
        enabled: !!chirpId,
    })
}


