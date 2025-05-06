import { useQuery } from "@tanstack/react-query";
import { fetchHomeChirps } from "@/api/chirps";

export const useHomeChirps = () =>{

    return useQuery({ queryKey: ['homeTweets'], queryFn: fetchHomeChirps })
}