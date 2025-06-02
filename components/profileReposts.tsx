import { useUserRepostChirps } from '@/hooks/useChirps'
import React, { useEffect, useState } from 'react'
import Loader from './loader'
import Chirp from './chirp'

interface RepostProps {
    userId: string
}

export default function ProfileReposts({ userId }: RepostProps) {

    const [errorMessage, setErrorMessage] = useState('')
    const { data, isLoading, error } = useUserRepostChirps(userId)
    // console.log(data)
    useEffect(() => {
        if (error) {
            const err = error as { status?: number; message?: string };

            switch (err.status) {
                case 404:
                    setErrorMessage(`No reposts.... yet`)
                    break;

                default:
                    setErrorMessage('Something went wrong')
                    break;
            }
        } else {
            setErrorMessage('')
        }
    }, [error])


    return (
        <div>
            {isLoading ? <Loader /> :
                errorMessage ? <div className='text-center text-gray-500 mt-3 font-bold'>{errorMessage}</div> :
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
                        />
                    ))}
        </div>
    )
}
