import { useMutation, useQueryClient, useQuery } from '@tanstack/react-query';
import { follow,unFollow,checkFollowers,checkFollowing } from '@/api/follow';

export const useFollow = () => {
  const queryClient = useQueryClient();

    return useMutation({
    mutationFn: (userId: string) => follow(userId),
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ["homeChirps"]})
      queryClient.invalidateQueries({queryKey: ["userDetails"]})
    },
  });
}

export const useUnFollow = () => {
  const queryClient = useQueryClient();

    return useMutation({
    mutationFn: (userId: string) => unFollow(userId),
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ["homeChirps"]})
      queryClient.invalidateQueries({queryKey: ["userDetails"]})
    },
  });
}

export const useCheckFollowers = (userId: any) => {
    return useQuery({ 
        queryKey: ["followers", userId], 
        queryFn: ()=> checkFollowers(userId),
    })
}

export const useCheckFollowing = (userId: any) => {
  return useQuery({ 
        queryKey: ["following", userId], 
        queryFn: ()=> checkFollowing(userId),
    })
}