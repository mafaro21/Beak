"use client"
import React from 'react'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { BadgeCheck, } from "lucide-react"
import { usePathname } from 'next/navigation'
import SearchBar from './search'
import { useThemeStore } from '@/store/themeStore'
import { useAuthStore } from '@/store/authStore'
import { useRouter } from 'next/navigation'
import { useTopUsers } from '@/hooks/useTopUsers'
import Loader from './loader'
import Link from 'next/link'
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"

export default function Sidebar() {
    const { theme } = useThemeStore()
    const pathname = usePathname()
    const router = useRouter()

    const loggedInUser = useAuthStore((state) => state.user)

    const { data, isLoading, error } = useTopUsers()
    console.log(data)

    return (
        <aside className="xl:w-[360px] md:w-[260px] lg:w-[300px] px-1 pt-2 hidden lg:block pr-2">
            <div className="space-y-4">

                {!loggedInUser?.loggedin ? null :
                    pathname === '/explore' || pathname === '/search' ? null :
                        <div className='sticky top-0 z-50 pt-3 pb-2' style={{ backgroundColor: 'var(--background)' }}>
                            <SearchBar defaultQuery='' />
                        </div>
                }

                {!loggedInUser?.loggedin ?
                    <div className="px-4 pt-3 mt-2 pb-5 rounded-lg border ">
                        <div className='text-lg font-bold'>New to Beak.?</div>
                        <div className='mt-1'>
                            <div className='text-gray-500 text-[13px]'>Sign up now to get your own personalized timeline!</div>
                        </div>
                        <div className='mt-5'>
                            <Button className='bg-white text-black rounded-3xl w-full p-6 cursor-pointer' onClick={() => router.push(`/login?redirect=${pathname}`)}>Create an account</Button>
                        </div>
                    </div>
                    :
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
                        <div className="p-4 rounded-lg border  mt-10" style={{ position: 'sticky', top: '60px' }}>
                            <div className='text-lg font-bold'>Who to follow</div>

                            {isLoading ? <Loader />
                                :
                                data.map((item: any) => (
                                    <div className='flex mt-2' key={item.id}>
                                        <TooltipProvider>
                                            <Tooltip>
                                                <Link href={`/profile/${item.username}`} onClick={(e) => e.stopPropagation()}>
                                                    <TooltipTrigger asChild>
                                                        <Avatar className="mr-3 mt-3 h-10 w-10">
                                                            <AvatarImage src={`https://robohash.org/${item.username}.png?set=set5`} />
                                                            <AvatarFallback>CN</AvatarFallback>
                                                        </Avatar>
                                                    </TooltipTrigger>
                                                </Link>
                                                <TooltipContent className="flex shadow-lg shadow-gray-500" style={{ backgroundColor: 'var(--background)' }}>
                                                    <div className='flex'>
                                                        <Avatar className="mr-3 mt-2 h-10 w-10" style={{ border: '0px white solid' }}>
                                                            <AvatarImage src={`https://robohash.org/${item.username}.png?set=set5`} />
                                                            <AvatarFallback>CN</AvatarFallback>
                                                        </Avatar>
                                                        <div className=''>
                                                            <div className='flex mt-2'>
                                                                <div className={`font-bold text-sm ${theme === 'light' ? 'text-black' : 'text-white'}`}>{item.fullname}</div>
                                                            </div>
                                                            <div className='text-gray-500 text-md'>@{item.username}</div>
                                                        </div>
                                                    </div>
                                                </TooltipContent>
                                            </Tooltip>
                                        </TooltipProvider>

                                        <div className=''>
                                            <div className='flex mt-2'>
                                                <Link href={`/profile/${item.username}`} className=' font-bold hover:underline'>{item.fullname}</Link>
                                                {/* <div className='font-bold'><BadgeCheck className={`w-5 h-5 mt-1 ml-1 fill-blue-400 ${theme === 'light' ? 'text-white' : 'text-black'}`} /></div> */}
                                            </div>
                                            <div className='text-gray-500 text-md'>@{item.username}</div>
                                        </div>
                                    </div>
                                ))}
                        </div>
                    </div>
                }

                <div className="px-3 text-zinc-500 text-xs">© 2025 Beak.</div>

            </div>
        </aside>


    )
}
