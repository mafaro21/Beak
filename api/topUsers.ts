import {api} from './axios'

export const topUsers = async () => {
    try {
    const res = await api.get(`/api/extras/topusers`)
    if (!res.data) throw new Error('Unable to get top users at the moment')
    return res.data
  } catch (error: any) {
    throw error
  }
    
}