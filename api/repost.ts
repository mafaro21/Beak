import { api } from './axios';

export const repostChirp = async (chirpId: string) => {
    try {
     const res = await api.post(`/api/retweets/tweet/${chirpId}`)
    if (!res.data) throw new Error('Unable to repost at the moment')
    return res.data
  } catch (error: any) {
    throw error
  }
   
}

export const unRepostChirp = async (chirpId: string) => {
    try {
    const res = await api.delete(`/api/retweets/tweet/${chirpId}`)
    if (!res.data) throw new Error('Unable to repost at the moment')
    return res.data
  } catch (error: any) {
    throw error
  }
    
}