import Navigation from '@/components/navigation'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Home, Search, Bell, Mail, User, MoreHorizontal, MessageCircle, Heart, Repeat2, Upload, CheckCircle, BadgeCheck } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import Sidebar from "@/components/sidebar"
import Chirp from "@/components/chirping"
import Interactive from "@/components/interactive"
import React from 'react'
import Link from 'next/link'
import SearchBar from '@/components/search'
import header from '../../public/img/test.jpg'
import Image from 'next/image'

export default function Explore() {
    return (
        <div>
            <div className="flex justify-center text-[#F7F9F9] bg-black min-h-screen">
                <div className="flex  lg:max-w-7xl md:max-w-md ">
                    <Navigation />

                    <main className="xl:w-[600px] lg:w-[560px] md:w-[580px] md:mr-4 border-x border-zinc-800 min-h-screen">
                        <div className="p-4 border-b border-zinc-800 sticky top-0 z-10 bg-black/92 ">
                            <SearchBar />
                        </div>


                        <div className='flex w-full justify-between border-b border-gray-700 p-3 px-12 font-bold text-gray-500'>
                            <div className='underline underline-offset-13 decoration-3 decoration-blue-400 text-white'>For You</div>
                            <div>Trending</div>
                            <div>News </div>
                            <div>Sports</div>
                        </div>

                        <div className=" border-b border-zinc-800">
                            <Image src={header} alt='header' />
                        </div>

                        <div className="px-4 border-b border-zinc-800 pb-6">
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

                    </main>

                    <Sidebar />
                </div>
            </div>
        </div>
    )
}
