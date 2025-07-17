"use client"
import { useEffect, useRef, useState } from "react"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Circle } from "lucide-react"
import { validateChirp } from "@/functions/validate"
import { Progress } from "@/components/ui/progress"
import { useThemeStore } from "@/store/themeStore"
import { useCreateChirps } from "@/hooks/useChirps"
import { useComment } from "@/hooks/useChirps"
import { useAuthStore } from '@/store/authStore'
import { useLogout } from '@/hooks/useLogout'
import { toast } from "sonner"

interface ChirpType {
    isComment?: boolean
    onSuccess: () => void
    chirpId: string
    username: string
}

export default function Chirping({ onSuccess, isComment = false, chirpId, username }: ChirpType) {
    const { accent, theme } = useThemeStore()
    const { mutate: regularChirp, isPending: regularChirpPending } = useCreateChirps()
    const { mutate: commentChirp, isPending: commentChirpPending } = useComment(chirpId)

    const loggedInUser = useAuthStore((state) => state.user)

    const [content, setContent] = useState("")
    const [progress, setProgress] = useState(0)
    const [progressActive, setProgressActive] = useState(false);
    const [commentReply, setCommentReply] = useState(false);
    const textareaRef = useRef<HTMLTextAreaElement | null>(null)

    const auth = useAuthStore();
    const { mutate: logout } = useLogout()

    useEffect(() => {
        if (textareaRef.current) {
            textareaRef.current.style.height = "auto"
            textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`
        }
    }, [content])

    const startFakeProgress = () => {
        setProgress(0);
        setProgressActive(true);

        let value = 0;
        const interval = setInterval(() => {
            value += Math.random() * 10; // randomly bump progress
            if (value < 95) {
                setProgress(Math.floor(value));
            } else {
                clearInterval(interval);
            }
        }, 200);

        return interval;
    };


    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const fakeProgressInterval = startFakeProgress();
        setCommentReply(false)

        const error = validateChirp(content)
        if (error) {
            console.log('Error: ', error)
            return
        }

        if (isComment) {
            // console.log('comment')
            commentChirp({ chirpId, content },
                {
                    onSuccess: () => {
                        setContent('');
                        onSuccess(); // close dialog
                        setProgress(100);
                        setProgressActive(false);

                        toast("Your chirp has been sent", {
                            style: {
                                background: accent,
                                border: 'none',
                                textAlign: "center",
                                justifyContent: "center"
                            }
                        })
                    },
                    onError: (error: any) => {
                        clearInterval(fakeProgressInterval);
                        setProgressActive(false);
                        setProgress(0);

                        const status = error?.response?.status

                        if (status === 401) {
                            auth.logout()
                            logout()
                        } else {
                            toast("An error occured", {
                                style: {
                                    background: 'red',
                                    border: 'none',
                                    textAlign: "center",
                                    justifyContent: "center"
                                }
                            })
                        }
                    },
                })

        } else {
            // console.log('regular tweet')
            regularChirp(content,
                {
                    onSuccess: () => {
                        toast("Your chirp has been sent", {
                            style: {
                                background: accent,
                                border: 'none',
                                textAlign: "center",
                                justifyContent: "center"
                            }
                        })
                        setContent('');
                        onSuccess(); // close dialog
                        setProgress(100);
                        setProgressActive(false);

                    },
                    onError: (error: any) => {
                        clearInterval(fakeProgressInterval);
                        setProgressActive(false);
                        setProgress(0);

                        const status = error?.response?.status

                        if (status === 401) {
                            auth.logout()
                            logout()
                        } else {
                            toast("An error occured", {
                                style: {
                                    background: 'red',
                                    border: 'none',
                                    textAlign: "center",
                                    justifyContent: "center"
                                }
                            })
                        }
                    },
                })
        }


    }


    return (
        <div>
            {regularChirpPending || commentChirpPending &&
                <Progress value={progress} className={`w-full h-1 group bg-muted relative overflow-hidden transition ease-in-out 3s`} style={{ backgroundColor: accent }} />
            }

            {commentReply ? isComment ?
                <div className="ml-10 text-gray-500 text-md">Replying to <span style={{ color: accent }}>@{username}</span></div>
                :
                null : null}

            <div className="flex gap-3 sm:grid sm:grid-cols-14 sm:gap-1">
                <div className="sm:col-span-1">
                    <Avatar className="mt-3" style={{ border: '0px white solid' }}>
                        <AvatarImage src={`https://robohash.org/${loggedInUser?.username}.png?set=set5`} />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                </div>


                <div className="flex-1 sm:col-span-13">
                    <form onSubmit={handleSubmit}>

                        <textarea
                            ref={textareaRef}
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            className="border-none w-full focus:outline-none mt-3 resize-none text-[40px]"
                            style={{ fontSize: '22px' }}
                            placeholder={isComment ? 'Post your reply' : 'What\'s happening?'}
                            maxLength={280}
                            onFocus={() => setCommentReply(true)}
                        />

                        <Separator className="bg-zinc-700 mt-4" />

                        <div className="flex justify-end w-full">
                            <div className="mr-1 mt-4" hidden={!content}>{content.length}</div>

                            {!content ? null :
                                content.length == 280 ? (
                                    <Circle className="mt-4 mr-1 w-7 h-6 text-red-700 fill-red-700" />
                                ) : content.length > 250 ? (
                                    <Circle className="mt-4 mr-1 w-7 h-6 text-orange-600" />
                                ) : content.length > 200 ? (
                                    <Circle className="mt-4 mr-1 w-7 h-6 text-amber-500" />
                                ) : content.length > 150 ? (
                                    <Circle className="mt-4 mr-1 w-7 h-6 text-yellow-400" />
                                ) : content.length > 100 ? (
                                    <Circle className="mt-4 mr-1 w-7 h-6 text-yellow-300" />
                                ) : (
                                    <Circle className={`mt-4 mr-1 w-7 h-6 ${theme === 'light' ? 'text-gray-500' : 'text-white'}`} />
                                )
                            }

                            <Button
                                className=" hover:cursor-pointer font-bold rounded-2xl mt-2"
                                style={{ backgroundColor: 'var(--button)', color: 'var(--background)' }}
                                disabled={!content || regularChirpPending || commentChirpPending}
                            >
                                Chirp
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
