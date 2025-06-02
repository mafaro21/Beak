"use client"
import React, { useState, useRef } from 'react'
import { Home, Search, Bell, Mail, User, MoreHorizontal, MessageCircle, Heart, Repeat2, Upload, CheckCircle } from "lucide-react"
import { useThemeStore } from '@/store/themeStore'
import { useAuthStore } from '@/store/authStore'
import { useLike, useUnlike } from '@/hooks/useLike'
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation'
import { LoginDialog, LoginDialogHandle } from '@/components/LoginDialog'
import { useRepost, useUnRepost } from '@/hooks/useRepost'
import { useLogout } from '@/hooks/useLogout'

type InteractiveProps = {
    comments: string,
    reposts: number,
    likes: number,
    isLikedByMe: boolean,
    isRepostedByMe: boolean,
    chirpId: string,
}

export default function Interactive({ comments, reposts, likes, isLikedByMe, isRepostedByMe, chirpId }: InteractiveProps) {

    const { mutate: likeChirp, isPending: isLiking } = useLike()
    const { mutate: unLikeChirp, isPending: isUnliking } = useUnlike()

    const { mutate: repostChirp, isPending: isReposting } = useRepost()
    const { mutate: unRepostChirp, isPending: isUnReposting } = useUnRepost()

    const { mutate: logout, isPending: pendingLogout } = useLogout()

    const auth = useAuthStore();
    const [like, setLike] = useState(isLikedByMe)
    const [repost, setRepost] = useState(isRepostedByMe)

    const [showDialog, setShowDialog] = useState(false);

    const [likeCount, setLikeCount] = useState(likes)
    const [repostCount, setRepostCount] = useState(reposts)
    const loggedInUser = useAuthStore((state) => state.user)
    const router = useRouter()

    const dialogRef = useRef<LoginDialogHandle>(null);

    const handleComment = () => {
        if (!loggedInUser?.loggedin) {
            dialogRef.current?.show('comment');
            return
        }
    }

    const handleRepost = (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation()
        e.preventDefault()
        // console.log('repost')
        if (!loggedInUser?.loggedin) {
            dialogRef.current?.show('repost');
            return
        }

        if (isReposting || isUnReposting) return

        if (!isRepostedByMe && !repost) {
            setRepostCount(repostCount + 1)
            repostChirp(chirpId, {
                onError: (error: any) => {
                    const status = error?.response?.status

                    if (status === 401) {
                        auth.logout()
                        logout()
                    } else if (status === 404) {
                        console.log('404')
                    } else {
                        console.log('random error')
                    }
                }
            })
        } else {
            setRepostCount(repostCount - 1)
            unRepostChirp(chirpId, {
                onError: (error: any) => {
                    const status = error?.response?.status

                    if (status === 401) {
                        auth.logout()
                        logout()
                    } else if (status === 404) {
                        console.log('404')
                    } else {
                        console.log('random error')
                    }
                }
            })
        }

        setRepost(!repost)
    }

    const handleLike = (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation()
        e.preventDefault()
        // console.log(chirpId)

        if (!loggedInUser?.loggedin) {
            dialogRef.current?.show('like');
            return
        }

        if (isLiking || isUnliking) return

        if (!isLikedByMe && !like) {
            likeChirp(chirpId, {
                onError: (error: any) => {
                    const status = error?.response?.status

                    if (status === 401) {
                        auth.logout()
                        logout()
                    } else if (status === 404) {
                        console.log('404')
                    } else {
                        console.log('random error')
                    }
                }
            })
            setLikeCount(likeCount + 1)
        } else {
            unLikeChirp(chirpId, {
                onError: (error: any) => {
                    const status = error?.response?.status

                    if (status === 401) {
                        auth.logout()
                        logout()
                    } else if (status === 404) {
                        console.log('404')
                    } else {
                        console.log('random error')
                    }
                }
            })
            setLikeCount(likeCount - 1)
        }

        setLike(!like)
    }

    const { theme } = useThemeStore()

    return (
        <div>
            <div className="mt-1 w-full flex justify-between px-1 pointer-events-auto" >
                {/* Comment  */}
                <div onClick={() => handleComment()} className="flex items-center cursor-pointer text-gray-500 hover:text-sky-500 group">
                    <MessageCircle className={`p-1 w-7 h-6 group-hover:text-sky-500 ${theme === 'light' ? `group-hover:bg-sky-600/10` : `group-hover:bg-sky-200/10`} rounded-4xl px-1`} style={{ marginTop: '3px' }} />
                    <div className="text-sm mt-1 group-hover:text-sky-500">{comments}</div>
                </div>

                {/* Repost  */}
                <div onClick={(e) => handleRepost(e)} className="flex items-center cursor-pointer text-gray-500 hover:text-emerald-500 group">
                    <Repeat2 className={`p-1 w-7 h-7 ${repost && ' stroke-emerald-500'} group-hover:text-emerald-500 ${theme === 'light' ? `group-hover:bg-emerald-600/10` : `group-hover:bg-emerald-200/10`} rounded-4xl px-1`} style={{ marginTop: '3px' }} />
                    <div className={`text-sm mt-1 group-hover:text-emerald-500  ${repost && ' text-emerald-500'}`}>{repostCount}</div>
                </div>

                {/* Like */}
                <div onClick={(e) => handleLike(e)} className="flex items-center cursor-pointer text-gray-500 group">
                    <Heart className={`p-1 w-7 h-6 ${like && 'fill-pink-600 text-pink-600'}  group-hover:text-pink-600 ${theme === 'light' ? `group-hover:bg-pink-600/10` : `group-hover:bg-pink-200/10`} group-hover:bg-pink-200/10 rounded-4xl px-1`} style={{ marginTop: '3px' }} />
                    <div className={`text-sm mt-1 group-hover:text-pink-600 ${like && 'text-pink-600'}`}>{likeCount}</div>
                </div>

                {/* Other */}
                <div className={`flex items-center cursor-pointer text-gray-500 group ${theme === 'light' ? `group-hover:bg-blue-600/10` : `group-hover:bg-blue-200/10`} rounded-xl px-1`}>
                    <Upload className="p-1 w-6 h-6 group-hover:text-blue-500 group-hover:fill-blue-500" style={{ marginTop: '3px' }} />
                </div>

            </div>

            <LoginDialog ref={dialogRef} />

        </div>
    )
}
