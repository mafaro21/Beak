"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Home, Search, Bell, Mail, User, MoreHorizontal, MessageCircle, Heart, Repeat2, Upload, CheckCircle, BadgeCheck } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import Navigation from "@/components/navigation"
import Sidebar from "@/components/sidebar"
import Chirp from "@/components/chirp"
import Interactive from "@/components/interactive"
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"

export default function HomePage() {

    const nav = [
        { id: 1, icon: Home, name: 'Home' },
        { id: 2, icon: Search, name: 'Explore' },
        { id: 3, icon: Bell, name: 'Notifications' },
        { id: 4, icon: Mail, name: 'Messages' },
        { id: 5, icon: User, name: 'Profile' },
        { id: 6, icon: MoreHorizontal, name: 'More' }
    ]

    const router = useRouter()

    return (
        <div className="flex justify-center text-[#F7F9F9] bg-black min-h-screen">
            <div className="flex  lg:max-w-7xl md:max-w-md ">

                <Navigation />

                {/* Main Feed  */}
                <main className="xl:w-[600px] lg:w-[560px] md:w-[580px] md:mr-4 border-x border-zinc-800 min-h-screen">
                    <div className="p-4 border-b border-zinc-800 font-bold text-xl sticky top-0 z-10 bg-black/92 ">
                        Home
                    </div>

                    <div className="px-4 border-b border-zinc-800 pb-2">
                        <Chirp />
                    </div>


                    <div className="grid grid-cols-14 gap-1 px-4 border-b  border-zinc-800 pb-3 hover:cursor-pointer" onClick={(e) => {
                        e.preventDefault()
                        e.stopPropagation()
                        router.push('/profile/status')
                    }}>
                        <div className="col-span-1 ">

                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <Avatar className="mr-1 mt-3">
                                            <AvatarImage src="https://pbs.twimg.com/profile_images/1893803697185910784/Na5lOWi5_400x400.jpg" />
                                            <AvatarFallback>CN</AvatarFallback>
                                        </Avatar>
                                    </TooltipTrigger>
                                    <TooltipContent className='flex bg-black shadow-md shadow-gray-500'>
                                        <div className="px-8 py-4">
                                            <Avatar className="mr-3 mt-3 h-10 w-10">
                                                <AvatarImage src="https://pbs.twimg.com/profile_images/1893803697185910784/Na5lOWi5_400x400.jpg" />
                                                <AvatarFallback>CN</AvatarFallback>
                                            </Avatar>
                                            <div className=''>
                                                <div className='flex mt-2'>
                                                    <div className=' font-bold'>Elon Musk</div>
                                                    <div className='font-bold'><BadgeCheck className='fill-blue-400 text-black -mt-1' /></div>
                                                </div>
                                                <div className='text-gray-500 text-md'>@elonmusk</div>
                                            </div>
                                        </div>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                        </div>


                        <div className=" px-1 col-span-13">
                            <div className="flex justify-between w-full">
                                <div className="py-2 flex space-x-1">
                                    <div className="font-bold hover:underline"
                                        onClick={(e) => {
                                            e.preventDefault()
                                            e.stopPropagation()
                                            router.push('/profile')
                                        }}>Elon Musk</div>
                                    <BadgeCheck className='fill-blue-400 text-black w-5 h-5 mt-1' />
                                    <div className="text-gray-500">@elonmusk</div>
                                    <div className="text-gray-500">· Apr 28, 2022</div>
                                </div>

                                <div className="py-3"><MoreHorizontal className="mr-2 h-5 w-5" /></div>
                            </div>

                            {/* <div className="select-text"> */}
                            <div style={{ marginTop: '-12px' }} className="select-text">Next I'm buying Coca-Cola to put the cocaine back in</div>
                            {/* </div> */}


                            <Interactive />
                        </div>
                    </div>

                    <Link href={'/profile/status'} className="grid grid-cols-14 gap-1 px-4 border-b  border-zinc-800 pb-3">
                        <div className="col-span-1 ">
                            <Avatar className="mr-1 mt-3">
                                <AvatarImage src="https://pbs.twimg.com/profile_images/1484012550077313025/PetTeXyv_400x400.jpg" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                        </div>


                        <div className=" px-1 col-span-13">
                            <div className="flex justify-between w-full">
                                <div className="py-2 flex space-x-1">
                                    <div className="font-bold hover:underline">t.</div>
                                    <BadgeCheck className='fill-blue-400 text-black w-5 h-5 mt-1' />
                                    <div className="text-gray-500">@taeseru</div>
                                    <div className="text-gray-500">· Apr 8, 2025</div>
                                </div>

                                <div className="py-3"><MoreHorizontal className="mr-2 h-5 w-5" /></div>
                            </div>

                            <div style={{ marginTop: '-12px' }}>tried dealing with a pisces man for the plot and i see exactly why they get talked about the way they do</div>


                            <Interactive />
                        </div>
                    </Link>

                </main>

                {/* Right Sidebar */}
                <Sidebar />

            </div >
        </div >
    )
}
