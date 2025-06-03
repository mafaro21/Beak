import { useMutation, useQueryClient } from '@tanstack/react-query';
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

export const useCheckFollowers = (userId: string) => {
  const queryClient = useQueryClient();

    return useMutation({
    mutationFn: () => checkFollowers(userId),
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ["homeChirps"]})
      queryClient.invalidateQueries({queryKey: ["userDetails", userId]})
    },
  });
}

export const useCheckFollowing = (userId: string) => {
  const queryClient = useQueryClient();

    return useMutation({
    mutationFn: () => checkFollowing(userId),
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ["homeChirps"]})
      queryClient.invalidateQueries({queryKey: ["userDetails", userId]})
    },
  });
}