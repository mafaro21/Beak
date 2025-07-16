"use client"
import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Home, Search, Bell, Mail, User, MoreHorizontal, Feather } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
    Dialog,
    DialogContent,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import beak from '@/public/beak.png'
import beak2 from '@/public/beak 2.png'
import Link from 'next/link'
import Chirping from './chirping'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import { useAuthStore } from '@/store/authStore'
import { useLogout } from '@/hooks/useLogout'
import { useRouter } from 'next/navigation'
import { useThemeStore } from '@/store/themeStore'


export default function Navigation() {

    const [open, setOpen] = useState(false);

    const pathname = usePathname()
    const auth = useAuthStore();
    const router = useRouter()

    const { mutate: logout, isPending } = useLogout()

    const loggedInUser = useAuthStore((state) => state.user)

    const { theme } = useThemeStore()

    const nav = [
        { id: 1, link: '/home', icon: Home, name: 'Home' },
        { id: 2, link: '/explore', icon: Search, name: 'Explore' },
        { id: 3, link: '', icon: Bell, name: 'Notifications' },
        { id: 4, link: '/messages', icon: Mail, name: 'Messages' },
        { id: 5, link: `/profile/${loggedInUser?.username}`, icon: User, name: 'Profile' },
        { id: 6, link: '/more', icon: MoreHorizontal, name: 'More' }
    ]

    const handleOpenChange = (newState: boolean) => {
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
            <aside className="sticky top-0 h-screen flex flex-col justify-between px-1 py-4 lg:w-[88px] xl:w-[260px]">
                {/* Top: Logo and Navigation */}
                <div>
                    {/* Logo */}
                    <Link href="/home" className="flex items-center justify-center xl:justify-start px-2 mb-6">
                        <Image
                            alt="beak logo"
                            src={theme === 'light' ? beak2 : beak}
                            width={32}
                            height={32}
                            priority
                            className="w-auto h-8" // max height control
                        />
                    </Link>

                    {/* Navigation */}
                    <nav className="space-y-2 flex flex-col items-center xl:items-start">
                        {loggedInUser?.loggedin &&
                            nav.map((item) => {
                                const Icon = item.icon;
                                const isActive = pathname === item.link;

                                return (
                                    <Link
                                        href={item.link}
                                        key={item.id}
                                        className={`flex items-center px-2 py-2 gap-4 rounded-4xl transition-colors link ${isActive ? 'font-extrabold' : ''}`}
                                    >
                                        <Icon className={`w-6 h-6 lg:w-7 lg:h-7 ${isActive ? 'stroke-4' : ''} `} />
                                        <span className="hidden xl:inline text-lg">{item.name}</span>
                                    </Link>
                                );
                            })}
                    </nav>

                    {/* Chirp Button */}
                    {loggedInUser?.loggedin && (
                        <Dialog open={open} onOpenChange={handleOpenChange}>
                            <DialogTrigger asChild>
                                <Button
                                    className="mt-5 xl:w-full flex items-center justify-center gap-2 rounded-4xl xl:p-6 lg:p-5 md:p-4 text-base cursor-pointer"
                                    style={{ backgroundColor: 'var(--button)', color: 'var(--background)' }}
                                    onClick={() => setOpen(true)}
                                >
                                    <span className="hidden xl:inline font-bold">Chirp</span>
                                    <span className="inline xl:hidden">
                                        <Feather className="w-5 h-5" />
                                    </span>
                                </Button>
                            </DialogTrigger>

                            <DialogContent className="sm:max-w-[620px] px-5 rounded-2xl">
                                <DialogTitle />
                                <Chirping isComment={false} onSuccess={() => setOpen(false)} chirpId="" username="" />
                            </DialogContent>
                        </Dialog>
                    )}
                </div>

                {/* Bottom: User Profile */}
                {loggedInUser?.loggedin && (
                    <Popover>
                        <PopoverTrigger asChild>
                            <div className="flex items-center gap-3 px-2 py-2 rounded-4xl link cursor-pointer">
                                <Avatar>
                                    <AvatarImage src={`https://robohash.org/${loggedInUser?.username}.png?set=set5`} />
                                    <AvatarFallback>CN</AvatarFallback>
                                </Avatar>
                                <div className="hidden xl:block leading-tight">
                                    <div className="font-bold">{loggedInUser?.fullname}</div>
                                    <div className="text-sm text-muted">@{loggedInUser?.username}</div>
                                </div>
                            </div>
                        </PopoverTrigger>

                        <PopoverContent
                            side="top"
                            align="start"
                            style={{
                                backgroundColor: 'var(--background)',
                                color: 'var(--text)',
                                boxShadow: '0 0 8px rgba(255, 255, 255, 0.4)',
                            }}
                        >
                            <div className="font-bold cursor-pointer" onClick={handleLogout}>
                                Log Out @{loggedInUser?.username}
                            </div>
                        </PopoverContent>
                    </Popover>
                )}
            </aside>


        </div>
    )
}
