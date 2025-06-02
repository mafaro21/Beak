import { useUserLikedChirps } from '@/hooks/useChirps'
import React, { useEffect, useState } from 'react'
import Loader from './loader'
import Chirp from './chirp'

export default function ProfileLikes() {
    const { data, isLoading, error } = useUserLikedChirps()
    const [errorMessage, setErrorMessage] = useState('')

    useEffect(() => {
        if (error) {
            const err = error as { status?: number; message?: string };

            switch (err.status) {
                case 404:
                    setErrorMessage(`You haven't liked anything yet`)
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
                    data?.map((item: any) => {
                        return (
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
                            />
                        )
                    })
            }

        </div>
    )
}
