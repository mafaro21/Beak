"use client"
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
import { useTrendingHashtags } from '@/hooks/useHastags'
import Loader from '@/components/loader'

export default function Explore() {
    const { data, isLoading, error } = useTrendingHashtags()
    const randomNum = Math.random()

    return (
        <div>
            <div className="flex justify-center min-h-screen max-w-100vw">
                <div className="flex w-full max-w-7xl">
                    <Navigation />

                    <main className="w-full xl:w-[600px] lg:w-[560px] md:w-[580px] sm:w-[590px] xs:w-[20px] md:mr-4 border-x  min-h-screen">
                        <div className="p-4 border-b  sticky top-0 z-10" style={{ backgroundColor: 'rgba(var(--background-header), 0.83)', backdropFilter: 'blur(8px)', backgroundBlendMode: 'hard-light' }}>
                            <SearchBar defaultQuery='' />
                        </div>


                        {/* <div className='flex w-full justify-between border-b border-gray-700 p-3 px-12 font-bold text-gray-500'>
                            <div >For You</div>
                            <div>Trending</div>
                            <div>News </div>
                            <div>Sports</div>
                        </div> */}

                        <div className=" border-b ">
                            <Image alt="explore image"
                                // src={header} 
                                src={`https://picsum.photos/seed/${randomNum}/1600/800`}
                                className='w-full h-[190px]'
                                width={1600}
                                height={800}
                                quality={100}
                                priority
                                objectFit='cover'
                            />
                        </div>
                        {isLoading ? <Loader /> :

                            <div className="px-4 border-b  pb-6">
                                {data?.map((item: any) => (
                                    <div className='mt-5' key={item.id}>
                                        <Link href={`/search?q=%23${item.Name}`}>
                                            <div className='text-gray-500 text-[13px]'>Trending · </div>
                                            <div className='font-bold'>#{item.Name}</div>
                                            <div className='text-gray-500 text-[13px]'>{item.TweetCount} {item.TweetCount === 1 ? 'post' : 'posts'}</div>
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        }

                    </main>


                    <Sidebar />
                </div>
            </div>
        </div>
    )
}
