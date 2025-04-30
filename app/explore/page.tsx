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
            <div className="flex justify-center min-h-screen">
                <div className="flex  lg:max-w-7xl md:max-w-md ">
                    <Navigation />

                    <main className="xl:w-[600px] lg:w-[560px] md:w-[580px] md:mr-4 border-x  min-h-screen">
                        <div className="p-4 border-b  sticky top-0 z-10">
                            <SearchBar />
                        </div>


                        <div className='flex w-full justify-between border-b border-gray-700 p-3 px-12 font-bold text-gray-500'>
                            <div >For You</div>
                            {/* style={{ textDecoration: `underline 3px${accent}`, textUnderlineOffset: '18px' }} */}
                            <div>Trending</div>
                            <div>News </div>
                            <div>Sports</div>
                        </div>

                        <div className=" border-b ">
                            <Image src={header} alt='header' />
                        </div>

                        <div className="px-4 border-b  pb-6">
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
