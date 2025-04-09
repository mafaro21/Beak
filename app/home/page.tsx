// app/page.tsx

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Home, Search, Bell, Mail, User, MoreHorizontal, MessageCircle, Heart, Repeat, Upload, CheckCircle } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import Navigation from "@/components/navigation"
import Sidebar from "@/components/sidebar"

export default function HomePage() {

    const nav = [
        { id: 1, icon: Home, name: 'Home' },
        { id: 2, icon: Search, name: 'Explore' },
        { id: 3, icon: Bell, name: 'Notifications' },
        { id: 4, icon: Mail, name: 'Messages' },
        { id: 5, icon: User, name: 'Profile' },
        { id: 6, icon: MoreHorizontal, name: 'More' }
    ]

    // const viewWidth = '800px'

    return (
        <div className="flex justify-center text-[#F7F9F9] bg-black min-h-screen">
            <div className="flex  lg:max-w-7xl md:max-w-md ">

                <Navigation />

                {/* Main Feed  */}
                <main className="xl:w-[600px] lg:w-[560px] md:w-[580px] md:mr-4 border-x border-zinc-800 min-h-screen">
                    <div className="p-4 border-b border-zinc-800 font-bold text-xl sticky top-0 z-10 bg-black/92 ">
                        Home
                    </div>

                    <div className="grid grid-cols-14 gap-1 px-4 border-b border-zinc-800 pb-2">
                        <div className="col-span-1 ">
                            <Avatar className="mr-3 mt-3">
                                <AvatarImage src="https://pbs.twimg.com/profile_images/1832845968061964288/O8AQKEOm_400x400.jpg" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                        </div>


                        <div className="ml-1 col-span-13">
                            <form className="text-[40px]">
                                <textarea className="border-none w-full focus:outline-none mt-3  " style={{ fontSize: '22px' }} placeholder="What's happening?" />
                                <Separator className="bg-zinc-700" />
                                <Button className="bg-white text-black font-bold rounded-2xl flex ml-auto mt-2 ">Chirp</Button>
                            </form>
                        </div>
                    </div>


                    <div className="grid grid-cols-14 gap-1 px-4 border-b  border-zinc-800 pb-3">
                        <div className="col-span-1 ">
                            <Avatar className="mr-1 mt-3">
                                <AvatarImage src="https://pbs.twimg.com/profile_images/1876525967855726592/K0osx53H_400x400.jpg" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                        </div>


                        <div className=" px-1 col-span-13">
                            <div className="flex justify-between w-full">
                                <div className="py-2 flex space-x-1">
                                    <div className="font-bold">Beigh</div>
                                    <div className="text-gray-500">@buhle_mdingi</div>
                                    <div className="text-gray-500">· Apr 7</div>
                                </div>

                                <div className="py-3"><MoreHorizontal className="mr-2 h-5 w-5" /></div>
                            </div>

                            <div style={{ marginTop: '-12px' }}>People who have been in long term relationships, I’m talking about 4+ years. After the breakup, do you actually ever get over the person? Like FULLY?</div>

                            <div className="mt-3 w-full flex justify-between px-1 justify-items-end" >
                                <div className="flex hover:text-blue-500 hover:cursor-pointer">
                                    <MessageCircle className="mr-1  w-4 h-4 " style={{ marginTop: '3px' }} />
                                    <div className="text-sm text-gray-400 hover:text-blue-500">484</div>
                                </div>
                                <div className="flex hover:text-green-500 hover:cursor-pointer">
                                    <Repeat className="mr-1  w-4 h-4" style={{ marginTop: '3px' }} />
                                    <div className="text-sm text-gray-400 hover:text-green-500">1.2K</div>
                                </div>
                                <div className="flex hover:cursor-pointer">
                                    <Heart className="mr-1 w-4 h-4 fill-pink-700 text-pink-700" style={{ marginTop: '3px' }} />
                                    <div className="text-sm text-gray-400">12K</div>
                                </div>
                                <div className="flex hover:text-blue-500 hover:bg-blue-200  hover:cursor-pointer rounded-xl">
                                    <Upload className="p-1  w-6 h-6  " style={{ marginTop: '3px' }} />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-14 gap-1 px-4 border-b border-zinc-800 pb-3">
                        <div className="col-span-1 pr-2">
                            <Avatar className="mr-3 mt-3 ">
                                <AvatarImage src="https://pbs.twimg.com/profile_images/1670608268635373575/EhO6tJ6V_400x400.jpg" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                        </div>


                        <div className="px-1 col-span-13">
                            <div className="flex justify-between w-full">
                                <div className="py-2 flex space-x-1">
                                    <div className="font-bold">Zherka</div>
                                    {/* <CheckCircle className="mr-4 w-4 h-4 fill-blue-500 text-red-500" /> */}
                                    <div className="text-gray-500">@ZherkaOfficial</div>
                                    <div className="text-gray-500">· 8h</div>
                                </div>

                                <div className="py-3"><MoreHorizontal className="mr-2 h-5 w-5" /></div>
                            </div>

                            <div style={{ marginTop: '-12px' }}>I will never understand how men hang out with women. Besides wrestling them, I cannot stand doing anything with them. Even if I love her the most, I find it mentally exhausting every single time. I can’t imagine ever living with one for longer than week. Its like adopting a child</div>

                            <div className="mt-3 w-full flex justify-between px-1 justify-items-end" >
                                <div className="flex">
                                    <MessageCircle className="mr-1  w-4 h-4" style={{ marginTop: '3px' }} />
                                    <div className="text-sm text-gray-400">5.5K</div>
                                </div>
                                <div className="flex">
                                    <Repeat className=" mr-1 w-4 h-4 fill-green-500 text-green-500" style={{ marginTop: '3px' }} />
                                    <div className="text-sm text-gray-400 ">20K</div>
                                </div>
                                <div className="flex hover:text-pink-700 hover:cursor-pointer">
                                    <Heart className="mr-1 w-4 h-4 " style={{ marginTop: '3px' }} />
                                    <div className="text-sm text-gray-400 hover:text-pink-700">204K</div>
                                </div>
                                <div className="flex">
                                    <Upload className="mr-1  w-4 h-4" style={{ marginTop: '3px' }} />
                                </div>
                            </div>
                        </div>
                    </div>

                </main>

                {/* Right Sidebar */}
                <Sidebar />

            </div >
        </div >
    )
}
