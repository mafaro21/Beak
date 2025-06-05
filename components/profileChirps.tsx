import React, { useEffect, useState } from 'react'
import Chirp from './chirp'
import { useUserChirps } from '@/hooks/useChirps'
import Loader from './loader'
import { useAuthStore } from '@/store/authStore'
import { useLogout } from '@/hooks/useLogout'
import { toast } from "sonner"

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


    const [errorMessage, setErrorMessage] = useState('')
    const [errorState, setErrorState] = useState(false)
    const { data, isLoading, error } = useUserChirps(userId)
    const auth = useAuthStore();
    const { mutate: logout } = useLogout()

    sendToProfile(data?.length)

    useEffect(() => {

        if (error) {
            const err = error as { status?: number; message?: string };

            switch (err.status) {
                case 404:
                    setErrorState(true)
                    setErrorMessage(`No chirps.... yet`)
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
                            originalChirpId=''
                            isFollowedByMe={true}

                        />
                    ))}

        </div>
    )
}
