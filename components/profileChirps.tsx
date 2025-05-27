import React from 'react'
import Chirp from './chirp'
import { useUserChirps } from '@/hooks/useChirps'
import Loader from './loader'
import { useAuthStore } from '@/store/authStore'

interface UserIdProps {
    userId: string
    fullname: string
    username: string
}

interface ChirpNumber {
    sendToProfile: (data: number) => void
}

interface ProfileChirpsProps extends UserIdProps, ChirpNumber { }

export default function ProfileChirps({ userId, fullname, username, sendToProfile }: ProfileChirpsProps) {
    // const loggedInUser = useAuthStore((state) => state.user)

    const { data, isLoading } = useUserChirps(userId)
    console.log(data)

    sendToProfile(data?.length)

    return (
        <div>
            {isLoading ? <Loader /> :
                data?.map((item: any) => (
                    <Chirp
                        key={item.id}
                        id={item.id}
                        username={fullname}
                        isVerified={false}
                        atname={username}
                        date={item.dateposted}
                        chirp={item.content}
                        comments={item.comments}
                        reposts={item.retweets}
                        likes={item.likes}
                        isLikedByMe={item.isLikedByMe}
                        isRepostedByMe={item.isRetweetByMe}
                    />
                ))}

        </div>
    )
}
