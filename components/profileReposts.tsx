import { useUserRepostChirps } from '@/hooks/useChirps'
import React, { useEffect, useState } from 'react'
import Loader from './loader'
import Chirp from './chirp'
import { useAuthStore } from '@/store/authStore'
import { useLogout } from '@/hooks/useLogout'
import { toast } from "sonner"

interface RepostProps {
    userId: string
}

export default function ProfileReposts({ userId }: RepostProps) {

    const [errorMessage, setErrorMessage] = useState('')
    const { data, isLoading, error } = useUserRepostChirps(userId)
    const [errorState, setErrorState] = useState(false)
    const auth = useAuthStore();
    console.log(data)
    const { mutate: logout, } = useLogout()

    useEffect(() => {
        if (error) {
            const err = error as { status?: number; message?: string };

            switch (err.status) {
                case 404:
                    setErrorState(true)
                    setErrorMessage(`No reposts.... yet`)
                    break;

                case 401:
                    auth.logout()
                    logout()

                default:
                    toast("Failed to get chirps", {
                        style: {
                            background: 'red',
                            border: 'none',
                            textAlign: "center",
                            justifyContent: "center"
                        }
                    })
                    break;
            }
        }
    }, [error])


    return (
        <div>
            {isLoading ? <Loader /> :
                errorState ? <div className='text-center text-gray-500 mt-3 font-bold'>{errorMessage}</div> :
                    data?.map((item: any) => (
                        <Chirp
                            key={item.ogtweet.id}
                            id={item.ogtweet.id}
                            username={item.ogtweet.user.fullname}
                            isVerified={false}
                            atname={item.ogtweet.user.username}
                            date={item.ogtweet.dateposted}
                            chirp={item.ogtweet.content}
                            comments={item.ogtweet.comments}
                            reposts={item.ogtweet.retweets}
                            likes={item.ogtweet.likes}
                            isLikedByMe={item.ogtweet.isLikedByMe}
                            isRepostedByMe={item.ogtweet.isRetweetByMe}
                            originalChirpId=''
                            isFollowedByMe={true}

                        />
                    ))}
        </div>
    )
}
