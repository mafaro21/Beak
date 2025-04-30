"use client"
import { useEffect, useRef, useState } from "react"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Circle, CircleAlert, CircleStop } from "lucide-react"
import { validateChirp } from "@/functions/validate"
import { Progress } from "@/components/ui/progress"
import { useThemeStore } from "@/store/themeStore"

export default function Chirping() {
    const { accent, theme } = useThemeStore()

    const [text, setText] = useState("")
    const textareaRef = useRef<HTMLTextAreaElement | null>(null)

    useEffect(() => {
        if (textareaRef.current) {
            textareaRef.current.style.height = "auto"
            textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`
        }
    }, [text])

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const error = validateChirp(text)
        if (error) {
            console.log('Error: ', error)
            return
        }

        console.log(text)
    }


    return (
        <div>
            <Progress value={60} className={`w-full h-1 group bg-muted relative overflow-hidden`} style={{ backgroundColor: accent }} />
            <div className="flex gap-3 sm:grid sm:grid-cols-14 sm:gap-1">
                <div className="sm:col-span-1">
                    <Avatar className="mt-3">
                        <AvatarImage src="https://pbs.twimg.com/profile_images/1832845968061964288/O8AQKEOm_400x400.jpg" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                </div>


                <div className="flex-1 sm:col-span-13">
                    <form onSubmit={handleSubmit}>

                        <textarea
                            ref={textareaRef}
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                            className="border-none w-full focus:outline-none mt-3 resize-none text-[40px]"
                            style={{ fontSize: '22px' }}
                            placeholder="What's happening?"
                            maxLength={280}
                        />

                        <Separator className="bg-zinc-700 mt-4" />

                        <div className="flex justify-end w-full">
                            <div className="mr-1 mt-4" hidden={!text}>{text.length}</div>

                            {!text ? null :
                                text.length == 280 ? (
                                    <Circle className="mt-4 mr-1 w-7 h-6 text-red-700 fill-red-700" />
                                ) : text.length > 250 ? (
                                    <Circle className="mt-4 mr-1 w-7 h-6 text-orange-600" />
                                ) : text.length > 200 ? (
                                    <Circle className="mt-4 mr-1 w-7 h-6 text-amber-500" />
                                ) : text.length > 150 ? (
                                    <Circle className="mt-4 mr-1 w-7 h-6 text-yellow-400" />
                                ) : text.length > 100 ? (
                                    <Circle className="mt-4 mr-1 w-7 h-6 text-yellow-300" />
                                ) : (
                                    <Circle className={`mt-4 mr-1 w-7 h-6 ${theme === 'light' ? 'text-gray-500' : 'text-white'}`} />
                                )
                            }

                            <Button
                                className=" hover:cursor-pointer font-bold rounded-2xl mt-2"
                                style={{ backgroundColor: 'var(--button)', color: 'var(--background)' }}
                                disabled={!text}
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
