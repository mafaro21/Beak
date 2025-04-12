import React from 'react'
import { Button } from '@/components/ui/button'
import { Home, Search, BadgeCheck, ArrowLeft, CalendarDays, MoreHorizontal, MessageCircle, Heart, Repeat2, Upload, } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Navigation from '@/components/navigation'
import Sidebar from '@/components/sidebar'
import { Separator } from "@/components/ui/separator"
import Chirp from '@/components/chirping'
import Interactive from '@/components/interactive'
import Link from 'next/link'

export default function Status() {
    return (
        <div className="flex justify-center text-[#F7F9F9] bg-black min-h-screen">
            <div className="flex  lg:max-w-[2200px] md:max-w-md ">
                <Navigation />

                <main className="lg:w-[600px] md:w-[580px] md:mr-4 border-x border-zinc-800 min-h-screen">
                    <div className="p-2 px-4  border-zinc-800 font-bold text-xl sticky top-0 z-10 bg-black/88 ">
                        <div className='flex'>
                            <div className=' mt-3'><ArrowLeft /></div>

                            <div className='ml-4 mt-1'>
                                <div>Chirp</div>
                            </div>
                        </div>
                    </div>

                    <div className='px-5 mt-2 border-b border-zinc-800'>
                        <div className='flex'>
                            <Avatar className="mr-3 mt-3 h-10 w-10">
                                <AvatarImage src="https://pbs.twimg.com/profile_images/1893803697185910784/Na5lOWi5_400x400.jpg" className='' />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>

                            <div className=''>
                                <div className='flex mt-2'>
                                    <div className=' font-bold'>Elon Musk</div>
                                    <div className='font-bold'><BadgeCheck className='fill-blue-400 text-black' /></div>
                                </div>

                                <div className='text-gray-500 text-md'>@elonmusk</div>
                            </div>
                        </div>

                        <div className='mt-4'>I know Ms. Rachel called her lawyer immediately</div>
                        <div className='mt-4 text-gray-500 border-b border-zinc-800 pb-4'>6:12 PM · Apr 25, 2022</div>

                        <div className='border-b border-zinc-800 pb-2'>
                            <Interactive />
                        </div>

                        <div className='pb-2'>
                            <Chirp />
                        </div>

                    </div>

                    <Link href={'/profile/status'} className="grid grid-cols-14 gap-1 p-5 border-b border-zinc-800 pb-3">
                        <div className="col-span-1 pr-2">
                            <Avatar className="mr-3 mt-3 ">
                                <AvatarImage src="https://pbs.twimg.com/profile_images/1670608268635373575/EhO6tJ6V_400x400.jpg" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                        </div>


                        <div className="px-1 col-span-13">
                            <div className="flex justify-between w-full">
                                <div className="py-2 flex space-x-1">
                                    <div className="font-bold">Zherka</div>
                                    {/* <CheckCircle className="mr-4 w-4 h-4 fill-blue-500 text-red-500" /> */}
                                    <div className="text-gray-500">@ZherkaOfficial</div>
                                    <div className="text-gray-500">· 8h</div>
                                </div>

                                <div className="py-3"><MoreHorizontal className="mr-2 h-5 w-5" /></div>
                            </div>

                            <div style={{ marginTop: '-12px' }}>I will never understand how men hang out with women. Besides wrestling them, I cannot stand doing anything with them. Even if I love her the most, I find it mentally exhausting every single time. I can’t imagine ever living with one for longer than week. Its like adopting a child</div>

                            <Interactive />
                        </div>
                    </Link>


                </main>

                <Sidebar />
            </div>
        </div>
    )
}
