import React from 'react'
import Navigation from '@/components/navigation'
import Sidebar from '@/components/sidebar'
import BackButton from '@/components/backbutton'
import { Circle, CircleCheck, Check } from "lucide-react"

export default function More() {

    const accents = [
        { id: 1, name: 'blue', color: '#1D9BF0' },
        { id: 2, name: 'yellow', color: '#FFD400' },
        { id: 3, name: 'pink', color: '#F91880' },
        { id: 4, name: 'purple', color: '#7856FF' },
        { id: 5, name: 'orange', color: '#FF7A00' },
        { id: 6, name: 'green', color: '#00BA7C' }
    ]

    return (
        <div className="flex justify-center text-[#F7F9F9] bg-black min-h-screen">
            <div className="flex  lg:max-w-[2200px] md:max-w-100vw  ">
                <Navigation />

                <main className="lg:w-[600px] md:w-[580px] md:mr-4 border-x border-zinc-800 min-h-screen">
                    <div className="p-2 px-4 border-b border-zinc-800 font-bold text-xl sticky top-0 z-10 bg-black/88 ">
                        <div className='flex'>
                            <BackButton />

                            <div className='ml-1 mt-2'>
                                <div>More</div>
                            </div>
                        </div>
                    </div>

                    <div className='px-5 pt-6 pb-5 border-b border-zinc-800'>
                        <div className='text-2xl'>Display</div>
                        <div className='text-gray-600 itali'>Manage your accent and background.</div>
                    </div>

                    <div className='px-5 mt-4 border-b border-zinc-800'>
                        <div className='text-2xl'>Accent</div>

                        <div className='px-10'>
                            <div className="grid grid-cols-3 sm:grid-cols-6 gap-4 p-3 pb-5 ">
                                {accents.map((item) => (
                                    <div
                                        key={item.id}
                                        className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-white text-lg font-bold shadow-md"
                                        style={{ backgroundColor: item.color }}
                                    >
                                        <Check className='stroke-[3]' />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className='px-5 mt-4'>
                        <div className='text-2xl'>Background</div>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-3 pb-5">
                            {/* White theme section */}
                            <div className="bg-white text-black p-4 rounded-md border">
                                <div className="grid grid-cols-1 gap-4 ">
                                    <div className='flex gap-1'>
                                        <Circle />
                                        <div>White</div>
                                    </div>

                                </div>
                            </div>

                            {/* Dim theme section */}
                            <div className="bg-[#15202B] text-white p-4 rounded-md border">
                                <div className="grid grid-cols-1 gap-4">
                                    <div className='flex gap-1'>
                                        <CircleCheck />
                                        <div>Dim</div>
                                    </div>
                                </div>
                            </div>

                            {/* Lights out theme section */}
                            <div className="bg-black text-white p-4 rounded-md border">
                                <div className="grid grid-cols-1 gap-4">
                                    <div className='flex gap-1'>
                                        <Circle />
                                        <div>Lights Out</div>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </main>

                <Sidebar />
            </div>
        </div>
    )
}
