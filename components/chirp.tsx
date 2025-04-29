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

type ChirpProps = {
    profile: string,
    username: string;
    isVerified: boolean;
    atname: string;
    date: string;
    chirp: string;
    comments: string,
    reposts: string,
    likes: string
};


export default function Chirp({ profile, username, isVerified, atname, date, chirp, comments, reposts, likes }: ChirpProps) {
    const router = useRouter()

    const theme = localStorage.getItem("theme")

    return (
        <div
            className="px-4 border-b  pb-3 hover:cursor-pointer"
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
                                <Avatar className="mt-3">
                                    <AvatarImage src={profile} />
                                    <AvatarFallback>CN</AvatarFallback>
                                </Avatar>
                            </TooltipTrigger>
                            <TooltipContent className="flex bg-black shadow-md shadow-gray-500">
                                <div className='flex'>
                                    <Avatar className="mr-3 mt-3 h-10 w-10">
                                        <AvatarImage src={profile} />
                                        <AvatarFallback>CN</AvatarFallback>
                                    </Avatar>
                                    <div className=''>
                                        <div className='flex mt-2'>
                                            <div className=' font-bold'>{username}</div>
                                            <div className=''><BadgeCheck className={`w-5 h-5 ml-1 -mt-0.5 fill-blue-400 ${theme === 'light' ? 'text-white' : 'text-black'}`} /></div>
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
                                    router.push('/profile');
                                }}
                            >
                                {username}
                            </div>
                            {isVerified ?
                                <BadgeCheck className={`fill-blue-400 ${theme === 'light' ? 'text-white' : 'text-black'}  w-5 h-5 mt-[5px]`} />
                                :
                                null}
                            <div className="text-gray-500">@{atname}</div>
                            <div className="text-gray-500">· {date}</div>
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
                    />
                </div>
            </div>
        </div>
    )
}
