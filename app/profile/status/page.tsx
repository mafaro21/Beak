import React from 'react'
import { Button } from '@/components/ui/button'
import { Home, Search, BadgeCheck, ArrowLeft, CalendarDays, MoreHorizontal, MessageCircle, Heart, Repeat2, Upload, } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Navigation from '@/components/navigation'
import Sidebar from '@/components/sidebar'
import BackButton from '@/components/backbutton'
import { Separator } from "@/components/ui/separator"
import Chirping from '@/components/chirping'
// import Interactive from '@/components/interactive'
import Link from 'next/link'
import Chirp from '@/components/chirp'

export default function Status() {
    return (
        <div className="flex justify-center min-h-screen">
            <div className="flex  lg:max-w-[2200px] md:max-w-100vw  ">
                <Navigation />

                <main className="lg:w-[600px] md:w-[580px] md:mr-4 border-x  min-h-screen">
                    <div className="p-2 px-4   font-bold text-xl sticky top-0 z-10">
                        <div className='flex'>
                            <BackButton />

                            <div className='ml-1 mt-2'>
                                <div>Chirp</div>
                            </div>
                        </div>
                    </div>

                    <div className='px-5 mt-2 border-b '>
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
                        <div className='mt-4 text-gray-500 border-b  pb-4'>6:12 PM · Apr 25, 2022</div>

                        <div className='border-b  pb-2'>
                            {/* <Interactive /> */}
                        </div>

                        <div className='pb-2'>
                            <Chirping />
                        </div>

                    </div>

                    <Chirp
                        username={'Zherka'}
                        isVerified={false}
                        atname={'ZherkaOfficial'}
                        date={'8h'}
                        chirp={'I will never understand how men hang out with women. Besides wrestling them, I cannot stand doing anything with them. Even if I love her the most, I find it mentally exhausting every single time. I can’t imagine ever living with one for longer than week. Its like adopting a child'}
                        comments={'3563'}
                        reposts={'98K'}
                        likes={'204K'}
                    />


                </main>

                <Sidebar />
            </div>
        </div>
    )
}
