"use client"
import Navigation from "@/components/navigation"
import Sidebar from "@/components/sidebar"
import Chirping from "@/components/chirping"
import { useRouter } from 'next/navigation';
import Chirp from "@/components/chirp"
import { useHomeChirps } from "@/hooks/useChirps"
import Loader from "@/components/loader"
import { useAuthStore } from '@/store/authStore'
import { toast } from "sonner"
import { ChirpPage } from '@/types/chirp';

export default function HomePage() {
    const router = useRouter()
    const loggedInUser = useAuthStore((state) => state.user)

    const { data, isFetchingNextPage, fetchNextPage, hasNextPage, status, error } = useHomeChirps();
    console.log(data)
    // let x = tweets?.length - 1 || 0
    // console.log(tweets[x].id)
    // console.log(tweets?.length)

    // useEffect(() => {
    //     if (!loggedInUser) {
    //         router.push('/login')
    //     }
    // }, [loggedInUser]);

    if (error) {
        toast("Failed to get chirps", {
            style: {
                background: 'red',
                border: 'none',
                color: 'white',
                textAlign: "center",
                justifyContent: "center"
            }
        })
    }


    return (
        <>

            <div className="flex justify-center min-h-screen max-w-100vw">
                <div className="flex w-full max-w-7xl">
                    <Navigation />

                    {/* Main Feed  */}
                    <main className="w-full xl:w-[600px] lg:w-[560px] md:w-[580px] sm:w-[590px] xs:w-[20px] md:mr-4 border-x min-h-screen">
                        <div className="p-4 border-b font-bold text-xl sticky top-0 z-10" style={{ backgroundColor: 'rgba(var(--background-header), 0.63)', backdropFilter: 'blur(8px)', backgroundBlendMode: 'hard-light' }}>
                            Home
                        </div>

                        {loggedInUser?.loggedin ?
                            <div className="px-4 border-b  pb-2">
                                <Chirping isComment={false} onSuccess={() => { }} chirpId={''} username={''} />
                            </div>
                            :
                            null
                        }

                        {status === 'pending' ? <div className="mt-4"><Loader /> </div> :
                            data?.pages?.map((page: any, i: number) => (
                                <div key={i}>
                                    {page.map((item: any) => (
                                        <Chirp
                                            key={item.id}
                                            id={item.id}
                                            username={item.user.fullname}
                                            isVerified={false}
                                            atname={item.user.username}
                                            date={item.dateposted}
                                            chirp={item.content}
                                            comments={item.comments}
                                            reposts={item.retweets}
                                            likes={item.likes}
                                            isLikedByMe={item.isLikedByMe}
                                            isRepostedByMe={item.isRetweetByMe}
                                            originalChirpId={''}
                                            isFollowedByMe={item.isFollowedByMe}

                                        />
                                    ))}

                                </div>

                            ))}

                        {hasNextPage && (
                            <button
                                onClick={() => fetchNextPage()}
                                disabled={isFetchingNextPage}
                                className="w-full p-2 flex justify-center items-center"
                            >
                                {isFetchingNextPage ? (
                                    <Loader />
                                ) : (
                                    <span>Load more chirps</span>
                                )}
                            </button>
                        )}


                    </main>

                    {/* Right Sidebar */}
                    <Sidebar />

                </div >
            </div >
        </>
    )
}
