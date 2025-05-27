import { api } from './axios';

export const repostChirp = async (chirpId: string) => {
    const res = await api.post(`/api/retweets/tweet/${chirpId}`)
    if (!res.data) throw new Error('Unable to repost at the moment')
    return res.data
}

export const unRepostChirp = async (chirpId: string) => {
    const res = await api.delete(`/api/retweets/tweet/${chirpId}`)
    if (!res.data) throw new Error('Unable to repost at the moment')
    return res.data
}