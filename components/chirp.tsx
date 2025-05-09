"use client"
import React from 'react'
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import Interactive from "@/components/interactive"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Home, Search, Bell, Mail, User, MoreHorizontal, MessageCircle, Heart, Repeat2, Upload, CheckCircle, BadgeCheck } from "lucide-react"
import { useRouter } from 'next/navigation';
import { useThemeStore } from '@/store/themeStore'
import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en'
import ReactTimeAgo from 'react-time-ago'

type ChirpProps = {
    // profile: string,
    username: string;
    isVerified: boolean;
    atname: string;
    date: number;
    chirp: string;
    comments: string,
    reposts: string,
    likes: string,
    isLikedByMe: boolean
};


export default function Chirp({ username, isVerified, atname, date, chirp, comments, reposts, likes, isLikedByMe }: ChirpProps) {
    const router = useRouter()

    const { theme } = useThemeStore()

    // TimeAgo.addDefaultLocale(en)
    TimeAgo.addLocale(en)


    return (
        <div
            className="px-4 border-b pb-3 hover:cursor-pointer"
            onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                router.push('/profile/status');
            }}
        >
            <div className="flex gap-3 sm:grid sm:grid-cols-14 sm:gap-1">
                {/* Avatar */}
                <div className="sm:col-span-1">
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Avatar className="mt-4" style={{ border: '0px white solid' }}>
                                    <AvatarImage src={`https://robohash.org/${atname}.png?set=set5`} />
                                    <AvatarFallback>CN</AvatarFallback>
                                </Avatar>
                            </TooltipTrigger>
                            <TooltipContent className="flex shadow-lg shadow-gray-500" style={{ backgroundColor: 'var(--background)' }}>
                                <div className='flex'>
                                    <Avatar className="mr-3 mt-2 h-10 w-10" style={{ border: '0px white solid' }}>
                                        <AvatarImage src={`https://robohash.org/${atname}.png?set=set5`} />
                                        {/* <AvatarImage src={`https://api.multiavatar.com/${atname}.png`} /> */}
                                        <AvatarFallback>CN</AvatarFallback>
                                    </Avatar>
                                    <div className=''>
                                        <div className='flex mt-2'>
                                            <div className={`font-bold text-sm ${theme === 'light' ? 'text-black' : 'text-white'}`}>{username}</div>
                                            <div className=''>
                                                {isVerified ?
                                                    <BadgeCheck className={`w-5 h-5 ml-1 -mt-0.5 fill-blue-400 ${theme === 'light' ? 'text-white' : 'text-black'}`} />
                                                    :
                                                    null}
                                            </div>
                                        </div>
                                        <div className='text-gray-500 text-md'>@{atname}</div>
                                    </div>
                                </div>
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </div>

                {/* Text Content */}
                <div className="sm:col-span-13 flex-1">
                    <div className="flex justify-between w-full flex-wrap">
                        <div className="py-2 flex flex-wrap gap-x-1">
                            <div
                                className="font-bold hover:underline"
                                onClick={(e) => {
                                    e.preventDefault();
                                    e.stopPropagation();
                                    router.push(`/profile/${atname}`);
                                }}
                            >
                                {username}
                            </div>
                            {isVerified ?
                                <BadgeCheck className={`fill-blue-400 ${theme === 'light' ? 'text-white' : 'text-black'}  w-5 h-5 mt-[5px]`} />
                                :
                                null}
                            <div className="text-gray-500">@{atname}</div>
                            <div className="text-gray-500">· <ReactTimeAgo date={date} locale="en-US" timeStyle="twitter" /></div>
                        </div>

                        <div className={`py-2  `}>

                            <Popover>
                                <PopoverTrigger asChild onClick={(e) => {
                                    e.stopPropagation(); // Prevent click from bubbling up
                                }}>
                                    <MoreHorizontal className={`mr-2 h-7 w-7 hover:text-sky-500 ${theme === 'light' ? `hover:bg-sky-600/10` : `hover:bg-sky-200/10`} rounded-4xl p-1`} />

                                </PopoverTrigger>
                                <PopoverContent className="w-auto" style={{ backgroundColor: 'var(--background)', color: 'var(--text)' }} onClick={(e) => {
                                    e.stopPropagation(); // Prevent click from bubbling up
                                }}>
                                    <div className="grid gap-4 ">
                                        <div className="space-y-2">
                                            <div className="p-0.5 font-bold hover:cursor-pointer text-red-500">Delete</div>
                                            <div className="p-0.5 font-bold hover:cursor-pointer">Follow @{atname}</div>
                                            <div className="p-0.5 font-bold hover:cursor-pointer">Delete</div>
                                        </div>
                                    </div>
                                </PopoverContent>
                            </Popover>
                        </div>
                    </div>

                    <div style={{ marginTop: '-12px' }} className="select-text">
                        {chirp}
                    </div>

                    <Interactive
                        comments={comments}
                        reposts={reposts}
                        likes={likes}
                        isLikedByMe={isLikedByMe}
                    />
                </div>
            </div>
        </div>
    )
}
