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

    return (
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


                    <Chirp
                        username={'Elon Musk'}
                        isVerified={true}
                        atname={'elonmusk'}
                        date={'Apr 28, 2022'}
                        chirp={'Next I\'m buying Coca-Cola to put the cocaine back in'}
                        comments={'355'}
                        reposts={'9835'}
                        likes={'24K'}
                    />

                    <Chirp
                        username={'MS.JAZZY'}
                        isVerified={false}
                        atname={'MsJazzybelle'}
                        date={'Apr 10, 2025'}
                        chirp={'I knew the job market was fried when I had a interviewer ask me why I had a gap on my resume between 2020-2021……I let them think about what was going on around that time'}
                        comments={'183'}
                        reposts={'9.5k'}
                        likes={'234K'}
                    />

                    <Chirp
                        username={'₭ma'}
                        isVerified={true}
                        atname={'KmaFr_'}
                        date={'Apr 11, 2025'}
                        chirp={'why do some songs just sound better while holding money'}
                        comments={'23'}
                        reposts={'14'}
                        likes={'176'}
                    />
                    <Chirp
                        username={'Elon Musk'}
                        isVerified={true}
                        atname={'elonmusk'}
                        date={'Apr 28, 2022'}
                        chirp={'Next I\'m buying Coca-Cola to put the cocaine back in'}
                        comments={'355'}
                        reposts={'9835'}
                        likes={'24K'}
                    />

                    <Chirp
                        username={'MS.JAZZY'}
                        isVerified={false}
                        atname={'MsJazzybelle'}
                        date={'Apr 10, 2025'}
                        chirp={'I knew the job market was fried when I had a interviewer ask me why I had a gap on my resume between 2020-2021……I let them think about what was going on around that time'}
                        comments={'183'}
                        reposts={'9.5k'}
                        likes={'234K'}
                    />

                    <Chirp
                        username={'₭ma'}
                        isVerified={true}
                        atname={'KmaFr_'}
                        date={'Apr 11, 2025'}
                        chirp={'why do some songs just sound better while holding money'}
                        comments={'23'}
                        reposts={'14'}
                        likes={'176'}
                    />
                    <Chirp
                        username={'Elon Musk'}
                        isVerified={true}
                        atname={'elonmusk'}
                        date={'Apr 28, 2022'}
                        chirp={'Next I\'m buying Coca-Cola to put the cocaine back in'}
                        comments={'355'}
                        reposts={'9835'}
                        likes={'24K'}
                    />

                    <Chirp
                        username={'MS.JAZZY'}
                        isVerified={false}
                        atname={'MsJazzybelle'}
                        date={'Apr 10, 2025'}
                        chirp={'I knew the job market was fried when I had a interviewer ask me why I had a gap on my resume between 2020-2021……I let them think about what was going on around that time'}
                        comments={'183'}
                        reposts={'9.5k'}
                        likes={'234K'}
                    />

                    <Chirp
                        username={'₭ma'}
                        isVerified={true}
                        atname={'KmaFr_'}
                        date={'Apr 11, 2025'}
                        chirp={'why do some songs just sound better while holding money'}
                        comments={'23'}
                        reposts={'14'}
                        likes={'176'}
                    />
                    <Chirp
                        username={'Elon Musk'}
                        isVerified={true}
                        atname={'elonmusk'}
                        date={'Apr 28, 2022'}
                        chirp={'Next I\'m buying Coca-Cola to put the cocaine back in'}
                        comments={'355'}
                        reposts={'9835'}
                        likes={'24K'}
                    />

                    <Chirp
                        username={'MS.JAZZY'}
                        isVerified={false}
                        atname={'MsJazzybelle'}
                        date={'Apr 10, 2025'}
                        chirp={'I knew the job market was fried when I had a interviewer ask me why I had a gap on my resume between 2020-2021……I let them think about what was going on around that time'}
                        comments={'183'}
                        reposts={'9.5k'}
                        likes={'234K'}
                    />

                    <Chirp
                        username={'₭ma'}
                        isVerified={true}
                        atname={'KmaFr_'}
                        date={'Apr 11, 2025'}
                        chirp={'why do some songs just sound better while holding money'}
                        comments={'23'}
                        reposts={'14'}
                        likes={'176'}
                    />
                    <Chirp
                        username={'Elon Musk'}
                        isVerified={true}
                        atname={'elonmusk'}
                        date={'Apr 28, 2022'}
                        chirp={'Next I\'m buying Coca-Cola to put the cocaine back in'}
                        comments={'355'}
                        reposts={'9835'}
                        likes={'24K'}
                    />

                    <Chirp
                        username={'MS.JAZZY'}
                        isVerified={false}
                        atname={'MsJazzybelle'}
                        date={'Apr 10, 2025'}
                        chirp={'I knew the job market was fried when I had a interviewer ask me why I had a gap on my resume between 2020-2021……I let them think about what was going on around that time'}
                        comments={'183'}
                        reposts={'9.5k'}
                        likes={'234K'}
                    />

                    <Chirp
                        username={'₭ma'}
                        isVerified={true}
                        atname={'KmaFr_'}
                        date={'Apr 11, 2025'}
                        chirp={'why do some songs just sound better while holding money'}
                        comments={'23'}
                        reposts={'14'}
                        likes={'176'}
                    />
                    <Chirp
                        username={'Elon Musk'}
                        isVerified={true}
                        atname={'elonmusk'}
                        date={'Apr 28, 2022'}
                        chirp={'Next I\'m buying Coca-Cola to put the cocaine back in'}
                        comments={'355'}
                        reposts={'9835'}
                        likes={'24K'}
                    />

                    <Chirp
                        username={'MS.JAZZY'}
                        isVerified={false}
                        atname={'MsJazzybelle'}
                        date={'Apr 10, 2025'}
                        chirp={'I knew the job market was fried when I had a interviewer ask me why I had a gap on my resume between 2020-2021……I let them think about what was going on around that time'}
                        comments={'183'}
                        reposts={'9.5k'}
                        likes={'234K'}
                    />

                    <Chirp
                        username={'₭ma'}
                        isVerified={true}
                        atname={'KmaFr_'}
                        date={'Apr 11, 2025'}
                        chirp={'why do some songs just sound better while holding money'}
                        comments={'23'}
                        reposts={'14'}
                        likes={'176'}
                    />




                </main>

                {/* Right Sidebar */}
                <Sidebar />

            </div >
        </div >
    )
}
