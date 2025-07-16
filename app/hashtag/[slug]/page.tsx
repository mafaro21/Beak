"use client"
import BackButton from '@/components/backbutton'
import Navigation from '@/components/navigation'
import Sidebar from '@/components/sidebar'
import React from 'react'
import { useParams } from 'next/navigation'
import { useHashtagChirp } from '@/hooks/useChirps'
import { useLogout } from '@/hooks/useLogout'
import { useAuthStore } from '@/store/authStore'
import { toast } from "sonner"
import Loader from '@/components/loader'
import Chirp from '@/components/chirp'

export default function Hashtag() {
    const params = useParams()
    const slug = Array.isArray(params.slug) ? params.slug[0] : params.slug;

    const tag = slug ?? "";
    const { mutate: logout, isPending: pendingLogout } = useLogout()
    const auth = useAuthStore();

    const { data, isLoading, error } = useHashtagChirp(tag)

    // console.log(error?.response.status)



    // if (status === 401) {
    //     auth.logout()
    //     logout()
    // }else if(status === 404){

    // }
    //  else {
    //     toast("An error occured", {
    //         style: {
    //             background: 'red',
    //             border: 'none',
    //             textAlign: "center",
    //             justifyContent: "center"
    //         }
    //     })
    // }

    return (
        <>
            <div className="flex justify-center min-h-screen max-w-100vw">
                <div className="flex w-full max-w-7xl">
                    <Navigation />

                    <main className="xl:w-[600px] lg:w-[560px] md:w-[580px] sm:w-[590px] xs:w-[20px] md:mr-4 border-x min-h-screen">
                        <div className="p-2 px-4   font-bold text-xl sticky top-0 z-10">
                            <div className='flex z-10 pb-2' style={{ backgroundColor: 'rgba(var(--background-header), 0.63)', backdropFilter: 'blur(8px)', backgroundBlendMode: 'hard-light' }}>
                                <BackButton />

                                <div className='ml-1 mt-2 ' >
                                    <div>Hashtag</div>
                                </div>
                            </div>
                        </div>



                    </main>

                    <Sidebar />

                </div>
            </div>
        </>
    )
}
