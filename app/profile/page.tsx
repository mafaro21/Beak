"use client"
import Navigation from '@/components/navigation'
import Sidebar from '@/components/sidebar'
import Image from 'next/image'
import React from 'react'
import header from '../../public/img/test.jpg'
import profile from '../../public/img/guy in red.png'
import { Button } from '@/components/ui/button'
import { Home, Search, BadgeCheck, ArrowLeft, CalendarDays, MoreHorizontal, MessageCircle, Heart, Repeat2, Upload, } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Interactive from '@/components/interactive'
import Link from 'next/link'
import BackButton from '@/components/backbutton'

export default function Profile() {


    return (
        <div className="flex justify-center text-[#F7F9F9] bg-black min-h-screen">
            <div className="flex  lg:max-w-7xl md:max-w-md ">
                <Navigation />

                <main className="xl:w-[600px] lg:w-[560px] md:w-[580px] md:mr-4 border-x border-zinc-800 min-h-screen">
                    <div className="p-2 px-4 border-b border-zinc-800 font-bold text-xl sticky top-0 z-10 bg-black/88 ">
                        <div className='flex'>

                            <BackButton />

                            <div className='ml-4'>
                                <div className='flex'>
                                    <div>Elon Musk</div>
                                    <BadgeCheck className='fill-blue-400 text-black  mt-1' />
                                </div>
                                <div className='text-xs text-gray-500'>76.6K posts</div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <Image alt="profile header" src={header} className='w-full h-[190px]' />

                        <div className='px-5'>
                            <div className='flex w-full justify-between'>
                                <Image alt="profile header" src={profile} className='rounded-full w-[150px] h-[150px] border-4 border-black' style={{ marginTop: '-70px' }} />


                                <div className='flex mt-2 w-1/4 justify-between'>
                                    <Button className='rounded-full bg-black border-gray-500 border'><Search ></Search></Button>
                                    <Button className='bg-white text-black font-bold rounded-4xl'>Follow</Button>
                                </div>
                            </div>

                            <div className='flex mt-2'>
                                <div className=' text-2xl font-bold'>Elon Musk</div>
                                <div className='text-2xl font-bold'><BadgeCheck className='fill-blue-400 text-black mt-1' /></div>
                            </div>

                            <div className='text-gray-500 text-md'>@elonmusk</div>

                            <div className='flex'>
                                <CalendarDays className='w-4 h-4 mt-2 mr-1 text-gray-500' />
                                <div className='text-gray-500 text-md mt-1'> Joined June 2009</div>
                            </div>

                            <div className='flex w-full gap-4 mt-1'>
                                <div className='flex hover:underline'>
                                    <div className='text-md font-bold'>1,105</div>
                                    <div className='text-gray-500 text-md'>{" "}Following</div>
                                </div>
                                <div className='flex hover:underline'>
                                    <div className='text-md font-bold'>218.7M</div>
                                    <div className='text-gray-500 text-md'>{" "}Followers</div>
                                </div>
                            </div>

                        </div>

                        <div className='flex w-full justify-between border-b border-gray-700 p-4 px-12 font-bold text-gray-500 mt-3'>
                            <div className='underline underline-offset-18 decoration-3 decoration-blue-400 text-white'>Chirps</div>
                            <div>Replies</div>
                            <div>Highlights</div>
                            <div>Media</div>
                        </div>

                        <Link href={'/profile/status'} className="grid grid-cols-14 gap-1 px-4 border-b  border-zinc-800 pb-3">
                            <div className="col-span-1 ">
                                <Avatar className="mr-1 mt-3">
                                    <Image src={profile} alt='profile photo' />
                                    <AvatarFallback>CN</AvatarFallback>
                                </Avatar>
                            </div>


                            <div className=" px-1 col-span-13">
                                <div className="flex justify-between w-full">
                                    <div className="py-2 flex space-x-1">
                                        <div className="font-bold">Elon Musk</div>
                                        <BadgeCheck className='fill-blue-400 text-black w-5 h-5 mt-1' />
                                        <div className="text-gray-500">@elonmusk</div>
                                        <div className="text-gray-500">· Apr 28, 2022</div>
                                    </div>

                                    <div className="py-3"><MoreHorizontal className="mr-2 h-5 w-5" /></div>
                                </div>

                                <div style={{ marginTop: '-12px' }}>Next I'm buying Coca-Cola to put the cocaine back in</div>


                                <Interactive />
                            </div>
                        </Link>

                    </div>
                </main>

                <Sidebar />
            </div>
        </div>
    )
}
