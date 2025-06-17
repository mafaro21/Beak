import { useQuery } from "@tanstack/react-query";
import {topUsers} from '@/api/topUsers'

export const useTopUsers = () =>{
     return useQuery({ 
        queryKey: ["topUsers"], 
        queryFn: ()=> topUsers() 
    })
    
}