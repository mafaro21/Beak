import { useQuery } from "@tanstack/react-query";
import { fetchSingleChirp } from "@/api/chirps";

export const useSingleChirp = (chirpId: string) =>{
    return useQuery({
        queryKey: ['chirpDetails', chirpId],
        queryFn: ()=> fetchSingleChirp(chirpId),
        enabled: !!chirpId,
    })
}