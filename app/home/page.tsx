// app/page.tsx

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Home, Search, Bell, Mail, User, MoreHorizontal, MessageCircle, Heart, Repeat, Upload, CheckCircle } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"


export default function HomePage() {

    const nav = [
        { id: 1, icon: Home, name: 'Home' },
        { id: 2, icon: Search, name: 'Explore' },
        { id: 3, icon: Bell, name: 'Notifications' },
        { id: 4, icon: Mail, name: 'Messages' },
        { id: 5, icon: User, name: 'Profile' },
        { id: 6, icon: MoreHorizontal, name: 'More' }
    ]

    return (
        <div className="flex justify-center text-[#F7F9F9] bg-black ">
            <div className="flex w-full max-w-7xl">

                {/* Navigation Sidebar */}
                <aside className="w-[260px] p-4 hidden md:block">
                    <div className="space-y-4 sticky top-0">
                        <div className="text-2xl font-bold mb-6">🐦</div>
                        <nav className="space-y-2">

                            {nav.map((item) => {
                                const Icon = item.icon
                                return (
                                    <div className="flex py-3 " key={item.id}>
                                        <Icon className="mr-4 w-8 h-8" />
                                        <div className="w-full justify-start text-2xl" style={{ marginTop: '-2px' }}>
                                            {item.name}
                                        </div>
                                    </div>
                                )
                            })}

                            <Button className="w-full rounded-4xl p-7 text-xl text-black bg-white">Post</Button>

                            <div className="fixed bottom-0 pb-8 flex">
                                <Avatar className="mr-3 mt-3">
                                    <AvatarImage src="https://github.com/shadcn.png" />
                                    <AvatarFallback>CN</AvatarFallback>
                                </Avatar>
                                <div>
                                    <div className="font-bold">mafa</div>
                                    <div>@mafa88</div>
                                </div>
                            </div>


                            {/* <Button variant="ghost" className="w-full justify-start text-2xl py-6">
                            <Search className="mr-2 h-5 w-5" /> Explore
                        </Button>
                        <Button variant="ghost" className="w-full justify-start text-2xl py-6">
                            <Bell className="mr-2 h-5 w-5" /> Notifications
                        </Button>
                        <Button variant="ghost" className="w-full justify-start text-2xl py-6">
                            <Mail className="mr-2 h-5 w-5" /> Messages
                        </Button>
                        <Button variant="ghost" className="w-full justify-start text-2xl py-6">
                            <User className="mr-2 h-5 w-5" /> Profile
                        </Button>
                        <Button variant="ghost" className="w-full justify-start text-2xl py-6">
                            <MoreHorizontal className="mr-2 h-5 w-5" /> More
                        </Button> */}
                        </nav>
                    </div>
                </aside>

                {/* Main Feed  */}
                <main className="flex-1 max-w-2xl border-x border-zinc-700 min-h-screen">
                    <div className="p-4 border-b border-zinc-700 font-bold text-xl sticky top-0 z-10">
                        Home
                    </div>

                    <div className="grid grid-cols-14 gap-1 px-4 border-b border-t border-zinc-700 pb-2">
                        <div className="col-span-1">
                            <Avatar className="mr-3 mt-3">
                                <AvatarImage src="https://pbs.twimg.com/profile_images/1832845968061964288/O8AQKEOm_400x400.jpg" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                        </div>


                        <div className=" col-span-13">
                            <form className="text-[40px]">
                                <textarea className="border-none w-full focus:outline-none mt-3  " style={{ fontSize: '22px' }} placeholder="What's happening?" />
                                <Separator className="bg-zinc-700" />
                                <Button className="bg-white text-black font-bold rounded-2xl flex ml-auto mt-2 ">Post</Button>
                            </form>
                        </div>
                    </div>


                    <div className="grid grid-cols-14 gap-1 px-4 border-b border-t border-zinc-700 pb-4">
                        <div className="col-span-1">
                            <Avatar className="mr-3 mt-3">
                                <AvatarImage src="https://pbs.twimg.com/profile_images/1876525967855726592/K0osx53H_400x400.jpg" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                        </div>


                        <div className=" col-span-13">
                            <div className="flex justify-between w-full">
                                <div className="py-2 flex space-x-1">
                                    <div className="font-bold">Beigh</div>
                                    <div className="text-gray-500">@buhle_mdingi</div>
                                    <div className="text-gray-500">· Apr 7</div>
                                </div>

                                <div className="py-3"><MoreHorizontal className="mr-2 h-5 w-5" /></div>
                            </div>

                            <div style={{ marginTop: '-12px' }}>People who have been in long term relationships, I’m talking about 4+ years. After the breakup, do you actually ever get over the person? Like FULLY?</div>

                            <div className="mt-3 w-full flex justify-between px-4 justify-items-end" >
                                <div className="flex">
                                    <MessageCircle className="mr-1  w-4 h-4" style={{ marginTop: '3px' }} />
                                    <div className="text-sm text-gray-400">484</div>
                                </div>
                                <div className="flex">
                                    <Repeat className="mr-1  w-4 h-4" style={{ marginTop: '3px' }} />
                                    <div className="text-sm text-gray-400">1.2K</div>
                                </div>
                                <div className="flex">
                                    <Heart className="mr-1 w-4 h-4 fill-red-500 text-red-500" style={{ marginTop: '3px' }} />
                                    <div className="text-sm text-gray-400">12K</div>
                                </div>
                                <div className="flex">
                                    <Upload className="mr-1  w-4 h-4" style={{ marginTop: '3px' }} />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-14 gap-1 px-4 border-b border-t border-zinc-700 pb-4">
                        <div className="col-span-1">
                            <Avatar className="mr-3 mt-3">
                                <AvatarImage src="https://pbs.twimg.com/profile_images/1670608268635373575/EhO6tJ6V_400x400.jpg" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                        </div>


                        <div className=" col-span-13">
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

                            <div className="mt-3 w-full flex justify-between px-4 justify-items-end" >
                                <div className="flex">
                                    <MessageCircle className="mr-1  w-4 h-4" style={{ marginTop: '3px' }} />
                                    <div className="text-sm text-gray-400">5.5K</div>
                                </div>
                                <div className="flex">
                                    <Repeat className="mr-1  w-4 h-4 fill-green-500 text-green-500" style={{ marginTop: '3px' }} />
                                    <div className="text-sm text-gray-400 ">20K</div>
                                </div>
                                <div className="flex">
                                    <Heart className="mr-1 w-4 h-4 " style={{ marginTop: '3px' }} />
                                    <div className="text-sm text-gray-400">204K</div>
                                </div>
                                <div className="flex">
                                    <Upload className="mr-1  w-4 h-4" style={{ marginTop: '3px' }} />
                                </div>
                            </div>
                        </div>
                    </div>

                </main>

                {/* Right Sidebar */}
                <aside className="w-[300px] px-4 pt-2 hidden lg:block">
                    <div className="space-y-4 sticky top-0">
                        <input className="p-3 w-full rounded-2xl border-zinc-700 border" placeholder="Search" />

                        <div className="p-4 rounded-sm border border-zinc-700 font-bold">What's Happening</div>

                        <div className="p-4 rounded-sm border border-zinc-700 font-bold">Who to follow</div>

                    </div>
                </aside>

            </div >
        </div >
    )
}
