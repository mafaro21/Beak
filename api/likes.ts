import { api } from './axios';

export const likeChirp = async (chirpId: string) => {
    const res = await api.post(`/api/likes/tweet/${chirpId}`)
    if (!res.data) throw new Error('Unable to like at the moment')
    return res.data
}

export const unLikeChirp = async (chirpId: string) => {
    const res = await api.delete(`/api/likes/tweet/${chirpId}`)
    if (!res.data) throw new Error('Unable to unlike at the moment')
    return res.data
}