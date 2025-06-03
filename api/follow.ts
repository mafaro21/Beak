import { api } from './axios';

export const follow = async (userId: string) => {
    try {
    const res = await api.post(`/api/follows/user/${userId}`)
    if (!res.data) throw new Error('Unable to follow at the moment')
    return res.data
  } catch (error: any) {
    throw error
  }
    
}

export const unFollow = async (userId: string) => {
    try {
    const res = await api.delete(`/api/follows/user/${userId}`)
    if (!res.data) throw new Error('Unable to un-follow at the moment')
    return res.data
  } catch (error: any) {
    throw error
  }
    
}

export const checkFollowers = async (userId: string) => {
    try {
    const res = await api.get(`/api/follows/to/${userId}`)
    if (!res.data) throw new Error('Unable to view followers at the moment')
    return res.data
  } catch (error: any) {
    throw error
  }
    
}

export const checkFollowing = async (userId: string) => {
    try {
    const res = await api.get(`/api/follows/from/${userId}`)
    if (!res.data) throw new Error('Unable to view following at the moment')
    return res.data
  } catch (error: any) {
    throw error
  }
    
}