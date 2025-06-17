"use client"
import React from 'react'
import Navigation from '@/components/navigation'
import SearchBar from '@/components/search'
import Sidebar from '@/components/sidebar'
import { useSearchParams } from 'next/navigation'
import BackButton from '@/components/backbutton'

export default function Search() {

    const searchParams = useSearchParams()
    const query = searchParams.get('q') ?? ''
    console.log(query)
    return (
        <>
            <div className="flex justify-center min-h-screen">
                <div className="flex  lg:max-w-7xl md:max-w-md ">
                    <Navigation />

                    <main className="xl:w-[600px] lg:w-[560px] md:w-[580px] md:mr-4 border-x  min-h-screen">
                        <div className="p-4 border-b  sticky top-0 z-10 flex">
                            <BackButton />
                            <SearchBar defaultQuery={query} />
                        </div>

                        <div className='mt-3 border-b pb-4'>
                            <div className='px-5 font-bold text-xl'>People</div>
                        </div>
                    </main>

                    <Sidebar />
                </div>
            </div>
        </>
    )
}
