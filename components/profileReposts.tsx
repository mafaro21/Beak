import { useUserRepostChirps } from '@/hooks/useChirps'
import React, { useEffect, useState } from 'react'
import Loader from './loader'
import Chirp from './chirp'
import { useAuthStore } from '@/store/authStore'
import { useLogout } from '@/hooks/useLogout'

interface RepostProps {
    userId: string
}

export default function ProfileReposts({ userId }: RepostProps) {

    const [errorMessage, setErrorMessage] = useState('')
    const { data, isLoading, error } = useUserRepostChirps(userId)
    const [errorState, setErrorState] = useState(false)
    const auth = useAuthStore();
    // console.log(data)
    const { mutate: logout, isPending: pendingLogout } = useLogout()

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
                    setErrorState(true)
                    setErrorMessage('Something went wrong')
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
                            key={item.id}
                            id={item.id}
                            username={item.user.fullname}
                            isVerified={false}
                            atname={item.user.username}
                            date={item.dateposted}
                            chirp={item.content}
                            comments={item.comments}
                            reposts={item.retweets}
                            likes={item.likes}
                            isLikedByMe={item.isLikedByMe}
                            isRepostedByMe={item.isRetweetByMe}
                            originalChirpId=''
                            isFollowedByMe={true}

                        />
                    ))}
        </div>
    )
}
