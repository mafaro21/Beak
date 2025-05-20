import { useMutation, useQueryClient } from '@tanstack/react-query';
import { likeChirp, unLikeChirp } from "@/api/likes";

export const useLike = () => {
const queryClient = useQueryClient();

    return useMutation({
    mutationFn: (chirpId: string) => likeChirp(chirpId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['homeTweets', 'chirpDetails'] }); // or ['chirpDetails', id] for single
    },
  });
}

export const useUnlike = () => {
const queryClient = useQueryClient();

    return useMutation({
    mutationFn: (chirpId: string) => unLikeChirp(chirpId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['homeTweets', 'chirpDetails'] }); // or ['chirpDetails', id] for single
    },
  });
}