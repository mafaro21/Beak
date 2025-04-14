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
import Chirp from '@/components/chirp'

export default function Profile() {


    return (
        <div className="flex justify-center text-[#F7F9F9] bg-black min-h-screen">
            <div className="flex lg:max-w-100vw md:max-w-100vw ">
                <Navigation />

                <main className="xl:w-[600px] lg:w-[560px] md:w-[580px] md:mr-4 border-x border-zinc-800 min-h-screen">
                    <div className="p-2 px-4 border-b border-zinc-800 font-bold text-xl sticky top-0 z-10 bg-black/88 ">
                        <div className='flex'>

                            <BackButton />

                            <div className='ml-1'>
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

                        <Chirp
                            username={'Elon Musk'}
                            isVerified={true}
                            atname={'elonmusk'}
                            date={'Apr 28, 2022'}
                            chirp={'Next I\'m buying Coca-Cola to put the cocaine back in'}
                            comments={'355'}
                            reposts={'9835'}
                            likes={'24K'}
                        />

                    </div>
                </main>

                <Sidebar />
            </div>
        </div>
    )
}
