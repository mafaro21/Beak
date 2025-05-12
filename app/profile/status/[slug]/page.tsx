"use client"
import React, { useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Home, Search, BadgeCheck, ArrowLeft, CalendarDays, MoreHorizontal, MessageCircle, Heart, Repeat2, Upload, } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Navigation from '@/components/navigation'
import Sidebar from '@/components/sidebar'
import BackButton from '@/components/backbutton'
import { Separator } from "@/components/ui/separator"
import Chirping from '@/components/chirping'
import Interactive from '@/components/interactive'
import Link from 'next/link'
import Chirp from '@/components/chirp'
import { useParams } from 'next/navigation'
import Loader from '@/components/loader'
import { useSingleChirp } from '@/hooks/useSingleChirp'

export default function Status() {
    const params = useParams()
    const slug = Array.isArray(params.slug) ? params.slug[0] : params.slug;

    const chirpId = slug ?? "";

    console.log(slug)
    const { data, isLoading, error } = useSingleChirp(chirpId)

    useEffect(() => {
        if (data) {
            console.log(data)
        }
    }, [data])

    const rawDate = data?.dateposted;

    const formattedDate = rawDate
        ? `${new Intl.DateTimeFormat("en-US", {
            hour: "numeric",
            minute: "numeric",
            hour12: true,
        }).format(new Date(rawDate))} · ${new Intl.DateTimeFormat("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
        }).format(new Date(rawDate))}`
        : null;

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

                    {isLoading ? <Loader /> :
                        <div>
                            <div className='px-5 mt-2 border-b ' key={data?.user.username}>
                                <div className='flex'>
                                    <Avatar className="mr-3 mt-3 h-10 w-10">
                                        <AvatarImage src={`https://robohash.org/${data?.user.username}.png?set=set5`} className='' />
                                        <AvatarFallback>CN</AvatarFallback>
                                    </Avatar>

                                    <div className=''>
                                        <div className='flex mt-2'>
                                            <div className=' font-bold'>{data?.user.fullname}</div>
                                            <div className='font-bold'><BadgeCheck className='fill-blue-400 text-black' /></div>
                                        </div>

                                        <div className='text-gray-500 text-md'>@{data?.user.username}</div>
                                    </div>
                                </div>

                                <div className='mt-4'>{data?.content}</div>
                                <div className='mt-4 text-gray-500 border-b  pb-4'>{formattedDate}</div>

                                <div className='border-b  pb-2'>
                                    <Interactive
                                        comments={data?.comments}
                                        reposts={data?.retweets}
                                        likes={data?.likes}
                                        isLikedByMe={data?.isLikedByMe}
                                    />
                                </div>

                                <div className='pb-2'>
                                    <Chirping />
                                </div>

                            </div>

                            <Chirp
                                id={''}
                                username={'Zherka'}
                                isVerified={false}
                                atname={'ZherkaOfficial'}
                                date={687853132134894}
                                chirp={'I will never understand how men hang out with women. Besides wrestling them, I cannot stand doing anything with them. Even if I love her the most, I find it mentally exhausting every single time. I can’t imagine ever living with one for longer than week. Its like adopting a child'}
                                comments={'3563'}
                                reposts={'98K'}
                                likes={'204K'}
                                isLikedByMe={true}
                            />
                        </div>
                    }





                </main>

                <Sidebar />
            </div>
        </div>
    )
}
