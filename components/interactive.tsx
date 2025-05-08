"use client"
import React, { useState } from 'react'
import { Home, Search, Bell, Mail, User, MoreHorizontal, MessageCircle, Heart, Repeat2, Upload, CheckCircle } from "lucide-react"
import { useThemeStore } from '@/store/themeStore'

type InteractiveProps = {
    comments: string,
    reposts: string,
    likes: string,
    isLikedByMe: boolean,
}

export default function Interactive({ comments, reposts, likes, isLikedByMe }: InteractiveProps) {

    const [like, setLike] = useState(isLikedByMe)
    const [repost, setRepost] = useState(false)

    // const handleComment = (e: React.MouseEvent<HTMLDivElement>) => {
    //     e.preventDefault()
    //     console.log('comment')
    // }

    const handleRepost = (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation()
        e.preventDefault()
        // console.log('repost')

        setRepost(!repost)
    }

    const handleLike = (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation()
        e.preventDefault()
        // console.log('like')

        setLike(!like)
    }

    const { theme } = useThemeStore()

    return (
        <div className="mt-1 w-full flex justify-between px-1 pointer-events-auto" >
            {/* Comment  */}
            <div className="flex items-center cursor-pointer text-gray-500 hover:text-sky-500 group">
                <MessageCircle className={`p-1 w-7 h-6 group-hover:text-sky-500 ${theme === 'light' ? `group-hover:bg-sky-600/10` : `group-hover:bg-sky-200/10`} rounded-4xl px-1`} style={{ marginTop: '3px' }} />
                <div className="text-sm mt-1 group-hover:text-sky-500">{comments}</div>
            </div>

            {/* Repost  */}
            <div onClick={(e) => handleRepost(e)} className="flex items-center cursor-pointer text-gray-500 hover:text-emerald-500 group">
                <Repeat2 className={`p-1 w-7 h-7 ${repost && ' stroke-emerald-500'} group-hover:text-emerald-500 ${theme === 'light' ? `group-hover:bg-emerald-600/10` : `group-hover:bg-emerald-200/10`} rounded-4xl px-1`} style={{ marginTop: '3px' }} />
                <div className={`text-sm mt-1 group-hover:text-emerald-500  ${repost && ' text-emerald-500'}`}>{reposts}</div>
            </div>

            {/* Like */}
            <div onClick={(e) => handleLike(e)} className="flex items-center cursor-pointer text-gray-500 group ">
                <Heart className={`p-1 w-7 h-6 ${like && 'fill-pink-600 text-pink-600'}  group-hover:text-pink-600 ${theme === 'light' ? `group-hover:bg-pink-600/10` : `group-hover:bg-pink-200/10`} group-hover:bg-pink-200/10 rounded-4xl px-1`} style={{ marginTop: '3px' }} />
                <div className={`text-sm mt-1 group-hover:text-pink-600 ${like && 'text-pink-600'}`}>{likes}</div>
            </div>

            {/* Other */}
            <div className={`flex items-center cursor-pointer text-gray-500 group ${theme === 'light' ? `group-hover:bg-blue-600/10` : `group-hover:bg-blue-200/10`} rounded-xl px-1`}>
                <Upload className="p-1 w-6 h-6 group-hover:text-blue-500 group-hover:fill-blue-500" style={{ marginTop: '3px' }} />
            </div>
        </div>
    )
}
