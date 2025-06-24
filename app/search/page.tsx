"use client"
import React, { useState } from 'react'
import Navigation from '@/components/navigation'
import SearchBar from '@/components/search'
import Sidebar from '@/components/sidebar'
import { useSearchParams } from 'next/navigation'
import BackButton from '@/components/backbutton'
import Link from 'next/link'
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useThemeStore } from '@/store/themeStore'
import { useSearchUser } from '@/hooks/useSearchUser'
import Loader from '@/components/loader'
import { toast } from "sonner"

export default function Search() {
    const { theme } = useThemeStore()

    const searchParams = useSearchParams()
    const query = searchParams.get('q') ?? ''

    const [errorState, setErrorState] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')

    const { data, isLoading, error } = useSearchUser(query)
    console.log(data)

    if (error) {
        const err = error as { status?: number; message?: string };
        console.log(err.status)
        switch (err.status) {
            case 404:
                setErrorState(true)
                setErrorMessage(`${query} is a user that doesn't exist`)

                break;
            // case 400:
            //     setErrorState(true)
            //     setErrorMessage(`${query} is a user that doesn't exist`)
            //     toast("Search query is too short", {
            //         style: {
            //             background: 'red',
            //             border: 'none',
            //             color: 'white',
            //             textAlign: "center",
            //             justifyContent: "center"
            //         }
            //     })
            //     break;
            default:
                toast("An error has occured", {
                    style: {
                        background: 'red',
                        border: 'none',
                        color: 'white',
                        textAlign: "center",
                        justifyContent: "center"
                    }
                })
                break;
        }
    }

    return (
        <>
            <div className="flex justify-center min-h-screen">
                <div className="flex  lg:max-w-7xl md:max-w-md ">
                    <Navigation />

                    <main className="xl:w-[600px] lg:w-[560px] md:w-[580px] sm:w-[590px] xs:w-[20px] md:mr-4 border-x min-h-screen">
                        <div className="p-4 border-b sticky top-0 z-10 flex" style={{ backgroundColor: 'rgba(var(--background-header), 0.63)', backdropFilter: 'blur(8px)', backgroundBlendMode: 'hard-light' }}>
                            <BackButton />
                            <SearchBar defaultQuery={query} />
                        </div>

                        {isLoading ? <Loader /> :
                            errorState ? <div className='text-center text-gray-500 mt-3 font-bold'>{errorMessage}</div> :
                                <div className='mt-3 border-b pb-4 px-5'>
                                    <div className=' font-bold text-xl'>People</div>

                                    {data?.map((item: any) => (
                                        <Link href={`/profile/${item.username}`} className='flex mt-5'>
                                            <TooltipProvider>
                                                <Tooltip>
                                                    <Link href={`/profile/${item.username}`} onClick={(e) => e.stopPropagation()}>
                                                        <TooltipTrigger asChild>
                                                            <Avatar className="mr-3 mt-3 h-10 w-10">
                                                                <AvatarImage src={`https://robohash.org/${item.username}.png?set=set5`} />
                                                                <AvatarFallback>CN</AvatarFallback>
                                                            </Avatar>
                                                        </TooltipTrigger>
                                                    </Link>
                                                    <TooltipContent className="flex shadow-lg shadow-gray-500" style={{ backgroundColor: 'var(--background)' }}>
                                                        <div className='flex'>
                                                            <Avatar className="mr-3 mt-2 h-10 w-10" style={{ border: '0px white solid' }}>
                                                                <AvatarImage src={`https://robohash.org/${item.username}.png?set=set5`} />
                                                                <AvatarFallback>CN</AvatarFallback>
                                                            </Avatar>
                                                            <div className=''>
                                                                <div className='flex mt-2'>
                                                                    <div className={`font-bold text-sm ${theme === 'light' ? 'text-black' : 'text-white'}`}>{item.fullname}</div>
                                                                </div>
                                                                <div className='text-gray-500 text-md'>@{item.username}</div>
                                                            </div>
                                                        </div>
                                                    </TooltipContent>
                                                </Tooltip>
                                            </TooltipProvider>

                                            <div className=''>
                                                <div className='flex mt-2'>
                                                    <Link href={`/profile/${item.username}`} className=' font-bold hover:underline'>{item.fullname}</Link>
                                                    {/* <div className='font-bold'><BadgeCheck className={`w-5 h-5 mt-1 ml-1 fill-blue-400 ${theme === 'light' ? 'text-white' : 'text-black'}`} /></div> */}
                                                </div>
                                                <div className='text-gray-500 text-md'>@{item.username}</div>
                                            </div>
                                        </Link>

                                    ))}
                                </div>
                        }
                    </main>

                    <Sidebar />
                </div>
            </div>
        </>
    )
}
