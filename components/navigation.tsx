"use client"
import React, { useEffect, useState } from 'react'
import { Button } from "@/components/ui/button"
import { Home, Search, Bell, Mail, User, MoreHorizontal, MessageCircle, Heart, Repeat2, Upload, CheckCircle, Feather } from "lucide-react"
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
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { Separator } from "@/components/ui/separator"
import beak from '@/public/beak.png'
import Link from 'next/link'
import Chirping from './chirping'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import { useAuthStore } from '@/store/authStore'
import { useLogout } from '@/hooks/useLogout'
import { useRouter } from 'next/navigation'


export default function Navigation() {

    const [open, setOpen] = useState(false);

    const pathname = usePathname()
    const auth = useAuthStore();
    const router = useRouter()

    const { mutate: logout, isPending } = useLogout()

    const loggedInUser = useAuthStore((state) => state.user)

    const nav = [
        { id: 1, link: '/home', icon: Home, name: 'Home' },
        { id: 2, link: '/explore', icon: Search, name: 'Explore' },
        { id: 3, link: '', icon: Bell, name: 'Notifications' },
        { id: 4, link: '', icon: Mail, name: 'Messages' },
        { id: 5, link: `/profile/${loggedInUser?.username}`, icon: User, name: 'Profile' },
        { id: 6, link: '/more', icon: MoreHorizontal, name: 'More' }
    ]

    const handleOpenChange = (newState: boolean) => {
        // console.log("Dialog state changing to:", newState);
        setOpen(newState);
    };

    const handleLogout = () => {
        if (isPending) return

        auth.logout()
        logout()
        router.push('/login')
    }

    return (
        <div>
            <aside className="sticky top-0 xl:w-[300px] lg:w-[120px] md:w-[90px] sm:w-[70px] xs:w-[20px] p-4  overflow-y-auto max-h-[calc(100vh-10px)]">
                <div className="space-y-4 " style={{ marginTop: '-30px' }}>
                    <Link href={'/home'} className="text-2xl font-bold pl-2  sm:mx-auto">
                        <Image alt='beak logo' src={beak} height={'40'} className='ml-2 bg-black rounded-4xl' />
                    </Link>
                    <nav className="space-y-2 mt-5">

                        {!loggedInUser?.loggedin ? null :
                            nav.map((item) => {
                                const Icon = item.icon
                                return (
                                    <div key={item.id}>
                                        {pathname === item.link ?
                                            <Link href={item.link} className="flex py-2 pl-3 mt-2 hover:cursor-pointer rounded-4xl link"
                                                key={item.id}>
                                                <Icon className=" lg:w-8 lg:h-8 md:w-8 md:h-8 sm:w-6 sm:h-6 stroke-[3.5]" />
                                                <div className="w-full justify-start text-xl hidden xl:block ml-3 font-extrabold" style={{ marginTop: '-1px' }} >
                                                    {item.name}
                                                </div>
                                            </Link>
                                            :
                                            <Link href={item.link} className="flex py-2 pl-3 mt-2 hover:cursor-pointer rounded-4xl link"
                                                key={item.id}>
                                                <Icon className=" lg:w-8 lg:h-8 md:w-8 md:h-8 sm:w-6 sm:h-6" />
                                                <div className="w-full justify-start text-xl hidden xl:block ml-3" style={{ marginTop: '-1px' }} >
                                                    {item.name}
                                                </div>
                                            </Link>
                                        }

                                    </div>

                                )
                            })}


                        {!loggedInUser?.loggedin ? null :
                            <div>

                                <Dialog open={open} onOpenChange={handleOpenChange}>
                                    <DialogTrigger asChild>
                                        <Button className="xl:w-full md:w-5/8 rounded-4xl xl:p-6 lg:p-6 md:p-5 text-xl hover:cursor-pointer"
                                            style={{ backgroundColor: 'var(--button)', color: 'var(--background)' }}
                                            onClick={() => setOpen(true)}
                                        >
                                            {/* Show text on large screens */}
                                            <span className="hidden xl:inline font-bold">Chirp</span>

                                            {/* Show icon on medium and smaller screens */}
                                            <span className="inline xl:hidden">
                                                <Feather className="w-6 h-6" />
                                            </span>
                                        </Button>
                                    </DialogTrigger>

                                    <DialogContent className="sm:max-w-[620px] px-5  rounded-2xl">
                                        <DialogTitle></DialogTitle>
                                        <Chirping isComment={false} onSuccess={() => setOpen(false)} chirpId='' username='' />
                                    </DialogContent>
                                </Dialog>

                                <div>
                                    <Popover>
                                        <PopoverTrigger asChild>
                                            <div className="xl:w-1/8 lg:fixed bottom-0 pb-3 pt-1 flex sm:mx-auto md:mt-3 link px-4 rounded-4xl cursor-pointer">
                                                <Avatar className="mr-3 mt-3">
                                                    <AvatarImage src={`https://robohash.org/${loggedInUser?.username}.png?set=set5`} />
                                                    <AvatarFallback>CN</AvatarFallback>
                                                </Avatar>
                                                <div>
                                                    <div className="font-bold hidden xl:block mr-6">{loggedInUser ? loggedInUser.fullname : null}</div>
                                                    <div className="hidden xl:block">@{loggedInUser ? loggedInUser.username : null}</div>
                                                </div>
                                            </div>
                                        </PopoverTrigger>

                                        <PopoverContent style={{ backgroundColor: 'var(--background)', color: 'var(--text)', boxShadow: '0 0 8px rgba(255, 255, 255, 0.4)' }} side="bottom" align="start" >

                                            <div className="font-bold hover:cursor-pointer " onClick={handleLogout} >Log Out @{loggedInUser?.username}</div>

                                        </PopoverContent>


                                    </Popover>
                                </div>
                            </div>

                        }
                    </nav>
                </div>
            </aside>
        </div>
    )
}
