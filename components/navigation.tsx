import React from 'react'
import { Button } from "@/components/ui/button"
import { Home, Search, Bell, Mail, User, MoreHorizontal, MessageCircle, Heart, Repeat, Upload, CheckCircle, Send } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function Navigation() {

    const nav = [
        { id: 1, icon: Home, name: 'Home' },
        { id: 2, icon: Search, name: 'Explore' },
        { id: 3, icon: Bell, name: 'Notifications' },
        { id: 4, icon: Mail, name: 'Messages' },
        { id: 5, icon: User, name: 'Profile' },
        { id: 6, icon: MoreHorizontal, name: 'More' }
    ]

    return (
        <div>
            <aside className="xl:w-[280px] lg:w-[140px] md:w-[90px] sm:w-[90px] p-4 lg:pl-15 md:pl-6">
                <div className="space-y-4 sticky top-0">
                    <div className="text-2xl font-bold mb-6 sm:mx-auto">🐦</div>
                    <nav className="space-y-2">

                        {nav.map((item) => {
                            const Icon = item.icon
                            return (
                                <div className="flex py-3 " key={item.id}>
                                    <Icon className=" lg:w-8 lg:h-8 md:w-8 md:h-8 sm:w-6 sm:h-6 " />
                                    <div className="w-full justify-start text-xl hidden xl:block ml-2" style={{ marginTop: '-1px' }} >
                                        {item.name}
                                    </div>
                                </div>
                            )
                        })}

                        <Button className="xl:w-full md:w-5/8 rounded-4xl xl:p-6 lg:p-5 md:p-5 text-xl text-black bg-white">
                            {/* Show text on large screens */}
                            <span className="hidden xl:inline font-bold">Chirp</span>

                            {/* Show icon on medium and smaller screens */}
                            <span className="inline xl:hidden">
                                <Send className="w-6 h-6" />
                            </span>
                        </Button>
                        <div className="lg:fixed bottom-0 pb-8 flex sm:mx-auto md:mt-3">
                            <Avatar className="mr-3 mt-3">
                                <AvatarImage src="https://github.com/shadcn.png" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                            <div>
                                <div className="font-bold hidden xl:block">mafa</div>
                                <div className="hidden xl:block">@mafa88</div>
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
        </div>
    )
}
