"use client"
import Navigation from '@/components/navigation'
import Sidebar from '@/components/sidebar'
import { Button } from '@/components/ui/button'
import { useThemeStore } from '@/store/themeStore'
import Link from 'next/link'
import React from 'react'

export default function NotFound() {

    const { accent } = useThemeStore()

    return (
        <>

            <div className="flex justify-center min-h-screen max-w-100vw">

                <div className="flex  lg:max-w-100vw md:max-w-100vw ">
                    <Navigation />
                    <main className="xl:w-[600px] lg:w-[560px] md:w-[580px] sm:w-[590px] xs:w-[20px] md:mr-4  min-h-screen">
                        <div className='text-gray-500 text-center mt-18 ml-20'>
                            <div>Hmm...this page doesn’t exist. Try searching for something else.</div>
                            <Link href={'/explore'}>
                                <Button className='rounded-4xl mt-2 cursor-pointer' style={{ backgroundColor: accent }}>Search</Button>
                            </Link>
                        </div>


                    </main>


                    <aside className="xl:w-[360px] md:w-[260px] lg:w-[300px] px-1 pt-2 hidden lg:block pr-2">
                    </aside>

                </div>
            </div>
        </>

    )
}
