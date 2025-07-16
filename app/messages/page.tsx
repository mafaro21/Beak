"use client"
import Navigation from '@/components/navigation'
import { Button } from '@/components/ui/button'
import { useThemeStore } from '@/store/themeStore'
import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function Messages() {

    const { accent, theme } = useThemeStore()

    return (
        <>
            <div className="flex justify-center min-h-screen max-w-100vw">
                <div className="flex w-full max-w-7xl">
                    <Navigation />

                    <main className="w-full xs:w-full sm:w-[430px] md:w-[430px] lg:w-[360px] xl:w-[460px] border overflow-y-auto">
                        <div className=" sticky top-0 z-10  " >
                            <div className='font-bold text-lg p-4'>Messages</div>

                            <div className='hover:bg-gray-600 link cursor-pointer'>
                                <div className='flex px-4 py-2'>
                                    <Avatar className="mr-3 h-10 w-10" style={{ border: '0px white solid' }}>
                                        <AvatarImage src={`https://robohash.org/mafaro65.png?set=set5`} />
                                        <AvatarFallback>CN</AvatarFallback>
                                    </Avatar>
                                    <div className=''>
                                        <div className='flex'>
                                            <div className={`text-sm ${theme === 'light' ? 'text-black' : 'text-white'}`}><span className='font-bold'>item.fullname</span> <span className='text-gray-500'>@item.username · Jan 28, 2023</span></div>
                                        </div>
                                        <div className='text-gray-500 text-sm'>@item.username</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>

                    <main className="hidden lg:block xl:w-[520px] lg:w-[420px] border-r overflow-y-auto">
                        <div className='justify-center px-30 pt-60 '>
                            <div className='text-2xl font-bold'>Select a message</div>
                            <div className='text-xs text-gray-500'>Choose from your existing conversations, start a new one, or just keep swimming.</div>

                            <Button className='rounded-4xl mt-6 cursor-pointer' style={{ backgroundColor: accent }}>New Message</Button>
                        </div>
                    </main>

                </div>
            </div>
        </>
    )
}
