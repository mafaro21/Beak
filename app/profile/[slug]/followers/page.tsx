"use client"
import React from 'react'
import BackButton from '@/components/backbutton'
import Navigation from '@/components/navigation'
import Sidebar from '@/components/sidebar'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from '@/components/ui/button'
import { useThemeStore } from '@/store/themeStore'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import { useCheckFollowers } from '@/hooks/useFollow'

export default function Follows() {
    const { accent } = useThemeStore()
    const params = useParams()
    const slug = params.slug

    const { data, isLoading, error } = useCheckFollowers(slug)
    console.log(data)

    return (
        <>
            <div className="flex justify-center min-h-screen max-w-100vw">

                <div className="flex w-full max-w-7xl">
                    <Navigation />
                    <main className="w-full xl:w-[600px] lg:w-[560px] md:w-[580px] sm:w-[590px] xs:w-[20px] md:mr-4 border-x mb-4 min-h-screen">
                        <div className="p-2 px-4 border-b  font-bold text-xl sticky top-0 z-10 " style={{ backgroundColor: 'var(--background)' }}>
                            <div className='flex'>

                                <BackButton />

                                <div className='ml-1'>
                                    <div className='mt-2 ml-1'>Profile</div>
                                    <div>
                                        <div className='flex'>
                                            <div className='text-gray-500 text-sm ml-1'>@{slug}</div>
                                            {/* <BadgeCheck className={`fill-blue-400 ${theme === 'light' ? 'text-white' : 'text-black'} mt-1`} /> */}
                                        </div>
                                    </div>



                                </div>
                            </div>

                            <div className='flex w-full mt-5'>
                                <Link href={`/profile/${slug}/following`} className='w-1/2 text-center text-sm text-gray-500'>Following</Link>
                                <div className='w-1/2 text-center text-sm text-gray-500'
                                    style={{
                                        textDecoration: `underline ${accent} 3px`,
                                        textUnderlineOffset: '6px',
                                    }}
                                >Followers</div>
                            </div>

                        </div>

                        <div className='px-5'>
                            <div className='flex w-full justify-between'>
                                <div className='flex'>
                                    <Avatar className="mr-3 mt-3 h-10 w-10">
                                        <AvatarImage src="https://pbs.twimg.com/profile_images/1893803697185910784/Na5lOWi5_400x400.jpg" />
                                        <AvatarFallback>CN</AvatarFallback>
                                    </Avatar>
                                    <div className=''>
                                        <div className='flex mt-2'>
                                            <div className=' font-bold'>Elon Musk</div>
                                            {/* <div className='font-bold'><BadgeCheck className={`w-5 h-5 mt-1 ml-1 fill-blue-400 ${theme === 'light' ? 'text-white' : 'text-black'}`} /></div> */}
                                        </div>
                                        <div className='text-gray-500 text-md'>@elonmusk</div>
                                        <div className='text-md'>bio here</div>
                                    </div>
                                </div>

                                <Button
                                    className='font-bold rounded-4xl cursor-pointer mt-3'
                                    style={{ backgroundColor: 'var(--button)', color: 'var(--background)' }}>
                                    Follow</Button>
                            </div>

                            <div className='flex w-full justify-between'>
                                <div className='flex'>
                                    <Avatar className="mr-3 mt-3 h-10 w-10">
                                        <AvatarImage src="https://pbs.twimg.com/profile_images/1893803697185910784/Na5lOWi5_400x400.jpg" />
                                        <AvatarFallback>CN</AvatarFallback>
                                    </Avatar>
                                    <div className=''>
                                        <div className='flex mt-2'>
                                            <div className=' font-bold'>Elon Musk</div>
                                            {/* <div className='font-bold'><BadgeCheck className={`w-5 h-5 mt-1 ml-1 fill-blue-400 ${theme === 'light' ? 'text-white' : 'text-black'}`} /></div> */}
                                        </div>
                                        <div className='text-gray-500 text-md'>@elonmusk</div>
                                        <div className='text-md'>bio here</div>
                                    </div>
                                </div>

                                <Button
                                    className='font-bold rounded-4xl cursor-pointer mt-3'
                                    style={{ backgroundColor: 'var(--button)', color: 'var(--background)' }}>
                                    Follow</Button>
                            </div>
                        </div>



                    </main>

                    <Sidebar />
                </div>
            </div>
        </>
    )
}
