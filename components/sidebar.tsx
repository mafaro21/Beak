"use client"
import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Home, Search, BadgeCheck, ArrowLeft, CalendarDays, MoreHorizontal, MessageCircle, Heart, Repeat2, Upload, } from "lucide-react"
import { usePathname } from 'next/navigation'
import SearchBar from './search'
import { useThemeStore } from '@/store/themeStore'

export default function Sidebar() {
    const { theme } = useThemeStore()
    const pathname = usePathname()

    return (
        <aside className="xl:w-[360px] md:w-[260px] lg:w-[300px] px-1 pt-2 hidden lg:block pr-2">
            <div className="space-y-4">

                {pathname === '/explore' ? null :
                    <div className='sticky top-0 z-50 pt-3 pb-2' style={{ backgroundColor: 'var(--background)' }}>
                        <SearchBar />
                    </div>
                }

                <div className="">
                    <div className="px-4 pt-3 pb-5 rounded-lg border ">
                        <div className='text-lg font-bold'>What's Happening</div>
                        <div className='mt-5'>
                            <div className='text-gray-500 text-[13px]'>Entertainment · Trending</div>
                            <div className='font-bold'>Mr. Beast</div>
                            <div className='text-gray-500 text-[13px]'>4,634 posts</div>
                        </div>
                        <div className='mt-5'>
                            <div className='text-gray-500 text-[13px]'>Music · Trending</div>
                            <div className='font-bold'>Rihanna</div>
                            <div className='text-gray-500 text-[13px]'>52.4K posts</div>
                        </div>
                        <div className='mt-5'>
                            <div className='text-gray-500 text-[13px]'>Politics · Trending</div>
                            <div className='font-bold'>Panama Canal</div>
                            <div className='text-gray-500 text-[13px]'>49K posts</div>
                        </div>
                        <div className='mt-5'>
                            <div className='text-gray-500 text-[13px]'>Trending</div>
                            <div className='font-bold'>Travis Scott</div>
                            <div className='text-gray-500 text-[13px]'>9,636 posts</div>
                        </div>
                    </div>

                    {/* Follow Suggestions */}
                    <div className="p-4 rounded-lg border  mt-10 ">
                        <div className='text-lg font-bold'>Who to follow</div>

                        <div className='flex'>
                            <Avatar className="mr-3 mt-3 h-10 w-10">
                                <AvatarImage src="https://pbs.twimg.com/profile_images/1893803697185910784/Na5lOWi5_400x400.jpg" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                            <div className=''>
                                <div className='flex mt-2'>
                                    <div className=' font-bold'>Elon Musk</div>
                                    <div className='font-bold'><BadgeCheck className={`w-5 h-5 mt-1 ml-1 fill-blue-400 ${theme === 'light' ? 'text-white' : 'text-black'}`} /></div>
                                </div>
                                <div className='text-gray-500 text-md'>@elonmusk</div>
                            </div>
                        </div>

                        <div className='flex mt-3'>
                            <Avatar className="mr-3 mt-3 h-10 w-10">
                                <AvatarImage src="https://pbs.twimg.com/profile_images/634514155261833216/czgYrPLQ_400x400.jpg" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                            <div className=''>
                                <div className='flex mt-2'>
                                    <div className=' font-bold'>TRAVIS SCOTT</div>
                                    <div className='font-bold'><BadgeCheck className={`w-5 h-5 mt-1 ml-1 fill-blue-400 ${theme === 'light' ? 'text-white' : 'text-black'}`} /></div>
                                </div>
                                <div className='text-gray-500 text-md'>@trvisXX</div>
                            </div>
                        </div>

                        <div className='flex mt-3'>
                            <Avatar className="mr-3 mt-3 h-10 w-10">
                                <AvatarImage src="https://pbs.twimg.com/profile_images/1606798176903745541/DifwOt9C_400x400.jpg" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                            <div className=''>
                                <div className='flex mt-2'>
                                    <div className=' font-bold'>.</div>
                                    <div className='font-bold'><BadgeCheck className={`w-5 h-5 mt-1 ml-1 fill-blue-400 ${theme === 'light' ? 'text-white' : 'text-black'}`} /></div>
                                </div>
                                <div className='text-gray-500 text-md'>@playboicarti</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="px-3 text-zinc-500 text-xs">© 2025 Beak.</div>
            </div>
        </aside>


    )
}
