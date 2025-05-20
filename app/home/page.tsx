"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Home, Search, Bell, Mail, User, MoreHorizontal, MessageCircle, Heart, Repeat2, Upload, CheckCircle, BadgeCheck } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import Navigation from "@/components/navigation"
import Sidebar from "@/components/sidebar"
import Chirping from "@/components/chirping"
import Interactive from "@/components/interactive"
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import Chirp from "@/components/chirp"
import { useHomeChirps } from "@/hooks/useChirps"
import { useEffect } from "react"
import Loader from "@/components/loader"


export default function HomePage() {

    const nav = [
        { id: 1, icon: Home, name: 'Home' },
        { id: 2, icon: Search, name: 'Explore' },
        { id: 3, icon: Bell, name: 'Notifications' },
        { id: 4, icon: Mail, name: 'Messages' },
        { id: 5, icon: User, name: 'Profile' },
        { id: 6, icon: MoreHorizontal, name: 'More' }
    ]

    const router = useRouter()

    const { data: tweets, isLoading, error } = useHomeChirps();
    console.log(tweets)
    useEffect(() => {
        if (tweets) {
            console.log('Fetched tweets:', tweets);
        }
    }, [tweets]);



    return (
        <>

            <div className="flex justify-center min-h-screen max-w-100vw">

                <div className="flex  lg:max-w-100vw md:max-w-100vw ">

                    <Navigation />

                    {/* Main Feed  */}
                    <main className="xl:w-[600px] lg:w-[560px] md:w-[580px] sm:w-[590px] xs:w-[20px] md:mr-4 border-x  min-h-screen">
                        <div className="p-4 border-b  font-bold text-xl sticky top-0 z-10" style={{ backgroundColor: 'var(--background)' }}>
                            Home
                        </div>

                        <div className="px-4 border-b  pb-2">
                            <Chirping />
                        </div>

                        {isLoading ? <div className="mt-4"><Loader /> </div> :
                            tweets?.map((item: any) => (
                                <Chirp
                                    key={item.id}
                                    id={item.id}
                                    // profile={'https://pbs.twimg.com/profile_images/1893803697185910784/Na5lOWi5_400x400.jpg'}
                                    username={item.user.fullname}
                                    isVerified={false}
                                    atname={item.user.username}
                                    date={item.dateposted}
                                    chirp={item.content}
                                    comments={item.comments}
                                    reposts={item.retweets}
                                    likes={item.likes}
                                    isLikedByMe={item.isLikedByMe}
                                />
                            ))}


                    </main>

                    {/* Right Sidebar */}
                    <Sidebar />

                </div >
            </div >
        </>
    )
}
