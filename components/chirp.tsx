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
import Link from 'next/link'
import { useAuthStore } from '@/store/authStore'
import { useDeleteChirps } from '@/hooks/useChirps'
import Loader from './loader'


type ChirpProps = {
    id: string,
    username: string;
    isVerified: boolean;
    atname: string;
    date: number;
    chirp: string;
    comments: string,
    reposts: string,
    likes: number,
    isLikedByMe: boolean
};


export default function Chirp({ id, username, isVerified, atname, date, chirp, comments, reposts, likes, isLikedByMe }: ChirpProps) {
    const router = useRouter()

    const { theme } = useThemeStore()

    const { mutate, isPending } = useDeleteChirps()

    // TimeAgo.addDefaultLocale(en)
    TimeAgo.addLocale(en)

    const loggedInUser = useAuthStore((state) => state.user)

    const handleDelete = () => {
        if (isPending) return

        mutate(id, {
            onSuccess: () => {
                console.log('deleted chirp')
            }
        })
    }

    return (
        <div
            className="px-4 border-b pb-3 hover:cursor-pointer"
            onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                router.push(`/profile/status/${id}`);
            }}
            key={id}
        >
            <div className="flex gap-3 sm:grid sm:grid-cols-14 sm:gap-1">
                {/* Avatar */}
                <div className="sm:col-span-1">
                    <TooltipProvider>
                        <Tooltip>
                            <Link href={`/profile/${atname}`} onClick={(e) => e.stopPropagation()}>
                                <TooltipTrigger asChild>
                                    <Avatar className="mt-4" style={{ border: '0px white solid' }}>
                                        <AvatarImage src={`https://robohash.org/${atname}.png?set=set5`} />
                                        <AvatarFallback>CN</AvatarFallback>
                                    </Avatar>
                                </TooltipTrigger>
                            </Link>
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
                            <Link href={`/profile/${atname}`}
                                className="font-bold hover:underline"
                                onClick={(e) => e.stopPropagation()}
                            // onClick={(e) => {
                            //     e.preventDefault();
                            //     e.stopPropagation();
                            //     router.push(`/profile/${atname}`);
                            // }}
                            >
                                {username}
                            </Link>
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
                                <PopoverContent className="w-auto" style={{ backgroundColor: 'var(--background)', color: 'var(--text)', boxShadow: '0 0 8px rgba(255, 255, 255, 0.4)' }} onClick={(e) => {
                                    e.stopPropagation(); // Prevent click from bubbling up
                                }}>
                                    <div className="grid gap-4 ">
                                        <div className="space-y-2">
                                            {loggedInUser?.username === atname ?
                                                <div className="p-0.5 font-bold hover:cursor-pointer text-red-500" onClick={handleDelete}>{isPending ? <Loader /> : 'Delete'}</div>
                                                :
                                                <div className="p-0.5 font-bold hover:cursor-pointer">Follow @{atname}</div>}
                                            {/* <div className="p-0.5 font-bold hover:cursor-pointer">Delete</div> */}
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
                        chirpId={id}
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
