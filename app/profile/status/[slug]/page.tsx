"use client"
import React, { useEffect, useRef } from 'react'
import { Button } from '@/components/ui/button'
import { Home, Search, BadgeCheck, ArrowLeft, CalendarDays, MoreHorizontal, MessageCircleMore, Heart, Repeat2, Upload, } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Navigation from '@/components/navigation'
import Sidebar from '@/components/sidebar'
import BackButton from '@/components/backbutton'
import { Separator } from "@/components/ui/separator"
import Chirping from '@/components/chirping'
import Interactive from '@/components/interactive'
import Link from 'next/link'
import Chirp from '@/components/chirp'
import { useParams } from 'next/navigation'
import Loader from '@/components/loader'
import { useSingleChirp } from '@/hooks/useChirps'
import { useFetchComments } from '@/hooks/useComment'
import { useAuthStore } from '@/store/authStore'
import { LoginDialog, LoginDialogHandle } from '@/components/LoginDialog'
import renderMentions from '@/functions/mentions'
import RenderMentions from '@/functions/mentions'
import { toast } from "sonner"

export default function Status() {
    const params = useParams()
    const slug = Array.isArray(params.slug) ? params.slug[0] : params.slug;

    const chirpId = slug ?? "";

    const { data, isLoading, error } = useSingleChirp(chirpId)

    const { data: comments, isLoading: commentsLoading, error: commentsError } = useFetchComments(chirpId)
    console.log(comments)
    const loggedInUser = useAuthStore((state) => state.user)

    const dialogRef = useRef<LoginDialogHandle>(null);


    if (error || commentsError) {
        toast("Failed to get chirps", {
            style: {
                background: 'red',
                border: 'none',
                textAlign: "center",
                justifyContent: "center"
            }
        })
    }

    const rawDate = data?.dateposted;

    const formattedDate = rawDate
        ? `${new Intl.DateTimeFormat("en-US", {
            hour: "numeric",
            minute: "numeric",
            hour12: true,
        }).format(new Date(rawDate))} · ${new Intl.DateTimeFormat("en-GB", {
            day: "numeric",
            month: "short",
            year: "numeric",
        }).format(new Date(rawDate))}`
        : null;

    return (
        <div className="flex justify-center min-h-screen">
            <div className="flex w-full max-w-7xl">
                <Navigation />

                <main className="w-full xl:w-[600px] lg:w-[560px] md:w-[580px] sm:w-[590px] xs:w-[20px] md:mr-4 border-x  min-h-screen">
                    <div className="p-2 px-4   font-bold text-xl sticky top-0 z-10">
                        <div className='flex z-10 pb-2' style={{ backgroundColor: 'rgba(var(--background-header), 0.63)', backdropFilter: 'blur(8px)', backgroundBlendMode: 'hard-light' }}>
                            <BackButton />

                            <div className='ml-1 mt-2 ' >
                                <div>Chirp</div>
                            </div>
                        </div>
                    </div>

                    {isLoading ? <Loader /> :
                        <div>
                            <div className='px-5  border-b ' key={data?.user.username}>
                                <div className='flex'>
                                    <Link href={`/profile/${data?.user.username}`}>
                                        <Avatar className="mr-3 mt-3 h-10 w-10">
                                            <AvatarImage src={`https://robohash.org/${data?.user.username}.png?set=set5`} className='' />
                                            <AvatarFallback>CN</AvatarFallback>
                                        </Avatar>
                                    </Link>

                                    <div className=''>
                                        <div className='flex mt-2'>
                                            <Link href={`/profile/${data?.user.username}`} className=' font-bold hover:underline'>{data?.user.fullname}</Link>
                                            <div className='font-bold'><BadgeCheck className='fill-blue-400 text-black' /></div>
                                        </div>

                                        <div className='text-gray-500 text-md'>@{data?.user.username}</div>
                                    </div>
                                </div>

                                <div className='mt-4'><RenderMentions text={data?.content} /></div>
                                <div className='mt-4 text-gray-500 border-b  pb-4'>{formattedDate}</div>

                                <div className='border-b  pb-2'>
                                    <Interactive
                                        chirpId={data?.id}
                                        comments={data?.comments}
                                        reposts={data?.retweets}
                                        likes={data?.likes}
                                        isLikedByMe={data?.isLikedByMe}
                                        isRepostedByMe={data?.isRetweetByMe}
                                        fullname={data?.user.fullname}
                                    />
                                </div>

                                {loggedInUser?.loggedin ?
                                    <div className='pb-2'>
                                        <Chirping isComment={true} onSuccess={() => { }} chirpId={data?.id} username={data?.user.username} />
                                    </div>
                                    :
                                    null}

                            </div>


                        </div>
                    }

                    {loggedInUser?.loggedin ?
                        commentsLoading ? <div className='mt-8'><Loader /> </div> :

                            comments.map((item: any) => (
                                <Chirp
                                    key={item.id}
                                    id={item.id}
                                    username={item.user.fullname}
                                    isVerified={false}
                                    atname={item.user.username}
                                    date={item.date}
                                    chirp={item.content}
                                    comments={'0'}
                                    reposts={0}
                                    likes={0}
                                    isLikedByMe={false}
                                    isRepostedByMe={false}
                                    originalChirpId={data?.id}
                                    isFollowedByMe={data?.isFollowedByMe}
                                />
                            ))
                        :
                        isLoading ? null :
                            data?.comments > 0 ?
                                <div className='px-5 p-3  border-b '>
                                    <div className='p-2 px-5 font-bold border rounded-2xl cursor-pointer flex ' style={{ backgroundColor: 'var(--border)', color: 'var(--text)' }} onClick={() => dialogRef.current?.show('')}>
                                        <div><MessageCircleMore /></div>
                                        <div className='ml-1'>Read {data?.comments} {data?.comments > 1 ? 'replies' : 'reply'}</div>
                                    </div>
                                </div>
                                : null

                    }




                </main>
                <LoginDialog ref={dialogRef} fullname={data?.user.fullname} />

                <Sidebar />
            </div>
        </div>
    )
}
