"use client"
import React, { useState } from 'react'
import Navigation from '@/components/navigation'
import Sidebar from '@/components/sidebar'
import BackButton from '@/components/backbutton'
import { Circle, CircleCheck, Check } from "lucide-react"

export default function More() {

    let currentAccent = localStorage.getItem("accent") as string || '#1D9BF0'


    const [theme, setTheme] = useState(localStorage.getItem("theme"))
    const [accent, setAccent] = useState(localStorage.getItem("accent"))

    const darkMode = () => {
        localStorage.setItem("theme", "dark");
        document
            .getElementsByTagName("HTML")[0]
            .setAttribute("data-theme", localStorage.getItem("theme") as string);
        setTheme("dark")
    }

    const lightMode = () => {
        localStorage.setItem("theme", "light");
        document
            .getElementsByTagName("HTML")[0]
            .setAttribute("data-theme", localStorage.getItem("theme") as string);
        setTheme("light")
    }

    const dimMode = () => {
        localStorage.setItem("theme", "dim");
        document
            .getElementsByTagName("HTML")[0]
            .setAttribute("data-theme", localStorage.getItem("theme") as string);
        setTheme("dim")

    }

    const orangeAccent = () => {
        localStorage.setItem("accent", "#F45D22");
        document
            .getElementsByTagName("HTML")[0]
            .setAttribute("accent-theme", localStorage.getItem("accent") as string);
        setAccent("#F45D22")
    }
    const yellowAccent = () => {
        localStorage.setItem("accent", "#FFD400");
        document
            .getElementsByTagName("HTML")[0]
            .setAttribute("accent-theme", localStorage.getItem("accent") as string);
        setAccent("#FFD400")
    }

    const pinkAccent = () => {
        localStorage.setItem("accent", "#F91880");
        document
            .getElementsByTagName("HTML")[0]
            .setAttribute("accent-theme", localStorage.getItem("accent") as string);
        setAccent("#F91880")
    }

    const blueAccent = () => {
        localStorage.setItem("accent", "#1D9BF0");
        document
            .getElementsByTagName("HTML")[0]
            .setAttribute("accent-theme", localStorage.getItem("accent") as string);
        setAccent("#1D9BF0")
    }

    const greenAccent = () => {
        localStorage.setItem("accent", '#00BA7C');
        document
            .getElementsByTagName("HTML")[0]
            .setAttribute("accent-theme", localStorage.getItem("accent") as string);
        setAccent("#00BA7C")
    }

    const purpleAccent = () => {
        localStorage.setItem("accent", '#7856FF');
        document
            .getElementsByTagName("HTML")[0]
            .setAttribute("accent-theme", localStorage.getItem("accent") as string);
        setAccent("#7856FF")


    }


    const accents = [
        { id: 1, name: 'blue', color: '#1D9BF0', function: blueAccent },
        { id: 2, name: 'yellow', color: '#FFD400', function: yellowAccent },
        { id: 3, name: 'pink', color: '#F91880', function: pinkAccent },
        { id: 4, name: 'purple', color: '#7856FF', function: purpleAccent },
        { id: 5, name: 'orange', color: '#F45D22', function: orangeAccent },
        { id: 6, name: 'green', color: '#00BA7C', function: greenAccent }
    ]


    return (
        <div className="flex justify-center  min-h-screen">
            <div className="flex  lg:max-w-[2200px] md:max-w-100vw  ">
                <Navigation />

                <main className="lg:w-[600px] md:w-[580px] md:mr-4 border-x  min-h-screen">
                    <div className="p-2 px-4 border-b  font-bold text-xl sticky top-0 z-10" style={{ backgroundColor: `var(--background)` }}>
                        <div className='flex'>
                            <BackButton />

                            <div className='ml-1 mt-2'>
                                <div>More</div>
                            </div>
                        </div>
                    </div>

                    <div className='px-5 pt-6 pb-5 border-b '>
                        <div className='text-2xl '>Display</div>
                        <div className='' style={{ backgroundColor: `${accent}` }}>Manage your accent and background.</div>
                    </div>

                    <div className='px-5 mt-4 border-b '>
                        <div className='text-2xl'>Accent</div>

                        <div className='px-10'>
                            <div className="grid grid-cols-3 sm:grid-cols-6 gap-4 p-3 pb-5 ">
                                {accents.map((item) => (
                                    <div
                                        key={item.id}
                                        className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-white text-lg font-bold shadow-md hover:cursor-pointer"
                                        style={{ backgroundColor: item.color }}
                                        onClick={item.function}
                                    >
                                        {currentAccent === item.color ?
                                            <Check className='stroke-[3]' />
                                            :
                                            null
                                        }

                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className='px-5 mt-4'>
                        <div className='text-2xl'>Background</div>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-3 pb-5">
                            {/* White theme section */}
                            <div className="bg-white text-black p-5 rounded-2xl border hover:cursor-pointer" onClick={lightMode} style={{ border: `2px solid ${theme === 'light' ? accent : 'gray'}` }}>
                                <div className="grid grid-cols-1 gap-4 ">
                                    <div className='flex gap-2'>
                                        {theme === 'light' ? <CircleCheck style={{ fill: `${accent}` }} /> : <Circle />}

                                        <div>White</div>
                                    </div>

                                </div>
                            </div>

                            {/* Dim theme section */}
                            <div className="bg-[#15202B] text-white p-5 rounded-2xl border hover:cursor-pointer" onClick={dimMode} style={{ border: `2px solid ${theme === 'dim' ? accent : 'gray'}` }}>
                                <div className="grid grid-cols-1 gap-4">
                                    <div className='flex gap-2'>
                                        {theme === 'dim' ? <CircleCheck style={{ fill: `${accent}` }} /> : <Circle />}
                                        <div>Dim</div>
                                    </div>
                                </div>
                            </div>

                            {/* Lights out theme section */}
                            <div className="bg-black text-white p-5 rounded-2xl border hover:cursor-pointer" onClick={darkMode} style={{ border: `2px solid ${theme === 'dark' ? accent : 'gray'}` }}>
                                <div className="grid grid-cols-1 gap-4">
                                    <div className='flex gap-2'>
                                        {theme === 'dark' ? <CircleCheck style={{ fill: `${accent}` }} /> : <Circle />}
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
