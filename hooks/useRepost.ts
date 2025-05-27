import { useMutation, useQueryClient } from '@tanstack/react-query';
import { repostChirp, unRepostChirp } from '@/api/repost';

export const useRepost = () => {
    const queryClient = useQueryClient();
    
        return useMutation({
        mutationFn: (chirpId: string) => repostChirp(chirpId),
        onSuccess: () => {
          queryClient.invalidateQueries({queryKey: ["homeChirps"]})
            queryClient.invalidateQueries({queryKey: ["myChirps"]})
            queryClient.invalidateQueries({queryKey: ["chirpDetails"]})
        },
      });
}

export const useUnRepost = () => {
    const queryClient = useQueryClient();

    return useMutation({
    mutationFn: (chirpId: string) => unRepostChirp(chirpId),
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ["homeChirps"]})
            queryClient.invalidateQueries({queryKey: ["myChirps"]})
            queryClient.invalidateQueries({queryKey: ["chirpDetails"]})
    },
  });
}