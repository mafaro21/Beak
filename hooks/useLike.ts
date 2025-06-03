import { useMutation, useQueryClient } from '@tanstack/react-query';
import { likeChirp, unLikeChirp } from "@/api/likes";

export const useLike = () => {
  const queryClient = useQueryClient();

    return useMutation({
    mutationFn: (chirpId: string) => likeChirp(chirpId),
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ["homeChirps"]})
            queryClient.invalidateQueries({queryKey: ["myChirps"]})
            queryClient.invalidateQueries({queryKey: ["chirpDetails"]})
            queryClient.invalidateQueries({queryKey: ["myLikedChirps"]})
    },
  });
}

export const useUnlike = () => {
  const queryClient = useQueryClient();

    return useMutation({
    mutationFn: (chirpId: string) => unLikeChirp(chirpId),
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ["homeChirps"]})
            queryClient.invalidateQueries({queryKey: ["myChirps"]})
            queryClient.invalidateQueries({queryKey: ["chirpDetails"]})
            queryClient.invalidateQueries({queryKey: ["myLikedChirps"]}) 
    },
  });
}