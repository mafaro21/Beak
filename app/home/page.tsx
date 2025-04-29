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
                        profile={'https://pbs.twimg.com/profile_images/1893803697185910784/Na5lOWi5_400x400.jpg'}
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
                        profile={'https://pbs.twimg.com/profile_images/1777309431119650816/SDDD6BDy_400x400.jpg'}
                        username={'ryan'}
                        isVerified={false}
                        atname={'ryangaur'}
                        date={'Apr 19, 2025'}
                        chirp={'Twitter has some of the most dedicated haters on the planet and not one of them is talking down on Sinners lmao'}
                        comments={'84'}
                        reposts={'2.5k'}
                        likes={'16K'}
                    />

                    <Chirp
                        profile={'https://pbs.twimg.com/profile_images/1887180899667570688/Pmm5Sv_4_400x400.jpg'}
                        username={'Chow'}
                        isVerified={false}
                        atname={'_chowderr_'}
                        date={'Apr 19, 2025'}
                        chirp={'See how Muslims let y\'all do Easter in peace? See how unbothered we are that y\'all are searching for rabbit eggs and rabbits don\'t even lay eggs??'}
                        comments={'2.3K'}
                        reposts={'14K'}
                        likes={'176K'}
                    />
                    <Chirp
                        profile={'https://pbs.twimg.com/profile_images/1478227815333969920/4lTpR0An_400x400.jpg'}
                        username={'$𝔩𝔞𝔭'}
                        isVerified={true}
                        atname={'slvppy'}
                        date={'5m'}
                        chirp={'i hope the mf who let me borrow a pencil in middle school is doing good'}
                        comments={'3'}
                        reposts={'9'}
                        likes={'24'}
                    />

                    <Chirp
                        profile={'https://pbs.twimg.com/profile_images/1695101275979878400/CJolpuC2_400x400.jpg'}
                        username={'Mr Brute'}
                        isVerified={false}
                        atname={'BuddyNoLove'}
                        date={'Apr 10, 2025'}
                        chirp={'One of my favorite human interactions is being able to just look at someone and know yall noticed the same thing and bust out laughing without saying a word.'}
                        comments={'83'}
                        reposts={'10.5k'}
                        likes={'54K'}
                    />

                    <Chirp
                        profile={'https://pbs.twimg.com/profile_images/1886484614774185984/GZTSDxAs_400x400.jpg'}
                        username={'Sarah Stock'}
                        isVerified={true}
                        atname={'sarahcstock'}
                        date={'21h'}
                        chirp={'I want to live in a high trust community with ice cream trucks, lemonade stands and kids who play outside'}
                        comments={'2K'}
                        reposts={'1.4K'}
                        likes={'76K'}
                    />
                    <Chirp
                        profile={'https://pbs.twimg.com/profile_images/1912849491637706752/_8EuMbGQ_400x400.jpg'}
                        username={''}
                        isVerified={false}
                        atname={'ppyowna'}
                        date={'Apr 19'}
                        chirp={'the confidence you get when your hair looks good >>>>>>>>>>>'}
                        comments={'55'}
                        reposts={'19K'}
                        likes={'24K'}
                    />

                    <Chirp
                        profile={'https://pbs.twimg.com/profile_images/1893803697185910784/Na5lOWi5_400x400.jpg'}
                        username={'MS.JAZZY'}
                        isVerified={false}
                        atname={'MsJazzybelle'}
                        date={'Apr 10, 2025'}
                        chirp={'I knew the job market was fried when I had a interviewer ask me why I had a gap on my resume between 2020-2021……I let them think about what was going on around that time'}
                        comments={'183'}
                        reposts={'9.5k'}
                        likes={'84K'}
                    />

                    <Chirp
                        profile={'https://pbs.twimg.com/profile_images/1893803697185910784/Na5lOWi5_400x400.jpg'}
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
                        profile={'https://pbs.twimg.com/profile_images/1893803697185910784/Na5lOWi5_400x400.jpg'}
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
                        profile={'https://pbs.twimg.com/profile_images/1893803697185910784/Na5lOWi5_400x400.jpg'}
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
                        profile={'https://pbs.twimg.com/profile_images/1893803697185910784/Na5lOWi5_400x400.jpg'}
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
                        profile={'https://pbs.twimg.com/profile_images/1893803697185910784/Na5lOWi5_400x400.jpg'}
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
                        profile={'https://pbs.twimg.com/profile_images/1893803697185910784/Na5lOWi5_400x400.jpg'}
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
                        profile={'https://pbs.twimg.com/profile_images/1893803697185910784/Na5lOWi5_400x400.jpg'}
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
                        profile={'https://pbs.twimg.com/profile_images/1893803697185910784/Na5lOWi5_400x400.jpg'}
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
                        profile={'https://pbs.twimg.com/profile_images/1893803697185910784/Na5lOWi5_400x400.jpg'}
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
                        profile={'https://pbs.twimg.com/profile_images/1893803697185910784/Na5lOWi5_400x400.jpg'}
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
