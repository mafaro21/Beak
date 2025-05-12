"use client"
import Navigation from '@/components/navigation'
import Sidebar from '@/components/sidebar'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import header from '@/public/img/test.jpg'
// import profile from '../../public/img/guy in red.png'
import { Button } from '@/components/ui/button'
import { Home, Search, BadgeCheck, ArrowLeft, CalendarDays, MoreHorizontal, MessageCircle, Heart, Repeat2, Upload, } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Interactive from '@/components/interactive'
import Link from 'next/link'
import BackButton from '@/components/backbutton'
import Chirp from '@/components/chirp'
import { useThemeStore } from '@/store/themeStore'
import { useUserDetails } from '@/hooks/useUserDetails'
import { useParams } from 'next/navigation'
import Loader from '@/components/loader'

export default function Profile() {
    const [dateJoined, setDateJoined] = useState<Date>(new Date())
    const { theme, accent } = useThemeStore()
    const params = useParams()
    const slug = params.slug

    const { data, isLoading, error } = useUserDetails(slug)

    useEffect(() => {
        if (data) {
            console.log('Fetched data:', data);
            let date = new Date(data.datejoined);
            let finalDate = new Intl.DateTimeFormat("en-GB", { dateStyle: "long" }).format(date);
            setDateJoined(new Date(finalDate))
        }
    }, [data]);



    return (
        <div className="flex justify-center min-h-screen">
            <div className="flex lg:max-w-100vw md:max-w-100vw ">
                <Navigation />

                <main className="xl:w-[600px] lg:w-[560px] md:w-[580px] md:mr-4 border-x  min-h-screen">
                    {isLoading ? <div className='mt-10'><Loader /></div> :
                        <div>
                            <div className="p-2 px-4 border-b  font-bold text-xl sticky top-0 z-10 " style={{ backgroundColor: 'var(--background)' }}>
                                <div className='flex'>

                                    <BackButton />

                                    <div className='ml-1'>
                                        <div className='flex'>
                                            <div>{data.fullname}</div>
                                            <BadgeCheck className={`fill-blue-400 ${theme === 'light' ? 'text-white' : 'text-black'} mt-1`} />
                                        </div>
                                        <div className='text-xs text-gray-500'>76.6K posts</div>
                                    </div>
                                </div>
                            </div>


                            <div>
                                <Image alt="profile header" src={header} className='w-full h-[190px]' />

                                <div className='px-5'>
                                    <div className='flex w-full justify-between'>
                                        {/* <Image alt="profile header" width={20} height={20} src={`https://robohash.org/test.png`} className='rounded-full w-[150px] h-[150px] border-4' style={{ marginTop: '-70px', borderColor: 'var(--background) !important' }} /> */}
                                        <Avatar className="mr-3 mt-3 h-30 w-30" style={{ marginTop: '-70px', backgroundColor: 'var(--background)' }}>
                                            <AvatarImage src={`https://robohash.org/${data.username}.png?set=set5`} />
                                            <AvatarFallback>CN</AvatarFallback>
                                        </Avatar>

                                        <div className='flex mt-2 w-1/4 justify-between'>
                                            <Button className='rounded-full border-gray-500 border' style={{ backgroundColor: 'var(--button)', color: 'var(--background)' }}><Search ></Search></Button>
                                            <Button className='font-bold rounded-4xl' style={{ backgroundColor: 'var(--button)', color: 'var(--background)' }}>{data.isFollowedByMe ? 'Unfollow' : "Follow"}</Button>
                                        </div>
                                    </div>

                                    <div className='flex mt-2'>
                                        <div className=' text-2xl font-bold'>{data.fullname}</div>
                                        <div className='text-2xl font-bold'><BadgeCheck className={`fill-blue-400 ${theme === 'light' ? 'text-white' : 'text-black'} mt-1 ml-1`} /></div>
                                    </div>

                                    <div className='text-gray-500 text-md -mt-1'>@{data.username}</div>

                                    <div className=' text-md mt-2'>{data.bio}</div>

                                    <div className='flex mt-2'>
                                        <CalendarDays className='w-4 h-4 mt-2 mr-1 text-gray-500' />
                                        <div className='text-gray-500 text-md mt-1'> Joined {new Intl.DateTimeFormat("en-GB", { dateStyle: "long" }).format(new Date(data.datejoined))}</div>
                                    </div>

                                    <div className='flex w-full gap-4 mt-1'>
                                        <div className='flex hover:underline'>
                                            <div className='text-md font-bold'>{data.following}</div>
                                            <div className='text-gray-500 text-md'>{" "}Following</div>
                                        </div>
                                        <div className='flex hover:underline'>
                                            <div className='text-md font-bold'>{data.followers}</div>
                                            <div className='text-gray-500 text-md'>{" "}Followers</div>
                                        </div>
                                    </div>

                                </div>

                                <div className='flex w-full justify-between border-b border-gray-700 p-4 px-12 font-bold text-gray-500 mt-3'>
                                    <div style={{ textDecoration: `underline 3px${accent}`, textUnderlineOffset: '18px' }}>Chirps</div>
                                    <div>Replies</div>
                                    <div>Highlights</div>
                                    <div>Media</div>
                                </div>

                                <Chirp
                                    id={''}
                                    username={'Elon Musk'}
                                    isVerified={true}
                                    atname={'elonmusk'}
                                    date={1112132196993}
                                    chirp={'Next I\'m buying Coca-Cola to put the cocaine back in'}
                                    comments={'355'}
                                    reposts={'9835'}
                                    likes={'24K'}
                                    isLikedByMe={true}
                                />

                            </div>
                        </div>
                    }
                </main>




                <Sidebar />
            </div>
        </div>
    )
}
