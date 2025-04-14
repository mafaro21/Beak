"use client"
import React from 'react'
import { Button } from "@/components/ui/button"
import { Home, Search, Bell, Mail, User, MoreHorizontal, MessageCircle, Heart, Repeat2, Upload, CheckCircle, Send } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogFooter,
} from "@/components/ui/dialog"
import { Separator } from "@/components/ui/separator"
import Link from 'next/link'
import Chirp from './chirping'
import { usePathname } from 'next/navigation'

export default function Navigation() {

    const pathname = usePathname()
    // console.log(pathname)

    const nav = [
        { id: 1, link: '/home', icon: Home, name: 'Home' },
        { id: 2, link: '/explore', icon: Search, name: 'Explore' },
        { id: 3, link: '', icon: Bell, name: 'Notifications' },
        { id: 4, link: '', icon: Mail, name: 'Messages' },
        { id: 5, link: '/profile', icon: User, name: 'Profile' },
        { id: 6, link: '/more', icon: MoreHorizontal, name: 'More' }
    ]

    return (
        <div>
            <aside className="sticky top-0 xl:w-[300px] lg:w-[120px] md:w-[90px] sm:w-[70px] xs:w-[20px] p-4  overflow-y-auto max-h-[calc(100vh-10px)]">
                <div className="space-y-4 ">
                    <Link href={'/home'} className="text-2xl font-bold pl-2  sm:mx-auto">🐦</Link>
                    <nav className="space-y-2 mt-5">

                        {nav.map((item) => {
                            const Icon = item.icon
                            return (
                                <div key={item.id}>
                                    {pathname === item.link ?
                                        <Link href={item.link} className="flex py-2 pl-3 mt-2 hover:bg-zinc-900 hover:cursor-pointer rounded-4xl" key={item.id}>
                                            <Icon className=" lg:w-8 lg:h-8 md:w-8 md:h-8 sm:w-6 sm:h-6 stroke-[3.5]" />
                                            <div className="w-full justify-start text-xl hidden xl:block ml-3 font-extrabold" style={{ marginTop: '-1px' }} >
                                                {item.name}
                                            </div>
                                        </Link>
                                        :
                                        <Link href={item.link} className="flex py-2 pl-3 mt-2 hover:bg-zinc-900 hover:cursor-pointer rounded-4xl" key={item.id}>
                                            <Icon className=" lg:w-8 lg:h-8 md:w-8 md:h-8 sm:w-6 sm:h-6" />
                                            <div className="w-full justify-start text-xl hidden xl:block ml-3" style={{ marginTop: '-1px' }} >
                                                {item.name}
                                            </div>
                                        </Link>
                                    }

                                </div>

                            )
                        })}



                        <Dialog>
                            <DialogTrigger asChild>
                                <Button className="xl:w-full md:w-5/8 rounded-4xl xl:p-6 lg:p-6 md:p-5 text-xl text-black bg-white hover:bg-white hover:cursor-pointer">
                                    {/* Show text on large screens */}
                                    <span className="hidden xl:inline font-bold">Chirp</span>

                                    {/* Show icon on medium and smaller screens */}
                                    <span className="inline xl:hidden">
                                        <Send className="w-6 h-6" />
                                    </span>
                                </Button>
                            </DialogTrigger>

                            <DialogContent className="sm:max-w-[620px] px-5 bg-black text-white border-zinc-800 rounded-2xl">
                                <DialogTitle></DialogTitle>
                                <Chirp />
                            </DialogContent>
                        </Dialog>

                        <div className="xl:w-1/8 lg:fixed bottom-0 pb-3 pt-1 flex sm:mx-auto md:mt-3 hover:bg-gray-900 px-4 rounded-4xl">
                            <Avatar className="mr-3 mt-3">
                                <AvatarImage src="https://github.com/shadcn.png" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                            <div>
                                <div className="font-bold hidden xl:block">mafa</div>
                                <div className="hidden xl:block">@mafa88</div>
                            </div>
                        </div>
                    </nav>
                </div>
            </aside>
        </div>
    )
}
